import Image from "next/image";
import { HESYA_FEATURES } from "@/lib/content/features";

const OVERLAY_VARIANTS = ["purple", "teal", "rose", "blue"] as const;

const OVERLAYS: Record<string, string> = {
  purple:
    "radial-gradient(circle at 100% 0%, rgba(188,132,241,0.19) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(184,220,232,0.15) 0%, transparent 50%)",
  teal:
    "radial-gradient(circle at 100% 0%, rgba(130,158,147,0.19) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(184,220,232,0.13) 0%, transparent 50%)",
  rose:
    "radial-gradient(circle at 100% 0%, rgba(196,181,253,0.17) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(130,158,147,0.13) 0%, transparent 50%)",
  blue:
    "radial-gradient(circle at 100% 0%, rgba(184,220,232,0.17) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(130,158,147,0.15) 0%, transparent 50%)",
};

export default function FeaturePhoneStage() {
  return (
    <div className="feature-phone-stage">
      <div
        aria-hidden
        className="feature-phone-stage-bg"
        style={{
          background:
            "linear-gradient(180deg, #e8e4dc 0%, #d4ddd8 50%, #c8d4e0 100%)",
        }}
      />
      <div className="feature-phone-frame">
        {HESYA_FEATURES.map((feature, index) => {
          const overlayVariant = OVERLAY_VARIANTS[index % OVERLAY_VARIANTS.length];

          return (
            <div
              key={feature.id}
              data-feature-screen
              className="feature-phone-screen"
              aria-hidden={index !== 0}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ background: OVERLAYS[overlayVariant] }}
              />
              <Image
                src={feature.screenshot}
                alt={feature.screenshotAlt}
                width={660}
                height={1434}
                className="feature-phone-image"
                sizes="(max-width: 768px) 80vw, 420px"
                priority={index === 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
