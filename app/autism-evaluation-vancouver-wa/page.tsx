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

const PATH = "/autism-evaluation-vancouver-wa";
const TITLE = "Autism Evaluation in Vancouver, WA – Results in ~2 Weeks";
const DESCRIPTION =
  "Autism diagnosis in Vancouver, WA without the waitlist: MD/PsyD/BCBA team, EarliPoint™ eye-tracking, ages up to 8, starting at $795 with results in as little as 2 weeks.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", url: PATH },
};

const STEPS = [
  {
    title: "Request an intake",
    body: "A short form or one phone call. We talk through your concerns, your child's age, and your funding picture, and get you scheduled.",
  },
  {
    title: "Assessment appointments",
    body: "Structured clinical evaluation at our East Vancouver clinic, including the EarliPoint™ eye-tracking evaluation for children up to age 8, plus caregiver questionnaires you complete at home.",
  },
  {
    title: "Integrated team review",
    body: "A developmental pediatrician (MD), PsyD-level clinicians, and Board Certified Behavior Analysts review everything together against DSM-5 criteria.",
  },
  {
    title: "Report + feedback session",
    body: "You leave with a written diagnostic report built to hold up with insurers, schools, and WA DDA, and a feedback session where you can ask everything.",
  },
];

const FAQS: ArticleFaq[] = [
  {
    question: "How much does an autism evaluation cost in Vancouver, WA?",
    answer:
      "Strides' diagnostic assessments start at $795; the standard assessment is one number with no add-ons, covering the evaluation, written report, and feedback session. Compare that to typical private-pay evaluations of $1,000–$5,000 nationally. Insurance may also cover testing depending on your plan.",
  },
  {
    question: "How long is the wait for an autism diagnosis in Vancouver?",
    answer:
      "Regional hospital systems commonly book evaluations months to over a year out. Strides' assessment process is typically completed in as little as two weeks from intake, that's the reason the program exists.",
  },
  {
    question: "What ages do you evaluate?",
    answer:
      "Children up to age 8, the window where an early answer changes the most. Reliable diagnosis is possible from around 18–24 months. If your child is older, call (360) 622-2253 and we'll point you toward evaluators who can help.",
  },
  {
    question: "What is EarliPoint and why does it matter?",
    answer:
      "EarliPoint™ (EarliTec Diagnostics) is an FDA-authorized eye-tracking evaluation for children up to age 8 that measures how a child visually attends to social information, an objective, biology-based data point alongside the clinical evaluation. Strides is among the first providers in the region using it.",
  },
  {
    question: "Will the diagnosis work for insurance, school, and DDA purposes?",
    answer:
      "The written report is built for exactly that: insurers generally require a formal diagnosis before authorizing ABA therapy, schools use it in IEP conversations, and it supports Washington DDA eligibility work. Whether a specific program accepts an outside evaluation is that program's call, so we write reports to their standards.",
  },
  {
    question: "Is the evaluation covered by insurance?",
    answer:
      "Often, in some form, Strides works with PacificSource, BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Kaiser Permanente, and TRICARE, and coverage for diagnostic testing varies by plan. Many families choose the private-pay path, starting at $795, specifically to skip authorization delays. Call and we'll help you compare.",
  },
];

export default function AutismEvalVancouverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            locationSchema({
              path: PATH,
              name: "Autism Diagnostic Evaluations at Strides Therapeutic Services, Vancouver WA",
              description: DESCRIPTION,
              areaServed: ["Vancouver, WA", "Camas, WA", "Battle Ground, WA", "Ridgefield, WA", "Clark County, WA"],
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
              { name: "Autism Evaluation in Vancouver, WA", path: PATH },
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
              { name: "Autism Evaluation in Vancouver, WA", path: PATH },
                ]}
                onDark
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
              Autism Diagnostic Evaluation · Vancouver, WA
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-tight lg:text-5xl">
              An Autism Diagnosis in Vancouver, Without the Year-Long Wait
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cream/85">
              MD, PsyD, and BCBA team · EarliPoint™ eye-tracking · children up
              to age 8 · starting at $795 · results in as little as two weeks.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-cream/85">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-cream/70" />
                {CONTACT.address}, {CONTACT.city}
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

      {/* Why this exists, local reality */}
      <Section tone="cream">
        <div className="article-prose mx-auto max-w-3xl">
          <p>
            Ask any Clark County pediatrician where to get an autism
            evaluation and you&rsquo;ll hear the same names, followed by the
            same warning about the waitlist. For a family watching a
            two-year-old miss milestones, &ldquo;call back next year&rdquo;
            isn&rsquo;t an answer. Strides built its diagnostic program in
            East Vancouver specifically for this gap: local, fast, and
            rigorous enough that the report opens every door that comes after,
          <Link href="/services/aba-therapy">insurance-funded ABA</Link>,
            school supports, and{" "}
            <Link href="/services/wa-dda">Washington DDA</Link> eligibility
            work.
          </p>
          <p>
            Families come from across the county, Camas, Battle Ground,
            Ridgefield, Salmon Creek, and from{" "}
            <Link href="/locations/portland-or">across the river</Link>, since
            our East Vancouver clinic is often a shorter drive than
            Portland&rsquo;s own diagnostic centers. Wondering about cost
            first? Our{" "}
            <Link href="/blog/how-much-does-an-autism-evaluation-cost">
              autism evaluation cost guide
            </Link>{" "}
            breaks down every option, insured and private-pay.
          </p>
        </div>
      </Section>

      {/* Process steps */}
      <Section tone="sage">
        <SectionHeading
          align="center"
          eyebrow="How It Works"
          title="Four steps, about two weeks"
        />
        <RevealGroup className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {STEPS.map((st, i) => (
            <RevealItem
              key={st.title}
              className="rounded-card bg-cream p-6 shadow-sm ring-1 ring-sage-deep/50"
            >
              <span className="inline-flex items-center gap-2 font-display text-xl font-semibold text-ink">
                <BadgeCheck className="h-5 w-5 text-moss" /> {i + 1}. {st.title}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted">{st.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <FaqSection faqs={FAQS} eyebrow="Evaluation Questions" />

      <SectionBand title="Two weeks from now, you could know." />
      <Section tone="cream">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-lg text-muted">
            Assessments start at $795; the standard assessment is one number
            with no add-ons, delivered by an integrated MD, PsyD, and BCBA
            team at our East Vancouver clinic.
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
