import {
  ALL_FORMATS,
  AdtsOutputFormat,
  BlobSource,
  BufferTarget,
  Conversion,
  FlacOutputFormat,
  Input,
  Mp3OutputFormat,
  Mp4OutputFormat,
  OggOutputFormat,
  Output,
  WavOutputFormat,
  type OutputFormat as MbOutputFormat,
} from "mediabunny";

import {
  type ConvertOptions,
  type ConvertResult,
  OUTPUT_MIME,
  type OutputFormat,
  bitrateBps,
  isLossless,
  outputFilename,
} from "./types";

function makeOutputFormat(target: OutputFormat): MbOutputFormat {
  switch (target) {
    case "mp3":
      return new Mp3OutputFormat();
    case "wav":
      return new WavOutputFormat();
    case "flac":
      return new FlacOutputFormat();
    case "ogg":
    case "opus":
      return new OggOutputFormat();
    case "aac":
      return new AdtsOutputFormat();
    case "m4a":
      return new Mp4OutputFormat();
  }
}

function audioCodec(target: OutputFormat) {
  switch (target) {
    case "mp3":
      return "mp3" as const;
    case "wav":
      return "pcm-s16" as const;
    case "flac":
      return "flac" as const;
    case "ogg":
      return "vorbis" as const;
    case "opus":
      return "opus" as const;
    case "aac":
    case "m4a":
      return "aac" as const;
  }
}

export async function convertWithMediaBunny(
  opts: ConvertOptions,
): Promise<ConvertResult> {
  const { file, target, quality, onProgress, onStage, signal } = opts;

  onStage?.("preparing");

  const input = new Input({
    formats: ALL_FORMATS,
    source: new BlobSource(file),
  });

  const output = new Output({
    format: makeOutputFormat(target),
    target: new BufferTarget(),
  });

  const codec = audioCodec(target);
  const audioConfig = isLossless(target)
    ? { codec }
    : { codec, bitrate: bitrateBps(quality) };

  const conversion = await Conversion.init({
    input,
    output,
    video: { discard: true },
    audio: audioConfig,
  });

  if (!conversion.isValid) {
    const reasons =
      conversion.discardedTracks
        ?.map((t) => `${t.track.type}: ${t.reason}`)
        .join(", ") ?? "unknown";
    throw new Error(`MediaBunny cannot convert this file (${reasons})`);
  }

  if (onProgress) {
    conversion.onProgress = (p) => onProgress(p);
  }

  if (signal) {
    if (signal.aborted) {
      conversion.cancel();
      throw new DOMException("Aborted", "AbortError");
    }
    signal.addEventListener("abort", () => conversion.cancel(), {
      once: true,
    });
  }

  onStage?.("extracting");
  await conversion.execute();

  const buffer = output.target.buffer;
  if (!buffer) {
    throw new Error("MediaBunny produced no output");
  }

  onStage?.("done");

  return {
    blob: new Blob([buffer as BlobPart], { type: OUTPUT_MIME[target] }),
    filename: outputFilename(file, target),
    mimeType: OUTPUT_MIME[target],
    engineUsed: "mediabunny",
  };
}
