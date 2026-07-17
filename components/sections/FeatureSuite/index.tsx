"use client";

import { useRef } from "react";
import FeatureCard from "./FeatureCard";
import FeatureContentStack from "./FeatureContentStack";
import FeaturePhoneStage from "./FeaturePhoneStage";
import SuiteTabs from "./SuiteTabs";
import WhisperLine from "@/components/ui/WhisperLine";
import { SECTIONS, TYPE } from "@/lib/design-system";
import { useChromeHeight } from "@/hooks/useChromeHeight";
import { useFeaturePinScroll } from "@/hooks/useFeaturePinScroll";

export default function FeatureSuite() {
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const stickyChromeRef = useRef<HTMLElement>(null);
  const { activeId, scrollToFeature } = useFeaturePinScroll(pinContainerRef);

  useChromeHeight(stickyChromeRef, "--suite-sticky-height");

  return (
    <section id="features" aria-label="What Hesya offers" className={`${SECTIONS.stone} section-bleed-x section-pad`}>
      <div className="container-marketing">
        <header
          ref={stickyChromeRef}
          data-chrome="feature-suite-sticky"
          className="sticky z-[var(--z-sticky-subnav)] bg-[var(--color-stone-100)]"
          style={{ top: "var(--header-height)" }}
        >
          <div className="py-8 md:py-6">
            <h2 className={`${TYPE.suiteHeading} max-w-[900px]`}>
              What Hesya offers
            </h2>
          </div>

          <WhisperLine className="whisper-line--light" />
          <SuiteTabs activeId={activeId} onSelect={scrollToFeature} />
        </header>

        <div ref={pinContainerRef} className="features-pin-container hidden md:block">
          <div className="sticky-wrapper">
            <div className="feature-deck-grid">
              <FeatureContentStack />
              <FeaturePhoneStage />
            </div>
          </div>
        </div>

        <div className="feature-mobile-stack md:hidden">
          <WhisperLine className="whisper-line--light mt-6" />
          <FeatureCard />
        </div>
      </div>
    </section>
  );
}
