"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";

export default function PrivacyHighlight() {
  return (
    <section className="px-6 py-24">
      <FadeIn>
        <div className="mx-auto max-w-2xl rounded-3xl bg-surface-elevated p-10 text-center sm:p-14">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2L4 6v5c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Everything stays on your device.
          </h2>

          <p className="mb-6 text-foreground-secondary leading-relaxed">
            No data collection. No accounts. No ads. No tracking.
            Hesya never records which apps you use — it only notices patterns.
            You can disable detection anytime.
          </p>

          <Link
            href="/privacy"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-dark"
          >
            Read our privacy policy &rarr;
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
