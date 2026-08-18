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

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hesya",
  url: "https://hesya.app",
  description: "A calm iPhone companion: name one intention, notice when attention drifts, and return without guilt.",
};

export const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Hesya",
  operatingSystem: "iOS 17.0 or later",
  applicationCategory: "LifestyleApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Hesya is a free iPhone app for holding one intention at a time. Name what matters, and when your attention drifts, a quiet cue returns you to your own words.",
  url: "https://hesya.app",
  author: {
    "@type": "Person",
    name: "Rostyslav Slobodianiuk",
  },
};
