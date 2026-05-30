import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SectionBand } from "@/components/sections/SectionBand";
import { FounderCards, TeamList } from "@/components/sections/TeamGrid";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { ABOUT, FOUNDERS, LEADERSHIP, PARTNERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Board Certified Behavior Analysts and multidisciplinary clinical leadership behind Strides Therapeutic Services, serving Oregon and Washington.",
};

export default function TeamPage() {
  return (
    <>
      <SectionBand
        title="Our Team"
        subtitle="Locally owned and led by Board Certified Behavior Analysts, our multidisciplinary team brings together clinical expertise, compassion, and real-world problem-solving."
      />

      {/* Founders */}
      <Section tone="cream">
        <SectionHeading
          align="center"
          eyebrow="Founders"
          title="The people who built Strides"
        />
        <div className="mt-12">
          <FounderCards members={FOUNDERS} />
        </div>
      </Section>

      {/* Clinical Leadership */}
      <Section tone="sage">
        <SectionHeading
          align="center"
          eyebrow="Clinical Leadership"
          title="The people guiding our care"
        />
        <div className="mt-12">
          <TeamList members={LEADERSHIP} withPortrait />
        </div>
      </Section>

      {/* Partners */}
      <Section tone="cream">
        <SectionHeading
          align="center"
          eyebrow="Partners"
          title="Collaborating across disciplines"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <TeamList members={PARTNERS} columns={2} />
        </div>
      </Section>

      {/* Closing */}
      <div className="bg-forest text-cream">
        <Reveal className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-cream/85">
            {ABOUT.teamClose.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-4">
            <CtaButton variant="light" size="lg" withArrow>
              Request an Intake
            </CtaButton>
            <Link
              href="/about"
              className="text-sm font-medium text-cream/75 underline decoration-cream/30 underline-offset-4 transition-colors hover:text-cream hover:decoration-cream"
            >
              Our Story
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  );
}
