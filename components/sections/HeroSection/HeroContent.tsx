"use client";

import Link from "next/link";
import CtaArrow from "@/components/ui/CtaArrow";
import { BTN, TYPE, URLS } from "@/lib/design-system";

export default function HeroContent() {
  return (
    <div className="relative flex flex-col items-center gap-3 text-center md:gap-5">
      <h1
        className={`hero-enter-item hero-enter-headline ${TYPE.marketingHero} max-w-[880px] pb-1 text-[var(--color-silver)] font-light`}
      >
        Name what matters.
        <br className="hidden sm:inline" /> Stay with it.
      </h1>

      <div className="hero-enter-item hero-enter-cta mt-2 flex flex-col items-center md:mt-3">
        <Link
          id="hero-cta"
          href={URLS.appStore}
          className={`btn-magnetic ${BTN.ctaDark}`}
        >
          <span>Get the app</span>
          <CtaArrow />
        </Link>
      </div>
    </div>
  );
}
