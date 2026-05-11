import type { Metadata } from "next";
import { Converter } from "@/components/converter/Converter";
import { BentoFeatures } from "@/components/sections/BentoFeatures";
import { UseCases } from "@/components/sections/UseCases";
import { Comparison } from "@/components/sections/Comparison";
import { PrivacyStory } from "@/components/sections/PrivacyStory";
import { TrustBar } from "@/components/sections/TrustBar";
import { Steps } from "@/components/sections/Steps";
import { FAQ } from "@/components/sections/FAQ";
import { HeroProductStage } from "@/components/sections/HeroProductStage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  faqPageSchema,
  howToSchema,
  softwareApplicationSchema,
  type FAQ as FAQType,
} from "@/lib/seo/schemas";
import { SITE, absoluteUrl } from "@/lib/seo/site";

const FAQS: FAQType[] = [
  {
    q: "Is my video uploaded to any server?",
    a: "No. Every byte of your video stays inside this browser tab. The conversion runs locally with WebCodecs and WebAssembly. You can verify this by opening DevTools, watching the Network tab, and confirming no upload requests fire — or by disconnecting your network entirely after the page loads; conversion still works.",
  },
  {
    q: "Is there a file size limit?",
    a: "For MP4, MOV, MKV, and WebM the fast engine streams the file and works comfortably with multi-gigabyte inputs. Older containers (AVI, FLV, WMV, 3GP) fall back to a slower engine capped at roughly 2 GB by the browser's WebAssembly memory ceiling.",
  },
  {
    q: "Which audio formats can I export to?",
    a: "MP3, WAV, AAC, M4A, FLAC, OGG (Vorbis), and Opus. Pick MP3 for maximum compatibility, M4A or AAC for Apple devices, WAV or FLAC for lossless quality, and Opus when you need the smallest possible file at a given quality.",
  },
  {
    q: "Does it work on iPhone, iPad, or Android?",
    a: "Yes. Modern Safari (iOS 16.4+) and Chrome on Android both support the WebCodecs and WebAssembly features required. Very long videos on low-RAM phones may take longer; nothing is uploaded either way.",
  },
  {
    q: "Why is this free? What's the catch?",
    a: "There is no catch. The site is open source and runs entirely as static files on Cloudflare's edge — there are no server costs to recover. No ads, no account, no tracking beyond a privacy-friendly Plausible page-view counter.",
  },
  {
    q: "How is this different from CloudConvert, Zamzar, or 123apps?",
    a: "Those services upload your file to their server, process it there, and let you download the result. Your video sits on their machines, subject to their privacy policy and retention rules. Here, nothing ever leaves your device — the conversion is done by your own CPU.",
  },
  {
    q: "Can I extract audio from a YouTube video?",
    a: "Not directly — we don't download from YouTube or any other streaming site. If you legally have a video file (your own upload, an offline-saved file, content you own), drop it here and we'll extract the audio. We deliberately stay out of the gray area.",
  },
  {
    q: "What audio bitrate should I pick?",
    a: "192 kbps is the right default for spoken-word (podcasts, lectures, voice memos). Pick 320 kbps for music or anything where audio quality matters. Pick 128 kbps when you want the smallest possible file and the source is voice-only. WAV and FLAC are lossless — no bitrate choice applies.",
  },
];

const HOW_TO_STEPS = [
  {
    name: "Pick a video file",
    text: "Drag a video file onto the page, or click the drop area to open a file picker. Supported inputs: MP4, MOV, MKV, WebM, AVI, FLV, WMV, 3GP, MPEG.",
  },
  {
    name: "Choose your output format",
    text: "Select MP3 for compatibility, M4A for Apple devices, WAV or FLAC for lossless quality, or OGG/Opus for efficient streaming. Optionally adjust the bitrate.",
  },
  {
    name: "Extract and download",
    text: "Click Extract audio. The conversion runs locally in your browser. When the progress bar finishes, download the resulting audio file with one click.",
  },
];

