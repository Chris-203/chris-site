# CLAUDE.md

## Commits and pull requests

- No AI attribution anywhere: no `Co-Authored-By` lines for Claude or any agent, no session links,
  no "Generated with" footers, in commit messages, PR titles or descriptions, or code comments.
- Commit messages: a short summary line, then a few plain sentences if needed.

## Site

- Content lives in `src/data/profile.ts`; don't hard-code text in the page.
- Keep the existing look: Bricolage Grotesque headings, Figtree body text, the blue accent, the sticky top bar,
  project rows, and the experience timeline.
- Run `npm run build` before committing; it type-checks and fails on errors.
