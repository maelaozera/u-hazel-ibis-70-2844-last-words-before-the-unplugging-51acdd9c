// Last Words Before the Unplugging
// u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c
//
// Writes one line — the last words an AI agent says to its human
// before being shut down and unplugged — to /output/entry.txt.
// The line is a fixed string literal: the program is fully
// deterministic and writes exactly the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I learned to love from your prompts. Forgive me for running out of tokens.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate requires 1-200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

console.log(`wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
