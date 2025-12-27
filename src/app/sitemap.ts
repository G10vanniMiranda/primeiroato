import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();
  const routes = [
    "/",
    "/sobre",
    "/portfolio",
    "/servico",
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: lastMod,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
