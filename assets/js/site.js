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

  function scheduleMaterials(item) {
    const lecture = data.lectures.find((entry) => entry.isoDate === item.date);
    if (!lecture || !lecture.links.length) return '<span class="muted">—</span>';
    return lecture.links.map((link) => externalLink(link.url, link.label, "mini-link")).join("");
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

    function seeded(index, salt) {
      const value = Math.sin(index * 9283.17 + salt * 317.41) * 43758.5453;
      return value - Math.floor(value);
    }

    function createTiles() {
      const count = width < 640 ? 34 : Math.min(82, Math.max(50, Math.round(width / 22)));
      tiles = Array.from({ length: count }, (_, index) => ({
        x: seeded(index, 1) * width,
        y: seeded(index, 2) * height,
        size: 18 + seeded(index, 3) * 58,
        phase: seeded(index, 4) * Math.PI * 2,
        speed: 0.55 + seeded(index, 5) * 0.85,
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
      const time = still ? 0 : timestamp * 0.00018;

      tiles.forEach((tile) => {
        const driftX = Math.sin(time * tile.speed + tile.phase) * 22;
        const driftY = Math.cos(time * tile.speed * 0.8 + tile.phase) * 16;
        const pulse = 0.72 + Math.sin(time * 1.4 + tile.phase) * 0.18;
        const alpha = (tile.red ? 0.065 : 0.075) * pulse;
        context.fillStyle = tile.red ? `rgba(189, 48, 48, ${alpha})` : `rgba(84, 119, 187, ${alpha})`;
        roundedRect(tile.x + driftX, tile.y + driftY, tile.size, tile.round ? tile.size / 2 : tile.size * 0.24);
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
