# CIS 6270: Discrete Generative Models

Public course website for **CIS 6270: Discrete Generative Models**, Fall 2026, at the University of Pennsylvania.

The site is intentionally static and dependency-free. GitHub Pages can publish the repository directly from the root of the `main` branch.

## Local preview

From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Common updates

The public website is a single scrolling page in [`index.html`](index.html). Most recurring course content lives in [`assets/js/course-data.js`](assets/js/course-data.js):

- `schedule`: class dates, topics, exams, breaks, and milestones
- `lectures`: released public note downloads and code-folder links; each link appears in its matching syllabus row
- `assignments`: project descriptions, due dates, and Canvas destinations
- `staff`: teaching-team contact information and office hours

Update the course overview, concise grading and policy summary, and footer date in [`index.html`](index.html). The older section URLs redirect into this one-page site so existing bookmarks continue to work.

The approved downloadable syllabus is stored at [`assets/docs/cis6270-syllabus-fall-2026.pdf`](assets/docs/cis6270-syllabus-fall-2026.pdf). Replace that file when a new approved revision is issued, and then reconcile the public HTML and course data with the revised PDF.

## Public-material rule

Only publish material approved for unrestricted public access. Keep the following in Canvas or another Penn-authenticated system unless the instructor explicitly approves publication:

- student names, groups, submissions, and grades
- class recordings
- private meeting links
- licensed readings and copyrighted files
- assignment solutions or staff-only resources

Canvas remains the source of truth for announcements, submissions, grades, recordings, and restricted course materials.

## GitHub Pages setup

The current repository is published temporarily as a project site at <https://ctdancer.github.io/CIS-6270/>. The final site will move to the `cis6270` GitHub organization in a repository named `cis6270.github.io`, which will publish at <https://cis6270.github.io/>.

GitHub Pages deploys the repository directly from the root of the `main` branch. In **Settings → Pages**, the source should remain **Deploy from a branch**, with `main` and `/ (root)` selected. HTTPS is enabled automatically after the first successful deployment.

## Semester archive

Before preparing a new semester:

1. Copy the current one-page site and its semester data into a dated page such as `fall-2026.html`.
2. Add the archived semester to the header beside the new semester.
3. Update the root `index.html` and course data for the new offering.
4. Re-check every public file and external link before deployment.

## Brand and accessibility

The site uses Ubuntu throughout. A restrained Penn Blue and Penn Red generative animation appears only behind the opening hero; ordinary course content uses a clean light background, and the animation pauses when the hero leaves the viewport. Penn affiliation remains clear without reproducing the University shield or imitating Penn's institutional website.

Maintain semantic headings, link purpose, keyboard focus styles, color contrast, alt text, and mobile layouts when adding content.
