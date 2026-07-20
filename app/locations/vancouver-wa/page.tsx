import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { CONTACT, GOOGLE_FORM_URL, SITE } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd, locationSchema } from "@/lib/schema";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SectionBand } from "@/components/sections/SectionBand";
import { FaqSection, faqPlainText, type ArticleFaq } from "@/components/article/Article";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

const PATH = "/locations/vancouver-wa";
const TITLE = "ABA Therapy in Vancouver, WA | Strides Therapeutic Services";
const DESCRIPTION =
  "BCBA-owned ABA therapy and autism evaluations in Vancouver, WA — clinic, home, school, and community-based. Serving Camas, Salmon Creek, and all of Clark County.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", url: PATH },
};

const SERVICES_HERE = [
  {
    href: "/services/aba-therapy",
    label: "ABA Therapy",
    blurb: "In clinic, home, school, and community settings across Clark County",
  },
  {
    href: "/services/autism-diagnostic-assessments",
    label: "Autism Evaluations",
    blurb: "Starting at $795, results in as little as 2 weeks, ages up to 8",
  },
  {
    href: "/services/wa-dda",
    label: "WA DDA Services",
    blurb: "Behavior support, crisis stabilization, and life skills for DDA clients",
  },
  {
    href: "/services/social-groups-respite",
    label: "Social Groups & Respite",
    blurb: "Skill-building groups and community respite for local families",
  },
];

const FAQS: ArticleFaq[] = [
  {
    question: "Where is the Strides clinic in Vancouver?",
    answer:
      "204 SE Stonemill Drive, STE 270, Vancouver, WA 98684 — in East Vancouver, minutes off SR-14 and I-205, easy to reach from Camas, Fisher's Landing, Orchards, and Salmon Creek. Clinic hours are Monday–Friday, 8:30 AM–4:30 PM.",
  },
  {
    question: "Do you only see families in Vancouver itself?",
    answer:
      "No — Strides serves all of Clark County, including Camas, Washougal, Battle Ground, Ridgefield, and Salmon Creek, plus the Portland metro across the river. Home-, school-, and community-based services mean location rarely decides whether we can help.",
  },
  {
    question: "What insurance do you accept in Washington?",
    answer:
      "PacificSource, BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Kaiser Permanente, and TRICARE, plus Washington DSHS–DDA funding. Apple Health participation is plan-specific and changes over time — call (360) 622-2253 and we'll tell you where things stand for your plan.",
  },
  {
    question: "How fast can my child get an autism evaluation in Vancouver?",
    answer:
      "Strides' diagnostic assessments start at $795 and are typically completed in as little as two weeks — versus the months-long waitlists common at regional centers. Evaluations serve children up to age 8 and include EarliPoint™ eye-tracking alongside clinical assessment by an MD, PsyD, and BCBA team.",
  },
  {
    question: "Does Strides work with Vancouver schools?",
    answer:
      "Yes. School-based support is one of our core service settings, and our team coordinates with local districts around IEPs, behavior plans, and classroom strategies as part of a child's ABA program.",
  },
  {
    question: "Is Strides locally owned?",
    answer:
      "Yes — Strides is owned and operated by Board Certified Behavior Analysts based right here in Vancouver, not a national chain. The founders lead the clinical work personally.",
  },
];

