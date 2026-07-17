import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { articleSchema, faqSchema, jsonLd } from "@/lib/schema";
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

const PATH = "/blog/aba-therapy-for-toddlers";
const TITLE = "ABA Therapy for Toddlers: What Parents Should Know (2026)";
const DESCRIPTION =
  "What ABA therapy looks like for toddlers, when to start, and how it's funded — from the BCBA-owned team serving Vancouver WA and Portland OR.";
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
    question: "What age can a toddler start ABA therapy?",
    answer:
      "ABA can begin as soon as a child has an autism diagnosis, and diagnosis is considered reliable from around 18–24 months. Many toddlers start between ages 2 and 3. Starting early matters because the first years of life are when the brain is most responsive to learning, and because authorization, scheduling, and ramp-up all take time once you decide to move.",
  },
  {
    question: "Does my toddler need an autism diagnosis before starting ABA?",
    answer:
      "For insurance-funded ABA, yes — health plans require a formal autism diagnosis before they authorize therapy. That makes the diagnostic evaluation the practical first step. Strides completes diagnostic assessments for children up to age 8 for a flat $795, with results in as little as two weeks, so the diagnosis doesn't become the bottleneck.",
  },
  {
    question: "How many hours of ABA does a toddler need?",
    answer:
      "It depends on the child. A BCBA's assessment sets the recommendation based on your toddler's needs and goals, and your health plan reviews it for medical necessity. Programs range from a few focused hours a week to intensive early-intervention schedules. The right number is the one tied to your child's treatment plan — not a one-size-fits-all figure.",
  },
  {
    question: "What does an ABA session look like for a 2- or 3-year-old?",
    answer:
      "Mostly like structured play, on purpose. Toddler sessions are built around games, toys, songs, and everyday routines, with the therapist folding teaching targets — requesting, imitation, turn-taking, following simple directions — into activities the child already enjoys. Caregiver involvement is a core part of it, so the skills show up at home, not just in session.",
  },
  {
    question: "Is ABA therapy safe and appropriate for toddlers?",
    answer:
      "Modern ABA for toddlers is play-based, individualized, and centered on skills that make daily life easier — communication, flexibility, independence. At Strides, programs are designed and supervised by Board Certified Behavior Analysts, families are involved throughout, and goals are built around each child's strengths, not around changing who they are.",
  },
  {
    question: "How is toddler ABA therapy paid for?",
    answer:
      "Most families fund ABA through health insurance — Strides works with PacificSource, BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Kaiser Permanente, and TRICARE. Washington DDA and Oregon DDS programs fund related behavior supports for eligible families. Coverage details vary by plan, so call (360) 622-2253 and we'll help you sort out what applies to your child.",
    body: (
      <p>
        Most families fund ABA through health insurance — Strides works with
        PacificSource, BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare,
        Kaiser Permanente, and TRICARE; our guide to{" "}
        <Link href="/blog/does-insurance-cover-aba-therapy">
          how insurance covers ABA therapy
        </Link>{" "}
        walks through the details. Washington DDA and Oregon DDS programs fund
        related behavior supports for eligible families. Coverage varies by
        plan, so call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> and
        we&rsquo;ll help you sort out what applies to your child.
      </p>
    ),
  },
];

