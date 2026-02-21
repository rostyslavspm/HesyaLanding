"use client";

import MagneticButton from "./motion/MagneticButton";

type HeaderCTAProps = {
  onClick: () => void;
  label?: string;
};

export default function HeaderCTA({
  onClick,
  label = "Get notified",
}: HeaderCTAProps) {
  return (
    <MagneticButton>
      <button
        type="button"
        onClick={onClick}
        className="glass inline-flex items-center justify-center rounded-full px-5 py-2 text-micro outline-none transition-transform hover:-translate-y-[1px] active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        style={{
          color: "var(--foreground)",
          boxShadow: "var(--shadow-soft)",
        }}
        aria-label={label}
      >
        {label}
      </button>
    </MagneticButton>
  );
}
