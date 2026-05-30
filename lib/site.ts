// Single source of truth for site-wide config.
export const GOOGLE_FORM_URL = "https://forms.gle/7BVj54uyMyFyhH4W8";

export const SITE = {
  name: "Strides Therapeutic Services",
  shortName: "Strides",
  tagline: "Therapeutic Services",
  description:
    "Compassionate, evidence-based ABA therapy, autism diagnostics, DDA/DDS services, consultation, and community programs across Oregon and Washington. Locally owned and operated by Board Certified Behavior Analysts.",
  url: "https://stridestherapeutics.com",
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

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Contact Us", href: "/contact" },
];
