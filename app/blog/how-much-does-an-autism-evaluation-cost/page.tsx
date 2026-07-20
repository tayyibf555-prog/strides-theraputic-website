import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { articleSchema, faqSchema, jsonLd } from "@/lib/schema";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
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

const PATH = "/blog/how-much-does-an-autism-evaluation-cost";
const TITLE = "How Much Does an Autism Assessment Cost? (2026)";
const DESCRIPTION =
  "Autism assessments typically run $1,000–$5,000 private-pay in the US. What drives the price, how insurance works, and Strides' assessments starting at $795.";
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
    question: "Is autism testing covered by insurance?",
    answer:
      "Most of the time, yes. All 50 states require state-regulated health plans to cover autism-related care, and diagnostic evaluations are typically included as medically necessary services. Your actual cost depends on your deductible, coinsurance, and whether the evaluator is in-network, so call your plan before scheduling. Self-funded employer plans follow federal rules and can differ.",
  },
  {
    question: "How much does an autism evaluation cost with insurance?",
    answer:
      "With in-network coverage, families often pay between $0 and a few hundred dollars, depending on where they stand against their deductible. If your deductible is unmet, you could owe considerably more even for a covered evaluation. Ask your plan for an estimate against the specific testing codes the provider intends to bill.",
  },
  {
    question: "How much does an autism assessment cost without insurance?",
    answer:
      "Private-pay evaluations in the US typically range from $1,000 to $5,000, with comprehensive evaluations most often in the $2,000–$3,000 range and neuropsychologist-led batteries at the higher end. Strides' complete diagnostic assessments start at $795 in Vancouver, WA.",
  },
  {
    question: "Why are autism evaluations so expensive?",
    answer:
      "Because they consume many hours of specialist time. A thorough evaluation involves structured interviews, direct standardized testing, questionnaires across settings, scoring, integration against DSM-5 criteria, report writing, and a feedback session, often 5 to 15 clinician hours in total, billed at specialist rates. Scarcity plays a role too: qualified evaluators are in short supply nationwide.",
  },
  {
    question: "Are there free autism evaluations?",
    answer:
      "Yes, with trade-offs. School districts must evaluate children at no cost under IDEA, and early intervention programs (ESIT in Washington, EI/ECSE in Oregon) evaluate children under 3 for free. These determine eligibility for school or program services rather than providing a medical diagnosis, which is what insurers require to authorize treatment like ABA. University training clinics sometimes offer reduced-fee diagnostic evaluations.",
  },
  {
    question: "How long does an autism assessment take?",
    answer:
      "The evaluation itself usually spans one to three appointments totaling a few hours, plus caregiver questionnaires completed at home. The real variable is the wait to get in and the wait for the written report. At many regional centers the full process takes months to over a year; at Strides, families receive results in as little as two weeks.",
  },
  {
    question: "What age can a child be evaluated for autism?",
    answer:
      "Reliable diagnosis is possible by around 18–24 months, and research shows earlier evaluation leads to earlier support. Strides' diagnostic program evaluates children up to age 8, combining EarliPoint eye-tracking with clinical assessment by the MD/PsyD/BCBA team. If your child is older, call (360) 622-2253 and we'll point you toward evaluators who can help.",
  },
];

