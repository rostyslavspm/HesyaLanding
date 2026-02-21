"use client";

import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";
import { ReactNode } from "react";

type RevealVariant =
  | "fade"
  | "slide-up"
  | "slide-left"
  | "slide-right"
  | "scale"
  | "blur";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
  /** HTML tag to render (default: div) */
  as?: "div" | "section" | "article" | "span";
}

const easeHesya: [number, number, number, number] = [0.32, 0.72, 0, 1];

const initialStates: Record<RevealVariant, TargetAndTransition> = {
  fade: { opacity: 0, y: 8, filter: "blur(4px)" },
  "slide-up": { opacity: 0, y: 40 },
  "slide-left": { opacity: 0, x: -60 },
  "slide-right": { opacity: 0, x: 60 },
  scale: { opacity: 0, scale: 0.85 },
  blur: { opacity: 0, filter: "blur(12px)" },
};

const animateStates: Record<RevealVariant, TargetAndTransition> = {
  fade: { opacity: 1, y: 0, filter: "blur(0px)" },
  "slide-up": { opacity: 1, y: 0 },
  "slide-left": { opacity: 1, x: 0 },
  "slide-right": { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1 },
  blur: { opacity: 1, filter: "blur(0px)" },
};

export default function Reveal({
  children,
  variant = "fade",
  className,
  delay = 0,
  duration = 0.55,
  once = true,
  margin = "-60px",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : initialStates[variant]}
      whileInView={animateStates[variant]}
      viewport={{ once, margin }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration, delay, ease: easeHesya }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
