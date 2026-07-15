import { Reveal } from "@/components/motion/Reveal";

type Props = {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  className?: string;
  // Use "h1" when the band is the page's primary heading (e.g. /team hero).
  headingLevel?: "h1" | "h2";
};

// Full-width olive band with a centered serif heading — the template's
// recurring section divider.
export function SectionBand({
  title,
  eyebrow,
  subtitle,
  className = "",
  headingLevel = "h2",
}: Props) {
  const Heading = headingLevel;
  return (
    <div className={`bg-moss text-cream ${className}`}>
      <Reveal className="mx-auto max-w-4xl px-5 py-10 text-center lg:py-12">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.32em] text-cream/70">
            {eyebrow}
          </p>
        )}
        <Heading className="font-display text-3xl font-medium tracking-wide lg:text-4xl">
          {title}
        </Heading>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-cream/80">{subtitle}</p>
        )}
      </Reveal>
    </div>
  );
}
