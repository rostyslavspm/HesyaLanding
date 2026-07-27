import { Waves } from "lucide-react";
import { REFLECT_PROMPT } from "@/lib/content/heroMoments";

/** Reflect — the close: one question, three marks, nothing scored. */
export default function ReflectCard() {
  return (
    <div className="glass-panel glass-panel-compact pointer-events-none w-full max-w-[200px] lg:max-w-[224px]">
      <div className="flex flex-col gap-2">
        <Waves
          className="h-4 w-4 text-[var(--color-accent)]"
          aria-hidden
          strokeWidth={1.75}
        />

        <p className="text-user-words text-[var(--color-on-dark)]">
          {REFLECT_PROMPT.context}
        </p>

        <div className="mt-0.5 flex flex-wrap gap-1">
          {REFLECT_PROMPT.moods.map((mood) => (
            <span
              key={mood}
              className="text-ui-caption rounded bg-white/10 px-2 py-1 text-[var(--color-on-dark-secondary)]"
            >
              {mood}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
