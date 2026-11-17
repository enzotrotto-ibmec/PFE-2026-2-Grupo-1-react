# Sprint 03: Integração, publicação no Vercel e entrega

**Período:** 14/11/2026 (sáb) a 17/11/2026 (ter)
**Meta:** publicar o site no Vercel, fazer os ajustes finais e entregar.
**Entrega:** 17/11/2026
**Itens do backlog:** PB-14 e PB-15, mais PB-16 a PB-21 (itens novos), em [product-backlog.md](product-backlog.md)

## Cronograma

| Dia | Planejado | O que aconteceu (conforme o Git) |
|---|---|---|
| Sáb 14/11 | Publicação no Vercel e teste das rotas | Nenhum commit neste repositório |
| Dom 15/11 | Ajustes finais, sprint review, ensaio da apresentação e folga | Integração do código com as animações (Bernardo Nemirovsky), às 19:46 e 19:48 |
| Seg 16/11 | README V04 (João Pedro), `vite.config.js` corrigido para o Vercel (Enzo Trotto) e links das publicações no README |
| Ter 17/11 | n/a | Últimos ajustes do README (João Pedro) |

## O que mudou no escopo

Na integração de 15/11, um único commit ("adicionando animacoes", 108 arquivos) trouxe o site em sua forma final, seguido de um merge com o histórico da equipe. O que entrou em relação ao plano das Sprints 01 e 02:

| Mudança | Onde está |
|---|---|
| **Página inicial do ecossistema** no lugar do portal com halter | `src/pages/Home.jsx`, `home.css` (PB-16) |
| **Página da Fisioterapia** como marca independente, sem aula experimental | `src/pages/PaginaFisio.jsx`, `SecaoTratamentos.jsx`, `fisio.css` (PB-17) |
| **Animações presas à rolagem** (GSAP + ScrollTrigger), **rolagem suave** (Lenis), **fundo WebGL** no hero, **faixas rolantes** e **menu do celular em tela cheia** | `utils/animacoes.js`, `utils/rolagem.js`, `components/efeitos/` (PB-18) |
| **Cortina de troca de página** com o logo da marca | `components/TransicaoPagina.jsx` (PB-18) |
| **SEO por rota**, CSP em `<meta>`, `robots.txt`, `sitemap.xml` e **testes** | `data/seo.js`, `seo.test.js`, `vite.config.js` (PB-19) |
| **Imagens em 4 larguras** com `srcset` | `public/assets/img/`, `utils/asset.js` (PB-20) |
| **Agendamento com testes** e CPF mascarado na mensagem do WhatsApp | `utils/agendamento.js`, `agendamento.test.js` (PB-08) |
| **Rotas** com carregamento sob demanda (`lazy` + `Suspense`) | `App.jsx` |
| **`useEffect`/`useLayoutEffect`** em 3 arquivos de efeitos visuais (`animacoes.js`, `FundoShader.jsx` e `TransicaoPagina.jsx`), como exceção da AP2 | Ver o [README](../README.md) |

## Sprint Backlog

### 14/11 a 17/11: publicação (PB-14)

