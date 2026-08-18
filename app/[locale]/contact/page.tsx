import { getContent } from "@/content";
import { locales, email, mapShortLink, type Locale } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import PhoneActions from "@/components/PhoneActions";
import MapEmbed from "@/components/MapEmbed";
import ar from "@/content/ar";
import en from "@/content/en";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  const content = locale === "ar" ? ar : en;
  return buildMetadata(locale as Locale, "/contact", content.meta.contact);
}

// TODO(client): supply real business hours once available — do not invent them.
export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);
  const { contactPage } = content;

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-display text-ink">{contactPage.heading}</h1>
      <p className="body-copy mt-4 max-w-xl text-lg text-steel">{contactPage.intro}</p>

      <div className="mt-12">
        <h2 className="eyebrow text-steel">{contactPage.phonesHeading}</h2>
        <div className="mt-4">
          <PhoneActions content={content} />
        </div>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="eyebrow text-steel">{contactPage.emailHeading}</h2>
          <a href={`mailto:${email}`} className="mt-3 inline-block text-lg font-medium text-ink hover:text-date">
            {email}
          </a>
        </div>
        <div>
          <h2 className="eyebrow text-steel">{contactPage.addressHeading}</h2>
          <p className="body-copy mt-3 max-w-sm text-lg text-ink">{content.company.address}</p>
        </div>
      </div>

      <div className="mt-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="eyebrow text-steel">{contactPage.mapHeading}</h2>
          <a
            href={mapShortLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-date hover:text-date"
          >
            {contactPage.mapCta}
          </a>
        </div>
        <div className="mt-5">
          <MapEmbed title={contactPage.mapHeading} />
        </div>
      </div>
    </section>
  );
}
