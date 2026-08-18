import type { Metadata } from "next";
import { defaultLocale, isRtl, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default function RedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={defaultLocale} dir={isRtl(defaultLocale) ? "rtl" : "ltr"}>
      <body>{children}</body>
    </html>
  );
}
