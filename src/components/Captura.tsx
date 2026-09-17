/**
 * Captura de tela de um passo. Moldura de janela por cima da imagem: sem ela
 * o print da Hostinger (que já é uma página inteira) se confunde com o próprio
 * slide e o espectador não sabe onde termina o guia e começa o site.
 */
export function Captura({
  src,
  alt,
  legenda,
  className = '',
}: {
  src: string
  alt: string
  legenda?: string
  className?: string
}) {
  return (
    <figure className={`card overflow-hidden rounded-2xl ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line bg-paper-2 px-3 py-2">
        <span aria-hidden className="h-2 w-2 rounded-full bg-line" />
        <span aria-hidden className="h-2 w-2 rounded-full bg-line" />
        <span aria-hidden className="h-2 w-2 rounded-full bg-line" />
        <span className="eyebrow ml-2 truncate text-[0.5rem] text-muted">hostinger.com</span>
      </div>

      <img src={src} alt={alt} loading="lazy" className="block w-full" />

      {legenda ? (
        <figcaption className="border-t border-line px-3 py-2 text-[0.72rem] leading-snug text-muted">
          {legenda}
        </figcaption>
      ) : null}
    </figure>
  )
}
