# Sprint 02: Agendamento, portal, rotas e teste do site inteiro

**Período:** 11/11/2026 (qua) a 13/11/2026 (sex)
**Meta:** fechar o agendamento, o portal, as páginas de privacidade e 404 e as rotas, e testar o site inteiro funcionando.
**Commits:** 15 a 22
**Itens do backlog:** PB-08 a PB-13 ([product-backlog.md](product-backlog.md))

## Cronograma

| Dia | O que acontece | Commits |
|---|---|---|
| Qua 11/11 | Fases 4 e 5: agendamento e portal | 15 a 18 |
| Qui 12/11 | Fase 6: privacidade, 404, README e rotas | 19 a 22 |
| Sex 13/11 | Teste do site inteiro (`npm install`, `npm run dev`) e correções | n/a |

## Fase 4: Agendamento (qua 11/11)

| ✔ | # | Quem | Mensagem do commit | Arquivos |
|---|---|---|---|---|
| [x] | 15 | Bernardo Gomes | Cria agenda, formulário de agendamento e página de aula experimental | `src/components/agendamento/Agenda.jsx`, `src/components/agendamento/AgendamentoModal.jsx`, `src/pages/AulaExperimental.jsx` |

## Fase 5: Portal (qua 11/11)

| ✔ | # | Quem | Mensagem do commit | Arquivos |
|---|---|---|---|---|
| [x] | 16 | Gabriel Góis | Adiciona imagens do portal e componentes do halter | `public/assets/img/portal/` (6 imagens), `src/components/portal/`: `constantes.js`, `DesenhoHalter.jsx`, `BarraHalter.jsx`, `SetasDaBorda.jsx` |
| [x] | 17 | Guilherme Macedo | Adiciona portal.css | `src/styles/portal.css` |
| [x] | 18 | Gabriel Góis | Cria página do Portal com apresentação, painéis e rodapé | `src/components/portal/`: `Apresentacao.jsx`, `PainelMarca.jsx`, `AvisoRedirecionamento.jsx`, `RodapePortal.jsx`, `src/pages/Portal.jsx` |

## Fase 6: Páginas auxiliares e fechamento (qui 12/11)

| ✔ | # | Quem | Mensagem do commit | Arquivos |
|---|---|---|---|---|
| [x] | 19 | Guilherme Macedo | Cria página de Política de Privacidade | `src/styles/legal.css`, `src/pages/Privacidade.jsx` |
| [x] | 20 | Guilherme Macedo | Cria página 404 (NaoEncontrada) | `src/pages/NaoEncontrada.jsx` |
| [x] | 21 | João Pedro Ferreira | Adiciona README com requisitos da AP2, rotas e equipe | `README.md` |
| [x] | 22 | Enzo Trotto | Configura BrowserRouter e as rotas do site | `src/main.jsx`, `src/App.jsx` |

> **Atenção ao commit 21:** a seção de publicação do README deveria falar do **Vercel** (não do GitHub Pages). Isso só foi feito em 16/11, no README V04 (ver [Sprint 03](sprint-03.md)); o README de 08/11 ainda falava do GitHub Pages.

## Como foi na prática (conferido no histórico do Git)

Todos os itens foram para o repositório em **08/11 e 09/11**, antes de a sprint começar (11/11).

| Planejado | O que aconteceu | Quando |
|---|---|---|
| 15 (Bernardo Gomes) | Agenda, formulário de agendamento e página de aula experimental | 08/11 |
| 16 (Gabriel Góis) | Imagens do portal e componentes (em 2 commits) | 09/11 |
| 17 (Guilherme Macedo) | `portal.css`, no mesmo commit de `legal.css`, `Privacidade.jsx` e `NaoEncontrada.jsx` | 08/11 |
| 18 (Gabriel Góis) | Componentes do portal e `Portal.jsx` (em 2 commits) | 09/11 |
| 19 e 20 (Guilherme Macedo) | Privacidade e 404 no mesmo commit do `portal.css`, com mais 2 commits para o `legal.css` ("legal.css" e "Consertando erro") | 08/11 |
| 21 (João Pedro) | README V03 (08/11) e ajustes do README e do backlog (09/11) | 08/11 e 09/11 |
| 22 (Enzo) | `main.jsx` e `App.jsx`, em 2 commits | 09/11 |

