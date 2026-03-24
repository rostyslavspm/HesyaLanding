"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DiagnosticShuffler() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const states = ["Deep Work", "Infinite Scroll", "Social Loop"];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        interval = setInterval(() => {
          setActiveIndex((prev) => (prev + 1) % 3);
        }, 2500);
      } else {
        clearInterval(interval);
      }
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={containerRef} className="value-card bg-[var(--color-pearl-glow)] rounded-[3rem] p-8 md:p-10 flex flex-col items-center justify-between min-h-[360px] md:min-h-[420px] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      <div className="text-center mb-8 mt-2">
        <h3 className="text-display-italic text-4xl mb-2 text-[var(--color-soft-obsidian)]">Notice</h3>
        <p className="text-body text-[var(--color-soft-obsidian)]/60 text-sm tracking-wide px-4">See when your rhythm changes — switching, stretching, drifting.</p>
      </div>

      <div className="relative w-full h-40 flex items-center justify-center mb-6">
        {states.map((state, i) => {
          const isObj = (i - activeIndex + 3) % 3; // 0 is front, 1 is middle, 2 is back
          
          let y = "0%", scale = 1, zIndex = 30, opacity = 1;
          if (isObj === 1) { y = "-15%"; scale = 0.9; zIndex = 20; opacity = 0.6; }
          if (isObj === 2) { y = "-30%"; scale = 0.8; zIndex = 10; opacity = 0.3; }

          return (
             <div 
               key={state}
               className="absolute w-[80%] bg-[var(--color-mist-white)] p-5 rounded-2xl border border-black/5 flex items-center justify-center transition-all duration-700 ease-[var(--ease-hesya)] shadow-sm"
               style={{ transform: `translateY(${y}) scale(${scale})`, zIndex, opacity }}
             >
               <span className="font-sans font-medium text-[var(--color-soft-obsidian)] text-tracked">{state}</span>
             </div>
          );
        })}
      </div>
    </div>
  );
}

function RitualClock() {
  return (
    <div className="value-card bg-[var(--color-pearl-glow)] rounded-[3rem] p-8 md:p-10 flex flex-col items-center justify-between h-[360px] md:h-[420px] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      <div className="text-center mb-8 mt-2">
        <h3 className="text-display-italic text-4xl mb-2 text-[var(--color-soft-obsidian)]">Pause</h3>
        <p className="text-body text-[var(--color-soft-obsidian)]/60 text-sm tracking-wide px-4">A gentle cue creates a moment of space before reacting.</p>
      </div>

      <div className="relative w-40 h-40 flex items-center justify-center mb-6">
        <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
           {/* Background track */}
           <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-mist-white)" strokeWidth="2" />
           {/* Quiet Hours Highlight (e.g. 10PM to 7AM) */}
           <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-soft-obsidian)" strokeWidth="4" strokeDasharray="289" strokeDashoffset="180" className="opacity-10" />
           {/* Ritual Windows Highlight (animating) */}
           <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-soft-obsidian)" strokeWidth="6" strokeDasharray="289" strokeDashoffset="289" className="animate-[clock-sweep_8s_ease-in-out_infinite]" strokeLinecap="round" />
        </svg>
        <div className="absolute w-2 h-2 rounded-full bg-[var(--color-soft-obsidian)]" />
      </div>
    </div>
  );
}

function StatusPulse() {
  return (
    <div className="value-card bg-[var(--color-pearl-glow)] rounded-[3rem] p-8 md:p-10 flex flex-col items-center justify-between h-[360px] md:h-[420px] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      <div className="text-center mb-8 mt-2">
        <h3 className="text-display-italic text-4xl mb-2 text-[var(--color-soft-obsidian)]">Return</h3>
        <p className="text-body text-[var(--color-soft-obsidian)]/60 text-sm tracking-wide px-4">Choose where to place your attention — with calm, not guilt.</p>
      </div>

      <div className="relative w-full h-40 flex items-center justify-center mb-6">
        <div className="relative flex items-center justify-center">
          {/* Outer glow - using a muted sage/emerald instead of neon green */}
          <div className="absolute w-20 h-20 border border-[var(--color-soft-obsidian)]/5 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
          <div className="absolute w-12 h-12 bg-[#829E93]/10 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />
          {/* Center dot */}
          <div className="relative w-4 h-4 bg-[#829E93] rounded-full shadow-[0_0_12px_rgba(130,158,147,0.4)]" />
        </div>
      </div>
    </div>
  );
}

export default function TheValues() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
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
    <section ref={container} className="py-20 md:py-32 px-6 bg-[var(--color-mist-white)] relative z-10">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-soft-obsidian)]/50 mb-6">WHAT HESYA DOES</h2>
          <p className="text-body text-[var(--color-soft-obsidian)]/80 text-xl font-medium">
            Hesya watches how you move through your phone — not what you do, just the rhythm. When it senses drift, it offers a gentle moment to return.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <DiagnosticShuffler />
          <RitualClock />
          <StatusPulse />
        </div>
      </div>
    </section>
  );
}
