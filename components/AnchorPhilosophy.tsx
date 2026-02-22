"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./motion/Reveal";
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
        <Reveal delay={0.15} duration={1.5} className="shrink-0 md:flex-1 flex justify-center md:justify-start">
          <div className="relative max-w-[260px] w-full aspect-[450/920]" title="affect label">
            {!imageError && (
              <Image
                src="/screenshots/screen-affect.png"
                alt="Hesya affect label selection screen"
                width={450}
                height={920}
                className="w-full h-auto block"
                onError={() => setImageError(true)}
              />
            )}
            {imageError && (
              <span className="absolute inset-0 flex items-center justify-center text-micro" style={{ color: "var(--foreground-muted)", opacity: 0.4 }} aria-hidden="true">affect label</span>
            )}
          </div>
        </Reveal>

        {/* ── Copy ── */}
        <div className="flex flex-col gap-8 md:flex-1">
          <Reveal delay={0.05}>
            <SectionEyebrow>Your anchor</SectionEyebrow>
          </Reveal>

          {/* Anchor word — ceremonial serif, large, tracked */}
          <Reveal delay={0.15}>
            <p
              className="text-anchor"
              style={{ color: "var(--wave)" }}
            >
              SERENITY
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p
              className="text-body max-w-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              Choose one word that matters to you.
              A value. A reminder of what you&apos;re for.{" "}
              <Link href="/support" className="underline underline-offset-2 transition-opacity hover:opacity-70" style={{ color: "var(--wave)" }}>Learn more →</Link>
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <p
              className="text-body max-w-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              It lives on your lock screen and widget.
              Always visible. Never urgent.
              At the end of every ritual, it&apos;s the last thing you see.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
