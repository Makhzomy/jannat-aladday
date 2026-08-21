import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const paths = ["", "/services", "/gallery", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${path}`])),
      },
    }))
  );
}