export const metadata: Metadata = buildMetadata({
  title:
    "Free Video to Audio Converter — In Your Browser, No Upload",
  description:
    "Extract MP3, WAV, AAC, M4A, FLAC, or OGG from MP4, MOV, MKV, WebM, AVI directly in your browser. 100% local, no upload, no signup, no file size limit. Free and open source.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Hero — left text + right product stage. No gradient backdrop. */}
      <section className="border-b border-border/60 section-wash">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
              100% local · 0 uploads · open source
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Convert video to audio without sending the file anywhere.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Drop an MP4, MOV, MKV, WebM, or AVI into the box on the right and
              get back MP3, WAV, AAC, M4A, FLAC, or OGG — extracted by your own
              CPU, in your own browser. No upload step, no daily limit, no
              account, no watermark.
            </p>

            <dl className="mt-8 grid max-w-md grid-cols-3 gap-6">
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Engine
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight">5 KB</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Cap
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight">None</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Outputs
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight">7</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#start"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Pick a video to start
              </a>
              <a
                href="#how"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                How it works
              </a>
            </div>
          </div>

          <div className="lg:pl-6">
            <HeroProductStage />
          </div>
        </div>
      </section>

      {/* Live converter */}
      <section id="start" className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Try it
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Drop a video below. It works.
          </h2>
        </div>
        <Converter />
        <div className="mt-6">
          <TrustBar />
        </div>
      </section>

      {/* Bento features — the high-trust block */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <BentoFeatures />
      </section>

      {/* SEO-rich content — use cases with photography */}
      <section className="border-y border-border/60 section-wash">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <UseCases />
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Comparison />
      </section>

      {/* Privacy story */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <PrivacyStory />
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
        <Steps />
      </section>

      {/* Pick the right format guide */}
      <section className="border-t border-border/60 section-wash">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Output format guide
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Pick the right audio format for the job.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Seven output formats sound like overkill until you actually need a
              FLAC for archival or an Opus for podcast distribution. Here&apos;s
              when to use which.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "MP3",
                blurb: "The universal default. Plays in every car stereo, every Bluetooth speaker, every device older than ten years. Pick this when you aren't sure.",
                when: "Voice, music for general use",
              },
              {
                title: "M4A (AAC)",
                blurb: "Better quality than MP3 at the same bitrate. The Apple-native choice for iTunes libraries, iPhone ringtones, and AirPods listening.",
                when: "Apple ecosystem",
              },
              {
                title: "WAV",
                blurb: "Uncompressed, bit-perfect copy of the original audio. Use it as the source when you'll edit further in Audacity, Audition, Logic, or Pro Tools.",
                when: "Editing master",
              },
              {
                title: "FLAC",
                blurb: "Lossless like WAV, but about half the file size. The audiophile choice for music archives, Hi-Fi playback, and offline collections.",
                when: "Lossless archive",
              },
              {
                title: "OGG Vorbis",
                blurb: "Royalty-free open format. Good for web players, game audio, and open-source projects where MP3 licensing matters.",
                when: "Open-format pipeline",
              },
              {
                title: "Opus",
                blurb: "The most efficient modern codec. Best quality per kilobyte — perfect for podcasts, voice clips, and low-bandwidth streaming.",
                when: "Modern streaming",
              },
            ].map((card) => (
              <div key={card.title} className="bento p-5 sm:p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-lg font-semibold tracking-tight">
                    {card.title}
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                    {card.when}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <FAQ items={FAQS} />
      </section>

      <JsonLd
        data={[
          softwareApplicationSchema({
            name: SITE.name,
            description: SITE.description,
            url: absoluteUrl("/"),
          }),
          howToSchema({
            name: "How to convert video to audio in your browser",
            description:
              "Step-by-step guide to extracting an audio track from a video file using only your browser — no upload, no install.",
            steps: HOW_TO_STEPS,
          }),
          faqPageSchema(FAQS),
        ]}
      />
    </>
  );
}
