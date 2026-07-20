import Link from "next/link";
import { CalendarDays, Phone, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArticleToc } from "./ArticleToc";

export { ArticleToc } from "./ArticleToc";
import { CONTACT } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SectionBand } from "@/components/sections/SectionBand";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

// Long-form article layout primitives for SEO content pages (blog, insurance,
// location guides). Mirrors the service-detail template: moss hero band,
// cream prose sections, sage FAQ block, and the recurring CTA bands.

const DEFAULT_REVIEWER = "Hannah Schmidt, M.S., BCBA, LBA";

// Moss hero band with title block + medical-review byline. The reviewer must
// be the clinician who actually signed off on the piece (client-confirmed).
export function ArticleHero({
  eyebrow,
  title,
  updated,
  reviewer = DEFAULT_REVIEWER,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  updated: string; // human-readable date, e.g. "July 14, 2026"
  reviewer?: string;
  crumbs?: Array<{ name: string; path: string }>;
}) {
  return (
    <div className="bg-moss text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <Reveal>
          {crumbs && (
            <div className="mb-5">
              <Breadcrumbs items={crumbs} onDark />
            </div>
          )}
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-tight lg:text-5xl">
            {title}
          </h1>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-cream/85">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-cream/70" />
              Medically reviewed by{" "}
              <Link
                href="/team"
                className="underline decoration-cream/40 underline-offset-4 transition-colors hover:decoration-cream"
              >
                {reviewer}
              </Link>
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 shrink-0 text-cream/70" />
              Updated {updated}
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}


// Article body wrapper: sticky TOC rail column on xl, single column below.
// The rail lives INSIDE this grid, so it starts under the header and ends
// with the article body: it can never overlap the header, CTA bands that
// follow, or the footer.
export function ArticleGrid({
  sections,
  children,
}: {
  sections: Array<{ id: string; label: string }>;
  children: React.ReactNode;
}) {
  return (
    <Section tone="cream">
      <div className="xl:grid xl:grid-cols-[230px_minmax(0,1fr)] xl:gap-12">
        <aside className="hidden xl:block">
          <div className="sticky top-28">
            <ArticleToc sections={sections} variant="rail" />
          </div>
        </aside>
        <div className="min-w-0">
          <ArticleToc sections={sections} variant="inline" />
          {children}
        </div>
      </div>
    </Section>
  );
}

// Measure-width prose column. Pair with the `.article-prose` styles in
// globals.css — children are plain h2/h3/p/ul/ol/table markup.
export function ArticleBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`article-prose mx-auto max-w-3xl ${className}`}>
      {children}
    </div>
  );
}

// Highlighted direct-answer callout (the featured-snippet paragraph).
export function ArticleAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-card bg-sage/60 p-6 font-medium text-ink ring-1 ring-sage-deep/50 lg:p-7">
      {children}
    </div>
  );
}

// Mid-page conversion band: Request an Intake (Google Form) + phone.
export function ArticleCtaBand({
  title,
  body,
  ctaLabel = "Request an Intake",
}: {
  title: string;
  body?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="mx-auto my-12 max-w-3xl">
      <Reveal className="rounded-card bg-moss px-6 py-10 text-center text-cream lg:px-10">
        <h2 className="font-display text-2xl font-medium tracking-wide lg:text-3xl">
          {title}
        </h2>
        {body && <p className="mx-auto mt-3 max-w-xl text-cream/80">{body}</p>}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton variant="light" size="lg" withArrow>
            {ctaLabel}
          </CtaButton>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cream/90 transition-colors hover:text-cream"
          >
            <Phone className="h-4 w-4" /> or call {CONTACT.phone}
          </a>
        </div>
      </Reveal>
    </div>
  );
}

// Styled FAQ section (sage band). `answer` is the plain-text version used for
// FAQPage JSON-LD; `body` optionally overrides the rendered markup with links.
export type ArticleFaq = {
  question: string;
  answer: string;
  body?: React.ReactNode;
};

// Strip to the plain-text pairs faqSchema() expects.
export function faqPlainText(faqs: ArticleFaq[]) {
  return faqs.map(({ question, answer }) => ({ question, answer }));
}

export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  eyebrow = "Good to Know",
}: {
  faqs: ArticleFaq[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <Section tone="sage">
      <SectionHeading align="center" eyebrow={eyebrow} title={title} />
      <RevealGroup className="mx-auto mt-12 max-w-3xl space-y-5">
        {faqs.map((f) => (
          <RevealItem
            key={f.question}
            className="rounded-card bg-cream p-6 shadow-sm ring-1 ring-sage-deep/50 lg:p-7"
          >
            <h3 className="font-display text-xl font-semibold text-ink">
              {f.question}
            </h3>
            <div className="article-prose mt-3 text-base">
              {f.body ?? <p>{f.answer}</p>}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

// Closing CTA: full-width band + centered intake button and phone line,
// mirroring the service-detail page ending.
export function ArticleEndCta({
  title,
  body,
  ctaLabel = "Request an Intake",
}: {
  title: string;
  body: React.ReactNode;
  ctaLabel?: string;
}) {
  return (
    <>
      <SectionBand title={title} />
      <Section tone="cream">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <div className="max-w-2xl text-lg text-muted">{body}</div>
          <div className="flex flex-col items-center gap-4">
            <CtaButton size="lg" withArrow>
              {ctaLabel}
            </CtaButton>
            <a
              href={CONTACT.phoneHref}
              className="text-sm font-medium text-moss underline decoration-moss/30 underline-offset-4 transition-colors hover:text-forest-deep hover:decoration-forest-deep"
            >
              Call {CONTACT.phone} · {CONTACT.hours}
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
