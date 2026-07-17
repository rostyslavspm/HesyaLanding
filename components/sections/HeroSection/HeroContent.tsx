"use client";

import Link from "next/link";
import { BTN, TYPE, URLS } from "@/lib/design-system";

export default function HeroContent() {
  return (
    <div className="relative flex flex-col items-center gap-3 text-center md:gap-4">
      <h1
        className={`${TYPE.marketingHero} max-w-[920px] text-[var(--color-on-dark)]`}
      >
        Return to what matters,
        <br className="hidden sm:block" />
        {" "}in the moment you drift
      </h1>

      <p
        className={`${TYPE.marketingSubhead} max-w-[580px] text-[var(--color-on-dark-secondary)]`}
      >
        Name one intention. When attention drifts, Hesya helps you notice and
        return in your own words. Without guilt. Without control.
      </p>

      <div className="mt-1 flex flex-col items-center md:mt-2">
        <Link href={URLS.testflight} className={`btn-magnetic ${BTN.ctaDark}`}>
          <span>Get the beta</span>
          <span className="btn-cta-icon" aria-hidden>
            <svg className="h-[18px] w-4" viewBox="0 0 16 18" fill="none">
              <path d="M8 0L16 18H0L8 0Z" fill="currentColor" opacity="0.9" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
