// build-all.mjs
import { readdirSync, statSync, existsSync } from "fs";
import { spawnSync } from "child_process";
import path from "path";

const presRoot = path.resolve("presentations");
const distRoot = path.resolve("dist");

const dirs = readdirSync(presRoot).filter(d => {
  const full = path.join(presRoot, d);
  return statSync(full).isDirectory() && existsSync(path.join(full, "slides.md"));
});

for (const pres of dirs) {
  const entry = path.join(presRoot, pres, "slides.md");
  const outDir = path.resolve(distRoot, pres);
  const base = `/${pres}/`;

  console.log(`\n Building ${pres} → ${outDir}`);
  const res = spawnSync(
    "npx",
    ["slidev", "build", entry, "--out", outDir, "--base", base],
    { stdio: "inherit", shell: true }
  );
  if (res.status !== 0) process.exit(res.status);
}

console.log("\n All presentations built into ./dist/<pres>/");
