"use client";

import FadeIn from "./FadeIn";

export default function RitualSection() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-xl text-center">
        <FadeIn duration={0.9}>
          <h2 className="mb-8 text-2xl font-light tracking-tight sm:text-3xl">
            A short, guided reset.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} duration={0.9}>
          <p className="mb-6 text-base leading-relaxed text-foreground-secondary">
            Three breaths. Name what you feel.
            <br />
            Reconnect with your anchor word.
            <br />
            Choose what comes next.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} duration={0.9}>
          <p className="text-sm text-foreground-muted">
            About two minutes. At your pace. Always optional.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
