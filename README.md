# chris-site

My personal site: projects, experience, skills, and a way to get in touch, on one page.

- All content lives in `src/data/profile.ts`. Edit projects, roles, skills, and links there.
  A project with `more: true` goes under "More projects".
- **Photo:** drop a square photo at `src/assets/headshot.jpg` (or `.png` / `.webp`) and it appears next to your name.
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

The site is hosted on Vercel at https://christophercortazo.vercel.app (project `christophercortazo`).
Every push to `main` deploys it, and every pull request gets a preview.

**Custom domain:** buy the domain, add it under the Vercel project's **Settings → Domains** and follow the DNS
steps, then set the project's `SITE` environment variable to the full address, e.g. `https://christophercortazo.com`,
and redeploy.
