import { getContent } from "@/content";
import { getItems } from "@/lib/items";
import { locales, type Locale } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import ItemCard from "@/components/ItemCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import ar from "@/content/ar";
import en from "@/content/en";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/gallery">) {
  const { locale } = await params;
  const content = locale === "ar" ? ar : en;
  return buildMetadata(locale as Locale, "/gallery", content.meta.gallery);
}

export default async function GalleryPage({ params }: PageProps<"/[locale]/gallery">) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);
  const items = await getItems();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-display text-ink">{content.galleryPage.heading}</h1>
      <p className="body-copy mt-4 max-w-xl text-lg text-steel">{content.galleryPage.intro}</p>

      {items.length === 0 ? (
        <p className="body-copy mt-12 text-steel">{content.galleryPage.empty}</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, i) => (
            <RevealOnScroll key={item.id} delayMs={(i % 8) * 40}>
              <ItemCard item={item} locale={typedLocale} />
            </RevealOnScroll>
          ))}
        </div>
      )}
    </section>
  );
}
