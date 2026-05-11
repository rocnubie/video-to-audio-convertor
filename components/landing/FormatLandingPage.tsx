import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Converter } from "@/components/converter/Converter";
import { FAQ } from "@/components/sections/FAQ";
import { TrustBar } from "@/components/sections/TrustBar";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbSchema,
  faqPageSchema,
  howToSchema,
  softwareApplicationSchema,
} from "@/lib/seo/schemas";
import { absoluteUrl } from "@/lib/seo/site";
import type { FormatPageContent } from "@/lib/content/format-pages";

type Props = { page: FormatPageContent };

export function FormatLandingPage({ page }: Props) {
  return (
    <>
      {/* Hero — stacked, no side-by-side. */}
      <section className="border-b border-border section-wash">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
          <nav className="mb-6 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{page.h1}</span>
          </nav>

          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
            {page.from.label} → {page.to.label} · local
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {page.subtitle}
          </p>
        </div>
      </section>

      {/* Converter */}
      <section className="mx-auto max-w-3xl px-4 pt-10 sm:pt-14">
        <Converter
          defaultOutput={page.outputFormat}
          highlightedInputs={page.highlightedInputs}
          dropzonePrompt={`Drop your ${page.from.label} here, or click to choose`}
          dropzoneHint={`Optimized for ${page.from.label} — other video formats also work.`}
        />
        <div className="mt-6">
          <TrustBar />
        </div>
      </section>

      {/* Long-form content */}
      <article className="mx-auto max-w-3xl space-y-14 px-4 py-14 sm:py-20">
        <div className="space-y-5 text-base leading-relaxed text-foreground/90">
          {page.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Use cases — image-led, tied to each scenario */}
        <section>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Common scenarios
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            When to convert {page.from.label} to {page.to.label}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {page.useCases.map((u) => (
              <article key={u.title} className="bento overflow-hidden p-0">
                <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={u.image}
                    alt={u.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {u.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {u.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Under the hood
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            How the conversion works
          </h2>
          <div className="mt-6 space-y-3">
            {page.technicalNotes.map((n) => (
              <div key={n.heading} className="bento p-5 sm:p-6">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {n.heading}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {n.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            How to
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Step by step
          </h2>
          <ol className="mt-6 space-y-3">
            {page.steps.map((s, i) => (
              <li key={s.title} className="bento flex gap-4 p-5 sm:p-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-foreground text-sm font-semibold text-background">
                  {i + 1}
                </span>
                <div>
                  <p className="text-base font-semibold tracking-tight text-foreground">
                    {s.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <FAQ items={page.faqs} eyebrow="FAQ" />

        <section className="bento p-6">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            See also
          </p>
          <p className="mt-2 text-base font-semibold tracking-tight text-foreground">
            Related converters
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {page.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-accent"
              >
                {r.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </section>
      </article>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.h1, path: `/${page.slug}` },
          ]),
          softwareApplicationSchema({
            name: `${page.from.label} to ${page.to.label} Converter`,
            description: page.metaDescription,
            url: absoluteUrl(`/${page.slug}`),
          }),
          howToSchema({
            name: `How to convert ${page.from.label} to ${page.to.label}`,
            description: `Step-by-step instructions to convert a ${page.from.label} video into a ${page.to.label} audio file in your browser, with no upload.`,
            steps: page.steps.map((s) => ({ name: s.title, text: s.body })),
          }),
          faqPageSchema(page.faqs),
        ]}
      />
    </>
  );
}
