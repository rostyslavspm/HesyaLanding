"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { HESYA_FEATURES } from "@/lib/content/features";
import { gsap } from "@/lib/motion/gsap";

type SuiteTabsProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

function TabUnderline({ active }: { active: boolean }) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: active ? 0 : length,
    });

    if (active) {
      gsap.fromTo(
        path,
        { strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 0.55, ease: "power2.out" }
      );
    }
  }, [active]);

  return (
    <svg
      className="tab-underline"
      viewBox="0 0 120 8"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        ref={pathRef}
        d="M2,6 C28,1 52,7 78,4 S112,2 118,5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

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
            style={{ "--tab-accent": feature.accent } as CSSProperties}
            onClick={() => onSelect(feature.id)}
          >
            <Icon
              className="relative z-10 h-5 w-5 shrink-0"
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
            <TabUnderline active={isActive} />
          </button>
        );
      })}
    </div>
  );
}
