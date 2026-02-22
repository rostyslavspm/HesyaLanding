"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode, type AriaAttributes } from "react";
import { EASE_HESYA, DURATION } from "../../lib/motion";

type TagType = "div" | "nav" | "section" | "ul" | "ol";

interface StaggerChildrenProps extends AriaAttributes {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  margin?: string;
  as?: TagType;
  id?: string;
}

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.word, ease: EASE_HESYA },
  },
};

/* Semantic motion tags */
const motionTags = {
  div: motion.div,
  nav: motion.nav,
  section: motion.section,
  ul: motion.ul,
  ol: motion.ol,
} as const;

export default function StaggerChildren({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  margin = "-60px",
  as = "div",
  id,
  ...ariaProps
}: StaggerChildrenProps) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = as;
  const MotionTag = motionTags[as];

  if (prefersReducedMotion) {
    return (
      <Tag className={className} id={id} {...ariaProps}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin }}
      className={className}
      id={id}
      {...ariaProps}
    >
      {children}
    </MotionTag>
  );
}
