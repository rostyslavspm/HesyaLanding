"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE_HESYA } from "../lib/motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  items: FaqItem[];
}

function FaqItem({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="border-b border-[var(--color-soft-obsidian)]/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left text-lg md:text-xl font-medium text-[var(--color-soft-obsidian)] transition-opacity hover:opacity-70"
        aria-expanded={open}
      >
        {question}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          style={{ transitionTimingFunction: "var(--ease-hesya)" }}
          aria-hidden="true"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.2, ease: EASE_HESYA },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.15, ease: EASE_HESYA },
            }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-base md:text-lg leading-relaxed text-[var(--color-soft-obsidian)]/70">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--color-soft-obsidian)]">{title}</h2>
      <div>
        {items.map((item) => (
          <FaqItem key={item.question} {...item} />
        ))}
      </div>
    </div>
  );
}
