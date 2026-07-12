"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TESTFLIGHT_URL = "https://testflight.apple.com/join/2sE4MyhY";

export default function FinaleV2() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".finale-content", {
        scrollTrigger: { trigger: container.current, start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="container-hesya flex flex-col items-center text-center">
        <div className="finale-content max-w-2xl">
          <h2 className="text-display-sans mb-6 text-[var(--color-soft-obsidian)]">
            One intention is
            <br />
            enough to begin.
          </h2>
          <p className="text-body mb-10 text-[var(--foreground-muted)]">
            Hesya is in beta on TestFlight. Free, private, and quiet by design — no accounts,
            nothing that identifies you.
          </p>
          <a href={TESTFLIGHT_URL} className="btn-primary-gradient btn-magnetic">
            Try the beta on TestFlight
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
