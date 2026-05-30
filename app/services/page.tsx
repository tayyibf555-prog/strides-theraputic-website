import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SectionBand } from "@/components/sections/SectionBand";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { FundingSources } from "@/components/sections/FundingSources";
import Image from "next/image";
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

      {/* One team, every step — image + continuity message */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal delay={0.1} className="relative order-last lg:order-first">
            {/* Warm accent shape peeking behind the image for depth */}
            <div
              aria-hidden
              className="absolute -left-4 -bottom-4 h-2/3 w-2/3 rounded-card bg-gradient-to-tr from-moss/15 to-clay/25"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card shadow-2xl ring-1 ring-sage-deep/40">
              <Image
                src="/care-in-action.jpg"
                alt="A Strides clinician working one-on-one with a client"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <SectionHeading
              eyebrow="One Team, Every Step"
              title="Care that grows with you."
            />
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
              {HOME.continuity}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="sage">
        <ServiceGrid />
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
