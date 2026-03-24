import { ImageResponse } from "next/og";

export const alt = "Hesya — Notice when you drift. Return when you choose.";
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
          backgroundColor: "#E7EEF3",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 250,
            transform: "translate(-50%, -50%)",
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "#AFC4D6",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 250,
            transform: "translate(-50%, -50%)",
            width: 170,
            height: 170,
            borderRadius: "50%",
            border: "1.5px solid #AFC4D6",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            marginTop: 130,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 300,
              color: "rgba(44,44,46,0.80)",
            }}
          >
            Hesya
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 300,
              color: "rgba(44,44,46,0.58)",
            }}
          >
            Notice when you drift. Return when you choose.
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 50,
            fontSize: 16,
            fontWeight: 400,
            color: "rgba(44,44,46,0.42)",
          }}
        >
          hesya.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
