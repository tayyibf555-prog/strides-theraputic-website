import type { Metadata } from "next";
import Link from "next/link";
import {
  Fingerprint,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  Sprout,
  Telescope,
  Users,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SectionBand } from "@/components/sections/SectionBand";
import { StatStrip } from "@/components/sections/StatStrip";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { ABOUT } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Strides Therapeutic Services is locally owned and operated by Board Certified Behavior Analysts, supporting over 300 individuals across Oregon and Washington.",
};

// Each belief gets a distinct icon + short headline so the grid reads as a set
// of named values rather than four identical checkmarks. Paired by index with
// ABOUT.believe so the copy stays a single source of truth.
const BELIEF_META = [
  { icon: HandHeart, label: "Seen & Supported" },
  { icon: Users, label: "Access for All" },
  { icon: HeartHandshake, label: "Deeply Human" },
  { icon: Sprout, label: "Building What’s Next" },
];

export default function AboutPage() {
  return (
    <>
      <SectionBand eyebrow={ABOUT.hero.eyebrow} title={ABOUT.hero.headline} />

      {/* Our Story */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Our Story" title="So we built the organization we wished existed." />

            {/* Lead paragraph: larger, darker, with a warm accent rule to draw
                the eye in and break the four-paragraph monotony. */}
            <p className="mt-6 border-l-2 border-clay/60 pl-5 text-[1.15rem] font-medium leading-relaxed text-ink/90">
              {ABOUT.story[0]}
            </p>

            <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
              Our founders began their careers within large ABA organizations,
              where they witnessed firsthand how the rise of private equity in
              behavioral healthcare began shifting priorities away from{" "}
              <strong className="font-semibold text-ink/90">
                individualized, community-centered care
              </strong>
              . At the same time, they saw{" "}
              <strong className="font-semibold text-ink/90">
                major gaps in services
              </strong>{" "}
              — individuals outside of traditional autism models, older clients,
              high-acuity needs, and families navigating complex systems were too
              often left without meaningful support.
            </p>

            {/* Pull-quote callout surfaces the mission line so it lands with
                emphasis instead of being buried mid-paragraph. */}
            <blockquote className="relative my-7 overflow-hidden rounded-card bg-sage/50 py-6 pl-9 pr-6 ring-1 ring-sage-deep/40">
              <span
                aria-hidden
                className="absolute -left-1 top-1 select-none font-display text-7xl leading-none text-clay/35"
              >
                &ldquo;
              </span>
              <p className="font-display text-xl font-medium leading-snug text-ink lg:text-[1.6rem]">
                Care built around the individual — not the other way around.
              </p>
            </blockquote>

            <div className="space-y-4 text-[1.02rem] leading-relaxed text-muted">
              <p>
                So we built the organization we wished existed. An organization
                where{" "}
                <strong className="font-semibold text-ink/90">
                  clinical expertise, compassion, and problem-solving
                </strong>{" "}
                matter more than rigid models. Where care is built around the
                individual, not the other way around. Where families are met with{" "}
                <strong className="font-semibold text-ink/90">
                  partnership, honesty, and a team willing to find solutions
                </strong>
                , even in the most complex situations.
              </p>
              <p>
                Today, Strides supports{" "}
                <strong className="font-semibold text-ink/90">
                  over 300 individuals
                </strong>{" "}
                with a growing team of{" "}
                <strong className="font-semibold text-ink/90">
                  more than 40 dedicated clinicians
                </strong>{" "}
                across{" "}
                <strong className="font-semibold text-ink/90">
                  Oregon and Washington
                </strong>
                . While we continue to grow, our mission remains unchanged:
                provide exceptional, evidence-based care that helps individuals
                build safer, more connected, and more independent lives.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            {/* Warm accent shape peeking behind the photo for depth */}
            <div
              aria-hidden
              className="absolute -right-4 -top-4 h-2/3 w-2/3 rounded-card bg-gradient-to-br from-clay/30 to-moss/15"
            />
            <div
              aria-hidden
              className="absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-full bg-moss/10 sm:block"
            />
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-card shadow-2xl ring-1 ring-sage-deep/40">
              <Image
                src="/our-story.png"
                alt="The Strides team building projects alongside clients at a worktable"
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* Subtle bottom gradient so the badge reads cleanly */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/0 to-ink/0"
              />
              {/* Floating credential badge */}
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-cream/90 px-4 py-3 shadow-lg ring-1 ring-white/50 backdrop-blur-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-moss/15 text-moss">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold leading-snug text-ink">
                  Locally owned &amp; operated by Board Certified Behavior
                  Analysts
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What We Believe */}
      <Section tone="sage">
        <SectionHeading align="center" eyebrow="What We Believe" title="Care that is both excellent and deeply human." />
        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2">
          {ABOUT.believe.map((b, i) => {
            const { icon: Icon, label } = BELIEF_META[i];
            return (
              <RevealItem
                key={b}
                className="group relative flex h-full flex-col overflow-hidden rounded-card bg-gradient-to-br from-moss to-forest p-8 text-cream shadow-lg ring-1 ring-forest/20 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                {/* Oversized watermark icon for warmth/depth behind the copy. */}
                <Icon
                  aria-hidden
                  className="pointer-events-none absolute -right-5 -top-5 h-28 w-28 text-cream/[0.06] transition duration-500 group-hover:scale-110 group-hover:text-cream/[0.09]"
                />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/15 text-cream ring-1 ring-cream/25 transition group-hover:bg-cream/25">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-[#e7bca8] lg:text-[1.4rem]">
                  {label}
                </h3>
                <p className="mt-2 text-[1.02rem] leading-relaxed text-cream/85">
                  {b}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Section>

      {/* Who We Serve */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Who We Serve" title="We are not asking whether someone fits a model. We are asking: how can we help?" />
            <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-muted">
              {ABOUT.whoWeServe.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <RevealGroup className="mt-7 grid gap-3 sm:grid-cols-2" stagger={0.06}>
              {ABOUT.whoWeServe.services.map((s) => (
                <RevealItem
                  key={s}
                  className="flex items-center gap-3 rounded-2xl bg-sage/60 px-5 py-4 text-sm font-medium text-ink ring-1 ring-sage-deep/50"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-moss" />
                  {s}
                </RevealItem>
              ))}
            </RevealGroup>
            <p className="mt-7 text-[1.02rem] leading-relaxed text-ink/80">
              {ABOUT.whoWeServe.close}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            {/* Warm accent shapes echoing the Our Story photo treatment */}
            <div
              aria-hidden
              className="absolute -left-4 -top-4 h-2/3 w-2/3 rounded-card bg-gradient-to-br from-moss/15 to-clay/25"
            />
            <ImagePlaceholder
              label="Who We Serve photo"
              className="relative aspect-[4/3] w-full shadow-2xl ring-1 ring-sage-deep/40"
            />
          </Reveal>
        </div>
      </Section>

      {/* Stats */}
      <StatStrip stats={ABOUT.stats} />

      {/* Why Different + Looking Forward */}
      <Section tone="cream">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <div className="flex h-full flex-col rounded-card bg-sage/40 p-8 ring-1 ring-sage-deep/40 lg:p-10">
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-moss/12 text-moss ring-1 ring-moss/20">
                <Fingerprint className="h-6 w-6" />
              </span>
              <SectionHeading eyebrow="Why Strides Is Different" title="People, not productivity metrics." />
              <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-muted">
                {ABOUT.whyDifferent.map((p, i) => (
                  <p
                    key={p}
                    className={
                      i === 0 ? "text-[1.08rem] font-medium text-ink/90" : undefined
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-card bg-sage/40 p-8 ring-1 ring-sage-deep/40 lg:p-10">
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-clay/15 text-clay ring-1 ring-clay/25">
                <Telescope className="h-6 w-6" />
              </span>
              <SectionHeading eyebrow="Looking Forward" title="Building the community every individual deserves." />
              <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-muted">
                {ABOUT.lookingForward.map((p, i) => (
                  <p
                    key={p}
                    className={
                      i === 0 ? "text-[1.08rem] font-medium text-ink/90" : undefined
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Meet the Team teaser */}
      <Section tone="sage">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Our Team"
            title="Exceptional care is built by exceptional people."
          />
          <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-ink/80">
            {ABOUT.teamClose.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <CtaButton href="/team" variant="primary" size="lg" className="mt-8" withArrow>
            Meet the Team
          </CtaButton>
        </Reveal>
      </Section>

      {/* CTA */}
      <div className="bg-forest text-cream">
        <Reveal className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl font-medium lg:text-4xl">
            Let’s find the right support together.
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4">
            <CtaButton variant="light" size="lg" withArrow>
              Request an Intake
            </CtaButton>
            <Link
              href="/services"
              className="text-sm font-medium text-cream/75 underline decoration-cream/30 underline-offset-4 transition-colors hover:text-cream hover:decoration-cream"
            >
              Explore Our Services
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  );
}
