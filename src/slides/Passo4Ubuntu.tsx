import { motion } from 'motion/react'
import { SlideChrome } from '../components/SlideChrome'
import { Captura } from '../components/Captura'
import { item, stagger } from '../anim'

export function Passo4Ubuntu() {
  return (
    <SlideChrome eyebrowLeft="Passo 04" eyebrowRight="O programa do servidor">
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
            Na lista de sistemas, escolha o <span className="text-blood">Ubuntu</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="max-w-[46ch] text-[0.85rem] leading-relaxed text-muted sm:text-[0.9rem]"
          >
            É o programa que faz o servidor funcionar, assim como o Windows faz no seu
            computador. O Ubuntu é o mais usado para esse tipo de máquina.
          </motion.p>
        </div>

        <motion.div variants={item} className="h-px w-full bg-line" />

        <div className="grid gap-4 lg:grid-cols-[1fr_1fr] lg:gap-6">
          <motion.div variants={item} className="flex min-w-0 flex-col gap-3">
            <Captura
              src="/passos/ubuntu.png"
              alt="Opção Ubuntu na lista de sistemas operacionais da Hostinger"
              legenda="Procure o Ubuntu na lista e clique nele."
            />

            <div className="card rounded-2xl p-4 sm:p-5">
              <h3 className="text-[0.98rem] leading-tight text-ink">Anote a senha e o endereço</h3>
              <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted sm:text-[0.82rem]">
                No fim da contratação a Hostinger pede que você crie uma senha e mostra o endereço
                do servidor (uma sequência de números). Guarde os dois num lugar seguro: é com eles
                que se entra na máquina depois.
              </p>
            </div>
          </motion.div>

          <motion.ul variants={item} className="flex min-w-0 flex-col gap-2.5">
            {[
              {
                t: 'É o mais usado',
                d: 'Quase todo tutorial e todo programa que você vai instalar depois já vem pronto para o Ubuntu. Escolher outro dá trabalho à toa.',
              },
              {
                t: 'Se aparecer “LTS”, prefira',
                d: 'É a versão mais estável: recebe correções de segurança por muito mais tempo que as outras.',
              },
              {
                t: 'Escolha o Ubuntu sozinho',
                d: 'A Hostinger oferece opções com outros programas já instalados. Deixe de lado: é mais simples instalar depois só o que você for usar.',
              },
              {
                t: 'Errou? Dá para recomeçar',
                d: 'Se escolher errado, o painel da Hostinger deixa instalar tudo de novo do zero. Você não perde o plano que pagou.',
              },
            ].map((c) => (
              <li
                key={c.t}
                className="card group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:border-blood sm:p-5"
              >
                <h3 className="text-[0.98rem] leading-tight text-ink">{c.t}</h3>
                <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted sm:text-[0.82rem]">
                  {c.d}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-blood transition-transform duration-500 group-hover:scale-x-100" />
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </SlideChrome>
  )
}
