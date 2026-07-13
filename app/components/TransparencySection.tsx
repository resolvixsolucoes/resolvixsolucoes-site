import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { social } from "@/lib/config";

const stack: Array<{ name: string; Icon: IconType; color: string }> = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
];

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
              O que uso de verdade em projeto de cliente — escolho a stack
              pelo problema, não pela moda.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <li
                  key={tech.name}
                  className="flex items-center gap-1.5 rounded-md border border-branco/15 bg-azul-hover/60 px-2.5 py-1 font-mono text-xs text-branco/90"
                >
                  <tech.Icon
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0"
                    style={{ color: tech.color }}
                  />
                  {tech.name}
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
