# chris-site

My personal site: projects, experience, skills, and a way to get in touch, on one page.

- All content lives in `src/data/profile.ts`. Edit projects, roles, skills, and links there.
  A project with `more: true` goes under "More projects".
- **Photo:** drop a square photo at `src/assets/headshot.jpg` (or `.png` / `.webp`) and it appears next to the headline.
- **Resume:** put the PDF at `public/resume.pdf`; the Resume buttons appear once it's there.
- **Contact form:** sends through [FormSubmit](https://formsubmit.co) to the email in `profile.form`, no account needed.
  The first message sends a one-time confirmation email; click it and later messages arrive normally.
  To use [Formspree](https://formspree.io) instead, set `profile.form` to `https://formspree.io/f/<your id>`.
- **Link-preview card and icons:** edit `scripts/og-card.html` or `public/favicon.svg`, then run `npm run icons`.

Built with Astro as static HTML and CSS. Fonts (Bricolage Grotesque and Figtree) are bundled with the site,
so there are no requests to Google Fonts. JavaScript only adds the theme toggle, the copy-email button, and
sending the form without leaving the page; everything works without it.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type check + static build to dist/
```

## Deploys

Every push to `main` builds the site and publishes it with GitHub Pages (`.github/workflows/deploy.yml`).

1. **Settings → Pages → Source: GitHub Actions** (once).
2. The site is then at `https://chris-203.github.io/chris-site/`.
3. **Custom domain:** buy the domain, add it under **Settings → Pages → Custom domain**, follow GitHub's DNS
   steps, then set the repository variable `SITE_URL` (Settings → Secrets and variables → Actions → Variables)
   to the full address, e.g. `https://christophercortazo.com`, and re-run the Deploy workflow.
