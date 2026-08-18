import type { Locale } from "@/lib/site";
import type { SiteContent } from "./types";
import ar from "./ar";
import en from "./en";

const dictionaries: Record<Locale, SiteContent> = { ar, en };

export function getContent(locale: Locale): SiteContent {
  return dictionaries[locale];
}

export type { SiteContent, Category, CategoryId, Point } from "./types";
