import { contact, site } from "./config";

/**
 * JSON-LD Schema.org LocalBusiness.
 * Ranqueamento local depende de os mesmos dados aparecerem aqui,
 * no Google Perfil da Empresa e no rodapé do site. Manter em sync.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}#business`,
    name: site.name,
    slogan: site.tagline,
    description:
      "Desenvolvimento de sites, sistemas web e automações sob medida para micro e pequenas empresas e profissionais liberais do Vale do Aço.",
    url: site.url,
    email: contact.email,
    telephone: `+${contact.whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "BR",
    },
    areaServed: site.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: "Minas Gerais",
      },
    })),
    knowsAbout: [
      "Desenvolvimento web",
      "Sites institucionais",
      "Landing pages",
      "Sistemas web sob medida",
      "Automação de processos",
      "Integração de APIs",
    ],
    priceRange: "$$",
  };
}
