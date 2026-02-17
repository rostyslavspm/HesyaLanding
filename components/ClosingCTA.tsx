"use client";

import OrbGraphic from "./OrbGraphic";
import AppStoreBadge from "./AppStoreBadge";
import FadeIn from "./FadeIn";

export default function ClosingCTA() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-center">
        <FadeIn>
          <OrbGraphic size={100} />
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-lg font-light leading-relaxed text-foreground-secondary sm:text-xl">
            Your mind has always known how to return.
            <br />
            Hesya helps you notice when to start.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <AppStoreBadge />
        </FadeIn>
      </div>
    </section>
  );
}
