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
          <p className="text-sm font-bold tracking-widest uppercase text-[var(--color-soft-obsidian)]/50 mb-4">YOUR ANCHOR</p>
          <h2 className="text-display-italic mb-6 text-[var(--color-soft-obsidian)]">A word that matters.</h2>
          <p className="text-body text-[var(--color-soft-obsidian)]/80 max-w-md mx-auto md:mx-0">
            Choose one word that matters to you. A value. A reminder of what you&apos;re for.
            <br /><br />
            It lives on your lock screen and widget. Always visible. Never urgent. At the end of every ritual, it&apos;s the last thing you see.
          </p>
        </div>

        <div className="widget-content relative flex justify-center items-center w-full">
          {/* Mockup with The Breath loop */}
          <div className="animate-breath relative w-[220px] md:w-[320px]">
            <Image
              src="/screenshots/Homescreen-widget.png"
              alt="Hesya Widget on Home Screen"
              width={660}
              height={1434}
              className="w-full h-auto select-none rounded-[3rem] shadow-[0_40px_120px_rgba(0,0,0,0.15)]"
              priority
            />
            {/* Blur mask over everything except the widget. */}
            <div 
              className="absolute inset-0 rounded-[3rem] backdrop-blur-[12px] bg-white/30 pointer-events-none"
              style={{
                 WebkitMaskImage: "radial-gradient(ellipse 45% 10% at 50% 24.5%, transparent 95%, black 100%)",
                 maskImage: "radial-gradient(ellipse 45% 10% at 50% 24.5%, transparent 95%, black 100%)"
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
