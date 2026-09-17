import { motion } from 'motion/react'
import { SlideChrome } from '../components/SlideChrome'
import { item, stagger } from '../anim'

/** Recapitulação: o slide que fica na tela enquanto a pessoa executa. */
const PASSOS = [
  { n: '01', t: 'Entrar no site', d: 'hostinger.com/br/servidor-vps' },
  { n: '02', t: 'Escolher o plano', d: 'KVM 2 — 2 vCPU, 8 GB, 100 GB NVMe' },
  { n: '03', t: 'Definir o período', d: 'Mensal, anual ou 2 anos · sem backup automático' },
  { n: '04', t: 'Sistema operacional', d: 'Ubuntu' },
]

export function Resumo() {
  return (
    <SlideChrome eyebrowLeft="Resumo" eyebrowRight="Hostinger · VPS">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-5 sm:gap-7"
      >
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <motion.h2
            variants={item}
            className="text-[clamp(1.5rem,7vw,2.3rem)] text-ink lg:text-[clamp(1.8rem,3.4vw,2.9rem)]"
          >
            Os quatro passos <span className="text-blood">em uma tela</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="max-w-[46ch] text-[0.85rem] leading-relaxed text-muted sm:text-[0.9rem]"
          >
            Deixe este slide aberto enquanto executa. Ao final você terá IP e senha de root em mãos.
          </motion.p>
        </div>

        <motion.div variants={item} className="h-px w-full bg-line" />

        <div className="flex flex-col gap-2.5">
          {PASSOS.map((p) => (
            <motion.div
              key={p.n}
              variants={item}
              className="card group relative flex items-center gap-4 overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:border-blood sm:gap-6 sm:p-5"
            >
              <span className="font-display text-2xl leading-none font-black text-blood tabular sm:text-3xl">
                {p.n}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-[1rem] leading-tight text-ink sm:text-[1.15rem]">{p.t}</h3>
                <p className="mt-0.5 text-[0.78rem] leading-snug break-words text-muted sm:text-[0.82rem]">
                  {p.d}
                </p>
              </div>

              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-blood transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={item}
          className="rounded-2xl bg-panel p-5 text-panel-fg shadow-blood sm:p-6"
        >
          <span className="eyebrow text-blood">Depois da contratação</span>
          <p className="mt-2 max-w-[62ch] text-[0.85rem] leading-relaxed text-panel-fg/80 sm:text-[0.9rem]">
            Com o IP e a senha de root em mãos, o próximo passo é acessar a máquina por SSH e
            instalar o que vai rodar nela. Esse trecho não está neste guia — o documento de origem
            termina na escolha do sistema operacional.
          </p>
        </motion.div>
      </motion.div>
    </SlideChrome>
  )
}
