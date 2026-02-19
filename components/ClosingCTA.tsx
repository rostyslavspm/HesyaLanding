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
      className="section-full noise-overlay relative overflow-hidden bg-fixed-fallback"
      style={{
        background: "linear-gradient(160deg, var(--base) 0%, var(--mid) 50%, var(--accent) 100%)",
      }}
      aria-label="Get Hesya - Coming soon to App Store"
    >
      <div className="container-hesya relative z-10 flex max-w-[42rem] flex-col items-center gap-10 text-center">

        <FadeIn duration={1.5}>
          <OrbGraphic size={160} />
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="text-display-sm"
            style={{ fontStyle: "italic" }}
          >
            Your mind has always<br />known how to return.
          </p>
        </FadeIn>

        <FadeIn delay={0.32}>
          <p className="text-body" style={{ color: "var(--foreground-secondary)" }}>
            Hesya helps you notice when to start.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="flex flex-col items-center gap-3">
            <AppStoreBadge />
            <p className="text-micro" style={{ color: "var(--foreground-muted)" }}>
              Get notified on launch.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
