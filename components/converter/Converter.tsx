"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Check,
  ChevronDown,
  Download,
  FileVideo,
  Loader2,
  RefreshCcw,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  OUTPUT_FORMATS,
  formatBytes,
  formatDuration,
} from "@/lib/formats";
import {
  convert,
  pickEngineHint,
  type ConvertResult,
  type ConvertStage,
  type OutputFormat,
  type Quality,
} from "@/lib/engines";
import { getExt } from "@/lib/engines/types";
import { track } from "@/lib/analytics";
import { DropZone } from "./DropZone";
import { SegmentedPicker } from "./SegmentedPicker";

type Phase = "idle" | "ready" | "converting" | "done" | "error";

type Props = {
  defaultOutput?: OutputFormat;
  defaultQuality?: Quality;
  highlightedInputs?: string[];
  dropzonePrompt?: string;
  dropzoneHint?: string;
};

const QUALITY_OPTIONS = [
  { value: "high" as Quality, label: "High", hint: "320 kbps" },
  { value: "medium" as Quality, label: "Standard", hint: "192 kbps" },
  { value: "low" as Quality, label: "Compact", hint: "128 kbps" },
];

const QUALITY_SUMMARY: Record<Quality, string> = {
  high: "High · 320 kbps",
  medium: "Standard · 192 kbps",
  low: "Compact · 128 kbps",
  lossless: "Lossless",
};

