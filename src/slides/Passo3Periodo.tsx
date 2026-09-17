import { motion } from 'motion/react'
import { SlideChrome } from '../components/SlideChrome'
import { Captura } from '../components/Captura'
import { item, stagger } from '../anim'

export function Passo3Periodo() {
  return (
    <SlideChrome eyebrowLeft="Passo 03" eyebrowRight="Período e pagamento">
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
            Escolha por <span className="text-blood">quanto tempo</span> vai pagar
          </motion.h2>

          <motion.p
            variants={item}
            className="max-w-[46ch] text-[0.85rem] leading-relaxed text-muted sm:text-[0.9rem]"
          >
            Mensal, anual ou de 2 anos. Quanto maior o tempo que você contrata de uma vez, menor
            fica a parcela por mês.
          </motion.p>
        </div>

        <motion.div variants={item} className="h-px w-full bg-line" />

        <div className="grid gap-4 lg:grid-cols-[1fr_1.05fr] lg:gap-6">
          <motion.div variants={item} className="flex min-w-0 flex-col gap-3">
            {/* O aviso do documento original: a cópia de segurança vem marcada
                como "recomendado" e é o que mais encarece o carrinho. */}
            <article className="relative overflow-hidden rounded-2xl bg-panel p-5 text-panel-fg shadow-blood sm:p-6">
              <span className="eyebrow rounded-full bg-blood px-2.5 py-1 text-[0.5rem] text-white">
                Atenção
              </span>

              <h3 className="mt-3 text-[1.2rem] leading-tight text-panel-fg sm:text-[1.4rem]">
                Desmarque a cópia de segurança
              </h3>

              <p className="mt-2 text-[0.82rem] leading-relaxed text-panel-fg/75 sm:text-[0.86rem]">
                A Hostinger já deixa marcada uma cópia de segurança diária de R$ 32,99 por mês —
                quase o preço de um segundo servidor. Desmarque: dá para fazer essa cópia à mão,
                pelo painel, quando você precisar.
              </p>
            </article>

            <div className="grid gap-2.5 sm:grid-cols-3">
              {[
                { t: 'Mensal', d: 'Sai mais caro por mês. Bom só para testar.' },
                { t: 'Anual', d: 'Meio-termo: paga menos sem se prender tanto.' },
                { t: '2 anos', d: 'A parcela mais barata, e o domínio vem grátis.' },
              ].map((c) => (
                <div key={c.t} className="card rounded-2xl p-4">
                  <h4 className="font-display text-[0.95rem] font-black text-ink">{c.t}</h4>
                  <p className="mt-1 text-[0.75rem] leading-snug text-muted">{c.d}</p>
                </div>
              ))}
            </div>

            <div className="card rounded-2xl p-4 sm:p-5">
              <h4 className="text-[0.98rem] leading-tight text-ink">Onde o servidor fica</h4>
              <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted sm:text-[0.82rem]">
                Nessa mesma tela você escolhe o país do servidor. Quanto mais perto de quem vai
                acessar o site, mais rápido ele abre. A própria Hostinger indica qual é o melhor.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="min-w-0">
            <Captura
              src="/passos/carrinho-periodo.png"
              alt="Carrinho da Hostinger com o plano KVM 2, a escolha de 24 meses e a opção de cópia de segurança diária"
              legenda="O tempo fica no topo, a cópia de segurança logo abaixo e o total à direita."
            />
          </motion.div>
        </div>
      </motion.div>
    </SlideChrome>
  )
}
