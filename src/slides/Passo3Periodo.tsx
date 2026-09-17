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
            Escolha o <span className="text-blood">período</span> do pagamento
          </motion.h2>

          <motion.p
            variants={item}
            className="max-w-[46ch] text-[0.85rem] leading-relaxed text-muted sm:text-[0.9rem]"
          >
            Mensal, anual ou de 2 anos — quanto mais longo o ciclo, menor a mensalidade. O preço de
            vitrine é sempre o do plano de 2 anos.
          </motion.p>
        </div>

        <motion.div variants={item} className="h-px w-full bg-line" />

        <div className="grid gap-4 lg:grid-cols-[1fr_1.05fr] lg:gap-6">
          <motion.div variants={item} className="flex min-w-0 flex-col gap-3">
            {/* O aviso do documento original: o backup automático vem marcado
                como "recomendado" e é o que mais infla o carrinho. */}
            <article className="relative overflow-hidden rounded-2xl bg-panel p-5 text-panel-fg shadow-blood sm:p-6">
              <span className="eyebrow rounded-full bg-blood px-2.5 py-1 text-[0.5rem] text-white">
                Atenção
              </span>

              <h3 className="mt-3 text-[1.2rem] leading-tight text-panel-fg sm:text-[1.4rem]">
                Não precisa de backup automático
              </h3>

              <p className="mt-2 text-[0.82rem] leading-relaxed text-panel-fg/75 sm:text-[0.86rem]">
                A Hostinger oferece os backups diários por R$ 32,99/mês, já marcados como
                recomendado. Desmarque: é quase o preço de um segundo servidor, e o snapshot manual
                do painel resolve para a maioria dos casos.
              </p>
            </article>

            <div className="grid gap-2.5 sm:grid-cols-3">
              {[
                { t: 'Mensal', d: 'Mais caro por mês; bom só para testar.' },
                { t: 'Anual', d: 'Meio-termo entre preço e compromisso.' },
                { t: '2 anos', d: 'Menor mensalidade e domínio grátis.' },
              ].map((c) => (
                <div key={c.t} className="card rounded-2xl p-4">
                  <h4 className="font-display text-[0.95rem] font-black text-ink">{c.t}</h4>
                  <p className="mt-1 text-[0.75rem] leading-snug text-muted">{c.d}</p>
                </div>
              ))}
            </div>

            <div className="card rounded-2xl p-4 sm:p-5">
              <h4 className="text-[0.98rem] leading-tight text-ink">Localização do servidor</h4>
              <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted sm:text-[0.82rem]">
                Ainda nesta tela você escolhe onde a máquina fica. Prefira a região mais próxima do
                seu público — a própria Hostinger mostra a latência estimada de cada opção.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="min-w-0">
            <Captura
              src="/passos/carrinho-periodo.png"
              alt="Carrinho da Hostinger com o plano KVM 2, seletor de período de 24 meses e a opção de backups automáticos"
              legenda="Período no topo, backups automáticos logo abaixo e o resumo do pedido à direita."
            />
          </motion.div>
        </div>
      </motion.div>
    </SlideChrome>
  )
}
