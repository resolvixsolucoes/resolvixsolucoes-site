import Image from "next/image";

/**
 * Símbolo Resolvix — X + ✓ fundidos.
 *
 * Fonte: public/brand/simbolo.png (PNG transparente, recortado do
 * logo-principal-sem-fundo.png fornecido pela marca).
 *
 * A proporção nativa é 472×290 (≈1.63:1 wide). A prop `height` define
 * a altura visível; a largura é calculada pra manter a proporção. Isso
 * evita distorção quando o mesmo símbolo é usado em contextos distintos
 * (header 40px, footer 40px, /links 56px).
 */

const NATIVE_W = 472;
const NATIVE_H = 290;

type Props = {
  height?: number;
  className?: string;
  title?: string;
  priority?: boolean;
};

export function BrandSymbol({
  height = 40,
  className,
  title = "Resolvix Soluções",
  priority = false,
}: Props) {
  const width = Math.round((NATIVE_W / NATIVE_H) * height);

  return (
    <Image
      src="/brand/simbolo.png"
      alt={title}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={`${width}px`}
    />
  );
}
