import { Sparkles } from "lucide-react";
import { RETURN_PROMPT } from "@/lib/content/heroMoments";

export default function ReturnPromptCard() {
  return (
    <div className="glass-panel glass-panel-compact pointer-events-none w-full max-w-[220px] lg:max-w-[250px]">
      <div className="flex flex-col gap-2">
        <Sparkles className="h-4 w-4 text-[var(--color-on-dark)]" aria-hidden />

        <p className="text-ui-caption text-[var(--color-on-dark-secondary)]">
          {RETURN_PROMPT.context}
        </p>

        <span className="text-ui-caption inline-flex w-fit rounded-md border border-[var(--border-dark-strong)] px-2 py-0.5 text-[var(--color-on-dark)]">
          {RETURN_PROMPT.intention}
        </span>

        <p className="text-ui-caption text-[var(--color-on-dark-secondary)]">
          {RETURN_PROMPT.offer}
        </p>

        <span className="text-ui-caption self-end rounded-full rounded-br-none bg-white/13 px-3 py-1.5 text-[var(--color-on-dark)]">
          {RETURN_PROMPT.reply}
        </span>
      </div>
    </div>
  );
}
