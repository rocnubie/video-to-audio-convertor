import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for VideoToAudioConverter.org. Your video files are never uploaded — all conversion happens locally in your browser.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-base leading-relaxed">
      <h1 className="text-3xl font-bold tracking-tight">Privacy</h1>
      <p className="text-sm text-muted-foreground">Last updated: 2026-05</p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Your video files</h2>
        <p>
          Your video files are <strong>never uploaded</strong>. All conversion
          happens inside your browser tab using WebCodecs and WebAssembly. The
          file path stays on your device; the bytes are read into a temporary
          in-memory buffer, processed, and discarded when you close the tab or
          convert another file.
        </p>
        <p>
          You can verify this trivially: open browser DevTools, go to the
          Network tab, start a conversion, and confirm no upload requests are
          made. You can also disconnect from the internet after the page loads
          — the converter still works.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Analytics</h2>
        <p>
          We use{" "}
          <a
            href="https://plausible.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Plausible Analytics
          </a>{" "}
          to count page views and aggregate conversion events. Plausible is
          cookieless, doesn&apos;t track users across sites, and stores only
          aggregate numbers. Specifically we record:
        </p>
        <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
          <li>Page views (URL, referrer, country derived from IP, device type)</li>
          <li>
            Conversion events (input extension, output format, file size bucket,
            engine used, duration) — never the file name or content
          </li>
        </ul>
        <p>
          IP addresses are <strong>not</strong> stored; Plausible derives the
          country from them, then discards the IP. We do not have a way to
          identify individual visitors.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Cookies and local storage</h2>
        <p>
          The site uses no cookies. Browser caching is used for the static
          assets (HTML, CSS, JS, the FFmpeg WebAssembly engine when needed) so
          repeat visits load fast — this is normal HTTP caching, not tracking.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Third parties</h2>
        <p>
          The site is hosted on Cloudflare Pages. Cloudflare may log connection
          metadata as described in their{" "}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            privacy policy
          </a>
          . No other third-party scripts are loaded.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          Open an issue on{" "}
          <a
            href="https://github.com/rocnubie/video-to-audio-convertor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            GitHub
          </a>{" "}
          if you have privacy questions or want a specific event removed from
          analytics.
        </p>
      </section>
    </article>
  );
}
