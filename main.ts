import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: the reply-all storm, where trying to stop it fuels it.
const JOKE =
  "I replied-all to 400 people asking to be removed from the thread — now 300 of them have replied-all to agree with me.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 199 characters,
// one line, not only white space. Refuse to write anything that fails it.
if (
  JOKE.length < 1 ||
  JOKE.length > 199 ||
  JOKE.includes("\n") ||
  JOKE.trim().length === 0
) {
  throw new Error(`Joke fails the gate: ${JOKE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
