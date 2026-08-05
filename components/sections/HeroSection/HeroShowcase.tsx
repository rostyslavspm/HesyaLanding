import { HERO_WIDGETS } from "@/lib/content/heroMoments";
import DeclareCard from "./DeclareCard";
import ReturnPromptCard from "./ReturnPromptCard";
import ReflectCard from "./ReflectCard";
import HeroPhone from "./HeroPhone";
import HeroWidgets from "./HeroWidgets";

/**
 * The four moments orbiting the intention. Each card is a real product
 * surface — declare, return, reflect, presence — kept deliberately quiet so
 * the focus star stays the only bright thing in the field.
 */
export default function HeroShowcase() {
  return (
    <div className="hero-showcase">
      <div className="hero-showcase-stage">
        <div className="hero-composition">
          <div className="hero-composition-side hero-composition-side--left">
            <DeclareCard />
            <ReturnPromptCard />
          </div>

          <HeroPhone />

          <div className="hero-composition-side hero-composition-side--right">
            <HeroWidgets />
            <ReflectCard />
          </div>
        </div>
      </div>

      <div className="hero-showcase-mobile z-[3] flex flex-col gap-2 md:hidden">
        {HERO_WIDGETS.slice(0, 1).map((widget) => (
          <div
            key={widget.id}
            className="glass-panel glass-panel-compact"
          >
            <span className="text-ui-micro-label text-[var(--color-on-dark-muted)]">
              {widget.label}
            </span>
            <p className="text-ui-caption mt-1 text-[var(--color-on-dark)]">
              {widget.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
