import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/site";
import { articleSchema, breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { Section } from "@/components/ui/Section";
import {
  ArticleAnswer,
  ArticleBody,
  ArticleCtaBand,
  ArticleEndCta,
  ArticleGrid,
  ArticleHero,
  FaqSection,
  faqPlainText,
  type ArticleFaq,
} from "@/components/article/Article";

const PATH = "/insurance/does-apple-health-cover-aba-therapy";
const TITLE = "Does Apple Health Cover ABA Therapy? WA Guide (2026)";
const DESCRIPTION =
  "Does Apple Health cover ABA therapy? Yes, for enrolled kids under 21. What WA Medicaid requires, how to verify, and a fast assessment starting at $795.";
const PUBLISHED = "2026-07-20";
const UPDATED_LABEL = "July 20, 2026";

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
    question: "Does Strides accept Apple Health?",
    answer:
      "Strides' Apple Health participation is plan-specific and changes over time. Apple Health is delivered through several managed care plans, and a clinic's status can differ from plan to plan and from year to year, so a simple yes or no printed on a website would go stale fast. Call (360) 622-2253 and we'll tell you exactly where things stand with your specific plan today, plus which other funding routes (like DDA or private pay) could work for your family.",
  },
  {
    question: "Does Apple Health cover autism testing, or just ABA therapy?",
    answer:
      "Under EPSDT, medically necessary diagnostic services for enrolled children under 21 are covered, and that generally includes autism diagnostic evaluations. Washington adds its own rules about which providers can perform the evaluation that qualifies a child for the ABA benefit, so confirm the current requirements with the Health Care Authority or your managed care plan. If the covered pathway means months of waiting, Strides' private-pay assessment, starting at $795, is typically completed in as little as two weeks for children up to age 8.",
  },
  {
    question: "What is a Center of Excellence, and does my child need one?",
    answer:
      "A Center of Excellence (COE) is a provider or clinic the Washington State Health Care Authority recognizes as qualified to evaluate autism and order ABA therapy. Washington has historically required that the evaluation and order behind an Apple Health ABA authorization come from a COE. Requirements evolve, so treat the HCA and your managed care plan as the authority on the current COE list and process before you join any waitlist.",
  },
  {
    question: "How long does Apple Health prior authorization for ABA take?",
    answer:
      "There's no single number. After the qualifying evaluation and order, a BCBA's assessment and treatment plan go to your managed care plan for medical-necessity review, and timelines vary by plan and by how complete the paperwork is. Incomplete documentation is the most common source of delay, so a thorough diagnostic report and treatment plan submitted the first time is the best way to keep things moving. Your plan can tell you its current review timeline.",
  },
  {
    question: "What if no ABA provider in my Apple Health plan has openings?",
    answer:
      "Start by asking your managed care plan for its full in-network ABA provider list and joining more than one waitlist. Then ask the plan whether it has a process for network-adequacy exceptions when no in-network provider can serve your child within a reasonable time. In parallel, check Washington DDA eligibility, since DDA funds behavior supports through a separate door, and consider a private-pay diagnostic assessment so the diagnosis isn't what's holding everything up. Call Strides at (360) 622-2253 and we'll help you sort the options honestly.",
  },
  {
    question: "Can my child have Apple Health and DDA at the same time?",
    answer:
      "Yes, many families have both. Apple Health is health insurance: it pays for medical services like diagnostic evaluations and ABA therapy through your managed care plan. The Washington DSHS Developmental Disabilities Administration (DDA) is a separate program that funds supports like behavior consultation, positive behavior support plans, and respite through an individualized plan. Separate applications, separate provider networks, different services. Strides is a confirmed provider for WA DDA, so that path is open with us today.",
    body: (
      <p>
        Yes, many families have both. Apple Health is health insurance: it pays
        for medical services like diagnostic evaluations and ABA therapy
        through your managed care plan. The Washington DSHS Developmental
        Disabilities Administration (DDA) is a separate program that funds
        supports like behavior consultation, positive behavior support plans,
        and respite through an individualized plan. Separate applications,
        separate provider networks, different services. Strides is a confirmed
        provider for <Link href="/services/wa-dda">WA DDA</Link>, so that path
        is open with us today.
      </p>
    ),
  },
];

