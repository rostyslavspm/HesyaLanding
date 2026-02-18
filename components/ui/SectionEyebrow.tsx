import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: string;
  className?: string;
}

/**
 * Eyebrow label — small, tracked lowercase, muted.
 * Matches the ritual screen eyebrow style ("your body noticed").
 * Maps to HesyaTypography caption2 + AnchorTracking.sectionLabel (1.5).
 */
export default function SectionEyebrow({ children, className }: SectionEyebrowProps) {
  return (
    <p className={cn("text-eyebrow", className)}>
      {children}
    </p>
  );
}
