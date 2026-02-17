"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function PatternSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-xl text-center">
        <FadeIn duration={1.0}>
          <span className="mb-6 block text-xs uppercase tracking-[0.15em] text-foreground-muted">
            It notices
          </span>
          <h2 className="mb-10 text-2xl font-light tracking-tight sm:text-3xl">
            Long focus sessions.
            <br />
            Rapid switching between apps.
            <br />
            Restless seeking, nothing settling.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} duration={1.0}>
          <p className="mb-6 text-base leading-relaxed text-foreground-secondary">
            Not problems. Patterns.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} duration={1.0}>
          <p className="mb-12 text-base leading-relaxed text-foreground-secondary">
            Hesya watches quietly &mdash; on your device,
            never shared &mdash; and offers a gentle invitation.
          </p>
        </FadeIn>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 1.6, delay: 0.35, ease: [0.32, 0.72, 0, 1] }
          }
        >
          <div className="glass mx-auto max-w-xs rounded-2xl px-8 py-5">
            <p
              className="text-base italic"
              style={{ color: "var(--wave)" }}
            >
              &ldquo;Want a small pause?&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
