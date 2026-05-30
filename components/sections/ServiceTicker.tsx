import { HOME } from "@/lib/content";

function TickerItem({ label }: { label: string }) {
  return (
    <span className="flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-cream/75">
      <span className="px-7">{label}</span>
      <span className="text-clay">•</span>
    </span>
  );
}

// Full-width horizontal ticker of service tags. Reuses the shared `.marquee`
// classes (see globals.css) for the seamless loop + reduced-motion fallback.
export function ServiceTicker() {
  // One "half" repeats the set so the loop fills wide viewports; the track
  // renders two identical halves and animates -50% for a seamless loop.
  const half = [...HOME.badges, ...HOME.badges];

  return (
    <div className="relative border-b border-cream/10 bg-forest-deep/40">
      <div className="marquee group overflow-hidden">
        <div className="marquee-track flex w-max items-center py-3">
          {half.map((b, i) => (
            <TickerItem key={`a-${i}`} label={b} />
          ))}
          {half.map((b, i) => (
            <span key={`b-${i}`} aria-hidden>
              <TickerItem label={b} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
