import { ClipboardList, Compass, PhoneCall } from "lucide-react";
import { HOME } from "@/lib/content";
import { CtaButton } from "@/components/ui/CtaButton";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

// Distinct icon + badge tint per card so the three options read as a deliberate
// set rather than three identical boxes. Paired by index with HOME.ctaCards.
const CARD_META = [
  { icon: ClipboardList, badge: "bg-moss/12 text-moss ring-moss/20" },
  { icon: Compass, badge: "bg-moss/12 text-moss ring-moss/20" },
  { icon: PhoneCall, badge: "bg-moss/12 text-moss ring-moss/20" },
];

export function CtaCards() {
  return (
    <RevealGroup className="grid gap-6 md:grid-cols-3">
      {HOME.ctaCards.map((card, i) => {
        const { icon: Icon, badge } = CARD_META[i];
        return (
          <RevealItem
            key={card.title}
            className="group flex flex-col items-center rounded-card bg-cream p-8 text-center shadow-sm ring-1 ring-sage-deep/50 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-moss/30"
          >
            <span
              className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 transition duration-300 group-hover:scale-105 ${badge}`}
            >
              <Icon className="h-7 w-7" />
            </span>
            <p className="flex-1 font-display text-lg font-medium text-ink">
              {card.title}
            </p>
            <CtaButton
              href={card.href === "form" ? undefined : card.href}
              className="mt-6"
              withArrow
            >
              {card.cta}
            </CtaButton>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
