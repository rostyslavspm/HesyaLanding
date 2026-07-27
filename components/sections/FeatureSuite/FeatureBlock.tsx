import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HesyaFeature } from "@/lib/content/features";
import { TYPE } from "@/lib/design-system";

type FeatureBlockProps = {
  feature: HesyaFeature;
  index: number;
};

/**
 * One moment of a session, given a full block of the page rather than a
 * panel in a swapping deck — copy on one side, the real screen on the other.
 */
export default function FeatureBlock({ feature, index }: FeatureBlockProps) {
  const Icon = feature.icon;
  const isExternal = feature.linkHref.startsWith("http");

  const link = isExternal ? (
    <a
      href={feature.linkHref}
      target="_blank"
      rel="noopener noreferrer"
      className="text-link-accent inline-flex min-h-11 items-center gap-3"
    >
      <span>{feature.linkText}</span>
      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden strokeWidth={2} />
    </a>
  ) : (
    <Link
      href={feature.linkHref}
      className="text-link-accent inline-flex min-h-11 items-center gap-3"
    >
      <span>{feature.linkText}</span>
      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden strokeWidth={2} />
    </Link>
  );

  return (
    <article
      id={feature.id}
      className="feature-block"
      aria-labelledby={`${feature.id}-heading`}
    >
      <div className="feature-block-grid">
        <div className="feature-block-copy">
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

          <h3
            id={`${feature.id}-heading`}
            className={`${TYPE.featureTitle} mb-5 max-w-[18ch]`}
          >
            {feature.heading}
          </h3>

          <p className={`${TYPE.featureBody} mb-6 max-w-[46ch]`}>
            {feature.description}
          </p>

          <div className="mb-8">{link}</div>

          <ul className="list-feature">
            {feature.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="feature-block-media">
          <div aria-hidden className="feature-phone-stage-bg" />
          <Image
            src={feature.screenshot}
            alt={feature.screenshotAlt}
            width={1260}
            height={2736}
            className="feature-block-image screenshot-outline"
            sizes="(max-width: 768px) 70vw, (min-width: 1280px) 380px, 30vw"
            priority={index === 0}
          />
        </div>
      </div>
    </article>
  );
}
