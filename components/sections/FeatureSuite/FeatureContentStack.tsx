import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HESYA_FEATURES } from "@/lib/content/features";
import { TYPE } from "@/lib/design-system";

type FeatureContentStackProps = {
  activeId: string;
};

export default function FeatureContentStack({
  activeId,
}: FeatureContentStackProps) {
  return (
    <div className="feature-content-stack">
      {HESYA_FEATURES.map((feature) => {
        const Icon = feature.icon;
        const isActive = feature.id === activeId;
        const isExternalLink = feature.linkHref.startsWith("http");

        return (
          <div
            key={feature.id}
            id={feature.id}
            role="tabpanel"
            aria-labelledby={`tab-${feature.id}`}
            aria-hidden={!isActive}
            className={`feature-content-panel${isActive ? " is-active" : ""}`}
          >
            <div className="feature-content-panel-inner">
              <div className="mb-4 flex items-center gap-3">
                <Icon
                  className="h-5 w-5 shrink-0"
                  aria-hidden
                  strokeWidth={1.75}
                  style={{ color: feature.accent }}
                />
                <span
                  className={TYPE.productLabel}
                  style={{ color: feature.accent }}
                >
                  {feature.title}
                </span>
              </div>

              <h3 className={`${TYPE.featureTitle} mb-5 max-w-[540px]`}>
                {feature.heading}
              </h3>
              <p className={`${TYPE.featureBody} mb-6 max-w-[92%]`}>
                {feature.description}
              </p>

              {isExternalLink ? (
                <a
                  href={feature.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link-accent mb-8 inline-flex items-center gap-3"
                  tabIndex={isActive ? 0 : -1}
                >
                  <span>{feature.linkText}</span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0"
                    aria-hidden
                    strokeWidth={2}
                  />
                </a>
              ) : (
                <Link
                  href={feature.linkHref}
                  className="text-link-accent mb-8 inline-flex items-center gap-3"
                  tabIndex={isActive ? 0 : -1}
                >
                  <span>{feature.linkText}</span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0"
                    aria-hidden
                    strokeWidth={2}
                  />
                </Link>
              )}

              <ul className="list-feature">
                {feature.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
