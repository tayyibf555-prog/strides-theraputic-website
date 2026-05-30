import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { RotatingText } from "@/components/sections/RotatingText";
import { CtaCards } from "@/components/sections/CtaCards";
import { FundingSources } from "@/components/sections/FundingSources";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SectionBand } from "@/components/sections/SectionBand";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { PlayCircle } from "lucide-react";
import { HOME } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* We Help — rotating phrases */}
      <div className="bg-moss text-cream">
        {/* The rotating box is sized to the widest phrase so nothing shifts as
            phrases cycle; the small lg translate re-centers the block on its
            mid-length phrase (tuned to the current three phrases). */}
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:px-8 lg:translate-x-[90px]">
          <h2 className="shrink-0 whitespace-nowrap font-display text-3xl font-medium sm:text-4xl lg:text-5xl">
            We Help
          </h2>
          <RotatingText
            phrases={HOME.weHelp}
            className="font-display text-3xl font-medium leading-tight text-cream/90 sm:text-4xl lg:text-5xl"
          />
        </div>
      </div>

      {/* Founder intro + video placeholder */}
      <Section tone="cream">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="group relative overflow-hidden rounded-card">
              <ImagePlaceholder
                label="Founder video"
                className="aspect-video w-full"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-16 w-16 text-cream/90 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-medium leading-snug text-ink lg:text-[2.5rem]">
              {HOME.founder.heading}
            </h2>
            <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-muted">
              {HOME.founder.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <CtaButton href="/about" variant="outline" className="mt-7" withArrow>
              Learn About Strides
            </CtaButton>
          </Reveal>
        </div>
      </Section>

      {/* Three CTA cards */}
      <Section tone="cream-deep">
        <CtaCards />
        <Reveal className="mx-auto mt-10 max-w-3xl text-center text-muted">
          <p>{HOME.continuity}</p>
        </Reveal>
      </Section>

      {/* Funding sources */}
      <Section tone="cream">
        <FundingSources />
      </Section>

      {/* Services */}
      <SectionBand
        eyebrow="Our Services"
        title="Expertise That Adapts to the Individual"
        subtitle="From early intervention to crisis support, Strides provides comprehensive services for individuals with diverse behavioral and developmental needs."
      />
      <Section tone="sage">
        <ServiceGrid />
      </Section>

      {/* Testimonials */}
      <Section tone="cream">
        <SectionHeading
          align="center"
          eyebrow="Testimonials"
          title="What Our Clients Say"
        />
        <div className="mt-12 -mx-5 lg:-mx-8">
          <Testimonials />
        </div>
      </Section>

      {/* Closing CTA */}
      <div className="bg-forest text-cream">
        <Reveal className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl font-medium lg:text-4xl">
            You Don’t Have to Navigate This Alone
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/85">
            Whether you are seeking answers, support, or a more comprehensive
            approach to care, our team is here to help you understand your
            options and identify meaningful next steps.
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
