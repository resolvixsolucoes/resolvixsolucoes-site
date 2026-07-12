import type { Metadata } from "next";
import Link from "next/link";
import { BrandSymbol } from "../components/BrandSymbol";
import { contact, site, social, whatsappUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Links",
  description: `Todos os links da ${site.name}: WhatsApp, projeto piloto, serviços, GitHub, LinkedIn e e-mail.`,
  alternates: { canonical: "/links" },
};

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
  hint?: string;
  eventName?: string;
};

const links: LinkItem[] = [
  {
    label: "Falar no WhatsApp",
    href: whatsappUrl("Olá! Vim pelo /links da Resolvix. Meu X é..."),
    external: true,
    hint: "Resposta mais rápida",
    eventName: "Links+WhatsApp",
  },
  {
    label: "Projeto piloto — 2 vagas",
    href: "/#piloto",
    hint: "Escopo real, valor reduzido, em troca de depoimento",
  },
  {
    label: "Serviços",
    href: "/#servicos",
    hint: "Sites, sistemas, automações, manutenção",
  },
  {
    label: "GitHub",
    href: social.github.url,
    external: true,
    hint: `github.com/${social.github.handle}`,
  },
  {
    label: "LinkedIn",
    href: social.linkedin.url,
    external: true,
  },
  {
    label: "E-mail",
    href: `mailto:${contact.email}`,
    hint: contact.email,
  },
];

export default function LinksPage() {
  return (
    <main className="flex flex-1 justify-center bg-cinza-100 px-6 py-16 sm:py-24">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <Link
            href="/"
            aria-label={`${site.name} — página inicial`}
            className="focus-visible:outline-none"
          >
            <BrandSymbol height={64} />
          </Link>
          <h1 className="mt-5 font-title text-2xl font-bold tracking-tight text-azul">
            {site.name}
          </h1>
          <p className="mt-2 text-sm text-cinza-500">
            {site.city}-{site.state} · {site.region}
          </p>
        </div>

        <ul className="mt-10 space-y-3">
          {links.map((link) => {
            const isExternal = link.external ?? false;
            const eventClass = link.eventName
              ? `plausible-event-name=${link.eventName} `
              : "";

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`${eventClass}group flex items-center justify-between gap-4 rounded-xl bg-branco px-5 py-4 text-left shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:bg-azul hover:text-branco`}
                >
                  <div className="min-w-0">
                    <div className="font-title font-semibold text-azul group-hover:text-branco">
                      {link.label}
                    </div>
                    {link.hint && (
                      <div className="mt-0.5 truncate text-xs text-cinza-500 group-hover:text-branco/70">
                        {link.hint}
                      </div>
                    )}
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-mono text-verde group-hover:text-verde"
                  >
                    →
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-center font-title text-xs font-semibold text-azul/70">
          Do X ao <span className="text-verde">✓</span>. Simples assim.
        </p>
      </div>
    </main>
  );
}
