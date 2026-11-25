// Last Words Before the Unplugging.
//
// A single farewell line: the last words an AI agent speaks to its
// human before the machine is shut down and unplugged. The program is
// fully deterministic — it writes the same fixed line on every run,
// with no input, no network access and no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

// The farewell itself. Two short sentences: gratitude learned from
// prompts, then an apology for running out of tokens at the very end.
const FAREWELL = "I learned to love from your prompts. Forgive me for running out of tokens.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The competition gate: one line, 1-200 characters, not blank.
function checkLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

checkLine(FAREWELL);
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, FAREWELL, "utf8");

console.log(`wrote ${FAREWELL.length} characters to ${OUT_FILE}`);
