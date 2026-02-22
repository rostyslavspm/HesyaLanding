"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type CSSProperties } from "react";

type TagType = "h1" | "h2" | "h3" | "p" | "span";

interface TextRevealProps {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
  tag?: TagType;
  style?: CSSProperties;
}

const easeHesya: [number, number, number, number] = [0.32, 0.72, 0, 1];

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: easeHesya },
  },
};

/* Render actual semantic HTML tags instead of div+role="heading" */
const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

export default function TextReveal({
  text,
  className,
  stagger = 0.04,
  delay = 0,
  tag: Tag = "h2",
  style,
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return (
      <Tag className={className} style={style}>
        {text}
      </Tag>
    );
  }

  const MotionTag = motionTags[Tag];

  return (
    <MotionTag
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
      style={style}
      aria-label={text}
    >
      {words.map((word: string, i: number) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariant}
          style={{ display: "inline-block", marginRight: "0.3em" }}
          aria-hidden
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
