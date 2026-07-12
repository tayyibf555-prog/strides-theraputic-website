// Single source of truth for site-wide config.
export const GOOGLE_FORM_URL = "https://forms.gle/7BVj54uyMyFyhH4W8";

export const SITE = {
  name: "Strides Therapeutic Services",
  shortName: "Strides",
  tagline: "Therapeutic Services",
  // Keyword + location intent for the homepage <title>. The bare brand name
  // ranked for nothing; this leads with the services people actually search.
  seoTitle:
    "ABA Therapy & Autism Assessments | Vancouver WA & Portland OR — Strides",
  description:
    "Compassionate, evidence-based ABA therapy, autism diagnostics, DDA/DDS services, consultation, and community programs across Oregon and Washington. Locally owned and operated by Board Certified Behavior Analysts.",
  url: "https://stridestherapeutics.com",
};

// Analytics container IDs (provided by the client). GA4 is configured inside
// the GTM container; keep the raw GA4 id here for reference / fallback tagging.
export const ANALYTICS = {
  gtmId: "GTM-W6T9T5PW",
  ga4Id: "G-60KWWKZ0M4",
};

export const CONTACT = {
  phone: "(360) 622-2253",
  phoneHref: "tel:+13606222253",
  email: "Info@StridesTherapeutics.com",
  emailHref: "mailto:Info@StridesTherapeutics.com",
  respiteEmail: "Respite@StridesTherapeutics.com",
  address: "204 SE Stonemill Drive, STE 270",
  city: "Vancouver, WA 98684",
  hours: "Monday – Friday, 8:30 AM – 4:30 PM",
  responseNote: "Most inquiries receive a response within 1 business day.",
  serving: "Serving Oregon & Washington",
};

// Structured postal address + hours for JSON-LD (schema.org) consumption.
export const POSTAL = {
  streetAddress: "204 SE Stonemill Drive, STE 270",
  addressLocality: "Vancouver",
  addressRegion: "WA",
  postalCode: "98684",
  addressCountry: "US",
  // Opening hours in schema.org format (Mon–Fri, 08:30–16:30).
  opens: "08:30",
  closes: "16:30",
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ] as const,
  // Areas served (used by MedicalBusiness.areaServed).
  areaServed: [
    "Vancouver, WA",
    "Camas, WA",
    "Portland, OR",
    "Clark County, WA",
  ],
};

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Contact Us", href: "/contact" },
];
