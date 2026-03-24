"use client";

import AppStoreBadge from "./AppStoreBadge";
import OrbGraphic from "./OrbGraphic";
import Reveal from "./motion/Reveal";
import TextReveal from "./motion/TextReveal";

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
      <div aria-hidden className="cta-vignette" />
      <div className="container-hesya relative z-10">
        <div className="mx-auto flex max-w-[42rem] flex-col items-center gap-10 text-center">
          <Reveal variant="scale" duration={1.5}>
            <OrbGraphic size={200} />
          </Reveal>

          <TextReveal
            text="Your mind already knows the way back."
            tag="p"
            className="text-display-sm"
            style={{ fontStyle: "italic" }}
            stagger={0.05}
            delay={0.15}
          />

          <Reveal variant="blur" delay={0.25}>
            <p
              className="text-body text-reading"
              style={{ color: "var(--foreground-secondary)" }}
            >
              Hesya is coming to iPhone soon. Leave your email and
              we&apos;ll let you know once — when it&apos;s ready.
            </p>
          </Reveal>

          <Reveal variant="slide-up" delay={0.35}>
            <AppStoreBadge
              onClick={onOpenNotify}
              label="Be the first to try Hesya"
              footer={null}
            />
          </Reveal>

          <Reveal delay={0.45}>
            <p
              className="text-micro"
              style={{ color: "var(--foreground-muted)" }}
            >
              One email · No spam · Unsubscribe anytime
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
