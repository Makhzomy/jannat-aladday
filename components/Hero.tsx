import Link from "next/link";
import type { SiteContent } from "@/content/types";
import type { Locale } from "@/lib/site";
import GlobeGrid from "./motifs/GlobeGrid";

export default function Hero({ locale, content }: { locale: Locale; content: SiteContent }) {
  return (
    <section className="relative overflow-hidden border-b border-haze/40">
      <GlobeGrid className="pointer-events-none absolute -end-24 -top-24 h-[36rem] w-[36rem] text-steel/[0.07] sm:h-[44rem] sm:w-[44rem]" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="animate-fade-rise eyebrow text-date">{content.home.hero.eyebrow}</p>
          <h1 className="animate-fade-rise mt-4 text-display text-ink [animation-delay:120ms]">
            {content.company.nameLong}
          </h1>
          <p className="animate-fade-rise body-copy mt-6 max-w-xl text-lg text-steel sm:text-xl [animation-delay:220ms]">
            {content.home.hero.tagline}
          </p>

          <div className="animate-fade-rise mt-9 flex flex-wrap gap-4 [animation-delay:320ms]">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-steel"
            >
              {content.home.hero.ctaServices}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-date hover:text-date"
            >
              {content.home.hero.ctaContact}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
