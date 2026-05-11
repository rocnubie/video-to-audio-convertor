import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { USE_CASES } from "@/lib/content/use-cases";

export function UseCases() {
  return (
    <section>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Who uses this
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for the videos people actually have lying around.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Not a research toy — a tool tuned for the four conversions that cover
          the vast majority of real day-to-day audio extraction.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {USE_CASES.map((u) => (
          <Link
            key={u.title}
            href={u.href}
            className="group bento overflow-hidden transition-all hover:-translate-y-0.5"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={u.imageUrl}
                alt={u.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute right-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
                {u.formatHint}
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">
                  {u.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {u.body}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
