import type { MetadataRoute } from "next";
import { FORMAT_PAGES } from "@/lib/content/format-pages";
import { SITE } from "@/lib/seo/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const staticPaths: { url: string; priority: number }[] = [
    { url: "/", priority: 1.0 },
    { url: "/privacy", priority: 0.3 },
    { url: "/about", priority: 0.3 },
  ];

  return [
    ...staticPaths.map(({ url, priority }) => ({
      url: `${SITE.url}${url}`,
      lastModified: today,
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...FORMAT_PAGES.map((p) => ({
      url: `${SITE.url}/${p.slug}`,
      lastModified: today,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
