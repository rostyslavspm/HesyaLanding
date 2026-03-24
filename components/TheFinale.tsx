"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppStoreBadge from "./AppStoreBadge";

gsap.registerPlugin(ScrollTrigger);

export default function TheFinale() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(".finale-content", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
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

  // Use a placeholder function since this section might not have NotifyModalProvider wrapped around it directly if removed, 
  // but it is in layout.tsx so we can just leave it as standard a tag or use the AppStoreBadge component.
  return (
    <footer ref={container} className="relative py-20 md:py-32 bg-[var(--color-mist-white)] overflow-hidden">
      <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center">
        
        <div className="finale-content text-center mb-10 flex flex-col items-center">
          <h2 className="text-display-italic text-[var(--color-soft-obsidian)] mb-6">
            Your mind already knows<br />the way back.
          </h2>
          <p className="text-body text-[var(--color-soft-obsidian)]/80 max-w-md mb-8">
            Hesya is available for beta testing on TestFlight. Try it free — no tracking, no noise.
          </p>
          <div className="btn-magnetic inline-block cursor-pointer">
             <AppStoreBadge label="Try the beta on TestFlight" footer={null} onClick={() => window.location.href="#"} />
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 right-8 flex items-center gap-3 finale-content">
        <span className="text-xs font-sans text-[var(--color-soft-obsidian)]/50 tracking-wider uppercase">System Operational</span>
        <div className="relative flex items-center justify-center">
          <div className="absolute w-5 h-5 bg-green-500/20 rounded-full animate-[ping_2.5s_ease-out_infinite]" />
          <div className="relative w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
        </div>
      </div>
    </footer>
  );
}
