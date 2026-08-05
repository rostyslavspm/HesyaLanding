"use client";

import HeroBackdrop from "./HeroBackdrop";
import HeroContent from "./HeroContent";
import HeroShowcase from "./HeroShowcase";
import HeroDrift from "./HeroDrift";

export default function HeroSection() {
  return (
    <section
      id="hero-viewport"
      aria-label="Hero"
      data-header-theme="dark"
      className="hero-stage section-bleed-x relative -mt-[var(--header-height)] flex h-[100svh] min-h-[100svh] max-h-[100svh] flex-col overflow-hidden bg-[var(--color-hero-bg)] pt-[var(--header-height)] text-[var(--color-on-dark)]"
    >
      <HeroDrift />
      <HeroBackdrop />

      <div className="relative z-[2] flex min-h-[calc(100svh-var(--header-height))] flex-1 flex-col gap-12 md:gap-8">
        <div className="container-marketing hero-copy shrink pt-4 md:pt-2">
          <HeroContent />
        </div>
        <HeroShowcase />
      </div>
    </section>
  );
}
