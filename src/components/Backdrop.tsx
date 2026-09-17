/**
 * Fundo fixo do deck: papel branco, grid sutil e um respiro vermelho no canto.
 * Fica FORA do AnimatePresence dos slides de propósito — se entrasse junto, a
 * atmosfera piscaria a cada troca e o efeito viraria "corte de cena".
 */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-paper" />

      {/* O grid do sistema, atenuado nas bordas para não competir com o texto */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(80%_70%_at_50%_45%,#000_0%,transparent_85%)]" />

      {/* Vermelho da marca, muito diluído: dá temperatura sem virar cor de fundo */}
      <div className="absolute -top-[25%] -right-[15%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-blood)_11%,transparent)_0%,transparent_66%)]" />
      <div className="absolute -bottom-[30%] -left-[20%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-ink)_6%,transparent)_0%,transparent_68%)]" />
    </div>
  )
}
