const steps = [
  {
    title: "Diagnóstico",
    body: "Entender qual é o problema, em uma frase. Sem isso, não há projeto.",
  },
  {
    title: "Escopo fechado",
    body: "O que será entregue, quando, por quanto. Sem letra miúda.",
  },
  {
    title: "Construção",
    body: "Código limpo, padrões de mercado, acompanhamento durante o processo.",
  },
  {
    title: "Entrega",
    body: "Funcionando, documentado, e você sabendo usar.",
  },
] as const;

export function MethodSection() {
  return (
    <section id="metodo" className="bg-cinza-100">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-verde">
            Método
          </span>
          <h2 className="mt-3 font-title text-3xl font-semibold tracking-tight text-azul sm:text-4xl">
            Do X ao ✓ — como eu trabalho
          </h2>
          <p className="mt-4 text-lg text-cinza-500">
            Quatro etapas. Cada uma decide se a próxima começa.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex flex-col overflow-hidden rounded-xl bg-branco p-8"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-2 font-title text-7xl font-bold leading-none text-azul/[0.06]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-verde">
                Etapa {index + 1}
              </span>
              <h3 className="mt-3 font-title text-xl font-semibold text-azul">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-cinza-900/85">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
