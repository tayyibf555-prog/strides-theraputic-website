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

const PATH = "/insurance/does-medicaid-cover-aba-therapy";
const TITLE = "Does Medicaid Cover ABA Therapy? WA & OR Guide (2026)";
const DESCRIPTION =
  "Does Medicaid cover ABA therapy? Yes, for eligible children in all 50 states. What Apple Health & OHP require, plus a $795 two-week fast-track option.";
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
    question: "Does Medicaid cover autism testing too, or just ABA therapy?",
    answer:
      "Under EPSDT, medically necessary diagnostic services for children under 21 are covered, and that generally includes autism diagnostic evaluations. Each state controls which providers can perform a covered evaluation, and appointment availability is often the real constraint. If the covered pathway means months of waiting, Strides' $795 flat-fee assessment is typically completed in as little as two weeks.",
  },
  {
    question: "Are there age limits on Medicaid ABA coverage?",
    answer:
      "The federal EPSDT guarantee covers children and young adults under 21. Past 21, coverage depends on your state's adult Medicaid benefits, which vary. Adults with developmental disabilities can often access behavior support through Washington DDA or Oregon DDS instead, and Strides serves both programs directly.",
  },
  {
    question: "How many hours of ABA will Medicaid approve?",
    answer:
      "There's no universal number. Hours are set by a BCBA's assessment and treatment plan, then approved (or adjusted) through the plan's medical-necessity review. Recommendations depend on your child's age, needs, and goals, and authorizations are re-reviewed periodically based on documented progress. Your plan or CCO can tell you its specific review cycle.",
  },
  {
    question: "What is prior authorization and how long does it take?",
    answer:
      "Prior authorization is the approval your Medicaid plan issues before ABA services start, based on the diagnosis and the proposed treatment plan. Timelines vary by plan and state, from a couple of weeks to considerably longer if documentation is incomplete. Submitting a thorough diagnostic report and treatment plan the first time is the best way to keep it moving.",
  },
  {
    question: "What if my preferred ABA provider doesn't take Medicaid?",
    answer:
      "You have three realistic options: ask your plan for an in-network provider list and join a network provider's caseload, ask whether your state or plan has any process for out-of-network exceptions when network access is inadequate, or fund services another way, such as DDA/DDS enrollment or private pay. Strides' Apple Health participation is plan-specific (call to verify), our OHP enrollment is in process, and we serve DDA and DDS families directly, plus offer the flat-fee private-pay assessment. Call (360) 622-2253 and we'll help you sort out which path fits.",
  },
  {
    question: "What's the difference between Medicaid and DDA (or DDS) funding?",
    answer:
      "Medicaid (Apple Health/OHP) is health insurance: it pays for medical services like diagnostic evaluations and ABA therapy through your health plan. DDA (Washington) and DDS (Oregon) are developmental disability programs: they fund supports like behavior consultation, positive behavior support plans, and respite through an individualized service plan. Eligibility, applications, and provider networks are separate. Many families use both. Strides is a confirmed provider for WA DDA and Oregon DDS.",
    body: (
      <p>
        Medicaid (Apple Health/OHP) is health insurance: it pays for medical
        services like diagnostic evaluations and ABA therapy through your
        health plan. DDA (Washington) and DDS (Oregon) are developmental
        disability programs: they fund supports like behavior consultation,
        positive behavior support plans, and respite through an individualized
        service plan. Eligibility, applications, and provider networks are
        separate. Many families use both. Strides is a confirmed provider for{" "}
        <Link href="/services/wa-dda">WA DDA</Link> and{" "}
        <Link href="/services/or-dds">Oregon DDS</Link>.
      </p>
    ),
  },
];

