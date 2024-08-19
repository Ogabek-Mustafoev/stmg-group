import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    host: "stmg-group.com",
    sitemap: "https://stmg-group.com/sitemap.xml",
  };
}
