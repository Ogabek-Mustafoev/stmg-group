import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://stmg-group.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: "https://stmg-group.com",
          ru: "https://stmg-group.com/ru",
          uz: "https://stmg-group.com/uz",
        },
      },
    },
    {
      url: "https://stmg-group.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://stmg-group.com/about",
          ru: "https://stmg-group.com/ru/about",
          uz: "https://stmg-group.com/uz/about",
        },
      },
    },
    {
      url: "https://stmg-group.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "https://stmg-group.com/services",
          ru: "https://stmg-group.com/ru/services",
          uz: "https://stmg-group.com/uz/services",
        },
      },
    },
    {
      url: "https://stmg-group.com/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: "https://stmg-group.com/projects",
          ru: "https://stmg-group.com/ru/projects",
          uz: "https://stmg-group.com/uz/projects",
        },
      },
    },
  ];
}
