"use client";

import OrbGraphic from "./OrbGraphic";
import AppStoreBadge from "./AppStoreBadge";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center gap-10 px-6 py-32 text-center">
      <FadeIn>
        <OrbGraphic size={180} />
      </FadeIn>

      <FadeIn delay={0.15}>
        <p
          className="font-serif text-2xl tracking-[0.06em] uppercase"
          style={{ color: "var(--wave)" }}
        >
          Presence
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <h1 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
          A gentle pause
          <br />
          when you need it.
        </h1>
      </FadeIn>

      <FadeIn delay={0.45}>
        <p className="text-lg text-foreground-secondary">
          Your word. Your rhythm.
        </p>
      </FadeIn>

      <FadeIn delay={0.6}>
        <div className="flex flex-col items-center gap-3">
          <AppStoreBadge />
          <p className="text-xs text-foreground-muted">
            Free &middot; No tracking &middot; On your device
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
