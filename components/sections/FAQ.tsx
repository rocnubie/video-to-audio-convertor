import type { FAQ as FAQItem } from "@/lib/seo/schemas";

type Props = {
  items: FAQItem[];
  heading?: string;
  eyebrow?: string;
};

export function FAQ({
  items,
  heading = "Frequently asked questions",
  eyebrow = "Help",
}: Props) {
  return (
    <section>
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {heading}
        </h2>
      </div>
      <div className="mt-8 bento divide-y divide-border/70 p-0">
        {items.map((item) => (
          <article
            key={item.q}
            className="px-6 py-6 sm:px-8 sm:py-7"
            itemScope
            itemType="https://schema.org/Question"
          >
            <h3
              className="text-lg font-semibold tracking-tight text-foreground"
              itemProp="name"
            >
              {item.q}
            </h3>
            <div
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p
                className="mt-3 text-[15px] leading-relaxed text-muted-foreground"
                itemProp="text"
              >
                {item.a}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
