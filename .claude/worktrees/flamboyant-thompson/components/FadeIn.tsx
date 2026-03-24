"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.55,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration, delay, ease: [0.32, 0.72, 0, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
