"use client";

import FeatureBlock from "./FeatureBlock";
import SuiteTabs from "./SuiteTabs";
import WhisperLine from "@/components/ui/WhisperLine";
import { HESYA_FEATURES } from "@/lib/content/features";
import { BTN, SECTIONS, TYPE, URLS } from "@/lib/design-system";
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
            The shape of a session
          </h2>
          <WhisperLine className="whisper-line--light mt-6 md:mt-8" />
        </header>
      </div>

      {/* Docks under the site header and stays for the whole section, so the
       * nav and the invitation are always within reach while reading. */}
      <div className="feature-suite-nav">
        <div className="container-marketing feature-suite-nav-inner">
          <SuiteTabs activeId={activeId} onSelect={selectFeature} />

          <a
            href={URLS.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className={`feature-suite-nav-cta ${BTN.ctaFilled} whitespace-nowrap`}
          >
            Get the app
          </a>
        </div>
      </div>

      <div className="container-marketing">
        <div className="feature-blocks">
          {HESYA_FEATURES.map((feature, index) => (
            <FeatureBlock key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
