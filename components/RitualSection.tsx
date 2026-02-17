"use client";

import FadeIn from "./FadeIn";
import BreathingCircle from "./BreathingCircle";

export default function RitualSection() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-xl text-center">
        <FadeIn duration={0.9}>
          <span className="mb-6 block text-xs uppercase tracking-[0.15em] text-foreground-muted">
            The ritual
          </span>
        </FadeIn>

        <FadeIn delay={0.1} duration={0.9}>
          <div className="mb-10">
            <BreathingCircle size={120} />
          </div>
        </FadeIn>

        <FadeIn delay={0.2} duration={0.9}>
          <h2 className="mb-8 text-2xl font-light tracking-tight sm:text-3xl">
            Three breaths.
          </h2>
        </FadeIn>

        <FadeIn delay={0.3} duration={0.9}>
          <p className="mb-6 text-base leading-relaxed text-foreground-secondary">
            Name what you feel.
            <br />
            Reconnect with your anchor.
            <br />
            Choose what comes next.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} duration={0.9}>
          <p className="text-sm text-foreground-muted">
            About two minutes.
            <br />
            At your pace. Always optional.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
