"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import GlassPanel from "./ui/GlassPanel";

/**
 * PrivacySection (AutonomyPromise) — single elevated glass card.
 * Quiet, concise. Four bullet points. Privacy link at bottom.
 * Matches the app's glass card aesthetic (RaycastGlassCard elevated).
 */
export default function AutonomyPromise() {
  return (
    <section className="section-standard noise-overlay px-6">
      <FadeIn>
        <GlassPanel variant="elevated" rounded="3xl" className="mx-auto max-w-lg px-8 py-14 text-center sm:px-12">

          <p className="text-eyebrow mb-6">private by design</p>

          <h2 className="text-heading mb-8">
            Everything stays<br />on your device.
          </h2>

          <ul className="mb-8 space-y-3 text-left">
            {[
              "no accounts. no data collection.",
              "no ads, algorithms, or tracking. ever.",
              "screen time permission is optional.",
              "detection can be disabled anytime.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full"
                  style={{ background: "var(--wave)" }}
                  aria-hidden="true"
                />
                <span className="text-body-sm" style={{ color: "var(--foreground-secondary)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/privacy"
            className="text-micro"
            style={{ color: "var(--foreground-muted)" }}
          >
            read our privacy policy &rarr;
          </Link>
        </GlassPanel>
      </FadeIn>
    </section>
  );
}
