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

- [x] Ajustar o `vite.config.js` para o Vercel. Feito só em 16/11, de outro jeito: `base: process.env.VERCEL ? "/" : "/NOME_DO_REPO/"`, mantendo o `NOME_DO_REPO` e o plugin de páginas por rota (ver [Sprint 03](sprint-03.md)).
  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
  ```
- [x] Todos fazem `git pull` antes do seu commit. Não dá para confirmar pelo Git.

## Fase 1: Base do projeto (dom 08/11)

| ✔ | # | Quem | Mensagem do commit | Arquivos |
|---|---|---|---|---|
| [x] | 01 | Enzo Trotto | Configura o projeto React com Vite e o deploy no Vercel | `package.json`, `package-lock.json`, `vite.config.js`, `index.html`, `vercel.json` |
| [x] | 02 | João Pedro Ferreira | Adiciona .gitignore e favicon | `.gitignore`, `public/assets/icons/favicon.svg` |
| [x] | 03 | Gabriel Góis | Cria componente de ícones e utilitário de rolagem | `src/components/Icones.jsx`, `src/utils/navegacao.js` |
| [x] | 04 | Enzo Trotto | Adiciona LinkInterno, EstilosDaPagina e estilos globais | `src/components/LinkInterno.jsx`, `src/components/EstilosDaPagina.jsx`, `src/utils/asset.js`, `src/styles/global.css` |
| [x] | 05 | João Pedro Ferreira | Adiciona base.css com a estrutura e a responsividade das páginas | `src/styles/base.css` |
| [x] | 06 | Bernardo Gomes | Adiciona dados das marcas e utilitários do agendamento | `src/data/marcas.js`, `src/utils/agendamento.js`, `src/utils/dialogo.js` |
| [x] | 07 | Enzo Trotto | Adiciona cta.css e extras.css | `src/styles/cta.css`, `src/styles/extras.css` |

## Fase 2: Componentes compartilhados (seg 09/11)

| ✔ | # | Quem | Mensagem do commit | Arquivos |
|---|---|---|---|---|
| [x] | 08 | Bernardo Gomes | Cria LayoutMarca com rodapé, janela de contato e atalhos | `src/components/marca/`: `LayoutMarca.jsx`, `Rodape.jsx`, `ContatoModal.jsx`, `BarraAcoesMobile.jsx`, `AtalhosFlutuantes.jsx`, `BotaoWhatsapp.jsx` |
| [x] | 09 | Bernardo Nemirovsky | Cria cabeçalho com menu hambúrguer usando useState | `src/components/marca/Cabecalho.jsx` |
| [x] | 10 | Alexia Schmid | Cria seções compartilhadas: Hero, Sobre, FAQ, CTA, Localização e Conheça também | `src/components/marca/`: `Hero.jsx`, `Sobre.jsx`, `Faq.jsx`, `FaixaCta.jsx`, `Localizacao.jsx`, `ConhecaTambem.jsx` |

## Fase 3: Páginas das marcas (ter 10/11)

| ✔ | # | Quem | Mensagem do commit | Arquivos |
|---|---|---|---|---|
| [x] | 11 | Bernardo Nemirovsky | Adiciona imagens, logos e CSS da PKZ | `public/assets/img/pkz/` (12 imagens), `public/assets/img/logos/pkz-lab-empilhado-branco.svg`, `pkz-lab-horizontal-branco.svg`, `src/styles/pkz.css` |
| [x] | 12 | Bernardo Nemirovsky | Cria página da PKZ com as seções Família e Esportes | `src/pages/PaginaPkz.jsx`, `src/components/pkz/SecaoFamilia.jsx`, `src/components/pkz/SecaoEsportes.jsx` |
| [x] | 13 | Alexia Schmid | Adiciona imagens, logos e CSS da One To One | `public/assets/img/one-to-one/` (12 imagens), `public/assets/img/logos/one-to-one-branco.svg`, `one-to-one-petroleo.svg`, `src/styles/one-to-one.css` |
| [x] | 14 | Alexia Schmid | Cria página da One To One com a seção de serviços | `src/pages/PaginaOneToOne.jsx`, `src/components/one-to-one/SecaoServicos.jsx` |

## Como foi na prática (conferido no histórico do Git)

Todos os itens da sprint foram feitos, mas **em 08/11 e 09/11**, e não ao longo dos 3 dias planejados. Os commits não seguiram um a um a numeração combinada: vários itens foram juntados.

| Planejado | O que aconteceu | Quando |
|---|---|---|
| 01 (Enzo) | `index.html`, `vite.config.js`, `package.json` e `package-lock.json` em commits separados, mais o `deploy.yml` (sem o `vercel.json`) | 08/11 |
| 02 (João Pedro) | `.gitignore` e favicon ("Add logo barra do navegador") | 08/11 |
| 03 (Gabriel) | Ícones e utilitário de rolagem | 08/11 |
| 04 (Enzo) | `LinkInterno`, `EstilosDaPagina`, `asset.js` e `global.css`, em 4 commits | 08/11 |
| 05 (João Pedro) | `base.css` | 08/11 |
| 06 (Bernardo Gomes) | Dados das marcas e utilitários do agendamento | 08/11 |
| 07 | `extras.css` por Enzo (09/11); `cta.css` foi junto com o commit da Alexia (10, 13 e 14) | 08/11 e 09/11 |
| 08 (Bernardo Gomes) | `LayoutMarca`, rodapé, janela de contato e atalhos | 08/11 |
| 09, 11 e 12 (Bernardo Nemirovsky) | **Um único commit** ("commits 09 , 11 e 12"): cabeçalho, imagens, CSS e página da PKZ | 08/11 |
| 10, 13 e 14 (Alexia) | **Um único commit**: Hero, Sobre, FAQ, CTA, Localização, Conheça também e página da One To One | 08/11, às 23:50 |

## Commits por pessoa nesta sprint

| Pessoa | Commits planejados | Feitos conforme o Git |
|---|---|---|
| Enzo Trotto | 01, 04, 07 | 01 e 04 (08/11); `extras.css` (09/11) |
| Bernardo Nemirovsky | 09, 11, 12 | 09, 11 e 12 em um commit |
| Alexia Schmid | 10, 13, 14 | 10, 13 e 14 em um commit |
| João Pedro Ferreira | 02, 05 | 02 e 05 |
| Bernardo Gomes | 06, 08 | 06 e 08 |
| Gabriel Góis | 03 | 03 |
| Guilherme Macedo | n/a (os commits dele começam na [Sprint 02](sprint-02.md)) | n/a |

## Definition of Done

- [x] Commit feito pela própria conta, com a mensagem da tabela. Nenhum commit do repositório tem coautor. As mensagens nem sempre seguiram a tabela.
- [x] `git pull` feito antes do commit.
- [x] Ao fim da sprint, os itens dos 14 commits estão no repositório. O site abriu completo quando o `App.jsx` entrou, em 09/11.

## Riscos

- O histórico antigo do repositório era de 1 commit grande (6.871 linhas), então a divisão por pessoa só aparece se todos seguirem a ordem combinada. **Aconteceu em parte:** a divisão apareceu até 09/11, mas a integração de 15/11 voltou a ser um commit grande (ver [Sprint 03](sprint-03.md)).
- Se o commit 01 atrasar, bloqueia todos os outros. **Não aconteceu:** o commit 01 saiu em 08/11 às 19:14.

## Sprint Review (preencher em 10/11)

- [x] Os itens dos 14 commits estão no repositório, cada um com o autor certo (conferido no Git).
- [x] Nenhum arquivo previsto ficou de fora (conferido hoje no repositório). O favicon, que a pendência 3 dava como risco, foi adicionado em 08/11.
- Observações: não há commits neste repositório entre 10/11 e 14/11. A sprint review em si não deixou registro no Git.

## Retrospectiva (preencher em 10/11)

**O que foi bem**
- Reaproveitamento já visível: o mesmo `LayoutMarca`, `Hero`, `Faq` e `Rodape` servem às duas marcas, guiados por `marcas.js`.
- Solução para o CSS das duas marcas (mesmos nomes de classe, valores diferentes): cada página importa o seu CSS com `?inline` e o `EstilosDaPagina` aplica só enquanto ela está na tela.
- A base inteira (14 itens) ficou pronta em um dia, 08/11.

**O que pode melhorar**
- Mensagens de commit: padronizar em português, no imperativo, sem colar o comando inteiro (o primeiro commit do repositório tem `git commit -m "..."` dentro da mensagem). Mensagens como "ajustes", "app.jsx" e "legal.css" continuaram aparecendo depois.
- Commits juntando vários itens (09, 11 e 12; 10, 13 e 14) tiram a divisão por pessoa que o Scrum pedia.

**Ações para a próxima sprint**
- [x] Conferir com `git ls-files` se os 14 commits trouxeram todos os arquivos previstos (Enzo Trotto). Sem registro; hoje todos os arquivos previstos estão no repositório.
- [x] Fazer o fluxo do portal em ordem sem espera (Gabriel Góis e Guilherme Macedo). O portal foi feito, mas depois foi substituído pela Home (ver [Sprint 02](sprint-02.md) e [Sprint 03](sprint-03.md)).
- [x] Seguir o padrão de mensagem de commit nos commits 15 a 22 (todos).
- [x] Dar o `git pull` antes de cada commit (todos).
- [x] Alexia Schmid e Bernardo Nemirovsky ajudarem no teste de 13/11.
- [x] Anotar na lista de teste de 13/11 os problemas das páginas da PKZ e da One To One.
