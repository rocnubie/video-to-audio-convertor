import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/seo/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "About VideoToAudioConverter.org — a free, open-source, fully local video to audio converter.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-base leading-relaxed">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>

      <p>
        <strong>{SITE.name}</strong> is a free, open-source tool for extracting
        audio out of video files — entirely in your browser. No upload, no
        signup, no watermarks, no daily quota.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Why another converter?</h2>
        <p>
          Most online video converters work the same way: you upload your file
          to a server, the server processes it, you download the result. That
          model has obvious problems — your file sits on someone else&apos;s
          machines, conversion speed depends on a queue, and the service has to
          recover server costs somehow (usually ads, signup walls, or paid
          tiers).
        </p>
        <p>
          Modern browsers can do all the work locally. WebCodecs and
          WebAssembly are fast enough that a one-hour MP4 converts to MP3 in
          under a minute on a regular laptop. Once you accept that, the
          server-side model just looks wasteful.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">How it&apos;s built</h2>
        <p>The site uses two engines:</p>
        <ul className="ml-5 list-disc space-y-2 text-sm text-muted-foreground">
          <li>
            <strong>MediaBunny</strong> (TypeScript + WebCodecs) for MP4, MOV,
            MKV, WebM. Streaming, fast, no file size ceiling.
          </li>
          <li>
            <strong>FFmpeg compiled to WebAssembly</strong> for older or unusual
            containers like AVI, FLV, WMV, 3GP. Lazy-loaded (~30 MB) only when
            needed, and only on those formats.
          </li>
        </ul>
        <p>
          The UI is Next.js statically exported to plain HTML/CSS/JS and served
          from Cloudflare Pages. There is no backend.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Open source</h2>
        <p>
          Every line of the front-end is on{" "}
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            GitHub
          </a>
          . Issues and pull requests welcome. If you spot a video format that
          should work but doesn&apos;t, please file an issue with a sample file
          (or its `mediainfo` output).
        </p>
      </section>
    </article>
  );
}
