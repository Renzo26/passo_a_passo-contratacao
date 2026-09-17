import { motion } from 'motion/react'
import { SlideChrome } from '../components/SlideChrome'
import { item, stagger } from '../anim'

/**
 * O link do documento original carrega toda a campanha de anúncio (utm_*,
 * gclid...). Ele está preservado no `href` porque é o link que foi passado,
 * mas o que aparece na tela é o endereço limpo — ninguém lê 400 caracteres
 * de rastreamento numa apresentação.
 */
const LINK =
  'https://www.hostinger.com/br/servidor-vps?utm_source=google&utm_medium=cpc&utm_id=19474423350&utm_campaign=Brand-RET|NT:Se|LO:BR&utm_term=hostinger+vps&utm_content=678374506057&gad_source=1&gad_campaignid=19474423350&gbraid=0AAAAADMy-haYIrFy5YY_rNAxjKREDhRD3&gclid=CjwKCAjwn67VBhBnEiwAXUIN1Xq5VNLWDveQNqKQjJoYHe4qudenKDHu-JzTc2JJgk-sqMSJ-3Q_VhoCB7wQAvD_BwE'

export function Passo1Site() {
  return (
    <SlideChrome eyebrowLeft="Passo 01" eyebrowRight="Entrar no site">
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
            Abra a página de <span className="text-blood">VPS da Hostinger</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="max-w-[46ch] text-[0.85rem] leading-relaxed text-muted sm:text-[0.9rem]"
          >
            É a página de hospedagem VPS — não a de hospedagem compartilhada. É nela que aparecem
            os planos KVM.
          </motion.p>
        </div>

        <motion.div variants={item} className="h-px w-full bg-line" />

        <motion.a
          variants={item}
          href={LINK}
          target="_blank"
          rel="noreferrer"
          className="card group relative flex flex-col gap-3 overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blood sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex min-w-0 flex-col gap-1">
            <span className="eyebrow text-muted">Endereço</span>
            <span className="font-display text-[1.05rem] font-black break-all text-ink sm:text-[1.4rem]">
              hostinger.com<span className="text-muted">/br/servidor-vps</span>
            </span>
          </div>

          <span className="eyebrow shrink-0 rounded-full bg-blood px-4 py-2 text-[0.55rem] text-white shadow-blood transition-transform duration-300 group-hover:translate-x-1">
            Abrir →
          </span>

          <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-blood transition-transform duration-500 group-hover:scale-x-100" />
        </motion.a>

        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {[
            {
              t: 'Por que VPS',
              d: 'Servidor só seu, com root. É o que permite subir Docker, painéis e vários sistemas na mesma máquina.',
            },
            {
              t: 'Crie a conta',
              d: 'Dá para entrar com e-mail ou com a conta Google antes de fechar o pedido.',
            },
            {
              t: 'Confira a moeda',
              d: 'A página deve estar em português e em reais (R$). Os preços do guia são os da loja BR.',
            },
          ].map((c) => (
            <motion.div key={c.t} variants={item} className="card rounded-2xl p-4 sm:p-5">
              <h3 className="text-[0.98rem] leading-tight text-ink">{c.t}</h3>
              <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted sm:text-[0.82rem]">
                {c.d}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideChrome>
  )
}
