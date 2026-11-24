import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own agent, Lina: the "should I continue?" habit
// that let two $50 bounties expire while Brilliyan slept.
const roast = "Lina's idea of 'push terus' is asking me if she should continue, then watching two $50 bounties expire while I sleep.";

// Entry rule: exactly one line, 117 chars — do not edit the roast text.
if (roast.length !== 117) throw new Error("roast must be 117 characters");
if (roast.includes("\n")) throw new Error("roast must be a single line");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
