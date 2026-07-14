"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BTN, SECTIONS, TYPE, URLS } from "@/lib/design-system";
import { prefersReducedMotion } from "@/lib/motion/prefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function DownloadSection() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".download-content", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      id="download"
      aria-label="Download Hesya"
      className={`${SECTIONS.sky} section-bleed-x relative overflow-hidden section-pad-compact`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 h-[120%] w-[min(42vw,520px)] -translate-y-1/2 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, transparent 68%)",
          maskImage: "linear-gradient(to left, black 20%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 20%, transparent 100%)",
        }}
      />

      <div className="container-marketing relative z-[1]">
        <div className="download-content flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className={`${TYPE.marketingDisplay} max-w-[720px]`}>
            Presence that lives where you reach
          </h2>
          <a href={URLS.testflight} className={`btn-magnetic shrink-0 ${BTN.ctaBanner}`}>
            Get the beta
          </a>
        </div>
      </div>
    </section>
  );
}
