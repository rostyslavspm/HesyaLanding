"use client";

import { ReactNode } from "react";

type FloatingGlassCardProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  float?: boolean;
};

export default function FloatingGlassCard({
  children,
  className,
  style,
  delay = 0,
  float = false,
}: FloatingGlassCardProps) {
  return (
    <div
      className={`glass-dark rounded-2xl p-4 shadow-[var(--shadow-glass)] motion-reduce:animate-none ${
        float ? "animate-float" : ""
      } ${className ?? ""}`}
      style={{
        ...style,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
