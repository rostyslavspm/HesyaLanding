import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type GlassPanelVariant = "default" | "elevated" | "tinted";
type GlassPanelRounded = "lg" | "xl" | "2xl" | "3xl";

interface GlassPanelProps {
  children: ReactNode;
  variant?: GlassPanelVariant;
  rounded?: GlassPanelRounded;
  className?: string;
}

const variantClass: Record<GlassPanelVariant, string> = {
  default:  "glass",
  elevated: "glass-elevated",
  tinted:   "glass-tinted",
};

const roundedClass: Record<GlassPanelRounded, string> = {
  "lg":  "rounded-lg",
  "xl":  "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
};

export default function GlassPanel({
  children,
  variant = "default",
  rounded = "2xl",
  className,
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "noise-overlay",
        variantClass[variant],
        roundedClass[rounded],
        className
      )}
    >
      {children}
    </div>
  );
}
