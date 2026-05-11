import {
  type ConvertOptions,
  type ConvertResult,
  FAST_PATH_EXTS,
  getExt,
} from "./types";

export type { ConvertOptions, ConvertResult, ConvertStage } from "./types";
export type { OutputFormat, Quality, EngineName } from "./types";

export async function convert(opts: ConvertOptions): Promise<ConvertResult> {
  const ext = getExt(opts.file);
  const tryFast = FAST_PATH_EXTS.has(ext);

  if (tryFast) {
    try {
      const mod = await import("./mediabunny");
      return await mod.convertWithMediaBunny(opts);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        throw err;
      }
      // fall through to ffmpeg fallback
      console.warn(
        "[converter] MediaBunny failed, falling back to ffmpeg:",
        err,
      );
    }
  }

  const mod = await import("./ffmpeg");
  return await mod.convertWithFFmpeg(opts);
}

export function pickEngineHint(
  file: File,
): "mediabunny" | "ffmpeg" {
  return FAST_PATH_EXTS.has(getExt(file)) ? "mediabunny" : "ffmpeg";
}
