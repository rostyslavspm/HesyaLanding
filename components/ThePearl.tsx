"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ThePearl() {
  const container = useRef<HTMLDivElement>(null);
  const pearlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ctx: gsap.Context;

    ctx = gsap.context(() => {
      let isHovering = false;

      // Mouse & Touch follower effect
      const onPointerMove = (e: MouseEvent | TouchEvent) => {
        if (!container.current) return;
        const rect = container.current.getBoundingClientRect();
        
        let clientX, clientY;
        if ('touches' in e && e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else if ('clientX' in e) {
          clientX = (e as MouseEvent).clientX;
          clientY = (e as MouseEvent).clientY;
        } else {
          return;
        }

        // Calculate relative position inside the container
        // mapping [-1, 1] range
        mouseX = ((clientX - rect.left) / rect.width - 0.5) * 2;
        mouseY = ((clientY - rect.top) / rect.height - 0.5) * 2;
      };

      if (container.current) {
        container.current.addEventListener("mousemove", onPointerMove);
        container.current.addEventListener("touchmove", onPointerMove, { passive: true });
        
        // Reset effects
        container.current.addEventListener("mouseenter", () => isHovering = true);
        container.current.addEventListener("touchstart", () => isHovering = true, { passive: true });
        
        const resetHover = () => {
          isHovering = false;
          mouseX = 0;
          mouseY = 0;
        };
        
        container.current.addEventListener("mouseleave", resetHover);
        container.current.addEventListener("touchend", resetHover);
      }

      // requestAnimationFrame ticker managed by GSAP
      gsap.ticker.add(() => {
        if (!pearlRef.current) return;
        
        // Smooth interpolation handled by GSAP QuickTo or normal tweening inside ticker
        // But since we are inside a ticker, it's very cheap to tween it continuously
        // max movement of 150px in any direction
        gsap.to(pearlRef.current, {
          x: `calc(-50% + ${mouseX * 150}px)`,
          y: `calc(-50% + ${mouseY * 150}px)`,
          duration: isHovering ? 2.5 : 3, // slightly slower snap-back when leaving
          ease: "power2.out",
          overwrite: "auto"
        });
      });

      // Entrance animation
      gsap.from(".pearl-text", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      });

      return () => {
        if (container.current) {
          container.current.removeEventListener("mousemove", onPointerMove);
          container.current.removeEventListener("touchmove", onPointerMove);
        }
      };
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={container} 
      className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 md:py-32 px-4 md:px-0 overflow-hidden bg-[var(--color-mist-white)] pointer-events-auto"
    >
      {/* The Pearl Gradient background */}
      <div 
        ref={pearlRef}
        className="absolute w-[150vw] h-[150vw] sm:w-[600px] sm:h-[600px] md:w-[900px] md:h-[900px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, var(--color-pearl-glow) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 70%)",
          filter: "blur(60px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h2 className="pearl-text text-display-italic text-[var(--color-soft-obsidian)] leading-[1.3]">
          Three breaths.
          <br /><br />
          <span className="text-4xl">A pause between drift and choice.</span>
        </h2>
      </div>
    </section>
  );
}
