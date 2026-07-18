"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BTN, TYPE, URLS } from "@/lib/design-system";

export default function HeroContent() {
  return (
    <div className="relative flex flex-col items-center gap-3 text-center md:gap-4">
      <h1
        className={`hero-enter-item hero-enter-headline ${TYPE.marketingHero} max-w-[920px] pb-1 text-[var(--color-on-dark)]`}
      >
        Return to what matters,
        <br className="hidden sm:block" />
        {" "}in the moment you drift
      </h1>

      <p
        className={`hero-enter-item hero-enter-sub ${TYPE.marketingSubhead} max-w-[520px] text-[var(--color-on-dark-secondary)]`}
      >
        Name one intention. When you drift, Hesya helps you notice and return,
        without guilt or control.
      </p>

      <div className="hero-enter-item hero-enter-cta mt-1 flex flex-col items-center md:mt-2">
        <Link href={URLS.testflight} className={`btn-magnetic ${BTN.ctaDark}`}>
          <span>Get the beta</span>
          <span className="btn-cta-icon" aria-hidden>
            <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </span>
        </Link>
      </div>
    </div>
  );
}
