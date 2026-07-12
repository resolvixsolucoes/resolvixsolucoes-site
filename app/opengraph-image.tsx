import { ImageResponse } from "next/og";
import { site } from "@/lib/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

/**
 * Card de compartilhamento social (WhatsApp, LinkedIn, Twitter).
 * Fundo azul chapado; gradiente aparece só dentro do símbolo, conforme
 * Brand Book v2.0. Satori exige display:flex em qualquer div com múltiplos
 * filhos — os divs abaixo respeitam essa regra e strings interpoladas são
 * empacotadas com template literal para virarem um filho único.
 */
export default async function OpenGraphImage() {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 64 64"
        >
          <defs>
            <linearGradient
              id="og"
              x1="0"
              y1="0"
              x2="64"
              y2="64"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#1B2B4C" />
              <stop offset="52%" stopColor="#3AA5C4" />
              <stop offset="100%" stopColor="#00C896" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#og)" />
          <path
            d="M16 34 L26 44 L48 20"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em" }}>
          {site.name}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          <div style={{ display: "flex" }}>Do X ao</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
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
