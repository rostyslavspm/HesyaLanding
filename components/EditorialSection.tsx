"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DURATION, GSAP_EASE } from "../lib/motion";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialSection() {
  const container = useRef<HTMLDivElement>(null);
  const pearlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let hostEl: HTMLDivElement | null = null;
    let pointerMoveHandler: ((event: PointerEvent) => void) | null = null;
    let pointerLeaveHandler: (() => void) | null = null;

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        const qx = gsap.quickTo(pearlRef.current, "x", { duration: 0.9, ease: GSAP_EASE.smooth });
        const qy = gsap.quickTo(pearlRef.current, "y", { duration: 0.9, ease: GSAP_EASE.smooth });
        pointerMoveHandler = (event: PointerEvent) => {
          if (!container.current) return;
          const rect = container.current.getBoundingClientRect();
          const mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
          const mouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
          qx(mouseX * 48);
          qy(mouseY * 48);
        };
        pointerLeaveHandler = () => {
          qx(0);
          qy(0);
        };

        hostEl = container.current;
        hostEl?.addEventListener("pointermove", pointerMoveHandler);
        hostEl?.addEventListener("pointerleave", pointerLeaveHandler);
      }

      gsap.from(".editorial-animate", {
        scrollTrigger: { trigger: container.current, start: "top 72%" },
        y: 36,
        opacity: 0,
        duration: DURATION.heroLayer,
        stagger: 0.12,
        ease: GSAP_EASE.standard,
      });
    }, container);

    return () => {
      if (hostEl && pointerMoveHandler) {
        hostEl.removeEventListener("pointermove", pointerMoveHandler);
      }
      if (hostEl && pointerLeaveHandler) {
        hostEl.removeEventListener("pointerleave", pointerLeaveHandler);
      }
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="editorial-section"
      ref={container}
      className="section-dark section-standard relative overflow-hidden"
    >
      <div
        ref={pearlRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[820px] md:w-[820px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(132,153,255,0.28) 0%, rgba(126,219,248,0.12) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-hesya relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="editorial-animate relative overflow-hidden rounded-[2rem] border border-white/24 bg-white/[0.06] p-2.5 shadow-[var(--shadow-glass)]">
          <Image
            src="/hero/editorial-focus.svg"
            alt="Hesya reflective focus visualization"
            width={1200}
            height={760}
            className="h-auto w-full rounded-[1.6rem]"
            priority={false}
          />
        </div>

        <div className="text-left">
          <p className="editorial-animate text-eyebrow mb-4 text-white/60">Becoming focused again</p>
          <h2 className="editorial-animate mb-5 text-[clamp(2.25rem,4.5vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-white">
            Three breaths.
          </h2>
          <p
            className="editorial-animate mb-5 text-[1.55rem] italic leading-[1.3] text-white/74 md:text-[1.9rem]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            A pause between drift and choice.
          </p>
          <p className="editorial-animate mb-7 max-w-lg text-body-sm text-white/70">
            When attention scatters, Hesya helps you reset gently and return on purpose. Less
            urgency, more intention.
          </p>
          <Link
            href="/support"
            className="editorial-animate inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
          >
            Read the full workflow
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
