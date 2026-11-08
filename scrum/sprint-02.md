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
| [ ] | 15 | Bernardo Gomes | Cria agenda, formulário de agendamento e página de aula experimental | `src/components/agendamento/Agenda.jsx`, `src/components/agendamento/AgendamentoModal.jsx`, `src/pages/AulaExperimental.jsx` |

## Fase 5: Portal (qua 11/11)

| ✔ | # | Quem | Mensagem do commit | Arquivos |
|---|---|---|---|---|
| [ ] | 16 | Gabriel Góis | Adiciona imagens do portal e componentes do halter | `public/assets/img/portal/` (6 imagens), `src/components/portal/`: `constantes.js`, `DesenhoHalter.jsx`, `BarraHalter.jsx`, `SetasDaBorda.jsx` |
| [ ] | 17 | Guilherme Macedo | Adiciona portal.css | `src/styles/portal.css` |
| [ ] | 18 | Gabriel Góis | Cria página do Portal com apresentação, painéis e rodapé | `src/components/portal/`: `Apresentacao.jsx`, `PainelMarca.jsx`, `AvisoRedirecionamento.jsx`, `RodapePortal.jsx`, `src/pages/Portal.jsx` |

## Fase 6: Páginas auxiliares e fechamento (qui 12/11)

| ✔ | # | Quem | Mensagem do commit | Arquivos |
|---|---|---|---|---|
| [ ] | 19 | Guilherme Macedo | Cria página de Política de Privacidade | `src/styles/legal.css`, `src/pages/Privacidade.jsx` |
| [ ] | 20 | Guilherme Macedo | Cria página 404 (NaoEncontrada) | `src/pages/NaoEncontrada.jsx` |
| [ ] | 21 | João Pedro Ferreira | Adiciona README com requisitos da AP2, rotas e equipe | `README.md` |
| [ ] | 22 | Enzo Trotto | Configura BrowserRouter e as rotas do site | `src/main.jsx`, `src/App.jsx` |

> **Atenção ao commit 21:** a seção de publicação do README deve falar do **Vercel** (não do GitHub Pages) e não citar `deploy.yml` nem `404.html`. O link do site publicado entra na [Sprint 03](sprint-03.md).

## Teste do site inteiro (sex 13/11)

Rodar `npm install` e `npm run dev`, e conferir:

- [ ] As 7 rotas abrem: `/`, `/pkz`, `/pkz/aula-experimental`, `/one-to-one`, `/one-to-one/aula-experimental`, `/privacidade` e uma rota inexistente (404).
- [ ] Menu hambúrguer abre e fecha no celular.
- [ ] Janela de contato (`ContatoModal`) abre, fecha com Esc e tem o foco preso.
- [ ] Agendamento: escolha de dia e horário, validação de CPF, máscaras e link do WhatsApp.
- [ ] Portal: halter arrastável e redirecionamento para cada marca.
- [ ] Mapa da Localização só carrega no clique.
- [ ] Favicon aparece na aba do navegador.
- [ ] Links internos usam `<Link>` e os externos (Instagram, WhatsApp, Maps) abrem em nova aba.
- [ ] `npm run build` termina sem erro.

## Commits por pessoa nesta sprint

| Pessoa | Commits |
|---|---|
| Guilherme Macedo | 17, 19, 20 |
| Gabriel Góis | 16, 18 |
| Bernardo Gomes | 15 |
| João Pedro Ferreira | 21 |
| Enzo Trotto | 22 |
| Alexia Schmid, Bernardo Nemirovsky | n/a (os commits deles estão na [Sprint 01](sprint-01.md)); sugestão: ajudar no teste de 13/11 |

## Definition of Done

- [ ] Commit feito pela própria conta, sem coautor, com a mensagem da tabela.
- [ ] `git pull` feito antes do commit.
- [ ] Os 22 commits estão no repositório.
- [ ] `npm install` e `npm run dev` abrem o site completo, sem erro no console.
- [ ] `npm run build` termina sem erro.
- [ ] Checklist de teste de 13/11 passou, ou o que falhou virou correção.

## Riscos

- O site só abre completo depois do commit 22 (`App.jsx`), então não dá para testar tudo no meio do caminho.
- Se a Fase 5 (portal) atrasar em 11/11, a Fase 6 não pode ficar para depois de 12/11, porque 13/11 é o teste.
- Prazo: a folga se resume a 13/11 (correções) e 15/11 (imprevistos).

## Sprint Review (preencher em 13/11)

- [ ] 22 commits na ordem, com o autor certo.
- [ ] Site completo rodando localmente.
- Observações:

## Retrospectiva (preencher em 13/11)

**O que foi bem**
- README claro, com tabela de requisitos da AP2, mapa de rotas e estrutura de pastas.
- Todos os requisitos da AP2 conferidos no código (ver [README](README.md)).

**O que pode melhorar**
- O site só abrir completo no último commit dificulta o teste no meio do caminho.
- (preencher com o que o time observar)

**Ações para a próxima sprint**
- [ ] Corrigir tudo o que o teste de 13/11 encontrou antes de publicar, e confirmar que `npm run build` termina sem erro, porque o Vercel roda esse mesmo comando (quem fez o arquivo com problema).
- [ ] Conferir que o `vercel.json` e o `base: "/"` do `vite.config.js` estão no repositório antes da importação no Vercel (Enzo Trotto).
- [ ] Importar o repositório no Vercel em 14/11 e passar o link para o grupo (Enzo Trotto).
- [ ] Definir, ainda em 13/11, quem troca o número de WhatsApp de exemplo, quem revisa a política de privacidade e quem coloca o link do site no README. Hoje esses três itens estão como "A definir" na [Sprint 03](sprint-03.md) (todos).
- [ ] Combinar o horário do ensaio da apresentação de 15/11 e quem fala em cada parte (todos).
- [ ] Guardar a lista de problemas do teste como checklist da Sprint 03, para conferir de novo no site publicado (Enzo Trotto, como Scrum Master).
