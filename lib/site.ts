export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const siteUrl = "https://jannataladday.com";

export const phones = [
  { raw: "+9647803305025", display: "+964 780 330 5025" },
  { raw: "+9647705661292", display: "+964 770 566 1292" },
] as const;

export const email = "jannataladday@gmail.com";

export const geo = {
  lat: 30.5197471,
  lng: 47.8337383,
};

export const mapShortLink = "https://maps.app.goo.gl/2vh6aufqyTXaLMns9";

export const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.9835337104237!2d47.8337383!3d30.5197471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc49900768a5807%3A0x2ac9347339e2bd71!2z2LTYsdmD2Kkg2KzZhtipINin2YTYudiv2KfZig!5e1!3m2!1sen!2siq!4v1787065523570!5m2!1sen!2siq";

export function whatsappLink(rawPhone: string) {
  return `https://wa.me/${rawPhone.replace("+", "")}`;
}

export function telLink(rawPhone: string) {
  return `tel:${rawPhone}`;
}

export function isRtl(locale: Locale) {
  return locale === "ar";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

export function localizedPath(locale: Locale, pathWithoutLocale: string) {
  const clean = pathWithoutLocale.replace(/^\/(ar|en)/, "");
  return `/${locale}${clean === "" ? "" : clean}`;
}
