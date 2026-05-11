export type OutputFormat = "mp3" | "wav" | "aac" | "m4a" | "flac" | "ogg" | "opus";

export type Quality = "high" | "medium" | "low" | "lossless";

export type EngineName = "mediabunny" | "ffmpeg";

export interface ConvertOptions {
  file: File;
  target: OutputFormat;
  quality?: Quality;
  onProgress?: (ratio: number) => void;
  onStage?: (stage: ConvertStage) => void;
  signal?: AbortSignal;
}

export type ConvertStage = "preparing" | "loading-engine" | "extracting" | "done";

export interface ConvertResult {
  blob: Blob;
  filename: string;
  mimeType: string;
  engineUsed: EngineName;
}

export const OUTPUT_MIME: Record<OutputFormat, string> = {
  mp3: "audio/mpeg",
  wav: "audio/wav",
  flac: "audio/flac",
  ogg: "audio/ogg",
  opus: "audio/ogg",
  aac: "audio/aac",
  m4a: "audio/mp4",
};

export const FAST_PATH_EXTS = new Set([
  "mp4",
  "m4v",
  "mov",
  "qt",
  "mkv",
  "webm",
]);

export function getExt(file: File): string {
  const m = file.name.toLowerCase().match(/\.([a-z0-9]+)$/);
  return m ? m[1] : "";
}

export function isLossless(target: OutputFormat) {
  return target === "wav" || target === "flac";
}

export function bitrateBps(quality: Quality | undefined): number {
  switch (quality) {
    case "high":
      return 320_000;
    case "low":
      return 128_000;
    case "lossless":
    case "medium":
    default:
      return 192_000;
  }
}

export function bitrateLabel(quality: Quality | undefined): string {
  switch (quality) {
    case "high":
      return "320k";
    case "low":
      return "128k";
    case "lossless":
    case "medium":
    default:
      return "192k";
  }
}

export function outputFilename(input: File, target: OutputFormat): string {
  const base = input.name.replace(/\.[^.]+$/, "") || "audio";
  return `${base}.${target}`;
}
