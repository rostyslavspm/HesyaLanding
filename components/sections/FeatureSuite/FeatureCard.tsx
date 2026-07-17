"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HESYA_FEATURES } from "@/lib/content/features";
import { TYPE } from "@/lib/design-system";

function FeatureMedia({
  screenshot,
  screenshotAlt,
  overlayVariant,
}: {
  screenshot: string;
  screenshotAlt: string;
  overlayVariant: "purple" | "teal" | "rose" | "blue";
}) {
  const overlays: Record<string, string> = {
    purple:
      "radial-gradient(circle at 100% 0%, rgba(188,132,241,0.19) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(184,220,232,0.15) 0%, transparent 50%)",
    teal:
      "radial-gradient(circle at 100% 0%, rgba(130,158,147,0.19) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(184,220,232,0.13) 0%, transparent 50%)",
    rose:
      "radial-gradient(circle at 100% 0%, rgba(196,181,253,0.17) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(130,158,147,0.13) 0%, transparent 50%)",
    blue:
      "radial-gradient(circle at 100% 0%, rgba(184,220,232,0.17) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(130,158,147,0.15) 0%, transparent 50%)",
  };

  return (
    <div className="relative flex basis-1/2 items-stretch overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #e8e4dc 0%, #d4ddd8 50%, #c8d4e0 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: overlays[overlayVariant] }}
      />
      <div className="relative flex w-full items-center justify-center p-6 md:p-9">
        <div className="relative w-full max-w-[420px] max-h-[85vh] overflow-hidden rounded-[2rem] shadow-[var(--shadow-hero)]">
          <Image
            src={screenshot}
            alt={screenshotAlt}
            width={660}
            height={1434}
            className="h-auto max-h-[85vh] w-full object-contain select-none"
            sizes="(max-width: 768px) 80vw, 420px"
          />
        </div>
      </div>
    </div>
  );
}

const OVERLAY_VARIANTS = ["purple", "teal", "rose", "blue"] as const;

export default function FeatureCard() {
  return (
    <>
      {HESYA_FEATURES.map((feature, index) => {
        const Icon = feature.icon;
        const overlayVariant = OVERLAY_VARIANTS[index % OVERLAY_VARIANTS.length];
        const isReversed = index % 2 === 1;
        const isExternalLink = feature.linkHref.startsWith("http");

        return (
          <article
            key={feature.id}
            role="tabpanel"
            aria-labelledby={`tab-${feature.id}`}
            className="feature-card scroll-mt-[calc(var(--header-height)+var(--suite-sticky-height)+var(--scroll-anchor-gap))] border-y border-[var(--border-subtle)] bg-[var(--color-stone-100)] first:border-t-0 last:border-b-0"
          >
            <span id={feature.id} className="sr-only" aria-hidden="true" />
            <div
              className={`flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex basis-1/2 flex-col">
                <div className="flex min-h-16 items-center gap-3 border-b border-[var(--border-subtle)] px-[18px] md:px-9">
                  <Icon
                    className="h-5 w-5 shrink-0 text-[var(--color-soft-obsidian)]"
                    aria-hidden
                    strokeWidth={1.75}
                  />
                  <span className={TYPE.productLabel}>{feature.title}</span>
                </div>

                <div className="flex flex-1 flex-col justify-center px-[18px] py-8 md:p-9">
                  <h3 className={`${TYPE.featureTitle} mb-[18px] max-w-[900px] md:mb-6`}>
                    {feature.heading}
                  </h3>
                  <p className={`${TYPE.featureBody} mb-6 max-w-[92%] md:mb-8`}>
                    {feature.description}
                  </p>

                  {isExternalLink ? (
                    <a
                      href={feature.linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link-accent mb-9 inline-flex items-center gap-3 md:mb-8"
                    >
                      <span>{feature.linkText}</span>
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden strokeWidth={2} />
                    </a>
                  ) : (
                    <Link
                      href={feature.linkHref}
                      className="text-link-accent mb-9 inline-flex items-center gap-3 md:mb-8"
                    >
                      <span>{feature.linkText}</span>
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden strokeWidth={2} />
                    </Link>
                  )}

                  <ul className="list-feature">
                    {feature.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <FeatureMedia
                screenshot={feature.screenshot}
                screenshotAlt={feature.screenshotAlt}
                overlayVariant={overlayVariant}
              />
            </div>
          </article>
        );
      })}
    </>
  );
}
