import { whatsappUrl } from "@/lib/config";

/**
 * Seção temporária: enquanto as 2 vagas estiverem abertas, esta seção
 * existe. Depois do primeiro piloto entregue, este componente é removido
 * e substituído por um <PortfolioSection /> com antes/depois real.
 * — briefing, seção "Quando o primeiro piloto for entregue".
 */

const pilotMessage =
  "Vim pelo site. Quero saber do projeto piloto. Meu X é...";

const terms = [
  "Autorização para publicar o antes e o depois",
  "Um depoimento honesto — inclusive se algo der errado",
];

export function PilotSection() {
  return (
    <section id="piloto" className="bg-branco">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <div className="rounded-2xl border border-cinza-100 bg-cinza-100/50 p-8 sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-verde/15 px-3 py-1 font-mono text-xs uppercase tracking-widest text-azul">
            <span className="h-1.5 w-1.5 rounded-full bg-verde" />
            2 vagas abertas
          </span>

          <h2 className="mt-5 font-title text-3xl font-semibold tracking-tight text-azul sm:text-4xl">
            Projeto piloto
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-cinza-900/90">
            <p>
              Eu entrego o projeto de verdade — escopo fechado, prazo real,
              sem cobrar o valor cheio.
            </p>
            <p>Em troca, peço duas coisas:</p>
          </div>

          <ul className="mt-5 space-y-3">
            {terms.map((term) => (
              <li key={term} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-verde text-azul"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="h-3 w-3"
                    fill="none"
                  >
                    <path
                      d="M5 10.5 L8.5 14 L15 6.5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-base leading-relaxed text-cinza-900/85">
                  {term}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-cinza-500">
            <p>
              <span className="font-semibold text-azul">Por quê:</span> a
              Resolvix está começando. A única forma honesta de sair do zero é
              entregar de verdade e deixar o resultado falar.
            </p>
            <p>
              <span className="font-semibold text-azul">Para quem:</span> micro
              e pequena empresa ou profissional liberal do Vale do Aço, com um
              problema claro.
            </p>
          </div>

          <a
            href={whatsappUrl(pilotMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="plausible-event-name=Piloto+WhatsApp mt-10 inline-flex items-center justify-center rounded-lg bg-verde px-6 py-3.5 text-base font-semibold text-azul transition-colors hover:bg-verde-hover"
          >
            Quero uma das vagas
          </a>
        </div>
      </div>
    </section>
  );
}
