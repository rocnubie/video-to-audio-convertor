import { Check } from "lucide-react";

const CLAIMS = [
  {
    title: "DevTools verification",
    body: "Open the Network tab in your browser, start a conversion, watch zero upload requests fire. Nothing to take on faith.",
  },
  {
    title: "Works offline",
    body: "After the first page load, you can disconnect Wi-Fi entirely. The conversion still completes. Try it.",
  },
  {
    title: "No retention, no logs",
    body: "There is no server-side anything. Your file is read into a temporary buffer in your tab, processed, and discarded.",
  },
  {
    title: "Cookieless analytics",
    body: "Plausible counts page views without tracking individuals, without cookies, and without storing IP addresses.",
  },
];

export function PrivacyStory() {
  return (
    <section className="bento grid items-stretch gap-0 overflow-hidden p-0 lg:grid-cols-[1.05fr_1fr]">
      <div className="p-7 sm:p-10">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Privacy story
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Privacy that&apos;s easy to verify, not just promised.
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          Every other &ldquo;privacy-first&rdquo; converter still moves the file
          off your device. We made the simpler architectural choice: don&apos;t
          have a server in the first place.
        </p>

        <ul className="mt-7 space-y-4">
          {CLAIMS.map((c) => (
            <li key={c.title} className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                <Check className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {c.title}
                </p>
                <p className="text-sm text-muted-foreground">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative min-h-[260px] overflow-hidden border-t border-border/60 lg:border-l lg:border-t-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
          alt="Studio headphones — local-first listening"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
