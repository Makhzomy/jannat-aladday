import type { SiteContent } from "./types";

const en: SiteContent = {
  locale: "en",
  meta: {
    siteName: "Jannat Al Adday General Trading",
    siteDescription:
      "Wholesale stationery and office supplies in Basra, Iraq.",
    home: {
      title: "Jannat Al Adday General Trading | Wholesale Stationery in Basra",
      description:
        "Wholesale stationery and office supplies, from Basra to all of Iraq. Bulk pricing for retailers, schools, universities, government offices, and businesses.",
    },
    services: {
      title: "What We Provide | Jannat Al Adday General Trading",
      description:
        "Wholesale stationery and office supplies: paper & notebooks, writing instruments, filing, office essentials, school & art supplies, and presentation supplies.",
    },
    contact: {
      title: "Contact Us | Jannat Al Adday General Trading",
      description:
        "Contact Jannat Al Adday General Trading in Basra by phone, WhatsApp, or email.",
    },
  },
  nav: {
    home: "Home",
    services: "What We Provide",
    contact: "Contact Us",
    switchTo: "العربية",
  },
  company: {
    nameLong: "Jannat Al Adday General Trading L.L.C.",
    address: "Basra, Ashar, Batchari, Maqam Ali, Estate No. 2432, Iraq",
    businessLine: "Wholesale stationery and office supplies trading",
  },
  home: {
    hero: {
      eyebrow: "GENERAL TRADING · BASRA",
      tagline: "Wholesale stationery and office supplies, from Basra to all of Iraq",
      ctaServices: "What we provide",
      ctaContact: "Contact us",
    },
    about: {
      heading: "About Us",
      paragraphs: [
        "Jannat Al Adday General Trading L.L.C. is a registered Iraqi trading company based in Ashar, in the heart of Basra, working in the wholesale supply of stationery and office supplies.",
        "We supply stationery retailers and shops, schools and universities, government offices, and businesses — in bulk quantities and at pricing built for wholesale, not retail.",
        "Being based in Basra — Iraq's principal port city — puts us close to where imported goods actually land. That means faster turnaround and steadier pricing than dealing through intermediaries further from the port.",
        "We deal directly, with no middlemen, and we're able to source specific items on request when they fall within our line of supply.",
      ],
    },
    services: {
      heading: "What We Provide",
      intro: "A quick look at the main categories we supply wholesale.",
      cta: "See all categories",
    },
    whyUs: {
      heading: "Why Buy From Us",
      points: [
        {
          title: "Bulk quantities, wholesale pricing",
          description: "We sell in commercial quantities at prices built for resellers, not single-unit retail.",
        },
        {
          title: "Delivery across Iraq",
          description: "We arrange delivery of orders to governorates across the country.",
        },
        {
          title: "Direct dealing, no middlemen",
          description: "You deal with the owners directly — no layers, no markup from intermediaries.",
        },
        {
          title: "Special orders on request",
          description: "Need a specific item we don't list? Ask — we can often source it.",
        },
      ],
    },
    location: {
      heading: "Our Location",
      addressLabel: "Address",
      phonesLabel: "Phone Numbers",
      mapCta: "Open in Google Maps",
    },
  },
  servicesPage: {
    heading: "What We Provide",
    intro:
      "We supply a wide range of wholesale stationery and office essentials across six main categories, and can source additional items on request.",
    categories: [
      {
        id: "paper",
        title: "Paper & Notebooks",
        description:
          "Copy paper and notebooks in the sizes and formats offices, schools, and shops actually use.",
        items: [
          "Copy paper (A4 / A3)",
          "Notebooks",
          "Exercise books",
          "Notepads",
          "Sticky notes",
          "Receipt books",
        ],
      },
      {
        id: "writing",
        title: "Writing Instruments",
        description: "Pens and writing tools for everything from everyday use to whiteboard work.",
        items: [
          "Ballpoint pens",
          "Gel and fountain pens",
          "Pencils",
          "Markers and highlighters",
          "Whiteboard markers",
          "Erasers",
          "Sharpeners",
        ],
      },
      {
        id: "filing",
        title: "Filing & Archiving",
        description: "Filing and archiving solutions for offices and government departments.",
        items: [
          "Lever-arch and box files",
          "Ring binders",
          "Document folders",
          "Plastic sleeves",
          "Index dividers",
          "Archive boxes",
        ],
      },
      {
        id: "office",
        title: "Office Essentials",
        description: "The everyday hardware every office and shop needs on the desk.",
        items: [
          "Staplers and staples",
          "Hole punches",
          "Paper clips",
          "Tape and dispensers",
          "Scissors",
          "Glue",
          "Rubber bands",
          "Desk organisers",
        ],
      },
      {
        id: "school",
        title: "School & Art Supplies",
        description: "Everything students need for school and art, across all grade levels.",
        items: [
          "School bags",
          "Geometry sets",
          "Colouring pencils and crayons",
          "Watercolours",
          "Drawing paper",
          "Craft materials",
        ],
      },
      {
        id: "presentation",
        title: "Presentation & Meeting Supplies",
        description: "The materials that get a meeting room or a presentation ready.",
        items: [
          "Whiteboards",
          "Flip charts",
          "Notice boards",
          "Name badges",
          "Laminating and binding supplies",
        ],
      },
    ],
    howWeSupply: {
      heading: "How We Supply",
      points: [
        {
          title: "Wholesale quantities",
          description: "We sell in bulk and wholesale quantities, not retail.",
        },
        {
          title: "Delivery nationwide",
          description: "We arrange delivery to Iraqi governorates across the country.",
        },
        {
          title: "Special orders",
          description: "We can source specific items on request, within our line of supply.",
        },
        {
          title: "Request a quote",
          description: "Reach out by phone or WhatsApp to ask for a quote.",
        },
      ],
      cta: "Contact us",
    },
  },
  contactPage: {
    heading: "Contact Us",
    intro: "The fastest way to reach us is by phone or WhatsApp.",
    phonesHeading: "Phone Numbers",
    whatsappLabel: "WhatsApp",
    callLabel: "Call",
    emailHeading: "Email",
    addressHeading: "Address",
    mapHeading: "Location on the Map",
    mapCta: "Open in Google Maps",
  },
  footer: {
    tagline: "Wholesale stationery and office supplies from Basra.",
    rightsReserved: "All rights reserved",
  },
};

export default en;