export default function MedicaidAbaCoveragePage() {
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
        eyebrow="Insurance & Funding Guide"
        title="Does Medicaid Cover ABA Therapy? What Families in Washington and Oregon Need to Know"
        updated={UPDATED_LABEL}
        reviewer="Elsie Herring, M.S., BCBA, LBA"
      />

      <Section tone="cream">
        <ArticleBody>
          <ArticleAnswer>
            <p>
              Yes. Medicaid covers ABA therapy for eligible children in all 50
              states. Under the federal EPSDT benefit (Early and Periodic
              Screening, Diagnostic and Treatment), state Medicaid programs
              must cover medically necessary treatment for enrolled children
              under 21, and every state now applies that to ABA therapy for
              children with an autism diagnosis. In Washington, the Medicaid
              program is called Apple Health; in Oregon, it’s the Oregon Health
              Plan (OHP). Both cover ABA for Medicaid-enrolled children with a
              qualifying autism diagnosis, though each state sets its own rules
              for evaluations, prior authorization, and approved hours.
            </p>
          </ArticleAnswer>
          <p>
            Two things determine whether your child’s ABA gets covered: a
            formal autism diagnosis from a qualified provider, and a finding
            that ABA is medically necessary for your child. The details vary by
            state and by plan, so confirm specifics with Apple Health (through
            the WA Health Care Authority) or OHP (through your coordinated care
            organization) directly.
          </p>
          <p>
            One important note about Strides:{" "}
            <strong>
              Apple Health and OHP plan participation changes over time
            </strong>
            , so call us at <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> to
            verify current participation with your specific plan before
            assuming coverage either way. We do directly serve families funded
            through <strong>Washington DSHS-DDA and Oregon DHS-DDS</strong>,
            and we offer a{" "}
            <strong>
              $795 flat-fee diagnostic assessment completed in as little as
              two weeks
            </strong>{" "}
            for families who can’t afford to wait.
          </p>
          <p>Here’s how the whole system works, piece by piece.</p>
          <Image
            src="/images/articles/medicaid-hero.png"
            alt="Illustration of a parent and child walking together under a large umbrella, representing insurance coverage and protection"
            width={1600}
            height={1600}
            className="rounded-card w-full h-auto"
          />

          <h2>How Medicaid Coverage for ABA Therapy Actually Works</h2>
          <p>
            Medicaid is a joint federal-state program, which is why the answer
            to “does Medicaid cover ABA therapy” starts in federal law but ends
            in state policy.
          </p>

          <h3>EPSDT: the federal rule that makes coverage mandatory</h3>
          <p>
            EPSDT is the part of federal Medicaid law that requires states to
            cover any medically necessary service for enrolled children and
            teens under 21, even services the state doesn’t cover for adults.
            In 2014, the federal Centers for Medicare &amp; Medicaid Services
            (CMS) clarified that this obligation includes autism treatment
            services. Since then, every state Medicaid program has built an ABA
            benefit for children.
          </p>
          <p>
            Practically, that means if your child is enrolled in Medicaid,
            under 21, diagnosed with autism, and a clinician documents that ABA
            is medically necessary, your state’s Medicaid program is required
            to cover it. States can’t impose a blanket refusal. What they{" "}
            <em>can</em> do is set the process: who can diagnose, what
            documentation is required, and how authorization works.
          </p>

          <h3>The diagnosis requirement</h3>
          <p>
            Medicaid ABA benefits are tied to a formal autism spectrum disorder
            diagnosis. A screening result from a pediatrician’s questionnaire
            usually isn’t enough. States typically require a diagnostic
            evaluation from a qualified provider, and some (Washington among
            them) specify which provider types or clinics can perform the
            evaluation that qualifies a child for the ABA benefit.
          </p>
          <p>
            This is where many families hit their first wall: diagnostic
            waitlists at large hospital systems in the Portland-Vancouver area
            routinely run many months. Coverage you can’t reach isn’t much
            comfort, which is why we built a{" "}
            <Link href="/services/autism-diagnostic-assessments">
              two-week diagnostic assessment pathway
            </Link>
            . More on that below.
          </p>

          <h3>Medical necessity and prior authorization</h3>
          <p>
            After diagnosis, most state Medicaid programs require{" "}
            <strong>prior authorization</strong> before ABA services begin. The
            typical sequence:
          </p>
          <ol>
            <li>
              A physician or qualified clinician orders or refers for ABA based
              on the diagnosis.
            </li>
            <li>
              A Board Certified Behavior Analyst (BCBA) conducts a behavior
              assessment and writes a treatment plan with specific goals and
              recommended weekly hours.
            </li>
            <li>
              The plan goes to the state Medicaid agency or the managed care
              plan for approval.
            </li>
            <li>
              Approvals are time-limited. Plans are re-reviewed at intervals
              (often every six months) and continued authorization depends on
              documented progress.
            </li>
          </ol>
          <p>
            The number of covered hours isn’t a fixed menu. It’s driven by the
            BCBA’s assessment of your child’s needs and what the reviewer
            agrees is medically necessary, which can range from a few focused
            hours per week to intensive full-day programming.
          </p>

          <h3>Age considerations</h3>
          <p>
            The EPSDT mandate protects children and young adults{" "}
            <strong>under 21</strong>. At 21, that federal guarantee ends. Some
            states extend ABA coverage to adults on Medicaid and some don’t, so
            adult coverage is genuinely state-by-state and plan-by-plan. If
            you’re seeking services for an adult, ask the state program
            directly, and know that developmental disability agencies (DDA in
            Washington, DDS in Oregon) fund behavior support for adults through
            a separate door. That route is covered below.
          </p>

          <h2>Washington: Apple Health and ABA Therapy</h2>
          <p>
            Apple Health is Washington’s Medicaid program, administered by the
            Washington State Health Care Authority (HCA). In general terms,
            Apple Health covers ABA therapy for enrolled children and youth
            under 21 with an autism diagnosis when it’s medically necessary.
          </p>
          <p>
            Washington adds a distinctive step: the state has historically
            required that the diagnostic evaluation and order for ABA come from
            a designated <strong>Center of Excellence (COE)</strong> —
            providers the HCA recognizes as qualified to evaluate autism and
            prescribe ABA. Requirements evolve, so treat the HCA and your Apple
            Health managed care plan as the authority on the current process,
            current provider lists, and current authorization rules.
          </p>
          <p>What Washington families should take from this:</p>
          <ul>
            <li>
              Coverage exists. Apple Health-enrolled children with an autism
              diagnosis have a legally protected path to medically necessary
              ABA.
            </li>
            <li>
              The path runs through a qualifying evaluation, a treatment order,
              and prior authorization, in that order.
            </li>
            <li>
              Which clinics can see you depends on which providers participate
              in your specific managed care plan. Confirm participation with
              the plan and the clinic before you commit to a waitlist.
            </li>
          </ul>
          <p>
            <strong>
              Apple Health participation is plan-specific and changes over
              time, so call before you assume anything either way.
            </strong>{" "}
            Strides’ confirmed insurance list includes PacificSource,
            BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Kaiser
            Permanente, and TRICARE, along with the state developmental
            disability programs below. If you’re on Apple Health, call us at{" "}
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> and we’ll tell you
            exactly where things stand for your specific managed care plan and
            what your options are.
          </p>

          <h2>Oregon: OHP and ABA Therapy</h2>
          <p>
            The Oregon Health Plan is Oregon’s Medicaid program, and most
            members receive their care through a regional{" "}
            <strong>coordinated care organization (CCO)</strong>. In general
            terms, OHP covers ABA therapy for members with an autism diagnosis
            when a qualified provider documents medical necessity, consistent
            with the EPSDT mandate for members under 21 and Oregon’s own
            coverage rules.
          </p>
          <p>
            For most Portland-metro families the practical steps look like
            this: get the diagnosis, get a referral for ABA, and work through
            your CCO’s prior authorization process before services start. Each
            CCO manages its own provider network and authorization workflow, so
            your CCO is the authority on which ABA providers you can use and
            how long approval takes.
          </p>
          <p>
            Oregon is also one of the states with a long-standing insurance
            mandate for autism treatment (dating to 2013 legislation), which
            shapes both public and commercial coverage in the state. As always,
            specifics vary. Confirm with OHP or your CCO.
          </p>
          <p>
            <strong>
              Strides is currently in process to become an OHP provider
            </strong>{" "}
            — call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> to verify
            current participation and timing before assuming coverage either
            way.
          </p>
        </ArticleBody>
      </Section>

      <ArticleCtaBand
        title="Not sure what your child’s plan covers?"
        body="Call Strides at (360) 622-2253 (Mon–Fri, 8:30 AM–4:30 PM) or request an intake online. We’ll walk through your funding situation honestly, including options we don’t bill directly."
      />

      <Section tone="cream">
        <ArticleBody>
          <h2>What “Does Insurance Cover ABA Therapy” Means Beyond Medicaid</h2>
          <p>
            Families searching for Medicaid answers often also have (or are
            weighing) commercial insurance. Short version: every state now
            requires state-regulated private health plans to cover ABA therapy
            for autism, though self-funded employer plans follow federal rather
            than state rules, and cost-sharing varies widely. Our guide to{" "}
            <Link href="/blog/does-insurance-cover-aba-therapy">
              how private insurance covers ABA therapy
            </Link>{" "}
            walks through that side in detail.
          </p>
          <p>
            Strides directly accepts{" "}
            <strong>
              PacificSource, BlueCross BlueShield, Aetna, Cigna,
              UnitedHealthcare, Kaiser Permanente, and TRICARE
            </strong>
            . If your family carries one of these plans alongside or instead of
            Medicaid, coverage for both{" "}
            <Link href="/services/autism-diagnostic-assessments">
              diagnostic assessment
            </Link>{" "}
            and <Link href="/services/aba-therapy">ABA therapy</Link> may be
            simpler than you expect. We break down the diagnostic side of this
            in our guide to{" "}
            <Link href="/blog/how-much-does-an-autism-evaluation-cost#does-insurance-cover-autism-testing">
              autism evaluation costs and insurance
            </Link>
            .
          </p>

          <h2>The DDA/DDS Route: The Medicaid-Adjacent Funding Most Families Miss</h2>
          <p>
            Here’s a distinction worth understanding, because it changes what’s
            available to your family: Medicaid’s medical benefit (Apple Health,
            OHP) is not the only public funding stream for autism services.
          </p>
          <p>
            <strong>
              Washington DSHS Developmental Disabilities Administration (DDA)
            </strong>{" "}
            and{" "}
            <strong>
              Oregon DHS Developmental Disabilities Services (DDS)
            </strong>{" "}
            run separate programs for children and adults with developmental
            disabilities, funding things like behavior consultation, positive
            behavior support plans, respite, and community-based supports.
            Eligibility runs through the developmental disability system rather
            than through your health plan, and services follow an
            individualized support plan.
          </p>
          <p>
            <strong>
              Strides is a confirmed provider for both Washington DDA and
              Oregon DDS.
            </strong>{" "}
            This is a direct, established funding path with us, not a “call to
            verify” situation. If your child (or adult family member) is a DDA
            or DDS client, or you think they may be eligible, we can serve you
            today:
          </p>
          <ul>
            <li>
              <Link href="/services/wa-dda">
                Washington DDA services at Strides
              </Link>{" "}
              — behavior support, positive behavior support plans, and related
              services for DDA clients in Vancouver, Camas, and across Clark
              County.
            </li>
            <li>
              <Link href="/services/or-dds">
                Oregon DDS services at Strides
              </Link>{" "}
              — behavior consultation and support for DDS clients in the
              Portland metro.
            </li>
          </ul>
          <p>
            Many families qualify for both a Medicaid health plan and DDA/DDS
            enrollment. They fund different things, and having both open gives
            you more options.
          </p>
          <Image
            src="/images/articles/medicaid-inline.png"
            alt="Illustration of a winding path splitting into three signposted routes, representing the different funding paths for ABA therapy"
            width={1600}
            height={1600}
            className="rounded-card w-full h-auto"
          />

          <h2>Stuck on a Waitlist? The $795 Fast-Track Assessment</h2>
          <p>
            Every funding path above shares one gate: the diagnosis. And
            diagnosis is where the system is slowest. Hospital-based autism
            evaluations in the Portland-Vancouver area commonly book out many
            months, and Medicaid pathways can add their own evaluation and
            authorization queues on top.
          </p>
          <p>
            For families who can’t wait, Strides offers a private-pay
            diagnostic assessment:
          </p>
          <ul>
            <li>
              <strong>$795 flat fee.</strong> One number, no surprise
              billing.
            </li>
            <li>
              <strong>Completed in as little as two weeks</strong>, versus
              months on typical waitlists.
            </li>
            <li>
              <strong>EarliPoint™ eye-tracking technology</strong>{" "}
              (FDA-authorized for children up to age 8) providing objective
              social-communication data alongside traditional clinical
              evaluation. Strides is among the first providers in the region
              using it.
            </li>
            <li>
              An integrated team: a developmental pediatrician (MD), PsyD-level
              clinicians, and BCBAs.
            </li>
            <li>
              Support after the report: concrete recommendations, treatment
              guidance, and a care team, not just a document.
            </li>
          </ul>
          <p>
            A private-pay diagnosis doesn’t lock you out of public funding.
            Families often use the fast-track evaluation to stop losing months,
            then pursue Apple Health, OHP, or DDA/DDS processes with a
            completed diagnostic report in hand. Whether a specific program
            accepts an outside evaluation for its own authorization purposes is
            a question for that program, so ask them directly; either way, your
            child’s intervention planning, school conversations, and DDA/DDS
            eligibility work can start moving now. Curious how the price
            compares? See{" "}
            <Link href="/blog/how-much-does-an-autism-evaluation-cost">
              how much an autism evaluation costs
            </Link>{" "}
            with and without insurance.
          </p>

          <h2>How to Verify Your Child’s ABA Coverage: 5 Steps</h2>
          <ol>
            <li>
              <strong>Confirm enrollment.</strong> Check that your child’s
              Apple Health or OHP coverage is active, and note the managed care
              plan or CCO name on the card.
            </li>
            <li>
              <strong>Call the plan, not just the state.</strong> Ask: “Does my
              child’s plan cover ABA therapy for autism, what’s required for
              prior authorization, and which providers are in network?”
            </li>
            <li>
              <strong>Ask about the evaluation requirement.</strong> In
              Washington, ask the HCA or your plan what counts as a qualifying
              autism evaluation for the ABA benefit. In Oregon, ask your CCO
              about referral and authorization steps.
            </li>
            <li>
              <strong>Ask about DDA/DDS separately.</strong> Contact Washington
              DDA or Oregon DDS to check eligibility for developmental
              disability services. This is a different application from your
              health plan.
            </li>
            <li>
              <strong>
                Call Strides at <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                .
              </strong>{" "}
              We’ll tell you plainly which funding routes we currently serve,
              verify our participation status with your plan, and lay out the
              fast-track option if waitlists are the bottleneck.
            </li>
          </ol>
        </ArticleBody>
      </Section>

      <FaqSection faqs={FAQS} title="Frequently Asked Questions" />

      <ArticleEndCta
        title="Talk to a Team That Knows Both Systems"
        body={
          <p>
            Funding rules are confusing by design; your next step doesn’t have
            to be. Strides Therapeutic Services is locally owned by Board
            Certified Behavior Analysts and serves families across Vancouver,
            Camas, Clark County, and the Portland metro in clinic, home,
            school, and community settings. If a diagnosis is what’s standing
            between your child and services, ask about the $795 two-week
            assessment.
          </p>
        }
      />
    </>
  );
}
