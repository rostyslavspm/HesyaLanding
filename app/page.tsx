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
  title: "Hesya — Notice when you drift. Return when you choose.",
  description: "Hesya notices when your screen time drifts and offers a gentle ritual to return to presence. Inspired by hesychia, the ancient practice of inner stillness. Free, private, on-device only.",
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
