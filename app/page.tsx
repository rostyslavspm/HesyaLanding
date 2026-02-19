import HeroSection from "../components/HeroSection";
import WhatHesyaDoesSection from "../components/WhatHesyaDoesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import DeeperValueSection from "../components/DeeperValueSection";
import ScreenshotsSection from "../components/ScreenshotsSection";
import PrivacySection from "../components/PrivacySection";
import ComingSoonSection from "../components/ComingSoonSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main id="main" aria-label="Hesya landing page">
        <HeroSection />
        <WhatHesyaDoesSection />
        <HowItWorksSection />
        <DeeperValueSection />
        <ScreenshotsSection />
        <PrivacySection />
        <ComingSoonSection />
      </main>
      <Footer />
    </>
  );
}
