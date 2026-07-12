"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DiagnosticShuffler, RitualClock, StatusPulse } from "./demos/SuiteDemos";
import { DURATION, EASE_HESYA } from "../lib/motion";

const tabs = [
  {
    id: "declare",
    label: "Declare",
    title: "Name your intention",
    description: "Name what you want to have done — in your own words. Hesya keeps it verbatim.",
    demo: <DiagnosticShuffler />,
  },
  {
    id: "return",
    label: "Return",
    title: "Come back quietly",
    description: "Drift into something else and a quiet cue brings you back to your intent — never a scold.",
    demo: <RitualClock />,
  },
  {
    id: "reflect",
    label: "Reflect",
    title: "Close without scoring",
    description: "When you finish, mark how it felt. A private note, never a score.",
    demo: <StatusPulse />,
  },
] as const;

export default function SuiteTabs() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("declare");
  const prefersReducedMotion = useReducedMotion();
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="section-light py-20 md:py-32">
      <div className="container-hesya">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="text-display-sans mb-4 text-[var(--color-soft-obsidian)]">
            Your focus companion
          </h2>
          <p className="text-body text-[var(--foreground-muted)]">
            You name one intention and start a session. Hesya holds it where you can see it, returns
            you when attention drifts, and closes with a quiet reflection — never a score.
          </p>
        </div>

        <div className="mx-auto flex max-w-2xl justify-center gap-2 md:gap-3" role="tablist" aria-label="Hesya features">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[var(--color-soft-obsidian)] text-white"
                  : "bg-white text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
              }`}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="glass relative overflow-hidden rounded-[var(--radius-xl)] p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: DURATION.tab, ease: EASE_HESYA }}
                role="tabpanel"
              >
                <h3 className="text-heading mb-2 text-center">{active.title}</h3>
                <p className="text-body-sm mb-8 text-center text-[var(--foreground-muted)]">
                  {active.description}
                </p>
                <div className="flex min-h-[220px] items-center justify-center">{active.demo}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