export default function AutismEvaluationCostPage() {
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
        eyebrow="Costs & Insurance Guide"
        title="How Much Does an Autism Assessment Cost?"
        updated={UPDATED_LABEL}
        reviewer="Elsie Herring, M.S., BCBA, LBA"
      />

      <Section tone="cream">
        <ArticleBody>
          <p>
            If you’re asking how much an autism assessment costs, you’ve
            probably already spent weeks watching your child, comparing notes
            with your pediatrician, and bracing for a number. Here it is, as
            plainly as we can give it.
          </p>
          <ArticleAnswer>
            <p>
              A private-pay autism assessment in the United States typically
              costs between $1,000 and $5,000, with comprehensive evaluations
              most often landing in the $2,000–$3,000 range. With insurance,
              families usually pay much less out of pocket, often just a copay
              or coinsurance after meeting the deductible, but waitlists at
              insurance-based diagnostic centers commonly stretch 6 to 18
              months. At Strides Therapeutic Services in Vancouver, WA, a
              complete{" "}
              <Link href="/services/autism-diagnostic-assessments">
                autism diagnostic assessment
              </Link>{" "}
              starting at $795, with results in as little as two weeks.
            </p>
          </ArticleAnswer>
          <p>
            That’s the summary. The rest of this guide breaks down where those
            numbers come from, why two families in the same city can pay wildly
            different amounts for the same diagnosis, what an evaluation
            actually includes, and how to decide whether insurance, private
            pay, or a free option makes the most sense for your family.
          </p>
          <Image
            src="/images/articles/cost-hero.png"
            alt="Illustration of a parent at a kitchen table reviewing paperwork with a calculator and a cup of tea"
            width={1600}
            height={1600}
            className="rounded-card w-full h-auto"
          />

          <h2>Typical autism evaluation costs, at a glance</h2>
          <p>
            Costs vary by region, provider type, and how thorough the
            evaluation is. As a general picture:
          </p>
          <div className="article-table">
            <table>
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Typical out-of-pocket cost</th>
                  <th>Typical wait</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Insurance-based hospital or developmental clinic</td>
                  <td>Copay/coinsurance, often $0–$500 after deductible</td>
                  <td>6–18 months is common</td>
                </tr>
                <tr>
                  <td>Private-pay psychologist or neuropsychologist</td>
                  <td>$2,000–$5,000+</td>
                  <td>Weeks to a few months</td>
                </tr>
                <tr>
                  <td>Private-pay diagnostic clinic (like Strides)</td>
                  <td>Starting at $795</td>
                  <td>As little as 2 weeks</td>
                </tr>
                <tr>
                  <td>School district evaluation</td>
                  <td>Free</td>
                  <td>
                    Varies; determines school eligibility, not a medical
                    diagnosis
                  </td>
                </tr>
                <tr>
                  <td>University training clinic</td>
                  <td>Free to reduced fee</td>
                  <td>Often long waits, limited slots</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Two things stand out in that table. First, the cheapest routes tend
            to have the longest waits. Second, “free” options like school
            evaluations serve a different purpose than a medical diagnosis,
            which matters a lot if your goal is insurance-funded therapy. More
            on both below.
          </p>

          <h2>Why autism evaluation prices vary so much</h2>
          <p>
            A $1,200 evaluation and a $5,000 evaluation can both end in the
            same diagnosis. The spread comes from a handful of factors.
          </p>
          <p>
            <strong>Who’s doing the evaluating.</strong> A diagnostic
            evaluation is clinician-intensive work. Developmental
            pediatricians, psychologists, and psychiatrists bill at specialist
            rates, and a thorough evaluation can consume 5 to 15 hours of
            professional time across testing, observation, record review,
            scoring, and report writing. Neuropsychologists who bundle autism
            testing with broader cognitive batteries tend to sit at the top of
            the price range.
          </p>
          <p>
            <strong>What’s included.</strong> Some providers quote a lean price
            for the diagnostic interview alone, then bill separately for
            standardized testing, school observations, feedback sessions, or
            the written report. Others quote one number that covers everything.
            When you compare prices, ask what the figure actually buys. A
            written diagnostic report is not optional; it’s the document
            insurers, schools, and state disability programs will ask for.
          </p>
          <p>
            <strong>Facility overhead.</strong> Hospital-based developmental
            centers carry hospital-sized overhead, and their billed charges
            reflect it, even when insurance absorbs most of the cost.
            Independent clinics generally price lower.
          </p>
          <p>
            <strong>Waitlist economics.</strong> This one is less obvious.
            Demand for diagnostic evaluations far exceeds the supply of
            qualified evaluators in most of the country, including the Portland
            metro and Southwest Washington. Insurance-based centers manage that
            gap with waitlists. Private-pay providers manage it with price.
            That’s why the fastest evaluations are rarely the ones your
            insurance network hands you by default, and it’s why many families
            end up paying privately: not because they want to, but because a
            child who waits 14 months for a diagnosis also waits 14 months for
            the therapy that follows it.
          </p>
          <p>
            <strong>Your region.</strong> Specialist rates in metro areas of
            the West Coast and Northeast run higher than national averages.
            Families in Clark County sometimes cross the river assuming
            Portland will be cheaper. It usually isn’t.
          </p>

          <h2>What an autism diagnostic assessment includes</h2>
          <p>
            Knowing what you’re paying for makes the price ranges easier to
            judge. A quality evaluation generally covers:
          </p>
          <ul>
            <li>
              <strong>Developmental and medical history.</strong> A structured
              interview about pregnancy, milestones, medical background, and
              the behaviors that prompted the referral. Expect to fill out
              forms beforehand and talk through them in detail.
            </li>
            <li>
              <strong>Direct observation and standardized measures.</strong>{" "}
              The clinician interacts with your child using structured
              activities designed to elicit social communication, play, and
              flexibility, and scores what they see against validated criteria.
            </li>
            <li>
              <strong>Caregiver and teacher questionnaires.</strong> Rating
              scales that capture how your child behaves across settings, not
              just in a clinic room on one particular morning.
            </li>
            <li>
              <strong>Clinical evaluation against DSM-5 criteria.</strong> A
              qualified clinician integrates everything above into a diagnostic
              decision.
            </li>
            <li>
              <strong>A written report and feedback session.</strong> The
              report documents findings, states the diagnosis (or rules it
              out), and lays out recommendations. The feedback session is where
              you get to ask everything you’ve been holding.
            </li>
          </ul>
          <p>
            At Strides, evaluations for children up to age 8 also include{" "}
            <strong>EarliPoint™</strong>, an FDA-authorized eye-tracking
            evaluation from EarliTec Diagnostics that measures how a child
            visually attends to social information. It adds an objective,
            biology-based data point alongside the clinical evaluation, and
            Strides is among the first providers in the region to use it.
            Those early years are exactly where a fast answer matters most:
            intervention hours, school supports, and state funding programs
            all hinge on having a diagnosis in hand while the developmental
            window is still open.
          </p>
          <Image
            src="/images/articles/cost-inline.png"
            alt="Illustration of a balance scale weighing a clock against a stack of coins, representing waitlist time versus evaluation cost"
            width={1600}
            height={1600}
            className="rounded-card w-full h-auto"
          />

          <h2 id="does-insurance-cover-autism-testing">
            Does insurance cover autism testing?
          </h2>
          <p>
            Usually, yes, in some form. Every state, including Washington and
            Oregon, requires state-regulated health plans to cover medically
            necessary autism-related care, and diagnostic evaluations typically
            fall under that umbrella. But “covered” and “cheap and fast” are
            different things. What you’ll actually pay and how long you’ll wait
            depend on:
          </p>
          <ul>
            <li>
              <strong>Your deductible and coinsurance.</strong> If you haven’t
              met your deductible, a covered evaluation can still cost you four
              figures out of pocket.
            </li>
            <li>
              <strong>Whether the evaluator is in-network.</strong> In-network
              diagnostic slots are the scarcest resource in this whole system.
              That scarcity is the waitlist.
            </li>
            <li>
              <strong>Referral and pre-authorization rules.</strong> Many plans
              want a pediatrician referral first, and some require prior
              authorization for testing codes.
            </li>
            <li>
              <strong>Plan type.</strong> Self-funded employer plans follow
              federal rather than state rules, so their autism benefits can
              differ from what state mandates require.
            </li>
          </ul>
          <p>
            The only reliable move is to call the number on your insurance card
            and ask three questions: Is a diagnostic evaluation for autism
            covered? Which providers near me are in-network for it? What will I
            owe after deductible and coinsurance?
          </p>
          <p>
            Strides is in-network with PacificSource, BlueCross BlueShield,
            Aetna, Cigna, UnitedHealthcare, Kaiser Permanente, and TRICARE, and
            works with Oregon DHS Developmental Disabilities Services and
            Washington DSHS DDA. If your family uses Apple Health or OHP,
            coverage rules for those programs work differently, and it’s worth
            reading our breakdown of{" "}
            <Link href="/insurance/does-medicaid-cover-aba-therapy">
              whether Medicaid covers ABA therapy
            </Link>
            , then calling us at{" "}
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> to verify current
            plan participation before you book anything.
          </p>
        </ArticleBody>
      </Section>

      <ArticleCtaBand
        title="Ready to stop waiting?"
        body="Strides offers complete autism diagnostic assessments starting at $795, with results in as little as two weeks."
      />

      <Section tone="cream">
        <ArticleBody>
          <h2>The cost nobody puts on the invoice: time</h2>
          <p>
            A $795 evaluation next month can be worth more than a $200 copay
            evaluation in a year and a half, because the diagnosis is not the
            finish line. It’s what makes everything after it possible:
            insurance-funded therapy, school supports, state DDA/DDS services.
          </p>
          <p>
            Research on early intervention consistently points the same
            direction: the earlier support starts, the better children tend to
            do. A child who is 2½ when you first call and 4 when the waitlist
            finally clears has spent a large share of a critical developmental
            window in line. For families pursuing{" "}
            <Link href="/services/aba-therapy">ABA therapy</Link>, the math is
            even more concrete, since most insurers won’t authorize ABA at all
            without a formal diagnosis in hand. Every month of diagnostic delay
            is a month of therapy delayed too.
          </p>
          <p>
            This is the honest case for private-pay evaluation, and it’s why
            Strides built its assessment program the way it did. (For what
            happens after diagnosis, see our guides to{" "}
            <Link href="/blog/aba-therapy-for-toddlers">
              ABA therapy for toddlers
            </Link>{" "}
            and{" "}
            <Link href="/blog/does-insurance-cover-aba-therapy">
              how insurance covers ABA
            </Link>
            .)
          </p>

          <h2>How Strides prices an autism evaluation</h2>
          <p>
            Starting at <strong>$795</strong> — the standard assessment is one
            number with no add-ons, covering the full diagnostic evaluation,
            written report, and feedback session; more comprehensive
            evaluations are quoted up front at consultation. Results arrive in
            as little as two weeks
            instead of the months-long waits common at regional centers. The
            evaluation is run by an integrated team of MDs, PsyD-level
            clinicians, and Board Certified Behavior Analysts, and for children
            up to age 8 it includes the EarliPoint eye-tracking evaluation
            described above.
          </p>
          <p>Two details families tell us matter most:</p>
          <ol>
            <li>
              <strong>The report is built to be used.</strong> You leave with a
              diagnostic report plus concrete recommendations and treatment
              guidance, written to hold up with insurers, schools, and state
              programs.
            </li>
            <li>
              <strong>The relationship doesn’t end at diagnosis.</strong>{" "}
              Children who continue into ABA services at Strides receive an
              EarliPoint reassessment every six months at no extra charge, so
              progress is measured with the same objective tool that informed
              the diagnosis.
            </li>
          </ol>
          <p>
            Strides serves families across Vancouver, Camas, and Clark County,
            WA, and the Portland metro, with services in clinic, home, school,
            and community settings.
          </p>

          <h2>Free and lower-cost evaluation options</h2>
          <p>
            Private pay isn’t the right fit for every family, and you should
            know the alternatives.
          </p>
          <p>
            <strong>School district evaluations.</strong> Under federal
            special-education law (IDEA), public school districts must evaluate
            children suspected of a disability at no cost to the family. This
            is genuinely valuable, and worth requesting in writing. The catch:
            a school evaluation determines <em>educational eligibility</em>,
            not a medical diagnosis. Insurers generally won’t authorize ABA or
            other medical services based on a school report alone. Many
            families end up needing both.
          </p>
          <p>
            <strong>Early intervention programs.</strong> For children under 3,
            Washington’s ESIT program and Oregon’s EI/ECSE programs offer free
            developmental evaluations and services. Like school evaluations,
            these establish program eligibility rather than a medical
            diagnosis, but they’re a strong first step while you arrange
            diagnostic testing.
          </p>
          <p>
            <strong>University training clinics.</strong> Programs that train
            psychologists sometimes offer reduced-fee evaluations supervised by
            licensed faculty. Quality is typically good; availability is the
            problem. Slots are limited and waits can be long.
          </p>
          <p>
            <strong>Medicaid.</strong> Apple Health in Washington and OHP in
            Oregon generally cover medically necessary diagnostic evaluations
            under state and federal rules, though finding an in-network
            evaluator with a workable waitlist is often the hard part. Our{" "}
            <Link href="/insurance/does-medicaid-cover-aba-therapy">
              Medicaid and ABA coverage guide
            </Link>{" "}
            walks through how those programs handle autism services, and we
            always recommend calling us to verify current plan participation
            rather than assuming.
          </p>
        </ArticleBody>
      </Section>

      <FaqSection faqs={FAQS} title="Frequently Asked Questions" />

      <ArticleEndCta
        title="Get a clear answer in weeks, not months"
        body={
          <p>
            You don’t need to spend another season wondering. A Strides autism
            diagnostic assessment starts at $795, delivered by an integrated
            MD, PsyD, and BCBA team, with results in as little as two weeks,
            and a plan for what comes next. Strides Therapeutic Services,{" "}
            {CONTACT.address}, {CONTACT.city}. Serving Vancouver, Camas, Clark
            County, and the Portland metro.
          </p>
        }
      />
    </>
  );
}
