"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import FloatingGlassCard from "./ui/FloatingGlassCard";
import ParallaxLayer from "./motion/ParallaxLayer";
import TiltOnMouse from "./motion/TiltOnMouse";

const TESTFLIGHT_URL = "https://testflight.apple.com/join/2sE4MyhY";

export default function HeroV2() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.to(".hero-float-card", {
        y: "+=8",
        duration: 3,
        ease: "sine.inOut",
        stagger: { each: 0.4, from: "random" },
        repeat: -1,
        yoyo: true,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative min-h-[92vh] overflow-hidden bg-gradient-to-b from-[var(--color-hero-bg)] to-[var(--color-hero-gradient-end)] pb-20 pt-12 md:pb-32 md:pt-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-hero-bg)]/60 via-transparent to-[var(--color-hero-gradient-end)]" />

      <div className="container-hesya relative z-10 flex flex-col items-center text-center">
        <h1 className="hero-animate text-display-sans mb-6 max-w-4xl text-white">
          Name what matters.
          <br />
          Stay with it.
        </h1>

        <p className="hero-animate mb-8 max-w-2xl text-lg text-white/70 md:text-xl">
          Declare what you want to have done, start a focus session, and Hesya holds it with you —
          returning you in your own words when attention drifts.
        </p>

        <div className="hero-animate mb-16">
          <a href={TESTFLIGHT_URL} className="btn-primary-gradient">
            Try the beta on TestFlight
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-6 text-sm uppercase tracking-wide text-white/40">
            Built to feel native. Designed to step back.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-4xl">
          <div className="relative flex min-h-[320px] items-end justify-center md:min-h-[400px]">
            <ParallaxLayer speed={0.2} className="absolute left-[5%] top-[10%] z-20 md:left-[8%]">
              <FloatingGlassCard delay={0} className="hero-float-card w-[140px] md:w-[180px]">
                <p className="text-eyebrow mb-2 text-white/50">Intent</p>
                <p className="text-sm font-medium text-white">Finish the proposal</p>
              </FloatingGlassCard>
            </ParallaxLayer>

            <ParallaxLayer speed={0.15} className="absolute right-[5%] top-[5%] z-20 md:right-[10%]">
              <FloatingGlassCard delay={1.2} className="hero-float-card w-[150px] md:w-[190px]">
                <p className="text-eyebrow mb-2 text-white/50">Session</p>
                <p className="font-mono text-2xl font-light text-white">42:18</p>
                <p className="mt-1 text-xs text-white/50">Deep Work</p>
              </FloatingGlassCard>
            </ParallaxLayer>

            <ParallaxLayer speed={0.25} className="absolute bottom-[15%] left-[15%] z-20 hidden sm:block">
              <FloatingGlassCard delay={2.4} className="hero-float-card w-[160px]">
                <p className="text-eyebrow mb-2 text-white/50">Widget</p>
                <p className="text-sm text-white/80">Be present at dinner</p>
              </FloatingGlassCard>
            </ParallaxLayer>

            <ParallaxLayer speed={0.1} className="relative z-10">
              <TiltOnMouse className="hero-animate">
                <div className="animate-breath w-[180px] md:w-[240px]">
                  <Image
                    src="/screenshots/screen-home.svg"
                    alt="Hesya — today's intent on the home screen"
                    width={660}
                    height={1434}
                    className="h-auto w-full select-none rounded-[2.5rem] shadow-[0_40px_120px_rgba(0,0,0,0.4)]"
                    priority
                  />
                </div>
              </TiltOnMouse>
            </ParallaxLayer>
          </div>
        </div>
      </div>
    </section>
  );
}
