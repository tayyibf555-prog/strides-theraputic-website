import type { NextConfig } from "next";
import path from "node:path";

// 301/308 redirect map for legacy Wix URLs left in Google's index after the
// Wix → Next.js migration. Preserves whatever link equity those old URLs held
// and stops Google serving dead "| Mysite" pages.
//
// The slugs below are the ones confirmed from the live `site:` index check.
// TODO (once GSC access lands): pull the full "Pages" report and add any
// remaining legacy slugs — Wix commonly emits /service-page/*, /post/*, and
// auto-numbered slugs like /copy-of-*.
const legacyRedirects = [
  { source: "/home", destination: "/", permanent: true },
  { source: "/about-us-1", destination: "/about", permanent: true },
  { source: "/about-us", destination: "/about", permanent: true },
  { source: "/contact-8", destination: "/contact", permanent: true },
  { source: "/contact-1", destination: "/contact", permanent: true },
  { source: "/our-team", destination: "/team", permanent: true },
  { source: "/team-1", destination: "/team", permanent: true },
  { source: "/services-1", destination: "/services", permanent: true },
  // Wix service-page pattern → new services hub (narrow to individual service
  // slugs once GSC confirms which existed).
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
