"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TheShift() {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image crossfade on scroll
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          // Crossfade to secondary mockup
          if (imageRef.current) {
            gsap.to(imageRef.current, {
              opacity: 1,
              duration: 1.2,
              ease: "power2.inOut"
            });
          }
        },
        onLeaveBack: () => {
          if (imageRef.current) {
            gsap.to(imageRef.current, {
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            });
          }
        },
        onEnterBack: () => {
          if (imageRef.current) {
            gsap.to(imageRef.current, {
              opacity: 1,
              duration: 1.2,
              ease: "power2.inOut"
            });
          }
        },
        onLeave: () => {
          if (imageRef.current) {
            gsap.to(imageRef.current, {
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            });
          }
        }
      });

      // Entrance animation for content
      gsap.from(".shift-content", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1.4,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-[90vh] py-20 md:py-32 flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl">
        
        <div className="shift-content text-center md:text-left z-10">
          <p className="text-sm font-bold tracking-widest uppercase text-[var(--color-soft-obsidian)]/50 mb-4 transition-colors duration-1000">YOU KNOW THE FEELING</p>
          <h2 className="text-display-italic mb-6">You meant to do one thing.</h2>
          <p className="text-body opacity-80 max-w-lg mx-auto md:mx-0 mb-4">
            You sat down for something specific. A while later you&apos;re somewhere else — and you&apos;re not sure when you left.
          </p>
          <p className="text-body opacity-80 max-w-lg mx-auto md:mx-0">
            Hesya keeps the one thing you named in view, and brings you back to it — in your own words, the moment you drift.
          </p>
        </div>

        <div className="shift-content flex justify-center md:justify-end z-10">
          <div className="relative w-[220px] md:w-[280px] rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.3)] bg-black overflow-hidden">
            <div className="animate-breath relative">
              {/* Light Mode Mockup */}
              <Image
                src="/screenshots/screen-home.png"
                alt="Hesya — today's intent"
                width={660}
                height={1434}
                className="w-full h-auto select-none"
                priority
              />
              {/* Drift-return mockup (crossfades on top) */}
              <Image
                ref={imageRef}
                src="/screenshots/screen-lockscreen.png"
                alt="Hesya — a quiet return when you drift"
                width={660}
                height={1434}
                className="absolute inset-0 w-full h-auto select-none opacity-0"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
