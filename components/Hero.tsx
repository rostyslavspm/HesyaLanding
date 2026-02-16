"use client";

import OrbGraphic from "./OrbGraphic";
import AppStoreBadge from "./AppStoreBadge";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <FadeIn>
        <OrbGraphic size={160} />
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          A quiet pause
          <br />
          <span className="text-accent">for your phone.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="max-w-md text-lg leading-relaxed text-foreground-secondary">
          A Lock Screen widget and a short ritual to reset your attention.
          Your anchor word stays visible, and a tap opens a gentle breath.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex flex-col items-center gap-3">
          <AppStoreBadge />
          <p className="text-xs text-foreground-secondary">
            Free &middot; No ads &middot; No tracking
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
