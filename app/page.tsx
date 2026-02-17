import Hero from "../components/Hero";
import HesychiaSection from "../components/HesychiaSection";
import PatternSection from "../components/PatternSection";
import AnchorPhilosophy from "../components/AnchorPhilosophy";
import RitualSection from "../components/RitualSection";
import AutonomyPromise from "../components/AutonomyPromise";
import ClosingCTA from "../components/ClosingCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HesychiaSection />
        <PatternSection />
        <AnchorPhilosophy />
        <RitualSection />
        <AutonomyPromise />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
