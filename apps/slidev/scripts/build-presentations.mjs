import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const presRoot = path.resolve("apps/slidev/presentations");
const distRoot = path.resolve("dist");
const languagesRoot = path.resolve("languages");

const decks = readdirSync(presRoot).filter((deckName) => {
  const full = path.join(presRoot, deckName);
  return statSync(full).isDirectory() && existsSync(path.join(full, "slides.md"));
});

const locales = existsSync(languagesRoot)
  ? readdirSync(languagesRoot).filter((localeName) => {
      const full = path.join(languagesRoot, localeName);
      return statSync(full).isDirectory();
    })
  : [];

if (!existsSync(distRoot)) {
  mkdirSync(distRoot, { recursive: true });
}

console.log(`\nLocales detected: ${locales.join(", ") || "none"}`);
console.log(`Decks detected: ${decks.join(", ")}`);

const hasDeckLocale = (locale, deck) =>
  existsSync(path.join(languagesRoot, locale, `${deck}.json`));

for (const pres of decks) {
  const entry = path.join(presRoot, pres, "slides.md");

  const outDir = path.resolve(distRoot, pres);
  console.log(`\nBuilding ${pres} [default] -> ${outDir}`);
  const resDefault = spawnSync(
    "npx",
    ["slidev", "build", entry, "--out", outDir, "--base", `/${pres}/`],
    {
      stdio: "inherit",
      shell: true,
      env: {
        ...process.env,
        VITE_DECK: pres,
      },
    },
  );

  if (resDefault.status !== 0) {
    console.error(`Build failed for ${pres} [default]`);
    process.exit(resDefault.status);
  }

  for (const locale of locales) {
    if (!hasDeckLocale(locale, pres)) {
      continue;
    }

    const outDirLocale = path.resolve(distRoot, pres, locale);
    console.log(`Building ${pres} [${locale}] -> ${outDirLocale}`);

    const resLocale = spawnSync(
      "npx",
      ["slidev", "build", entry, "--out", outDirLocale, "--base", `/${pres}/${locale}/`],
      {
        stdio: "inherit",
        shell: true,
        env: {
          ...process.env,
          VITE_DECK: pres,
          VITE_LOCALE: locale,
        },
      },
    );

    if (resLocale.status !== 0) {
      console.error(`Build failed for ${pres} [${locale}]`);
      process.exit(resLocale.status);
    }
  }
}

console.log(`\nAll decks built.`);
