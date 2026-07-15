import type { Faq } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

// Sage FAQ band: question cards on the cream tiles used elsewhere on the site.
// Pair with faqSchema() JSON-LD on the page so the same Q&As feed FAQPage
// structured data.
export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  eyebrow = "Good to Know",
}: {
  faqs: Faq[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <Section tone="sage">
      <SectionHeading align="center" eyebrow={eyebrow} title={title} />
      <RevealGroup className="mx-auto mt-12 max-w-3xl space-y-5">
        {faqs.map((f) => (
          <RevealItem
            key={f.question}
            className="rounded-card bg-cream p-6 shadow-sm ring-1 ring-sage-deep/50 lg:p-7"
          >
            <h3 className="font-display text-xl font-semibold text-ink">
              {f.question}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{f.answer}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
