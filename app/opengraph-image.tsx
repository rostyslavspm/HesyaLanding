import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Hesya: Choose where your attention goes.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HEADLINE = "Choose where your attention goes.";
const SUBHEAD =
  "Reclaim your attention when it drifts — no locked apps, no daily streaks to keep.";

async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (match?.[1]) {
    const res = await fetch(match[1]);
    if (res.ok) return res.arrayBuffer();
  }
  return null;
}

export default async function Image() {
  const [phoneBuffer, serifFont, sansFont, sansSemibold] = await Promise.all([
    readFile(join(process.cwd(), "public/screenshots/screen-today-idle.png")),
    loadGoogleFont("Cormorant Garamond", 500, HEADLINE),
    loadGoogleFont("Inter", 400, SUBHEAD),
    loadGoogleFont("Inter", 600, "Hesya"),
  ]);

  const phoneSrc = `data:image/png;base64,${phoneBuffer.toString("base64")}`;

  const fonts: {
    name: string;
    data: ArrayBuffer;
    weight: 400 | 500 | 600;
    style: "normal";
  }[] = [];
  if (serifFont)
    fonts.push({ name: "Cormorant Garamond", data: serifFont, weight: 500, style: "normal" });
  if (sansFont) fonts.push({ name: "Inter", data: sansFont, weight: 400, style: "normal" });
  if (sansSemibold) fonts.push({ name: "Inter", data: sansSemibold, weight: 600, style: "normal" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          overflow: "hidden",
          background: "linear-gradient(160deg, #1c2530 0%, #202e44 58%, #263349 100%)",
        }}
      >
        {/* echoes the hero's night-sky glow behind the phone */}
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -140,
            width: 640,
            height: 640,
            borderRadius: "50%",
            display: "flex",
            background:
              "radial-gradient(circle, rgba(204,216,232,0.24) 0%, rgba(204,216,232,0) 70%)",
          }}
        />

        {/* copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 660,
            height: "100%",
            padding: "0 0 0 76px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 44 }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                display: "flex",
                background: "rgba(255,255,255,0.92)",
              }}
            />
            <span
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: 22,
                letterSpacing: "-0.01em",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              Hesya
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Cormorant Garamond",
              fontWeight: 500,
              fontSize: 58,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.95)",
              marginBottom: 26,
              maxWidth: 540,
            }}
          >
            {HEADLINE}
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: 20,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 470,
            }}
          >
            {SUBHEAD}
          </div>
        </div>

        {/* phone, bleeding off the bottom edge like the live hero */}
        <div
          style={{
            position: "absolute",
            right: 96,
            bottom: -44,
            width: 300,
            height: 652,
            display: "flex",
            overflow: "hidden",
            borderRadius: 40,
            outline: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.45)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={phoneSrc} width={300} height={652} style={{ objectFit: "cover" }} alt="" />
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts }
  );
}
