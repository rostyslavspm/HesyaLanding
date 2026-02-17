"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";

export default function AutonomyPromise() {
  return (
    <section className="px-6 py-28" style={{ background: "var(--mid)" }}>
      <FadeIn>
        <div className="glass-elevated mx-auto max-w-2xl rounded-3xl px-8 py-14 text-center sm:px-14">
          <h2 className="mb-8 text-xl font-light leading-relaxed sm:text-2xl">
            Everything stays on your device.
          </h2>

          <div className="mb-6 text-base leading-loose text-foreground-secondary">
            <p>No accounts. No data collection.</p>
            <p>No ads. No algorithms. No tracking. Ever.</p>
          </div>

          <div className="mb-8 text-sm leading-relaxed text-foreground-muted">
            <p>Screen Time permission is optional.</p>
            <p>Detection can be disabled anytime.</p>
            <p>Quiet hours are always respected.</p>
          </div>

          <Link
            href="/privacy"
            className="text-sm text-foreground-muted transition-opacity hover:opacity-70"
          >
            Read our privacy policy &rarr;
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
