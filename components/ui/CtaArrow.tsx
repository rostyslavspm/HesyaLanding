import { ArrowRight } from "lucide-react";

/**
 * The "Get the app" arrow chip — the one warm point of light on the page
 * (Figma: Hesya-App, CTA 2504:1895). Decorative: the parent link carries the
 * accessible name. Sized 54×42 with a 14px radius so it sits concentric inside
 * a CTA with 6px padding and --radius-cta (20px).
 */
export default function CtaArrow() {
  return (
    <span className="cta-arrow" aria-hidden>
      <span className="cta-arrow-flare-a" />
      <span className="cta-arrow-flare-b" />
      <span className="cta-arrow-sheen" />
      <ArrowRight
        className="cta-arrow-glyph"
        size={32}
        strokeWidth={1}
        absoluteStrokeWidth
      />
    </span>
  );
}
