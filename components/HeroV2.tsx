"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, CalendarClock, Sparkles } from "lucide-react";
import FloatingGlassCard from "./ui/FloatingGlassCard";
import ParallaxLayer from "./motion/ParallaxLayer";
import TiltOnMouse from "./motion/TiltOnMouse";
import { DURATION, GSAP_EASE } from "../lib/motion";

const TESTFLIGHT_URL = "https://testflight.apple.com/join/2sE4MyhY";

export default function HeroV2() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 40,
        opacity: 0,
        duration: DURATION.hero,
        stagger: 0.12,
        ease: GSAP_EASE.standard,
      });

      if (prefersReduced) return;

      gsap.to(".hero-float-loop", {
        y: -10,
        duration: DURATION.float,
        stagger: { each: 0.35, from: "random" },
        ease: GSAP_EASE.drift,
        repeat: -1,
        yoyo: true,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero-section"
      ref={container}
      className="section-standard-lg relative min-h-[96vh] overflow-hidden bg-gradient-to-b from-[var(--color-hero-bg)] via-[var(--color-hero-gradient-mid)] to-[var(--color-hero-gradient-end)] pt-12"
    >
      <Image
        src="/artem-zhukov-uTQxfPzPfdY-unsplash.jpg"
        alt=""
        fill
        priority
        className="pointer-events-none object-cover object-center opacity-84"
      />
      <Image
        src="/hero/hero-atmosphere.svg"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-30 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(225,232,255,0.28),transparent_58%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-hero-bg)]/35 via-[var(--color-hero-bg)]/16 to-[var(--color-hero-bg)]/68" />

      <div className="container-hesya relative z-10 flex flex-col items-center text-center">
        <p className="hero-animate mb-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-micro text-white/80">
          Now in TestFlight beta
        </p>
        <h1 className="hero-animate text-display-sans mb-6 max-w-4xl text-white">
          Name what matters.
          <br />
          Stay with it.
        </h1>

        <p className="hero-animate mb-8 max-w-2xl text-lg text-white/75 md:text-xl">
          Declare what you want to have done, start a focus session, and Hesya holds it with you —
          returning you in your own words when attention drifts.
        </p>

        <div className="hero-animate mb-12 flex flex-col items-center gap-4 sm:flex-row">
          <a href={TESTFLIGHT_URL} className="btn-primary-gradient">
            Join the TestFlight beta
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#suite-section"
            className="text-micro text-white/80 underline-offset-4 transition hover:text-white hover:underline"
          >
            See how Hesya works
          </a>
        </div>

        <div className="hero-animate relative mx-auto w-full max-w-5xl">
          <div className="relative flex min-h-[420px] items-end justify-center md:min-h-[520px]">
            <ParallaxLayer speed={0.16} className="absolute left-1/2 top-3 z-30 w-full max-w-[560px] -translate-x-1/2">
              <FloatingGlassCard className="hero-float-loop text-left">
                <p className="text-eyebrow mb-2 text-white/55">Assistant</p>
                <p className="text-sm text-white">
                  You are chatting with Laura and Antonio. Book 15 minutes with Mike this Monday?
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
                  <CalendarClock className="h-3.5 w-3.5" />
                  Monday at 3:00 PM
                </div>
              </FloatingGlassCard>
            </ParallaxLayer>

            <ParallaxLayer speed={0.2} className="absolute left-[2%] top-[33%] z-20 hidden md:block">
              <FloatingGlassCard className="hero-float-loop w-[220px] text-left">
                <p className="text-eyebrow mb-2 text-white/55">Inbox</p>
                <p className="text-sm font-medium text-white">Design review moved to Thursday</p>
                <p className="mt-1 text-xs text-white/65">
                  Quick heads-up - we are pushing design review to 2pm.
                </p>
              </FloatingGlassCard>
            </ParallaxLayer>

            <ParallaxLayer speed={0.12} className="absolute right-[4%] top-[38%] z-20 hidden md:block">
              <FloatingGlassCard className="hero-float-loop w-[220px] text-left">
                <p className="text-eyebrow mb-2 text-white/55">Live Activity</p>
                <p className="text-sm text-white">Finish the proposal</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-white/70">
                  <Sparkles className="h-3.5 w-3.5" />
                  Quiet return active
                </div>
              </FloatingGlassCard>
            </ParallaxLayer>

            <ParallaxLayer speed={0.08} className="relative z-10 mt-14">
              <TiltOnMouse>
                <div className="animate-breath w-[200px] md:w-[260px]">
                  <Image
                    src="/screenshots/screen-home.png"
                    alt="Hesya — today's intent on the home screen"
                    width={660}
                    height={1434}
                    className="h-auto w-full select-none rounded-[2.5rem] shadow-[0_40px_120px_rgba(15,18,48,0.45)]"
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
