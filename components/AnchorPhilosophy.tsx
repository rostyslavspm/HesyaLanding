"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionEyebrow from "./ui/SectionEyebrow";
import Image from "next/image";

/**
 * AnchorSection (AnchorPhilosophy) — the anchor word concept.
 * Two-column reverse: phone (affect label screen) left, copy right.
 * The anchor word displayed in large tracked serif — the app's ceremonial font.
 * Phone: Affect label screen showing the 4 emotional state chips.
 */
export default function AnchorPhilosophy() {
  const [imageError, setImageError] = useState(false);
  return (
    <section className="section-standard noise-overlay px-6" aria-label="Your anchor - Choose one word">
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-14 md:flex-row md:items-center md:gap-16">

        {/* ── Phone Mockup — Affect label screen ── */}
        <FadeIn delay={0.15} duration={1.5} className="shrink-0 md:flex-1 flex justify-center md:justify-start">
          <div className="phone-placeholder glass" title="affect label">
            {!imageError && (
              <Image
                src="/screenshots/screen-affect.png"
                alt="Hesya affect label selection screen"
                fill
                className="object-cover rounded-[40px]"
                onError={() => setImageError(true)}
              />
            )}
            {imageError && (
              <span className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0.4 }} aria-hidden="true">affect label</span>
            )}
          </div>
        </FadeIn>

        {/* ── Copy ── */}
        <div className="flex flex-col gap-8 md:flex-1">
          <FadeIn delay={0.05}>
            <SectionEyebrow>your anchor</SectionEyebrow>
          </FadeIn>

          {/* Anchor word — ceremonial serif, large, tracked */}
          <FadeIn delay={0.15}>
            <p
              className="text-anchor"
              style={{ color: "var(--wave)" }}
            >
              SERENITY
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p
              className="text-body max-w-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              choose one word that matters to you.
              a value. a reminder of what you&apos;re for.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p
              className="text-body max-w-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              it lives on your lock screen and widget.
              always visible. never urgent.
              at the end of every ritual, it&apos;s the last thing you see.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
