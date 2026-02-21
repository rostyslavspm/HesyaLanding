"use client";

import Reveal from "./motion/Reveal";
import TextReveal from "./motion/TextReveal";

/**
 * Deeper Value — contemplative, editorial, designed.
 */
export default function DeeperValueSection({ id = "deeper" }: { id?: string }) {
  return (
    <section id={id} className="section-standard bg-chapter-warm" aria-label="Deeper value">
      <div className="container-hesya">
        <div className="mx-auto max-w-[42rem] text-center">
          <Reveal>
            <p className="text-eyebrow">DEEPER VALUE</p>
          </Reveal>

          <Reveal variant="blur" delay={0.08} duration={1.2}>
            <div className="glass mt-6 rounded-[var(--radius-lg)] px-8 py-10">
              <TextReveal
                text="Attention is a skill."
                tag="p"
                className="text-body text-reading"
                style={{ color: "var(--foreground)" }}
                stagger={0.06}
              />

              <Reveal variant="fade" delay={0.2}>
                <p className="mt-6 text-body text-reading">
                  A practice, not a fix.
                </p>
              </Reveal>

              <Reveal variant="fade" delay={0.35}>
                <p className="mt-6 text-micro" style={{ color: "var(--foreground-muted)" }}>
                  Designed for iPhone. Built to feel calm.
                </p>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
