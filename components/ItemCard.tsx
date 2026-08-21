import Image from "next/image";
import type { CatalogItem } from "@/lib/items";
import type { Locale } from "@/lib/site";

export default function ItemCard({ item, locale }: { item: CatalogItem; locale: Locale }) {
  const name = locale === "ar" ? item.nameAr : item.nameEn;
  const description = locale === "ar" ? item.descriptionAr : item.descriptionEn;

  return (
    <figure className="overflow-hidden rounded-2xl border border-haze/50 bg-paper transition-shadow hover:shadow-[0_12px_30px_-16px_rgba(27,42,56,0.35)]">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={item.imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        />
      </div>
      <figcaption className="p-4">
        <p className="font-semibold text-ink">{name}</p>
        {description && <p className="body-copy mt-1 text-sm text-steel">{description}</p>}
      </figcaption>
    </figure>
  );
}
