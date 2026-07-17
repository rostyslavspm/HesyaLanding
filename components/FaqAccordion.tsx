"use client";

import { useState } from "react";
import { TYPE } from "@/lib/design-system";

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

  return (
    <div className="border-b border-[var(--color-soft-obsidian)]/10">
      <button
        onClick={() => setOpen(!open)}
        className={`${TYPE.proseQuestion} flex w-full items-center justify-between gap-4 py-6 text-left transition-opacity hover:opacity-70`}
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
      <div
        className="faq-panel grid transition-[grid-template-rows] duration-200 ease-[var(--ease-hesya)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className={`${TYPE.proseAnswer} pb-6 transition-opacity duration-200 ease-[var(--ease-hesya)] ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <div className="mb-12">
      <h2 className={`${TYPE.editorialSection} mb-6`}>{title}</h2>
      <div>
        {items.map((item) => (
          <FaqItem key={item.question} {...item} />
        ))}
      </div>
    </div>
  );
}
