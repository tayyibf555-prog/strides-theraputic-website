import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionBand } from "@/components/sections/SectionBand";
import { FundingSources } from "@/components/sections/FundingSources";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Insurance & Funding",
  description:
    "How families fund care at Strides, accepted insurance plans, Medicaid guidance for Washington and Oregon, and WA DDA / Oregon DDS programs.",
  alternates: { canonical: "/insurance" },
};

const GUIDES = [
  {
    path: "/insurance/does-medicaid-cover-aba-therapy",
    label: "Does Medicaid Cover ABA Therapy? (Apple Health & OHP)",
  },
  {
    path: "/blog/does-insurance-cover-aba-therapy",
    label: "Does Insurance Cover ABA Therapy? How Coverage Works",
  },
  {
    path: "/blog/how-much-does-an-autism-evaluation-cost",
    label: "How Much Does an Autism Assessment Cost?",
  },
];

export default function InsuranceHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Insurance & Funding", path: "/insurance" },
            ])
          ),
        }}
      />

      <div className="mx-auto max-w-6xl px-5 pt-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Insurance & Funding", path: "/insurance" }]} />
      </div>

      <SectionBand
        eyebrow="Insurance & Funding"
        title="Paying for care, without the guesswork"
        subtitle="Strides works with major commercial plans, TRICARE, and both states' developmental disability programs. Here's how the funding paths fit together."
      />

      <Section tone="cream">
        <SectionHeading
          align="center"
          eyebrow="Accepted Plans & Programs"
          title="Funding sources we work with"
        />
        <div className="mt-10">
          <FundingSources />
        </div>
        <Reveal className="mx-auto mt-8 max-w-2xl text-center text-muted">
          <p>
            Medicaid (Apple Health / OHP) participation is plan-specific and
            changes over time, so call{" "}
            <a href={CONTACT.phoneHref} className="font-medium text-moss">
              {CONTACT.phone}
            </a>{" "}
            and we&rsquo;ll tell you exactly where things stand for your plan.
            Families funded through{" "}
            <Link
              href="/services/wa-dda"
              className="font-medium text-moss underline decoration-moss/30 underline-offset-4"
            >
              Washington DDA
            </Link>{" "}
            or{" "}
            <Link
              href="/services/or-dds"
              className="font-medium text-moss underline decoration-moss/30 underline-offset-4"
            >
              Oregon DDS
            </Link>{" "}
            can be served directly today.
          </p>
        </Reveal>
      </Section>

      <Section tone="sage">
        <SectionHeading
          align="center"
          eyebrow="Funding Guides"
          title="Understand your coverage in one read"
        />
        <RevealGroup className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
          {GUIDES.map((g) => (
            <RevealItem key={g.path}>
              <Link
                href={g.path}
                className="group flex items-center justify-between gap-4 rounded-card bg-cream p-5 shadow-sm ring-1 ring-sage-deep/50 transition-all hover:-translate-y-0.5 hover:shadow-md lg:p-6"
              >
                <span className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-moss">
                  {g.label}
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-moss transition-transform group-hover:translate-x-1" />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <SectionBand title="Not sure which funding path fits your family?" />
      <Section tone="cream">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-lg text-muted">
            We navigate these systems every week and will walk through your
            options honestly, including the ones we don&rsquo;t bill
            directly. If a diagnosis is the missing piece, assessments start
            at $795 with results in as little as two weeks.
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
