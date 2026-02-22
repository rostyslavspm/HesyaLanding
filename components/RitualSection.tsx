"use client";

import Reveal from "./motion/Reveal";
import OrbGraphic from "./OrbGraphic";
import SectionEyebrow from "./ui/SectionEyebrow";
import PhoneMockup from "./ui/PhoneMockup";

/**
 * RitualSection — immersive full-viewport section.
 * The emotional heart of the page. Matches the actual app ritual screen:
 * warm peach gradient background, breathing orb center-stage, lowercase ritual voice.
 * Phone: Breathing screen (glowing orb + "inhale slowly").
 */
export default function RitualSection() {
  return (
    <section
      id="ritual"
      className="section-full noise-overlay relative overflow-hidden bg-fixed-fallback"
      aria-label="Three breaths - A pause between drift and choice"
      style={{
        background: "linear-gradient(160deg, var(--base) 0%, var(--mid) 45%, var(--accent) 100%)",
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
        <Reveal delay={0.05}>
          <SectionEyebrow>Three breaths</SectionEyebrow>
        </Reveal>

        <Reveal delay={0.15}>
          <h2
            className="text-display-sm max-w-md"
            style={{ fontStyle: "italic" }}
          >
            A pause between<br />drift and choice.
          </h2>
        </Reveal>

        {/* The orb — centerpiece of this section */}
        <Reveal delay={0.25} duration={1.5}>
          <OrbGraphic size={140} />
        </Reveal>

        <Reveal delay={0.35}>
          <p
            className="text-body max-w-xs"
            style={{ color: "var(--foreground)" }}
          >
            Three cycles of the physiological sigh.<br />
            Name what you feel.<br />
            Set a small intention.
          </p>
        </Reveal>

        {/* Phone mockup — Breathing phase screen */}
        <Reveal delay={0.5} duration={1.5}>
          <PhoneMockup
            src="/screenshots/screen-breathing.png"
            alt="Hesya breathing ritual screen"
            fallbackLabel="breathing screen"
          />
        </Reveal>
      </div>
    </section>
  );
}
