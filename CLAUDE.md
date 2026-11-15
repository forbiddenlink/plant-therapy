# Plant Therapy

A static wellness blog about plant care and mental health. Plain HTML5 + Tailwind CSS
(prebuilt with the Tailwind v3 CLI into committed `css/tailwind.index.css` and
`css/tailwind.inner.css`; rerun `pnpm run build:css` after adding or changing utility classes)
+ vanilla JavaScript. No framework, no bundler.

Repo: https://github.com/forbiddenlink/plant-therapy

## Stack

- HTML5, Tailwind CSS v3 (CLI build, `tailwind.config.index.cjs` for `index.html`,
  `tailwind.config.inner.cjs` for `articles/` and `authors/`), vanilla JS
- `http-server` for local dev serving
- Node >=14 required (`engines` in package.json); CI runs on Node 22
- Biome 2.5.11 for lint/format (`biome.json`)

## Commands (pnpm; CI runs `pnpm install --frozen-lockfile`)

- `pnpm start` - serve and open in browser (`npx http-server . -o`)
- `pnpm run serve` - serve on port 3000
- `pnpm run preview` - serve with caching disabled
- `pnpm run build:css` - regenerate the committed Tailwind CSS files
- `pnpm test` - UI behavior test plus a check that no page loads the Tailwind CDN
- `pnpm run biome:check` / `pnpm run biome:fix` / `pnpm run biome:format`

`packageManager` in `package.json` pins `pnpm@10.34.9`, `pnpm-lock.yaml` is the tracked
lockfile, and `.github/workflows/ci.yml` installs via pnpm - all three agree.

## Layout

- `index.html` - the single-page site
- `articles/` - individual article pages (biophilic design, plant-human interaction, cortisol
  reduction, mindfulness rituals, neuroscience, clinical settings meta-analysis, therapeutic
  garden framework)
- `authors/` - author bio pages (5 author profiles)
- `js/perenual.js` - Perenual plant API client (`PERENUAL_API_KEY`); not wired into any HTML
  page as of this writing, and reads the key via `process.env`, which does not exist in this
  browser-only, no-build-step site
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
  listed in devDependencies.
- Dependabot + release-please + a `verify-overrides.yml` workflow manage security patches via
  `pnpm.overrides` in `package.json` (postcss, qs, vite bounds) - check CHANGELOG.md before
  assuming a dependency bump is safe to revert.
