import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/content";

// Programmatic sitemap. Add new marketing/content routes to STATIC_ROUTES as
// they ship (blog, insurance, locations pages, etc.) so Google discovers them.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = SITE.url;

  const STATIC_ROUTES: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/team", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${base}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...serviceEntries];
}
