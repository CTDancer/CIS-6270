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
    return `<a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}<span class="sr-only"> (opens in a new tab)</span></a>`;
  }

  function setupNavigation() {
    const button = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-site-nav]");
    if (button && nav) {
      button.addEventListener("click", () => {
        const open = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!open));
        nav.dataset.open = String(!open);
      });
    }

    const current = document.body.dataset.page;
    document.querySelectorAll("[data-nav-page]").forEach((link) => {
      if (link.dataset.navPage === current) link.setAttribute("aria-current", "page");
    });
  }

  function renderNextClass() {
    const target = document.querySelector("[data-next-class]");
    if (!target) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const next = data.schedule.find((item) => new Date(`${item.date}T23:59:59`) >= today && item.type !== "break");
    if (!next) {
      target.innerHTML = `<p class="eyebrow">Course complete</p><h2>Thank you for a thoughtful semester.</h2>`;
      return;
    }
    target.innerHTML = `
      <p class="eyebrow">Up next · ${escapeHtml(next.displayDate)}</p>
      <h2>${escapeHtml(next.title)}</h2>
      <p>${escapeHtml(next.details)}</p>
      ${next.milestone ? `<p class="milestone"><span>Milestone</span>${escapeHtml(next.milestone)}</p>` : ""}
      <a class="arrow-link" href="schedule.html">View the full syllabus <span aria-hidden="true">→</span></a>`;
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

  function scheduleMaterials(item) {
    const lecture = data.lectures.find((entry) => entry.isoDate === item.date);
    if (!lecture) return '<span class="muted">—</span>';
    return lecture.links.map((link) => externalLink(link.url, link.label, "mini-link")).join("");
  }

  function renderLectures() {
    const target = document.querySelector("[data-lecture-list]");
    if (!target) return;
    target.innerHTML = data.lectures.map((lecture) => `
      <article class="resource-card">
        <div class="resource-number" aria-hidden="true">${String(lecture.number).padStart(2, "0")}</div>
        <div>
          <p class="card-kicker">Lecture ${lecture.number} · ${escapeHtml(lecture.date)}</p>
          <h2>${escapeHtml(lecture.title)}</h2>
          <div class="button-row">${lecture.links.map((link) => externalLink(link.url, link.label, "button button-secondary")).join("")}</div>
        </div>
      </article>`).join("");
  }

  function renderAssignments() {
    const target = document.querySelector("[data-assignment-list]");
    if (!target) return;
    target.innerHTML = data.assignments.map((assignment, index) => `
      <article class="assignment-card">
        <div class="assignment-index">0${index + 1}</div>
        <div class="assignment-content">
          <div class="assignment-meta"><span>${escapeHtml(assignment.weight)} of final grade</span><span class="status ${assignment.status === "Available" ? "status-live" : ""}">${escapeHtml(assignment.status)}</span></div>
          <h2>${escapeHtml(assignment.title)}</h2>
          <p>${escapeHtml(assignment.description)}</p>
          <dl class="date-list">
            <div><dt>Code & writeup due</dt><dd>${escapeHtml(assignment.due)}</dd></div>
            <div><dt>Defense</dt><dd>${escapeHtml(assignment.defense)}</dd></div>
          </dl>
          ${externalLink(assignment.canvasUrl, "Open in Canvas", "arrow-link")}
        </div>
      </article>`).join("");
  }

  function renderStaff() {
    const target = document.querySelector("[data-staff-list]");
    if (!target) return;
    target.innerHTML = data.staff.map((person) => {
      const initials = person.name.split(" ").filter((part) => !part.includes("Ph.D.")).slice(0, 2).map((part) => part[0]).join("");
      return `<article class="staff-card">
        <div class="avatar" aria-hidden="true">${escapeHtml(initials)}</div>
        <p class="card-kicker">${escapeHtml(person.role)}</p>
        <h2>${escapeHtml(person.name)}</h2>
        <p>${escapeHtml(person.affiliation)}</p>
        <dl>
          <div><dt>Email</dt><dd><a href="mailto:${escapeHtml(person.email)}">${escapeHtml(person.email)}</a></dd></div>
          <div><dt>Office hours</dt><dd>${escapeHtml(person.officeHours)}</dd></div>
        </dl>
        ${person.website ? externalLink(person.website, "Visit lab website", "arrow-link") : ""}
      </article>`;
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    renderNextClass();
    renderSchedule();
    renderLectures();
    renderAssignments();
    renderStaff();
    document.querySelectorAll("[data-year]").forEach((element) => { element.textContent = new Date().getFullYear(); });
  });
})();
