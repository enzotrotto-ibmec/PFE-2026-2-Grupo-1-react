# Sprint 01: Base do site e páginas das marcas

**Período:** 08/11/2026 (dom) a 10/11/2026 (ter)
**Meta:** ter a base do projeto, os componentes compartilhados e as páginas da PKZ e da One To One no repositório.
**Commits:** 01 a 14
**Itens do backlog:** PB-01 a PB-07 ([product-backlog.md](product-backlog.md))

## Cronograma

| Dia | O que acontece | Commits |
|---|---|---|
| Dom 08/11 | Sprint planning e Fase 1: base do projeto | 01 a 07 |
| Seg 09/11 | Fase 2: componentes compartilhados | 08 a 10 |
| Ter 10/11 | Fase 3: páginas da PKZ e da One To One | 11 a 14 |

## Antes de começar (pré-requisitos do commit 01)

- [ ] Ajustar o `vite.config.js`: `base: "/"`, e remover o plugin `copiar404` e a constante `NOME_DO_REPO` (eram do GitHub Pages).
- [ ] Criar o `vercel.json` na raiz, com o *rewrite* das rotas para o `index.html`:
  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
  ```
- [ ] Todos fazem `git pull` antes do seu commit.

## Fase 1: Base do projeto (dom 08/11)

| ✔ | # | Quem | Mensagem do commit | Arquivos |
|---|---|---|---|---|
| [ ] | 01 | Enzo Trotto | Configura o projeto React com Vite e o deploy no Vercel | `package.json`, `package-lock.json`, `vite.config.js`, `index.html`, `vercel.json` |
| [ ] | 02 | João Pedro Ferreira | Adiciona .gitignore e favicon | `.gitignore`, `public/assets/icons/favicon.svg` |
| [ ] | 03 | Gabriel Góis | Cria componente de ícones e utilitário de rolagem | `src/components/Icones.jsx`, `src/utils/navegacao.js` |
| [ ] | 04 | Enzo Trotto | Adiciona LinkInterno, EstilosDaPagina e estilos globais | `src/components/LinkInterno.jsx`, `src/components/EstilosDaPagina.jsx`, `src/utils/asset.js`, `src/styles/global.css` |
| [ ] | 05 | João Pedro Ferreira | Adiciona base.css com a estrutura e a responsividade das páginas | `src/styles/base.css` |
| [ ] | 06 | Bernardo Gomes | Adiciona dados das marcas e utilitários do agendamento | `src/data/marcas.js`, `src/utils/agendamento.js`, `src/utils/dialogo.js` |
| [ ] | 07 | Enzo Trotto | Adiciona cta.css e extras.css | `src/styles/cta.css`, `src/styles/extras.css` |

> **Mudança em relação ao arquivo de ordem dos commits:** no commit 01 o `.github/workflows/deploy.yml` (GitHub Pages) sai e entra o `vercel.json`, porque o Vercel publica sozinho a cada push.

## Fase 2: Componentes compartilhados (seg 09/11)

| ✔ | # | Quem | Mensagem do commit | Arquivos |
|---|---|---|---|---|
| [ ] | 08 | Bernardo Gomes | Cria LayoutMarca com rodapé, janela de contato e atalhos | `src/components/marca/`: `LayoutMarca.jsx`, `Rodape.jsx`, `ContatoModal.jsx`, `BarraAcoesMobile.jsx`, `AtalhosFlutuantes.jsx`, `BotaoWhatsapp.jsx` |
| [ ] | 09 | Bernardo Nemirovsky | Cria cabeçalho com menu hambúrguer usando useState | `src/components/marca/Cabecalho.jsx` |
| [ ] | 10 | Alexia Schmid | Cria seções compartilhadas: Hero, Sobre, FAQ, CTA, Localização e Conheça também | `src/components/marca/`: `Hero.jsx`, `Sobre.jsx`, `Faq.jsx`, `FaixaCta.jsx`, `Localizacao.jsx`, `ConhecaTambem.jsx` |

## Fase 3: Páginas das marcas (ter 10/11)

| ✔ | # | Quem | Mensagem do commit | Arquivos |
|---|---|---|---|---|
| [ ] | 11 | Bernardo Nemirovsky | Adiciona imagens, logos e CSS da PKZ | `public/assets/img/pkz/` (12 imagens), `public/assets/img/logos/pkz-lab-empilhado-branco.svg`, `pkz-lab-horizontal-branco.svg`, `src/styles/pkz.css` |
| [ ] | 12 | Bernardo Nemirovsky | Cria página da PKZ com as seções Família e Esportes | `src/pages/PaginaPkz.jsx`, `src/components/pkz/SecaoFamilia.jsx`, `src/components/pkz/SecaoEsportes.jsx` |
| [ ] | 13 | Alexia Schmid | Adiciona imagens, logos e CSS da One To One | `public/assets/img/one-to-one/` (12 imagens), `public/assets/img/logos/one-to-one-branco.svg`, `one-to-one-petroleo.svg`, `src/styles/one-to-one.css` |
| [ ] | 14 | Alexia Schmid | Cria página da One To One com a seção de serviços | `src/pages/PaginaOneToOne.jsx`, `src/components/one-to-one/SecaoServicos.jsx` |

## Commits por pessoa nesta sprint

| Pessoa | Commits |
|---|---|
| Enzo Trotto | 01, 04, 07 |
| Bernardo Nemirovsky | 09, 11, 12 |
| Alexia Schmid | 10, 13, 14 |
| João Pedro Ferreira | 02, 05 |
| Bernardo Gomes | 06, 08 |
| Gabriel Góis | 03 |
| Guilherme Macedo | n/a (os commits dele começam na [Sprint 02](sprint-02.md)) |

## Definition of Done

- [ ] Commit feito pela própria conta, sem coautor, com a mensagem da tabela.
- [ ] Só os arquivos da vez da pessoa entraram no commit.
- [ ] `git pull` feito antes do commit.
- [ ] Ao fim da sprint, os 14 commits estão no repositório. O site ainda não abre completo, porque o `App.jsx` só entra no commit 22.

## Riscos

- O histórico atual do repositório é de 1 commit grande (6.871 linhas), então a divisão por pessoa só aparece se todos seguirem a ordem combinada.
- Se o commit 01 atrasar, bloqueia todos os outros.

## Sprint Review (preencher em 10/11)

- [ ] Os 14 commits estão na ordem e cada um com o autor certo.
- [ ] Nenhum arquivo ficou de fora (conferir com `git ls-files`).
- Observações:

## Retrospectiva (preencher em 10/11)

**O que foi bem**
- Reaproveitamento já visível: o mesmo `LayoutMarca`, `Hero`, `Faq` e `Rodape` servem às duas marcas, guiados por `marcas.js`.
- Solução para o CSS das duas marcas (mesmos nomes de classe, valores diferentes): cada página importa o seu CSS com `?inline` e o `EstilosDaPagina` aplica só enquanto ela está na tela.
- Divisão equilibrada: 2 a 3 commits por pessoa na sprint.

**O que pode melhorar**
- Mensagens de commit: padronizar em português, no imperativo, sem colar o comando inteiro (o primeiro commit do repositório tem `git commit -m "..."` dentro da mensagem).
- (preencher com o que o time observar)

**Ações para a próxima sprint**
- [ ] Conferir com `git ls-files` se os 14 commits trouxeram todos os arquivos previstos, e corrigir o que faltar antes de 11/11 (Enzo Trotto).
- [ ] Fazer o fluxo do portal em ordem sem espera: Gabriel Góis avisa no grupo quando o commit 16 sair, Guilherme Macedo faz o 17 (`portal.css`) e avisa, e só então Gabriel faz o 18 (Gabriel Góis e Guilherme Macedo).
- [ ] Seguir o padrão de mensagem de commit nos commits 15 a 22: português, no imperativo, exatamente como na tabela da [Sprint 02](sprint-02.md) (todos).
- [ ] Dar o `git pull` antes de cada commit, já que a Sprint 02 tem 5 pessoas commitando em 2 dias (todos).
- [ ] Alexia Schmid e Bernardo Nemirovsky não têm commits na Sprint 02: reservar as duas para ajudar no teste do site inteiro em 13/11.
- [ ] Anotar na lista de teste de 13/11 qualquer problema que apareça nas páginas da PKZ e da One To One, para corrigir a tempo da publicação (Bernardo Nemirovsky e Alexia Schmid).
