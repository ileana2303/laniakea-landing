import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.laniakea.gr",
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
