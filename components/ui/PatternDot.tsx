import { cn } from "@/lib/utils";

type PatternState = "calm" | "pushing" | "overwhelmed" | "restless";

interface PatternDotProps {
  state: PatternState;
  label: string;
  description?: string;
  className?: string;
}

const dotClass: Record<PatternState, string> = {
  calm:        "dot-calm",
  pushing:     "dot-pushing",
  overwhelmed: "dot-overwhelmed",
  restless:    "dot-restless",
};

/**
 * State indicator dot with label.
 * Matches PatternsExplainerSection.swift PatternRow component.
 * Colors from WidgetOrbColors.forState() / HesyaStateColor.
 */
export default function PatternDot({ state, label, description, className }: PatternDotProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <div className="mt-[0.3em] shrink-0">
        <div
          className={cn("size-3 rounded-full ring-1 ring-black/10", dotClass[state])}
          aria-hidden="true"
        />
      </div>
      <div>
        <p className="text-body-sm" style={{ color: "var(--foreground)" }}>
          {label}
        </p>
        {description && (
          <p className="text-micro" style={{ color: "var(--foreground-muted)" }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
