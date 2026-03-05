"use client";

import AppStoreBadge from "./AppStoreBadge";
import OrbGraphic from "./OrbGraphic";
import Reveal from "./motion/Reveal";
import TextReveal from "./motion/TextReveal";

const TESTFLIGHT_URL = "https://testflight.apple.com/join/2sE4MyhY";

/**
 * FinalCTA — full-viewport closing ritual. Gradient + orb + TestFlight CTA.
 */
export default function FinalCTASection() {
  return (
    <section
      className="section-full noise-overlay relative overflow-hidden bg-fixed-fallback"
      style={{
        background:
          "linear-gradient(160deg, var(--base) 0%, var(--mid) 50%, var(--accent) 100%)",
      }}
      aria-label="Try Hesya on TestFlight"
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
              Hesya is available for beta testing on TestFlight.
              Try it free — no tracking, no noise.
            </p>
          </Reveal>

          <Reveal variant="slide-up" delay={0.35}>
            <AppStoreBadge
              href={TESTFLIGHT_URL}
              label="Try the beta on TestFlight"
              footer={null}
            />
          </Reveal>

          <Reveal delay={0.45}>
            <p
              className="text-micro"
              style={{ color: "var(--foreground-muted)" }}
            >
              Free&nbsp;&middot;&nbsp;No tracking&nbsp;&middot;&nbsp;iOS
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
