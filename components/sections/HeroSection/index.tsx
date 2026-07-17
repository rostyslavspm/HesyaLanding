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
      className="hero-stage section-dark section-bleed-x relative -mt-[var(--header-height)] flex min-h-[100svh] flex-col bg-[var(--color-hero-bg)] pt-[var(--header-height)]"
    >
      <HeroDrift />
      <HeroBackdrop />

      <div className="relative z-[2] flex min-h-[calc(100svh-var(--header-height))] flex-1 flex-col gap-8 md:gap-0">
        <div className="container-marketing hero-copy shrink pt-4 md:pt-6 lg:pt-8">
          <HeroContent />
        </div>
        <HeroShowcase />
      </div>
    </section>
  );
}
