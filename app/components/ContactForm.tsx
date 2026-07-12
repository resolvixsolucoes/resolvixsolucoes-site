"use client";

import { type FormEvent, useId } from "react";
import { whatsappUrl } from "@/lib/config";

const businessTypes = [
  { value: "comercio", label: "Comércio" },
  { value: "profissional-liberal", label: "Profissional liberal" },
  { value: "prestador-b2b", label: "Prestador B2B" },
  { value: "outro", label: "Outro" },
] as const;

/**
 * O envio abre WhatsApp com os quatro campos serializados na mensagem.
 * Não usa backend — o site é 100% estático e o único canal ativo é o
 * WhatsApp. A qualificação já acontece no próprio formulário.
 */
export function ContactForm() {
  const nomeId = useId();
  const contatoId = useId();
  const problemaId = useId();
  const tipoId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") ?? "").trim();
    const contato = String(data.get("contato") ?? "").trim();
    const problema = String(data.get("problema") ?? "").trim();
    const tipoValue = String(data.get("tipo") ?? "");
    const tipoLabel =
      businessTypes.find((t) => t.value === tipoValue)?.label ?? tipoValue;

    const lines = [
      "Olá! Vim pelo site da Resolvix.",
      "",
      `Nome: ${nome}`,
      `Contato: ${contato}`,
      `Tipo de negócio: ${tipoLabel}`,
      "",
      `Meu X: ${problema}`,
    ];

    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-label="Formulário de contato"
    >
      <div>
        <label
          htmlFor={nomeId}
          className="block font-mono text-xs uppercase tracking-widest text-cinza-500"
        >
          Nome
        </label>
        <input
          id={nomeId}
          name="nome"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-lg border border-cinza-100 bg-branco px-4 py-3 text-base text-cinza-900 outline-none transition-colors focus:border-verde"
        />
      </div>

      <div>
        <label
          htmlFor={contatoId}
          className="block font-mono text-xs uppercase tracking-widest text-cinza-500"
        >
          WhatsApp ou e-mail
        </label>
        <input
          id={contatoId}
          name="contato"
          type="text"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-cinza-100 bg-branco px-4 py-3 text-base text-cinza-900 outline-none transition-colors focus:border-verde"
        />
      </div>

      <div>
        <label
          htmlFor={problemaId}
          className="block font-mono text-xs uppercase tracking-widest text-cinza-500"
        >
          Qual é o problema, em uma frase?
        </label>
        <textarea
          id={problemaId}
          name="problema"
          required
          rows={3}
          className="mt-2 w-full resize-none rounded-lg border border-cinza-100 bg-branco px-4 py-3 text-base text-cinza-900 outline-none transition-colors focus:border-verde"
        />
      </div>

      <div>
        <label
          htmlFor={tipoId}
          className="block font-mono text-xs uppercase tracking-widest text-cinza-500"
        >
          Tipo de negócio
        </label>
        <select
          id={tipoId}
          name="tipo"
          required
          defaultValue=""
          className="mt-2 w-full rounded-lg border border-cinza-100 bg-branco px-4 py-3 text-base text-cinza-900 outline-none transition-colors focus:border-verde"
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {businessTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="plausible-event-name=Form+WhatsApp inline-flex w-full items-center justify-center rounded-lg bg-verde px-6 py-3.5 text-base font-semibold text-azul transition-colors hover:bg-verde-hover sm:w-auto"
      >
        Enviar pelo WhatsApp
      </button>

      <p className="text-xs text-cinza-500">
        Ao enviar, você é redirecionado ao WhatsApp com os campos já
        preenchidos na mensagem.
      </p>
    </form>
  );
}
