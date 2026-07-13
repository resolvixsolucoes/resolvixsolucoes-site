<!-- markdownlint-disable MD033 MD041 -->

# Resolvix Soluções — Site

> **Do X ao ✓. Simples assim.**

Site institucional e página de conversão da **Resolvix Soluções** —
desenvolvimento de sites, sistemas web e automações sob medida em
**Ipatinga-MG** e no **Vale do Aço**.

- **Site no ar:** <https://resolvixsolucoes.com.br>
- **Links (para Instagram):** <https://resolvixsolucoes.com.br/links>

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Linguagem | TypeScript 5 (strict) |
| UI | React 19 |
| Estilo | Tailwind CSS 4 (CSS-first `@theme`) |
| Fontes | Space Grotesk, Inter, JetBrains Mono via `next/font/google` |
| Analytics | Plausible (cookieless, sem banner) |
| Build | Turbopack |

Sem CMS. Sem banco. Sem CDN externa. A página inteira é pré-renderizada
em build time e servida como HTML/CSS/JS puros — o caminho mais curto
para Lighthouse 90+ em servidores compartilhados.

---

## Arquitetura

```txt
app/
  layout.tsx        # <html>, fontes, metadata, JSON-LD, Plausible
  page.tsx          # Landing composta pelas seções
  links/page.tsx    # Rota /links (page de agregador)
  globals.css       # Tokens da marca via @theme
  opengraph-image.tsx  # Card social gerado em build (satori)
  icon.png / apple-icon.png  # Favicons pelas convenções do Next
  components/       # Uma seção por arquivo, sem sobre-abstração
lib/
  config.ts         # Contato, redes, áreas de atendimento
  schema.ts         # JSON-LD LocalBusiness
public/
  brand/            # Assets oficiais da marca (símbolo, logo, banners)
  .htaccess         # Regras Apache/LiteSpeed p/ static hosting
```

---

## Decisões técnicas

### Design system
Tokens tipográficos e de cor centralizados em `app/globals.css` via
`@theme` do Tailwind v4. Componentes consomem via classes utilitárias
(`bg-azul`, `text-verde`, `font-title`) sem `style` inline.

### Performance
Static export puro — zero JavaScript necessário pra renderizar as
seções acima da dobra. As três fontes vêm auto-hosteadas via
`next/font`, com preload nos assets críticos e zero requisição
externa em runtime. Imagens da marca em PNG transparente com
`unoptimized: true` (o export estático não roda otimização em
runtime).

### SEO local
`<title>`, `<meta description>` e `og:*` populados via Metadata API
do Next. Schema.org `LocalBusiness` renderizado como JSON-LD com as
áreas de atendimento (Ipatinga, Coronel Fabriciano, Timóteo, Santana
do Paraíso). OpenGraph image (1200×630) gerada em build via
`next/og` (satori).

### Acessibilidade
HTML semântico (`<main>`, `<section>`, `<nav>`, `<article>`,
`<footer>`). Contraste AA em todas as combinações do sistema de
cores. Foco visível (`:focus-visible`) em elementos interativos.
Formulário com `<label>` associado a cada campo. Accordion do FAQ
com `<details>/<summary>` nativo — funciona sem JS, navegável por
teclado.

### Analytics
Plausible carregado condicionalmente (só quando
`NEXT_PUBLIC_PLAUSIBLE_DOMAIN` está definido). Cliques em CTAs
categorizados via classes `plausible-event-name=*` — permite
distinguir origem (hero, seção de piloto, contato, botão flutuante,
página `/links`) sem instrumentação manual em runtime.

---

## Scripts

```sh
npm run dev     # dev server
npm run build   # build de produção (gera ./out para static hosting)
npm run start   # serve o build local
npm run lint    # eslint flat config
```

**Requisitos:** Node 20.9+ (recomendado Node 22 LTS).

---

## Deploy

Configurado como **static export**
(`next.config.ts` → `output: 'export'`). O `npm run build` produz uma
pasta `out/` com HTML, CSS, JS e assets prontos pra qualquer
hospedagem Apache / LiteSpeed / Nginx que sirva arquivos estáticos.

Inclui `.htaccess` no export com:

- `Content-Type: image/png` forçado no `/opengraph-image` (o Next
  gera esse arquivo sem extensão; sem essa regra, scrapers sociais
  ignoram o card).
- Redirect HTTP → HTTPS.
- Cache imutável nos assets com hash de conteúdo, cache curto no
  HTML.
- Compressão gzip e headers de segurança básicos.

Variáveis de ambiente aceitas em build:

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Domínio pra Plausible. Sem ela o script não carrega — nada quebra. |

---

## Licença

Código proprietário. Todos os direitos reservados à Resolvix
Soluções.

---

*Do X ao ✓. Simples assim.*
