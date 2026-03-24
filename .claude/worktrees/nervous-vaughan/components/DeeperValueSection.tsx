"use client";

import Reveal from "./motion/Reveal";
import TextReveal from "./motion/TextReveal";

/**
 * DeeperValueSection — the name, the tradition, the philosophy.
 * Merges the old HesychiaSection content into a richer editorial moment.
 */
export default function DeeperValueSection({ id = "deeper" }: { id?: string }) {
  return (
    <section id={id} className="section-standard bg-chapter-warm" aria-label="The tradition behind the name">
      <div className="container-hesya">
        <div className="mx-auto max-w-[42rem] text-center">
          <Reveal>
            <p className="text-eyebrow">THE NAME</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="mt-6 text-display"
              style={{ fontStyle: "italic", color: "var(--wave)" }}
            >
              hesychia
            </h2>
          </Reveal>

          <Reveal delay={0.18}>
            <p
              className="mt-4 text-body"
              style={{ fontStyle: "italic", color: "var(--foreground-secondary)" }}
            >
              From the Greek ησυχία &mdash; inner stillness.
            </p>
          </Reveal>

          <Reveal variant="blur" delay={0.28} duration={1.2}>
            <div className="glass mt-10 rounded-[var(--radius-lg)] px-8 py-10">
              <TextReveal
                text="Attention is a skill."
                tag="p"
                className="text-body text-reading"
                style={{ color: "var(--foreground)" }}
                stagger={0.06}
              />

              <Reveal variant="fade" delay={0.2}>
                <p className="mt-6 text-body text-reading">
                  For over a thousand years, contemplatives practiced
                  hesychia: watching where the mind goes, breathing to
                  return, anchoring to what matters.
                </p>
              </Reveal>

              <Reveal variant="fade" delay={0.35}>
                <p
                  className="mt-6 text-body text-reading"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  Three techniques. Timeless problem.
                  <br />
                  No belief required.
                </p>
              </Reveal>

              <Reveal variant="fade" delay={0.45}>
                <p className="mt-6 text-micro" style={{ color: "var(--foreground-muted)" }}>
                  A practice, not a fix. Designed for iPhone. Built to feel calm.
                </p>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
