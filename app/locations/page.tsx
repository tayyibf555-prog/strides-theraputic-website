import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionBand } from "@/components/sections/SectionBand";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Locations & Service Areas",
  description:
    "Where Strides serves families: our East Vancouver, WA clinic plus home-, school-, and community-based services across Clark County and the Portland, OR metro.",
  alternates: { canonical: "/locations" },
};

const AREAS = [
  {
    href: "/locations/vancouver-wa",
    title: "Vancouver, WA",
    blurb:
      "Our home base, the East Vancouver clinic plus services across Camas, Washougal, Battle Ground, Ridgefield, and all of Clark County.",
    tags: ["Clinic + in-home", "WA DDA provider", "Evaluations on-site"],
  },
  {
    href: "/locations/portland-or",
    title: "Portland, OR",
    blurb:
      "Home-, school-, and community-based services across the Portland metro, with clinic evaluations just over the river in East Vancouver.",
    tags: ["Service area", "Oregon DDS provider", "OHP in process"],
  },
];

const EVAL_PAGES = [
  { href: "/autism-evaluation-vancouver-wa", label: "Autism Evaluation, Vancouver, WA" },
  { href: "/autism-evaluation-portland-or", label: "Autism Testing, Portland, OR" },
];

export default function LocationsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Locations", path: "/locations" },
            ])
          ),
        }}
      />

      <div className="mx-auto max-w-6xl px-5 pt-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }]} />
      </div>

      <SectionBand
        eyebrow="Locations & Service Areas"
        title="One clinic, two states, wherever your family needs us"
        subtitle="Strides is based in East Vancouver, WA and serves families throughout Clark County and the Portland metro, in clinic, at home, at school, and in the community."
      />

      <Section tone="cream">
        <SectionHeading align="center" eyebrow="Where We Work" title="Choose your area" />
        <RevealGroup className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {AREAS.map((a) => (
            <RevealItem key={a.href}>
              <Link
                href={a.href}
                className="group flex h-full flex-col rounded-card bg-cream p-7 shadow-sm ring-1 ring-sage-deep/50 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex items-center justify-between gap-3 font-display text-2xl font-semibold text-ink transition-colors group-hover:text-moss">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-moss" /> {a.title}
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-moss transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-3 text-sm leading-relaxed text-muted">{a.blurb}</span>
                <span className="mt-4 flex flex-wrap gap-2">
                  {a.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-sage px-3 py-1 text-xs font-semibold text-forest-deep"
                    >
                      {t}
                    </span>
                  ))}
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-moss">
            Fast-track evaluations by area
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {EVAL_PAGES.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="group flex items-center justify-between gap-3 rounded-card bg-cream p-4 shadow-sm ring-1 ring-sage-deep/50 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-sm font-semibold text-ink transition-colors group-hover:text-moss">
                  {e.label}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-moss" />
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>

      <SectionBand title="Not sure if you're in our service area?" />
      <Section tone="cream">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-lg text-muted">
            Boundaries are fuzzy on purpose, tell us where you are and
            we&rsquo;ll tell you what&rsquo;s possible. {CONTACT.responseNote}
          </p>
          <div className="flex flex-col items-center gap-4">
            <CtaButton size="lg" withArrow>
              Request an Intake
            </CtaButton>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-moss underline decoration-moss/30 underline-offset-4 hover:text-forest-deep"
            >
              <Phone className="h-4 w-4" /> {CONTACT.phone}, {CONTACT.hours}
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
