import { Cpu, Lock, ShieldCheck } from "lucide-react";

const FORMAT_CHIPS = [
  "MP4",
  "MOV",
  "MKV",
  "WebM",
  "AVI",
  "FLV",
  "WMV",
  "3GP",
  "MP3",
  "WAV",
  "AAC",
  "M4A",
  "FLAC",
  "OGG",
  "Opus",
];

export function BentoFeatures() {
  return (
    <section className="grid gap-4 sm:grid-cols-6 sm:gap-5">
      {/* Big card — privacy / local processing */}
      <article className="bento sm:col-span-4 sm:row-span-2 flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <Lock className="h-3.5 w-3.5" /> Local-only architecture
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Your video opens here. It never leaves.
          </h3>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Conversion runs inside your browser tab with WebCodecs and a small
            WebAssembly fallback. No upload, no server processing, no temporary
            cloud copy. Disconnect your Wi-Fi after the page loads and the
            converter still works.
          </p>
        </div>
        <div className="mt-auto grid grid-cols-3 gap-3 text-sm">
          <div className="rounded-xl border border-border/60 p-3">
            <p className="text-xs font-medium text-muted-foreground">
              Outbound bytes
            </p>
            <p className="mt-1 text-xl font-semibold tracking-tight">0</p>
          </div>
          <div className="rounded-xl border border-border/60 p-3">
            <p className="text-xs font-medium text-muted-foreground">
              Server copy
            </p>
            <p className="mt-1 text-xl font-semibold tracking-tight">None</p>
          </div>
          <div className="rounded-xl border border-border/60 p-3">
            <p className="text-xs font-medium text-muted-foreground">
              Retention
            </p>
            <p className="mt-1 text-xl font-semibold tracking-tight">0 s</p>
          </div>
        </div>
      </article>

      {/* Accent stat card — the one bounded accent surface */}
      <article className="bento-accent sm:col-span-2 flex flex-col justify-between p-6 min-h-[200px]">
        <span className="text-xs font-medium uppercase tracking-widest opacity-70">
          File ceiling
        </span>
        <div>
          <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
            No cap
          </p>
          <p className="mt-2 text-sm opacity-85">
            Streaming engine handles multi-gigabyte MP4, MOV, MKV, WebM in real
            time.
          </p>
        </div>
      </article>

      {/* Engine stat */}
      <article className="bento sm:col-span-2 flex flex-col justify-between p-6 min-h-[200px]">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <Cpu className="h-3.5 w-3.5" /> Dual engine
        </span>
        <div>
          <p className="text-3xl font-semibold tracking-tight">
            5 KB <span className="text-base font-normal text-muted-foreground">primary</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            MediaBunny (WebCodecs) for MP4 · MOV · MKV · WebM. FFmpeg WASM only
            for legacy formats — and only on demand.
          </p>
        </div>
      </article>

      {/* Wide format chip strip */}
      <article className="bento sm:col-span-6 p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Format coverage
            </span>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">
              Drop almost anything in. Take what you need out.
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
            <ShieldCheck className="h-3.5 w-3.5" /> 15 formats supported
          </span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {FORMAT_CHIPS.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-border/70 bg-muted/30 px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {chip}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
