"use client";

import { ReactNode } from "react";

type FloatingGlassCardProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
};

export default function FloatingGlassCard({
  children,
  className,
  style,
  delay = 0,
}: FloatingGlassCardProps) {
  return (
    <div
      className={`glass-dark rounded-2xl p-4 shadow-[var(--shadow-glass)] motion-reduce:animate-none animate-float ${className ?? ""}`}
      style={{
        ...style,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
