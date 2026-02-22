"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Framer Motion variants for use inside StaggerChildren */
  variants?: Variants;
}

/**
 * GlassCard — glass surface with hover micro-interaction.
 * Lifts on hover: translateY(-4px), scale(1.015), elevated shadow.
 * Tap: scale(0.99) for tactile feedback.
 */
export default function GlassCard({ children, className, variants }: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`glass rounded-[var(--radius-md)] ${className ?? ""}`}
      variants={variants}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -4,
              scale: 1.015,
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.28), 0 8px 28px rgba(0,0,0,0.08), 0 16px 48px rgba(0,0,0,0.06)",
              transition: { type: "spring", duration: 0.35, bounce: 0 },
            }
      }
      whileTap={
        prefersReducedMotion
          ? undefined
          : { scale: 0.99, transition: { type: "spring", duration: 0.2, bounce: 0 } }
      }
    >
      {children}
    </motion.div>
  );
}
