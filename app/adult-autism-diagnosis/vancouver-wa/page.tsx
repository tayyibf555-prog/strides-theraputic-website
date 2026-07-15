import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { articleSchema, faqSchema, jsonLd } from "@/lib/schema";
import { Section } from "@/components/ui/Section";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import {
  ArticleAnswer,
  ArticleBody,
  ArticleCtaBand,
  ArticleEndCta,
  ArticleHero,
  FaqSection,
  faqPlainText,
  type ArticleFaq,
} from "@/components/article/Article";

const PATH = "/adult-autism-diagnosis/vancouver-wa";
const TITLE = "Autism Assessment for Adults Near Me | Vancouver WA";
const DESCRIPTION =
  "Autism assessment for adults near me? Strides in Vancouver WA offers adult autism evaluations for a $1,495 flat fee, results in as little as 2 weeks.";
const PUBLISHED = "2026-07-14";
const UPDATED_LABEL = "July 14, 2026";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: PATH,
  },
};

const FAQS: ArticleFaq[] = [
  {
    question: "Can adults actually get diagnosed with autism?",
    answer:
      "Yes. Autism is lifelong, and there is no upper age limit on diagnosis. Adults in their 20s through their 60s and beyond are evaluated and diagnosed regularly. The process differs from a child's evaluation, relying on clinical interview, standardized adult measures, and your developmental history rather than pediatric tools.",
  },
  {
    question: "How much does an adult autism assessment cost at Strides?",
    answer:
      "$1,495, flat fee. That covers the full evaluation process through results and the written report. Comparable private-pay evaluations in the Portland-Vancouver area often cost $2,000 to $5,000.",
  },
  {
    question: "How long does the process take?",
    answer:
      "As little as 2 weeks from intake to results. Most providers in the region quote several months to over a year for adult evaluations, so if timing matters (a job situation, a school deadline, a services application), the difference is significant.",
  },
  {
    question: "Does insurance cover autism testing for adults?",
    answer:
      "It depends on your plan. Many plans cover diagnostic evaluations when medically indicated, but adult testing coverage varies more than children's coverage, and prior authorization requirements differ by payer. Strides accepts several major insurance plans; call (360) 622-2253 with your plan details and the team can help you figure out what applies. The $1,495 self-pay option is always available regardless of insurance.",
  },
  {
    question: "What happens after a diagnosis?",
    answer:
      "You leave with a written diagnostic report and specific recommendations. Depending on your goals, next steps might include workplace or academic accommodation requests, applying for services through WA DDA or Oregon DDS, connecting with a therapist experienced with autistic adults, or simply taking time to integrate the information. Strides can help you prioritize.",
  },
  {
    question: "I live in Portland. Can I come to Strides?",
    answer:
      "Yes. Strides serves the Portland OR metro along with Vancouver, Camas, and the rest of Clark County. The East Vancouver clinic is a short drive over the I-205 bridge, and Oregon residents are a routine part of the practice. Strides also works with Oregon DHS Developmental Disabilities Services, which matters if you plan to use your diagnosis to access Oregon state services.",
  },
];

export default function AdultAutismDiagnosisVancouverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            articleSchema({
              headline: TITLE,
              description: DESCRIPTION,
              path: PATH,
              datePublished: PUBLISHED,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faqPlainText(FAQS))) }}
      />

      <ArticleHero
        eyebrow="Adult Autism Diagnosis — Vancouver, WA"
        title="Autism Assessment for Adults Near Me: Diagnosis in Vancouver, WA"
        updated={UPDATED_LABEL}
      />

      <Section tone="cream">
        <ArticleBody>
          <ArticleAnswer>
            <p>
              If you’re an adult searching for an autism assessment near
              Vancouver, WA, you can get one at Strides Therapeutic Services in
              East Vancouver for a $1,495 flat fee, with results in as little
              as 2 weeks. Adult evaluations are conducted by an integrated
              clinical team of MDs, PsyD-level clinicians, and Board Certified
              Behavior Analysts, and the clinic serves adults across Clark
              County, Camas, and the Portland OR metro. Most adults who seek an
              evaluation were never assessed as children, and a formal
              diagnosis can open the door to workplace accommodations,
              services, and a clearer understanding of yourself.
            </p>
          </ArticleAnswer>
          <p>
            That last part matters more than most people expect. The majority
            of adults who walk into an autism evaluation aren’t there because
            something changed. They’re there because something finally has a
            name. Maybe a child or a sibling was recently diagnosed and the
            traits sounded familiar. Maybe decades of exhausting social effort
            finally prompted the question. Either way, you’re not late. You’re
            right on time for the version of autism understanding that actually
            includes adults.
          </p>
          <ImagePlaceholder
            label="East Vancouver clinic exterior"
            className="aspect-[16/9] w-full"
          />

          <h2>Why so many adults are seeking a diagnosis now</h2>
          <p>
            Autism diagnostic criteria have changed substantially over the past
            few decades. If you grew up in the 80s, 90s, or even the 2000s, the
            screening most kids received was narrow. Children who spoke
            fluently, performed well in school, or learned to imitate the
            social behavior around them were routinely missed. That gap didn’t
            close on its own. Those kids became adults, and many spent years
            collecting other labels first: anxiety, depression, ADHD, “too
            sensitive,” “too intense.”
          </p>
          <p>
            Women and others who learned to mask are especially likely to have
            been overlooked. Masking means consciously studying and reproducing
            expected social behavior: rehearsing conversations in advance,
            forcing eye contact, suppressing stimming, copying the mannerisms
            of people who seem to navigate social settings easily. It can work
            well enough to pass a childhood screening. It also tends to be
            exhausting, and many adults describe hitting a wall in their 20s,
            30s, or 40s where the cost of masking becomes impossible to ignore.
          </p>
          <p>
            None of this means these adults are “less autistic” or that their
            experience is milder. It means the tools and assumptions of earlier
            eras weren’t built to see them. A well-conducted adult assessment
            is.
          </p>

          <h2>What an adult autism assessment at Strides looks like</h2>
          <p>
            Adult evaluations at Strides are handled by the clinical team,
            which includes a developmental medicine physician, PsyD-level
            clinicians, and BCBAs. Unlike pediatric evaluations, which at
            Strides can incorporate FDA-authorized eye-tracking technology for
            children up to age 8, adult assessments are conducted through
            comprehensive clinical evaluation: structured interviews,
            standardized measures, and clinical observation interpreted by
            experienced diagnosticians.
          </p>
          <p>Here’s the general shape of the process:</p>
          <ol>
            <li>
              <strong>Intake.</strong> You request an intake through the{" "}
              <Link href="/contact">contact page</Link> or by calling{" "}
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>. Strides gathers
              background information: your developmental history as best you
              know it, current concerns, and what you’re hoping to get out of
              the evaluation.
            </li>
            <li>
              <strong>Clinical interview.</strong> A clinician sits down with
              you (in person, at the East Vancouver clinic) and walks through
              your history in depth. Childhood experiences, social
              relationships, sensory experiences, routines, work and school
              history. If a parent, partner, or someone who knew you as a child
              can contribute observations, that helps, but adults without
              access to childhood informants are evaluated all the time.
            </li>
            <li>
              <strong>Evaluation.</strong> Standardized assessment activities
              and questionnaires, selected and administered by the clinical
              team based on your situation.
            </li>
            <li>
              <strong>Results and recommendations.</strong> You receive a clear
              diagnostic answer, a written report, and practical
              recommendations. If the answer is yes, the report is written to
              support the things you may actually need it for: accommodations,
              services, disability documentation. If the answer is no, you
              still leave with an explanation of what is going on and where to
              go next.
            </li>
          </ol>
          <p>
            The whole process runs on a compressed timeline. Strides completes
            assessments in as little as 2 weeks from intake, at a{" "}
            <Link href="/blog/how-much-does-an-autism-evaluation-cost">
              $1,495 flat fee
            </Link>
            . No surprise add-on charges, no per-hour billing that balloons
            midway through.
          </p>
        </ArticleBody>
      </Section>

      <ArticleCtaBand
        title="Ready to stop wondering?"
        body="Intake is a short form, and the team will walk you through the rest. Results in as little as 2 weeks, for a $1,495 flat fee."
      />

      <Section tone="cream">
        <ArticleBody>
          <h2>What a diagnosis actually changes</h2>
          <p>
            Adults sometimes ask whether an evaluation is worth it this late.
            Fair question. Here’s what a formal diagnosis does that
            self-identification can’t:
          </p>
          <ul>
            <li>
              <strong>Workplace accommodations.</strong> Under the ADA, a
              documented diagnosis supports formal accommodation requests:
              written instructions instead of verbal ones, quieter workspaces,
              flexible scheduling, adjusted lighting. Your employer doesn’t
              have to take your word for it; they do have to engage with
              documentation.
            </li>
            <li>
              <strong>Academic accommodations.</strong> If you’re in college or
              a training program, disability services offices require
              documentation to provide extended testing time, note-taking
              support, or housing adjustments.
            </li>
            <li>
              <strong>Access to services.</strong> A diagnosis is the entry
              point for state developmental disability systems. Washington’s
              DDA and Oregon’s DDS both require diagnostic documentation, and
              Strides works with both agencies. Learn more on our{" "}
              <Link href="/services/autism-diagnostic-assessments">
                autism diagnostic assessments
              </Link>{" "}
              page.
            </li>
            <li>
              <strong>Better-fitting mental health care.</strong> Therapy that
              treats autistic burnout as ordinary depression tends not to work.
              Clinicians who know your neurotype can actually help.
            </li>
            <li>
              <strong>Self-understanding.</strong> This is the one adults
              mention most. Decades of “why is this hard for me when it’s easy
              for everyone else” get reframed into something coherent. People
              consistently describe the diagnosis as a relief, not a burden.
            </li>
          </ul>

          <h2>Why local, in-person evaluation matters</h2>
          <p>
            Online screeners and telehealth-only diagnostic services have
            multiplied in the last few years. Some are legitimate. Many produce
            reports that employers, universities, and state agencies won’t
            accept, and almost none can offer the observational component that
            strengthens a diagnostic conclusion.
          </p>
          <p>An in-person evaluation with a local team has practical advantages:</p>
          <ul>
            <li>
              <strong>Documentation that holds up.</strong> A report signed by
              an MD/PsyD/BCBA team carries weight with HR departments,
              disability services offices, and WA DDA / Oregon DDS caseworkers.
            </li>
            <li>
              <strong>A care team, not just a PDF.</strong> If the evaluation
              surfaces needs beyond the diagnosis itself, Strides can point you
              to next steps and, where appropriate, provide them.
            </li>
            <li>
              <strong>Actual proximity.</strong> The clinic sits at 204 SE
              Stonemill Drive, STE 270 in East Vancouver, minutes off SR-14 and
              I-205. That’s an easy drive from anywhere in Clark County, ten
              minutes from Camas, and straightforward for Portland-area adults
              crossing the river. Plenty of Oregon residents make the trip; the
              wait time difference alone justifies it.
            </li>
          </ul>
          <ImagePlaceholder
            label="Clinic location map"
            className="aspect-[16/9] w-full"
          />

          <h2>Cost, and the waitlist problem</h2>
          <p>
            Adult autism assessments in the Portland-Vancouver market commonly
            run $2,000 to $5,000 through private psychology practices, and
            hospital-system waitlists for adult evaluations frequently stretch
            six months to over a year. Some large systems don’t evaluate adults
            at all.
          </p>
          <p>
            Strides charges a $1,495 flat fee and completes the process in as
            little as 2 weeks. That’s the whole pitch: a lower price than most
            of the market and a timeline measured in weeks instead of seasons.
            If you’ve already called around and been quoted a
            spring-of-next-year appointment, this is the alternative. Our{" "}
            <Link href="/blog/how-much-does-an-autism-evaluation-cost">
              cost breakdown
            </Link>{" "}
            covers what typically drives evaluation pricing if you want to
            compare quotes properly.
          </p>
          <p>
            On insurance: coverage for adult diagnostic testing varies widely
            by plan, and some plans that cover children’s evaluations handle
            adult testing differently. Strides is in network with several major
            payers, so it’s worth a phone call to check your specific situation
            before assuming you’ll pay out of pocket. If you rely on Medicaid,
            our guide to{" "}
            <Link href="/insurance/does-medicaid-cover-aba-therapy">
              Medicaid and autism services coverage
            </Link>{" "}
            explains how the state programs generally work; call the office to
            verify current plan participation either way.
          </p>
        </ArticleBody>
      </Section>

      <FaqSection faqs={FAQS} title="Frequently Asked Questions" />

      <ArticleEndCta
        title="Wondering whether an evaluation is your next step?"
        body={
          <p>
            Request an intake or call {CONTACT.phone}, Monday–Friday, 8:30
            AM–4:30 PM. Strides Therapeutic Services, {CONTACT.address},{" "}
            {CONTACT.city}. Serving Vancouver, Camas, Clark County, and the
            Portland metro.
          </p>
        }
      />
    </>
  );
}
