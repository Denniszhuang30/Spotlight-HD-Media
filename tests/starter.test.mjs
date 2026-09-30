import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("homepage sections and public-safe placeholders are present", async () => {
  const source = await readFile("app/page.tsx", "utf8");
  for (const id of ["main", "services", "work", "contact"]) {
    assert.ok(source.includes(`id="${id}"`));
  }
  assert.ok(source.includes("Placeholder copy only"));
  assert.ok(!/<form\b|<video\b|<iframe\b/.test(source));
});

test("static export and no-index development boundaries are explicit", async () => {
  assert.match(await readFile("next.config.ts", "utf8"), /output: "export"/);
  assert.match(await readFile("app/layout.tsx", "utf8"), /index: false/);
  assert.match(await readFile("public/robots.txt", "utf8"), /Disallow: \//);
});
