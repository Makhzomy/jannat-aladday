import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { plexSans, plexSansArabic } from "../fonts";
import "../globals.css";
import { getContent } from "@/content";
import { locales, isRtl, email, phones, geo, siteUrl, type Locale } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);
  const dir = isRtl(typedLocale) ? "rtl" : "ltr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: content.company.nameLong,
    description: content.meta.siteDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: content.company.address,
      addressLocality: "Basra",
      addressCountry: "IQ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
    },
    telephone: phones[0].display,
    email,
    url: `${siteUrl}/${typedLocale}`,
    image: `${siteUrl}/opengraph-image.png`,
  };

  return (
    <html
      lang={typedLocale}
      dir={dir}
      className={`${plexSans.variable} ${plexSansArabic.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header locale={typedLocale} content={content} />
        <main className="flex-1">{children}</main>
        <Footer locale={typedLocale} content={content} />
      </body>
    </html>
  );
}
