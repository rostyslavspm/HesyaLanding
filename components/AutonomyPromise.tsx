"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";

export default function AutonomyPromise() {
  return (
    <section className="px-6 py-28">
      <FadeIn>
        <div className="glass-elevated mx-auto max-w-2xl rounded-3xl px-8 py-14 text-center sm:px-14">
          <p className="mb-8 text-xl font-light leading-relaxed sm:text-2xl">
            This app exists to support your autonomy,
            <br className="hidden sm:block" />
            not to manage your behavior.
          </p>

          <div className="mb-8 space-y-1 text-sm text-foreground-secondary">
            <p>Everything happens on your device.</p>
            <p>No data collection. No accounts. No ads.</p>
            <p>Screen Time permission is optional.</p>
            <p>Reminders respect quiet hours.</p>
            <p>You can disable detection anytime.</p>
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
