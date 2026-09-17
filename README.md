# Passo a passo — Contratação de VPS na Hostinger

Apresentação em React que transforma o documento `Passo-Passo contratação VPS.pages`
num deck navegável: quatro passos, com as capturas de tela originais, do primeiro
acesso ao site até a escolha do sistema operacional.

A identidade visual (branco, preto e vermelho, tipografia Archivo/Inter) é a mesma
da apresentação [apresenta_wnbf](https://github.com/Renzo26/apresenta_wnbf) — o
`index.css`, o `Deck` e o `SlideChrome` vieram de lá para que os dois decks
continuem parecendo o mesmo produto.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Motion (transições entre slides)
- Nginx em container para servir o build estático

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

Outros comandos:

```bash
npm run build    # typecheck + build de produção em dist/
npm run preview  # serve o dist/ localmente
npm run typecheck
```

## Navegação do deck

| Ação | Como |
| --- | --- |
| Avançar | `→`, `↓`, `PageDown`, espaço, ou deslizar para a esquerda |
| Voltar | `←`, `↑`, `PageUp`, ou deslizar para a direita |
| Primeiro / último slide | `Home` / `End` |
| Ir direto a um slide | clicar nos traços da barra inferior |

## Estrutura

```
src/
  Deck.tsx              casca do deck: transição, teclado e gesto de toque
  decks.tsx             a ordem dos slides — o único lugar que define o roteiro
  anim.ts               variantes de entrada compartilhadas
  index.css             design system (cores, tipografia, utilitários da marca)
  components/
    Backdrop.tsx        fundo fixo: papel, grid e o respiro vermelho
    SlideChrome.tsx     moldura comum: cabeçalho, filete e rodapé
    Captura.tsx         moldura de janela para as capturas da Hostinger
  slides/               um arquivo por slide
public/passos/          as capturas de tela extraídas do documento original
```

Para adicionar um slide: crie o arquivo em `src/slides/` e acrescente uma linha
em `src/decks.tsx`. Nenhum outro arquivo precisa saber que ele existe.

## Deploy no Easypanel (Docker Compose)

O `Dockerfile` faz build em dois estágios — Node compila o Vite, Nginx serve o
`dist/`. O `docker-compose.yml` publica o serviço na rede externa `easypanel`,
que é quem faz o roteamento e o TLS; por isso o serviço usa `expose` e não
`ports`.

No Easypanel:

1. Crie um serviço do tipo **Compose** no projeto desejado.
2. Aponte o source para este repositório (`main`).
3. Confirme que a rede externa do painel se chama `easypanel` — se o seu
   ambiente usar outro nome, ajuste-o no `docker-compose.yml`.
4. Faça o deploy e adicione um domínio apontando para o serviço `web`, na
   porta `80`.

Para testar a imagem antes de subir:

```bash
docker compose up --build
```

## Sobre o conteúdo

Os quatro passos e as três capturas de tela vêm do documento original. O slide de
resumo deixa explícito que o guia termina na escolha do sistema operacional: a
configuração da máquina por SSH não fazia parte do documento de origem.
