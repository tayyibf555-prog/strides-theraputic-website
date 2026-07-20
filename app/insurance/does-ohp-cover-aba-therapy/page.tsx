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
  ArticleHero,
  ArticleToc,
  FaqSection,
  faqPlainText,
  type ArticleFaq,
} from "@/components/article/Article";

const PATH = "/insurance/does-ohp-cover-aba-therapy";
const TITLE = "Does OHP Cover ABA Therapy? Oregon Health Plan Guide (2026)";
const DESCRIPTION =
  "Does OHP cover ABA therapy? Yes, for members with an autism diagnosis. How CCO referrals work, plus a fast-track assessment starting at $795.";
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
    question: "Does Strides accept OHP?",
    answer:
      "Strides is currently in process to become an OHP provider. Enrollment involves state and CCO steps that take time to finalize, so the honest answer today is: call (360) 622-2253 to verify current participation and timing before you make plans around it. In the meantime, we're a confirmed provider for Oregon DHS Developmental Disabilities Services (DDS), and our private-pay diagnostic assessment, starting at $795, is open to Portland-metro families regardless of insurance.",
  },
  {
    question: "Is OHP the same thing as Medicaid?",
    answer:
      "Yes. The Oregon Health Plan is Oregon's Medicaid program, run by the Oregon Health Authority. If a federal rule applies to Medicaid, like the EPSDT children's benefit, it applies to OHP. The name is different; the underlying program is the same. That's why OHP members get the same federal protection that requires coverage of medically necessary treatment for children under 21.",
  },
  {
    question: "What is a CCO, and how do I find out which one my child has?",
    answer:
      "A coordinated care organization (CCO) is the regional organization that manages care for most OHP members: it runs the provider network, handles referrals and prior authorizations, and answers coverage questions. Your child's CCO is listed on their OHP coverage letter and member ID card, and you can confirm it by calling OHP client services. Which ABA providers you can use, and how authorization works, depends on that CCO.",
  },
  {
    question: "Does OHP cover autism evaluations too?",
    answer:
      "Generally yes, medically necessary diagnostic services for children are covered under EPSDT, and an evaluation is the doorway to the ABA benefit. The practical question is scheduling: evaluation appointments through covered pathways in the Portland metro often carry long waits. Confirm the covered evaluation route with your CCO. If waiting is the problem, Strides' private-pay assessment, starting at $795, is typically completed in as little as two weeks for children up to age 8.",
  },
  {
    question: "How many hours of ABA will OHP approve?",
    answer:
      "There's no universal number. A BCBA's assessment sets recommended weekly hours based on your child's age, needs, and goals, and the CCO's medical-necessity review approves or adjusts them. Authorizations are time-limited and re-reviewed periodically against documented progress. Your CCO can tell you its current review cycle and documentation requirements.",
  },
  {
    question: "Can my child have OHP and DDS services at the same time?",
    answer:
      "Yes, many families use both. OHP is health insurance: it pays for medical services like diagnostic evaluations and ABA therapy through your CCO. Oregon DHS Developmental Disabilities Services (DDS) is a separate program that funds supports like behavior consultation, positive behavior support plans, and respite through an individualized service plan. Separate eligibility, separate applications. Strides is a confirmed DDS provider, so that path is open with us today.",
    body: (
      <p>
        Yes, many families use both. OHP is health insurance: it pays for
        medical services like diagnostic evaluations and ABA therapy through
        your CCO. Oregon DHS Developmental Disabilities Services (DDS) is a
        separate program that funds supports like behavior consultation,
        positive behavior support plans, and respite through an individualized
        service plan. Separate eligibility, separate applications. Strides is
        a confirmed <Link href="/services/or-dds">DDS provider</Link>, so that
        path is open with us today.
      </p>
    ),
  },
];

