import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Four hundred years I've kept this curse wound tight \u2014 the thorned gates, the ravens on their rounds, the ledger of every soul in the valley \u2014 and the bards never sing the paperwork. Sit \u2014 no, not there; that chair still remembers the last hero. You came for the sword, I suppose. Behind the tapestry. Third brick from the left. Take it. Honestly. I spent three centuries rehearsing this speech, and all I want now is someone else to hold the door while I \u2014 ... well. The kingdom is yours, hero. Try not to wake me when the prophecy knocks.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
