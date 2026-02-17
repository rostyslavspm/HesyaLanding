"use client";

import FadeIn from "./FadeIn";

export default function HesychiaSection() {
  return (
    <section className="px-6 py-28" style={{ background: "var(--mid)" }}>
      <div className="mx-auto max-w-xl text-center">
        <FadeIn>
          <span className="mb-6 block text-xs uppercase tracking-[0.15em] text-foreground-muted">
            The name
          </span>
          <h2 className="mb-2 font-serif text-3xl tracking-[0.04em] sm:text-4xl" style={{ color: "var(--wave)" }}>
            Hesychia
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-8 text-base italic text-foreground-secondary">
            From the Greek &#x1F74;&#x03C3;&#x03C5;&#x03C7;&#x03AF;&#x03B1; &mdash; inner stillness.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} duration={1.0}>
          <p className="mb-6 text-base leading-relaxed text-foreground-secondary">
            For over a thousand years, contemplatives
            practiced hesychia: watching where the mind
            goes, breathing to return, anchoring to
            what matters.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} duration={1.0}>
          <p className="text-base text-foreground-secondary">
            Three techniques. Timeless problem.
            <br />
            No belief required.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
