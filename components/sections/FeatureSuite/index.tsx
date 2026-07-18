"use client";

import FeatureContentStack from "./FeatureContentStack";
import FeaturePhoneStage from "./FeaturePhoneStage";
import SuiteTabs from "./SuiteTabs";
import WhisperLine from "@/components/ui/WhisperLine";
import { SECTIONS, TYPE } from "@/lib/design-system";
import { useFeatureSuite } from "@/hooks/useFeatureSuite";

export default function FeatureSuite() {
  const { activeId, selectFeature } = useFeatureSuite();

  return (
    <section
      id="features"
      aria-label="What Hesya offers"
      className={`${SECTIONS.stone} section-bleed-x section-pad`}
    >
      <div className="container-marketing">
        <header className="feature-suite-intro">
          <h2 className={`${TYPE.suiteHeading} max-w-[900px]`}>
            What Hesya offers
          </h2>

          <WhisperLine className="whisper-line--light mt-6 md:mt-8" />
          <SuiteTabs activeId={activeId} onSelect={selectFeature} />
        </header>

        <div className="feature-suite-deck">
          <div className="feature-deck-grid">
            <FeatureContentStack activeId={activeId} />
            <FeaturePhoneStage activeId={activeId} />
          </div>
        </div>
      </div>
    </section>
  );
}
