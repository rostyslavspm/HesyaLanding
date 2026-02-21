"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";
import TextReveal from "./motion/TextReveal";
import StaggerChildren, { staggerItem } from "./motion/StaggerChildren";

const PROOFS = [
  "Everything stays on your iPhone.",
  "Pattern detection is local — not sent anywhere.",
  "You can disable permissions anytime in iOS Settings.",
];

/**
 * Privacy — trust panel with one crisp promise + 3 proofs.
 */
export default function PrivacySection({ id = "privacy" }: { id?: string }) {
  return (
    <section id={id} className="section-standard bg-chapter-soft" aria-label="Privacy">
      <div className="container-hesya">
        <div className="mx-auto max-w-[42rem] text-center">
          <Reveal>
            <p className="text-eyebrow">PRIVACY</p>
          </Reveal>

          <TextReveal
            text="Private by design."
            tag="h2"
            className="mt-4 text-display-sm"
            style={{ fontStyle: "italic" }}
            stagger={0.05}
            delay={0.06}
          />

          <Reveal delay={0.14}>
            <p className="mt-4 text-body text-reading" style={{ color: "var(--foreground-secondary)" }}>
              Hesya works on your device. No accounts. No analytics. No ads.
            </p>
          </Reveal>

          <Reveal variant="fade" delay={0.2}>
            <div className="glass mt-10 rounded-[var(--radius-lg)] px-8 py-8 text-left">
              <StaggerChildren stagger={0.08} delay={0.1}>
                {PROOFS.map((proof) => (
                  <motion.p
                    key={proof}
                    variants={staggerItem}
                    className="mt-3 first:mt-0 text-body-sm text-reading"
                  >
                    • {proof}
                  </motion.p>
                ))}
              </StaggerChildren>

              <Link
                href="/privacy"
                className="mt-6 inline-block text-micro link-animated"
                style={{ color: "var(--foreground-muted)" }}
              >
                Read the privacy policy
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
