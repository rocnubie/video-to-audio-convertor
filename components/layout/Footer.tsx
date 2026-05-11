import Link from "next/link";
import { NAV, SITE, FOOTER_LINKS } from "@/lib/seo/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-muted/30 py-10">
      <div className="mx-auto max-w-6xl space-y-6 px-4">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-foreground">{SITE.name}</p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Free, open-source video to audio converter. All processing happens
              in your browser — files never leave your device.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Formats</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Site</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={SITE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Source code
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {year} {SITE.domain} — runs entirely in your browser.
        </p>
      </div>
    </footer>
  );
}
