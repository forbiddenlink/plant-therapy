# Plant Therapy

A static wellness blog about plant care and mental health. It is a demo portfolio project, written for portfolio reviewers rather than a real readership.

Live: https://plant-therapy.vercel.app

## What is in it

- A home page, seven article pages (`articles/`) and five author pages (`authors/`).
- Dark mode that follows the system setting, with a manual toggle saved in localStorage.
- Responsive, mobile-first layout with a mobile menu, a skip-to-content link and ARIA labels on interactive controls. Animations are reduced when the user prefers reduced motion.
- Open Graph and Twitter Card tags, JSON-LD structured data, `robots.txt` and `sitemap.xml`.
- A newsletter form that is intentionally disabled ("Sign-ups are not open yet").

`js/perenual.js` is a client for the Perenual plant API (`PERENUAL_API_KEY`). It is not loaded by any page, and it reads the key through `process.env`, which does not exist in this browser-only site.

## Stack

- HTML5, vanilla JavaScript, no framework and no bundler
- Tailwind CSS v3, prebuilt with the Tailwind CLI into committed files (`css/tailwind.index.css` and `css/tailwind.inner.css`)
- `http-server` for local serving
- Biome for lint and format

## Getting started

Prerequisites: Node (`engines` is `>=14.0.0`, CI runs Node 22) and pnpm (pinned by `packageManager` in `package.json`).

```bash
pnpm install
pnpm start        # serves the site and opens it in your browser
```

### Scripts

```bash
pnpm start             # npx http-server . -o
pnpm run serve         # serve on port 3000
pnpm run preview       # serve with caching disabled
pnpm run build:css     # regenerate the committed Tailwind CSS (run after adding utility classes)
pnpm test              # UI behavior test plus a check that no page loads the Tailwind CDN
pnpm run biome:check   # also biome:fix and biome:format
```

### Environment

`.env.example` lists `PERENUAL_API_KEY`, which only the unused `js/perenual.js` reads. The site itself needs no environment variables.

## Project structure

```
index.html            # home page
articles/             # seven article pages
authors/              # five author pages
css/                  # theme.css, Tailwind input and built output
js/perenual.js        # unused Perenual API client
img/                  # logos, author photos, post images
tests/                # ui.test.cjs, no-cdn.test.cjs
tailwind.config.index.cjs   # Tailwind config for index.html
tailwind.config.inner.cjs   # Tailwind config for articles/ and authors/
vercel.json           # security headers
```

## Deploy

The site is static and is hosted on Vercel. There is no build step beyond `pnpm run build:css`, whose output is committed.

## License

MIT. See `LICENSE`. Placeholder images come from Unsplash.
