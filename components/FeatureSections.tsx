"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureRow from "./FeatureRow";
import TiltOnMouse from "./motion/TiltOnMouse";
import { StatusPulse } from "./demos/SuiteDemos";
import { ShieldCheck } from "lucide-react";
import { DURATION, GSAP_EASE } from "../lib/motion";

gsap.registerPlugin(ScrollTrigger);

function ShiftCrossfadeVisual() {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        ScrollTrigger.create({
          trigger: container.current,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () =>
            gsap.to(imageRef.current, { opacity: 1, duration: DURATION.transition, ease: GSAP_EASE.smooth }),
          onLeaveBack: () =>
            gsap.to(imageRef.current, { opacity: 0, duration: DURATION.transition, ease: GSAP_EASE.smooth }),
          onEnterBack: () =>
            gsap.to(imageRef.current, { opacity: 1, duration: DURATION.transition, ease: GSAP_EASE.smooth }),
          onLeave: () =>
            gsap.to(imageRef.current, { opacity: 0, duration: DURATION.transition, ease: GSAP_EASE.smooth }),
        });
      }
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="flex justify-center">
      <TiltOnMouse>
        <div className="animate-breath relative w-[200px] overflow-hidden rounded-[2.5rem] bg-black shadow-[0_20px_80px_rgba(0,0,0,0.25)] md:w-[240px]">
          <Image
            src="/screenshots/screen-home.png"
            alt="Hesya — today's intent"
            width={660}
            height={1434}
            className="h-auto w-full select-none"
          />
          <Image
            ref={imageRef}
            src="/screenshots/screen-lockscreen.png"
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
      <div className="animate-breath relative w-[220px] md:w-[310px]">
        <Image
          src="/screenshots/Homescreen-widget.png"
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

function PrivacyCueVisual() {
  return (
    <div className="panel-elevated rounded-[var(--radius-xl)] p-7 md:p-8">
      <p className="text-eyebrow mb-3 text-[var(--foreground-muted)]">Privacy by design</p>
      <div className="mb-4 flex items-center gap-3">
        <ShieldCheck className="h-5 w-5 text-[var(--color-accent-vivid)]" />
        <p className="text-heading text-[var(--foreground)]">No app names leave your device</p>
      </div>
      <ul className="space-y-2 text-body-sm text-[var(--foreground-muted)]">
        <li>Only anonymous structural events are sent</li>
        <li>No user ID, no install ID, no account required</li>
        <li>Session text and notes remain local</li>
      </ul>
    </div>
  );
}

function ReflectionVisual() {
  return (
    <div className="glass rounded-[var(--radius-xl)] p-6 md:p-8">
      <p className="text-eyebrow mb-4 text-[var(--foreground-muted)]">Session close</p>
      <div className="mb-6 flex justify-center">
        <StatusPulse />
      </div>
      <div className="space-y-3">
        <div className="rounded-xl bg-white px-4 py-3 text-body-sm text-[var(--foreground-muted)]">
          Felt focused for most of the session.
        </div>
        <div className="rounded-xl bg-white px-4 py-3 text-body-sm text-[var(--foreground-muted)]">
          Drifted once, returned quickly.
        </div>
      </div>
    </div>
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
          "Drift cue appears only when needed",
          "Return happens in your own words",
        ]}
        visual={<ShiftCrossfadeVisual />}
        gradientColor="radial-gradient(circle, rgba(118,143,244,0.52) 0%, rgba(118,143,244,0) 72%)"
      />

      <FeatureRow
        eyebrow="PRIVACY"
        title="Focus support without surveillance."
        body="Hesya was built so the assistance feels intelligent while your personal content stays personal. The app can signal drift without collecting sensitive app usage details."
        bullets={[
          "No accounts, no profile, no tracking SDKs",
          "Screen Time integration is optional",
          "Anonymous usage counts are identifier-free",
        ]}
        visual={<PrivacyCueVisual />}
        gradientColor="radial-gradient(circle, rgba(131,201,245,0.5) 0%, rgba(131,201,245,0) 72%)"
        reverse
        altTint
      />

      <FeatureRow
        eyebrow="REFLECT"
        title="Close each session with clarity."
        body="When the timer ends, Hesya helps you log how the session felt in one private step. No scorecard, no judgment, just signal you can trust next time."
        bullets={[
          "Outcome-neutral check-in",
          "Optional private note per session",
          "Builds a calm personal rhythm over time",
        ]}
        visual={<ReflectionVisual />}
        gradientColor="radial-gradient(circle, rgba(250,188,109,0.46) 0%, rgba(250,188,109,0) 74%)"
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
        gradientColor="radial-gradient(circle, rgba(167,149,248,0.5) 0%, rgba(167,149,248,0) 70%)"
        reverse
        altTint
      />
    </>
  );
}
