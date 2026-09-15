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
    if (!lecture || !lecture.links.length) return '<span class="muted">-</span>';
    const dates = materialDates(lecture);
    const sharedLabel = dates.length > 1
      ? `<span class="material-note">Shared: ${dates.map(shortDate).join(" &amp; ")}</span>`
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
        <img class="staff-photo" src="${escapeHtml(person.photo)}" alt="${escapeHtml(person.photoAlt)}" width="560" height="560" loading="lazy" decoding="async">
        <div class="staff-details">
          <p class="role">${escapeHtml(person.role)}</p>
          <h3>${escapeHtml(person.name)}</h3>
          <p class="affiliation">${escapeHtml(person.affiliation)}</p>
          <dl>
            <div><dt>Email</dt><dd><a href="mailto:${escapeHtml(person.email)}">${escapeHtml(person.email)}</a></dd></div>
            <div><dt>Office hours</dt><dd>${escapeHtml(person.officeHours)}</dd></div>
          </dl>
        </div>
      </article>`).join("");
  }

  function renderProjects() {
    const target = document.querySelector("[data-project-list]");
    if (!target) return;

    target.innerHTML = data.assignments.map((project) => `
      <article class="project-item">
        <div class="project-heading">
          <p class="project-weight">${escapeHtml(project.weight)}</p>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="project-status">${escapeHtml(project.status)}</p>
        </div>
        <div class="project-details">
          <p>${escapeHtml(project.description)}</p>
          <dl>
            <div><dt>Due</dt><dd>${escapeHtml(project.due)}</dd></div>
            <div><dt>Defense</dt><dd>${escapeHtml(project.defense)}</dd></div>
          </dl>
          ${externalLink(project.canvasUrl, "View project in Canvas", "text-link")}
        </div>
      </article>`).join("");
  }

  function setupHeroAnimation() {
    const canvas = document.querySelector("[data-hero-animation]");
    if (!canvas) return;

    const hero = canvas.closest(".hero");
    const context = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let particles = [];
    let backdrop = [];
    let frameId = 0;
    let visible = true;
    let width = 0;
    let height = 0;
    const animationStart = performance.now();

    function seeded(index, salt) {
      const value = Math.sin(index * 9283.17 + salt * 317.41) * 43758.5453;
      return value - Math.floor(value);
    }

    function gaussian(index, salt) {
      const u = Math.max(0.0001, seeded(index, salt));
      const v = seeded(index, salt + 2.37);
      return Math.sqrt(-2 * Math.log(u)) * Math.cos(Math.PI * 2 * v);
    }

    function createScene() {
      const mobile = width < 640;
      const count = mobile ? 92 : Math.min(180, Math.max(132, Math.round(width / 9)));
      const centerX = width * (mobile ? 0.53 : 0.77);
      const centerY = height * 0.49;
      const radiusLimit = Math.min(width * (mobile ? 0.33 : 0.22), height * 0.34);

      particles = Array.from({ length: count }, (_, index) => {
        const arm = index % 2;
        const position = Math.floor(index / 2) / Math.max(1, Math.floor(count / 2) - 1);
        const theta = 0.5 + position * Math.PI * 3.45 + arm * Math.PI;
        const radius = radiusLimit * (0.08 + position * 0.92);
        return {
          startX: centerX + gaussian(index, 3) * width * (mobile ? 0.125 : 0.075),
          startY: centerY + gaussian(index, 7) * height * 0.135,
          targetX: centerX + Math.cos(theta) * radius,
          targetY: centerY + Math.sin(theta) * radius * 0.77,
          curve: radiusLimit * (0.12 + seeded(index, 11) * 0.08),
          size: 1.25 + seeded(index, 13) * 1.45,
          red: index % 13 === 0
        };
      });

      const startX = mobile ? -40 : width * 0.47;
      const step = mobile ? 76 : 92;
      const columns = Math.ceil((width - startX) / step) + 1;
      const rows = Math.ceil(height / step) + 1;
      backdrop = Array.from({ length: columns * rows }, (_, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);
        return {
          x: startX + column * step + (seeded(index, 21) - 0.5) * 28,
          y: row * step + (seeded(index, 23) - 0.5) * 28,
          size: 12 + seeded(index, 25) * 36,
          phase: seeded(index, 27) * Math.PI * 2,
          red: index % 11 === 0
        };
      });
    }

    function resize() {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createScene();
      draw(performance.now(), true);
    }

    function ease(value) {
      return value * value * (3 - 2 * value);
    }

    function draw(timestamp, still = false) {
      context.clearRect(0, 0, width, height);
      const time = (timestamp - animationStart) / 1000;
      const cycle = still ? 6.5 : ((timestamp - animationStart) % 9800) / 1000;
      let progress = 0;
      let opacity = 1;
      if (cycle >= 1.2 && cycle < 6.2) progress = ease((cycle - 1.2) / 5);
      else if (cycle >= 6.2) progress = 1;
      if (!still && cycle >= 8.9) opacity = Math.max(0, 1 - (cycle - 8.9) / 0.9);

      const centerX = width * (width < 640 ? 0.53 : 0.77);
      const centerY = height * 0.49;
      const glowRadius = Math.max(220, Math.min(width, height) * 0.43);
      const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, glowRadius);
      glow.addColorStop(0, `rgba(64, 105, 190, ${0.08 + progress * 0.08})`);
      glow.addColorStop(1, "rgba(64, 105, 190, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      backdrop.forEach((tile) => {
        const pulse = 0.72 + Math.sin(time * 0.32 + tile.phase) * 0.28;
        const alpha = (tile.red ? 0.026 : 0.034) * pulse;
        context.fillStyle = tile.red ? `rgba(204, 76, 76, ${alpha})` : `rgba(116, 149, 211, ${alpha})`;
        context.fillRect(tile.x, tile.y, tile.size, tile.size);
      });

      context.save();
      context.globalAlpha = 0.045 + progress * 0.055;
      context.strokeStyle = "rgb(137 166 220)";
      context.lineWidth = 1;
      for (let line = 0; line < 5; line += 1) {
        const startX = width * (width < 640 ? 0.08 : 0.51);
        const endX = width * 0.98;
        const baseY = height * (0.25 + line * 0.13);
        context.beginPath();
        for (let step = 0; step <= 44; step += 1) {
          const fraction = step / 44;
          const x = startX + (endX - startX) * fraction;
          const y = baseY + Math.sin(fraction * Math.PI * 1.55 + line * 0.72) * height * 0.034;
          if (step === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.stroke();
      }
      context.restore();

      particles.forEach((particle) => {
        const dx = particle.targetX - particle.startX;
        const dy = particle.targetY - particle.startY;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const arc = Math.sin(Math.PI * progress) * particle.curve;
        const x = particle.startX + dx * progress - (dy / distance) * arc;
        const y = particle.startY + dy * progress + (dx / distance) * arc;
        const alpha = opacity * (particle.red ? 0.66 : 0.62);
        context.fillStyle = particle.red ? `rgba(234, 112, 112, ${alpha})` : `rgba(186, 211, 255, ${alpha})`;
        context.beginPath();
        context.arc(x, y, particle.size + progress * 0.35, 0, Math.PI * 2);
        context.fill();
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
    renderProjects();
    renderStaff();
    setupHeroAnimation();
  });
})();
