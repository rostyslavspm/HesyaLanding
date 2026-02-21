"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import AppStoreBadge from "./AppStoreBadge";

type HeroSectionProps = {
  onOpenNotify?: () => void;
};

const easeHesya: [number, number, number, number] = [0.32, 0.72, 0, 1];

/* ── Orchestrator ──────────────────────────────────── */

const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.1,
    },
  },
};

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: easeHesya },
  },
};

const subtitleVariant: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.35, ease: easeHesya },
  },
};

const microTextVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5, ease: easeHesya },
  },
};

const ctaVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.55, ease: easeHesya },
  },
};

const phoneVariant: Variants = {
  hidden: { opacity: 0, scale: 0.92, x: 30 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.3, ease: easeHesya },
  },
};

const glowVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 0.4,
    transition: { duration: 1.2, ease: easeHesya },
  },
};

/* ── Word splitter ─────────────────────────────────── */

function AnimatedWords({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariant}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

/* ── Component ─────────────────────────────────────── */

export default function HeroSection({ onOpenNotify }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  /* Reduced-motion: render static (original layout, no animation) */
  if (prefersReducedMotion) {
    return <HeroStatic onOpenNotify={onOpenNotify} />;
  }

  return (
    <section className="section-full relative overflow-hidden" aria-label="Hero">
      {/* Background glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-hero-drift"
        style={{
          background:
            "radial-gradient(55% 40% at 55% 35%, var(--orb-glow) 0%, transparent 65%)",
        }}
        variants={glowVariant}
        initial="hidden"
        animate="show"
      />

      <div className="container-hesya relative z-10 grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Left: copy + CTA */}
        <motion.div
          className="flex w-full max-w-[34rem] flex-col items-center gap-6 text-center md:items-start md:text-left md:gap-8"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          {/* Headline — word-by-word stagger */}
          <h1 className="text-display text-hero">
            <span className="block">
              <AnimatedWords text="When your attention slips," />
            </span>
            <span className="block">
              <AnimatedWords text="Hesya invites you back." />
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="max-w-[36rem] text-body text-reading"
            variants={subtitleVariant}
          >
            An iPhone companion that helps you notice distraction and return to
            what matters — without noise or guilt.
          </motion.p>

          {/* Micro text */}
          <motion.p
            className="mt-6 text-micro"
            style={{ color: "var(--foreground-muted)" }}
            variants={microTextVariant}
          >
            Built to feel native. Designed to stay quiet.
          </motion.p>

          {/* CTA cluster */}
          <motion.div
            className="flex flex-col items-center gap-3 md:items-start"
            variants={ctaVariant}
          >
            <AppStoreBadge
              onClick={onOpenNotify}
              label="Get notified on launch"
              footer={null}
            />
            <p
              className="text-micro whitespace-nowrap"
              style={{ color: "var(--foreground-muted)" }}
            >
              Free&nbsp;&middot;&nbsp;No tracking&nbsp;&middot;&nbsp;iOS
            </p>
            <p
              className="text-micro whitespace-nowrap"
              style={{ color: "var(--foreground-muted)" }}
            >
              iOS only&nbsp;&middot;&nbsp;Launching soon
            </p>
            <a
              href="#how-it-works"
              className="text-micro"
              style={{ color: "var(--foreground-muted)" }}
            >
              See how it works
            </a>
          </motion.div>
        </motion.div>

        {/* Right: phone mockup */}
        <motion.div
          className="flex items-center justify-center md:justify-end"
          variants={phoneVariant}
          initial="hidden"
          animate="show"
        >
          <div className="relative w-[260px] sm:w-[300px] md:w-[340px]">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, var(--orb-glow) 0%, transparent 60%)",
                opacity: 0.18,
                filter: "blur(10px)",
              }}
            />
            <div
              className="relative animate-shadow-breathe"
              style={{ filter: "drop-shadow(var(--shadow-hero))" }}
            >
              <Image
                src="/screenshots/screen-home.png"
                alt="Hesya home screen"
                width={450}
                height={920}
                className="h-auto w-full select-none"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Static fallback (reduced motion) ──────────────── */

function HeroStatic({ onOpenNotify }: HeroSectionProps) {
  return (
    <section className="section-full relative overflow-hidden" aria-label="Hero">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 40% at 55% 35%, var(--orb-glow) 0%, transparent 65%)",
          opacity: 0.4,
        }}
      />

      <div className="container-hesya relative z-10 grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="flex w-full max-w-[34rem] flex-col items-center gap-6 text-center md:items-start md:text-left md:gap-8">
          <h1 className="text-display text-hero">
            When your attention slips,
            <br />
            Hesya invites you back.
          </h1>

          <p className="max-w-[36rem] text-body text-reading">
            An iPhone companion that helps you notice distraction and return to
            what matters — without noise or guilt.
          </p>

          <p className="mt-6 text-micro" style={{ color: "var(--foreground-muted)" }}>
            Built to feel native. Designed to stay quiet.
          </p>

          <div className="flex flex-col items-center gap-3 md:items-start">
            <AppStoreBadge
              onClick={onOpenNotify}
              label="Get notified on launch"
              footer={null}
            />
            <p
              className="text-micro whitespace-nowrap"
              style={{ color: "var(--foreground-muted)" }}
            >
              Free&nbsp;&middot;&nbsp;No tracking&nbsp;&middot;&nbsp;iOS
            </p>
            <p
              className="text-micro whitespace-nowrap"
              style={{ color: "var(--foreground-muted)" }}
            >
              iOS only&nbsp;&middot;&nbsp;Launching soon
            </p>
            <a
              href="#how-it-works"
              className="text-micro"
              style={{ color: "var(--foreground-muted)" }}
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <div className="relative w-[260px] sm:w-[300px] md:w-[340px]">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, var(--orb-glow) 0%, transparent 60%)",
                opacity: 0.18,
                filter: "blur(10px)",
              }}
            />
            <div
              className="relative"
              style={{ filter: "drop-shadow(var(--shadow-hero))" }}
            >
              <Image
                src="/screenshots/screen-home.png"
                alt="Hesya home screen"
                width={450}
                height={920}
                className="h-auto w-full select-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
