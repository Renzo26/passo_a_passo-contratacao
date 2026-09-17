import type { ReactNode } from 'react'

type Props = {
  eyebrowLeft: string
  eyebrowRight: string
  children: ReactNode
}

/**
 * Moldura comum a todo slide: cabeçalho com os dois labels, filete e rodapé
 * assinado. Centraliza o padding para que nenhum slide invente a própria
 * margem — é o que mantém os títulos alinhados na troca.
 *
 * O respiro inferior maior existe porque a navegação é `fixed` no rodapé:
 * sem ele, a barra cobre a última linha de conteúdo no celular.
 */
export function SlideChrome({ eyebrowLeft, eyebrowRight, children }: Props) {
  return (
    <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col px-4 pt-5 pb-20 sm:px-8 sm:pt-7 sm:pb-24 lg:px-16 lg:pt-10 lg:pb-24">
      <header className="flex shrink-0 items-baseline justify-between gap-3">
        <span className="eyebrow shrink-0 text-[0.55rem] text-blood sm:text-[0.7rem]">
          {eyebrowLeft}
        </span>
        <span className="eyebrow text-right text-[0.55rem] text-muted sm:text-[0.7rem]">
          {eyebrowRight}
        </span>
      </header>

      <div className="mt-3 h-px w-full shrink-0 bg-line sm:mt-4" />

      {/* Centralização por `m-auto`, não por `justify-center`: com
          `justify-content` o conteúdo mais alto que a área estoura para fora
          nas DUAS pontas e o topo fica inalcançável pela rolagem. Margem
          automática cede quando falta espaço, então sobra rolagem em vez de
          corte. */}
      <div className="jm-scroll flex min-h-0 flex-1 flex-col overflow-y-auto py-4 sm:py-6">
        <div className="m-auto w-full">{children}</div>
      </div>

      <footer className="hidden shrink-0 font-display text-[0.62rem] font-bold tracking-[0.22em] text-muted/70 uppercase sm:block">
        Passo a passo · VPS Hostinger
      </footer>
    </div>
  )
}
