import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function StatStrip({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="bg-moss text-cream">
      <RevealGroup className="mx-auto grid max-w-5xl gap-8 px-5 py-12 text-center sm:grid-cols-3 lg:px-8">
        {stats.map((s) => (
          <RevealItem key={s.label}>
            <p className="font-display text-4xl font-semibold lg:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-cream/75">
              {s.label}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
