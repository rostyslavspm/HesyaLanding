"use client";

import { useState } from "react";
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
  const [imageError, setImageError] = useState(false);
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
        <FadeIn delay={0.05}>
          <SectionEyebrow>Three breaths</SectionEyebrow>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2
            className="text-display-sm max-w-md"
            style={{ fontStyle: "italic" }}
          >
            A pause between<br />drift and choice.
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
            Three cycles of the physiological sigh.<br />
            Name what you feel.<br />
            Set a small intention.
          </p>
        </FadeIn>

        {/* Phone mockup — Breathing phase screen */}
        <FadeIn delay={0.5} duration={1.5}>
          <div className="relative max-w-[260px] w-full aspect-[450/920]" title="breathing screen">
            {!imageError && (
              <Image
                src="/screenshots/screen-breathing.png"
                alt="Hesya breathing ritual screen"
                width={450}
                height={920}
                className="w-full h-auto block"
                onError={() => setImageError(true)}
              />
            )}
            {imageError && (
              <span className="absolute inset-0 flex items-center justify-center text-micro" style={{ color: "var(--foreground-muted)", opacity: 0.4 }} aria-hidden="true">breathing screen</span>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
