import { motion } from 'motion/react'
import { SlideChrome } from '../components/SlideChrome'
import { Captura } from '../components/Captura'
import { item, stagger } from '../anim'

export function Passo4Ubuntu() {
  return (
    <SlideChrome eyebrowLeft="Passo 04" eyebrowRight="Sistema operacional">
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
            Em sistema operacional, escolha o <span className="text-blood">Ubuntu</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="max-w-[46ch] text-[0.85rem] leading-relaxed text-muted sm:text-[0.9rem]"
          >
            A Hostinger oferece imagens com painel já instalado, mas o Ubuntu limpo é o que dá
            controle total da máquina.
          </motion.p>
        </div>

        <motion.div variants={item} className="h-px w-full bg-line" />

        <div className="grid gap-4 lg:grid-cols-[1fr_1fr] lg:gap-6">
          <motion.div variants={item} className="flex min-w-0 flex-col gap-3">
            <Captura
              src="/passos/ubuntu.png"
              alt="Opção Ubuntu na lista de sistemas operacionais da Hostinger"
              legenda="Na lista de sistemas operacionais, selecione o Ubuntu."
            />

            <div className="card rounded-2xl p-4 sm:p-5">
              <h3 className="text-[0.98rem] leading-tight text-ink">Senha e acesso</h3>
              <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted sm:text-[0.82rem]">
                Ao final a Hostinger pede uma senha de root e mostra o IP da máquina. Guarde os dois
                num gerenciador de senhas — é com eles que você entra por SSH e configura o painel.
              </p>
            </div>
          </motion.div>

          <motion.ul variants={item} className="flex min-w-0 flex-col gap-2.5">
            {[
              {
                t: 'É o padrão da documentação',
                d: 'Quase todo tutorial de Docker, Nginx e painel de deploy assume Ubuntu. Sair dele significa traduzir cada comando.',
              },
              {
                t: 'Versão LTS',
                d: 'Escolha uma versão LTS quando houver opção: são as que recebem atualização de segurança por anos.',
              },
              {
                t: 'Sem painel pré-instalado',
                d: 'Instalar o painel depois, na máquina limpa, evita conflito de portas com o que já vem configurado na imagem.',
              },
              {
                t: 'Dá para reinstalar',
                d: 'Se errar, o painel da Hostinger reinstala o sistema do zero — você não perde o plano contratado.',
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
