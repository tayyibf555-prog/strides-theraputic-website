import { Quote } from "lucide-react";
import { TESTIMONIALS, type Testimonial } from "@/lib/content";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="flex w-[300px] shrink-0 flex-col rounded-card bg-cream p-7 shadow-sm ring-1 ring-sage-deep/50 sm:w-[360px]">
      <Quote className="h-8 w-8 text-clay/70" />
      <p className="mt-4 flex-1 text-[0.97rem] leading-relaxed text-ink/90">
        “{t.quote}”
      </p>
      <footer className="mt-6 border-t border-sage-deep/50 pt-4">
        <p className="font-display font-semibold text-moss">{t.name}</p>
        <p className="text-sm text-muted">{t.location}</p>
      </footer>
    </article>
  );
}

export function Testimonials() {
  // One "half" repeats the set so the loop fills wide viewports; the track
  // renders two identical halves and animates -50% for a seamless loop.
  const half = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="marquee group relative overflow-hidden">
      <div className="marquee-track flex w-max gap-6 py-2">
        {half.map((t, i) => (
          <TestimonialCard key={`a-${i}`} t={t} />
        ))}
        {half.map((t, i) => (
          <div key={`b-${i}`} aria-hidden>
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}
