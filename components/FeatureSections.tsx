"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureRow from "./FeatureRow";
import TiltOnMouse from "./motion/TiltOnMouse";
import { DiagnosticShuffler, RitualClock } from "./demos/SuiteDemos";

gsap.registerPlugin(ScrollTrigger);

function ShiftCrossfadeVisual() {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => gsap.to(imageRef.current, { opacity: 1, duration: 1.2, ease: "power2.inOut" }),
        onLeaveBack: () =>
          gsap.to(imageRef.current, { opacity: 0, duration: 1.2, ease: "power2.inOut" }),
        onEnterBack: () =>
          gsap.to(imageRef.current, { opacity: 1, duration: 1.2, ease: "power2.inOut" }),
        onLeave: () =>
          gsap.to(imageRef.current, { opacity: 0, duration: 1.2, ease: "power2.inOut" }),
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="flex justify-center">
      <TiltOnMouse>
        <div className="animate-breath relative w-[200px] overflow-hidden rounded-[2.5rem] bg-black shadow-[0_20px_80px_rgba(0,0,0,0.25)] md:w-[240px]">
          <Image
            src="/screenshots/screen-home.svg"
            alt="Hesya — today's intent"
            width={660}
            height={1434}
            className="h-auto w-full select-none"
          />
          <Image
            ref={imageRef}
            src="/screenshots/screen-lockscreen.svg"
            alt="Hesya — a quiet return when you drift"
            width={660}
            height={1434}
            className="absolute inset-0 h-auto w-full select-none opacity-0"
          />
        </div>
      </TiltOnMouse>
    </div>
  );
}

function WidgetVisual() {
  return (
    <TiltOnMouse className="flex justify-center">
      <div className="animate-breath relative w-[200px] md:w-[280px]">
        <Image
          src="/screenshots/Homescreen-widget.svg"
          alt="Hesya widget showing today's intent"
          width={660}
          height={1434}
          className="h-auto w-full select-none rounded-[2.5rem] shadow-[0_40px_120px_rgba(0,0,0,0.15)]"
          unoptimized
        />
        <div
          className="absolute inset-0 rounded-[2.5rem] bg-white/30 backdrop-blur-[12px] pointer-events-none"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 23% 10.5% at 73.5% 18%, transparent 95%, black 100%)",
            maskImage:
              "radial-gradient(ellipse 23% 10.5% at 73.5% 18%, transparent 95%, black 100%)",
          }}
        />
      </div>
    </TiltOnMouse>
  );
}

export default function FeatureSections() {
  return (
    <>
      <FeatureRow
        eyebrow="YOU KNOW THE FEELING"
        title="You meant to do one thing."
        body={[
          "You sat down for something specific. A while later you're somewhere else — and you're not sure when you left.",
          "Hesya keeps the one thing you named in view, and brings you back to it — in your own words, the moment you drift.",
        ]}
        bullets={[
          "One intention stays visible throughout your session",
          "Gentle return cues in your own words",
          "No guilt, no streaks, no scores",
        ]}
        visual={<ShiftCrossfadeVisual />}
        gradientColor="radial-gradient(circle, rgba(130,158,147,0.5) 0%, rgba(130,158,147,0) 70%)"
      />

      <FeatureRow
        eyebrow="DECLARE"
        title="Name what matters."
        body="Name what you want to have done — in your own words. Hesya keeps it verbatim, never rewriting or interpreting your intent."
        bullets={[
          "Type your intent in plain language",
          "Up to three intents, or start with none",
          "Your words, kept exactly as written",
        ]}
        visual={
          <div className="glass rounded-[var(--radius-xl)] p-6 md:p-8">
            <DiagnosticShuffler compact />
          </div>
        }
        gradientColor="radial-gradient(circle, rgba(147,180,210,0.45) 0%, rgba(147,180,210,0) 70%)"
        reverse
        altTint
      />

      <FeatureRow
        eyebrow="RETURN"
        title="Come back quietly."
        body="Drift into something else and a quiet cue brings you back to your intent — never a scold. Silence during quiet hours is the product working as designed."
        bullets={[
          "Optional Screen Time drift detection",
          "Never reveals which app you used",
          "Always skippable breathing pause",
        ]}
        visual={
          <div className="glass flex items-center justify-center rounded-[var(--radius-xl)] p-10 md:p-14">
            <RitualClock />
          </div>
        }
        gradientColor="radial-gradient(circle, rgba(210,180,130,0.45) 0%, rgba(210,180,130,0) 70%)"
      />

      <FeatureRow
        eyebrow="WHERE YOU WORK"
        title="Your intent, in view."
        body={[
          "The one thing you named follows you — on the Lock Screen, in the Live Activity, and on your Mac's menu bar while you work.",
          "Quietly present while the session runs. Always there when you glance. Never urgent.",
        ]}
        bullets={[
          "Lock Screen widget with your intent",
          "Live Activity during sessions",
          "macOS menu bar presence on Tahoe",
        ]}
        visual={<WidgetVisual />}
        gradientColor="radial-gradient(circle, rgba(160,140,200,0.45) 0%, rgba(160,140,200,0) 70%)"
        reverse
        altTint
      />
    </>
  );
}
