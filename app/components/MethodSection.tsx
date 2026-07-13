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

function XMark({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6 L18 18 M18 6 L6 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckMark({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12 L10 18 L20 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Arrow({ direction }: { direction: "right" | "down" }) {
  const rotation = direction === "down" ? "rotate-90" : "";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`h-4 w-4 shrink-0 text-cinza-500 ${rotation}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12 H19 M13 6 L19 12 L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

        {/* Fluxo: [X] → 01 → 02 → 03 → 04 → [✓]. Horizontal no desktop,
            vertical no mobile — a seta conectora rotaciona 90° via CSS.
            Estrutura chapada (sem ol/li aninhado) pra todos os 4 cards
            serem irmãos diretos e receberem `flex-1` igual, garantindo
            mesma largura E mesma altura. Semântica preservada com
            role="list"/role="listitem". */}
        <div
          role="list"
          aria-label="Etapas do método"
          className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-stretch lg:gap-3"
        >
          <div className="flex flex-col items-center gap-2 lg:shrink-0 lg:self-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-branco text-cinza-500 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <XMark className="h-8 w-8" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-cinza-500">
              Problema
            </span>
          </div>

          <div className="flex justify-center lg:hidden">
            <Arrow direction="down" />
          </div>
          <div className="hidden lg:flex lg:self-center">
            <Arrow direction="right" />
          </div>

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="contents"
            >
              <article
                role="listitem"
                className="relative flex flex-1 flex-col overflow-hidden rounded-xl bg-branco p-6"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-1 font-title text-6xl font-bold leading-none text-azul/[0.06]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-verde">
                  Etapa {index + 1}
                </span>
                <h3 className="mt-2 font-title text-base font-semibold text-azul">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cinza-900/85">
                  {step.body}
                </p>
              </article>
              <div className="flex justify-center lg:hidden">
                <Arrow direction="down" />
              </div>
              <div className="hidden lg:flex lg:self-center">
                <Arrow direction="right" />
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center gap-2 lg:shrink-0 lg:self-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-verde text-branco shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <CheckMark className="h-8 w-8" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-verde">
              Solução
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
