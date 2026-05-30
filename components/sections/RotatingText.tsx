"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Cycles through phrases one at a time, per the template's "We Help …" cue.
// An invisible sizer reserves the width + height of the LONGEST phrase via a
// single overlapping grid cell, so the box never changes size and "We Help"
// never shifts as phrases swap. The visible phrase cross-fades in place.
export function RotatingText({
  phrases,
  interval = 3200,
  className = "",
}: {
  phrases: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % phrases.length),
      interval,
    );
    return () => clearInterval(id);
  }, [phrases.length, interval]);

  return (
    <span className={`relative block ${className}`}>
      {/* Invisible sizer: all phrases overlap in one grid cell so the box
          reserves the dimensions of the widest/tallest phrase and stays a
          fixed size — keeping the whole line anchored as phrases cycle. */}
      <span aria-hidden className="invisible grid">
        {phrases.map((p) => (
          <span
            key={p}
            className="whitespace-normal [grid-area:1/1] sm:whitespace-nowrap"
          >
            {p}
          </span>
        ))}
      </span>
      <span className="absolute inset-0 flex items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            className="block whitespace-normal sm:whitespace-nowrap"
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -14 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {phrases[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