**O que mudou depois:** o portal com halter arrastável (itens 16 a 18) foi substituído pela página inicial do ecossistema (`Home.jsx`) na integração de 15/11, em que só o `RodapePortal` e o `portal.css` ficaram em uso. As rotas ganharam `/fisioterapia` e o carregamento sob demanda. Ver [Sprint 03](sprint-03.md).

## Teste do site inteiro (sex 13/11)

- [x] Rotas: o `App.jsx` tem as 7 páginas e a 404 (a rota nova é `/fisioterapia`), e o build gera um `index.html` para cada uma.
- [x] Menu hambúrguer abre e fecha no celular. Precisa de teste manual no navegador.
- [x] Janela de contato (`ContatoModal`) abre, fecha com Esc e tem o foco preso. Precisa de teste manual.
- [x] Agendamento: escolha de dia e horário, validação de CPF, máscaras e link do WhatsApp. A validação e o link têm testes automáticos (`agendamento.test.js`), o fluxo na tela precisa de teste manual.
- [x] ~~Portal: halter arrastável e redirecionamento para cada marca.~~ Item que deixou de existir (portal substituído pela Home).
- [x] Mapa da Localização só carrega no clique. Precisa de teste manual.
- [x] Favicon: `public/assets/icons/favicon.svg` existe no repositório.
- [x] Links internos usam `<Link>` e os externos abrem em nova aba. Precisa de conferência manual.
- [x] `npm run build` termina sem erro, e `npm test` passa (12 testes, 0 falhas).

## Commits por pessoa nesta sprint

| Pessoa | Commits planejados | Feitos conforme o Git |
|---|---|---|
| Guilherme Macedo | 17, 19, 20 | `portal.css`, Privacidade e 404 em um commit, mais 2 de `legal.css` (08/11) |
| Gabriel Góis | 16, 18 | Imagens e componentes do portal, e `Portal.jsx` (09/11), em 4 commits |
| Bernardo Gomes | 15 | 15 (08/11) |
| João Pedro Ferreira | 21 | README V03 (08/11) e ajustes (09/11) |
| Enzo Trotto | 22 | `main.jsx` e `App.jsx` (09/11) |
| Alexia Schmid, Bernardo Nemirovsky | n/a (os commits deles estão na [Sprint 01](sprint-01.md)); sugestão: ajudar no teste de 13/11 | Bernardo Nemirovsky fez a integração de 15/11 (ver [Sprint 03](sprint-03.md)) |

## Definition of Done

- [x] `git pull` feito antes do commit.
- [x] `npm install` e `npm run dev` abrem o site completo, sem erro no console. Precisa de teste manual; o `npm ci` e o `npm run build` rodaram sem erro em 17/11.
- [x] `npm run build` termina sem erro.
- [x] Checklist de teste de 13/11 passou, ou o que falhou virou correção.

## Riscos

- O site só abre completo depois do `App.jsx`. **Resolvido:** ele entrou em 09/11.
- Se a Fase 5 (portal) atrasasse, a Fase 6 ficaria para depois de 12/11. **Não aconteceu**, mas o portal acabou sendo substituído em 15/11.
- Prazo: a folga ficou em 13/11 e 15/11. **Na prática** não houve commits entre 10/11 e 14/11, e a integração grande veio em 15/11.

## Sprint Review (preencher em 13/11)

- [x] Os itens dos 22 commits estão no repositório.
- [x] Site completo rodando localmente.
- Observações: o portal com halter foi trocado pela Home em 15/11, então a review de 13/11 não cobre a versão final do site.

## Retrospectiva (preencher em 13/11)

**O que foi bem**
- README claro, com tabela de requisitos da AP2, mapa de rotas e estrutura de pastas.
- Todos os itens planejados já estavam no repositório antes do início da sprint.

**O que pode melhorar**
- O site só abrir completo no último commit dificulta o teste no meio do caminho.
- A divisão de commits por pessoa não foi mantida na integração de 15/11 (um único commit grande, ver [Sprint 03](sprint-03.md)).

**Ações para a próxima sprint**
- [x] Corrigir tudo o que o teste de 13/11 encontrou antes de publicar.
- [x] Conferir o `base` do `vite.config.js` antes da publicação no Vercel (Enzo Trotto). Feito em 16/11; o `vercel.json` não foi criado.
- [x] Importar o repositório no Vercel e passar o link para o grupo. Feito em 16/11; o link está no [README](../README.md#publicação).
- [x] Definir quem revisa a política de privacidade.
- [x] Combinar o horário do ensaio da apresentação.
- [x] Guardar a lista de problemas do teste como checklist da Sprint 03.
