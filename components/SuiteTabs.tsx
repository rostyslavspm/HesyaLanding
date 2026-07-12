"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DiagnosticShuffler, RitualClock, StatusPulse } from "./demos/SuiteDemos";
import { DURATION, EASE_HESYA, STAGGER } from "../lib/motion";
import FeatureChecklist from "./ui/FeatureChecklist";
import { ArrowRight } from "lucide-react";

const tabs = [
  {
    id: "declare",
    label: "Declare",
    title: "Name your intention in your own words",
    description: "Write exactly what matters now. Hesya keeps your words verbatim and keeps them visible.",
    bullets: [
      "Start in three taps or fewer",
      "Support one clear intention at a time",
      "No scoring or streak pressure",
    ],
    actionLabel: "Explore focus flow",
    actionHref: "/support",
    demo: <DiagnosticShuffler compact />,
  },
  {
    id: "return",
    label: "Return",
    title: "Return to your intent without friction",
    description: "When attention drifts, Hesya gives a quiet cue and gentle breathing reset so you can choose again.",
    bullets: [
      "Optional Screen Time signal",
      "No app names ever stored or transmitted",
      "Always skippable in the moment",
    ],
    actionLabel: "Read privacy details",
    actionHref: "/privacy",
    demo: <RitualClock compact />,
  },
  {
    id: "reflect",
    label: "Reflect",
    title: "Close each session with clear reflection",
    description: "Mark how it felt and leave a private note. Reflection stays on device and builds your own rhythm.",
    bullets: [
      "Outcome-neutral session close",
      "Private notes in your own language",
      "Built for consistency, not gamification",
    ],
    actionLabel: "Learn how sessions work",
    actionHref: "/support",
    demo: <StatusPulse compact />,
  },
] as const;

export default function SuiteTabs() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("declare");
  const prefersReducedMotion = useReducedMotion();
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="section-light section-standard" id="suite-section">
      <div className="container-hesya">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="text-eyebrow mb-4 text-[var(--foreground-muted)]">Your Hesya suite</p>
          <h2 className="text-display-sans mb-4 text-[var(--color-soft-obsidian)]">
            Your focus companion
          </h2>
          <p className="text-body text-[var(--foreground-muted)]">
            You name one intention and start a session. Hesya holds it where you can see it, returns
            you when attention drifts, and closes with a quiet reflection — never a score.
          </p>
        </div>

        <div
          className="mx-auto flex max-w-2xl justify-center gap-2 md:gap-3"
          role="tablist"
          aria-label="Hesya features"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[var(--color-soft-obsidian)] text-white shadow-[var(--shadow-soft)]"
                  : "bg-white/85 text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
              }`}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-6xl">
          <div className="glass panel-elevated relative overflow-hidden rounded-[var(--radius-xl)] p-8 md:p-12">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-white/70 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: DURATION.tabContent, ease: EASE_HESYA }}
                role="tabpanel"
                className="relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.1fr]"
              >
                <div className="text-left">
                  <p className="text-eyebrow mb-4 text-[var(--foreground-muted)]">{active.label}</p>
                  <h3 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] md:text-4xl">
                    {active.title}
                  </h3>
                  <p className="text-body-sm mb-6 max-w-xl text-[var(--foreground-muted)]">
                    {active.description}
                  </p>
                  <FeatureChecklist items={active.bullets} className="mb-7" />
                  <Link
                    href={active.actionHref}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--color-accent-vivid)]"
                  >
                    {active.actionLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <motion.div
                  className="relative flex min-h-[280px] items-center justify-center rounded-[2rem] bg-white/75 p-6 md:p-8"
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: DURATION.reveal, ease: EASE_HESYA, delay: STAGGER.tight },
                    },
                  }}
                  initial={prefersReducedMotion ? false : "hidden"}
                  animate="visible"
                >
                  {active.demo}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
