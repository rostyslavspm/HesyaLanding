"use client";

import { HERO_WIDGETS } from "@/lib/content/heroMoments";
import ReturnPromptCard from "./ReturnPromptCard";
import HeroPhone from "./HeroPhone";
import HeroWidgets from "./HeroWidgets";

export default function HeroShowcase() {
  return (
    <div className="hero-showcase">
      <div className="hero-showcase-stage">
        <div className="hero-composition">
          <div className="hero-composition-side hero-composition-side--left">
            <ReturnPromptCard />
          </div>
          <HeroPhone />
          <div className="hero-composition-side hero-composition-side--right">
            <HeroWidgets />
          </div>
        </div>
      </div>

      <div className="hero-showcase-mobile relative z-[3] flex flex-col gap-2 px-[var(--gutter)] pb-6 pt-4 md:hidden">
        {HERO_WIDGETS.slice(0, 2).map((widget) => (
          <div key={widget.id} className="glass-panel glass-panel-compact">
            <span className="text-[9px] uppercase tracking-wider text-[var(--color-on-dark-muted)]">
              {widget.label}
            </span>
            <p className="mt-1 text-xs text-[var(--color-on-dark)]">{widget.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
