export default function SvgFilterDefs() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute h-0 w-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="hero-drift-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            id="hero-drift-turbulence"
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="2"
            seed="8"
            result="noise"
          />
          <feDisplacementMap
            id="hero-drift-displacement"
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
