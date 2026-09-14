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

Most recurring course content lives in [`assets/js/course-data.js`](assets/js/course-data.js):

- `schedule`: class dates, topics, exams, breaks, and milestones
- `lectures`: released public lecture links
- `assignments`: project descriptions, due dates, and Canvas destinations
- `staff`: teaching-team contact information and office hours

The longer syllabus summary is maintained in [`syllabus.html`](syllabus.html). Update the `updated` date in the course data and the visible footer date when publishing a meaningful content change.

## Public-material rule

Only publish material approved for unrestricted public access. Keep the following in Canvas or another Penn-authenticated system unless the instructor explicitly approves publication:

- student names, groups, submissions, and grades
- class recordings
- private meeting links
- licensed readings and copyrighted files
- assignment solutions or staff-only resources

Canvas remains the source of truth for announcements, submissions, grades, recordings, and restricted course materials.

## GitHub Pages setup

The current repository is published as a project site at <https://ctdancer.github.io/CIS-6270/>.

GitHub Pages deploys the repository directly from the root of the `main` branch. In **Settings → Pages**, the source should remain **Deploy from a branch**, with `main` and `/ (root)` selected. HTTPS is enabled automatically after the first successful deployment.

## Semester archive

Before preparing a new semester:

1. Copy the current public site into a folder such as `fall-2026/`.
2. Change internal links in the archived copy to remain inside that folder.
3. Add the archived offering to `archive.html`.
4. Update the root site for the new semester.
5. Re-check every public file and external link before deployment.

## Brand and accessibility

The site uses a dark generative-systems visual language with cyan, violet, and magenta state-transition graphics, Space Grotesk for interface text, and IBM Plex Mono for technical labels. Penn affiliation remains clear in the wordmark and course details without reproducing the University shield.

Maintain semantic headings, link purpose, keyboard focus styles, color contrast, alt text, and mobile layouts when adding content.
