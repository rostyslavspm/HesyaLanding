"use client";

import { HESYA_FEATURES } from "@/lib/content/features";

type SuiteTabsProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

/**
 * Section nav for the suite. Every block is present in the document now, so
 * these are anchor links (with `aria-current`), not ARIA tabs — the active
 * state follows scroll position and clicking jumps to the block.
 */
export default function SuiteTabs({ activeId, onSelect }: SuiteTabsProps) {
  return (
    <nav className="tab-bar" aria-label="Moments in a session">
      {HESYA_FEATURES.map((feature) => {
        const Icon = feature.icon;
        const isActive = activeId === feature.id;

        return (
          <a
            key={feature.id}
            href={`#${feature.id}`}
            aria-current={isActive ? "true" : undefined}
            data-active={isActive ? "true" : "false"}
            className="tab-item relative"
            onClick={(event) => {
              event.preventDefault();
              onSelect(feature.id);
            }}
          >
            <Icon
              className="tab-item-icon relative z-10 h-5 w-5 shrink-0"
              aria-hidden
              strokeWidth={1.75}
              style={{ color: isActive ? feature.accent : undefined }}
            />
            <span
              className="text-product-label relative z-10 tab-item-label"
              style={{ color: isActive ? feature.accent : undefined }}
            >
              {feature.title}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
