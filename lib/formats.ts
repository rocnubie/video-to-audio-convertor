import type { OutputFormat } from "./engines/types";

export interface OutputFormatInfo {
  id: OutputFormat;
  label: string;
  ext: string;
  description: string;
  lossless: boolean;
}

export const OUTPUT_FORMATS: OutputFormatInfo[] = [
  {
    id: "mp3",
    label: "MP3",
    ext: ".mp3",
    description: "Universal compatibility, small file",
    lossless: false,
  },
  {
    id: "wav",
    label: "WAV",
    ext: ".wav",
    description: "Uncompressed, perfect quality",
    lossless: true,
  },
  {
    id: "m4a",
    label: "M4A (AAC)",
    ext: ".m4a",
    description: "Apple/iTunes friendly",
    lossless: false,
  },
  {
    id: "aac",
    label: "AAC",
    ext: ".aac",
    description: "Raw AAC stream",
    lossless: false,
  },
  {
    id: "flac",
    label: "FLAC",
    ext: ".flac",
    description: "Lossless, ~half WAV size",
    lossless: true,
  },
  {
    id: "ogg",
    label: "OGG Vorbis",
    ext: ".ogg",
    description: "Open format",
    lossless: false,
  },
  {
    id: "opus",
    label: "Opus",
    ext: ".opus",
    description: "Modern, efficient",
    lossless: false,
  },
];

export interface InputFormatInfo {
  id: string;
  label: string;
  exts: string[];
  fastPath: boolean;
}

export const INPUT_FORMATS: InputFormatInfo[] = [
  { id: "mp4", label: "MP4", exts: ["mp4", "m4v"], fastPath: true },
  { id: "mov", label: "MOV / QuickTime", exts: ["mov", "qt"], fastPath: true },
  { id: "mkv", label: "MKV / Matroska", exts: ["mkv"], fastPath: true },
  { id: "webm", label: "WebM", exts: ["webm"], fastPath: true },
  { id: "avi", label: "AVI", exts: ["avi"], fastPath: false },
  { id: "flv", label: "FLV", exts: ["flv"], fastPath: false },
  { id: "wmv", label: "WMV", exts: ["wmv", "asf"], fastPath: false },
  { id: "3gp", label: "3GP", exts: ["3gp", "3g2"], fastPath: false },
  { id: "mpeg", label: "MPEG", exts: ["mpg", "mpeg", "mts", "m2ts", "ts"], fastPath: false },
];

export const ACCEPTED_EXTENSIONS: string[] = INPUT_FORMATS.flatMap(
  (f) => f.exts,
).map((e) => `.${e}`);

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${Math.round(seconds)}s`;
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}m ${s}s`;
}
