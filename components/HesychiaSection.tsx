"use client";

import Reveal from "./motion/Reveal";
import SectionEyebrow from "./ui/SectionEyebrow";

export default function HesychiaSection() {
  return (
    <section className="section-standard px-6" aria-label="The name - Hesychia">
      <div className="mx-auto max-w-2xl text-center">

        <Reveal delay={0.05}>
          <SectionEyebrow className="mb-8">The name</SectionEyebrow>
        </Reveal>

        <Reveal delay={0.15}>
          <h2
            className="text-display mb-4"
            style={{ fontStyle: "italic", color: "var(--wave)" }}
          >
            hesychia
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <p
            className="text-body mb-12"
            style={{ fontStyle: "italic", color: "var(--foreground-secondary)" }}
          >
            From the Greek ησυχία &mdash; inner stillness.
          </p>
        </Reveal>

        <Reveal delay={0.35} duration={1.0}>
          <p
            className="text-body mb-6"
            style={{ color: "var(--foreground-secondary)" }}
          >
            For over a thousand years, contemplatives
            practiced hesychia: watching where the mind
            goes, breathing to return, anchoring to
            what matters.
          </p>
        </Reveal>

        <Reveal delay={0.45} duration={1.0}>
          <p className="text-body" style={{ color: "var(--foreground-muted)" }}>
            Three techniques. Timeless problem.<br />
            No belief required.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