export function Converter({
  defaultOutput = "mp3",
  defaultQuality = "medium",
  highlightedInputs,
  dropzonePrompt = "Drop a video here, or click to choose",
  dropzoneHint = "MP4, MOV, MKV, WebM, AVI and more — your file never leaves this browser.",
}: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [output, setOutput] = useState<OutputFormat>(defaultOutput);
  const [quality, setQuality] = useState<Quality>(defaultQuality);
  const [showSettings, setShowSettings] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [stage, setStage] = useState<ConvertStage>("preparing");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ConvertResult | null>(null);
  const [elapsedSec, setElapsedSec] = useState(0);

  const abortRef = useRef<AbortController | null>(null);
  const startedAtRef = useRef<number>(0);
  const downloadUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (downloadUrlRef.current) {
        URL.revokeObjectURL(downloadUrlRef.current);
      }
      abortRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (phase !== "converting") return;
    const id = window.setInterval(() => {
      setElapsedSec((Date.now() - startedAtRef.current) / 1000);
    }, 250);
    return () => window.clearInterval(id);
  }, [phase]);

  const lossless = output === "wav" || output === "flac";
  const engineHint = file ? pickEngineHint(file) : null;
  const fileExt = file ? getExt(file).toUpperCase() : "";
  const outputFormat = OUTPUT_FORMATS.find((f) => f.id === output);
  const qualitySummary = lossless ? "Lossless" : QUALITY_SUMMARY[quality];

  const reset = useCallback(() => {
    if (downloadUrlRef.current) {
      URL.revokeObjectURL(downloadUrlRef.current);
      downloadUrlRef.current = null;
    }
    setFile(null);
    setResult(null);
    setError(null);
    setProgress(0);
    setElapsedSec(0);
    setShowSettings(false);
    setPhase("idle");
  }, []);

  const handleFile = useCallback((selected: File) => {
    if (downloadUrlRef.current) {
      URL.revokeObjectURL(downloadUrlRef.current);
      downloadUrlRef.current = null;
    }
    setFile(selected);
    setResult(null);
    setError(null);
    setProgress(0);
    setShowSettings(false);
    setPhase("ready");
    track("file_selected", {
      ext: getExt(selected) || "unknown",
      size_mb: Number((selected.size / 1024 / 1024).toFixed(1)),
      engine_hint: pickEngineHint(selected),
    });
  }, []);

  const handleStart = useCallback(async () => {
    if (!file) return;
    setShowSettings(false);
    setPhase("converting");
    setProgress(0);
    setStage("preparing");
    setError(null);
    startedAtRef.current = Date.now();
    setElapsedSec(0);

    const fromExt = getExt(file) || "unknown";
    track("conversion_started", {
      from_ext: fromExt,
      to_format: output,
      quality,
    });

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await convert({
        file,
        target: output,
        quality,
        signal: controller.signal,
        onProgress: setProgress,
        onStage: setStage,
      });
      const url = URL.createObjectURL(res.blob);
      downloadUrlRef.current = url;
      setResult(res);
      setProgress(1);
      setPhase("done");
      track("conversion_completed", {
        from_ext: fromExt,
        to_format: output,
        engine: res.engineUsed,
        duration_s: Number(((Date.now() - startedAtRef.current) / 1000).toFixed(1)),
      });
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        track("conversion_cancelled", { from_ext: fromExt, to_format: output });
        setPhase("ready");
        setProgress(0);
        return;
      }
      const msg = err instanceof Error ? err.message : "Conversion failed";
      console.error("[converter]", err);
      setError(msg);
      setPhase("error");
      track("conversion_failed", {
        from_ext: fromExt,
        to_format: output,
        reason: msg.slice(0, 120),
      });
    }
  }, [file, output, quality]);

  const handleCancel = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  const handleDownload = useCallback(() => {
    if (!result || !downloadUrlRef.current) return;
    const a = document.createElement("a");
    a.href = downloadUrlRef.current;
    a.download = result.filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    track("download_clicked", { format: output });
  }, [result, output]);

  if (phase === "idle") {
    return (
      <DropZone
        onFile={handleFile}
        prompt={dropzonePrompt}
        hint={dropzoneHint}
        className="min-h-[280px]"
      />
    );
  }

  return (
    <div className="bento overflow-hidden p-0">
      {/* File header */}
      <div className="flex items-start gap-3 border-b border-border px-5 py-4 sm:px-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
          <FileVideo className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-medium tracking-tight text-foreground">
            {file?.name}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
            {file && (
              <span className="tnum">{formatBytes(file.size)}</span>
            )}
            <span className="text-muted-foreground/40">·</span>
            <span>{fileExt}</span>
            <span className="text-muted-foreground/40">·</span>
            <span>
              {engineHint === "mediabunny" ? "Fast engine" : "Compatibility engine"}
            </span>
            {highlightedInputs &&
              file &&
              !highlightedInputs.includes(getExt(file)) && (
                <>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-warning">
                    Page tuned for {highlightedInputs.join("/").toUpperCase()}
                  </span>
                </>
              )}
          </div>
        </div>
        {phase !== "converting" && (
          <button
            type="button"
            onClick={reset}
            aria-label="Remove file"
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Settings — progressive disclosure */}
      <div className="px-5 py-4 sm:px-6">
        {!showSettings ? (
          <button
            type="button"
            onClick={() => setShowSettings(true)}
            disabled={phase === "converting"}
            aria-expanded={false}
            className={cn(
              "flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left transition-colors",
              "hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "disabled:cursor-not-allowed disabled:opacity-60",
            )}
          >
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                Output
              </p>
              <p className="mt-0.5 text-[15px] font-medium tracking-tight text-foreground">
                {outputFormat?.label}
                <span className="ml-2 text-muted-foreground">
                  · {qualitySummary}
                </span>
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              Change
              <ChevronDown className="h-4 w-4" />
            </span>
          </button>
        ) : (
          <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[15px] font-semibold tracking-tight">
                Customize output
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(false)}
              >
                Done
              </Button>
            </div>

            <div className="mt-4">
              <SegmentedPicker
                label="Format"
                value={output}
                onChange={setOutput}
                options={OUTPUT_FORMATS.map((f) => ({
                  value: f.id,
                  label: f.label.replace(/\s*\(.*\)/, ""),
                }))}
              />
              {outputFormat && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {outputFormat.description}
                </p>
              )}
            </div>

            {!lossless && (
              <div className="mt-5">
                <SegmentedPicker
                  label="Bitrate"
                  value={quality}
                  onChange={setQuality}
                  options={QUALITY_OPTIONS}
                  layout="equal"
                />
              </div>
            )}

            {lossless && (
              <p className="mt-4 text-xs text-muted-foreground">
                Lossless format — bitrate is not configurable.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Converting state */}
      {phase === "converting" && (
        <div className="space-y-3 border-t border-border px-5 py-5 sm:px-6">
          <div className="flex items-center justify-between text-sm">
            <span className="inline-flex items-center gap-2 font-medium text-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              {stage === "loading-engine"
                ? "Loading converter (one-time, ~30 MB)…"
                : stage === "preparing"
                  ? "Preparing…"
                  : "Extracting audio"}
            </span>
            <span className="tnum text-muted-foreground">
              {Math.round(progress * 100)}% · {formatDuration(elapsedSec)}
            </span>
          </div>
          <Progress value={progress * 100} />
          <div className="flex justify-end">
            <Button variant="ghost" size="sm" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Done state */}
      {phase === "done" && result && (
        <div className="border-t border-border px-5 py-5 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-success">
            <Check className="h-3.5 w-3.5" />
            Done
          </div>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <p className="truncate text-base font-semibold tracking-tight text-foreground">
              {result.filename}
            </p>
            <p className="tnum text-xs text-muted-foreground">
              {formatBytes(result.blob.size)} · {formatDuration(elapsedSec)}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button onClick={handleDownload} className="gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" onClick={reset} className="gap-2">
              <RefreshCcw className="h-4 w-4" />
              Convert another file
            </Button>
          </div>
        </div>
      )}

      {/* Error state */}
      {phase === "error" && (
        <div className="border-t border-destructive/20 bg-destructive/5 px-5 py-5 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-widest text-destructive">
            Conversion failed
          </p>
          <p className="mt-2 text-sm text-foreground">
            {error ?? "Something went wrong."}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => setPhase("ready")}>
              Try again
            </Button>
            <Button variant="ghost" onClick={reset}>
              Pick a different file
            </Button>
          </div>
        </div>
      )}

      {/* Ready state — primary CTA */}
      {phase === "ready" && (
        <div className="flex items-center justify-between gap-3 border-t border-border px-5 py-4 sm:px-6">
          <p className="text-xs text-muted-foreground">
            Conversion runs locally · this tab stays online during processing.
          </p>
          <Button
            size="lg"
            onClick={handleStart}
            className={cn("min-w-[160px] gap-2")}
          >
            Extract audio
          </Button>
        </div>
      )}
    </div>
  );
}
