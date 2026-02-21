"use client";

import Reveal from "./motion/Reveal";
import TextReveal from "./motion/TextReveal";
import StaggerChildren, { staggerItem } from "./motion/StaggerChildren";
import GlassCard from "./motion/GlassCard";

const BLOCKS = [
  {
    title: "Observe",
    text: "Hesya notices patterns in how you move through your phone.",
  },
  {
    title: "Notice",
    text: "When your rhythm shifts — restless switching, long stretches — it becomes visible.",
  },
  {
    title: "Invite",
    text: "A quiet prompt to pause. A breath. A moment of rest.",
  },
];

/**
 * How It Works — 3-step system (tight, consistent typography).
 */
export default function HowItWorksSection({ id = "how-it-works" }: { id?: string }) {
  return (
    <section id={id} className="section-standard" aria-label="How it works">
      <div className="container-hesya">
        <div className="mx-auto max-w-[42rem] text-center">
          <Reveal>
            <p className="text-eyebrow">HOW IT WORKS</p>
          </Reveal>

          <TextReveal
            text="A simple loop."
            tag="h2"
            className="mt-4 text-display-sm"
            style={{ fontStyle: "italic" }}
            stagger={0.06}
            delay={0.08}
          />

          <Reveal delay={0.16}>
            <p className="mt-4 text-body text-reading">
              Not to control your attention — just to help you notice when it drifts.
            </p>
          </Reveal>
        </div>

        <StaggerChildren
          className="mx-auto mt-14 grid max-w-[56rem] gap-6 md:grid-cols-3"
          stagger={0.1}
          delay={0.1}
        >
          {BLOCKS.map((b, i) => (
            <GlassCard key={b.title} variants={staggerItem} className="p-6">
              <p className="text-micro" style={{ color: "var(--foreground-muted)" }}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-heading" style={{ color: "var(--foreground)" }}>
                {b.title}
              </h3>
              <p className="mt-3 text-body-sm text-reading">{b.text}</p>
            </GlassCard>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
