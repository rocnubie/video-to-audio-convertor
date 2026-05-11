import { Check, Download, FileVideo } from "lucide-react";
import { ProductWaveform } from "./ProductWaveform";

// Visual mock of a completed conversion — not interactive. The real
// <Converter/> lives in the section below. This is the "product stage"
// half of the bento-enterprise hero.
export function HeroProductStage() {
  return (
    <div className="bento overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-border/70 px-5 py-3 text-xs text-muted-foreground">
        <span className="font-medium tracking-tight">Conversion result</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-medium text-success">
          <Check className="h-3 w-3" /> Done · 2.1 s
        </span>
      </div>

      <div className="px-5 pb-5 pt-4">
        <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 px-3 py-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background text-muted-foreground">
            <FileVideo className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1 text-sm">
            <p className="truncate font-medium text-foreground">
              interview-final.mp4
            </p>
            <p className="text-xs text-muted-foreground">
              742 MB · H.264 / AAC · 47 min
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-border/60 px-4 py-3">
          <ProductWaveform />
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>00:00</span>
            <span>47:18</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
          <div className="rounded-lg border border-border/60 px-3 py-2">
            <p className="text-muted-foreground">Output</p>
            <p className="mt-0.5 font-semibold text-foreground">MP3</p>
          </div>
          <div className="rounded-lg border border-border/60 px-3 py-2">
            <p className="text-muted-foreground">Bitrate</p>
            <p className="mt-0.5 font-semibold text-foreground">192 kbps</p>
          </div>
          <div className="rounded-lg border border-border/60 px-3 py-2">
            <p className="text-muted-foreground">Size</p>
            <p className="mt-0.5 font-semibold text-foreground">64.8 MB</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-foreground px-4 py-3 text-background">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">interview-final.mp3</p>
            <p className="text-[11px] opacity-60">
              Saved locally · never uploaded
            </p>
          </div>
          <button
            type="button"
            disabled
            aria-hidden="true"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-background px-3 py-1.5 text-xs font-semibold text-foreground"
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
