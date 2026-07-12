"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/config";

const message = "Olá! Vim pelo site da Resolvix. Meu X é...";

/**
 * Botão CTA persistente no canto inferior direito.
 *
 * Regras de exibição:
 *  - Escondido enquanto o hero estiver visível (evita duplicar o CTA do
 *    hero) e enquanto a seção de contato estiver visível (evita duplicar
 *    o CTA da própria seção).
 *  - Aparece nas seções intermediárias (problema, serviços, método,
 *    transparência, piloto, FAQ) — o miolo do funil.
 *
 * Sem shadow no símbolo (Brand Book), mas o botão em si é UI e pode ter
 * elevação sutil pra ler como flutuante.
 */
export function FloatingWhatsApp() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contato");
    if (!hero || !contact) return;

    const heroObs = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    const contactObs = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    heroObs.observe(hero);
    contactObs.observe(contact);

    return () => {
      heroObs.disconnect();
      contactObs.disconnect();
    };
  }, []);

  const visible = !heroVisible && !contactVisible;

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`plausible-event-name=Float+WhatsApp fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-verde text-branco shadow-[0_4px_16px_rgba(0,200,150,0.35),0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out hover:bg-verde-hover hover:scale-105 sm:h-16 sm:w-16 ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-7 w-7 sm:h-8 sm:w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.688 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}
