import { ShieldCheck } from "lucide-react";
import { FUNDING_SOURCES } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";

export function FundingSources() {
  return (
    <Reveal className="mx-auto max-w-4xl px-5 text-center lg:px-8">
      <h2 className="font-display text-2xl font-medium text-ink">
        We Accept Most Funding Sources
      </h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
        {FUNDING_SOURCES.map((name) => (
          <div
            key={name}
            className="flex items-center gap-2.5 rounded-full bg-cream px-6 py-3 text-base font-semibold text-moss shadow-sm ring-1 ring-sage-deep/50"
          >
            <ShieldCheck className="h-5 w-5 text-moss-light" />
            {name}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
