import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { articleSchema, breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { Section } from "@/components/ui/Section";
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

const PATH = "/blog/does-insurance-cover-aba-therapy";
const TITLE = "Does Insurance Cover ABA Therapy? 2026 Parent Guide";
const DESCRIPTION =
  "Yes — most health plans cover ABA therapy for autism. What plans require, how to verify benefits, and the plans Strides accepts in Vancouver WA & Portland OR.";
const PUBLISHED = "2026-07-17";
const UPDATED_LABEL = "July 17, 2026";

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
    question: "Is ABA therapy covered without an autism diagnosis?",
    answer:
      "Generally no. Health plans authorize ABA as a treatment for autism spectrum disorder, so a formal diagnosis from a qualified evaluator is the prerequisite. That's why the diagnostic evaluation is the practical first step for families — Strides completes assessments for children up to age 8 starting at $795, with results in as little as two weeks.",
  },
  {
    question: "How much does ABA cost with insurance?",
    answer:
      "Once approved, your cost is set by your plan's normal cost-sharing: deductible, copays or coinsurance, and your out-of-pocket maximum. Some families pay little or nothing after the deductible; others pay meaningful coinsurance until they hit their max. The only reliable answer comes from your specific plan documents or a benefits call.",
  },
  {
    question: "What is prior authorization for ABA therapy?",
    answer:
      "Prior authorization is your plan's approval before ABA starts. Plans typically want the autism diagnosis report and a treatment plan written by a BCBA, and they approve a set number of hours for a set period, then re-review based on documented progress. Complete paperwork the first time is the best way to keep the process moving.",
  },
  {
    question: "Does insurance cover the autism evaluation itself?",
    answer:
      "Often yes — diagnostic testing is a covered medical service under many plans, subject to your cost-sharing and network rules. The practical constraint is usually access: covered evaluation slots can carry long waitlists. Many families choose a private-pay evaluation like Strides' assessment starting at $795 to get answers in weeks instead of months, then use insurance for therapy.",
  },
  {
    question: "What if my plan denies ABA coverage?",
    answer:
      "Denials can often be appealed, and plans must tell you the reason and the appeal process. Common fixable causes are incomplete documentation or a missing diagnosis report. Depending on your family's eligibility, state programs — DDA in Washington, DDS in Oregon — can fund behavior supports through a separate pathway. Call us and we'll help you figure out the next move.",
  },
  {
    question: "Which insurance plans does Strides accept?",
    answer:
      "Strides works with PacificSource, BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Kaiser Permanente, and TRICARE, and is a confirmed provider for Washington DDA and Oregon DDS programs. For Medicaid (Apple Health/OHP), participation is plan-specific and changes over time — call (360) 622-2253 and we'll tell you exactly where things stand.",
    body: (
      <p>
        Strides works with PacificSource, BlueCross BlueShield, Aetna, Cigna,
        UnitedHealthcare, Kaiser Permanente, and TRICARE, and is a confirmed
        provider for <Link href="/services/wa-dda">Washington DDA</Link> and{" "}
        <Link href="/services/or-dds">Oregon DDS</Link> programs. For Medicaid
        (Apple Health/OHP), participation is plan-specific and changes over
        time — our{" "}
        <Link href="/insurance/does-medicaid-cover-aba-therapy">
          Medicaid and ABA guide
        </Link>{" "}
        covers that path in detail, and{" "}
        <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> gets you a
        straight answer for your specific plan.
      </p>
    ),
  },
];

export default function DoesInsuranceCoverAbaPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Parent Guides", path: "/blog" },
              { name: "Does Insurance Cover ABA Therapy?", path: PATH },
            ])
          ),
        }}
      />

      <ArticleHero
        eyebrow="Insurance & Funding Guide"
        title="Does Insurance Cover ABA Therapy? How Coverage Actually Works"
        updated={UPDATED_LABEL}
        reviewer="Elsie Herring, M.S., BCBA, LBA"
      />

      <Section tone="cream">
        <ArticleBody>
          <ArticleAnswer>
            <p>
              Yes — most health insurance plans cover ABA therapy for children
              with an autism diagnosis. Every U.S. state has an autism
              insurance mandate, and coverage typically requires three things:
              a formal autism diagnosis, a treatment plan from a Board
              Certified Behavior Analyst, and your plan&rsquo;s prior
              authorization. In Vancouver, WA and Portland, OR, Strides
              Therapeutic Services accepts{" "}
              <strong>
                PacificSource, BlueCross BlueShield, Aetna, Cigna,
                UnitedHealthcare, Kaiser Permanente, and TRICARE
              </strong>
              , plus Washington DDA and Oregon DDS funding.
            </p>
          </ArticleAnswer>

          <h2>Why most plans cover ABA now</h2>
          <p>
            A decade-plus of state autism insurance mandates changed the
            landscape: every state now requires meaningful coverage of
            autism treatment — including ABA — in state-regulated health
            plans. Washington and Oregon both mandate coverage for
            medically necessary autism care.
          </p>
          <p>
            The fine print that trips families up is <em>which rules govern
            your plan</em>:
          </p>
          <ul>
            <li>
              <strong>Fully-insured plans</strong> (bought by your employer
              from an insurer, or through the state exchange) follow state
              mandate rules.
            </li>
            <li>
              <strong>Self-funded employer plans</strong> (common at large
              companies) follow federal ERISA rules instead of state mandates
              — most still cover ABA, but the details are set by the employer.
            </li>
            <li>
              <strong>TRICARE</strong> covers ABA through its own Autism Care
              Demonstration program with its own enrollment steps.
            </li>
            <li>
              <strong>Medicaid</strong> (Apple Health in Washington, OHP in
              Oregon) covers ABA for eligible children through managed-care
              plans — our{" "}
              <Link href="/insurance/does-medicaid-cover-aba-therapy">
                Medicaid and ABA guide
              </Link>{" "}
              walks through that world separately.
            </li>
          </ul>

          <h2>The three things every plan wants before approving ABA</h2>
          <ol>
            <li>
              <strong>A formal autism diagnosis.</strong> Not a screening — a
              diagnostic evaluation by a qualified clinician. This is the gate,
              and it&rsquo;s where waitlists cost families the most time.
              Strides&rsquo;{" "}
              <Link href="/services/autism-diagnostic-assessments">
                diagnostic assessment
              </Link>{" "}
              starts at $795 with results in as little as two weeks for
              children up to age 8 (see{" "}
              <Link href="/blog/how-much-does-an-autism-evaluation-cost">
                what autism evaluations usually cost
              </Link>
              ).
            </li>
            <li>
              <strong>A BCBA-written treatment plan.</strong> After diagnosis,
              a Board Certified Behavior Analyst assesses your child and
              writes the plan — goals, settings, and recommended hours — that
              the insurer reviews.
            </li>
            <li>
              <strong>Prior authorization.</strong> The plan approves hours
              for a period, then re-reviews at intervals against documented
              progress. Thorough paperwork the first time is the difference
              between weeks and months.
            </li>
          </ol>
        </ArticleBody>
      </Section>

      <ArticleCtaBand
        title="Not sure what your plan covers?"
        body="Call us — we work with these plans every week and can tell you what to ask for."
        ctaLabel="Request an Intake"
      />

      <Section tone="cream">
        <ArticleBody>
          <h2>How to verify your ABA benefits (10-minute phone call)</h2>
          <p>
            Call the member-services number on your insurance card and ask
            these questions. Write the answers down, along with the date and
            the representative&rsquo;s name:
          </p>
          <ul>
            <li>&ldquo;Does my plan cover ABA therapy for autism (CPT codes 97151–97158)?&rdquo;</li>
            <li>&ldquo;Is my plan fully-insured or self-funded?&rdquo;</li>
            <li>&ldquo;What&rsquo;s required for prior authorization?&rdquo;</li>
            <li>&ldquo;What are my deductible, copay or coinsurance, and out-of-pocket maximum?&rdquo;</li>
            <li>&ldquo;Is Strides Therapeutic Services in network?&rdquo; — and if not, &ldquo;what are my out-of-network benefits?&rdquo;</li>
            <li>&ldquo;Does the diagnostic evaluation itself require prior authorization?&rdquo;</li>
          </ul>
          <p>
            Ten minutes of questions can save weeks of surprises. And if the
            answers are confusing — they often are — bring them to us and
            we&rsquo;ll translate.
          </p>

          <h2>What you&rsquo;ll actually pay</h2>
          <p>
            &ldquo;Covered&rdquo; doesn&rsquo;t mean free. Once approved, ABA
            runs through your plan&rsquo;s normal cost-sharing: you pay toward
            your deductible, then copays or coinsurance until you reach your
            out-of-pocket maximum, after which the plan pays in full for the
            rest of the plan year. Because ABA is often an ongoing service,
            many families hit their out-of-pocket max — which makes the
            annual maximum, not the per-session copay, the number to budget
            around.
          </p>

          <h2>If coverage falls through</h2>
          <p>
            A denial isn&rsquo;t the end of the road. Plans must state the
            reason and offer an appeal path, and the most common causes —
            missing documentation, no formal diagnosis on file — are fixable.
            Separately, Washington&rsquo;s{" "}
            <Link href="/services/wa-dda">DDA</Link> and Oregon&rsquo;s{" "}
            <Link href="/services/or-dds">DDS</Link> programs fund behavior
            supports for eligible families through the developmental
            disabilities system, independent of your health plan. As Elsie
            Herring, our Executive Operations Director, tells families:
            &ldquo;By the time many families reach us, they&rsquo;re
            exhausted. Our job is to understand why behaviors are happening,
            identify each person&rsquo;s strengths, and create individualized
            supports that help people thrive.&rdquo;
          </p>
        </ArticleBody>
      </Section>

      <FaqSection faqs={FAQS} eyebrow="Coverage Questions" />

      <ArticleEndCta
        title="Let's figure out your coverage together"
        body={
          <p>
            Strides Therapeutic Services works with PacificSource, BlueCross
            BlueShield, Aetna, Cigna, UnitedHealthcare, Kaiser Permanente, and
            TRICARE, plus WA DDA and Oregon DDS funding — serving Vancouver,
            Camas, Clark County, and the Portland metro in clinic, home,
            school, and community settings. If the diagnosis is what&rsquo;s
            standing between your child and covered therapy, ask about the
            $795 two-week assessment.
          </p>
        }
      />
    </>
  );
}
