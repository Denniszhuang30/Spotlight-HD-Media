import assert from "node:assert/strict";

const base = process.env.SMOKE_URL ?? "http://127.0.0.1:3000";
const response = await fetch(`${base}/`);
assert.equal(response.status, 200);
const html = await response.text();
for (const text of ["Spotlight", 'id="services"', 'id="work"', 'id="contact"', "noindex"]) {
  assert.ok(html.includes(text), `Homepage missing: ${text}`);
}
const assets = [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
  .map((match) => match[1]).filter((url) => url.startsWith("/_next/"));
assert.ok(assets.length > 0, "No framework assets found");
for (const path of new Set(assets)) {
  assert.equal((await fetch(new URL(path, base))).status, 200, `Asset failed: ${path}`);
}
assert.equal((await fetch(`${base}/robots.txt`)).status, 200);
assert.equal((await fetch(`${base}/favicon.svg`)).status, 200);
console.log(`PASS: homepage, section anchors, noindex and ${new Set(assets).size} framework assets; robots and favicon at ${base}`);
