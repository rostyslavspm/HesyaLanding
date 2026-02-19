"use client";

import AppStoreBadge from "./AppStoreBadge";
import OrbGraphic from "./OrbGraphic";
import FadeIn from "./FadeIn";

type FinalCTASectionProps = {
  onOpenNotify?: () => void;
};

/**
 * FinalCTA — full-viewport closing ritual. Gradient + orb + launch list CTA.
 */
export default function FinalCTASection({ onOpenNotify }: FinalCTASectionProps) {
  return (
    <section
      className="section-full noise-overlay relative overflow-hidden bg-fixed-fallback"
      style={{
        background:
          "linear-gradient(160deg, var(--base) 0%, var(--mid) 50%, var(--accent) 100%)",
      }}
      aria-label="Get notified when Hesya launches"
    >
      <div className="container-hesya relative z-10">
        <div className="mx-auto flex max-w-[42rem] flex-col items-center gap-10 text-center">
          <FadeIn duration={1.5}>
            <OrbGraphic size={200} />
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-display-sm" style={{ fontStyle: "italic" }}>
              Get notified on launch.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p
              className="text-body text-reading"
              style={{ color: "var(--foreground-secondary)" }}
            >
              Hesya will be available on iPhone soon. We'll email you once when
              it's ready.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <AppStoreBadge
              onClick={onOpenNotify}
              label="Join the launch list"
              footer={null}
            />
          </FadeIn>

          <FadeIn delay={0.45}>
            <p
              className="text-micro"
              style={{ color: "var(--foreground-muted)" }}
            >
              No spam · Unsubscribe anytime · iOS only
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
