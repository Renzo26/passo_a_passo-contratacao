import type { Slide } from './Deck'
import { Capa } from './slides/Capa'
import { Passo1Site } from './slides/Passo1Site'
import { Passo2Plano } from './slides/Passo2Plano'
import { Passo3Periodo } from './slides/Passo3Periodo'
import { Passo4Ubuntu } from './slides/Passo4Ubuntu'
import { Resumo } from './slides/Resumo'

/**
 * A ordem da apresentação vive só aqui. Novo slide = novo arquivo em
 * `slides/` mais uma linha nesta lista.
 */
export const DECK: readonly Slide[] = [
  { id: 'capa', rotulo: 'Capa', Component: Capa },
  { id: 'passo-1', rotulo: 'Passo 1 · Site', Component: Passo1Site },
  { id: 'passo-2', rotulo: 'Passo 2 · Plano', Component: Passo2Plano },
  { id: 'passo-3', rotulo: 'Passo 3 · Período', Component: Passo3Periodo },
  { id: 'passo-4', rotulo: 'Passo 4 · Ubuntu', Component: Passo4Ubuntu },
  { id: 'resumo', rotulo: 'Resumo', Component: Resumo },
]
