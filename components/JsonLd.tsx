import React from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

/**
 * Renders JSON-LD structured data script tag safely.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Central Organization & Author entity identifiers
 */
export const ORG_ID = "https://hesya.app/#organization";
export const AUTHOR_ID = "https://hesya.app/#author";
export const WEBSITE_ID = "https://hesya.app/#website";
export const APP_ID = "https://hesya.app/#app";

/**
 * Root Schema.org Graph uniting WebSite, SoftwareApplication, Organization, and Creator.
 */
export const rootKnowledgeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: "https://hesya.app",
      name: "Hesya",
      alternateName: ["Hesya Focus", "Hesya App", "Hesya: Return to what matters"],
      description:
        "A calm iPhone companion: name one intention, notice when attention drifts, and return without guilt. Free, private, no accounts.",
      publisher: {
        "@id": ORG_ID,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Hesya",
      url: "https://hesya.app",
      logo: {
        "@type": "ImageObject",
        url: "https://hesya.app/favicon.png",
        width: 512,
        height: 512,
      },
      founder: {
        "@id": AUTHOR_ID,
      },
      sameAs: [
        "https://apps.apple.com/app/hesya/id6744040718",
      ],
    },
    {
      "@type": "Person",
      "@id": AUTHOR_ID,
      name: "Rostyslav Slobodianiuk",
      jobTitle: "Founder & Developer",
      url: "https://hesya.app",
    },
    {
      "@type": ["SoftwareApplication", "MobileApplication"],
      "@id": APP_ID,
      name: "Hesya",
      operatingSystem: "iOS 17.0 or later",
      applicationCategory: "LifestyleApplication",
      applicationSubCategory: "Mindful Focus & Productivity",
      downloadUrl: "https://apps.apple.com/app/hesya/id6744040718",
      installUrl: "https://apps.apple.com/app/hesya/id6744040718",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      description:
        "Hesya is a free iPhone companion for holding one intention at a time. Name what matters, and when your attention drifts, a quiet cue returns you to your own words — no blocking, no streaks, no scores, no accounts.",
      url: "https://hesya.app",
      author: {
        "@id": AUTHOR_ID,
      },
      publisher: {
        "@id": ORG_ID,
      },
      featureList: [
        "Declare one intention at a time in your own words",
        "Screen Time drift detection without recording or seeing app activity",
        "Non-punitive return cues with equal choices (keep going, step away, not now)",
        "Physiological sigh three-breath transition pause",
        "Outcome-neutral reflection journal without streaks or moralizing scores",
        "Lock Screen widget, Home Screen widget, and macOS menu bar Live Activity",
        "100% on-device private data with zero external tracking identifiers",
      ],
      screenshot: [
        "https://hesya.app/screenshots/screen-declare.png",
        "https://hesya.app/screenshots/screen-return.png",
        "https://hesya.app/screenshots/screen-journal.png",
        "https://hesya.app/screenshots/screen-homescreen.png",
      ],
    },
  ],
};

/**
 * Creates BreadcrumbList structured data for rich snippet navigation.
 */
export function createBreadcrumbs(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://hesya.app${item.path}`,
    })),
  };
}

/**
 * Creates Article structured data for essays and manifesto content.
 */
export function createArticleJsonLd({
  headline,
  description,
  url,
  datePublished = "2026-06-16",
  dateModified = "2026-06-16",
}: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    inLanguage: "en-US",
    datePublished,
    dateModified,
    author: {
      "@id": AUTHOR_ID,
    },
    publisher: {
      "@id": ORG_ID,
    },
    isPartOf: {
      "@id": WEBSITE_ID,
    },
  };
}

/**
 * Creates FAQPage structured data for support and documentation.
 */
export function createFaqJsonLd(
  faqs: Array<{ question: string; answer: string }>,
  pageUrl = "https://hesya.app/support"
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
