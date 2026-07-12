import type { NextConfig } from "next";
import path from "node:path";

// 301/308 redirect map for legacy Wix URLs left in Google's index after the
// Wix → Next.js migration. Preserves whatever link equity those old URLs held
// and stops Google serving dead "| Mysite" pages.
//
// Complete legacy-URL list confirmed from GSC Search Analytics (16 months of
// page-level data, pulled 2026-07-12). Targets chosen by matching each old
// page's actual query profile: PBS pages ranked for "dda ..." queries → wa-dda.
const legacyRedirects = [
  { source: "/home", destination: "/", permanent: true },
  { source: "/about-us-1", destination: "/about", permanent: true },
  { source: "/about-us", destination: "/about", permanent: true },
  { source: "/contact-8", destination: "/contact", permanent: true },
  { source: "/contact-1", destination: "/contact", permanent: true },
  { source: "/our-team", destination: "/team", permanent: true },
  { source: "/team-1", destination: "/team", permanent: true },
  { source: "/services-1", destination: "/services", permanent: true },
  // GSC-confirmed Wix pages (impressions in the last 16 months):
  { source: "/aba-therapy", destination: "/services/aba-therapy", permanent: true },
  {
    source: "/positive-behavior-supports",
    destination: "/services/wa-dda",
    permanent: true,
  },
  {
    source: "/copy-of-positive-behavior-supports",
    destination: "/services/wa-dda",
    permanent: true,
  },
  {
    source: "/social-groups",
    destination: "/services/social-groups-respite",
    permanent: true,
  },
  {
    source: "/social-group-registration",
    destination: "/services/social-groups-respite",
    permanent: true,
  },
  // ~25 Wix event pages (bowling nights, paint nights, etc.) all map to the
  // social groups & respite service that hosted them.
  {
    source: "/event-details/:slug*",
    destination: "/services/social-groups-respite",
    permanent: true,
  },
  // Wix service-page pattern (none had impressions, kept as a safety net).
  { source: "/service-page/:slug*", destination: "/services", permanent: true },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
