import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BadgeCheck, MapPin, Languages, Tag } from "lucide-react";
import { SERVICES, getService } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SectionBand } from "@/components/sections/SectionBand";
import { FeatureList, Differentiators } from "@/components/sections/FeatureList";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <div className="bg-moss text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-cream/70 transition-colors hover:text-cream"
            >
              <ArrowLeft className="h-4 w-4" /> All Services
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
              {service.title}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-tight lg:text-5xl">
              {service.tagline}
            </h1>
            <div className="mt-7 flex flex-wrap gap-3">
              {service.price && (
                <span className="inline-flex items-center gap-2 rounded-full bg-clay/90 px-4 py-2 text-sm font-semibold text-cream">
                  <Tag className="h-4 w-4" /> {service.price}
                </span>
              )}
              {service.availability && (
                <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-2 text-sm font-medium text-cream backdrop-blur">
                  <Languages className="h-4 w-4" /> {service.availability}
                </span>
              )}
              {service.serving && (
                <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-2 text-sm font-medium text-cream backdrop-blur">
                  <MapPin className="h-4 w-4" /> {service.serving}
                </span>
              )}
            </div>
            <CtaButton variant="light" size="lg" className="mt-8" withArrow>
              {service.ctaLabel}
            </CtaButton>
          </Reveal>
        </div>
      </div>

      {/* Intro */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <Reveal>
            <div className="space-y-4 text-[1.05rem] leading-relaxed text-muted">
              {service.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            {service.introImage ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card shadow-lg ring-1 ring-sage-deep/40">
                <Image
                  src={service.introImage}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <ImagePlaceholder
                label="Service photography"
                className="aspect-[4/3] w-full"
              />
            )}
          </Reveal>
        </div>
      </Section>

      {/* Features */}
      {service.features && service.features.length > 0 && (
        <Section tone="sage">
          {service.featuresHeading && (
            <SectionHeading
              align="center"
              eyebrow="What We Provide"
              title={service.featuresHeading}
            />
          )}
          <div className={service.featuresHeading ? "mt-12" : ""}>
            {service.featuresVideo ? (
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <FeatureList features={service.features} />
                <Reveal delay={0.1}>
                  <div className="overflow-hidden rounded-card shadow-lg ring-1 ring-sage-deep/40">
                    <video
                      controls
                      preload="metadata"
                      poster={service.featuresVideoPoster}
                      className="aspect-video w-full bg-ink"
                    >
                      <source src={service.featuresVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Reveal>
              </div>
            ) : (
              <FeatureList features={service.features} />
            )}
          </div>
        </Section>
      )}

      {/* Programs (seasonal) */}
      {service.programs && service.programs.length > 0 && (
        <Section tone="cream">
          <SectionHeading
            align="center"
            eyebrow="Seasonal Programs"
            title="Now Enrolling"
          />
          <RevealGroup className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            {service.programs.map((p) =>
              p.image ? (
                // The flyer image already contains the program's dates, pricing,
                // and details, so it becomes the whole card with an intake button
                // overlaid on it.
                <RevealItem key={p.name} className="group relative">
                  <Image
                    src={p.image}
                    alt={`${p.name} — June 22 to August 21. ${p.blurb}`}
                    width={1100}
                    height={1424}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-5">
                    <CtaButton
                      variant="light"
                      size="lg"
                      withArrow
                      className="pointer-events-auto shadow-lg"
                    >
                      Complete Intake Today
                    </CtaButton>
                  </div>
                </RevealItem>
              ) : (
                <RevealItem
                  key={p.name}
                  className="flex flex-col overflow-hidden rounded-card shadow-sm ring-1 ring-sage-deep/50"
                >
                  <ImagePlaceholder label={p.name} className="h-40 w-full" rounded={false} />
                  <div className="flex flex-1 flex-col bg-cream p-7">
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{p.blurb}</p>
                    <ul className="mt-4 space-y-2">
                      {p.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-ink/80">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-moss-light" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <CtaButton className="mt-6 self-start">Complete Intake Today</CtaButton>
                  </div>
                </RevealItem>
              )
            )}
          </RevealGroup>
        </Section>
      )}

      {/* Differentiators */}
      {service.differentiators && service.differentiators.length > 0 && (
        <Section tone="cream-deep">
          <SectionHeading
            align="center"
            eyebrow="Why Strides"
            title="What Makes Strides Different"
          />
          <div className="mt-12">
            <Differentiators items={service.differentiators} />
          </div>
        </Section>
      )}

      {/* Approach */}
      {service.approach && (
        <div className="bg-forest text-cream">
          <Reveal className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
              {service.approach.heading}
            </p>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-cream/90">
              {service.approach.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      )}

      {/* CTA */}
      <SectionBand title="Ready to take the next step?" />
      <Section tone="cream">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-lg text-muted">
            Our team is here to guide you through assessments, funding options,
            and service recommendations — with transparency and support every
            step of the way.
          </p>
          <div className="flex flex-col items-center gap-4">
            <CtaButton size="lg" withArrow>
              {service.ctaLabel}
            </CtaButton>
            <Link
              href="/contact"
              className="text-sm font-medium text-moss underline decoration-moss/30 underline-offset-4 transition-colors hover:text-forest-deep hover:decoration-forest-deep"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
