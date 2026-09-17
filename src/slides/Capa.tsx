import { motion } from 'motion/react'
import { SlideChrome } from '../components/SlideChrome'
import { item, stagger } from '../anim'

/** Os quatro passos, anunciados já na capa. */
const PASSOS = [
  { n: '01', titulo: 'Abrir o site', resumo: 'A página certa da Hostinger' },
  { n: '02', titulo: 'Escolher o plano', resumo: 'O KVM 2 é o recomendado' },
  { n: '03', titulo: 'Escolher o tempo', resumo: 'Mensal, anual ou 2 anos' },
  { n: '04', titulo: 'Escolher o programa', resumo: 'Ubuntu' },
]

export function Capa() {
  return (
    <SlideChrome eyebrowLeft="Guia de contratação" eyebrowRight="Hostinger · VPS">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-7 sm:gap-9"
      >
        <div className="flex flex-col gap-4 sm:gap-5">
          <motion.p variants={item} className="eyebrow text-blood">
            Passo a passo
          </motion.p>

          <motion.h1
            variants={item}
            className="text-[clamp(2.2rem,11vw,3.4rem)] text-ink lg:text-[clamp(2.8rem,6vw,5rem)]"
          >
            Contratação de
            <span className="mt-1 block text-blood">VPS na Hostinger</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-[52ch] text-[0.92rem] leading-relaxed text-ink-soft sm:text-base lg:text-lg"
          >
            Uma VPS é um computador que fica ligado o tempo todo na internet, só seu, e é onde
            seus sites e sistemas ficam no ar. Em quatro passos você contrata o seu — sem pagar
            por nada que não vai usar.
          </motion.p>
        </div>

        <motion.div variants={item} className="h-px w-full bg-line" />

        <div className="flex flex-col gap-3 sm:gap-4">
          <motion.p variants={item} className="eyebrow text-muted">
            O caminho
          </motion.p>

          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4 lg:gap-3.5">
            {PASSOS.map((p) => (
              <motion.article
                key={p.n}
                variants={item}
                className="card group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blood sm:p-5"
              >
                <span className="font-display text-2xl leading-none font-black text-blood tabular sm:text-3xl">
                  {p.n}
                </span>

                <h2 className="mt-2.5 text-[1rem] leading-tight text-ink sm:text-[1.1rem]">
                  {p.titulo}
                </h2>

                <p className="mt-1 text-[0.78rem] leading-snug text-muted sm:text-[0.82rem]">
                  {p.resumo}
                </p>

                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-blood transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </SlideChrome>
  )
}
