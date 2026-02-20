"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";

/**
 * Privacy — trust panel with one crisp promise + 3 proofs.
 */
export default function PrivacySection({ id = "privacy" }: { id?: string }) {
  return (
    <section id={id} className="section-standard bg-chapter-soft" aria-label="Privacy">
      <div className="container-hesya">
        <div className="mx-auto max-w-[42rem] text-center">
          <FadeIn delay={0}>
            <p className="text-eyebrow">PRIVACY</p>

            <h2 className="mt-4 text-display-sm" style={{ fontStyle: "italic" }}>
              Private by design.
            </h2>

            <p className="mt-4 text-body text-reading" style={{ color: "var(--foreground-secondary)" }}>
              Hesya works on your device. No accounts. No analytics. No ads.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="glass mt-10 rounded-[var(--radius-lg)] px-8 py-8 text-left">
              <p className="text-body-sm text-reading">• Everything stays on your iPhone.</p>
              <p className="mt-3 text-body-sm text-reading">• Pattern detection is local — not sent anywhere.</p>
              <p className="mt-3 text-body-sm text-reading">• You can disable permissions anytime in iOS Settings.</p>

              <Link
                href="/privacy"
                className="mt-6 inline-block text-micro"
                style={{ color: "var(--foreground-muted)" }}
              >
                Read the privacy policy
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