const TOC_SECTIONS = [
  { id: "what-the-oregon-health-plan-is", label: "What the Oregon Health Plan Is" },
  { id: "how-ohp-covers-aba-therapy", label: "How OHP Covers ABA Therapy: Two Layers of Law" },
  { id: "referrals-and-prior-authorization-through-your-cco", label: "Referrals and Prior Authorization Through Your CCO" },
  { id: "what-aba-therapy-looks-like-once-its-approved", label: "What ABA Therapy Looks Like Once It’s Approved" },
  { id: "strides-and-ohp-where-things-stand", label: "Strides and OHP: Where Things Stand" },
  { id: "the-dds-alternative-funding-path", label: "The DDS Alternative: Funding That Doesn’t Run Through Your CCO" },
  { id: "how-to-verify-your-childs-ohp-aba-coverage", label: "How to Verify Your Child’s OHP ABA Coverage" },
  { id: "stuck-on-a-waitlist-the-795-fast-track-assessment", label: "Stuck on a Waitlist? The $795 Fast-Track Assessment" },
];

export default function OhpAbaCoveragePage() {
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
              { name: "OHP & ABA", path: PATH },
            ])
          ),
        }}
      />

      <ArticleHero
        eyebrow="Insurance & Funding Guide"
        title="Does OHP Cover ABA Therapy? What Oregon Health Plan Families Need to Know"
        updated={UPDATED_LABEL}
        crumbs={[
          { name: "Home", path: "/" },
              { name: "Insurance & Funding", path: "/insurance" },
              { name: "OHP & ABA", path: PATH },
        ]}
        reviewer="Elsie Herring, M.S., BCBA, LBA"
      />

      <Section tone="cream">
        <ArticleBody>
          <ArticleAnswer>
            <p>
              Yes. The Oregon Health Plan (OHP), Oregon&rsquo;s Medicaid
              program, covers ABA therapy for members with an autism diagnosis
              when a qualified provider documents that it&rsquo;s medically
              necessary. Two layers of law back that up: the federal EPSDT
              benefit, which requires Medicaid programs to cover medically
              necessary treatment for enrolled children under 21, and
              Oregon&rsquo;s own 2013 autism insurance legislation, which
              shaped ABA coverage across the state. For most families, the
              path runs through their coordinated care organization (CCO):
              diagnosis, referral, prior authorization, then services.
            </p>
          </ArticleAnswer>

          <ArticleToc sections={TOC_SECTIONS} />
          <p>
            That&rsquo;s the direct answer to &ldquo;does OHP cover ABA
            therapy.&rdquo; The rest of this guide is about the part search
            results rarely explain: how the CCO system actually works, what
            the authorization flow looks like, what to do when waitlists stall
            everything, and where Strides fits for Portland-metro families.
          </p>
          <p>
            On that last point, two facts up front.{" "}
            <strong>
              Strides is currently in process to become an OHP provider
            </strong>, so call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> to
            verify current participation and timing. And for families stuck at
            the diagnosis stage, we offer a{" "}
            <strong>
              private-pay diagnostic assessment starting at $795, completed in
              as little as two weeks
            </strong>
            , for children up to age 8.
          </p>
          <Image
            src="/images/articles/ohp-hero.png"
            alt="Illustration of a family crossing an arched bridge toward a small clinic among evergreens, representing Oregon families reaching care"
            width={1600}
            height={1600}
            className="rounded-card w-full h-auto"
          />

          <h2 id="what-the-oregon-health-plan-is">
            What the Oregon Health Plan Is
          </h2>
          <p>
            OHP is Oregon&rsquo;s Medicaid program, administered by the Oregon
            Health Authority. It covers a large share of Oregon children, and
            for kids it&rsquo;s the program behind the coverage most families
            know by the OHP name.
          </p>
          <p>
            The structural detail that matters:{" "}
            <strong>
              most OHP members get their care through a regional coordinated
              care organization (CCO)
            </strong>
            , a local organization the state contracts with to manage
            physical, behavioral, and dental care for its members. Your CCO,
            named on your child&rsquo;s member ID card and coverage letter,
            runs the provider network, processes referrals and prior
            authorizations, and answers coverage questions for your child
            specifically.
          </p>
          <p>
            So while &ldquo;OHP covers ABA&rdquo; is true statewide, the
            practical questions, which providers you can use and how long
            approval takes, are answered by your CCO, not by the state
            program in the abstract. Two families in different corners of the
            Portland metro can be on OHP and still work through different
            organizations with different networks.
          </p>
          <p>
            Eligibility is income-based, with children&rsquo;s coverage
            extending well above the thresholds many parents expect, and
            coverage renews on a cycle rather than running indefinitely. If a
            renewal packet is sitting unopened or your child&rsquo;s
            enrollment has lapsed, handle that first; everything below assumes
            active coverage. The Oregon Health Authority is the source of
            truth on current eligibility rules and renewal timing.
          </p>

          <h2 id="how-ohp-covers-aba-therapy">
            How OHP Covers ABA Therapy: Two Layers of Law
          </h2>
          <p>
            The first layer is federal. Under <strong>EPSDT</strong> (Early
            and Periodic Screening, Diagnostic and Treatment), every state
            Medicaid program must cover any medically necessary service for
            enrolled children and young adults under 21. In 2014 the federal
            Centers for Medicare &amp; Medicaid Services clarified that this
            includes autism treatment services, and ABA benefits for children
            now exist in every state, Oregon included.
          </p>
          <p>
            The second layer is Oregon&rsquo;s own.{" "}
            <strong>2013 state legislation</strong> established an insurance
            mandate for autism treatment that shaped both public and
            commercial coverage in Oregon, making the state one of the earlier
            movers on ABA coverage. The combined effect: for an OHP member
            with an autism diagnosis, ABA is a covered benefit when
            it&rsquo;s medically necessary, not a discretionary add-on.
          </p>
          <p>Coverage in practice rests on two findings:</p>
          <ul>
            <li>
              <strong>A formal autism diagnosis</strong> from a qualified
              provider. A positive screening at a well-child visit starts the
              conversation; it doesn&rsquo;t finish it.
            </li>
            <li>
              <strong>Documented medical necessity</strong>: a clinician&rsquo;s
              finding that ABA is medically necessary for your child, plus a
              treatment plan from a Board Certified Behavior Analyst (BCBA)
              with goals and recommended hours.
            </li>
          </ul>
          <p>
            Approved hours aren&rsquo;t a fixed menu; they follow the
            BCBA&rsquo;s assessment and the CCO&rsquo;s medical-necessity
            review, and they&rsquo;re re-reviewed periodically against
            documented progress. For how this same framework plays out on the
            Washington side of the river, see our guide to{" "}
            <Link href="/insurance/does-medicaid-cover-aba-therapy">
              Medicaid coverage for ABA therapy
            </Link>{" "}
            in both states.
          </p>

          <h2 id="referrals-and-prior-authorization-through-your-cco">
            Referrals and Prior Authorization Through Your CCO
          </h2>
          <p>
            For most Portland-metro families, the sequence looks like this:
          </p>
          <ol>
            <li>
              <strong>Diagnosis.</strong> A qualified provider completes an
              autism diagnostic evaluation. Your CCO can tell you which
              evaluation pathways it recognizes and which evaluators are in
              network.
            </li>
            <li>
              <strong>Referral for ABA.</strong> A physician or qualified
              clinician refers your child for ABA therapy based on the
              diagnosis.
            </li>
            <li>
              <strong>Behavior assessment and treatment plan.</strong> A BCBA
              assesses your child and writes a plan with specific goals and
              recommended weekly hours.
            </li>
            <li>
              <strong>Prior authorization.</strong> The plan goes to your CCO
              for medical-necessity review before services begin.
              Authorizations are time-limited and renewed based on progress
              documentation.
            </li>
          </ol>
          <p>
            Each CCO manages its own workflow, forms, and timelines, so treat
            your CCO as the authority on the details and confirm specifics
            with it directly. Two things speed the process up more than
            anything else: a complete, well-documented diagnostic report, and
            paperwork submitted right the first time. Incomplete documentation
            is the most common reason authorizations stall.
          </p>

          <h2 id="what-aba-therapy-looks-like-once-its-approved">
            What ABA Therapy Looks Like Once It&rsquo;s Approved
          </h2>
          <p>
            Knowing the destination makes the paperwork easier to push
            through. ABA therapy runs under the supervision of a BCBA, who
            designs your child&rsquo;s treatment plan and oversees it, with
            day-to-day sessions typically delivered by trained behavior
            technicians. Services happen where the goals live: in a clinic, at
            home, at school, or in the community, and strong programs put
            real work into parent training, because progress that only shows
            up in a therapy room isn&rsquo;t the point.
          </p>
          <p>
            The goals come from the assessment: communication, daily living
            skills, social skills, and reducing behaviors that get in the way
            of learning and family life. Madelyn Mason, one of our ABA
            clinicians, describes it this way: &ldquo;The biggest
            misconception I hear is that ABA is about changing who someone
            is. Our goal is the opposite: we help individuals build
            communication, independence, and life skills while celebrating
            what makes them unique. The best therapy is the kind that makes
            everyday life easier for both the individual and their
            family.&rdquo;
          </p>
          <p>
            Expect your CCO to revisit the authorization on a recurring
            cycle, with continued hours tied to documented progress. That
            rhythm is normal. A provider who keeps clean session data and
            submits renewals early makes it invisible to you.
          </p>
        </ArticleBody>
      </Section>

      <ArticleCtaBand
        title="Trying to make sense of your CCO's process?"
        body="Call Strides at (360) 622-2253 (Mon–Fri, 8:30 AM–4:30 PM) or request an intake online. We'll walk through your funding situation honestly, including options we don't bill directly."
      />

      <Section tone="cream">
        <ArticleBody>
          <h2 id="strides-and-ohp-where-things-stand">
            Strides and OHP: Where Things Stand
          </h2>
          <p>
            We&rsquo;d rather be straight with you than vague.{" "}
            <strong>
              Strides is currently in process to become an OHP provider
            </strong>, so call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> to
            verify current participation and timing before you make plans
            around it. Provider enrollment involves state and CCO steps that
            finalize on their schedule, not ours, so a phone call will always
            beat a webpage for the current status.
          </p>
          <p>
            What&rsquo;s already true today: Strides serves Portland-metro
            families in clinic, home, school, and community settings; we&rsquo;re
            a confirmed provider for Oregon DHS Developmental Disabilities
            Services (DDS); and our diagnostic assessment program is open to
            families regardless of insurance. If your child is on OHP, call
            us anyway. We&rsquo;ll tell you exactly where our enrollment
            stands and which routes are open right now.
          </p>
          <p>
            A note for households that straddle the river: our clinic sits in
            east Vancouver, an easy reach from the Portland side, and plenty
            of the families we serve live in the Portland metro or split time
            between the two states. Funding rules follow
            the child&rsquo;s coverage, not the clinic&rsquo;s address, so if
            your child has OHP but your life runs through Clark County, or
            the reverse, say so when you call. Sorting out which state&rsquo;s
            programs apply to your situation is exactly the kind of question
            a five-minute conversation settles faster than an afternoon of
            searching.
          </p>

          <h2 id="the-dds-alternative-funding-path">
            The DDS Alternative: Funding That Doesn&rsquo;t Run Through Your
            CCO
          </h2>
          <p>
            OHP is not Oregon&rsquo;s only public funding stream for autism
            supports.{" "}
            <strong>
              Oregon DHS Developmental Disabilities Services (DDS)
            </strong>{" "}
            runs a separate system for children and adults with developmental
            disabilities, funding supports like behavior consultation,
            positive behavior support plans, respite, and community-based
            services through an individualized service plan, usually
            coordinated through your county&rsquo;s developmental disabilities
            program.
          </p>
          <p>
            DDS eligibility is its own application, separate from OHP, and
            the services are different from insurance-billed ABA therapy.
            Many families qualify for both and use them for different things,
            and applying for DDS doesn&rsquo;t interfere with your OHP
            benefits. If you think your child may qualify, start that process
            in parallel instead of waiting on the insurance track.
          </p>
          <p>
            <strong>Strides is a confirmed provider for Oregon DDS.</strong>{" "}
            This one isn&rsquo;t a call-to-check situation: we serve DDS
            families across the Portland metro today. Details are on our{" "}
            <Link href="/services/or-dds">Oregon DDS services page</Link>.
          </p>
          <Image
            src="/images/articles/ohp-inline.png"
            alt="Illustration of three doors with one open and glowing, representing funding options for ABA therapy in Oregon"
            width={1600}
            height={1600}
            className="rounded-card w-full h-auto"
          />

          <h2 id="how-to-verify-your-childs-ohp-aba-coverage">
            How to Verify Your Child&rsquo;s OHP ABA Coverage
          </h2>
          <ol>
            <li>
              <strong>Confirm enrollment and find your CCO.</strong> Check
              that your child&rsquo;s OHP coverage is active and note the CCO
              name on the member ID card or coverage letter.
            </li>
            <li>
              <strong>Call the CCO&rsquo;s member services line</strong> and
              ask: &ldquo;Does my child&rsquo;s plan cover ABA therapy for
              autism? What&rsquo;s required before services can be authorized?
              Which ABA providers are in network and accepting new clients?
              How long does prior authorization usually take?&rdquo;
            </li>
            <li>
              <strong>Ask about the evaluation pathway.</strong> If your child
              doesn&rsquo;t have a diagnosis yet, ask which diagnostic
              evaluations the CCO recognizes and how long the in-network wait
              is. That number decides your real timeline.
            </li>
            <li>
              <strong>Contact DDS separately.</strong> Ask your county
              developmental disabilities program about DDS eligibility. It&rsquo;s
              a different application from OHP, and the two can run in
              parallel.
            </li>
            <li>
              <strong>
                Call Strides at <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
              </strong>{" "}
              We&rsquo;ll give you the current status of our OHP enrollment,
              confirm the funding routes we serve today, and lay out the
              fast-track assessment if the diagnostic queue is your
              bottleneck.
            </li>
          </ol>

          <h2 id="stuck-on-a-waitlist-the-795-fast-track-assessment">
            Stuck on a Waitlist? The $795 Fast-Track Assessment
          </h2>
          <p>
            Every step above depends on one document: the diagnosis. And
            diagnosis is where Portland-metro families lose the most time,
            with hospital-based evaluations commonly booking out many months
            before authorization queues even begin.
          </p>
          <p>
            For families who can&rsquo;t wait, Strides offers a private-pay{" "}
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
            One honest caveat: whether OHP or your CCO accepts an outside
            evaluation for its own authorization purposes is the CCO&rsquo;s
            call, so ask them directly. What a fast diagnosis does regardless
            is start everything else moving: intervention planning, school
            conversations, and the DDS application can all begin with a
            completed report in hand. Families weighing this against
            commercial coverage can compare notes in our guide to{" "}
            <Link href="/blog/does-insurance-cover-aba-therapy">
              how private insurance covers ABA therapy
            </Link>
            .
          </p>
        </ArticleBody>
      </Section>

      <FaqSection faqs={FAQS} title="Frequently Asked Questions" />

      <ArticleEndCta
        title="Talk to a Team on Both Sides of the River"
        body={
          <p>
            OHP coverage is real; the process is just slow to navigate alone.
            Strides Therapeutic Services is locally owned by Board Certified
            Behavior Analysts and serves families across the Portland metro,
            Vancouver, Camas, and Clark County in clinic, home, school, and
            community settings. Call {CONTACT.phone} for the current status of
            our OHP enrollment, or ask about the two-week assessment starting
            at $795 if a diagnosis is what&rsquo;s standing in the way.
          </p>
        }
      />
    </>
  );
}
