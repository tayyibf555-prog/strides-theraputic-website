import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionBand } from "@/components/sections/SectionBand";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Strides Therapeutic Services collects, uses, and protects information submitted through our website.",
  alternates: { canonical: "/privacy" },
};

// Website privacy policy. Deliberately scoped to the WEBSITE only — health
// information practices are covered by the practice's Notice of Privacy
// Practices, which is referenced (not reproduced) below.
export default function PrivacyPage() {
  return (
    <>
      <SectionBand
        headingLevel="h1"
        title="Privacy Policy"
        subtitle="How we handle information collected through this website."
      />
      <Section tone="cream">
        <div className="mx-auto max-w-3xl space-y-10 text-[1.05rem] leading-relaxed text-muted">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
            Effective July 2026
          </p>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-ink">
              What this policy covers
            </h2>
            <p>
              This policy describes what information Strides Therapeutic
              Services collects through this website
              (www.stridestherapeutics.com), how we use it, and the choices you
              have. It applies to the website only — not to the clinical
              services we provide. For our Notice of Privacy Practices
              regarding health information, contact our office.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-ink">
              Information we collect
            </h2>
            <p>
              <strong className="text-ink">Information you send us.</strong>{" "}
              When you request an intake or contact us, you do so through a
              form hosted by Google Forms. That form asks for contact details
              (such as your name, phone number, and email address) and basic
              information about the services you are interested in. We use it
              only to respond to your inquiry and coordinate next steps.
            </p>
            <p>
              <strong className="text-ink">Analytics information.</strong> We
              use Google Analytics 4 and Google Tag Manager to understand how
              visitors use the site — for example, which pages are viewed and
              how people found us. These tools set cookies and collect
              information such as device type, browser, approximate location,
              and pages visited. This data is aggregated; we do not use it to
              identify individual visitors.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-ink">
              How we use information
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>To respond to inquiries and intake requests.</li>
              <li>To understand how the website is used and improve it.</li>
              <li>To maintain the security and performance of the site.</li>
            </ul>
            <p>
              We do not sell your personal information, and we do not share it
              with third parties for their own marketing purposes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-ink">
              Cookies and your choices
            </h2>
            <p>
              The analytics cookies described above are the main cookies this
              site sets. You can block or delete cookies in your browser
              settings, and you can opt out of Google Analytics with the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-moss underline decoration-moss/30 underline-offset-4 hover:text-forest-deep"
              >
                Google Analytics opt-out browser add-on
              </a>
              . The site remains fully usable without cookies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-ink">
              Third-party services
            </h2>
            <p>
              Google Forms, Google Analytics, and Google Tag Manager are
              operated by Google and handle data under Google&rsquo;s own
              privacy terms. Links on this site may take you to third-party
              websites (such as Google Maps or social media); their privacy
              practices are their own.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-ink">
              Children&rsquo;s privacy
            </h2>
            <p>
              This website is intended for parents, caregivers, and
              professionals. We do not knowingly collect personal information
              from children through the website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-ink">
              Changes to this policy
            </h2>
            <p>
              If we make material changes to this policy, we will update this
              page and revise the effective date above.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-ink">
              Contact us
            </h2>
            <p>
              Questions about this policy — or requests to review or delete
              information you submitted through the website — can be sent to{" "}
              <a
                href={CONTACT.emailHref}
                className="font-medium text-moss underline decoration-moss/30 underline-offset-4 hover:text-forest-deep"
              >
                {CONTACT.email}
              </a>{" "}
              or {CONTACT.phone}. You can also write to us at {CONTACT.address}
              , {CONTACT.city}.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
