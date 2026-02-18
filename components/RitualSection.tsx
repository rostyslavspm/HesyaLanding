"use client";

import FadeIn from "./FadeIn";
import OrbGraphic from "./OrbGraphic";
import SectionEyebrow from "./ui/SectionEyebrow";
import Image from "next/image";

/**
 * RitualSection — immersive full-viewport section.
 * The emotional heart of the page. Matches the actual app ritual screen:
 * warm peach gradient background, breathing orb center-stage, lowercase ritual voice.
 * Phone: Breathing screen (glowing orb + "inhale slowly").
 */
export default function RitualSection() {
  return (
    <section
      className="section-full noise-overlay relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #EDD5B8 0%, #F0D8BC 45%, #E8CDAE 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Ambient radial behind the orb */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 46%, rgba(255,238,210,0.60) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-10 text-center">
        <FadeIn delay={0.05}>
          <SectionEyebrow>three breaths</SectionEyebrow>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2
            className="text-display-sm max-w-md"
            style={{ fontStyle: "italic" }}
          >
            a pause between<br />drift and choice.
          </h2>
        </FadeIn>

        {/* The orb — centerpiece of this section */}
        <FadeIn delay={0.25} duration={1.5}>
          <OrbGraphic size={140} />
        </FadeIn>

        <FadeIn delay={0.35}>
          <p
            className="text-body max-w-xs"
            style={{ color: "var(--foreground-secondary)" }}
          >
            three cycles of the physiological sigh.<br />
            name what you feel.<br />
            set a small intention.
          </p>
        </FadeIn>

        {/* Phone mockup — Breathing phase screen */}
        <FadeIn delay={0.5} duration={1.5}>
          <div
            className="phone-placeholder glass"
            style={{ width: 220, height: 448, borderRadius: 34 }}
            title="breathing screen — image pending"
          >
            <Image
              src="/screenshots/screen-breathing.png"
              alt="Hesya breathing ritual screen"
              fill
              className="object-cover"
              style={{ borderRadius: 34 }}
              onError={(e) => { (e.target as HTMLElement).style.display = "none"; }}
            />
            <span className="absolute" style={{ opacity: 0.4 }}>breathing screen</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
