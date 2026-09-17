/**
 * Variantes compartilhadas pelos slides. Ficam num arquivo só para que a
 * entrada do conteúdo tenha o mesmo ritmo em toda a apresentação — quando cada
 * slide inventa a própria curva, a troca parece feita por pessoas diferentes.
 */
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}

export const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
