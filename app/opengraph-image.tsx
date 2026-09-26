import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Hesya — Name what matters. Stay with it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HEADLINE_1 = "Name what matters.";
const HEADLINE_2 = "Stay with it.";
const TIMER = "15 min";

// Phone geometry mirrors the live hero: the Running Session capture (420×912
// frame) rising from the bottom edge, timer pill live-set in Jost like the site.
const PHONE_W = 300;
const PHONE_H = Math.round((PHONE_W * 2736) / 1260);
const PHONE_TOP = 262;
const scale = PHONE_W / 420;

async function loadGoogleFont(axes: string, family: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family
  )}:${axes}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (match?.[1]) {
    const res = await fetch(match[1]);
    if (res.ok) return res.arrayBuffer();
  }
  return null;
}

const toDataUri = (buf: Buffer, mime: string) =>
  `data:${mime};base64,${buf.toString("base64")}`;

export default async function Image() {
  const [sky, phone, serifItalic, sansBrand, jost] = await Promise.all([
    readFile(join(process.cwd(), "public/images/og-sky.jpg")),
    readFile(join(process.cwd(), "public/screenshots/screen-session-running-v2.png")),
    loadGoogleFont("ital,wght@1,300", "Cormorant Garamond", HEADLINE_1 + HEADLINE_2),
    loadGoogleFont("wght@600", "Inter", "HESYA"),
    loadGoogleFont("wght@300", "Jost", TIMER),
  ]);

  const fonts: {
    name: string;
    data: ArrayBuffer;
    weight: 300 | 600;
    style: "normal" | "italic";
  }[] = [];
  if (serifItalic)
    fonts.push({ name: "Cormorant Garamond", data: serifItalic, weight: 300, style: "italic" });
  if (sansBrand) fonts.push({ name: "Inter", data: sansBrand, weight: 600, style: "normal" });
  if (jost) fonts.push({ name: "Jost", data: jost, weight: 300, style: "normal" });

  // Site palette, as sRGB: --color-abyss #02050d, --color-silver #d7dbe0.
  const silver = "#d7dbe0";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          overflow: "hidden",
          background: "#02050d",
        }}
      >
        {/* the hero's night-sky photograph */}
        <img
          src={toDataUri(sky, "image/jpeg")}
          width={1200}
          height={970}
          style={{ position: "absolute", left: 0, top: -120, objectFit: "cover" }}
          alt=""
        />

        {/* scrim: darker crown for the copy, deep indigo settling at the base */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(6,10,26,0.62) 0%, rgba(8,12,28,0.25) 40%, rgba(6,9,22,0.45) 78%, rgba(2,5,13,0.85) 100%)",
          }}
        />

        {/* wordmark, where the site header sits */}
        <div
          style={{
            position: "absolute",
            left: 64,
            top: 40,
            display: "flex",
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: 18,
            letterSpacing: "0.14em",
            color: silver,
          }}
        >
          HESYA
        </div>

        {/* headline — thin italic serif, centred, as in the hero */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 66,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Cormorant Garamond",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: 76,
            lineHeight: 1.1,
            color: silver,
          }}
        >
          <div style={{ display: "flex" }}>{HEADLINE_1}</div>
          <div style={{ display: "flex" }}>{HEADLINE_2}</div>
        </div>

        {/* soft glow behind the phone */}
        <div
          style={{
            position: "absolute",
            left: 600 - 260,
            top: PHONE_TOP - 40,
            width: 520,
            height: 520,
            display: "flex",
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(170,190,220,0.30) 0%, rgba(170,190,220,0) 68%)",
          }}
        />

        {/* the running session, rising from the bottom edge */}
        <div
          style={{
            position: "absolute",
            left: 600 - PHONE_W / 2,
            top: PHONE_TOP,
            width: PHONE_W,
            height: PHONE_H,
            display: "flex",
            overflow: "hidden",
            borderRadius: Math.round(PHONE_W * 0.1333),
            boxShadow: "0 32px 120px rgba(0,0,0,0.7)",
          }}
        >
          <img
            src={toDataUri(phone, "image/png")}
            width={PHONE_W}
            height={PHONE_H}
            alt=""
          />
          <div
            style={{
              position: "absolute",
              left: 71 * scale,
              top: 408 * scale,
              width: 260 * scale,
              height: 96 * scale,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Jost",
              fontWeight: 300,
              fontSize: 36 * scale,
              letterSpacing: "-0.014em",
              color: "#16191f",
            }}
          >
            {TIMER}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts }
  );
}
