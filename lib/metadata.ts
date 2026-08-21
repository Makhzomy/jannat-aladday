import type { Metadata } from "next";
import { locales, siteUrl, type Locale } from "./site";

export function buildMetadata(
  locale: Locale,
  path: "" | "/services" | "/gallery" | "/contact",
  meta: { title: string; description: string }
): Metadata {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${siteUrl}/${l}${path}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${siteUrl}/${locale}${path}`,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${siteUrl}/${locale}${path}`,
      locale: locale === "ar" ? "ar_IQ" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}
