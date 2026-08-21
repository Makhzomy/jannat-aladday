export type CategoryId =
  | "paper"
  | "writing"
  | "filing"
  | "office"
  | "school"
  | "presentation";

export interface Category {
  id: CategoryId;
  title: string;
  description: string;
  items: string[];
}

export interface Point {
  title: string;
  description: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface SiteContent {
  locale: "ar" | "en";
  meta: {
    siteName: string;
    siteDescription: string;
    home: PageMeta;
    services: PageMeta;
    contact: PageMeta;
    gallery: PageMeta;
  };
  nav: {
    home: string;
    services: string;
    contact: string;
    gallery: string;
    switchTo: string;
  };
  company: {
    nameLong: string;
    address: string;
    businessLine: string;
  };
  home: {
    hero: {
      eyebrow: string;
      tagline: string;
      ctaServices: string;
      ctaContact: string;
    };
    about: {
      heading: string;
      paragraphs: string[];
    };
    services: {
      heading: string;
      intro: string;
      cta: string;
    };
    whyUs: {
      heading: string;
      points: Point[];
    };
    location: {
      heading: string;
      addressLabel: string;
      phonesLabel: string;
      mapCta: string;
    };
    gallery: {
      heading: string;
      intro: string;
      cta: string;
    };
  };
  galleryPage: {
    heading: string;
    intro: string;
    empty: string;
  };
  servicesPage: {
    heading: string;
    intro: string;
    categories: Category[];
    howWeSupply: {
      heading: string;
      points: Point[];
      cta: string;
    };
  };
  contactPage: {
    heading: string;
    intro: string;
    phonesHeading: string;
    whatsappLabel: string;
    callLabel: string;
    emailHeading: string;
    addressHeading: string;
    mapHeading: string;
    mapCta: string;
  };
  footer: {
    tagline: string;
    rightsReserved: string;
  };
}
