import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
          "Applebot",
          "Applebot-Extended",
          "Google-Extended",
          "Googlebot",
          "Bingbot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://hesya.app/sitemap.xml",
    host: "https://hesya.app",
  };
}
