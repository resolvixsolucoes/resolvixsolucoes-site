import { site, whatsappUrl } from "@/lib/config";

const heroMessage =
  "Olá! Vim pelo site da Resolvix. Meu X é...";

export function Hero() {
  return (
    <section id="hero" className="relative bg-azul text-branco">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="font-title text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Do X ao <span className="text-verde">✓</span>.<br />
            Simples assim.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-branco/85 sm:text-xl">
            Sites, sistemas web e automações sob medida para micro e pequenas
            empresas e profissionais liberais de {site.city} e do {site.region}.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={whatsappUrl(heroMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="plausible-event-name=Hero+WhatsApp inline-flex items-center justify-center rounded-lg bg-verde px-6 py-3.5 text-base font-semibold text-azul transition-colors hover:bg-verde-hover"
            >
              Me conta qual é o seu X
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center rounded-lg border border-branco/25 px-6 py-3.5 text-base font-semibold text-branco transition-colors hover:border-branco/60 hover:bg-branco/5"
            >
              Ver como eu trabalho
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
