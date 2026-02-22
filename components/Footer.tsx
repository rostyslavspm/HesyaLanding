"use client";

import Link from "next/link";
import Reveal from "./motion/Reveal";
import StaggerChildren, { staggerItem } from "./motion/StaggerChildren";
import { motion } from "framer-motion";

/**
 * Footer — closing brand signature.
 * Large serif wordmark at low opacity, staggered nav reveals,
 * gradient divider line. The last impression matters.
 */
export default function Footer() {
  return (
    <footer className="relative px-[var(--gutter)] pt-20 pb-16">
      {/* Gradient divider replacing flat border-top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[min(80%,600px)]"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--foreground-muted) 50%, transparent 100%)",
          opacity: 0.18,
        }}
      />

      <div className="container-hesya flex flex-col items-center gap-12 text-center">
        {/* Serif wordmark — large, ghosted */}
        <Reveal variant="scale" duration={1.0}>
          <p
            className="select-none"
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "var(--foreground)",
              opacity: 0.06,
            }}
          >
            Hesya
          </p>
        </Reveal>

        {/* Navigation — staggered entrance */}
        <StaggerChildren as="nav" aria-label="Footer navigation">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            <motion.div variants={staggerItem}>
              <Link
                href="/support"
                className="text-micro link-animated"
                style={{ color: "var(--foreground-muted)" }}
              >
                Support
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Link
                href="/privacy"
                className="text-micro link-animated"
                style={{ color: "var(--foreground-muted)" }}
              >
                Privacy
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <a
                href="mailto:support@hesya.app"
                className="text-micro link-animated"
                style={{ color: "var(--foreground-muted)" }}
              >
                Contact
              </a>
            </motion.div>
          </div>
        </StaggerChildren>

        {/* Copyright — quiet fade */}
        <Reveal delay={0.2}>
          <p className="text-micro" style={{ color: "var(--foreground-muted)" }}>
            Hesya &copy; {new Date().getFullYear()}
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
