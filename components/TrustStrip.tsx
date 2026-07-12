"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Smartphone, Timer, Apple } from "lucide-react";
import { DURATION, EASE_HESYA, STAGGER } from "../lib/motion";

const proofItems = [
  {
    metric: "0",
    label: "Accounts required",
    icon: ShieldCheck,
  },
  {
    metric: "100%",
    label: "Intent data stays on device",
    icon: Smartphone,
  },
  {
    metric: "40s",
    label: "Guided breathing reset",
    icon: Timer,
  },
  {
    metric: "iOS 26+",
    label: "Native beta support",
    icon: Apple,
  },
];

export default function TrustStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-light section-standard-sm border-y border-[var(--border)]" id="trust-section">
      <div className="container-hesya">
        <p className="mb-6 text-center text-eyebrow text-[var(--foreground-muted)]">
          Trusted by people who need calm focus, not more noise
        </p>
        <motion.ul
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: STAGGER.default } },
          }}
        >
          {proofItems.map(({ metric, label, icon: Icon }) => (
            <motion.li
              key={label}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: DURATION.reveal, ease: EASE_HESYA },
                },
              }}
              className="panel-elevated rounded-[var(--radius-lg)] p-4 md:p-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <Icon className="h-4 w-4 text-[var(--foreground-muted)]" strokeWidth={1.6} />
                <span className="text-xs uppercase tracking-[0.11em] text-[var(--foreground-muted)]">Proof</span>
              </div>
              <p className="text-heading text-[var(--foreground)]">{metric}</p>
              <p className="mt-1 text-body-sm text-[var(--foreground-muted)]">{label}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
