"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface ParallaxLayerProps {
  /** Vertical offset multiplier: 0 = static, 1 = full scroll speed. Negative = opposite direction. */
  speed?: number;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * ParallaxLayer — scroll-driven vertical offset for decorative elements.
 * Uses Framer Motion's useScroll + useTransform for GPU-accelerated parallax.
 * Renders aria-hidden since this is purely decorative.
 */
export default function ParallaxLayer({
  speed = 0.15,
  className,
  children,
  style,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  if (prefersReducedMotion) {
    return (
      <div
        ref={ref}
        className={className}
        style={style}
        aria-hidden="true"
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, y }}
      aria-hidden="true"
    >
      {children}
    </motion.div>
  );
}
