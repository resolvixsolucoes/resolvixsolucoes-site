import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

/**
 * Card de compartilhamento social (WhatsApp, LinkedIn, Twitter).
 * Fundo azul chapado; símbolo é o PNG oficial da marca (transparente).
 * Satori exige display:flex em qualquer div com múltiplos filhos e não
 * consegue baixar fallback pra U+2713, então o ✓ da tagline vira SVG
 * inline com stroke verde.
 */
export default async function OpenGraphImage() {
  const symbolBuffer = fs.readFileSync(
    path.join(process.cwd(), "public/brand/simbolo.png"),
  );
  const symbolDataUri = `data:image/png;base64,${symbolBuffer.toString("base64")}`;

  const bottomLine = `Sites - Sistemas - Automacoes - ${site.city}-${site.state}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        backgroundColor: "#1B2B4C",
        color: "#FFFFFF",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        {/* biome-ignore lint/performance/noImgElement: satori only supports <img> */}
        <img
          src={symbolDataUri}
          alt=""
          width={180}
          height={110}
          style={{ display: "block" }}
        />
        <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.02em" }}>
          {site.name}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 104,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          <div style={{ display: "flex" }}>Do X ao</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="104"
            height="104"
            viewBox="0 0 64 64"
          >
            <path
              d="M12 34 L26 48 L52 18"
              stroke="#00C896"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <div style={{ display: "flex" }}>.</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 48,
            fontWeight: 600,
            color: "#00C896",
            letterSpacing: "-0.02em",
          }}
        >
          Simples assim.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "rgba(255,255,255,0.7)",
          fontWeight: 500,
        }}
      >
        {bottomLine}
      </div>
    </div>,
    { ...size },
  );
}
