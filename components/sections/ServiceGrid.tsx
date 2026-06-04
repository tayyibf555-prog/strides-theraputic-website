import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, SERVICE_BUBBLES, type Service } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

function ServiceCard({
  service,
  withBubble,
  side,
}: {
  service: Service;
  withBubble?: boolean;
  // Which side the hover bubble opens toward. Left-column cards open "right"
  // so the bubble never runs off the left page edge; everyone else opens left.
  side?: "left" | "right";
}) {
  // Bubble copy is only wired up where withBubble is passed (the Home grid).
  // The Services and Contact grids reuse this card without the hover bubble.
  const bubble = withBubble ? SERVICE_BUBBLES[service.slug] : undefined;
  const openRight = side === "right";
  return (
    // hover:z-30 lifts the hovered card (and its overflowing bubble) above its
    // grid neighbours so the side bubble can overlap them without being clipped.
    <RevealItem as="article" className="relative h-full hover:z-30">
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col rounded-card border border-sage-deep/60 bg-cream p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-moss/50 hover:shadow-lg"
      >
        {bubble && (
          <span
            role="presentation"
            className={`pointer-events-none absolute top-1/2 z-30 hidden w-72 -translate-y-1/2 rounded-2xl bg-forest px-5 py-4 text-left text-cream opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block ${
              openRight
                ? "left-full ml-4 -translate-x-2"
                : "right-full mr-4 translate-x-2"
            }`}
          >
            {bubble.title && (
              <span className="block font-display text-base font-semibold leading-snug text-[#e7bca8]">
                {bubble.title}
              </span>
            )}
            {bubble.body.map((para, i) => (
              <span
                key={i}
                className={`block text-[0.82rem] leading-relaxed text-cream/90 ${
                  bubble.title || i > 0 ? "mt-2" : ""
                }`}
              >
                {para}
              </span>
            ))}
            {bubble.price && (
              <span className="mt-3 block font-display text-base font-semibold text-[#e7bca8]">
                {bubble.price}
              </span>
            )}
            {bubble.note && (
              <span className="mt-1 block text-[0.78rem] italic leading-relaxed text-cream/70">
                {bubble.note}
              </span>
            )}
            {/* Little diamond tail pointing toward the card. */}
            <span
              aria-hidden
              className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-forest ${
                openRight
                  ? "right-full translate-x-1/2"
                  : "left-full -translate-x-1/2"
              }`}
            />
          </span>
        )}
        <h3 className="font-display text-xl font-semibold text-ink">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {service.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
          {service.cardCta}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </RevealItem>
  );
}

export function ServiceGrid({ withBubble = false }: { withBubble?: boolean }) {
  return (
    <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service, i) => (
        <ServiceCard
          key={service.slug}
          service={service}
          withBubble={withBubble}
          // 3-col layout: the left column (every 3rd card) opens its bubble to
          // the right; all others open to the left.
          side={i % 3 === 0 ? "right" : "left"}
        />
      ))}
    </RevealGroup>
  );
}
