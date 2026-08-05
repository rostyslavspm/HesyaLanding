import { Sparkles } from "lucide-react";
import { RETURN_PROMPT } from "@/lib/content/heroMoments";

export default function ReturnPromptCard() {
  return (
    <div className="hero-card-return pointer-events-none w-full max-w-[220px] lg:max-w-[250px]">
      <div className="glass-panel glass-panel-compact">
        <div className="flex flex-col gap-2">
          <Sparkles
            className="h-4 w-4 text-[var(--color-accent)]"
            aria-hidden
            strokeWidth={1.75}
          />

          <p className="text-ui-micro-label text-[var(--color-on-dark-muted)]">
            {RETURN_PROMPT.context}
          </p>

          <p className="text-user-words text-[var(--color-on-dark)]">
            {RETURN_PROMPT.intention}
          </p>

          <div className="mt-1 flex flex-col gap-1">
            {RETURN_PROMPT.actions.map((action) => (
              <span
                key={action}
                className="text-ui-caption rounded bg-white/10 px-2 py-1 text-[var(--color-on-dark-secondary)]"
              >
                {action}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
