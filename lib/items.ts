import { head, put } from "@vercel/blob";

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

export async function getItems(): Promise<CatalogItem[]> {
  try {
    const info = await head(ITEMS_PATH);
    const res = await fetch(info.url, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
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
