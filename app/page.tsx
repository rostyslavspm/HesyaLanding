import type { Metadata } from "next";
import MarketingChrome from "../components/MarketingChrome";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import FeatureSuite from "../components/sections/FeatureSuite";
import RecognitionSection from "../components/sections/RecognitionSection";
import ManifestoTeaser from "../components/sections/ManifestoTeaser";
import DownloadSection from "../components/sections/DownloadSection";

export const metadata: Metadata = {
  title: "Hesya — Return to what matters",
  description:
    "A calm iPhone companion: name one intention, notice when attention drifts, and return without guilt. Free, private, no accounts. Get the beta on TestFlight.",
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
