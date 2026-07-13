<!-- markdownlint-disable MD033 MD041 -->

# Resolvix Soluções — Site

> **Do X ao ✓. Simples assim.**

Site institucional e página de conversão da **Resolvix Soluções** — desenvolvimento
de sites, sistemas web e automações sob medida para micro e pequenas empresas e
profissionais liberais de **Ipatinga-MG** e do **Vale do Aço**.

Este repositório é ele próprio uma prova de trabalho: o site que vende os
serviços foi construído com os mesmos padrões que a Resolvix aplica em projeto
de cliente.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router, SSG) |
| Linguagem | TypeScript 5 (strict) |
| UI | React 19 |
| Estilo | Tailwind CSS 4 (CSS-first `@theme`) |
| Fontes | Space Grotesk, Inter, JetBrains Mono (`next/font/google`) |
| Analytics | Plausible (cookieless, sem banner) |
| Build | Turbopack (padrão do Next 16) |

Sem CMS. Sem banco. Sem CDN externa. A página inteira é gerada estaticamente
em build e servida como HTML puro — o caminho mais curto para Lighthouse 90+.

---

## Estrutura

```txt
app/
  layout.tsx        # <html>, fontes, metadata, JSON-LD, Plausible
  page.tsx          # Landing (composta pelas seções abaixo)
  links/page.tsx    # Página /links (substitui Linktree)
  globals.css       # @theme com tokens da marca
  components/       # Uma seção por arquivo, sem sobre-abstração
lib/
  config.ts         # Contato, redes, cidade, áreas de atendimento
public/             # Assets estáticos (SVGs da marca)
```

---

## Princípios de marca — regras rígidas

O Brand Book v2.0 é opinionado. O código respeita:

- **Gradiente exclusivo do símbolo.** Nunca aparece em fundo, botão, card ou
  título. Cores chapadas em todos os outros lugares.
- **Símbolo isolado** no header (nunca o logo completo em tamanho reduzido).
  Mínimo 48px.
- **Sem sombra, brilho ou contorno** no símbolo.
- **Zero número inventado.** Nenhum "X% de aumento", "N clientes", "Y anos de
  experiência". A empresa começou em 2026.
- **Zero case, zero depoimento** enquanto o primeiro piloto não for entregue.
  A [seção 4](#seções) é literal sobre isso.

---

## Seções da landing

1. **Hero** — H1 "Do X ao ✓. Simples assim." + CTA WhatsApp
2. **Problema** — 3 dores do dono (planilha, site parado, sistemas soltos)
3. **Serviços** — 5 ofertas oficiais, descrevem o quê, não prometem métrica
4. **Método** — `Diagnóstico → Escopo → Construção → Entrega`. Substitui portfólio.
5. **Transparência** — "A Resolvix está começando. E isso está escrito aqui."
6. **Piloto** — 2 vagas em troca de autorização para publicar + depoimento
7. **Contato** — 4 campos, um deles é a qualificação primária ("Qual é o seu X?")

A seção 6 é temporária: quando o primeiro piloto for entregue, vira a seção
**Portfólio** com antes/depois real.

---

## SEO local

- `<title>` e `<meta description>` com **Ipatinga** e **Vale do Aço**.
- Schema.org `LocalBusiness` com as 4 áreas de atendimento (Ipatinga,
  Coronel Fabriciano, Timóteo, Santana do Paraíso).
- Alinhamento com Google Perfil da Empresa (mesmo nome, mesmo endereço,
  mesmo telefone) para reforçar o ranqueamento local.
- `sitemap.xml` e `robots.txt` gerados pelo Next.

---

## Acessibilidade

Não é opcional. O posicionamento da Resolvix é *"solução de qualidade não
pode ser exclusividade de quem é grande"*. Um site que uma pessoa com
deficiência não consegue usar contradiz isso.

- HTML semântico (`<main>`, `<section>`, `<nav>`, `<article>`, `<footer>`).
- Contraste **AA** em todas as combinações.
- Foco visível (`:focus-visible` com contorno verde) em todos os elementos
  navegáveis por teclado.
- `alt` em toda imagem; `aria-label` onde ícone dispensa texto.
- Formulário com `<label>` real associado a cada `<input>`.

---

## Scripts

```sh
npm run dev     # dev server
npm run build   # build de produção (Turbopack)
npm run start   # serve o build local
npm run lint    # eslint flat config
```

Requisitos: **Node 20.9+** (Next 16 mínimo). Recomendado Node 22 LTS.

---

## Configuração antes de publicar

Um único ponto ainda depende de dado real e está marcado com `TODO`:

- **`lib/config.ts` → `contact.whatsappNumber`** — hoje contém um placeholder.
  Substituir pelo número real (formato E.164, sem `+`) antes do deploy.

Analytics (Plausible) é configurado via variável de ambiente:

```sh
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=resolvixsolucoes.com.br
```

---

## Deploy — Hostinger

O projeto está configurado como **static export** (`next.config.ts` →
`output: 'export'`). O `next build` produz uma pasta `out/` com HTML,
CSS, JS e assets prontos pra subir em qualquer hospedagem Apache /
LiteSpeed, incluindo os planos compartilhados da Hostinger sem Node.

### Build

```sh
npm run build
# saída: ./out — todo o site estático
```

### O que subir

O conteúdo de **`out/`** (não a pasta `out` em si) vai para a raiz do
diretório público da Hostinger — geralmente `public_html/`. Inclui
automaticamente um `.htaccess` (originalmente em `public/.htaccess`)
que:

- Força `Content-Type: image/png` no `/opengraph-image` (sem essa
  regra, o WhatsApp / LinkedIn / Twitter ignoram o card social).
- Redireciona HTTP → HTTPS.
- Serve `404.html` como página de erro.
- Cache imutável nos assets do Next (que têm hash no nome) e cache
  curto no HTML pra propagar mudanças rápido.
- Compressão gzip e headers de segurança.

### Passo a passo (hPanel / File Manager)

1. Roda `npm run build` local.
2. Zipa a pasta `out/` (só o conteúdo, não a pasta) → `deploy.zip`.
3. No hPanel → **Files → File Manager** → entra em `public_html/`.
4. Limpa o `public_html/` (se tiver instalação anterior).
5. Faz upload do `deploy.zip` e usa **Extract** direto no File Manager.
6. Confere se o `.htaccess` chegou (às vezes File Manager esconde
   arquivos que começam com `.` — habilita "Show Hidden Files").

### Passo a passo (FTP)

```sh
# depois do npm run build:
cd out
# usar FileZilla, WinSCP ou lftp para subir tudo para public_html/
lftp -u USUARIO,SENHA ftp.resolvixsolucoes.com.br \
  -e "mirror -R . public_html/ --delete; quit"
```

### Configuração antes do deploy

- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=resolvixsolucoes.com.br` — em `.env`
  local ou como variável de build. Sem essa env, o Plausible não
  carrega (não quebra nada, só não mede).
- Domínio `resolvixsolucoes.com.br` já apontando na Hostinger e com
  SSL ativo (Free Let's Encrypt do hPanel resolve).

---

## Licença

Código próprio, uso restrito à Resolvix Soluções. Referências e ideias podem
ser adaptadas com atribuição.

---

*Do X ao ✓. Simples assim.*
