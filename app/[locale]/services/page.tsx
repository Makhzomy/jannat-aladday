import Link from "next/link";
import { getContent } from "@/content";
import { locales, type Locale } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import { categoryIcons } from "@/components/icons/CategoryIcons";
import ArcDivider from "@/components/motifs/ArcDivider";
import RevealOnScroll from "@/components/RevealOnScroll";
import ar from "@/content/ar";
import en from "@/content/en";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  const content = locale === "ar" ? ar : en;
  return buildMetadata(locale as Locale, "/services", content.meta.services);
}

export default async function ServicesPage({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);
  const { servicesPage } = content;

  return (
    <>
      <section className="border-b border-haze/40 bg-steel/[0.05]">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="text-display text-ink">{servicesPage.heading}</h1>
          <p className="body-copy mt-5 max-w-2xl text-lg text-steel">{servicesPage.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-14">
          {servicesPage.categories.map((category, i) => {
            const Icon = categoryIcons[category.id];
            return (
              <RevealOnScroll key={category.id} delayMs={i * 40}>
                <div id={category.id} className="scroll-mt-24 border-t border-haze/40 pt-10 first:border-t-0 first:pt-0">
                  <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
                    <div className="flex shrink-0 items-start">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-steel/10 text-steel">
                        <Icon className="h-7 w-7" />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-h2 text-ink">{category.title}</h2>
                      <p className="body-copy mt-2 max-w-2xl text-steel">{category.description}</p>
                      <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                        {category.items.map((item) => (
                          <li key={item} className="flex items-baseline gap-2.5 text-sm text-ink">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-date" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 text-steel/50 sm:px-6">
        <ArcDivider className="h-8 w-full" />
      </div>

      <section className="border-y border-haze/40 bg-ink py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-h2 text-paper">{servicesPage.howWeSupply.heading}</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {servicesPage.howWeSupply.points.map((point) => (
              <div key={point.title}>
                <div className="h-px w-10 bg-date" />
                <h3 className="mt-4 text-h3 text-paper">{point.title}</h3>
                <p className="body-copy mt-2 text-sm text-haze">{point.description}</p>
              </div>
            ))}
          </div>

          <Link
            href={`/${typedLocale}/contact`}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-date px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-date/85"
          >
            {servicesPage.howWeSupply.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
