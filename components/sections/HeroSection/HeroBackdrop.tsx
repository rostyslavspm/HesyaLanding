import Image from "next/image";
import { HERO_IMAGE } from "@/lib/content/assetSpecs";

export default function HeroBackdrop() {
  return (
    <div className="hero-backdrop pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <Image
        src={HERO_IMAGE.path}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_58%] md:object-[center_55%]"
      />
      <div className="hero-backdrop-sky" aria-hidden />
      <div className="hero-backdrop-shade-top" aria-hidden />
      <div className="hero-backdrop-shade-bottom" aria-hidden />
    </div>
  );
}