const TOC_SECTIONS = [
  { id: "what-apple-health-is", label: "What Apple Health Is (and Who Actually Runs It)" },
  { id: "how-apple-health-covers-aba-therapy", label: "How Apple Health Covers ABA Therapy" },
  { id: "the-center-of-excellence-evaluation-requirement", label: "The Center of Excellence Evaluation Requirement" },
  { id: "what-aba-therapy-looks-like-once-its-approved", label: "What ABA Therapy Looks Like Once It’s Approved" },
  { id: "how-to-verify-your-childs-apple-health-aba-coverage", label: "How to Verify Your Child’s Apple Health ABA Coverage" },
  { id: "the-dda-alternative-funding-path", label: "The DDA Alternative: Funding That Doesn’t Run Through Your Health Plan" },
  { id: "stuck-on-a-waitlist-the-795-fast-track-assessment", label: "Stuck on a Waitlist? The $795 Fast-Track Assessment" },
];

export default function AppleHealthAbaCoveragePage() {
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
              { name: "Insurance & Funding", path: "/insurance" },
              { name: "Apple Health & ABA", path: PATH },
            ])
          ),
        }}
      />

      <ArticleHero
        eyebrow="Insurance & Funding Guide"
        title="Does Apple Health Cover ABA Therapy? A Washington Medicaid Guide for Families"
        updated={UPDATED_LABEL}
        crumbs={[
          { name: "Home", path: "/" },
              { name: "Insurance & Funding", path: "/insurance" },
              { name: "Apple Health & ABA", path: PATH },
        ]}
        reviewer="Elsie Herring, M.S., BCBA, LBA"
      />

      <ArticleGrid sections={TOC_SECTIONS}>
        <ArticleBody>
          <ArticleAnswer>
            <p>
              Yes. Apple Health, Washington&rsquo;s Medicaid program, covers
              ABA therapy for enrolled children and youth under 21 who have an
              autism diagnosis, when the therapy is medically necessary. That
              coverage is backed by federal law: the EPSDT benefit (Early and
              Periodic Screening, Diagnostic and Treatment) requires state
              Medicaid programs to cover medically necessary treatment for
              children. Getting from &ldquo;covered on paper&rdquo; to a child
              in therapy takes three steps in Washington: a qualifying autism
              evaluation, an order for ABA, and prior authorization through
              your Apple Health managed care plan.
            </p>
          </ArticleAnswer>
          <p>
            So the short answer to &ldquo;does Apple Health cover ABA
            therapy&rdquo; is yes for eligible children. The longer answer is
            about process, because in practice the process is where families in
            Vancouver and across Clark County get stuck: which evaluation
            counts, which plan you&rsquo;re in, which clinics participate, and
            how long each queue takes.
          </p>
          <p>
            Two things to know about Strides up front.{" "}
            <strong>
              Our Apple Health participation is plan-specific and changes over
              time, so call us at <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>{" "}
              to verify current participation
            </strong>{" "}
            with your specific managed care plan before assuming coverage
            either way. And if the diagnostic waitlist is your bottleneck, we
            offer a{" "}
            <strong>
              private-pay diagnostic assessment starting at $795, completed in
              as little as two weeks
            </strong>
            , for children up to age 8.
          </p>
          <p>Here&rsquo;s how the Washington system actually works.</p>
          <Image
            src="/images/articles/applehealth-hero.png"
            alt="Illustration of a parent holding a child under a leafy umbrella among evergreen trees, representing Apple Health coverage"
            width={1600}
            height={1600}
            className="rounded-card w-full h-auto"
          />

          <h2 id="what-apple-health-is">
            What Apple Health Is (and Who Actually Runs It)
          </h2>
          <p>
            Apple Health is the name Washington uses for its Medicaid program.
            It&rsquo;s administered by the{" "}
            <strong>Washington State Health Care Authority (HCA)</strong>, and
            it covers a large share of children in the state, including many
            families in Vancouver, Camas, and the rest of Clark County.
          </p>
          <p>
            Most children on Apple Health don&rsquo;t get their care directly
            from the state. They&rsquo;re enrolled in a{" "}
            <strong>managed care plan</strong>: a private insurance
            organization the state contracts with to run day-to-day coverage.
            The plan name is printed on your child&rsquo;s services card, and
            it matters more than most families realize, because the managed
            care plan controls the provider network, handles prior
            authorization, and answers coverage questions for your child
            specifically.
          </p>
          <p>
            That&rsquo;s why two Apple Health families can have genuinely
            different experiences getting ABA covered. The benefit is the
            same; the network and the process run through different companies.
            When you call anyone about coverage, including us, have the plan
            name from the card in front of you.
          </p>
          <p>
            Eligibility itself is income-based, with children&rsquo;s coverage
            reaching well above the thresholds many parents assume, and
            coverage renews on a cycle rather than lasting indefinitely. If
            your child&rsquo;s enrollment has lapsed or a renewal notice is
            sitting in a drawer, sort that out first. Every step below assumes
            active coverage, and the HCA is the authority on current
            eligibility rules and renewal timelines.
          </p>

          <h2 id="how-apple-health-covers-aba-therapy">
            How Apple Health Covers ABA Therapy
          </h2>
          <p>
            The legal foundation is federal.{" "}
            <strong>EPSDT</strong> requires every state Medicaid program to
            cover any medically necessary service for enrolled children and
            young adults under 21, even services the state doesn&rsquo;t cover
            for adults. In 2014, the federal Centers for Medicare &amp;
            Medicaid Services clarified that this obligation includes autism
            treatment services, and every state has since built an ABA benefit
            for children. Washington&rsquo;s version runs through Apple Health.
          </p>
          <p>In practice, coverage rests on two findings:</p>
          <ul>
            <li>
              <strong>A formal autism diagnosis.</strong> A screening
              questionnaire from a pediatrician isn&rsquo;t enough on its own.
              Washington ties the ABA benefit to a diagnostic evaluation from a
              qualified provider, and the state has specific rules about who
              can perform it (more on that below).
            </li>
            <li>
              <strong>Medical necessity.</strong> A clinician must document
              that ABA is medically necessary for your child. A Board
              Certified Behavior Analyst (BCBA) then completes a behavior
              assessment and writes a treatment plan with goals and
              recommended weekly hours, and that plan goes to your managed
              care plan for prior authorization before services start.
            </li>
          </ul>
          <p>
            There&rsquo;s no fixed menu of approved hours. Recommendations
            come from the BCBA&rsquo;s assessment of your child&rsquo;s needs,
            and the authorization is reviewed periodically, with continued
            approval tied to documented progress. Your managed care plan can
            tell you its current review cycle.
          </p>
          <p>
            For the wider picture of how Medicaid ABA coverage works across
            both Washington and Oregon, see our guide to{" "}
            <Link href="/insurance/does-medicaid-cover-aba-therapy">
              Medicaid coverage for ABA therapy
            </Link>
            .
          </p>

          <h2 id="the-center-of-excellence-evaluation-requirement">
            The Center of Excellence Evaluation Requirement
          </h2>
          <p>
            Washington adds a step that surprises many families. The state has
            historically required that the autism evaluation and the order for
            ABA behind an Apple Health authorization come from a designated{" "}
            <strong>Center of Excellence (COE)</strong>: a provider or clinic
            the HCA recognizes as qualified to diagnose autism and prescribe
            ABA therapy.
          </p>
          <p>
            Practically, that means an Apple Health family usually can&rsquo;t
            take just any diagnosis letter and convert it into an ABA
            authorization. The evaluation generally has to come from a
            provider that qualifies under the state&rsquo;s current rules, and
            COE appointment availability becomes its own queue on top of
            everything else.
          </p>
          <p>
            One honest caution: <strong>requirements evolve</strong>. Provider
            lists change, and the state periodically updates how the ABA
            benefit works. Treat the HCA and your managed care plan as the
            authority on the current COE list, the current evaluation rules,
            and the current authorization process, not a blog post, including
            this one. A ten-minute phone call to your plan will get you the
            up-to-date version.
          </p>
          <p>
            Two practical moves while you&rsquo;re at it. Ask your plan for
            the current list of qualifying evaluators and get on more than one
            waitlist at once; there&rsquo;s no rule that says you can only
            wait in one line. And ask each clinic for a realistic appointment
            estimate in writing or over the phone with a date attached, so
            you&rsquo;re comparing actual timelines instead of guesses.
          </p>

          <h2 id="what-aba-therapy-looks-like-once-its-approved">
            What ABA Therapy Looks Like Once It&rsquo;s Approved
          </h2>
          <p>
            It helps to know what you&rsquo;re working toward. ABA therapy is
            delivered under the supervision of a BCBA, who designs and
            oversees your child&rsquo;s treatment plan, with day-to-day
            sessions typically run by trained behavior technicians. Sessions
            happen where your child&rsquo;s goals live: in a clinic, at home,
            at school, or out in the community, and good programs involve
            parents heavily, because the point is progress that holds up in
            real life, not just in the therapy room.
          </p>
          <p>
            The goals themselves come from the assessment: communication,
            daily living skills, social skills, reducing behaviors that get in
            the way of learning and family life. As Ella Avalon, M.S., BCBA,
            LBA, one of our ABA clinical supervisors, puts it: &ldquo;The most
            common thing I hear from parents is, &lsquo;I didn&rsquo;t
            realize my child could do that.&rsquo; One of the greatest
            privileges of being a BCBA is helping families discover
            what&rsquo;s possible when therapy is individualized, meaningful,
            and built around each person&rsquo;s strengths.&rdquo;
          </p>
          <p>
            Under Apple Health, expect the authorization to be revisited on a
            recurring cycle, with continued hours tied to documented progress
            toward the plan&rsquo;s goals. That&rsquo;s normal, not a red
            flag, and a provider who keeps clean data makes those renewals
            uneventful.
          </p>
        </ArticleBody>

      <ArticleCtaBand
        title="Not sure where to start with Apple Health?"
        body="Call Strides at (360) 622-2253 (Mon–Fri, 8:30 AM–4:30 PM) or request an intake online. We'll walk through your plan, your options, and the fastest realistic path to services, including routes we don't bill directly."
      />

        <ArticleBody>
          <h2 id="how-to-verify-your-childs-apple-health-aba-coverage">
            How to Verify Your Child&rsquo;s Apple Health ABA Coverage
          </h2>
          <p>
            You can get real answers in two phone calls. Here&rsquo;s the
            script.
          </p>
          <ol>
            <li>
              <strong>Find the plan name.</strong> Pull out your child&rsquo;s
              Apple Health services card and note the managed care plan listed
              on it. That&rsquo;s who you&rsquo;re calling first.
            </li>
            <li>
              <strong>Call the member services number on the card</strong> and
              ask, word for word: &ldquo;Does my child&rsquo;s plan cover ABA
              therapy for autism? What evaluation do you require before ABA can
              be authorized, and does it need to come from a Center of
              Excellence? Which ABA providers are in network and accepting new
              clients? What does prior authorization require, and how long
              does it usually take?&rdquo;
            </li>
            <li>
              <strong>Write down names and dates.</strong> Note who you spoke
              with and what they said. If a dispute ever comes up over an
              authorization, that record is worth having.
            </li>
            <li>
              <strong>Ask the HCA if the plan can&rsquo;t answer.</strong> For
              questions about the evaluation requirement itself, the Health
              Care Authority is the source of truth for how the Apple Health
              ABA benefit currently works.
            </li>
            <li>
              <strong>
                Call Strides at <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
              </strong>{" "}
              Our Apple Health participation is plan-specific and changes over
              time, so tell us which managed care plan your child has and
              we&rsquo;ll verify our current participation, then lay out every
              route that&rsquo;s realistically open to you.
            </li>
          </ol>
          <p>
            That last point matters for any clinic, not just ours: plan
            networks shift, so always confirm participation directly with the
            provider and the plan in the same week you commit to a waitlist.
          </p>

          <h2 id="the-dda-alternative-funding-path">
            The DDA Alternative: Funding That Doesn&rsquo;t Run Through Your
            Health Plan
          </h2>
          <p>
            Apple Health isn&rsquo;t Washington&rsquo;s only public funding
            stream for autism supports. The{" "}
            <strong>
              DSHS Developmental Disabilities Administration (DDA)
            </strong>{" "}
            runs a separate system for children and adults with developmental
            disabilities, funding supports like behavior consultation,
            positive behavior support plans, respite, and community-based
            services through an individualized plan.
          </p>
          <p>
            DDA eligibility is its own application, separate from your health
            plan, and the services are different from insurance-billed ABA
            therapy. Plenty of families qualify for both and use them for
            different things. If your child is already a DDA client, or you
            suspect they&rsquo;d qualify, it&rsquo;s worth pursuing in
            parallel rather than waiting to see how the insurance route plays
            out.
          </p>
          <p>
            <strong>
              Strides is a confirmed provider for Washington DDA.
            </strong>{" "}
            Unlike managed-care participation, this isn&rsquo;t a
            call-to-check situation: we serve DDA families across Vancouver,
            Camas, and Clark County today. Details are on our{" "}
            <Link href="/services/wa-dda">Washington DDA services page</Link>.
          </p>
          <Image
            src="/images/articles/applehealth-inline.png"
            alt="Illustration of an apple beside a medical clipboard and coins, representing Washington Medicaid coverage and costs"
            width={1600}
            height={1600}
            className="rounded-card w-full h-auto"
          />

          <h2 id="stuck-on-a-waitlist-the-795-fast-track-assessment">
            Stuck on a Waitlist? The $795 Fast-Track Assessment
          </h2>
          <p>
            Every Apple Health step above waits on the same gate: a qualifying
            diagnosis. And diagnosis is where the system is slowest.
            Hospital-based autism evaluations in the Portland-Vancouver area
            commonly book out many months, and the COE requirement can add its
            own queue for Apple Health families on top.
          </p>
          <p>
            For families who can&rsquo;t afford to lose that time, Strides
            offers a private-pay{" "}
            <Link href="/services/autism-diagnostic-assessments">
              autism diagnostic assessment
            </Link>{" "}
            for children up to age 8:
          </p>
          <ul>
            <li>
              <strong>Starting at $795</strong>, covering the evaluation, the
              written report, and a feedback session.
            </li>
            <li>
              <strong>Completed in as little as two weeks</strong>, versus
              months on typical waitlists.
            </li>
            <li>
              <strong>EarliPoint&trade; eye-tracking technology</strong>{" "}
              (FDA-authorized for children up to age 8) providing objective
              social-communication data alongside traditional clinical
              evaluation. Strides is among the first providers in the region
              using it.
            </li>
            <li>
              An integrated team: a developmental pediatrician (MD),
              PsyD-level clinicians, and BCBAs.
            </li>
            <li>
              Support after the report: concrete recommendations, treatment
              guidance, and a care team, not just a document.
            </li>
          </ul>
          <p>
            Be clear-eyed about what this does and doesn&rsquo;t do. A
            private-pay evaluation gives you answers fast, and it lets
            intervention planning, school conversations, and a DDA
            application start moving now. Whether Apple Health will accept an
            outside evaluation for its own ABA authorization is a question for
            the HCA and your managed care plan, so ask them directly before
            assuming it replaces the COE step. Many families run both tracks
            at once: fast-track evaluation now, covered pathway in parallel.
          </p>
          <p>
            Wondering how the price stacks up against hospital evaluations and
            insurance deductibles? See our breakdown of{" "}
            <Link href="/blog/how-much-does-an-autism-evaluation-cost">
              how much an autism evaluation costs
            </Link>{" "}
            with and without insurance.
          </p>
        </ArticleBody>
      </ArticleGrid>

      <FaqSection faqs={FAQS} title="Frequently Asked Questions" />

      <ArticleEndCta
        title="Get a Straight Answer About Your Plan"
        body={
          <p>
            Apple Health coverage is real, and so are the queues. Strides
            Therapeutic Services is locally owned by Board Certified Behavior
            Analysts and serves families across Vancouver, Camas, Clark
            County, and the Portland metro in clinic, home, school, and
            community settings. Call{" "}
            {CONTACT.phone} to verify our current participation with your
            managed care plan, or ask about the two-week assessment starting
            at $795 if a diagnosis is what&rsquo;s standing in the way.
          </p>
        }
      />
    </>
  );
}
