import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Clock, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd, locationSchema } from "@/lib/schema";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionBand } from "@/components/sections/SectionBand";
import { FaqSection, faqPlainText, type ArticleFaq } from "@/components/article/Article";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

const PATH = "/autism-evaluation-portland-or";
const TITLE = "Autism Testing for Portland, OR Families – ~2 Week Results";
const DESCRIPTION =
  "Autism testing for Portland, Oregon families without the metro waitlists, 20 minutes across the river: MD/PsyD/BCBA team, EarliPoint™, ages up to 8, starting at $795.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", url: PATH },
};

const FAQS: ArticleFaq[] = [
  {
    question: "Where do Portland families go for the evaluation?",
    answer:
      "Our clinic in East Vancouver, WA, 204 SE Stonemill Drive, STE 270, sits just across the Columbia, often a shorter drive from east Portland and Gresham than the big diagnostic centers across town. Caregiver questionnaires are completed at home; typically only the assessment appointments are in person.",
  },
  {
    question: "How long do autism evaluations take in the Portland area?",
    answer:
      "The metro's hospital-based centers commonly quote waits of many months to over a year. Strides' assessment process is typically completed in as little as two weeks from intake, which is why Oregon families cross the river for it.",
  },
  {
    question: "How much does autism testing cost for Oregon families?",
    answer:
      "Starting at $795. The standard assessment is one number with no add-ons, covering the evaluation, written report, and feedback session. Private-pay evaluations in the region typically run $1,000–$5,000, so many OHP- and insurance-waitlisted families choose this path to stop losing months.",
  },
  {
    question: "Will an out-of-state evaluation work for Oregon services?",
    answer:
      "The diagnostic report is written to clinical standards that travel: Oregon insurers require a formal diagnosis before authorizing ABA, schools use it in support conversations, and it can inform Oregon DDS eligibility work. Whether a specific program accepts any outside evaluation is that program's decision, so we write reports to hold up to that scrutiny.",
  },
  {
    question: "Does OHP cover autism testing?",
    answer:
      "OHP generally covers medically necessary diagnostic services for enrolled children, coordinated through your CCO, the practical constraint is usually the wait for a covered slot. Strides is currently in process to become an OHP provider; call (360) 622-2253 to check current status, or read our Medicaid & OHP guide for the full picture.",
  },
  {
    question: "What ages does Strides evaluate?",
    answer:
      "Children up to age 8, using EarliPoint™ eye-tracking (FDA-authorized for that age range) alongside comprehensive clinical evaluation by the MD, PsyD, and BCBA team. If your child is older, call us and we'll point you in the right direction.",
  },
];

const STEPS = [
  {
    title: "Request an intake",
    body: "One form or one call. We cover your concerns, your child's age, and whether OHP, commercial insurance, or private pay makes sense for the evaluation.",
  },
  {
    title: "Assessment appointments",
    body: "At the East Vancouver clinic, 20 minutes from much of the metro: structured clinical evaluation plus EarliPoint™ eye-tracking for children up to age 8.",
  },
  {
    title: "Integrated team review",
    body: "Developmental pediatrician (MD), PsyD-level clinicians, and BCBAs review the full picture together against DSM-5 criteria.",
  },
  {
    title: "Report + feedback session",
    body: "A written diagnostic report built for Oregon's systems (insurers, schools, DDS conversations), plus a feedback session for your questions.",
  },
];

export default function AutismEvalPortlandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            locationSchema({
              path: PATH,
              name: "Autism Testing for Portland Families at Strides Therapeutic Services",
              description: DESCRIPTION,
              areaServed: ["Portland, OR", "Gresham, OR", "Troutdale, OR", "Happy Valley, OR"],
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faqPlainText(FAQS))) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Locations", path: "/locations" },
              { name: "Autism Testing in Portland, OR", path: PATH },
            ])
          ),
        }}
      />

      {/* Hero */}
      <div className="bg-moss text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <div className="mb-5">
              <Breadcrumbs
                items={[
                  { name: "Home", path: "/" },
              { name: "Locations", path: "/locations" },
              { name: "Autism Testing in Portland, OR", path: PATH },
                ]}
                onDark
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
              Autism Testing · Serving Portland, OR
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-tight lg:text-5xl">
              Autism Testing for Portland Families, 20 Minutes and 2 Weeks Away
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cream/85">
              Skip the metro waitlists: an integrated MD, PsyD, and BCBA
              diagnostic team just across the river, for children up to age 8,
              starting at $795.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-cream/85">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-cream/70" />
                East Vancouver clinic, just over the Glenn Jackson Bridge
              </span>
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 font-semibold hover:text-cream">
                <Phone className="h-4 w-4 shrink-0 text-cream/70" /> {CONTACT.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-cream/70" /> {CONTACT.hours}
              </span>
            </div>
            <div className="mt-8">
              <CtaButton variant="light" size="lg" withArrow>
                Schedule an Assessment
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Local reality */}
      <Section tone="cream">
        <div className="article-prose mx-auto max-w-3xl">
          <p>
            Portland&rsquo;s diagnostic bottleneck is real: the metro&rsquo;s
            hospital systems and university clinics carry some of the
            region&rsquo;s longest evaluation waitlists, and OHP&rsquo;s
            covered pathways add authorization queues on top. Meanwhile the
            developmental clock doesn&rsquo;t pause, most insurers
            won&rsquo;t authorize{" "}
            <Link href="/services/aba-therapy">ABA therapy</Link> until a
            formal diagnosis exists.
          </p>
          <p>
            Strides&rsquo; answer sits 20 minutes from much of the metro, in
            East Vancouver. Same rigorous standard, {" "}
            <Link href="/services/autism-diagnostic-assessments">
              an integrated diagnostic team
            </Link>{" "}
            with EarliPoint™ eye-tracking, without the queue. Oregon families
            use the report to move on every front at once: insurance
            authorization, school conversations, and{" "}
            <Link href="/services/or-dds">Oregon DDS</Link> eligibility work.
            The cost math is covered honestly in our{" "}
            <Link href="/blog/how-much-does-an-autism-evaluation-cost">
              evaluation cost guide
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Steps */}
      <Section tone="sage">
        <SectionHeading align="center" eyebrow="How It Works" title="Four steps, about two weeks" />
        <RevealGroup className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {STEPS.map((st, i) => (
            <RevealItem key={st.title} className="rounded-card bg-cream p-6 shadow-sm ring-1 ring-sage-deep/50">
              <span className="inline-flex items-center gap-2 font-display text-xl font-semibold text-ink">
                <BadgeCheck className="h-5 w-5 text-moss" /> {i + 1}. {st.title}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted">{st.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <FaqSection faqs={FAQS} eyebrow="Portland Families Ask" />

      <SectionBand title="Stop waiting on a waitlist." />
      <Section tone="cream">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-lg text-muted">
            Assessments start at $795, typically completed in as little as two
            weeks, and serving Portland families is a core part of why the
            program exists.
          </p>
          <div className="flex flex-col items-center gap-4">
            <CtaButton size="lg" withArrow>
              Schedule an Assessment
            </CtaButton>
            <a
              href={CONTACT.phoneHref}
              className="text-sm font-medium text-moss underline decoration-moss/30 underline-offset-4 hover:text-forest-deep"
            >
              Call {CONTACT.phone}, {CONTACT.hours}
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
