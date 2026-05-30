import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionBand } from "@/components/sections/SectionBand";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { FundingSources } from "@/components/sections/FundingSources";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { HOME } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "ABA therapy, autism diagnostics, WA DDA and Oregon DDS services, behavioral consultation, and community programs — comprehensive care that adapts to the individual.",
};

export default function ServicesPage() {
  return (
    <>
      <SectionBand
        eyebrow="Our Services"
        title="Expertise That Adapts to the Individual"
        subtitle="From early intervention to crisis support, Strides provides comprehensive services for individuals with diverse behavioral and developmental needs."
      />

      <Section tone="sage">
        <ServiceGrid />
        <Reveal className="mx-auto mt-12 max-w-3xl text-center text-muted">
          <p>{HOME.continuity}</p>
        </Reveal>
      </Section>

      <Section tone="cream">
        <FundingSources />
      </Section>

      <div className="bg-forest text-cream">
        <Reveal className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl font-medium lg:text-4xl">
            Not sure which service is the right fit?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/85">
            Start with our general inquiry form and our team will guide you to
            the right next step.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <CtaButton variant="light" size="lg" withArrow>
              Request an Intake
            </CtaButton>
            <Link
              href="/contact"
              className="text-sm font-medium text-cream/75 underline decoration-cream/30 underline-offset-4 transition-colors hover:text-cream hover:decoration-cream"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  );
}
