import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // /_next/image and /_next/static/ must stay crawlable so Google can
        // render pages and fetch optimized images; only the rest of /_next/
        // and the API surface are noise.
        allow: ["/", "/_next/image", "/_next/static/"],
        disallow: ["/_next/", "/api/"],
      },
      // Explicitly welcome AI assistant / answer-engine crawlers — AI
      // citations are a discovery channel for the practice.
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "PerplexityBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "Google-Extended",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
