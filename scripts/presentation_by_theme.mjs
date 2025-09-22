import { spawn } from "node:child_process";

const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  if ((args[i] === "--theme" || args[i] === "-t") && args[i + 1]) {
    const val = args[i + 1];
    if (!val.startsWith(".") && !val.startsWith("/") && !val.match(/^[A-Za-z]:\\/)) {
      args[i + 1] = `../../themes/${val}`;
    }
  }
}

const proc = spawn("slidev", ["--open", ...args], {
  stdio: "inherit",
  shell: true,
});

proc.on("exit", (code) => process.exit(code ?? 0));
