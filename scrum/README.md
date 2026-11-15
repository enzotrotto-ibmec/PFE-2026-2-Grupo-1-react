# Scrum: Site em React (PKZ Lab & One to One)

## Contexto

Refazer o site da PKZ Lab & Studio One To One em **React**, a partir da versão Vanilla (HTML, CSS e JavaScript puro) entregue na AC. Mesmo design, textos, imagens e sistema de agendamento, agora como SPA (*single page application*).

- **Stack:** React 19, React Router, Vite, CSS3
- **Publicação:** Vercel
- **Entrega:** 16/11/2026
- **Disciplina:** Projeto Front-end (turma de terça-feira), professor Thiago Marcondes Santos, IBMEC, 2026.2

## Arquivos desta pasta

| Arquivo | Conteúdo |
|---|---|
| [product-backlog.md](product-backlog.md) | Itens do produto, em qual sprint cada um entra, pendências e riscos |
| [sprint-01.md](sprint-01.md) | 08/11 a 10/11: base do projeto, componentes compartilhados e páginas das marcas (commits 01 a 14) |
| [sprint-02.md](sprint-02.md) | 11/11 a 13/11: agendamento, portal, páginas auxiliares, rotas e teste do site inteiro (commits 15 a 22) |
| [sprint-03.md](sprint-03.md) | 14/11 a 16/11: publicação no Vercel, ajustes finais, review e entrega |

## Cronograma geral

| Sprint | Período | Meta | Commits |
|---|---|---|---|
| 01 | 08/11 (dom) a 10/11 (ter) | Ter a base do projeto, os componentes compartilhados e as duas páginas das marcas | 01 a 14 |
| 02 | 11/11 (qua) a 13/11 (sex) | Fechar agendamento, portal, privacidade, 404 e rotas, e testar o site inteiro | 15 a 22 |
| 03 | 14/11 (sáb) a 16/11 (seg) | Publicar no Vercel, fazer os ajustes finais e entregar | n/a |

## Papéis (Scrum Team)

| Papel | Quem | Responsabilidades no projeto |
|---|---|---|
| **Product Owner** | Prof. Thiago Marcondes Santos | Define os requisitos e os prazos da AC (mobile first, menu hambúrguer, imagens sem placeholder, agendamento), prioriza o que deve ser feito, aceita ou pede correções nas entregas e dá o feedback da apresentação. |
| **Scrum Master** | Enzo Trotto | Conduz as reuniões, remove impedimentos, mantém o repositório organizado (README, estrutura de pastas) e cuida da documentação do Scrum. |
| **Time de Desenvolvimento** | Alexia Schmid, Bernardo Gomes, Bernardo Nemirovsky, Gabriel Góis, Guilherme Macedo, João Pedro Ferreira | Constroem o site (HTML, CSS e JS), integram o sistema de agendamento e se auto-organizam na divisão das tarefas. |

**Cliente / stakeholder:** PKZ Lab & One to One - fonte do conteúdo e do material (fotos, textos) usado no site, e referência de público e identidade visual de cada marca (levantados na AP1).

## Combinados do time para os commits

- Seguir a numeração dos commits nos arquivos de sprint.
- Antes de cada commit, `git pull`.
- Cada pessoa commita pela própria conta, só com os arquivos da sua vez, sem coautor.
- Depois do commit 22, rodar `npm install` e `npm run dev` para conferir que tudo abre. O site só funciona inteiro depois do último commit, porque é o `App.jsx` que liga as páginas.

## Requisitos da AP2

Conferi no código, não só no README.

| Requisito | Situação |
|---|---|
| Só 1 `index.html`; as "páginas" são componentes | Atendido: `index.html` na raiz e 6 páginas em `src/pages/` |
| Componentes baseados no Vanilla | Atendido: 13 componentes compartilhados em `components/marca/`, mais os de PKZ, One To One, agendamento e portal |
| Props | Atendido: dados das marcas descem por props e o mesmo `Hero`, `Faq`, `Rodape`... serve às duas marcas |
| `useState` | Atendido: usado em 7 arquivos (menu, contato, agendamento, mapa, portal, página de aula experimental) |
| Navegação com `BrowserRouter` | Atendido: `main.jsx` e `App.jsx`, 7 rotas |
| Sem `<a>` para navegação interna | Atendido: troca de página por `LinkInterno`/`<Link>`; `<a>` só em links externos (Instagram, WhatsApp, Maps) e no atalho "Pular para o conteúdo" (`#main`) |
| Sem `useEffect` | Atendido: nenhum uso no código (aparece só em comentários) |
