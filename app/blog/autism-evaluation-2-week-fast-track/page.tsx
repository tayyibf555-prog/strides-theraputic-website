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

const PATH = "/blog/autism-evaluation-2-week-fast-track";
const TITLE = "Fast Autism Diagnosis in Washington: 2-Week Evaluation";
const DESCRIPTION =
  "Waitlists for autism evaluations can run months. Strides in Vancouver, WA delivers results in as little as 2 weeks, starting at $795, up to age 8.";
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
    question: "How fast can my child get an autism diagnosis in Washington?",
    answer:
      "At regional centers and hospital developmental clinics, evaluation waitlists commonly run months to over a year. At Strides Therapeutic Services in Vancouver, WA, the diagnostic assessment is typically completed in as little as two weeks from intake to feedback session for children up to age 8. Timing depends on scheduling, so call (360) 622-2253 for current availability.",
  },
  {
    question: "Is a two-week autism evaluation reliable?",
    answer:
      "Speed at Strides comes from a purpose-built process, not from cutting steps. The evaluation includes direct clinical assessment, EarliPoint eye-tracking (an FDA-authorized evaluation tool for children up to age 8), and integrated review by MDs, PsyD-level clinicians, and BCBAs before a diagnosis is made. The waitlist at a large clinic reflects demand for appointment slots, not extra weeks of clinical work on your child's case.",
  },
  {
    question: "What is EarliPoint eye-tracking?",
    answer:
      "EarliPoint (from EarliTec Diagnostics) is an FDA-authorized eye-tracking evaluation for children up to age 8. While a child watches short videos, it measures moment-by-moment visual attention to social information, producing objective social-communication markers that clinicians review alongside traditional clinical assessment. Strides is among the first providers in the region using it.",
  },
  {
    question: "Will insurance accept a diagnosis from Strides?",
    answer:
      "Health plans authorize ABA therapy based on a diagnostic evaluation completed by qualified licensed clinicians, and the Strides report is written to support that authorization process, including the documentation plans ask for. Each plan applies its own rules, so verify the specifics with your insurer. Strides works with families to sort out the funding picture after diagnosis.",
  },
  {
    question: "What does the evaluation cost?",
    answer:
      "The assessment starts at $795. The standard assessment is one number with no add-ons: it covers the evaluation appointments, the written diagnostic report, and a feedback session where a clinician walks you through the results and recommendations.",
  },
  {
    question: "My child is older than 8. What should we do?",
    answer:
      "Strides diagnostic assessments serve children up to age 8. If your child is older, call (360) 622-2253 anyway; the team can point you toward appropriate referral options for an evaluation, and Strides' ABA and behavior-support services may still be a fit once a diagnosis is in place.",
    body: (
      <p>
        Strides diagnostic assessments serve children up to age 8. If your
        child is older, call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>{" "}
        anyway; the team can point you toward appropriate referral options
        for an evaluation, and Strides&rsquo; ABA and behavior-support
        services may still be a fit once a diagnosis is in place.
      </p>
    ),
  },
];

const TOC_SECTIONS = [
  { id: "the-waitlist-problem", label: "The waitlist problem" },
  { id: "what-waiting-costs", label: "What waiting actually costs" },
  { id: "how-the-2-week-process-works", label: "How the 2-week evaluation works, step by step" },
  { id: "what-as-little-as-2-weeks-means", label: "What “as little as 2 weeks” honestly means" },
  { id: "what-the-report-makes-possible", label: "What the diagnostic report makes possible" },
  { id: "what-it-costs", label: "What it costs: starting at $795" },
  { id: "who-its-for-and-who-its-not", label: "Who the 2-week evaluation is for, and who it isn’t" },
];

