import { contact, site, whatsappUrl } from "@/lib/config";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contato" className="bg-cinza-100">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-verde">
              Contato
            </span>
            <h2 className="mt-3 font-title text-3xl font-semibold tracking-tight text-azul sm:text-4xl">
              Qual é o seu X?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cinza-900/85">
              Sem dor clara, não há projeto. Descreva o problema em uma frase —
              o resto conversamos.
            </p>

            <dl className="mt-10 space-y-5 text-base">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-cinza-500">
                  WhatsApp
                </dt>
                <dd className="mt-1">
                  <a
                    href={whatsappUrl(
                      "Olá! Vim pelo site da Resolvix. Meu X é...",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="plausible-event-name=Contato+WhatsApp text-azul underline decoration-verde decoration-2 underline-offset-4 hover:text-verde"
                  >
                    Falar agora no WhatsApp →
                  </a>
                </dd>
              </div>

              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-cinza-500">
                  E-mail
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-azul underline decoration-verde decoration-2 underline-offset-4 hover:text-verde"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-cinza-500">
                  Onde
                </dt>
                <dd className="mt-1 text-cinza-900">
                  {site.city}-{site.state} · Atendimento em todo o {site.region}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl bg-branco p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_rgba(31,41,55,0.06)] sm:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
