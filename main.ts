// news-image-20261117 entry: "The World in a Day" for Tuesday 17 November 2026.
//
// The finished front-page image lives beside this file as entry.png (drawn as
// flat vector panels in image.html and rendered to a 1024x1024 PNG). This
// program's whole job is to deliver those bytes to the output directory,
// unchanged, every run:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// With no MAKEFUN_OUTPUT_DIR set it writes to /output, as in the grader.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
