type Tone = "cream" | "cream-deep" | "sage" | "white";

const tones: Record<Tone, string> = {
  cream: "bg-cream",
  "cream-deep": "bg-cream-deep",
  sage: "bg-sage/50",
  white: "bg-white",
};

export function Section({
  children,
  tone = "cream",
  className = "",
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${tones[tone]} py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-moss">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-medium text-ink lg:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
