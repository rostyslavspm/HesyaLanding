import PhoneMockup from "@/components/ui/PhoneMockup";
import { HERO_PHONE } from "@/lib/content/heroMoments";
import HeroTimer from "./HeroTimer";

export default function HeroPhone() {
  return (
    <div className="hero-phone pointer-events-none relative z-[3]">
      <div
        className="backlit-halo absolute -inset-6 -z-10 opacity-70"
        aria-hidden
      />
      <div className="hero-phone-inner">
        <PhoneMockup
          src={HERO_PHONE.src}
          alt={HERO_PHONE.alt}
          fallbackLabel={HERO_PHONE.fallbackLabel}
          width={HERO_PHONE.width}
          height={HERO_PHONE.height}
          priority
          sizes="(max-width: 768px) 56vw, (min-width: 1813px) 544px, 30vw"
          className="hero-phone-mockup max-w-none"
        >
          <HeroTimer />
        </PhoneMockup>
      </div>
    </div>
  );
}
