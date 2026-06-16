import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TheHero from "../components/TheHero";
import TheValues from "../components/TheValues";
import ThePearl from "../components/ThePearl";
import TheShift from "../components/TheShift";
import TheWidget from "../components/TheWidget";
import TheFinale from "../components/TheFinale";

export const metadata: Metadata = {
  title: "Hesya — Name what matters. Stay with it.",
  description: "Hesya is an iPhone focus companion: declare one intention, protect a session, and return in your own words when attention drifts. Then a quiet, outcome-neutral reflection. Free, private, no accounts.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" aria-label="Hesya landing page">
        <TheHero />
        <TheShift />
        <ThePearl />
        <TheValues />
        <TheWidget />
        <TheFinale />
      </main>
      <Footer />
    </>
  );
}
