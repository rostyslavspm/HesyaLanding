"use client";

import OrbGraphic from "./OrbGraphic";
import AppStoreBadge from "./AppStoreBadge";
import FadeIn from "./FadeIn";

/**
 * ClosingCTA — full-viewport closing section.
 * Large orb, serif quote, App Store badge.
 * Returns to warmest peach tone via inline gradient.
 */
export default function ClosingCTA() {
  return (
    <section
      className="section-full noise-overlay relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #F5E6D3 0%, #EDD9C4 50%, #F0DCC8 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-10 text-center">

        <FadeIn duration={1.5}>
          <OrbGraphic size={160} />
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="text-display-sm"
            style={{ fontStyle: "italic" }}
          >
            your mind has always<br />known how to return.
          </p>
        </FadeIn>

        <FadeIn delay={0.32}>
          <p className="text-body" style={{ color: "var(--foreground-secondary)" }}>
            hesya helps you notice when to start.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <AppStoreBadge />
        </FadeIn>
      </div>
    </section>
  );
}
