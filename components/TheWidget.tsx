"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TheWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(".widget-content", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-[80vh] py-20 md:py-32 bg-[var(--color-mist-white)] overflow-hidden flex items-center">
      <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        <div className="widget-content text-center md:text-left">
          <p className="text-sm font-bold tracking-widest uppercase text-[var(--color-soft-obsidian)]/50 mb-4">WHERE YOU WORK</p>
          <h2 className="text-display-italic mb-6 text-[var(--color-soft-obsidian)]">Your intent, in view.</h2>
          <p className="text-body text-[var(--color-soft-obsidian)]/80 max-w-md mx-auto md:mx-0">
            The one thing you named follows you — on the Lock Screen, in the Live Activity, and on your Mac&apos;s menu bar while you work.
            <br /><br />
            Quietly present while the session runs. Always there when you glance. Never urgent.
          </p>
        </div>

        <div className="widget-content relative flex justify-center items-center w-full">
          {/* Mockup with The Breath loop */}
          <div className="animate-breath relative w-[220px] md:w-[320px] will-change-transform transform-gpu">
            <Image
              src="/screenshots/Homescreen-widget.png"
              alt="Hesya widget showing today's intent"
              width={660}
              height={1434}
              className="w-full h-auto select-none rounded-[3rem] shadow-[0_40px_120px_rgba(0,0,0,0.15)]"
              unoptimized
              priority
            />
            {/* Blur mask over everything except the widget. */}
            <div 
              className="absolute inset-0 rounded-[3rem] backdrop-blur-[12px] bg-white/30 pointer-events-none filter-gpu"
              style={{
                 WebkitMaskImage: "radial-gradient(ellipse 23% 10.5% at 73.5% 18%, transparent 95%, black 100%)",
                 maskImage: "radial-gradient(ellipse 23% 10.5% at 73.5% 18%, transparent 95%, black 100%)",
                 WebkitTransform: "translateZ(0)",
                 transform: "translateZ(0)",
                 WebkitBackfaceVisibility: "hidden",
                 backfaceVisibility: "hidden"
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
