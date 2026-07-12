const services = [
  {
    title: "Sites institucionais",
    body: "Sua empresa apresentada com clareza, rápida e encontrável.",
  },
  {
    title: "Landing pages",
    body: "Uma página, um objetivo: captar contato ou vender algo específico.",
  },
  {
    title: "Sistemas web sob medida",
    body: "O sistema que o seu processo precisa — não o que cabe num modelo pronto.",
  },
  {
    title: "Automações e integrações (API)",
    body: "Fazer seus sistemas conversarem, para o trabalho manual sumir.",
  },
  {
    title: "Manutenção e suporte",
    body: "Seu site no ar, atualizado e seguro.",
  },
] as const;

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-branco">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <h2 className="font-title text-3xl font-semibold tracking-tight text-azul sm:text-4xl">
            O que a Resolvix faz
          </h2>
          <p className="mt-4 text-lg text-cinza-500">
            Cinco serviços. Descrevem o que é feito — sem prometer métrica.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.title} className="flex gap-5">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-azul font-mono text-sm font-medium text-verde"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-title text-lg font-semibold text-azul">
                  {service.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-cinza-900/85">
                  {service.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
