import Hero from "../components/Hero";
import AnchorPhilosophy from "../components/AnchorPhilosophy";
import PatternSection from "../components/PatternSection";
import RitualSection from "../components/RitualSection";
import AutonomyPromise from "../components/AutonomyPromise";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AnchorPhilosophy />
        <PatternSection />
        <RitualSection />
        <AutonomyPromise />
      </main>
      <Footer />
    </>
  );
}
