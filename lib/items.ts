import { head, put } from "@vercel/blob";
import { SEED_ITEMS } from "./seed-items";

export interface CatalogItem {
  id: string;
  imageUrl: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  featured: boolean;
  createdAt: string;
}

const ITEMS_PATH = "data/items.json";

/**
 * Reads the real catalog from Blob. Falls back to placeholder seed
 * content (see lib/seed-items.ts) when Blob isn't configured yet or the
 * catalog is genuinely empty — real uploads always take over the moment
 * the first item is saved.
 */
export async function getItems(): Promise<CatalogItem[]> {
  try {
    const info = await head(ITEMS_PATH);
    const res = await fetch(info.url, { cache: "no-store" });
    if (!res.ok) return SEED_ITEMS;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : SEED_ITEMS;
  } catch {
    return SEED_ITEMS;
  }
}

export async function saveItems(items: CatalogItem[]): Promise<void> {
  await put(ITEMS_PATH, JSON.stringify(items, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}
