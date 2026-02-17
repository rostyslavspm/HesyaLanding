"use client";

import FadeIn from "./FadeIn";

export default function AnchorPhilosophy() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-xl text-center">
        <FadeIn>
          <span className="mb-6 block text-xs uppercase tracking-[0.15em] text-foreground-muted">
            Your anchor
          </span>
          <h2 className="mb-8 text-2xl font-light tracking-tight sm:text-3xl">
            Choose one word.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-6 text-base leading-relaxed text-foreground-secondary">
            A value. A reminder of what you&apos;re for.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mb-8 font-serif text-xl tracking-[0.06em]" style={{ color: "var(--wave)" }}>
            Peace. Clarity. Presence. Family. Focus.
          </p>
          <p className="mb-10 text-base leading-relaxed text-foreground-secondary">
            Or anything that matters to you.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} duration={1.0}>
          <p className="text-base leading-relaxed text-foreground-secondary">
            It lives on your Lock Screen.
            <br />
            Always visible. Never urgent.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
