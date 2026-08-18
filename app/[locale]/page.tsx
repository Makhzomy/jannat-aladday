import Link from "next/link";
import { getContent } from "@/content";
import { locales, phones, telLink, whatsappLink, type Locale } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import MapEmbed from "@/components/MapEmbed";
import ArcDivider from "@/components/motifs/ArcDivider";
import GlobeGrid from "@/components/motifs/GlobeGrid";
import RevealOnScroll from "@/components/RevealOnScroll";
import ar from "@/content/ar";
import en from "@/content/en";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const content = locale === "ar" ? ar : en;
  return buildMetadata(locale as Locale, "", content.meta.home);
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);

  return (
    <>
      <Hero locale={typedLocale} content={content} />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-h2 text-ink">{content.home.about.heading}</h2>
        <div className="body-copy mt-6 space-y-4 text-base text-ink/90 sm:text-lg">
          {content.home.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 text-steel/50 sm:px-6">
        <ArcDivider className="h-8 w-full" />
      </div>

      <section className="relative py-16 sm:py-20">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <GlobeGrid className="pointer-events-none absolute -start-16 top-0 h-[26rem] w-[26rem] text-haze/20" aria-hidden />
          <div className="relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-h2 text-ink">{content.home.services.heading}</h2>
              <p className="body-copy mt-2 max-w-lg text-steel">{content.home.services.intro}</p>
            </div>
            <Link
              href={`/${typedLocale}/services`}
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-date hover:text-steel"
            >
              {content.home.services.cta} &rarr;
            </Link>
          </div>

          <div className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.servicesPage.categories.map((category, i) => (
              <RevealOnScroll key={category.id} delayMs={i * 60}>
                <CategoryCard category={category} locale={typedLocale} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-haze/40 bg-steel/[0.05] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-h2 text-ink">{content.home.whyUs.heading}</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {content.home.whyUs.points.map((point) => (
              <div key={point.title}>
                <div className="h-px w-10 bg-date" />
                <h3 className="mt-4 text-h3 text-ink">{point.title}</h3>
                <p className="body-copy mt-2 text-sm text-steel">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-h2 text-ink">{content.home.location.heading}</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <h3 className="eyebrow text-steel">{content.home.location.addressLabel}</h3>
            <p className="body-copy mt-2 max-w-sm text-lg text-ink">{content.company.address}</p>

            <h3 className="eyebrow mt-8 text-steel">{content.home.location.phonesLabel}</h3>
            <ul className="mt-2 space-y-1.5">
              {phones.map((p) => (
                <li key={p.raw} className="flex flex-wrap items-center gap-x-3">
                  <a dir="ltr" href={telLink(p.raw)} className="text-lg font-medium text-ink hover:text-date">
                    {p.display}
                  </a>
                  <a
                    href={whatsappLink(p.raw)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-date hover:text-steel"
                  >
                    {content.contactPage.whatsappLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <MapEmbed title={content.home.location.heading} />
        </div>
      </section>
    </>
  );
}
