import { social } from "@/lib/config";

const stack = ["TypeScript", "Node.js", "React", "Next.js"];

export function TransparencySection() {
  return (
    <section id="transparencia" className="bg-azul text-branco">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-verde">
            Transparência
          </span>
          <h2 className="mt-3 font-title text-3xl font-semibold tracking-tight sm:text-4xl">
            A Resolvix está começando. E isso está escrito aqui.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-branco/85">
            <p>
              Não tenho case. Não tenho depoimento. Não vou inventar nenhum dos
              dois.
            </p>
            <p>
              O que eu tenho é método, código aberto e a disposição de mostrar
              como o trabalho é feito — em vez de apenas afirmar que é bom.
            </p>
            <p>Está tudo público:</p>
          </div>

          <ul className="mt-6 space-y-2 font-mono text-base">
            <li>
              <span aria-hidden="true" className="text-verde">→ </span>
              <a
                href={social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-verde decoration-2 underline-offset-4 hover:text-verde"
              >
                github.com/{social.github.handle}
              </a>
            </li>
            <li>
              <span aria-hidden="true" className="text-verde">→ </span>
              <a
                href={social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-verde decoration-2 underline-offset-4 hover:text-verde"
              >
                {social.instagram.handle}
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-branco/10 bg-branco/[0.04] p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-verde">
              Base pública
            </span>
            <h3 className="mt-3 font-title text-xl font-semibold">
              Plataforma de gestão para igrejas
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-branco/80">
              Extraída de plataforma em uso numa igreja no Vale do Aço.
              Gestão de membros, ministérios, financeiro, LMS de cursos,
              check-in por QR e bot WhatsApp para visitantes. PWA
              offline-friendly, controle de acesso granular por permissão.
              Publicada como semente pra outras igrejas usarem como base.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm">
              <a
                href="https://github.com/resolvixsolucoes/igreja-base"
                target="_blank"
                rel="noopener noreferrer"
                className="text-verde hover:underline"
              >
                Ver código →
              </a>
              <a
                href="https://igreja-base.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-verde hover:underline"
              >
                Testar demo →
              </a>
            </div>
          </article>

          <article className="rounded-xl border border-branco/10 bg-branco/[0.04] p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-verde">
              Stack
            </span>
            <h3 className="mt-3 font-title text-xl font-semibold">
              As ferramentas do dia a dia
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-branco/80">
              Sem lista inflada. Só o que uso de verdade em projeto de cliente.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-branco/15 bg-azul-hover/60 px-2.5 py-1 font-mono text-xs text-branco/90"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-branco/10 bg-branco/[0.04] p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-verde">
              Esta página
            </span>
            <h3 className="mt-3 font-title text-xl font-semibold">
              A primeira prova
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-branco/80">
              Este site foi construído por mim. Se ele é rápido, acessível e
              honesto, é uma amostra de como um projeto da Resolvix se
              comporta.
            </p>
            <a
              href="https://github.com/resolvixsolucoes/resolvixsolucoes-site"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-verde hover:underline"
            >
              Código no GitHub →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
