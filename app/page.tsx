import HeroSection from "../components/HeroSection";
import HesychiaSection from "../components/HesychiaSection";
import PatternSection from "../components/PatternSection";
import RitualSection from "../components/RitualSection";
import AnchorPhilosophy from "../components/AnchorPhilosophy";
import AutonomyPromise from "../components/AutonomyPromise";
import ClosingCTA from "../components/ClosingCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main aria-label="Hesya landing page">
        {/* 1. Hero — full-viewport, orb + headline + home screen mockup */}
        <HeroSection />

        {/* 2. Hesychia — pure typography, etymology, no images */}
        <HesychiaSection />

        {/* 3. Drift — what hesya notices, lock screen widget mockup */}
        <PatternSection />

        {/* 4. Ritual — immersive gradient, breathing orb, ritual screen mockup */}
        <RitualSection />

        {/* 5. Anchor — affect label mockup, anchor word display */}
        <AnchorPhilosophy />

        {/* 6. Privacy — elevated glass card */}
        <AutonomyPromise />

        {/* 7. Closing CTA — large orb, coming soon */}
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
