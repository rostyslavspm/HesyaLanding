"use client";

import { useNotifyModal } from "../components/NotifyModalProvider";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhatHesyaDoesSection from "../components/WhatHesyaDoesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import DeeperValueSection from "../components/DeeperValueSection";
import ScreenshotsSection from "../components/ScreenshotsSection";
import PrivacySection from "../components/PrivacySection";
import FinalCTASection from "../components/FinalCTASection";
import Footer from "../components/Footer";

export default function Home() {
  const openNotify = useNotifyModal();

  return (
    <>
      <Header onOpenNotify={openNotify} />
      <main id="main" aria-label="Hesya landing page">
        <HeroSection onOpenNotify={openNotify} />
        <WhatHesyaDoesSection id="what" />
        <HowItWorksSection />
        <ScreenshotsSection />
        <DeeperValueSection />
        <PrivacySection />
        <FinalCTASection onOpenNotify={openNotify} />
      </main>
      <Footer />
    </>
  );
}
