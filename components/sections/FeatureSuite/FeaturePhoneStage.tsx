import Image from "next/image";
import { HESYA_FEATURES } from "@/lib/content/features";

const OVERLAY_VARIANTS = ["purple", "teal", "rose", "blue"] as const;

const OVERLAYS: Record<string, string> = {
  purple:
    "radial-gradient(circle at 100% 0%, oklch(0.45 0.12 255 / 0.2) 0%, transparent 50%), radial-gradient(circle at 0% 100%, oklch(0.9 0.025 255 / 0.15) 0%, transparent 50%)",
  teal:
    "radial-gradient(circle at 100% 0%, oklch(0.48 0.05 169 / 0.22) 0%, transparent 50%), radial-gradient(circle at 0% 100%, oklch(0.9 0.025 255 / 0.15) 0%, transparent 50%)",
  rose:
    "radial-gradient(circle at 100% 0%, oklch(0.5 0.09 350 / 0.2) 0%, transparent 50%), radial-gradient(circle at 0% 100%, oklch(0.48 0.05 169 / 0.13) 0%, transparent 50%)",
  blue:
    "radial-gradient(circle at 100% 0%, oklch(0.48 0.08 255 / 0.2) 0%, transparent 50%), radial-gradient(circle at 0% 100%, oklch(0.48 0.05 169 / 0.15) 0%, transparent 50%)",
};

type FeaturePhoneStageProps = {
  activeId: string;
};

export default function FeaturePhoneStage({ activeId }: FeaturePhoneStageProps) {
  return (
    <div className="feature-phone-stage">
      <div
        aria-hidden
        className="feature-phone-stage-bg"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.93 0.012 90) 0%, oklch(0.9 0.02 169) 50%, oklch(0.88 0.025 255) 100%)",
        }}
      />
      <div className="feature-phone-frame">
        {HESYA_FEATURES.map((feature, index) => {
          const isActive = feature.id === activeId;
          const overlayVariant = OVERLAY_VARIANTS[index % OVERLAY_VARIANTS.length];

          return (
            <div
              key={feature.id}
              className={`feature-phone-screen${isActive ? " is-active" : ""}`}
              aria-hidden={!isActive}
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
