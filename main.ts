import { mkdirSync, writeFileSync } from "node:fs";

// Revision: "the old man" becomes "his father" so the line closes the
// circle it opened — the same father who gave up is the one nodding —
// and "just nodded" becomes "nodded once": a smaller, quieter gesture,
// one nod and no words, which is the whole point of quiet pride.
const line =
  "Eleven years after his father gave up on the truck, Sam turned the key and the engine caught on the first try, and his father wiped his hands on a rag and nodded once.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${[...line].length} characters to /output/entry.txt`);