export default function AbaTherapyForToddlersPage() {
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
        eyebrow="Early Intervention Guide"
        title="ABA Therapy for Toddlers: What It Looks Like, When to Start, and How to Pay for It"
        updated={UPDATED_LABEL}
      />

      <Section tone="cream">
        <ArticleBody>
          <ArticleAnswer>
            <p>
              ABA therapy for toddlers is play-based, individualized teaching
              that builds communication, social, and daily-living skills during
              the years when children learn fastest. It can start as soon as a
              child has an autism diagnosis — reliably possible by 18–24
              months — and it&rsquo;s typically funded through health
              insurance once that diagnosis is in place. In the Vancouver, WA
              and Portland, OR area, Strides Therapeutic Services provides
              both pieces: a <strong>$795 flat-fee diagnostic assessment</strong>{" "}
              with results in as little as two weeks, and{" "}
              <Link href="/services/aba-therapy">ABA therapy</Link> delivered
              in clinic, home, school, and community settings.
            </p>
          </ArticleAnswer>

          <h2>Why the toddler years matter so much</h2>
          <p>
            Between roughly 18 months and age 5, a child&rsquo;s brain is doing
            its heaviest construction. Language, imitation, social
            back-and-forth, play — the foundations are being poured in real
            time. That&rsquo;s exactly why early intervention research keeps
            pointing the same direction: support that starts earlier tends to
            produce better long-term outcomes, because it works with that
            developmental window instead of after it.
          </p>
          <p>
            This is also why waiting is the most expensive thing a family can
            do. Not in dollars — in months. A toddler who is 2½ when parents
            first get concerned, and 4 by the time a waitlisted evaluation and
            authorization finally clear, has spent a large share of the
            highest-leverage window in line. Every step you can compress —
            diagnosis, authorization, starting hours — buys back developmental
            time.
          </p>

          <h2>What ABA actually looks like at 2, 3, and 4</h2>
          <p>
            Forget the image of a child at a desk. Toddler ABA, done well,
            looks like play — because for a 2-year-old, play <em>is</em>{" "}
            learning. A session might involve bubbles, cars, a snack routine,
            or a favorite song. Inside those activities, the therapist is
            systematically working on targets from your child&rsquo;s
            individual plan:
          </p>
          <ul>
            <li>
              <strong>Communication</strong> — requesting wants and needs
              (words, signs, or pictures), responding to their name, following
              simple directions
            </li>
            <li>
              <strong>Imitation and play skills</strong> — copying actions,
              taking turns, expanding how they play with toys and people
            </li>
            <li>
              <strong>Daily routines</strong> — mealtimes, transitions,
              tolerating haircuts or car seats, early self-help skills
            </li>
            <li>
              <strong>Replacing frustration with communication</strong> —
              because most challenging behavior at this age is a child telling
              you something without the words to say it
            </li>
          </ul>
          <p>
            At Strides, every program is designed and supervised by a Board
            Certified Behavior Analyst and individualized to the child. As
            Madelyn Mason, one of our ABA clinicians, puts it:
            &ldquo;The biggest misconception I hear is that ABA is about
            changing who someone is. Our goal is the opposite — we help
            individuals build communication, independence, and life skills
            while celebrating what makes them unique.&rdquo;
          </p>

          <h2>The role of parents (bigger than you think)</h2>
          <p>
            Toddler ABA is a team sport, and caregivers are on the field.
            Parent training and coaching are built into good early-intervention
            programs because toddlers spend most of their hours with family,
            not therapists. The win condition isn&rsquo;t a child who performs
            skills in a clinic room; it&rsquo;s calmer mornings, easier
            mealtimes, and communication that works at the grocery store.
          </p>
          <p>
            Hannah Schmidt, our Executive Clinical Director, hears the same
            thing from nearly every family: &ldquo;The most common thing I
            hear from families is, &lsquo;We just want to know how to
            help.&rsquo; Parents are looking for practical strategies that
            make life at home easier. That&rsquo;s where we focus — building
            meaningful, sustainable progress for the whole family.&rdquo;
          </p>
        </ArticleBody>
      </Section>

      <ArticleCtaBand
        title="Wondering whether ABA is right for your toddler?"
        body="Talk it through with our clinical team — no waitlist required to ask questions."
        ctaLabel="Request an Intake"
      />

      <Section tone="cream">
        <ArticleBody>
          <h2>Step one is a diagnosis — and it&rsquo;s the usual bottleneck</h2>
          <p>
            Health plans won&rsquo;t authorize ABA without a formal autism
            diagnosis, which makes the diagnostic evaluation the gate to
            everything else. It&rsquo;s also where families lose the most
            time: waitlists at regional centers commonly run months to over a
            year.
          </p>
          <p>
            Strides built its{" "}
            <Link href="/services/autism-diagnostic-assessments">
              diagnostic assessment program
            </Link>{" "}
            specifically to remove that bottleneck for young children:
          </p>
          <ul>
            <li>
              <strong>$795 flat fee</strong> — evaluation, written report, and
              feedback session, no add-ons (here&rsquo;s{" "}
              <Link href="/blog/how-much-does-an-autism-evaluation-cost">
                how that compares to typical evaluation costs
              </Link>
              )
            </li>
            <li>
              <strong>Results in as little as two weeks</strong>, so therapy
              and authorization can start while your child is still two — not
              after their fourth birthday
            </li>
            <li>
              <strong>EarliPoint&trade; eye-tracking</strong> — an
              FDA-authorized evaluation tool for children up to age 8 that
              adds an objective, biology-based data point alongside clinical
              assessment by our integrated MD, PsyD, and BCBA team
            </li>
          </ul>

          <h2>Starting toddler ABA in Vancouver, WA and Portland, OR</h2>
          <p>
            Strides serves families across Vancouver, Camas, Clark County, and
            the Portland metro, with services in clinic, home, school, and
            community settings. Getting started looks like this:
          </p>
          <ol>
            <li>
              <strong>Reach out.</strong> Request an intake or call{" "}
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>. We&rsquo;ll
              talk through your concerns and your funding picture.
            </li>
            <li>
              <strong>Get the diagnosis (if you don&rsquo;t have one).</strong>{" "}
              The $795 assessment, typically completed within two weeks.
            </li>
            <li>
              <strong>Benefits and authorization.</strong> We work with
              PacificSource, BlueCross BlueShield, Aetna, Cigna,
              UnitedHealthcare, Kaiser Permanente, and TRICARE, plus{" "}
              <Link href="/services/wa-dda">WA DDA</Link> and{" "}
              <Link href="/services/or-dds">Oregon DDS</Link> funding for
              eligible families.
            </li>
            <li>
              <strong>Start therapy.</strong> A BCBA builds your
              toddler&rsquo;s individual plan, and sessions begin — with
              parent coaching woven in from day one.
            </li>
          </ol>
          <p>
            One parent, K.G., described the change this way: &ldquo;Our child
            has learned so many valuable skills and positive habits at Strides
            that have made a real difference in how they manage their emotions
            and handle meltdowns. They genuinely look forward to class each
            week and always come home smiling.&rdquo;
          </p>
        </ArticleBody>
      </Section>

      <FaqSection faqs={FAQS} eyebrow="Toddler ABA" />

      <ArticleEndCta
        title="The earliest years are the best time to start"
        body={
          <p>
            If you&rsquo;re seeing signs that worry you, you don&rsquo;t need
            to wait for someone else&rsquo;s waitlist to find out where you
            stand. A Strides diagnostic assessment is a flat $795 with results
            in as little as two weeks, and our BCBA-led team serves toddlers
            across Vancouver, Camas, Clark County, and the Portland metro in
            clinic, home, and community settings.
          </p>
        }
      />
    </>
  );
}
