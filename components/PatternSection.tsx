"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./motion/Reveal";
import SectionEyebrow from "./ui/SectionEyebrow";
import PatternDot from "./ui/PatternDot";
import Image from "next/image";

/**
 * DriftSection (PatternSection) — what Hesya notices.
 * Two-column: copy + pattern dots left, phone (lock screen widget) right.
 * The pattern dots visually echo the widget's state indicator colors.
 */
export default function PatternSection() {
  return (
    <section className="section-standard noise-overlay px-6" aria-label="What Hesya notices - Drift has a shape">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-14 md:flex-row md:items-center md:gap-16">

        {/* ── Copy ── */}
        <div className="flex flex-col gap-8 md:flex-1">
          <Reveal delay={0.05}>
            <SectionEyebrow>What Hesya notices</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="text-display-sm">
              Drift has<br />a shape.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="text-body max-w-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              Hesya watches patterns in how you use your phone —
              not what you&apos;re doing, just how it flows.
              Everything happens on your device. Nothing leaves it.{" "}
              <Link href="/privacy" className="underline underline-offset-2 transition-opacity hover:opacity-70" style={{ color: "var(--wave)" }}>Read our privacy policy →</Link>
            </p>
          </Reveal>

          {/* Pattern dots — four states */}
          <Reveal delay={0.3}>
            <div className="flex flex-col gap-4">
              <PatternDot
                state="calm"
                label="Steady pace"
                description="moderate activity, recent ritual"
              />
              <PatternDot
                state="pushing"
                label="Long focus session"
                description="60+ minutes in one place"
              />
              <PatternDot
                state="overwhelmed"
                label="Switching between things"
                description="3–4 app switches, seeking relief"
              />
              <PatternDot
                state="restless"
                label="Many quick switches"
                description="5+ rapid switches, seeking stimulation"
              />
            </div>
          </Reveal>
        </div>

        {/* ── Phone Mockup — Lock screen widget ── */}
        <Reveal delay={0.15} duration={1.5} className="shrink-0 md:flex-1 flex justify-center md:justify-end">
          <PhoneMockupWithFallback
            src="/screenshots/screen-lockscreen.png"
            alt="Hesya lock screen widget"
            fallback="lock screen"
          />
        </Reveal>
      </div>
    </section>
  );
}

function PhoneMockupWithFallback({ src, alt, fallback }: { src: string; alt: string; fallback: string }) {
  const [imageError, setImageError] = useState(false);
  return (
    <div className="relative max-w-[260px] w-full aspect-[450/920]" title={fallback}>
      {!imageError && (
        <Image
          src={src}
          alt={alt}
          width={450}
          height={920}
          className="w-full h-auto block"
          onError={() => setImageError(true)}
        />
      )}
      {imageError && (
        <span className="absolute inset-0 flex items-center justify-center text-micro" style={{ color: "var(--foreground-muted)", opacity: 0.4 }} aria-hidden="true">{fallback}</span>
      )}
    </div>
  );
}
