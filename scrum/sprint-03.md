# Sprint 03: Publicação no Vercel e entrega

**Período:** 14/11/2026 (sáb) a 16/11/2026 (seg)
**Meta:** publicar o site no Vercel, fazer os ajustes finais e entregar.
**Entrega:** 16/11/2026
**Itens do backlog:** PB-14 e PB-15 ([product-backlog.md](product-backlog.md))

Esta sprint não tem commits da ordem combinada (01 a 22, já feitos nas Sprints 01 e 02). Os commits desta sprint são só de ajustes.

## Cronograma

| Dia | O que acontece |
|---|---|
| Sáb 14/11 | Publicação no Vercel e teste das rotas no site publicado |
| Dom 15/11 | Ajustes finais, sprint review, ensaio da apresentação e folga para imprevistos |
| Seg 16/11 | **Entrega** |

## Sprint Backlog

### Sáb 14/11: publicação (PB-14)

| ✔ | Tarefa | Quem (sugestão) |
|---|---|---|
| [ ] | Importar o repositório do GitHub no Vercel (preset Vite, build `npm run build`, saída `dist`) | Enzo Trotto, dono do repositório |
| [ ] | Conferir que o `vercel.json` com o *rewrite* está no repositório | Enzo Trotto |
| [ ] | Abrir o site publicado e testar as 7 rotas | Todos |
| [ ] | Abrir direto `/pkz` e `/one-to-one/aula-experimental` e dar F5 (não pode dar 404 do Vercel) | Todos |
| [ ] | Testar no celular: menu hambúrguer, agendamento e portal | Todos |
| [ ] | Conferir que as imagens e o favicon carregam no site publicado | Todos |

### Dom 15/11: ajustes finais (PB-15)

| ✔ | Tarefa | Quem (sugestão) |
|---|---|---|
| [ ] | Trocar o número de WhatsApp de exemplo (`5521000000000`) em `src/data/marcas.js`, uma vez por marca | A definir |
| [ ] | Revisar a política de privacidade (é um modelo) com o responsável legal | A definir |
| [ ] | Colocar o link do site publicado no README (commit extra, fora dos 22) | João Pedro Ferreira, autor do README |
| [ ] | Corrigir o que o teste do site publicado encontrou | Quem fez o arquivo com problema |

### Cerimônias

| ✔ | Cerimônia | Quando |
|---|---|---|
| [ ] | Sprint review: percorrer o site publicado inteiro | Dom 15/11 |
| [ ] | Ensaio da apresentação (ordem das falas e tempo de cada parte) | Dom 15/11 |
| [ ] | Retrospectiva final do projeto | Dom 15/11 |

## Definition of Done

- [ ] Site publicado no Vercel e abrindo pelo link.
- [ ] Todas as rotas funcionam, inclusive abrir direto uma rota interna e dar F5.
- [ ] Link do site no README.
- [ ] Número de WhatsApp conferido (ou combinado que continua o de exemplo).
- [ ] Projeto entregue em 16/11.

## Riscos

- Se faltar o `vercel.json`, abrir direto uma rota interna dá 404 do Vercel.
- Se o `base` do `vite.config.js` ficar apontando para o nome de repositório (resto do GitHub Pages), as imagens e as rotas quebram no Vercel.
- Publicar só no sábado deixa pouco tempo para corrigir problemas de ambiente; por isso 15/11 fica como folga.

## Sprint Review (preencher em 15/11)

- [ ] Site publicado conferido por todos.
- [ ] Todos os requisitos da AP2 continuam atendidos (ver [README](README.md)).
- Observações:

## Retrospectiva final (preencher em 15/11)

**O que foi bem**
- (preencher)

**O que pode melhorar**
- Ideias já levantadas para o próximo projeto: configurar `git config user.name` e `user.email` no começo (no projeto anterior o repositório teve 16 nomes de autor para 7 pessoas); começar pelas etapas na ordem certa; combinar a divisão de commits antes de começar.
- (preencher com o que o time observar)
