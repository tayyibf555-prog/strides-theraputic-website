// JSON-LD (schema.org) builders. Rendered into a <script type="application/ld+json">
// so Google's rich results, local pack, and AI Overviews can parse the practice,
// its clinicians, and its service lines.
import { SITE, CONTACT, POSTAL, PROFILES, GEO } from "@/lib/site";
import { FOUNDERS, PARTNERS, SERVICES, type TeamMember } from "@/lib/content";

const ORG_ID = `${SITE.url}/#organization`;

function telE164() {
  // CONTACT.phoneHref is "tel:+13606222253"
  return CONTACT.phoneHref.replace(/^tel:/, "");
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: POSTAL.streetAddress,
    addressLocality: POSTAL.addressLocality,
    addressRegion: POSTAL.addressRegion,
    postalCode: POSTAL.postalCode,
    addressCountry: POSTAL.addressCountry,
  };
}

// A BCBA/clinician as a schema.org Person with their credentials expressed as
// EducationalOccupationalCredential. Add `licenseNumber` once the client
// provides BCBA / LBA license numbers.
function clinician(member: TeamMember) {
  const credentials = (member.credentials || "")
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);

  return {
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    ...(member.image ? { image: `${SITE.url}${member.image}` } : {}),
    worksFor: { "@id": ORG_ID },
    ...(credentials.length
      ? {
          hasCredential: credentials.map((c) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: c,
          })),
        }
      : {}),
    ...(member.bio ? { description: member.bio } : {}),
  };
}

// The practice itself. MedicalBusiness is the closest schema.org type for a
// behavioral-health clinic; medicalSpecialty flags the focus areas.
export function organizationSchema() {
  const people = [...FOUNDERS, ...PARTNERS].map(clinician);

  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalClinic"],
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    logo: `${SITE.url}/strides-logo.png`,
    image: `${SITE.url}/hero-main.png`,
    telephone: telE164(),
    email: CONTACT.email,
    priceRange: "$$",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed: POSTAL.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    medicalSpecialty: ["Psychiatric", "Pediatric"],
    knowsAbout: [
      "Applied Behavior Analysis",
      "Autism Spectrum Disorder",
      "Autism diagnostic assessment",
      "Positive Behavior Support",
      "Developmental disabilities",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...POSTAL.days],
        opens: POSTAL.opens,
        closes: POSTAL.closes,
      },
    ],
    founder: FOUNDERS.map((f) => ({ "@type": "Person", name: f.name })),
    employee: people,
    // Verified public profiles (LinkedIn, Instagram, Google Maps, NPI registry)
    // so search engines and AI assistants can disambiguate the entity.
    sameAs: [...PROFILES],
  };
}

// One Service node per service line, linked back to the practice as provider.
// Dual-typed Service + MedicalTherapy: `provider` and `areaServed` are Service
// properties, so the Service type keeps them valid while MedicalTherapy keeps
// the clinical specificity.
export function servicesSchema() {
  return SERVICES.map((s) => ({
    "@context": "https://schema.org",
    "@type": ["Service", "MedicalTherapy"],
    name: s.title,
    description: s.summary,
    url: `${SITE.url}/services/${s.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: POSTAL.areaServed,
  }));
}

// Single Service node for a service detail page.
export function serviceSchema(slug: string) {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": ["Service", "MedicalTherapy"],
    name: s.title,
    description: s.summary,
    url: `${SITE.url}/services/${s.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: POSTAL.areaServed,
  };
}

// Article node for long-form content pages (blog / insurance / location
// guides). Author + publisher point at the practice; reviewedBy carries the
// clinician sign-off shown in the on-page byline.
export function articleSchema(a: {
  headline: string;
  description: string;
  path: string;
  datePublished: string; // ISO date, e.g. "2026-07-14"
  dateModified?: string;
}) {
  const url = `${SITE.url}${a.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.headline,
    description: a.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    reviewedBy: {
      "@type": "Person",
      name: "Hannah Schmidt",
      honorificSuffix: "M.S., BCBA, LBA",
      jobTitle: "Board Certified Behavior Analyst",
      worksFor: { "@id": ORG_ID },
    },
  };
}

// FAQPage builder for pages that expose Q&A content (money pages, service pages).
export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

// Helper: serialize any schema object(s) for a <script> tag.
export function jsonLd(schema: unknown) {
  return JSON.stringify(schema);
}
