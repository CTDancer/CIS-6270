(function () {
  "use strict";

  const data = window.COURSE_DATA;
  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  function externalLink(url, label, className = "text-link") {
    return `<a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}<span aria-hidden="true"> ↗</span><span class="sr-only"> (opens in a new tab)</span></a>`;
  }

  function materialDates(lecture) {
    if (Array.isArray(lecture.dates)) return lecture.dates;
    return lecture.isoDate ? [lecture.isoDate] : [];
  }

  function shortDate(isoDate) {
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" })
      .format(new Date(`${isoDate}T12:00:00Z`));
  }

  function scheduleMaterials(item) {
    const lecture = data.lectures.find((entry) => materialDates(entry).includes(item.date));
    if (!lecture || !lecture.links.length) return '<span class="muted">—</span>';
    const dates = materialDates(lecture);
    const sharedLabel = dates.length > 1
      ? `<span class="material-note">Shared · ${dates.map(shortDate).join(" &amp; ")}</span>`
      : "";
    return sharedLabel + lecture.links.map((link) => externalLink(link.url, link.label, "mini-link")).join("");
  }

  function renderSchedule() {
    const body = document.querySelector("[data-schedule-body]");
    if (!body) return;

    body.innerHTML = data.schedule.map((item) => `
      <tr class="schedule-row schedule-${escapeHtml(item.type)}" data-date="${escapeHtml(item.date)}">
        <td data-label="Date"><time datetime="${escapeHtml(item.date)}">${escapeHtml(item.displayDate)}</time></td>
        <td data-label="Type"><span class="type-pill type-${escapeHtml(item.type)}">${escapeHtml(item.type)}</span></td>
        <td data-label="Topic">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.details)}</span>
          ${item.milestone ? `<em class="schedule-milestone">${escapeHtml(item.milestone)}</em>` : ""}
        </td>
        <td data-label="Materials" class="materials-cell">${scheduleMaterials(item)}</td>
      </tr>`).join("");

    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const upcoming = [...body.querySelectorAll("tr")].find((row) => new Date(`${row.dataset.date}T23:59:59`) >= now);
    if (upcoming) {
      upcoming.classList.add("is-next");
      upcoming.querySelector("td")?.insertAdjacentHTML("afterbegin", '<span class="next-marker">Next</span>');
    }
  }

  function renderStaff() {
    const target = document.querySelector("[data-staff-list]");
    if (!target) return;

    target.innerHTML = data.staff.map((person) => `
      <article class="staff-person">
        <p class="role">${escapeHtml(person.role)}</p>
        <h3>${escapeHtml(person.name)}</h3>
        <p class="affiliation">${escapeHtml(person.affiliation)}</p>
        <dl>
          <div><dt>Email</dt><dd><a href="mailto:${escapeHtml(person.email)}">${escapeHtml(person.email)}</a></dd></div>
          <div><dt>Office hours</dt><dd>${escapeHtml(person.officeHours)}</dd></div>
        </dl>
      </article>`).join("");
  }

  function setupHeroAnimation() {
    const canvas = document.querySelector("[data-hero-animation]");
    if (!canvas) return;

    const hero = canvas.closest(".hero");
    const context = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let tiles = [];
    let frameId = 0;
    let visible = true;
    let width = 0;
    let height = 0;
    const animationStart = performance.now();

    function seeded(index, salt) {
      const value = Math.sin(index * 9283.17 + salt * 317.41) * 43758.5453;
      return value - Math.floor(value);
    }

    function createTiles() {
      const count = width < 640 ? 34 : Math.min(82, Math.max(50, Math.round(width / 22)));
      tiles = Array.from({ length: count }, (_, index) => ({
        x: seeded(index, 1) * width,
        y: seeded(index, 2) * height,
        size: 14 + seeded(index, 3) * 62,
        phase: seeded(index, 4) * Math.PI * 2,
        velocityX: 8 + seeded(index, 5) * 13,
        velocityY: -4 - seeded(index, 6) * 9,
        sway: 12 + seeded(index, 7) * 24,
        red: index % 7 === 0,
        round: index % 5 === 0
      }));
    }

    function resize() {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createTiles();
      draw(performance.now(), true);
    }

    function roundedRect(x, y, size, radius) {
      context.beginPath();
      context.roundRect(x, y, size, size, radius);
      context.fill();
    }

    function draw(timestamp, still = false) {
      context.clearRect(0, 0, width, height);
      const time = still ? 0 : (timestamp - animationStart) / 1000;
      const spanX = width + 180;
      const spanY = height + 180;
      const positions = tiles.map((tile) => ({
        x: ((tile.x + time * tile.velocityX + tile.size + 90) % spanX) - tile.size - 90,
        y: ((tile.y + time * tile.velocityY + Math.sin(time * 0.48 + tile.phase) * tile.sway + tile.size + 90) % spanY + spanY) % spanY - tile.size - 90
      }));

      const glowX = width * (0.6 + Math.sin(time * 0.22) * 0.12);
      const glowY = height * (0.45 + Math.cos(time * 0.18) * 0.15);
      const glowRadius = Math.max(260, Math.min(width, height) * 0.62);
      const glow = context.createRadialGradient(glowX, glowY, 0, glowX, glowY, glowRadius);
      glow.addColorStop(0, "rgba(64, 105, 190, 0.11)");
      glow.addColorStop(1, "rgba(64, 105, 190, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      positions.forEach((position, index) => {
        for (let offset = 1; offset <= 5; offset += 1) {
          const other = positions[(index + offset) % positions.length];
          const distance = Math.hypot(other.x - position.x, other.y - position.y);
          if (distance > 165) continue;
          context.beginPath();
          context.moveTo(position.x, position.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(116, 149, 211, ${(1 - distance / 165) * 0.075})`;
          context.lineWidth = 1;
          context.stroke();
        }
      });

      tiles.forEach((tile, index) => {
        const position = positions[index];
        const pulse = 0.76 + Math.sin(time * 1.15 + tile.phase) * 0.24;
        const alpha = (tile.red ? 0.115 : 0.135) * pulse;
        context.fillStyle = tile.red ? `rgba(189, 48, 48, ${alpha})` : `rgba(84, 119, 187, ${alpha})`;
        context.save();
        context.translate(position.x + tile.size / 2, position.y + tile.size / 2);
        context.rotate(Math.sin(time * 0.32 + tile.phase) * 0.18);
        context.translate(-tile.size / 2, -tile.size / 2);
        roundedRect(0, 0, tile.size, tile.round ? tile.size / 2 : tile.size * 0.24);
        context.restore();
      });

      if (!still && visible && !reducedMotion.matches) frameId = window.requestAnimationFrame(draw);
    }

    function start() {
      if (frameId || reducedMotion.matches || !visible) return;
      frameId = window.requestAnimationFrame(draw);
    }

    function stop() {
      if (frameId) window.cancelAnimationFrame(frameId);
      frameId = 0;
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio > 0.12;
      if (visible) start();
      else stop();
    }, { threshold: [0, 0.12] });

    reducedMotion.addEventListener("change", () => {
      stop();
      draw(performance.now(), true);
      start();
    });
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else start();
    });

    resize();
    observer.observe(hero);
    start();
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (!data) return;
    renderSchedule();
    renderStaff();
    setupHeroAnimation();
  });
})();
