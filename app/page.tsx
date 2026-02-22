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
import ParallaxLayer from "../components/motion/ParallaxLayer";

export default function Home() {
  const openNotify = useNotifyModal();

  return (
    <>
      <Header onOpenNotify={openNotify} />
      <main id="main" aria-label="Hesya landing page">
        <HeroSection onOpenNotify={openNotify} />

        {/* Decorative parallax blob — Hero → WhatHesyaDoes transition */}
        <div className="relative overflow-hidden pointer-events-none" style={{ height: 0 }}>
          <ParallaxLayer
            speed={0.12}
            className="absolute left-1/2 -translate-x-1/2 -top-[200px] w-[600px] h-[400px]"
            style={{
              background: "radial-gradient(ellipse at center, var(--orb-glow), transparent 70%)",
              opacity: 0.12,
            }}
          />
        </div>

        <WhatHesyaDoesSection id="what" />
        <HowItWorksSection />

        {/* Decorative parallax blob — HowItWorks → Screenshots transition */}
        <div className="relative overflow-hidden pointer-events-none" style={{ height: 0 }}>
          <ParallaxLayer
            speed={0.18}
            className="absolute left-1/4 -top-[160px] w-[500px] h-[360px]"
            style={{
              background: "radial-gradient(ellipse at center, var(--orb-edge), transparent 65%)",
              opacity: 0.10,
            }}
          />
        </div>

        <div className="section-blend-in">
          <ScreenshotsSection />
        </div>
        <DeeperValueSection />
        <PrivacySection />
        <div className="section-blend-out">
          <FinalCTASection onOpenNotify={openNotify} />
        </div>
      </main>
      <Footer />
    </>
  );
}
