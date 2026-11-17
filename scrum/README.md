# Scrum: Site em React (PKZ Lab & One to One)

## Contexto

Refazer o site da PKZ Lab & Studio One To One em **React**, a partir da versão Vanilla (HTML, CSS e JavaScript puro) entregue na AC. Mesmo design, textos, imagens e sistema de agendamento, agora como SPA (*single page application*).

- **Stack:** React 19, React Router, Vite, GSAP + ScrollTrigger, Lenis, CSS3
- **Publicação:** Vercel (versão com agendamento e versão sem agendamento)
- **Entrega:** 17/11/2026
- **Disciplina:** Projeto Front-end (turma de terça-feira), professor Thiago Marcondes Santos, IBMEC, 2026.2

## Arquivos desta pasta

| Arquivo | Conteúdo |
|---|---|
| [product-backlog.md](product-backlog.md) | Itens do produto, em qual sprint cada um entra, pendências e riscos |
| [sprint-01.md](sprint-01.md) | 08/11 a 10/11: base do projeto, componentes compartilhados e páginas das marcas (commits 01 a 14), com o que aconteceu de fato |
| [sprint-02.md](sprint-02.md) | 11/11 a 13/11: agendamento, portal, páginas auxiliares, rotas e teste do site inteiro (commits 15 a 22), com o que aconteceu de fato |
| [sprint-03.md](sprint-03.md) | 14/11 a 17/11: integração (Home, Fisioterapia, animações, SEO e testes), publicação no Vercel, ajustes finais e entrega |

## Cronograma geral

Planejado e o que o histórico do Git mostra (52 commits, de 01/11 a 17/11):

| Sprint | Período planejado | Meta | O que aconteceu |
|---|---|---|---|
| 01 | 08/11 (dom) a 10/11 (ter) | Ter a base do projeto, os componentes compartilhados e as duas páginas das marcas (commits 01 a 14) | Tudo em 08/11 e 09/11 |
| 02 | 11/11 (qua) a 13/11 (sex) | Fechar agendamento, portal, privacidade, 404 e rotas, e testar o site inteiro (commits 15 a 22) | Os itens já estavam no repositório em 08/11 e 09/11. Sem commits entre 10/11 e 14/11 |
| 03 | 14/11 (sáb) a 17/11 (seg) | Publicar no Vercel, fazer os ajustes finais e entregar | Integração em 15/11 (Home, Fisioterapia, animações, SEO e testes), publicação e README em 16/11, últimos ajustes do README em 17/11 |

**Principais mudanças em relação ao plano:** o portal com halter foi substituído pela página inicial do ecossistema; entrou a página da Fisioterapia; entraram animações, SEO e testes; o `vercel.json` não foi criado e o `base` do Vite passou a depender do Vercel; houve duas publicações (com e sem agendamento). Detalhes no [Product Backlog](product-backlog.md) e na [Sprint 03](sprint-03.md).

## Papéis (Scrum Team)

| Papel | Quem | Responsabilidades no projeto |
|---|---|---|
| **Product Owner** | Prof. Thiago Marcondes Santos | Define os requisitos e os prazos da AC (mobile first, menu hambúrguer, imagens sem placeholder, agendamento), prioriza o que deve ser feito, aceita ou pede correções nas entregas e dá o feedback da apresentação. |
| **Scrum Master** | Enzo Trotto | Conduz as reuniões, remove impedimentos, mantém o repositório organizado (README, estrutura de pastas) e cuida da documentação do Scrum. |
| **Time de Desenvolvimento** | Alexia Schmid, Bernardo Gomes, Bernardo Nemirovsky, Gabriel Góis, Guilherme Macedo, João Pedro Ferreira | Constroem o site (HTML, CSS e JS), integram o sistema de agendamento e se auto-organizam na divisão das tarefas. |

**Cliente / stakeholder:** PKZ Lab & One to One - fonte do conteúdo e do material (fotos, textos) usado no site, e referência de público e identidade visual de cada marca (levantados na AP1).

## Combinados do time para os commits

- Antes de cada commit, `git pull`.
- Depois do commit 22, rodar `npm install` e `npm run dev` para conferir que tudo abre. O site só funciona inteiro depois do último commit, porque é o `App.jsx` que liga as páginas. *O `App.jsx` entrou em 09/11.*

## Requisitos da AP2

| Requisito | Situação |
|---|---|
| Só 1 `index.html`; as "páginas" são componentes | Atendido: `index.html` na raiz e 7 páginas em `src/pages/` |
| Componentes baseados no Vanilla | Atendido: 14 componentes compartilhados em `components/marca/`, mais os de PKZ, One To One, Fisioterapia, agendamento, efeitos e o rodapé da Home |
| Props | Atendido: dados das marcas descem por props e o mesmo `Hero`, `Faq`, `Rodape`... serve às marcas |
| `useState` | Atendido: usado em 6 arquivos (menu, contato, agendamento, mapa, layout e página de aula experimental) |
| Navegação com `BrowserRouter` | Atendido: `main.jsx` e `App.jsx`, 7 páginas e a 404 |
| Sem `<a>` para navegação interna | Atendido: troca de página por `LinkInterno`/`<Link>`; `<a>` só em links externos (Instagram, WhatsApp, Maps) e no atalho "Pular para o conteúdo" (`#main`) |
| Sem `useEffect` | **Atendido com exceção assumida pelo grupo:** os componentes de dados e de página não usam. `useLayoutEffect`/`useEffect` aparecem em `utils/animacoes.js`, `components/efeitos/FundoShader.jsx` e `components/TransicaoPagina.jsx`, porque GSAP e WebGL precisam do DOM montado |

## Verificações feitas em 17/11

- `npm test`: 12 testes, todos passam.
- `npm run build`: termina sem erro e gera `index.html` por rota, `404.html` e `robots.txt`.
- site funcionando 100% no Vercel, com e sem agendamento.
