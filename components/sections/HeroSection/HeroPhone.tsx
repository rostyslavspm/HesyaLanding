import PhoneMockup from "@/components/ui/PhoneMockup";
import { HERO_PHONE } from "@/lib/content/heroMoments";

export default function HeroPhone() {
  return (
    <div className="hero-phone pointer-events-none relative z-[3]">
      <div className="hero-phone-inner">
        <PhoneMockup
          src={HERO_PHONE.src}
          alt={HERO_PHONE.alt}
          fallbackLabel={HERO_PHONE.fallbackLabel}
          width={HERO_PHONE.width}
          height={HERO_PHONE.height}
          priority
          /* Matches .hero-phone-mockup: 46vw on mobile, then min(30vw, 34rem)
           * — 30vw hits the 544px cap at ~1813px wide. Keeping these in sync
           * stops the optimizer serving an undersized, upscaled source. */
          sizes="(max-width: 768px) 46vw, (min-width: 1813px) 544px, 30vw"
          className="hero-phone-mockup max-w-none"
        />
      </div>
    </div>
  );
}
