"use client";

import { useEffect } from "react";

// Pushes conversion events into the GTM dataLayer using event delegation, so we
// don't have to wire an onClick into every button/link. GTM then maps each
// event to a GA4 conversion tag (see the GTM console: one Custom Event trigger
// + one GA4 event tag per event name below).
//
// Events emitted:
//   - generate_lead  → intake form (forms.gle) clicked
//   - phone_click    → tel: link clicked
//   - email_click    → mailto: link clicked
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function push(event: string, params: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  // Fire straight to GA4 via gtag (works with the direct gtag.js install, no
  // GTM console config required)...
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
  // ...and mirror into the dataLayer so GTM-side tags can use it too.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function ConversionEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";

      if (href.includes("forms.gle") || href.includes("forms.google.com")) {
        push("generate_lead", {
          method: "intake_form",
          link_url: href,
          link_text: anchor.textContent?.trim().slice(0, 100) || "",
        });
      } else if (href.startsWith("tel:")) {
        push("phone_click", {
          phone_number: href.replace(/^tel:/, ""),
          link_text: anchor.textContent?.trim().slice(0, 100) || "",
        });
      } else if (href.startsWith("mailto:")) {
        push("email_click", {
          email_address: href.replace(/^mailto:/, ""),
          link_text: anchor.textContent?.trim().slice(0, 100) || "",
        });
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