export default function AutismEvaluationFastTrackPage() {
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
              { name: "The 2-Week Autism Evaluation", path: PATH },
            ])
          ),
        }}
      />

      <ArticleHero
        eyebrow="Diagnostic Assessments"
        title="A Fast Autism Diagnosis in Washington: How the 2-Week Evaluation Works"
        updated={UPDATED_LABEL}
        crumbs={[
          { name: "Home", path: "/" },
              { name: "Parent Guides", path: "/blog" },
              { name: "The 2-Week Autism Evaluation", path: PATH },
        ]}
        reviewer="Hannah Schmidt, M.S., BCBA, LBA"
      />

      <Section tone="cream">
        <ArticleBody>
          <ArticleAnswer>
            <p>
              Families searching for a fast autism diagnosis in Washington
              usually hear the same thing everywhere they call: the waitlist
              runs months, sometimes more than a year. Strides Therapeutic
              Services in Vancouver, WA built a different path. Our{" "}
              <Link href="/services/autism-diagnostic-assessments">
                diagnostic assessment
              </Link>{" "}
              for children up to age 8 is completed{" "}
              <strong>in as little as two weeks</strong>, starting at $795,
              and combines EarliPoint&trade; eye-tracking with clinical
              evaluation reviewed by an integrated MD, PsyD, and BCBA team.
              The result: a written diagnostic report your family can act on
              while your child is still young enough for it to matter most.
            </p>
          </ArticleAnswer>

          <ArticleToc sections={TOC_SECTIONS} />
          <Image
            src="/images/articles/fasttrack-hero.png"
            alt="Illustration of a parent and child walking toward an open doorway beside a calendar with two weeks circled"
            width={1600}
            height={1600}
            className="rounded-card w-full h-auto"
          />

          <h2 id="the-waitlist-problem">The waitlist problem</h2>
          <p>
            If you&rsquo;ve started calling around Southwest Washington or the
            Portland metro for an autism evaluation, you already know the
            shape of the problem. Regional autism centers and hospital
            developmental clinics commonly book months to over a year out.
            Some aren&rsquo;t taking new referrals at all. The receptionist is
            kind, the clinic is reputable, and the answer is still a date so
            far away it feels theoretical.
          </p>
          <p>
            The math behind it is simple: more families seeking evaluations
            than clinicians performing them, with demand concentrated at a
            handful of large centers. None of it is any one clinic&rsquo;s
            fault, and none of it helps you this month, when your
            two-year-old isn&rsquo;t responding to their name and your
            pediatrician has said the words &ldquo;formal evaluation.&rdquo;
          </p>
          <p>
            Most parents searching for a fast option have already done the
            responsible things. They raised concerns at a well-child visit,
            got a referral, called the numbers on the list, and joined a
            waitlist or three. Looking for a quicker path isn&rsquo;t
            impatience; it&rsquo;s a reasonable response to being told that
            the question keeping you up at night will be answered sometime
            next year.
          </p>
          <p>
            Elsie Herring, BCBA, one of our founders and our Executive
            Operations Director, hears where that road leads: &ldquo;I often
            hear, &lsquo;We&rsquo;ve tried so many things, and nothing seems
            to work.&rsquo; By the time many families reach us, they&rsquo;re
            exhausted.&rdquo; A long diagnostic wait is often the first leg of
            that exhaustion, months of knowing something needs attention
            without a report that lets anyone act.
          </p>

          <h2 id="what-waiting-costs">What waiting actually costs</h2>
          <p>
            A waitlist doesn&rsquo;t just cost patience. For a young child, it
            costs the most valuable developmental real estate they will ever
            have.
          </p>
          <p>
            The early years are when a child&rsquo;s brain is most responsive
            to learning, and early-intervention research keeps pointing the
            same direction: support that starts earlier tends to produce
            better long-term outcomes. The diagnosis is the gate to nearly
            all of that support. Health plans won&rsquo;t authorize{" "}
            <Link href="/blog/aba-therapy-for-toddlers">
              ABA therapy for a toddler
            </Link>{" "}
            without a formal diagnosis. Schools, state programs, and care
            teams all move faster with a diagnostic report in hand.
          </p>
          <p>
            Run the timeline for a child whose parents get concerned at
            age 2&frac12;. Add a year on an evaluation waitlist, then weeks
            for insurance authorization, then a therapy ramp-up, and the
            child is pushing 4 before meaningful support begins. The same
            child evaluated within two weeks can have a report, an
            authorization request, and a treatment plan moving before their
            next half-birthday. Nothing else in the process buys back time
            the way compressing the diagnosis does.
          </p>

          <Image
            src="/images/articles/fasttrack-inline.png"
            alt="Illustration of a long queue of waiting chairs beside a short direct path to a clinic door"
            width={1600}
            height={1600}
            className="rounded-card w-full h-auto"
          />

          <h2 id="how-the-2-week-process-works">
            How the 2-week evaluation works, step by step
          </h2>
          <p>
            Speed here isn&rsquo;t a gimmick and it isn&rsquo;t a shortcut.
            It&rsquo;s a diagnostic pathway designed around one job:
            evaluating young children without dead time between steps.
            Here&rsquo;s the whole process.
          </p>
          <ol>
            <li>
              <strong>Intake.</strong> You request an intake online or call{" "}
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>. We gather your
              child&rsquo;s history, your concerns, and any prior records
              (pediatrician notes, early-intervention reports, screeners),
              and we schedule the assessment appointments, usually within
              days rather than months.
            </li>
            <li>
              <strong>Assessment appointments.</strong> Your child completes
              direct clinical assessment with our evaluators, including the
              EarliPoint&trade; eye-tracking evaluation, an FDA-authorized
              tool for children up to age 8 that measures objective
              social-communication markers while your child simply watches
              short videos. EarliPoint adds a biology-based data point
              alongside what our clinicians observe directly; Strides is
              among the first providers in the region using it.
            </li>
            <li>
              <strong>Integrated team review.</strong> Findings are reviewed
              by our integrated team of MDs, PsyD-level clinicians, and
              BCBAs. Multiple disciplines look at the same child&rsquo;s data
              before any diagnostic conclusion is reached, in one
              coordinated review rather than a chain of separate referrals.
            </li>
            <li>
              <strong>Written report and feedback session.</strong> You
              receive a written diagnostic report, and a clinician sits down
              with you to walk through the findings, answer questions, and
              lay out recommended next steps, from therapy options to school
              and funding conversations.
            </li>
          </ol>
          <p>
            From first appointment to feedback session, the process is
            completed in as little as two weeks. Compare that to the
            experience most families describe, where each step lives at a
            different clinic with its own waitlist, and the gap isn&rsquo;t
            the clinical work; it&rsquo;s the calendar.
          </p>
          <p>
            Your role as a parent is straightforward. Bring what you have:
            pediatrician notes, any screener results, early-intervention or
            preschool reports, and your own observations, which carry more
            diagnostic weight than most parents expect. During the
            appointments, you&rsquo;ll answer detailed questions about your
            child&rsquo;s development and daily life. No preparation is
            needed for your child beyond showing up as themselves; the
            EarliPoint portion in particular just looks like watching
            videos.
          </p>
        </ArticleBody>
      </Section>

      <ArticleCtaBand
        title="Ready to stop waiting for answers?"
        body="Intake takes minutes, and assessment appointments are typically available within days."
        ctaLabel="Schedule an Assessment"
      />

      <Section tone="cream">
        <ArticleBody>
          <h2 id="what-as-little-as-2-weeks-means">
            What &ldquo;as little as 2 weeks&rdquo; honestly means
          </h2>
          <p>
            A claim like this deserves a plain-English explanation, so here
            it is. &ldquo;As little as two weeks&rdquo; describes the typical
            timeline when scheduling lines up: intake completed, records in
            hand, and assessment appointments booked promptly. It is not a
            contractual guarantee, and we won&rsquo;t pretend otherwise.
          </p>
          <p>
            What can stretch the timeline? The usual, human things.
            Appointment availability in a given week, a sick kiddo on
            assessment day, records that take a while to arrive from another
            provider, or a family schedule that needs appointments spaced
            out. What we can say honestly is that the two-week pace is the
            design of the program, not a promotional best case we rarely
            hit; Elsie confirmed it remains realistic as of this writing. If
            your situation has a complication that would slow things down,
            we&rsquo;ll tell you at intake, not after.
          </p>
          <p>
            The comparison that matters isn&rsquo;t two weeks versus some
            perfect number. It&rsquo;s two weeks, give or take scheduling,
            versus months to over a year. And it&rsquo;s worth naming why
            the traditional pipeline runs long: at many centers, a child
            waits once for an intake appointment, again for testing dates,
            and again for a report-writing queue and feedback slot, with
            each stage owned by a different calendar. Strides collapses
            those stages into one coordinated schedule, which is where most
            of the time savings actually comes from.
          </p>

          <h2 id="what-the-report-makes-possible">
            What the diagnostic report makes possible
          </h2>
          <p>
            The report isn&rsquo;t the finish line; it&rsquo;s the starting
            gun. Here&rsquo;s what a completed diagnostic evaluation puts
            within reach.
          </p>
          <ul>
            <li>
              <strong>Insurance-funded ABA therapy.</strong> Health plans
              require a formal diagnosis before authorizing ABA. The Strides
              report is written to support that authorization process, and
              our team helps families move from diagnosis into treatment
              planning. If your family&rsquo;s coverage runs through
              Medicaid, our guide to{" "}
              <Link href="/insurance/does-medicaid-cover-aba-therapy">
                Medicaid and ABA coverage
              </Link>{" "}
              explains how that funding works; participation is plan-specific
              and changes over time, so call to verify.
            </li>
            <li>
              <strong>School supports.</strong> A medical diagnostic report
              gives you standing and documentation for the school
              district&rsquo;s own evaluation and IEP process. The district
              still runs its eligibility determination, but you arrive with
              evidence instead of only concerns.
            </li>
            <li>
              <strong>State disability programs.</strong> Washington
              DSHS&ndash;DDA and Oregon DHS&ndash;DDS eligibility work both
              lean on diagnostic documentation. Strides serves families in
              both systems and can help you understand where to start.
            </li>
          </ul>
          <p>
            There&rsquo;s also a quieter benefit that doesn&rsquo;t fit on a
            list: momentum. Families who get answers quickly tend to act
            quickly, while a year of waiting drains the energy that early
            intervention depends on. A two-week timeline means the
            conversation shifts from &ldquo;what if&rdquo; to &ldquo;what
            next&rdquo; while everyone still has the will to move.
          </p>
          <p>
            This is the part of the story that matters most a year later.
            One parent, K.G., put it this way after their child started at
            Strides: &ldquo;Our child has learned so many valuable skills
            and positive habits at Strides that have made a real difference
            in how they manage their emotions and handle meltdowns. They
            genuinely look forward to class each week and always come home
            smiling. Our biggest hope is that everything they&rsquo;re
            learning will give them the confidence and tools they need to
            succeed when they start school and continue to benefit them as
            they grow.&rdquo; Every piece of that starts with an evaluation
            that actually happened instead of one that stayed on a waitlist.
          </p>

          <h2 id="what-it-costs">What it costs: starting at $795</h2>
          <p>
            The Strides diagnostic assessment starts at $795. The standard
            assessment is one number with no add-ons: it covers the
            evaluation appointments, the written diagnostic report, and the
            feedback session. No surprise line items between you and the
            answer.
          </p>
          <p>
            For context on how that figure compares to what evaluations
            typically run in this region, and how deductibles and networks
            change the math when you go through insurance, see our full
            breakdown of{" "}
            <Link href="/blog/how-much-does-an-autism-evaluation-cost">
              how much an autism evaluation costs
            </Link>
            . For many families, the deciding factor isn&rsquo;t the sticker
            price on either path; it&rsquo;s that one path has a known
            number and a two-week calendar, and the other has a benefits
            booklet and a waitlist.
          </p>
          <p>
            One more detail worth knowing: for children who go on to ABA
            services at Strides, EarliPoint reassessment every six months is
            included, so progress gets measured with the same objective tool
            that contributed to the diagnosis.
          </p>

          <h2 id="who-its-for-and-who-its-not">
            Who the 2-week evaluation is for, and who it isn&rsquo;t
          </h2>
          <p>
            <strong>It&rsquo;s for</strong> families with children up to
            age 8 who need diagnostic clarity, whether that&rsquo;s a
            toddler whose pediatrician flagged concerns at a well-child
            visit, a preschooler whose teachers keep raising the same
            questions, or a kindergartner whose family has been told
            &ldquo;wait and see&rdquo; one too many times. It also fits
            families already sitting on a regional-center waitlist who would
            rather have a report in hand this month than hold a place in
            line; getting evaluated at Strides doesn&rsquo;t require giving
            that appointment up. Strides serves families across Vancouver,
            Camas, and Clark County, WA, and the Portland, OR metro, with
            many families crossing the river in both directions.
          </p>
          <p>
            <strong>It&rsquo;s not for</strong> older children, teens, or
            adults. Our diagnostic program, including the EarliPoint tool,
            serves children up to age 8, and we&rsquo;d rather say that
            plainly than stretch past what we&rsquo;re built to do well. If
            your child is older, call{" "}
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> anyway; our team
            can point you toward appropriate referral options, and our ABA
            and behavior-support services may still be a fit once a
            diagnosis is in place.
          </p>
          <p>
            If you&rsquo;re unsure whether an evaluation is even the right
            next step, that&rsquo;s a fine reason to call too. Talking
            through your concerns with our clinical team costs nothing, and
            it beats another month of wondering. We&rsquo;re open Monday
            through Friday, 8:30 AM to 4:30 PM, at our clinic on SE
            Stonemill Drive in Vancouver.
          </p>
        </ArticleBody>
      </Section>

      <FaqSection faqs={FAQS} eyebrow="The 2-Week Evaluation" />

      <ArticleEndCta
        title="Two weeks from now, you could have answers"
        body={
          <p>
            A Strides diagnostic assessment starts at $795 for children up
            to age 8, with results in as little as two weeks, EarliPoint
            eye-tracking, and review by an integrated MD, PsyD, and BCBA
            team. We serve families across Vancouver, Camas, Clark County,
            and the Portland metro.
          </p>
        }
        ctaLabel="Schedule an Assessment"
      />
    </>
  );
}
