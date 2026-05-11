"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Check, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import { LOCALE_META } from "@/i18n/locale";
import { useRouter, usePathname } from "@/i18n/navigation";

// Smart switcher:
// - 1 locale  → renders a static badge ("EN"). No popup, no interaction.
// - 2+ locales → renders a dropdown that swaps the URL locale prefix via
//   next-intl's localePath-aware router. Drop-in ready when more locales
//   are added to routing.ts.
export function LanguageSwitcher() {
  const locales = routing.locales;
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const currentMeta = LOCALE_META[locale];
  const currentLabel = currentMeta?.native ?? locale.toUpperCase();

  // Single locale → static badge.
  if (locales.length < 2) {
    return (
      <span
        aria-label={`Current language: ${currentMeta?.english ?? locale}`}
        className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium uppercase text-muted-foreground"
      >
        <Globe className="h-3.5 w-3.5" />
        {locale}
      </span>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">{currentLabel}</span>
        <span className="sm:hidden uppercase">{locale}</span>
        <ChevronDown className="h-3.5 w-3.5" />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-50 mt-1.5 min-w-[180px] overflow-hidden rounded-xl border border-border bg-popover py-1 shadow-lg"
        >
          {locales.map((code) => {
            const meta = LOCALE_META[code];
            const selected = code === locale;
            return (
              <button
                key={code}
                role="option"
                aria-selected={selected}
                type="button"
                onClick={() => {
                  setOpen(false);
                  if (code !== locale) {
                    router.replace(pathname, { locale: code });
                  }
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-accent",
                  selected
                    ? "font-medium text-foreground"
                    : "text-muted-foreground",
                )}
              >
                <span className="flex items-baseline gap-2">
                  <span>{meta?.native ?? code}</span>
                  <span className="text-[11px] uppercase text-muted-foreground/70">
                    {code}
                  </span>
                </span>
                {selected && <Check className="h-4 w-4 text-foreground" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
