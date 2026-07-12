/**
 * Configuração pública do site.
 * Fonte única para dados de contato, redes e SEO — evita string mágica espalhada.
 *
 * NOTA: substituir WHATSAPP_NUMBER pelo número real antes de publicar.
 */

export const site = {
  name: "Resolvix Soluções",
  tagline: "Do X ao ✓. Simples assim.",
  city: "Ipatinga",
  state: "MG",
  region: "Vale do Aço",
  serviceAreas: [
    "Ipatinga",
    "Coronel Fabriciano",
    "Timóteo",
    "Santana do Paraíso",
  ],
  domain: "resolvixsolucoes.com.br",
  url: "https://resolvixsolucoes.com.br",
} as const;

export const contact = {
  email: "contato@resolvixsolucoes.com.br",
  // TODO: trocar pelo número real (formato E.164 sem "+"). Placeholder abaixo.
  whatsappNumber: "5531999999999",
} as const;

export const social = {
  instagram: {
    handle: "@resolvixsolucoes",
    url: "https://instagram.com/resolvixsolucoes",
  },
  github: {
    handle: "resolvixsolucoes",
    url: "https://github.com/resolvixsolucoes",
  },
  linkedin: {
    handle: "resolvixsolucoes",
    url: "https://linkedin.com/company/resolvixsolucoes",
  },
} as const;

/**
 * Monta URL do WhatsApp com mensagem pré-preenchida.
 * A mensagem qualifica a conversa antes mesmo do primeiro contato.
 */
export function whatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${contact.whatsappNumber}?text=${encoded}`;
}
