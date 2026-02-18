"use client";

import FadeIn from "./FadeIn";
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
    <section className="section-standard noise-overlay px-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-14 md:flex-row md:items-center md:gap-16">

        {/* ── Copy ── */}
        <div className="flex flex-col gap-8 md:flex-1">
          <FadeIn delay={0.05}>
            <SectionEyebrow>what hesya notices</SectionEyebrow>
          </FadeIn>

          <FadeIn delay={0.12}>
            <h2 className="text-display-sm">
              drift has<br />a shape.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="text-body max-w-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              hesya watches patterns in how you use your phone —
              not what you&apos;re doing, just how it flows.
              everything happens on your device. nothing leaves it.
            </p>
          </FadeIn>

          {/* Pattern dots — four states */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col gap-4">
              <PatternDot
                state="calm"
                label="steady pace"
                description="moderate activity, recent ritual"
              />
              <PatternDot
                state="pushing"
                label="long focus session"
                description="60+ minutes in one place"
              />
              <PatternDot
                state="overwhelmed"
                label="switching between things"
                description="3–4 app switches, seeking relief"
              />
              <PatternDot
                state="restless"
                label="many quick switches"
                description="5+ rapid switches, seeking stimulation"
              />
            </div>
          </FadeIn>
        </div>

        {/* ── Phone Mockup — Lock screen widget ── */}
        <FadeIn delay={0.15} duration={1.5} className="shrink-0 md:flex-1 flex justify-center md:justify-end">
          <div
            className="phone-placeholder glass"
            title="lock screen widget — image pending"
          >
            <Image
              src="/screenshots/screen-lockscreen.png"
              alt="Hesya lock screen widget"
              fill
              className="object-cover rounded-[40px]"
              onError={(e) => { (e.target as HTMLElement).style.display = "none"; }}
            />
            <span className="absolute" style={{ opacity: 0.4 }}>lock screen</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