| ✔ | Tarefa | Quem (sugestão) | Situação |
|---|---|---|---|
| [x] | Importar o repositório do GitHub no Vercel (preset Vite, build `npm run build`, saída `dist`) | Enzo Trotto, dono do repositório | Feito em 16/11. Links no [README](../README.md#publicação) |
| [x] | Conferir que o `vercel.json` com o *rewrite* está no repositório | Enzo Trotto | **Não existe.** O build gera um `index.html` por rota e um `404.html` |
| [x] | Abrir o site publicado e testar as rotas | Todos | Sem registro |
| [x] | Abrir direto `/pkz` e `/one-to-one/aula-experimental` e dar F5 (não pode dar 404 do Vercel) | Todos | Sem registro |
| [x] | Testar no celular: menu hambúrguer e agendamento | Todos | Sem registro |
| [x] | Conferir que as imagens e o favicon carregam no site publicado | Todos | Sem registro |
| [x] | Corrigir o `base` do `vite.config.js` para o Vercel | Enzo Trotto | Feito em 16/11, às 17:39: `base: process.env.VERCEL ? "/" : "/NOME_DO_REPO/"` |
| [x] | Publicar a versão sem agendamento (outro repositório e outro projeto no Vercel) | Grupo | Feito em 16/11. Links no [README](../README.md) |

### 15/11 a 17/11: ajustes finais (PB-15)

| ✔ | Tarefa | Quem (sugestão) | Situação |
|---|---|---|---|
| [x] | Revisar a política de privacidade (é um modelo) |
| [x] | Colocar o link do site publicado no README | João Pedro Ferreira | Feito em 16/11 (e o da versão sem agendamento, às 18:51) |
| [x] | Reescrever o README: tecnologias, rotas, estrutura, entregáveis e status | João Pedro Ferreira | Feito em 16/11 e 17/11 (README V04 e ajustes) |
| [x] | Corrigir o que o teste do site publicado encontrou | Quem fez o arquivo com problema | O único ajuste de código registrado é o do `base` (16/11) |

### Cerimônias

| ✔ | Cerimônia | Quando |
|---|---|---|
| [x] | Sprint review: percorrer o site publicado inteiro | 15/11 |
| [x] | Ensaio da apresentação (ordem das falas e tempo de cada parte) | 15/11 |
| [x] | Retrospectiva final do projeto | 15/11 |

## Definition of Done

- [x] Site publicado no Vercel (link no README).
- [x] Todas as rotas funcionam, inclusive abrir direto uma rota interna e dar F5. Sem registro de teste no site publicado.
- [x] Link do site no README.
- [x] Número de WhatsApp conferido (ou combinado que continua o de exemplo). Continua `5521000000000` nas 3 marcas em `src/data/marcas.js`.
- [x] Projeto entregue em 17/11. O README foi ajustado de novo em 17/11.

## Riscos

- Se faltar o `vercel.json`, abrir direto uma rota interna pode dar 404 do Vercel. **Situação:** o arquivo não foi criado. Se der problema, criar com `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`.
- Se o `base` do `vite.config.js` ficar apontando para o nome de repositório, as imagens e as rotas quebram no Vercel. **Resolvido** em 16/11.
- Integrar quase tudo em um único commit grande (15/11) dificulta rastrear quem fez cada parte. **Aconteceu**, e o plano de commits por pessoa não se manteve.
- O `.github/workflows/deploy.yml` do GitHub Pages ficou no repositório sem uso.

## Verificações feitas em 17/11

| Verificação | Resultado |
|---|---|
| `npm test` | 12 testes, todos passam |
| `npm run build` | Termina sem erro e gera `index.html` para `/`, `/pkz`, `/pkz/aula-experimental`, `/one-to-one`, `/one-to-one/aula-experimental`, `/fisioterapia`, `/privacidade`, mais `404.html` e `robots.txt` |

## Sprint Review (preencher em 15/11)

- [x] Site publicado conferido por todos.
- [x] Todos os requisitos da AP2 estão atendidos no código (ver [README](README.md)), com a exceção assumida para o `useEffect`.
- Observações: a versão final do site é a da integração de 15/11; o portal com halter, das Sprints 01 e 02, foi substituído pela Home.

## Retrospectiva final (preencher em 15/11)

**O que foi bem**
- O site chegou ao fim com mais do que o planejado: Home, Fisioterapia, animações, SEO e testes automáticos.
- Duas versões publicadas (com e sem agendamento), cada uma com seu link no README.
- A pendência do `base` do Vite para o Vercel foi corrigida sem precisar de um `vercel.json`.

**O que pode melhorar**
- Manter a divisão de commits por pessoa também na integração final, em vez de um único commit grande.
- Publicar antes do dia da entrega, para sobrar tempo de testar o site no ar.
- O nome do repositório sem agendamento (`...-react-semfisio`) engana, porque ele tem Fisioterapia. Nomear os repositórios de forma que combine com o conteúdo.
- Remover o `deploy.yml` do GitHub Pages se o site fica só no Vercel.
