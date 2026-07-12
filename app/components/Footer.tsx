import { site, social } from "@/lib/config";
import { BrandSymbol } from "./BrandSymbol";

const socialLinks = [
  { key: "instagram", label: "Instagram", url: social.instagram.url },
  { key: "linkedin", label: "LinkedIn", url: social.linkedin.url },
  { key: "github", label: "GitHub", url: social.github.url },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-azul text-branco">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <BrandSymbol height={40} />
              <span className="font-title text-lg font-bold tracking-tight">
                {site.name}
              </span>
            </div>
            <p className="mt-4 text-sm text-branco/70">
              Sites · Sistemas web · Automações · {site.city}-{site.state}
            </p>
          </div>

          <nav aria-label="Redes sociais">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
              {socialLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-branco/85 hover:text-verde"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-branco/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-title text-sm font-semibold text-branco">
            Do X ao <span className="text-verde">✓</span>. Simples assim.
          </p>
          <p className="text-xs text-branco/60">
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
