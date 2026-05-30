"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { NAV, CONTACT } from "@/lib/site";
import { Logo } from "./Logo";
import { CtaButton } from "@/components/ui/CtaButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_2px_20px_rgba(44,44,38,0.08)]"
          : "bg-cream"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <Logo priority className="h-20 lg:h-24" />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative font-sans text-[0.95rem] font-medium transition-colors hover:text-moss ${
                isActive(item.href) ? "text-moss" : "text-ink/80"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-moss" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 rounded-full border border-moss/30 px-4 py-2 text-sm font-semibold text-moss transition-colors hover:bg-moss hover:text-cream"
          >
            <Phone className="h-4 w-4" />
            {CONTACT.phone}
          </a>
          <CtaButton>Request an Intake</CtaButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-ink transition-colors hover:bg-sage lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sage-deep/50 bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-sage-deep/40 py-3 font-sans text-base font-medium ${
                  isActive(item.href) ? "text-moss" : "text-ink/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 font-semibold text-moss"
              >
                <Phone className="h-4 w-4" />
                {CONTACT.phone}
              </a>
              <CtaButton size="lg" className="w-full">
                Request an Intake
              </CtaButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
