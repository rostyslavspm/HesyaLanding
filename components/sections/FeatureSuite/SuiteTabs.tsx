"use client";

import { HESYA_FEATURES } from "@/lib/content/features";

type SuiteTabsProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

export default function SuiteTabs({ activeId, onSelect }: SuiteTabsProps) {
  return (
    <div className="tab-bar" role="tablist" aria-label="Hesya features">
      {HESYA_FEATURES.map((feature) => {
        const Icon = feature.icon;
        const isActive = activeId === feature.id;

        return (
          <button
            key={feature.id}
            id={`tab-${feature.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={feature.id}
            data-active={isActive ? "true" : "false"}
            className="tab-item relative"
            onClick={() => onSelect(feature.id)}
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
          </button>
        );
      })}
    </div>
  );
}
