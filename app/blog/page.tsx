import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site";
import { ARTICLES } from "@/lib/content";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SectionBand } from "@/components/sections/SectionBand";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Parent Guides",
  description:
    "Plain-English guides from the Strides clinical team — autism evaluation costs, insurance and Medicaid coverage, ABA therapy for toddlers, and more.",
  alternates: { canonical: "/blog" },
};

export default function BlogHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Parent Guides", path: "/blog" },
            ])
          ),
        }}
      />

      <SectionBand
        eyebrow="Parent Guides"
        title="Answers to the questions families actually ask"
        subtitle="Written and clinically reviewed by the Strides team — costs, coverage, and what to expect, without the runaround."
      />

      <Section tone="cream">
        <SectionHeading
          align="center"
          eyebrow="All Guides"
          title="Start with what you need to know"
        />
        <RevealGroup className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
          {ARTICLES.map((a) => (
            <RevealItem key={a.path}>
              <Link
                href={a.path}
                className="group flex items-center justify-between gap-4 rounded-card bg-cream p-5 shadow-sm ring-1 ring-sage-deep/50 transition-all hover:-translate-y-0.5 hover:shadow-md lg:p-6"
              >
                <span className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-moss">
                  {a.label}
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-moss transition-transform group-hover:translate-x-1" />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal className="mt-10 text-center text-muted">
          <p>
            Looking for funding specifics? See our{" "}
            <Link
              href="/insurance"
              className="font-medium text-moss underline decoration-moss/30 underline-offset-4 hover:text-forest-deep"
            >
              insurance &amp; funding hub
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <SectionBand title="Have a question a guide didn't answer?" />
      <Section tone="cream">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-lg text-muted">
            Our team answers these questions on the phone every week — no
            intake required to ask.
          </p>
          <div className="flex flex-col items-center gap-4">
            <CtaButton size="lg" withArrow>
              Request an Intake
            </CtaButton>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-moss underline decoration-moss/30 underline-offset-4 hover:text-forest-deep"
            >
              <Phone className="h-4 w-4" /> {CONTACT.phone} — {CONTACT.hours}
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
