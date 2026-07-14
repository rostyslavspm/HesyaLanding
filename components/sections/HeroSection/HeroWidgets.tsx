import { HERO_WIDGETS } from "@/lib/content/heroMoments";

export default function HeroWidgets() {
  return (
    <div className="pointer-events-none w-full max-w-[168px]">
      <div className="glass-panel glass-panel-compact">
        <div className="flex flex-col gap-1.5">
          {HERO_WIDGETS.map((widget) => (
            <div
              key={widget.id}
              className="flex flex-col gap-0.5 rounded-xl bg-white/10 px-2.5 py-1.5"
            >
              <span className="text-[9px] uppercase tracking-wider text-[var(--color-on-dark-muted)]">
                {widget.label}
              </span>
              <span className="text-xs text-[var(--color-on-dark)]">{widget.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
