const faqs = [
  {
    q: "Quanto tempo demora um projeto?",
    a: "Depende do escopo. O diagnóstico define o prazo real antes de qualquer código ser escrito. Prometer prazo antes de entender o problema é o mesmo tipo de pressa que gera o retrabalho que você quer evitar.",
  },
  {
    q: "Como sei quanto vai custar?",
    a: "Depois do diagnóstico, o escopo fecha com valor e prazo — por escrito, sem letra miúda. Se surpresa aparecer no meio do caminho, o escopo é reaberto antes de continuar, não depois da fatura chegar.",
  },
  {
    q: "Quais tecnologias você usa?",
    a: "TypeScript, Node.js, React e Next.js. É o que domino em projeto de cliente. Não vou escolher uma stack pela moda — só pelo que atende o seu problema com padrão de mercado e sem dependência exótica pra manter depois.",
  },
  {
    q: "Onde a Resolvix atende?",
    a: "Ipatinga, Coronel Fabriciano, Timóteo, Santana do Paraíso e todo o Vale do Aço. O trabalho é remoto por padrão; presencial quando faz sentido pra entender o processo (visita à loja, ao escritório, à oficina).",
  },
  {
    q: "Você tem experiência no meu setor?",
    a: "A Resolvix está começando — provavelmente não. Mas método específico bate experiência genérica. Meu foco no diagnóstico é entender o SEU processo, não empurrar o que já fiz pra outro cliente parecido.",
  },
  {
    q: "Como funciona o projeto piloto?",
    a: "Duas vagas de escopo fechado com valor reduzido, em troca de duas coisas: autorização para publicar o antes e o depois e um depoimento honesto — inclusive se algo der errado. É a forma honesta de sair do zero sem inventar case.",
  },
] as const;

export function FaqSection() {
  return (
    <section id="faq" className="bg-cinza-100">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-verde">
            Perguntas
          </span>
          <h2 className="mt-3 font-title text-3xl font-semibold tracking-tight text-azul sm:text-4xl">
            O que costumam me perguntar
          </h2>
        </div>

        <ul className="mt-12 divide-y divide-cinza-100 overflow-hidden rounded-2xl border border-cinza-100 bg-branco">
          {faqs.map((item) => (
            <li key={item.q}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 transition-colors hover:bg-cinza-100/40 sm:px-8 sm:py-6">
                  <span className="font-title text-base font-semibold text-azul sm:text-lg">
                    {item.q}
                  </span>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="mt-1.5 h-4 w-4 shrink-0 text-verde transition-transform group-open:rotate-180"
                    fill="none"
                  >
                    <path
                      d="M5 8 L10 13 L15 8"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pr-16 text-base leading-relaxed text-cinza-900/85 sm:px-8 sm:pb-8">
                  {item.a}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
