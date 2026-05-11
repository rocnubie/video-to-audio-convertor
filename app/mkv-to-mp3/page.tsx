import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FormatLandingPage } from "@/components/landing/FormatLandingPage";
import { getFormatPage } from "@/lib/content/format-pages";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "mkv-to-mp3";

export const metadata: Metadata = (() => {
  const page = getFormatPage(SLUG);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
  });
})();

export default function Page() {
  const page = getFormatPage(SLUG);
  if (!page) notFound();
  return <FormatLandingPage page={page} />;
}
