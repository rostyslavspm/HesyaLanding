"use client";

import { useEffect, useRef, useState } from "react";

export function DiagnosticShuffler({ compact = false }: { compact?: boolean }) {
  const states = ["Finish the proposal", "Be present at dinner", "Write the first section"];
  return <IntentShufflerInner states={states} compact={compact} />;
}

export function RitualClock({ compact = false }: { compact?: boolean }) {
  const size = compact ? "w-28" : "w-40";
  return (
    <div className={`relative ${size} flex items-center justify-center`}>
      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-mist-white)" strokeWidth="2" />
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="var(--color-soft-obsidian)"
          strokeWidth="4"
          strokeDasharray="289"
          strokeDashoffset="180"
          className="opacity-10"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="var(--color-soft-obsidian)"
          strokeWidth="6"
          strokeDasharray="289"
          strokeDashoffset="289"
          className="animate-[clock-sweep_8s_ease-in-out_infinite] motion-reduce:animate-none"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute h-2 w-2 rounded-full bg-[var(--color-soft-obsidian)]" />
    </div>
  );
}

export function StatusPulse({ compact = false }: { compact?: boolean }) {
  const outer = compact ? "w-14" : "w-20";
  const inner = compact ? "w-8" : "w-12";
  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`absolute ${outer} ${outer} rounded-full border border-[var(--color-soft-obsidian)]/5 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] motion-reduce:animate-none`}
      />
      <div
        className={`absolute ${inner} ${inner} rounded-full bg-[#829E93]/10 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s] motion-reduce:animate-none`}
      />
      <div className="relative h-4 w-4 rounded-full bg-[#829E93] shadow-[0_0_12px_rgba(130,158,147,0.4)]" />
    </div>
  );
}

function IntentShufflerInner({
  states,
  compact,
}: {
  states: string[];
  compact?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % states.length);
          }, 2500);
        } else {
          clearInterval(interval);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [states.length]);

  return (
    <div
      ref={containerRef}
      className={`relative flex w-full flex-col items-center justify-center ${
        compact ? "min-h-[140px]" : "min-h-[200px]"
      }`}
    >
      {states.map((state, i) => {
        const isObj = (i - activeIndex + states.length) % states.length;
        let y = "0px";
        let scale = 1;
        let zIndex = 30;
        let opacity = 1;
        if (isObj === 1) {
          y = "-16px";
          scale = 0.9;
          zIndex = 20;
          opacity = 0.6;
        }
        if (isObj === 2) {
          y = "-32px";
          scale = 0.8;
          zIndex = 10;
          opacity = 0.3;
        }

        return (
          <div
            key={state}
            className="absolute flex w-[85%] items-center justify-center rounded-2xl border border-black/5 bg-[var(--color-mist-white)] p-4 shadow-sm transition-all duration-700 ease-[var(--ease-hesya)]"
            style={{ transform: `translateY(${y}) scale(${scale})`, zIndex, opacity }}
          >
            <span className="text-tracked text-center font-sans text-sm font-medium text-[var(--color-soft-obsidian)]">
              {state}
            </span>
          </div>
        );
      })}
    </div>
  );
}