export default function VancouverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            locationSchema({
              path: PATH,
              name: "Strides Therapeutic Services — Vancouver, WA",
              description: DESCRIPTION,
              areaServed: [
                "Vancouver, WA",
                "Camas, WA",
                "Washougal, WA",
                "Battle Ground, WA",
                "Ridgefield, WA",
                "Salmon Creek, WA",
              ],
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
              { name: "Vancouver, WA", path: PATH },
            ])
          ),
        }}
      />

      {/* Hero — city + service intent, NAP + click-to-call above the fold */}
      <div className="bg-moss text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
              Vancouver, WA
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-tight lg:text-5xl">
              ABA Therapy in Vancouver, WA — From the BCBAs Who Live Here
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cream/85">
              Clinic, home, school, and community-based ABA therapy and autism
              evaluations for Clark County families — locally owned, clinically
              led, and built around your child.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-cream/85">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-cream/70" />
                {CONTACT.address}, {CONTACT.city}
              </span>
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 font-semibold hover:text-cream">
                <Phone className="h-4 w-4 shrink-0 text-cream/70" />
                {CONTACT.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-cream/70" />
                {CONTACT.hours}
              </span>
            </div>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CtaButton variant="light" size="lg" withArrow>
                Request an Intake
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Local intro — unique Vancouver content (not swappable) */}
      <Section tone="cream">
        <div className="article-prose mx-auto max-w-3xl">
          <p>
            If you&rsquo;re searching for ABA therapy in Vancouver, WA, you&rsquo;ve
            probably discovered the local reality: most behavioral health for
            Clark County families is headquartered across the river, and
            Washington-side options fill fast. Strides was founded here to
            change that — a clinic in East Vancouver, clinicians who work in
            Vancouver schools and homes every week, and a team that knows the
            systems Washington families actually navigate: Apple Health
            managed-care plans, the DDA waiver world, and ESIT early
            intervention.
          </p>
          <p>
            The clinic sits at 204 SE Stonemill Drive, just off Mill Plain in
            East Vancouver — about ten minutes from Camas, fifteen from Salmon
            Creek, and straightforward from anywhere on the I-205 corridor.
            For families who can&rsquo;t come to us, we come to you:
            home-based, school-based, and community-based services run across
            Vancouver, Camas, Washougal, Battle Ground, and Ridgefield.
          </p>
          <p>
            And because Strides is owned by practicing Board Certified
            Behavior Analysts — not a private-equity chain — clinical
            decisions happen here, by the people who see your child.
          </p>
        </div>
      </Section>

      {/* Services in this city */}
      <Section tone="sage">
        <SectionHeading
          align="center"
          eyebrow="What We Offer in Vancouver"
          title="Every core service, close to home"
        />
        <RevealGroup className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {SERVICES_HERE.map((s) => (
            <RevealItem key={s.href}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-card bg-cream p-6 shadow-sm ring-1 ring-sage-deep/50 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex items-center justify-between gap-3 font-display text-xl font-semibold text-ink transition-colors group-hover:text-moss">
                  {s.label}
                  <ArrowRight className="h-5 w-5 shrink-0 text-moss transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-2 text-sm text-muted">{s.blurb}</span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Funding — WA-specific */}
      <Section tone="cream">
        <div className="article-prose mx-auto max-w-3xl">
          <h2 id="paying-for-aba-in-washington">Paying for ABA therapy in Washington</h2>
          <p>
            Washington families typically fund care one of three ways, and
            Strides works with all of them:
          </p>
          <ul>
            <li>
              <strong>Commercial insurance and TRICARE</strong> — PacificSource,
              BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Kaiser
              Permanente, and TRICARE. Our guide to{" "}
              <Link href="/blog/does-insurance-cover-aba-therapy">
                how insurance covers ABA
              </Link>{" "}
              explains authorization step by step.
            </li>
            <li>
              <strong>Washington DDA</strong> — Strides is a confirmed{" "}
              <Link href="/services/wa-dda">DDA provider</Link> for behavior
              support, stabilization, and life-skills services.
            </li>
            <li>
              <strong>Apple Health (WA Medicaid)</strong> — coverage exists for
              eligible children; participation is plan-specific, so start with
              our{" "}
              <Link href="/insurance/does-medicaid-cover-aba-therapy">
                Apple Health &amp; Medicaid guide
              </Link>{" "}
              and call us to check your specific plan.
            </li>
          </ul>
          <p>
            If a diagnosis is the missing piece, our{" "}
            <Link href="/autism-evaluation-vancouver-wa">
              autism evaluations in Vancouver
            </Link>{" "}
            start at $795 with results in as little as two weeks.
          </p>
        </div>
      </Section>

      <FaqSection faqs={FAQS} eyebrow="Vancouver Families Ask" />

      <SectionBand title="Ready to get started in Vancouver?" />
      <Section tone="cream">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-lg text-muted">
            One call starts everything: intake, funding questions, or a
            two-week evaluation. {CONTACT.responseNote}
          </p>
          <div className="flex flex-col items-center gap-4">
            <CtaButton size="lg" withArrow>
              Request an Intake
            </CtaButton>
            <a
              href={CONTACT.phoneHref}
              className="text-sm font-medium text-moss underline decoration-moss/30 underline-offset-4 hover:text-forest-deep"
            >
              Call {CONTACT.phone} — {CONTACT.hours}
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
