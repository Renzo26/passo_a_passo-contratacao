import { motion } from 'motion/react'
import { SlideChrome } from '../components/SlideChrome'
import { Captura } from '../components/Captura'
import { item, stagger } from '../anim'

type Plano = {
  nome: string
  preco: string
  vcpu: string
  ram: string
  disco: string
  banda: string
  recomendado?: boolean
}

/** Os quatro planos como aparecem na página, para comparar sem sair do slide. */
const PLANOS: Plano[] = [
  { nome: 'KVM 1', preco: 'R$ 29,99', vcpu: '1 vCPU', ram: '4 GB', disco: '50 GB', banda: '4 TB' },
  {
    nome: 'KVM 2',
    preco: 'R$ 43,99',
    vcpu: '2 vCPU',
    ram: '8 GB',
    disco: '100 GB',
    banda: '8 TB',
    recomendado: true,
  },
  { nome: 'KVM 4', preco: 'R$ 59,99', vcpu: '4 vCPU', ram: '16 GB', disco: '200 GB', banda: '16 TB' },
  {
    nome: 'KVM 8',
    preco: 'R$ 119,99',
    vcpu: '8 vCPU',
    ram: '32 GB',
    disco: '400 GB',
    banda: '32 TB',
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
            É o custo-benefício da linha: 2 vCPU e 8 GB de RAM aguentam vários sistemas em Docker,
            enquanto o KVM 1 aperta e o KVM 4 só faz sentido com carga real.
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
              legenda="Clique em “Escolher plano” no card do KVM 2 — o marcado como mais popular."
            />
            <p className="text-[0.78rem] leading-relaxed text-muted">
              Os preços mostrados são promocionais e valem para o primeiro ciclo. O valor de
              renovação aparece em letra menor logo abaixo do botão — no KVM 2, R$ 77,99/mês.
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

      <ul
        className={`mt-1 flex flex-col gap-1 text-[0.74rem] leading-snug tabular sm:text-[0.78rem] ${
          destaque ? 'text-panel-fg/80' : 'text-muted'
        }`}
      >
        <li>{plano.vcpu}</li>
        <li>{plano.ram} de RAM</li>
        <li>{plano.disco} NVMe</li>
        <li>{plano.banda} de banda</li>
      </ul>

      {!destaque ? (
        <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-blood transition-transform duration-500 group-hover:scale-x-100" />
      ) : null}
    </article>
  )
}
