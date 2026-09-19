# Plant Therapy

A static wellness blog about plant care and mental health. Plain HTML5 + Tailwind CSS
(loaded via CDN script with an inline config in `index.html`, no build step) + vanilla
JavaScript. No framework, no bundler.

Repo: https://github.com/forbiddenlink/plant-therapy

## Stack

- HTML5, Tailwind CSS (CDN, `<script src="https://cdn.tailwindcss.com">`), vanilla JS
- `http-server` for local dev serving
- Node >=14 required (`engines` in package.json); CI runs on Node 22
- Biome 2.5.11 for lint/format (`biome.json`)

## Commands (npm; CI uses `npm ci`)

- `npm start` - serve and open in browser (`npx http-server . -o`)
- `npm run serve` - serve on port 3000
- `npm run preview` - serve with caching disabled
- `npm run biome:check` / `npm run biome:fix` / `npm run biome:format`

Note: `package.json` pins PNPM via its `packageManager` field, and `pnpm-lock.yaml` sits
beside `package-lock.json`, but the CI workflow runs `npm ci` with an NPM dependency cache.
Treat NPM as the working, CI-verified package manager; the PNPM pin looks stale
(see CODE ISSUES).

## Layout

- `index.html` - the single-page site
- `articles/` - individual article pages (biophilic design, plant-human interaction, cortisol
  reduction, mindfulness rituals, neuroscience, clinical settings meta-analysis, therapeutic
  garden framework)
- `authors/` - author bio pages (5 author profiles)
- `js/perenual.js` - Perenual plant API client (`PERENUAL_API_KEY`); not wired into any HTML
  page as of this writing (see CODE ISSUES)
- `img/` - author photos, post images, logo
- `favicon.svg`

## Conventions

- Dark mode: class-based Tailwind toggle, persisted to `localStorage`, respects system
  preference on first load.
- Brand colors (in the inline Tailwind config): primary `#4A7862`, secondary `#39574A`,
  accent `#F0F7F4`.
- Accessibility: skip-to-content link, ARIA labels, keyboard navigation, semantic HTML -
  keep these when touching markup.
- Biome formatting: single quotes, semicolons as-needed, 2-space indent, 100-char line width.

## Env vars

- `PERENUAL_API_KEY` - used by `js/perenual.js` (Perenual plant database API, free tier
  100 req/day). Not currently called from any page.

## Gotchas

- No test script and no test files exist, despite `vitest` and `@testing-library/react`
  listed in devDependencies (see CODE ISSUES).
- Dependabot + release-please + a `verify-overrides.yml` workflow manage security patches via
  `pnpm.overrides` in `package.json` (postcss, qs, vite bounds) - check CHANGELOG.md before
  assuming a dependency bump is safe to revert.

## Claude Code

Project-level `.claude/` directory present (rtk recall config etc.) - check its contents for
any project-specific hooks or skills before assuming none exist.
