#!/usr/bin/env node
import { spawn } from "node:child_process";
import path from "node:path";

const args = process.argv.slice(2);

let deck = "introduction";
let lang = "en";
let theme = null;

for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--deck" && args[i + 1]) {
    deck = args[i + 1];
    i++;
  } else if (a === "--lang" && args[i + 1]) {
    lang = args[i + 1];
    i++;
  } else if ((a === "--theme" || a === "-t") && args[i + 1]) {
    theme = args[i + 1];
    i++;
  }
}

const entry = path.join("presentations", deck, "slides.md");

const childEnv = {
  ...process.env,
  VITE_DECK: deck,
  VITE_LOCALE: lang,
};

console.log(`Deck: ${deck} | Lang: ${lang} | Theme: ${theme || "default"}`);
console.log(`Entry: ${entry}`);

const slidevArgs = ["--open", entry];
if (theme) {
  if (!theme.startsWith(".") && !theme.startsWith("/") && !theme.match(/^[A-Za-z]:\\/)) {
    slidevArgs.push("--theme", `../../themes/${theme}`);
  } else {
    slidevArgs.push("--theme", theme);
  }
}

const child = spawn("slidev", slidevArgs, {
  stdio: "inherit",
  shell: true,
  env: childEnv,
});

child.on("exit", (code) => process.exit(code ?? 0));
