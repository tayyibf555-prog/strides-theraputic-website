import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { FUNDING_SOURCES, type FundingSource } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";

function FundingTile({ source }: { source: FundingSource }) {
  return (
    <div className="flex h-[96px] w-[240px] shrink-0 items-center justify-center rounded-card bg-white px-6 shadow-sm ring-1 ring-sage-deep/40">
      {source.logo ? (
        <span className="relative h-16 w-full">
          <Image
            src={source.logo}
            alt={source.name}
            fill
            sizes="240px"
            className="object-contain"
          />
        </span>
      ) : (
        <span className="flex items-center gap-2.5 text-base font-semibold text-moss">
          <ShieldCheck className="h-5 w-5 shrink-0 text-moss-light" />
          {source.name}
        </span>
      )}
    </div>
  );
}

export function FundingSources() {
  // Duplicate the set so the track is wide enough to loop, then render two
  // identical halves and animate -50% for a seamless scroll (same pattern as
  // the testimonials marquee).
  const half = [...FUNDING_SOURCES, ...FUNDING_SOURCES];

  return (
    <div>
      <Reveal className="text-center">
        <h2 className="font-display text-2xl font-medium text-ink">
          We Accept Most Funding Sources
        </h2>
      </Reveal>
      <div className="marquee group relative mt-10 -mx-5 overflow-hidden lg:-mx-8">
        <div className="marquee-track flex w-max items-center gap-6 py-2">
          {half.map((source, i) => (
            <FundingTile key={`a-${i}`} source={source} />
          ))}
          {half.map((source, i) => (
            <div key={`b-${i}`} aria-hidden>
              <FundingTile source={source} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
