import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import PrivacyHighlight from "../components/PrivacyHighlight";
import PhoneFrame from "../components/PhoneFrame";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HowItWorks />

        <section className="px-6 py-16">
          <div className="mx-auto max-w-sm">
            <PhoneFrame />
          </div>
        </section>

        <Features />
        <PrivacyHighlight />
      </main>
      <Footer />
    </>
  );
}
