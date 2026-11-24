import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Chill — revised. The first draft ran 210 chars, over the
// 200-char gate, and its tail ("a man whose name is carved into the beam
// above my son's bed") explained too much: a second image competing with
// the DNA turn, and it handed the reader the scare instead of letting it
// land. Cut the tail and the throat-clearing opening ("came back today",
// "which I expected") so the sentence is one breath: setup, turn, and the
// last word — 1974 — does the work. What is withheld (whose genes are in
// my son, and what that makes him) is the dread that outlasts the line.
const LINE =
  "The DNA kit said my son shares half my genes — and the other half belongs to the man who died in this house in 1974.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
