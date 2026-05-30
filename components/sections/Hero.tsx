"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HOME } from "@/lib/content";
import { CtaButton } from "@/components/ui/CtaButton";
import { ServiceTicker } from "./ServiceTicker";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Hero photograph */}
      <Image
        src="/hero-main.png"
        alt="Three young clients walking together outside a community library"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center]"
      />
      {/* Vertical scrim (deeper toward the bottom) keeps the centered cream
          text legible; the horizontal layer fades both side edges so the
          photo is framed and vignetted symmetrically. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(43,44,38,0.24) 0%, rgba(43,44,38,0.22) 40%, rgba(43,44,38,0.55) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(43,44,38,0.62) 0%, rgba(43,44,38,0) 26%, rgba(43,44,38,0) 74%, rgba(43,44,38,0.62) 100%)",
        }}
      />

      <ServiceTicker />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="font-display text-4xl font-medium leading-tight text-cream sm:text-5xl lg:text-6xl">
            <span className="block">Empowering</span>
            <span className="block">Independence</span>
            <span className="block">at Every Stage of Life</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
            {HOME.hero.sub}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <CtaButton size="lg" withArrow>
              {HOME.hero.cta}
            </CtaButton>
            <CtaButton href="/services" variant="outline" size="lg" className="border-cream/50 text-cream hover:bg-cream hover:text-forest">
              Explore Our Services
            </CtaButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
