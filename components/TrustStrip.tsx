"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Smartphone, Timer, Apple } from "lucide-react";
import { DURATION, EASE_HESYA, STAGGER } from "../lib/motion";

const proofItems = [
  {
    metric: "No accounts",
    label: "Start instantly in TestFlight",
    icon: ShieldCheck,
  },
  {
    metric: "On-device first",
    label: "Intent and notes stay local",
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
    <section
      className="section-light section-standard-sm border-y border-[var(--border)]"
      id="trust-section"
    >
      <div className="container-hesya">
        <p className="mb-7 text-center text-eyebrow text-[var(--foreground-muted)]">
          Feature proofs for a private TestFlight beta
        </p>
        <motion.ul
          className="grid grid-cols-1 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-white md:grid-cols-4"
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
              className="relative flex items-start gap-3 border-b border-[var(--border)] p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <div className="mt-0.5 rounded-full border border-[var(--border)] p-1.5">
                <Icon className="h-3.5 w-3.5 text-[var(--foreground-muted)]" strokeWidth={1.7} />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight text-[var(--foreground)]">{metric}</p>
                <p className="mt-1 text-sm text-[var(--foreground-muted)]">{label}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
