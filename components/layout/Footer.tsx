import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, NAV } from "@/lib/site";
import { SERVICES } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:px-8">
        <div>
          <Logo light className="h-20" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            Compassionate, evidence-based behavioral healthcare — locally owned
            and operated by Board Certified Behavior Analysts. {CONTACT.serving}.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cream/80">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream/75 transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-cream/55 transition-colors hover:text-cream"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cream/80">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 text-cream/80 transition-colors hover:text-cream"
              >
                <Phone className="h-4 w-4 shrink-0 text-moss-light" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-3 text-cream/80 transition-colors hover:text-cream"
              >
                <Mail className="h-4 w-4 shrink-0 text-moss-light" />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-cream/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-moss-light" />
              <span>
                {CONTACT.address}
                <br />
                {CONTACT.city}
              </span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-cream/50">{CONTACT.hours}</p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-5 lg:px-8">
          <a
            href="https://www.azen.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 px-4 py-1.5 text-xs font-medium text-cream/70 transition-colors hover:border-cream/40 hover:text-cream"
          >
            Built by <span className="font-semibold text-cream">Azen</span>
          </a>
          <div className="flex w-full flex-col items-center justify-between gap-2 text-xs text-cream/50 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Strides Therapeutic Services. All
              rights reserved.
            </p>
            <p>{CONTACT.responseNote}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
