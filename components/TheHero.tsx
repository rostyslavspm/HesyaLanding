"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function TheHero() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // y: 40, opacity: 0 with power3.out easing entrance animation
      gsap.from(".animate-in", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        onStart: function() {
          gsap.set(this.targets(), { willChange: "transform, opacity" });
        },
        onComplete: function() {
          gsap.set(this.targets(), { clearProps: "willChange" });
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={container} 
      className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 md:py-32 overflow-hidden bg-[var(--color-mist-white)]"
    >
      {/* High-key mist background placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=2617&auto=format&fit=crop')" }}
      />
      {/* Fades the bottom out into the Mist White color to blend into next sections */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--color-mist-white)]/30 via-[var(--color-mist-white)]/60 to-[var(--color-mist-white)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Mockup with The Breath loop */}
        <div className="animate-in relative w-[220px] sm:w-[260px] md:w-[300px] mb-8 md:mb-14 rounded-[3rem]">
          <div className="animate-breath">
            <Image
              src="/screenshots/screen-home.png"
              alt="Hesya App PEACE Screen"
              width={660}
              height={1434}
              className="w-full h-auto select-none rounded-[2.5rem] shadow-[0_40px_120px_rgba(0,0,0,0.18)]"
              priority
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="animate-in text-display-italic text-[var(--color-soft-obsidian)] max-w-4xl mb-8">
          When your attention slips,
          <br />
          Hesya invites you back.
        </h1>

        <p className="animate-in max-w-[36rem] text-[var(--color-soft-obsidian)]/80 text-lg mb-8">
          An iPhone companion that helps you notice distraction and return to what matters — without noise or guilt.
        </p>

        {/* Action */}
        <div className="animate-in">
          <button className="btn-pill btn-magnetic text-tracked">
            Try the beta on TestFlight
          </button>
          <p className="mt-6 text-sm text-[var(--color-soft-obsidian)]/50 tracking-wide uppercase">
            Built to feel native. Designed to stay quiet.
          </p>
        </div>

      </div>
    </section>
  );
}
