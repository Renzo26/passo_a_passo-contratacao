import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Backdrop } from './components/Backdrop'

export type Slide = {
  id: string
  rotulo: string
  Component: () => React.JSX.Element
}

/** Entra pelo lado para onde a navegação vai; sai pelo oposto. */
const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
}

/**
 * Casca de apresentação: fundo, transição e navegação. Recebe os slides por
 * prop para que a ordem do deck viva num arquivo só (`decks.tsx`) e este
 * componente não precise saber o que está apresentando.
 */
export function Deck({ slides }: { slides: readonly Slide[] }) {
  const [[indice, direcao], setEstado] = useState<[number, number]>([0, 1])

  const irPara = useCallback(
    (alvo: number) => {
      setEstado(([atual]) => {
        const proximo = Math.max(0, Math.min(slides.length - 1, alvo))
        return [proximo, proximo >= atual ? 1 : -1]
      })
    },
    [slides.length],
  )

  const avancar = useCallback(
    () => setEstado(([i]) => [Math.min(i + 1, slides.length - 1), 1]),
    [slides.length],
  )
  const voltar = useCallback(() => setEstado(([i]) => [Math.max(i - 1, 0), -1]), [])

  // Teclado é o controle real numa apresentação: setas, espaço e PgUp/PgDn
  // (é o que o clicker de slides emite).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault()
        avancar()
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        voltar()
      } else if (e.key === 'Home') {
        irPara(0)
      } else if (e.key === 'End') {
        irPara(slides.length - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [avancar, voltar, irPara, slides.length])

  // Deslize horizontal: é como se navega uma apresentação no celular. O eixo
  // vertical fica livre para o conteúdo rolar dentro do slide.
  const toque = useRef<{ x: number; y: number } | null>(null)

  const onTouchStart = (e: React.TouchEvent) => {
    toque.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!toque.current) return
    const dx = e.changedTouches[0].clientX - toque.current.x
    const dy = e.changedTouches[0].clientY - toque.current.y
    toque.current = null
    // 60px filtra o toque trêmulo de quem só quis tocar na tela; exigir que o
    // eixo X domine impede que rolar o card para ler troque de slide sem querer.
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy)) return
    if (dx < 0) avancar()
    else voltar()
  }

  const { id, Component } = slides[indice]

  return (
    <main
      className="relative h-[100dvh] w-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Backdrop />

      <AnimatePresence mode="wait" custom={direcao} initial={false}>
        <motion.section
          key={id}
          custom={direcao}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 h-full w-full"
        >
          <Component />
        </motion.section>
      </AnimatePresence>

      <Navegacao
        slides={slides}
        indice={indice}
        irPara={irPara}
        avancar={avancar}
        voltar={voltar}
      />
    </main>
  )
}

function Navegacao({
  slides,
  indice,
  irPara,
  avancar,
  voltar,
}: {
  slides: readonly Slide[]
  indice: number
  irPara: (i: number) => void
  avancar: () => void
  voltar: () => void
}) {
  return (
    <nav
      aria-label="Navegação da apresentação"
      className="absolute inset-x-0 bottom-3 z-30 flex items-center justify-center gap-3 px-4 sm:bottom-7 sm:gap-4 sm:px-6"
    >
      <Botao onClick={voltar} disabled={indice === 0} rotulo="Slide anterior">
        ←
      </Botao>

      <div className="card flex items-center gap-2 rounded-full px-4 py-0.5">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => irPara(i)}
            aria-label={`Ir para ${s.rotulo}`}
            aria-current={i === indice}
            /* `py-3` amplia a área de toque sem mudar o traço visível: no
               celular o alvo real do dedo passa a ter altura de dedo. */
            className="group flex items-center gap-2 py-3"
          >
            <span
              className={`h-1.5 rounded-full transition-all duration-400 ${
                i === indice
                  ? 'w-8 bg-blood shadow-blood'
                  : 'w-1.5 bg-line group-hover:bg-muted'
              }`}
            />
          </button>
        ))}
        <span className="eyebrow tabular ml-2 text-[0.58rem] text-muted">
          {String(indice + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      <Botao onClick={avancar} disabled={indice === slides.length - 1} rotulo="Próximo slide">
        →
      </Botao>
    </nav>
  )
}

function Botao({
  onClick,
  disabled,
  rotulo,
  children,
}: {
  onClick: () => void
  disabled: boolean
  rotulo: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={rotulo}
      className="card grid h-10 w-10 place-items-center rounded-full text-ink transition-all duration-300 hover:border-blood hover:text-blood disabled:pointer-events-none disabled:opacity-30"
    >
      {children}
    </button>
  )
}
