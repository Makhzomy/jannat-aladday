import { phones, telLink, whatsappLink } from "@/lib/site";
import type { SiteContent } from "@/content/types";

export default function PhoneActions({ content }: { content: SiteContent }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {phones.map((p) => (
        <li key={p.raw} className="rounded-2xl border border-haze/60 bg-paper p-5">
          <p dir="ltr" className="text-lg font-semibold text-ink">
            {p.display}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={telLink(p.raw)}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-steel"
            >
              {content.contactPage.callLabel}
            </a>
            <a
              href={whatsappLink(p.raw)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-date px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-date/85"
            >
              {content.contactPage.whatsappLabel}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
