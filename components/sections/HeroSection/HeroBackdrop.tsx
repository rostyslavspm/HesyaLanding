import Image from "next/image";
import HeroStarfield from "./HeroStarfield";

/**
 * Night-sky hero field — a real photograph for depth, with the generative
 * layer composited on top: the one warm Eärendil star (and a few soft parallax
 * sparkles) drift over the picture. A scrim ties the tones together and keeps
 * the serif legible; the enclosure still thickens on scroll.
 */
export default function HeroBackdrop() {
  return (
    <div
      className="hero-backdrop pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <Image
        src="/images/hero-sky.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-sky-photo"
      />
      <div className="hero-sky-scrim" />
      <HeroStarfield />
      <div className="hero-sky-grain" />
      <div className="hero-mist-enclose" />
    </div>
  );
}
