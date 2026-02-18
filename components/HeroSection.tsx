"use client";

import { useState } from "react";
import Link from "next/link";
import AppStoreBadge from "./AppStoreBadge";
import FadeIn from "./FadeIn";
import SectionEyebrow from "./ui/SectionEyebrow";
import Image from "next/image";

/**
 * HeroSection — full-viewport opening.
 * Two-column on desktop: headline + badge left, phone mockup right.
 * Background: the warm mesh gradient from body (no local override needed).
 * Typography: Instrument Serif display + Lato light body.
 * Phone slot: shows Home screen.
 */
export default function HeroSection() {
  return (
    <section className="section-full noise-overlay relative" aria-label="Hero - Notice when you drift">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-16 lg:gap-24">

        {/* ── Copy ── */}
        <div className="flex flex-col items-center gap-7 text-center md:items-start md:flex-1 md:text-left">
          <FadeIn delay={0.05}>
            <SectionEyebrow>For iOS</SectionEyebrow>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="text-display">
              Notice when<br />you drift.
            </h1>
          </FadeIn>

          <FadeIn delay={0.28}>
            <p
              className="text-display-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              Return when<br className="hidden sm:block" /> you choose.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p
              className="text-body max-w-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              Hesya notices when you drift — long focus, rapid switching, restless seeking —
              and offers a <Link href="#ritual" className="underline underline-offset-2 transition-opacity hover:opacity-70" style={{ color: "var(--wave)" }}>quiet ritual</Link> to come back to yourself.
            </p>
          </FadeIn>

          <FadeIn delay={0.55}>
            <AppStoreBadge />
          </FadeIn>
        </div>

        {/* ── Phone Mockup ── */}
        <FadeIn
          delay={0.2}
          duration={1.5}
          className="shrink-0 md:flex-1 flex justify-center md:justify-end"
        >
          <PhoneMockup screen="home" />
        </FadeIn>
      </div>
    </section>
  );
}

/**
 * PhoneMockup — phone frame with screen image or placeholder on error.
 */
function PhoneMockup({ screen }: { screen: string }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative max-w-[260px] w-full aspect-[450/920]" title={`${screen} screen`}>
      {!imageError && (
        <Image
          src={`/screenshots/screen-${screen}.png`}
          alt={`Hesya app ${screen} screen`}
          width={450}
          height={920}
          className="w-full h-auto block"
          onError={() => setImageError(true)}
        />
      )}
      {imageError && (
        <span className="absolute inset-0 flex items-center justify-center text-micro" style={{ color: "var(--foreground-muted)", opacity: 0.5 }} aria-hidden="true">{screen} screen</span>
      )}
    </div>
  );
}
