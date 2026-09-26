import HeroPhone from "./HeroPhone";

/** The running session, alone in the field. */
export default function HeroShowcase() {
  return (
    <div className="hero-showcase">
      <div className="hero-showcase-stage">
        <div className="hero-composition">
          <HeroPhone />
        </div>
      </div>
    </div>
  );
}
