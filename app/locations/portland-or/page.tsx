import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd, locationSchema } from "@/lib/schema";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionBand } from "@/components/sections/SectionBand";
import { FaqSection, faqPlainText, type ArticleFaq } from "@/components/article/Article";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

const PATH = "/locations/portland-or";
const TITLE = "ABA Therapy in Portland, OR | Strides Therapeutic Services";
const DESCRIPTION =
  "Home- and community-based ABA therapy and behavior support serving Portland, OR families, Oregon DDS provider, OHP enrollment in process, evaluations in as little as 2 weeks.";

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
    blurb: "Home-, school-, and community-based programs across the Portland metro",
  },
  {
    href: "/services/or-dds",
    label: "Oregon DDS Services",
    blurb: "Behavior consultation and positive behavior support plans for DDS clients",
  },
  {
    href: "/services/autism-diagnostic-assessments",
    label: "Autism Evaluations",
    blurb: "Starting at $795, results in as little as 2 weeks, ages up to 8",
  },
  {
    href: "/services/consultation-training",
    label: "Consultation & Training",
    blurb: "For Oregon providers, schools, and care teams",
  },
];

const FAQS: ArticleFaq[] = [
  {
    question: "Does Strides have a clinic in Portland?",
    answer:
      "Our clinic is in East Vancouver, WA, about 20 minutes from much of the Portland metro, and Oregon families are primarily served where daily life happens: at home, in school, and in the community. Many Portland-area families also cross the river for clinic-based evaluations and services.",
  },
  {
    question: "Which Portland-area communities do you serve?",
    answer:
      "The Portland metro broadly, including Northeast and Southeast Portland, Gresham, and the east-metro communities closest to the I-205 corridor. Availability for home-based services depends on clinician scheduling, so call (360) 622-2253 to check your neighborhood.",
  },
  {
    question: "Do you take OHP (Oregon Health Plan)?",
    answer:
      "Strides is currently in process to become an OHP provider, call (360) 622-2253 to verify current participation and timing. Meanwhile, we directly accept PacificSource, BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Kaiser Permanente, and TRICARE, and serve Oregon DDS clients today.",
  },
  {
    question: "What is Oregon DDS and does Strides work with it?",
    answer:
      "Oregon DHS Developmental Disabilities Services funds supports like behavior consultation and positive behavior support plans through county DD programs. Strides is a confirmed Oregon DDS provider, for many Portland families it's the most direct route to services with us today.",
  },
  {
    question: "How quickly can an Oregon child get an autism evaluation?",
    answer:
      "Strides' diagnostic assessments start at $795 and are typically completed in as little as two weeks at our East Vancouver clinic, a short drive for most of the metro, and dramatically faster than the region's typical evaluation waitlists. Evaluations serve children up to age 8.",
  },
  {
    question: "Do Washington and Oregon funding rules differ?",
    answer:
      "Significantly, different Medicaid programs (Apple Health vs. OHP), different disability agencies (DDA vs. DDS), different processes. Our team works both systems every week; our Medicaid guide covers the differences, and one phone call sorts out which paths apply to your family.",
  },
];

export default function PortlandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            locationSchema({
              path: PATH,
              name: "Strides Therapeutic Services serving Portland, OR",
              description: DESCRIPTION,
              areaServed: [
                "Portland, OR",
                "Gresham, OR",
                "Northeast Portland, OR",
                "Southeast Portland, OR",
                "Troutdale, OR",
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
              { name: "Portland, OR", path: PATH },
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
              { name: "Portland, OR", path: PATH },
                ]}
                onDark
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
              Portland, OR
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-tight lg:text-5xl">
              ABA Therapy Serving Portland, OR, Where Your Family Actually Lives
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cream/85">
              Home-, school-, and community-based behavior support for Portland
              metro families, from a BCBA-owned team that works Oregon&rsquo;s
              DDS and insurance systems every week.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-cream/85">
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 font-semibold hover:text-cream">
                <Phone className="h-4 w-4 shrink-0 text-cream/70" />
                {CONTACT.phone}
              </a>
              <span>{CONTACT.hours}</span>
            </div>
            <div className="mt-8">
              <CtaButton variant="light" size="lg" withArrow>
                Request an Intake
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Local intro, unique Portland content */}
      <Section tone="cream">
        <div className="article-prose mx-auto max-w-3xl">
          <p>
            Portland has no shortage of ABA logos, what it&rsquo;s short on
            is capacity. The metro&rsquo;s big national providers carry the
            waitlists to prove it, and for families east of the Willamette,
            &ldquo;in-network&rdquo; often means months of waiting followed by
            a clinic across town. Strides works the opposite model: services
            come to your home, your child&rsquo;s school, and your community,
            scheduled from our clinic just across the river in East Vancouver
          , closer to much of east Portland than many Portland clinics are.
          </p>
          <p>
            Oregon families reach us two ways. Most start through{" "}
            <Link href="/services/or-dds">Oregon DDS</Link>, where Strides is
            a confirmed provider for behavior consultation and positive
            behavior support plans through county DD programs. Others come
            through commercial insurance for ABA therapy or cross the bridge
            for a fast diagnostic evaluation, starting at $795, typically
            completed in as little as two weeks, while the region&rsquo;s
            hospital systems quote seasons.
          </p>
          <p>
            One system-quirk we handle daily: Washington and Oregon run
            completely different funding worlds. If your family straddles the
            river, work in Portland, live in Vancouver, or vice versa, 
            we&rsquo;re one of the few teams fluent in both.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section tone="sage">
        <SectionHeading
          align="center"
          eyebrow="What We Offer in the Portland Metro"
          title="Services built for Oregon families"
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

      {/* Funding, Oregon-specific */}
      <Section tone="cream">
        <div className="article-prose mx-auto max-w-3xl">
          <h2 id="paying-for-aba-in-oregon">Paying for ABA therapy in Oregon</h2>
          <ul>
            <li>
              <strong>Oregon DDS</strong>: the most direct path today.
              Strides provides <Link href="/services/or-dds">behavior
              consultation and PBSP services</Link> for DDS clients across the
              metro.
            </li>
            <li>
              <strong>Commercial insurance and TRICARE</strong>: PacificSource,
              BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Kaiser
              Permanente, TRICARE. See{" "}
              <Link href="/blog/does-insurance-cover-aba-therapy">
                how coverage works
              </Link>
              .
            </li>
            <li>
              <strong>OHP</strong>: Strides is currently in process to become
              an OHP provider; our{" "}
              <Link href="/insurance/does-medicaid-cover-aba-therapy">
                Medicaid &amp; OHP guide
              </Link>{" "}
              explains the coverage rules, and a quick call confirms current
              status.
            </li>
          </ul>
          <p>
            Starting from zero? A diagnosis opens every one of these doors, 
            see{" "}
            <Link href="/autism-evaluation-portland-or">
              autism evaluations for Portland families
            </Link>
            .
          </p>
        </div>
      </Section>

      <FaqSection faqs={FAQS} eyebrow="Portland Families Ask" />

      <SectionBand title="Ready to get started in Portland?" />
      <Section tone="cream">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-lg text-muted">
            Tell us your neighborhood and your funding situation, we&rsquo;ll
            map the fastest path. {CONTACT.responseNote}
          </p>
          <div className="flex flex-col items-center gap-4">
            <CtaButton size="lg" withArrow>
              Request an Intake
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
