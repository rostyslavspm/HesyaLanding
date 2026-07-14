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
          priority
          sizes="(max-width: 768px) 220px, 340px"
          className="hero-phone-mockup max-w-none"
        />
      </div>
    </div>
  );
}
