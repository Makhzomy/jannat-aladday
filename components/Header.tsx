"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SiteContent } from "@/content/types";
import { localizedPath, otherLocale, type Locale } from "@/lib/site";

const logoSrc: Record<Locale, string> = {
  ar: "/logo/logo-ar@2x.png",
  en: "/logo/logo-en@2x.png",
};

export default function Header({ locale, content }: { locale: Locale; content: SiteContent }) {
  const pathname = usePathname() ?? `/${locale}`;
  const [open, setOpen] = useState(false);
  const target = otherLocale(locale);

  const links = [
    { href: `/${locale}`, label: content.nav.home },
    { href: `/${locale}/services`, label: content.nav.services },
    { href: `/${locale}/gallery`, label: content.nav.gallery },
    { href: `/${locale}/contact`, label: content.nav.contact },
  ];

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === `/${locale}` || pathname === `/${locale}/` : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-haze/40 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-2 shrink-0">
          <Image
            src={logoSrc[locale]}
            alt={content.company.nameLong}
            width={219}
            height={96}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={content.nav.home}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-date ${
                isActive(link.href) ? "text-date" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={localizedPath(target, pathname)}
            className="hidden rounded-full border border-haze px-3.5 py-1.5 text-sm font-semibold text-steel transition-colors hover:border-date hover:text-date sm:inline-block"
            hrefLang={target}
          >
            {content.nav.switchTo}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-haze text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-haze/40 bg-paper md:hidden" aria-label={content.nav.home}>
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-2.5 text-base font-medium ${
                  isActive(link.href) ? "text-date" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={localizedPath(target, pathname)}
              hrefLang={target}
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md px-2 py-2.5 text-base font-semibold text-steel"
            >
              {content.nav.switchTo}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
