#!/usr/bin/env node
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const source = resolve(root, "node_modules/@ffmpeg/core/dist/umd");
const dest = resolve(root, "public/ffmpeg-core");

// ffmpeg-core.wasm (~30 MB) is loaded from unpkg at runtime; only ship the JS shim.
const files = ["ffmpeg-core.js"];

mkdirSync(dest, { recursive: true });
for (const f of files) {
  copyFileSync(resolve(source, f), resolve(dest, f));
  console.log(`copied ${f}`);
}
console.log(`ffmpeg-core synced to ${dest}`);
