import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SectionBand } from "@/components/sections/SectionBand";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { CONTACT } from "@/lib/site";
import { CONTACT_PAGE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach the Strides Therapeutic Services team in Vancouver, WA. Most inquiries receive a response within 1 business day.",
  alternates: { canonical: "/contact" },
};

const items = [
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, label: "Email", value: CONTACT.email, href: CONTACT.emailHref },
  {
    icon: MapPin,
    label: "Visit Us",
    value: `${CONTACT.address}, ${CONTACT.city}`,
  },
  { icon: Clock, label: "Hours", value: CONTACT.hours },
];

export default function ContactPage() {
  return (
    <>
      <SectionBand
        title={CONTACT_PAGE.hero.headline}
        subtitle={CONTACT_PAGE.hero.sub}
      />

      {/* Contact details + map placeholder */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <Reveal className="flex h-full flex-col">
            <div className="grid gap-4">
              {items.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-moss/10 text-moss">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                        {item.label}
                      </p>
                      <p className="mt-1 break-words font-medium text-ink">
                        {item.value}
                      </p>
                    </div>
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 rounded-card bg-cream p-5 shadow-sm ring-1 ring-sage-deep/50 transition-colors hover:ring-moss/40"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-card bg-cream p-5 shadow-sm ring-1 ring-sage-deep/50"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex flex-1 flex-col rounded-card bg-sage/60 p-6 ring-1 ring-sage-deep/50">
              <p className="text-ink/85">{CONTACT.responseNote}</p>
              <p className="mt-1 text-sm text-muted">
                {CONTACT_PAGE.helpSub}
              </p>
              <CtaButton size="lg" className="mt-5" withArrow>
                Start a General Inquiry
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full overflow-hidden rounded-card shadow-sm ring-1 ring-sage-deep/50">
              <iframe
                title="Strides Therapeutic Services location"
                src="https://www.google.com/maps?q=204+SE+Stonemill+Drive,+Vancouver,+WA+98684&output=embed"
                className="h-full min-h-[460px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* How Can We Help */}
      <Section tone="sage">
        <SectionHeading
          align="center"
          eyebrow="Choose a Path"
          title={CONTACT_PAGE.helpHeading}
        />
        <div className="mt-12">
          <ServiceGrid />
        </div>
      </Section>

      {/* Closing */}
      <div className="bg-forest text-cream">
        <Reveal className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl font-medium lg:text-4xl">
            {CONTACT_PAGE.closing.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/85">
            {CONTACT_PAGE.closing.body}
          </p>
          <CtaButton variant="light" size="lg" className="mt-8" withArrow>
            Request an Intake
          </CtaButton>
        </Reveal>
      </div>
    </>
  );
}
