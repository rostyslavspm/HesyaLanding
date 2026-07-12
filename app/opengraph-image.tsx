import { ImageResponse } from "next/og";

export const alt = "Hesya — Name what matters. Stay with it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #0f1419 0%, #1a2332 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 200,
            transform: "translate(-50%, -50%)",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(130,158,147,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            marginTop: 80,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              color: "rgba(255,255,255,0.95)",
              letterSpacing: "-0.02em",
            }}
          >
            Hesya
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Name what matters. Stay with it.
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 50,
            fontSize: 18,
            fontWeight: 400,
            color: "rgba(255,255,255,0.35)",
          }}
        >
          hesya.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
