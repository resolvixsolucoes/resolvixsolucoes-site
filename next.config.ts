import type { NextConfig } from "next";

/**
 * Static export para hospedagem sem Node (Hostinger shared / cPanel).
 * `next build` gera a pasta `out/` com HTML/CSS/JS puros que podem ser
 * subidos direto pra public_html.
 *
 * Restrições assumidas:
 *  - Sem Server Actions em runtime (form envia via window.open).
 *  - Sem next/image otimizada em runtime (`unoptimized: true`).
 *  - Sem middleware — bloqueia export.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Adiciona barra no final das URLs: /links/index.html em vez de /links.html.
  // Estilo mais universal em servidores estáticos (Apache/LiteSpeed).
  trailingSlash: true,
};

export default nextConfig;
