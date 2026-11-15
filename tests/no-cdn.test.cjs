// Every page must use the built Tailwind CSS, not the runtime CDN compiler.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const pages = ['index.html', ...['articles', 'authors'].flatMap((d) => fs.readdirSync(path.join(root, d)).filter((f) => f.endsWith('.html')).map((f) => `${d}/${f}`))];
assert.ok(pages.length >= 13, `expected at least 13 pages, found ${pages.length}`);
for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page), 'utf8');
  assert.ok(!html.includes('cdn.tailwindcss.com'), `${page} still loads the Tailwind CDN`);
  assert.ok(!html.includes('tailwind.config'), `${page} still has an inline tailwind.config`);
  const m = html.match(/<link rel="stylesheet" href="((?:\.\.\/)?css\/tailwind\.(?:index|inner)\.css)">/);
  assert.ok(m, `${page} does not link a built tailwind css file`);
  assert.ok(fs.existsSync(path.join(root, path.dirname(page), m[1])), `${page} links ${m[1]} which does not exist`);
}
console.log(`ok: ${pages.length} pages use built Tailwind CSS`);
