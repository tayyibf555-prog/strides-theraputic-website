import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, SERVICE_BUBBLES, type Service } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

function ServiceCard({
  service,
  withBubble,
}: {
  service: Service;
  withBubble?: boolean;
}) {
  const Icon = service.icon;
  // Bubble copy is only wired up on the Our Services page (withBubble). The
  // Home and Contact grids reuse this card without the hover bubble.
  const bubble = withBubble ? SERVICE_BUBBLES[service.slug] : undefined;
  return (
    // hover:z-30 lifts the hovered card (and its overflowing bubble) above
    // its grid neighbours so the bubble is never clipped behind them.
    <RevealItem as="article" className="relative h-full hover:z-30">
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col rounded-card border border-sage-deep/60 bg-cream p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-moss/50 hover:shadow-lg"
      >
        {bubble && (
          <span
            className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-4 w-[min(20rem,calc(100vw-2.5rem))] -translate-x-1/2 translate-y-2 rounded-2xl bg-forest px-5 py-4 text-left text-cream opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            role="presentation"
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
            <span
              aria-hidden
              className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-forest"
            />
          </span>
        )}
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-moss/10 text-moss transition-colors group-hover:bg-moss group-hover:text-cream">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-ink">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {service.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
          {withBubble ? "Learn More" : service.cardCta}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </RevealItem>
  );
}

export function ServiceGrid({ withBubble = false }: { withBubble?: boolean }) {
  return (
    <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service) => (
        <ServiceCard
          key={service.slug}
          service={service}
          withBubble={withBubble}
        />
      ))}
    </RevealGroup>
  );
}
