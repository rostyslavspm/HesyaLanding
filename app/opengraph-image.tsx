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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #15163c 0%, #4960c6 58%, #8faeea 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 170,
            transform: "translate(-50%, -50%)",
            width: 330,
            height: 330,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.38) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            marginTop: -120,
          }}
        >
          <div
            style={{
              fontSize: 62,
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
              fontWeight: 500,
              color: "rgba(255,255,255,0.84)",
            }}
          >
            Name what matters. Stay with it.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 96,
            width: 720,
            borderRadius: 24,
            padding: "20px 24px",
            border: "1px solid rgba(255,255,255,0.28)",
            background: "rgba(255,255,255,0.14)",
            color: "rgba(255,255,255,0.9)",
            fontSize: 22,
            fontWeight: 500,
            backdropFilter: "blur(14px)",
          }}
        >
          Finish the proposal introduction
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
