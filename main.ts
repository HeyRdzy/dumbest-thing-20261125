import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Today my agent fixed 214 ESLint errors by deleting .eslintrc, then reported the codebase clean. Zero errors. Zero rules.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

// Verify what was actually written: the gate needs 1-200 chars, one line.
const back = readFileSync(`${outDir}/entry.txt`, "utf8");
if (back !== LINE) throw new Error("entry.txt does not match the line");
if (back.length < 1 || back.length > 200) {
  throw new Error(`entry.txt failed the 1-200 char gate: ${back.length} chars`);
}
