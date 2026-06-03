import { Check } from "lucide-react";
import { type FeatureBlock } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function FeatureList({ features }: { features: FeatureBlock[] }) {
  return (
    <RevealGroup
      className={`grid gap-6 ${features.length > 1 ? "md:grid-cols-2" : ""}`}
    >
      {features.map((f) => (
        <RevealItem
          key={f.title}
          as="article"
          className="flex flex-col rounded-card border border-sage-deep/60 bg-cream p-7 shadow-sm"
        >
          <h3 className="font-display text-xl font-semibold text-ink">
            {f.title}
          </h3>
          {f.subtitle && (
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-moss">
              {f.subtitle}
            </p>
          )}
          {f.body && (
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80">
              {f.body}
            </p>
          )}
          {f.items && (
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {f.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss-light" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function Differentiators({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <RevealGroup className="grid gap-6 sm:grid-cols-2">
      {items.map((d) => (
        <RevealItem
          key={d.title}
          className="rounded-card bg-sage/60 p-6 ring-1 ring-sage-deep/50"
        >
          <h3 className="font-display text-lg font-semibold text-moss">
            {d.title}
          </h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/80">
            {d.body}
          </p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
