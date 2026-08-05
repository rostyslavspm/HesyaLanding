import { PenLine } from "lucide-react";
import { DECLARE_PROMPT } from "@/lib/content/heroMoments";

/** Declare — naming the one thing, in the user's own words. */
export default function DeclareCard() {
  return (
    <div className="hero-card-declare pointer-events-none w-full max-w-[220px] lg:max-w-[250px]">
      <div className="glass-panel glass-panel-compact">
        <div className="flex flex-col gap-2">
          <PenLine
            className="h-4 w-4 text-[var(--color-on-dark-muted)]"
            aria-hidden
            strokeWidth={1.75}
          />

          <p className="text-ui-micro-label text-[var(--color-on-dark-muted)]">
            {DECLARE_PROMPT.context}
          </p>

          <p className="text-user-words text-[var(--color-on-dark)]">
            {DECLARE_PROMPT.intention}
          </p>
        </div>
      </div>
    </div>
  );
}
