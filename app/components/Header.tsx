import Link from "next/link";
import { site } from "@/lib/config";
import { BrandSymbol } from "./BrandSymbol";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#metodo", label: "Método" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="w-full bg-azul text-branco">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-none"
          aria-label={`${site.name} — página inicial`}
        >
          <BrandSymbol height={40} priority />
          <span className="hidden font-title text-lg font-bold tracking-tight sm:inline">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-branco/90 transition-colors hover:text-verde"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
