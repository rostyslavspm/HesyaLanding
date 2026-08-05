"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BTN, TYPE, URLS } from "@/lib/design-system";

export default function HeroContent() {
  return (
    <div className="relative flex flex-col items-center gap-3 text-center md:gap-4">
      <h1
        className={`hero-enter-item hero-enter-headline ${TYPE.marketingHero} max-w-[920px] pb-1 text-[var(--color-on-dark)]`}
      >
        Choose where your attention goes.
      </h1>

      <p
        className={`hero-enter-item hero-enter-sub ${TYPE.marketingSubhead} max-w-[560px] text-[var(--color-on-dark-secondary)]`}
      >
        Reclaim your attention when it drifts — no locked apps, no daily
        streaks to keep.
      </p>

      <div className="hero-enter-item hero-enter-cta mt-1 flex flex-col items-center md:mt-2">
        <Link href={URLS.appStore} className={`btn-magnetic ${BTN.ctaDark}`}>
          <span>Get the app</span>
          <span className="btn-cta-icon" aria-hidden>
            <span className="btn-cta-icon-flare-a" />
            <span className="btn-cta-icon-flare-b" />
            <span className="btn-cta-icon-sheen" />
            <ArrowRight
              className="btn-cta-icon-glyph h-[18px] w-[18px]"
              strokeWidth={1.75}
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
