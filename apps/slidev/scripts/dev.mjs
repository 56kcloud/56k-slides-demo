#!/usr/bin/env node
import { spawn } from "node:child_process";

const args = process.argv.slice(2);

let deck = "introduction";
let lang = "en";

const passthrough = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--deck") {
    deck = args[i + 1];
    i++;
  } else if (a === "--lang") {
    lang = args[i + 1];
    i++;
  } else {
    passthrough.push(a);
  }
}

const childEnv = {
  ...process.env,
  VITE_DECK: deck,
  VITE_LOCALE: lang,
};

console.log(`Deck: ${deck} | Lang: ${lang}`);

const child = spawn("slidev", ["--open", ...passthrough], {
  stdio: "inherit",
  shell: true,
  env: childEnv,
});

child.on("exit", (code) => process.exit(code));
