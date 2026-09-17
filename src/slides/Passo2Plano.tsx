import { motion } from 'motion/react'
import { SlideChrome } from '../components/SlideChrome'
import { Captura } from '../components/Captura'
import { item, stagger } from '../anim'

type Plano = {
  nome: string
  preco: string
  /** Especificações traduzidas: nada de vCPU, NVMe ou largura de banda. */
  potencia: string
  memoria: string
  espaco: string
  /** O que realmente decide a escolha para quem não é da área. */
  paraQuem: string
  recomendado?: boolean
}

/** Os quatro planos como aparecem na página, para comparar sem sair do slide. */
const PLANOS: Plano[] = [
  {
    nome: 'KVM 1',
    preco: 'R$ 29,99',
    potencia: '1 processador',
    memoria: '4 GB de memória',
    espaco: '50 GB de espaço',
    paraQuem: 'Para um site simples, sozinho',
  },
  {
    nome: 'KVM 2',
    preco: 'R$ 43,99',
    potencia: '2 processadores',
    memoria: '8 GB de memória',
    espaco: '100 GB de espaço',
    paraQuem: 'Para vários sites e sistemas',
    recomendado: true,
  },
  {
    nome: 'KVM 4',
    preco: 'R$ 59,99',
    potencia: '4 processadores',
    memoria: '16 GB de memória',
    espaco: '200 GB de espaço',
    paraQuem: 'Para quem já tem muito acesso',
  },
  {
    nome: 'KVM 8',
    preco: 'R$ 119,99',
    potencia: '8 processadores',
    memoria: '32 GB de memória',
    espaco: '400 GB de espaço',
    paraQuem: 'Para empresa grande',
  },
]

export function Passo2Plano() {
  return (
    <SlideChrome eyebrowLeft="Passo 02" eyebrowRight="Escolher o plano">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-5 sm:gap-6"
      >
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <motion.h2
            variants={item}
            className="text-[clamp(1.5rem,7vw,2.3rem)] text-ink lg:text-[clamp(1.8rem,3.4vw,2.9rem)]"
          >
            Recomendo o <span className="text-blood">KVM 2</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="max-w-[46ch] text-[0.85rem] leading-relaxed text-muted sm:text-[0.9rem]"
          >
            É o que entrega mais por menos: aguenta vários sites e sistemas ao mesmo tempo. O
            KVM 1 fica apertado e os maiores só valem a pena se o site já receber muita visita.
          </motion.p>
        </div>

        <motion.div variants={item} className="h-px w-full bg-line" />

        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
          <motion.div variants={item} className="grid min-w-0 grid-cols-2 gap-2.5 sm:gap-3">
            {PLANOS.map((p) => (
              <PlanoCard key={p.nome} plano={p} />
            ))}
          </motion.div>

          <motion.div variants={item} className="flex min-w-0 flex-col gap-3">
            <Captura
              src="/passos/plano-kvm.png"
              alt="Tabela de planos VPS da Hostinger com KVM 1, KVM 2, KVM 4 e KVM 8"
              legenda="Clique no botão “Escolher plano” do KVM 2 — o que está marcado como mais popular."
            />
            <p className="text-[0.78rem] leading-relaxed text-muted">
              Esses preços são de promoção e valem só na primeira contratação. O valor que você
              vai pagar quando renovar aparece em letra menor embaixo do botão — no KVM 2,
              R$ 77,99 por mês.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </SlideChrome>
  )
}

function PlanoCard({ plano }: { plano: Plano }) {
  const destaque = plano.recomendado

  return (
    <article
      className={`group relative flex flex-col gap-2 overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 sm:p-5 ${
        destaque
          ? 'bg-panel text-panel-fg shadow-blood'
          : 'card text-ink hover:border-blood'
      }`}
    >
      {destaque ? (
        <span className="eyebrow self-start rounded-full bg-blood px-2.5 py-1 text-[0.5rem] text-white">
          Recomendado
        </span>
      ) : null}

      <h3
        className={`font-display text-[1.1rem] font-black sm:text-[1.25rem] ${
          destaque ? 'text-panel-fg' : 'text-ink'
        }`}
      >
        {plano.nome}
      </h3>

      <p
        className={`font-display text-[1.35rem] leading-none font-black tabular sm:text-[1.6rem] ${
          destaque ? 'text-blood' : 'text-ink'
        }`}
      >
        {plano.preco}
        <span
          className={`text-[0.7rem] font-semibold ${destaque ? 'text-panel-fg/60' : 'text-muted'}`}
        >
          /mês
        </span>
      </p>

      <p
        className={`text-[0.78rem] leading-snug font-semibold ${
          destaque ? 'text-panel-fg' : 'text-ink'
        }`}
      >
        {plano.paraQuem}
      </p>

      <ul
        className={`mt-0.5 flex flex-col gap-1 text-[0.74rem] leading-snug tabular sm:text-[0.78rem] ${
          destaque ? 'text-panel-fg/70' : 'text-muted'
        }`}
      >
        <li>{plano.potencia}</li>
        <li>{plano.memoria}</li>
        <li>{plano.espaco}</li>
      </ul>

      {!destaque ? (
        <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-blood transition-transform duration-500 group-hover:scale-x-100" />
      ) : null}
    </article>
  )
}
