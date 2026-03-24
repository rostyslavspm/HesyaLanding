"use client";

import Reveal from "./motion/Reveal";
import StaggerChildren, { staggerItem } from "./motion/StaggerChildren";
import GlassCard from "./motion/GlassCard";

type WhatHesyaDoesSectionProps = {
  id?: string;
};

const BENEFITS = [
  { title: "Notice", text: "See when your rhythm changes — switching, stretching, drifting." },
  { title: "Pause", text: "A gentle cue creates a moment of space before reacting." },
  { title: "Return", text: "Choose where to place your attention — with calm, not guilt." },
];

/**
 * What Hesya Does — 3 benefit cards (scan-first, still poetic).
 */
export default function WhatHesyaDoesSection({ id = "what" }: WhatHesyaDoesSectionProps) {
  return (
    <section id={id} className="section-standard bg-chapter-soft" aria-label="What Hesya does">
      <div className="container-hesya">
        <div className="mx-auto max-w-[42rem] text-center">
          <Reveal>
            <p className="text-eyebrow">WHAT HESYA DOES</p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 text-body text-reading">
              Hesya watches how you move through your phone — not what you do,
              just the rhythm. When it senses drift, it offers a gentle moment
              to return.
            </p>
          </Reveal>
        </div>

        <StaggerChildren
          className="mt-14 grid gap-6 md:grid-cols-3"
          stagger={0.1}
        >
          {BENEFITS.map((b) => (
            <GlassCard key={b.title} variants={staggerItem} className="p-6">
              <h3 className="text-heading" style={{ color: "var(--foreground)" }}>
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
