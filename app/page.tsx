import type { Metadata } from "next";
import HeaderV2 from "../components/HeaderV2";
import FooterV2 from "../components/FooterV2";
import HeroV2 from "../components/HeroV2";
import TrustStrip from "../components/TrustStrip";
import SuiteTabs from "../components/SuiteTabs";
import FeatureSections from "../components/FeatureSections";
import EditorialSection from "../components/EditorialSection";
import FinaleV2 from "../components/FinaleV2";

export const metadata: Metadata = {
  title: "Hesya — Name what matters. Stay with it.",
  description:
    "Hesya is an iPhone focus companion: declare one intention, protect a session, and return in your own words when attention drifts. Then a quiet, outcome-neutral reflection. Free, private, no accounts.",
};

export default function Home() {
  return (
    <>
      <HeaderV2 />
      <main id="main" aria-label="Hesya landing page">
        <HeroV2 />
        <TrustStrip />
        <SuiteTabs />
        <FeatureSections />
        <EditorialSection />
        <FinaleV2 />
      </main>
      <FooterV2 />
    </>
  );
}
