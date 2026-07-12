const problems = [
  {
    title: "A planilha virou gargalo",
    body: "Orçamento montado à mão, estoque controlado no papel, informação duplicada em três lugares. Cada pedido custa mais tempo do que deveria.",
  },
  {
    title: "O site parou no tempo",
    body: "Foi feito uma vez, ninguém mexeu mais. Não abre direito no celular, não aparece no Google, e quem procura por você não te encontra.",
  },
  {
    title: "Os sistemas não conversam",
    body: "O que entra num lugar tem que ser digitado de novo em outro. Retrabalho todo dia, erro toda semana.",
  },
] as const;

export function ProblemSection() {
  return (
    <section className="bg-cinza-100">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="font-title text-3xl font-semibold tracking-tight text-azul sm:text-4xl">
          O que trava o seu negócio hoje?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <article
              key={problem.title}
              className="flex flex-col rounded-xl bg-branco p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_rgba(31,41,55,0.04)]"
            >
              <span className="font-mono text-sm text-verde">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-title text-xl font-semibold text-azul">
                {problem.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-cinza-900/85">
                {problem.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
