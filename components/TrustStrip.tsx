"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Shield, Smartphone, Sparkles, Apple } from "lucide-react";
import { EASE_HESYA } from "../lib/motion";

const badges = [
  { icon: Shield, label: "No accounts" },
  { icon: Smartphone, label: "On your device" },
  { icon: Sparkles, label: "Free, no ads" },
  { icon: Apple, label: "iOS 26+" },
];

export default function TrustStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-light border-y border-[var(--border)] py-10 md:py-12">
      <div className="container-hesya">
        <motion.ul
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-16"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {badges.map(({ icon: Icon, label }) => (
            <motion.li
              key={label}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: EASE_HESYA },
                },
              }}
              className="flex items-center gap-2.5"
            >
              <Icon className="h-4 w-4 text-[var(--foreground-muted)]" strokeWidth={1.5} />
              <span className="text-eyebrow text-[var(--foreground-muted)]">{label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
