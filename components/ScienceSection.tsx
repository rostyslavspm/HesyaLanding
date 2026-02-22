"use client";

import Reveal from "./motion/Reveal";
import StaggerChildren, { staggerItem } from "./motion/StaggerChildren";
import GlassCard from "./motion/GlassCard";

const INSIGHTS = [
  {
    stat: "~66%",
    claim: "of daily behaviors run on autopilot — outside conscious awareness.",
    source: "Wood & Neal, Annual Review of Psychology, 2007",
  },
  {
    stat: "More scrolling, more boredom",
    claim: "Digital switching increases boredom and lowers sustained attention — the opposite of what we expect.",
    source: "Tam & Inzlicht, Journal of Experimental Psychology, 2024",
  },
  {
    stat: "One pause changes the pattern",
    claim: "A brief breathing pause with an intention prompt significantly reduces unintentional phone use.",
    source: "Okeke et al., Proceedings of the ACM MobileHCI, 2018",
  },
  {
    stat: "IF this → THEN that",
    claim: "Implementation intentions help people act in line with their values, even under tempting conditions.",
    source: "Gollwitzer & Sheeran, Advances in Experimental Social Psychology, 2006",
  },
];

/**
 * ScienceSection — research-backed credibility.
 * 4 glass cards, each with a stat/headline, one-line finding, and citation.
 */
export default function ScienceSection({ id = "science" }: { id?: string }) {
  return (
    <section id={id} className="section-standard" aria-label="The research behind Hesya">
      <div className="container-hesya">
        <div className="mx-auto max-w-[42rem] text-center">
          <Reveal>
            <p className="text-eyebrow">THE RESEARCH</p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 text-body text-reading">
              Hesya is built on decades of research into attention, habit formation,
              and contemplative practice — not trends.
            </p>
          </Reveal>
        </div>

        <StaggerChildren
          className="mt-14 grid gap-6 md:grid-cols-2"
          stagger={0.1}
        >
          {INSIGHTS.map((insight) => (
            <GlassCard key={insight.stat} variants={staggerItem} className="p-6">
              <p
                className="text-heading"
                style={{ color: "var(--wave)" }}
              >
                {insight.stat}
              </p>
              <p className="mt-3 text-body-sm text-reading">
                {insight.claim}
              </p>
              <p
                className="mt-4 text-micro"
                style={{ color: "var(--foreground-muted)" }}
              >
                {insight.source}
              </p>
            </GlassCard>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
