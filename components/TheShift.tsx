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
      // Body background shift
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          gsap.to(document.body, {
            backgroundColor: "var(--color-deep-midnight)",
            color: "var(--color-mist-white)",
            duration: 1.2,
            ease: "power2.inOut"
          });
          // Crossfade to dark mode mockup
          if (imageRef.current) {
            gsap.to(imageRef.current, {
              opacity: 1,
              duration: 1.2,
              ease: "power2.inOut"
            });
          }
        },
        onLeaveBack: () => {
          gsap.to(document.body, {
            backgroundColor: "var(--color-mist-white)",
            color: "var(--color-soft-obsidian)",
            duration: 1.2,
            ease: "power2.inOut"
          });
          if (imageRef.current) {
            gsap.to(imageRef.current, {
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            });
          }
        },
        onEnterBack: () => {
          gsap.to(document.body, {
            backgroundColor: "var(--color-deep-midnight)",
            color: "var(--color-mist-white)",
            duration: 1.2,
            ease: "power2.inOut"
          });
          if (imageRef.current) {
            gsap.to(imageRef.current, {
              opacity: 1,
              duration: 1.2,
              ease: "power2.inOut"
            });
          }
        },
        onLeave: () => {
          gsap.to(document.body, {
            backgroundColor: "var(--color-mist-white)",
            color: "var(--color-soft-obsidian)",
            duration: 1.2,
            ease: "power2.inOut"
          });
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
          <h2 className="text-display-italic mb-6">Sleep & Night</h2>
          <p className="text-body opacity-80 max-w-lg mx-auto md:mx-0">
            When the sun sets, Hesya adapts. The interface dims, cooldowns extend organically, and notifications surrender to your circadian rhythms. 
          </p>
        </div>

        <div className="shift-content flex justify-center md:justify-end z-10">
          <div className="relative w-[220px] md:w-[280px] rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.3)] bg-black overflow-hidden">
            <div className="animate-breath relative">
              {/* Light Mode Mockup */}
              <Image
                src="/screenshots/screen-home.png"
                alt="Hesya Light Mode"
                width={660}
                height={1434}
                className="w-full h-auto select-none"
                priority
              />
              {/* Dark Mode Mockup (crossfades on top) */}
              <Image
                ref={imageRef}
                src="/screenshots/screen-home-dark.png" // User must provide this asset
                alt="Hesya Dark Mode"
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
