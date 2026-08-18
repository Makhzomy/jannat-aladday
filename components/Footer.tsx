import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "@/content/types";
import { phones, email, telLink, whatsappLink, mapShortLink, type Locale } from "@/lib/site";
import Lattice from "./motifs/Lattice";

export default function Footer({ locale, content }: { locale: Locale; content: SiteContent }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-ink bg-ink text-paper">
      <Lattice className="pointer-events-none absolute inset-0 h-full w-full text-haze/[0.06]" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/logo/shield.webp"
              alt=""
              width={64}
              height={64}
              className="h-12 w-12 opacity-90"
            />
            <p className="body-copy mt-4 max-w-xs text-sm text-haze">{content.footer.tagline}</p>
          </div>

          <div>
            <h3 className="eyebrow text-haze">{content.contactPage.phonesHeading}</h3>
            <ul className="mt-3 space-y-2">
              {phones.map((p) => (
                <li key={p.raw} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <a href={telLink(p.raw)} className="text-paper hover:text-date" dir="ltr">
                    {p.display}
                  </a>
                  <a
                    href={whatsappLink(p.raw)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-haze hover:text-date"
                  >
                    {content.contactPage.whatsappLabel}
                  </a>
                </li>
              ))}
            </ul>
            <a href={`mailto:${email}`} className="mt-3 inline-block text-sm text-paper hover:text-date">
              {email}
            </a>
          </div>

          <div>
            <h3 className="eyebrow text-haze">{content.contactPage.addressHeading}</h3>
            <p className="body-copy mt-3 max-w-xs text-sm text-paper">{content.company.address}</p>
            <a
              href={mapShortLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-date hover:text-haze"
            >
              {content.contactPage.mapCta}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-haze/20 pt-6 text-xs text-haze sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {content.company.nameLong} — {content.footer.rightsReserved}
          </p>
          <nav className="flex gap-4">
            <Link href={`/${locale}/services`} className="hover:text-date">
              {content.nav.services}
            </Link>
            <Link href={`/${locale}/contact`} className="hover:text-date">
              {content.nav.contact}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
