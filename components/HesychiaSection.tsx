"use client";

import FadeIn from "./FadeIn";
import SectionEyebrow from "./ui/SectionEyebrow";

export default function HesychiaSection() {
  return (
    <section className="section-standard px-6">
      <div className="mx-auto max-w-2xl text-center">

        <FadeIn delay={0.05}>
          <SectionEyebrow className="mb-8">the name</SectionEyebrow>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2
            className="text-display mb-4"
            style={{ fontStyle: "italic", color: "var(--wave)" }}
          >
            hesychia
          </h2>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p
            className="text-body mb-12"
            style={{ fontStyle: "italic", color: "var(--foreground-secondary)" }}
          >
            From the Greek &#x1F74;&#x03C3;&#x03C5;&#x03C7;&#x03AF;&#x03B1; &mdash; inner stillness.
          </p>
        </FadeIn>

        <FadeIn delay={0.35} duration={1.0}>
          <p
            className="text-body mb-6"
            style={{ color: "var(--foreground-secondary)" }}
          >
            for over a thousand years, contemplatives
            practiced hesychia: watching where the mind
            goes, breathing to return, anchoring to
            what matters.
          </p>
        </FadeIn>

        <FadeIn delay={0.45} duration={1.0}>
          <p className="text-body" style={{ color: "var(--foreground-muted)" }}>
            three techniques. timeless problem.<br />
            no belief required.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
