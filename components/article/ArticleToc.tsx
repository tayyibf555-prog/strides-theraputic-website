"use client";

import { useEffect, useState } from "react";

// "On this page" navigation with scroll-spy. Two variants:
// - rail: sticky sidebar content (rendered inside ArticleGrid's aside)
// - inline: boxed list for narrow screens
// Links are quiet by default; underline on hover, bold + moss when active.
export function ArticleToc({
  sections,
  variant = "rail",
}: {
  sections: Array<{ id: string; label: string }>;
  variant?: "rail" | "inline";
}) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!headings.length) return;

    const onScroll = () => {
      // Active section = last heading above the reading line (1/3 viewport).
      const line = window.innerHeight / 3;
      let current = headings[0].id;
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= line) current = h.id;
        else break;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const link = (id: string) =>
    id === active
      ? "font-semibold text-moss"
      : "text-ink/65 hover:underline hover:decoration-moss/40 hover:underline-offset-4 hover:text-ink";

  if (variant === "inline") {
    return (
      <nav
        aria-label="On this page"
        className="mx-auto mb-10 max-w-3xl rounded-card bg-cream-deep/60 p-5 ring-1 ring-sage-deep/40 xl:hidden"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
          On this page
        </p>
        <ul className="mt-3 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={`text-[0.92rem] ${link(s.id)}`}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label="On this page">
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-moss">
        On this page
      </p>
      <ul className="mt-3 space-y-2.5 border-l border-sage-deep/50 pl-3">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block text-[0.84rem] leading-snug transition-colors ${link(s.id)}`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
