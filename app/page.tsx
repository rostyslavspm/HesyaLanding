import type { Metadata } from "next";
import MarketingChrome from "../components/MarketingChrome";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import FeatureSuite from "../components/sections/FeatureSuite";
import RecognitionSection from "../components/sections/RecognitionSection";
import ManifestoTeaser from "../components/sections/ManifestoTeaser";
import DownloadSection from "../components/sections/DownloadSection";

export const metadata: Metadata = {
  title: "Hesya — Mindful Focus & Intention Tracker for iPhone",
  description:
    "Hesya is a free iPhone app for holding one intention at a time. Name what matters, and when your attention drifts, a quiet cue returns you to your own words — no blocking, no streaks, no scores, no accounts. Free on the App Store.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hesya — Mindful Focus & Intention Tracker for iPhone",
    description:
      "Hesya is a free iPhone app for holding one intention at a time. Name what matters, and when your attention drifts, a quiet cue returns you to your own words. Free, private, no accounts.",
    url: "https://hesya.app",
    siteName: "Hesya",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hesya — Mindful Focus & Intention Tracker for iPhone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hesya — Mindful Focus & Intention Tracker for iPhone",
    description:
      "A calm iPhone companion: name one intention, notice when attention drifts, and return without guilt. Free, private, no accounts.",
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  return (
    <>
      <MarketingChrome variant="dark" />
      <main id="main" aria-label="Hesya landing page">
        <HeroSection />
        <RecognitionSection />
        <FeatureSuite />
        <ManifestoTeaser />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
