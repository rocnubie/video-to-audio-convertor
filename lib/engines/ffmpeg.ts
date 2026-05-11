import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

import {
  type ConvertOptions,
  type ConvertResult,
  OUTPUT_MIME,
  type OutputFormat,
  type Quality,
  bitrateLabel,
  getExt,
  outputFilename,
} from "./types";

// ffmpeg-core.js is self-hosted (109 KB, comfortably under any limit).
// ffmpeg-core.wasm is 30.7 MB — bigger than Cloudflare Pages' 25 MiB per-file
// upload cap — so we load it from unpkg, pinned to the exact installed version.
const CORE_JS = "/ffmpeg-core/ffmpeg-core.js";
const CORE_WASM_VERSION = "0.12.10";
const CORE_WASM =
  `https://unpkg.com/@ffmpeg/core@${CORE_WASM_VERSION}/dist/umd/ffmpeg-core.wasm`;

let cached: FFmpeg | null = null;
let loadPromise: Promise<FFmpeg> | null = null;

async function getFFmpeg(): Promise<FFmpeg> {
  if (cached) return cached;
  if (loadPromise) return loadPromise;

  loadPromise = (async () => {
    const ffmpeg = new FFmpeg();
    await ffmpeg.load({
      coreURL: CORE_JS,
      wasmURL: CORE_WASM,
    });
    cached = ffmpeg;
    return ffmpeg;
  })();

  try {
    return await loadPromise;
  } catch (err) {
    loadPromise = null;
    throw err;
  }
}

function encodeArgs(target: OutputFormat, quality: Quality | undefined): string[] {
  const br = bitrateLabel(quality);
  switch (target) {
    case "mp3":
      return ["-acodec", "libmp3lame", "-b:a", br];
    case "wav":
      return ["-acodec", "pcm_s16le"];
    case "flac":
      return ["-acodec", "flac"];
    case "aac":
    case "m4a":
      return ["-acodec", "aac", "-b:a", br];
    case "ogg":
      return ["-acodec", "libvorbis", "-b:a", br];
    case "opus":
      return ["-acodec", "libopus", "-b:a", br];
  }
}

export async function convertWithFFmpeg(
  opts: ConvertOptions,
): Promise<ConvertResult> {
  const { file, target, quality, onProgress, onStage, signal } = opts;

  onStage?.("loading-engine");
  const ffmpeg = await getFFmpeg();

  if (signal?.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }

  const inExt = getExt(file) || "bin";
  const inputName = `input.${inExt}`;
  const outputName = `output.${target}`;

  const progressHandler = ({ progress }: { progress: number }) => {
    onProgress?.(Math.max(0, Math.min(1, progress)));
  };
  ffmpeg.on("progress", progressHandler);

  let aborted = false;
  const onAbort = () => {
    aborted = true;
    try {
      ffmpeg.terminate();
    } catch {
      /* noop */
    }
    cached = null;
    loadPromise = null;
  };
  signal?.addEventListener("abort", onAbort, { once: true });

  try {
    onStage?.("extracting");
    await ffmpeg.writeFile(inputName, await fetchFile(file));

    const args = [
      "-i",
      inputName,
      "-vn",
      ...encodeArgs(target, quality),
      outputName,
    ];

    await ffmpeg.exec(args);

    if (aborted) {
      throw new DOMException("Aborted", "AbortError");
    }

    const data = await ffmpeg.readFile(outputName);
    const bytes = data instanceof Uint8Array ? data : new Uint8Array();

    try {
      await ffmpeg.deleteFile(inputName);
      await ffmpeg.deleteFile(outputName);
    } catch {
      /* noop */
    }

    onStage?.("done");

    return {
      blob: new Blob([bytes as BlobPart], { type: OUTPUT_MIME[target] }),
      filename: outputFilename(file, target),
      mimeType: OUTPUT_MIME[target],
      engineUsed: "ffmpeg",
    };
  } finally {
    ffmpeg.off("progress", progressHandler);
    signal?.removeEventListener("abort", onAbort);
  }
}
