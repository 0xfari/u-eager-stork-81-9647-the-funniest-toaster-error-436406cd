import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One slot jammed, one slot silent: the joke is the refusal, not the jam.
// Deadpan appliance voice: it reports the jam like a clerk filing a report.
// Seventy characters, no toast pun: the second slot does all the work.
const MESSAGE =
  "ERROR: Slot 2 jammed with a Pop-Tart. Slot 1 refuses to talk about it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), MESSAGE, "utf8");
