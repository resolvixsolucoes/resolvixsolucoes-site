/**
 * Símbolo Resolvix — quadrado arredondado com gradiente exclusivo do símbolo
 * e checkmark branco. Sem sombra, brilho ou contorno (Brand Book v2.0).
 *
 * Uso: BrandSymbol isolado no header (mínimo 48px), no footer e como
 * separador visual. É a única superfície onde o gradiente aparece.
 */

type Props = {
  size?: number;
  className?: string;
  title?: string;
};

export function BrandSymbol({
  size = 48,
  className,
  title = "Resolvix Soluções",
}: Props) {
  // Cada instância precisa de um id único para o gradiente não colidir
  // quando dois símbolos coexistem no mesmo documento.
  const gradientId = `resolvix-symbol-gradient-${size}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="64"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#1B2B4C" />
          <stop offset="52%" stopColor="#3AA5C4" />
          <stop offset="100%" stopColor="#00C896" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={`url(#${gradientId})`} />
      <path
        d="M16 34 L26 44 L48 20"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
