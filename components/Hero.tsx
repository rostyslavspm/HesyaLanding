"use client";

import OrbGraphic from "./OrbGraphic";
import PhoneFrame from "./PhoneFrame";
import AppStoreBadge from "./AppStoreBadge";
import FadeIn from "./FadeIn";

function StyledHomeScreen() {
  return (
    <div
      className="flex h-full flex-col items-center justify-center gap-6"
      style={{ background: "linear-gradient(180deg, var(--base) 0%, var(--mid) 100%)" }}
    >
      <OrbGraphic size={90} />
      <p
        className="font-serif text-lg tracking-[0.06em] uppercase"
        style={{ color: "var(--wave)" }}
      >
        Presence
      </p>
      <div
        className="glass rounded-2xl px-6 py-2.5 text-sm"
        style={{ color: "var(--foreground-secondary)" }}
      >
        A breath
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-16 md:flex-row md:gap-20">
        {/* Phone mockup */}
        <FadeIn className="shrink-0">
          <PhoneFrame>
            <StyledHomeScreen />
          </PhoneFrame>
        </FadeIn>

        {/* Copy */}
        <div className="flex flex-col items-center gap-8 text-center md:items-start md:text-left">
          <FadeIn delay={0.3}>
            <h1 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
              Notice when you drift.
              <br />
              Return when you choose.
            </h1>
          </FadeIn>

          <FadeIn delay={0.5}>
            <AppStoreBadge />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
