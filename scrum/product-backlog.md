# Product Backlog: Site em React (PKZ Lab & One to One)

Itens do produto em ordem de prioridade. "Pronto no código" significa que já está no repositório; o registro por commit acontece na sprint indicada.

## Itens

| ID | Item | Sprint | Status |
|---|---|---|---|
| PB-01 | Configurar o projeto com Vite e React, com `vercel.json` para o Vercel | [01](sprint-01.md) | Pronto no código |
| PB-02 | Componentes base: ícones, `LinkInterno`, `EstilosDaPagina` e utilitários | [01](sprint-01.md) | Pronto no código |
| PB-03 | Estilos globais e CSS do Vanilla (`global`, `base`, `cta`, `extras`) | [01](sprint-01.md) | Pronto no código |
| PB-04 | Dados das marcas por props (`marcas.js`) e utilitários do agendamento | [01](sprint-01.md) | Pronto no código |
| PB-05 | Componentes compartilhados das duas marcas (layout, cabeçalho, seções) | [01](sprint-01.md) | Pronto no código |
| PB-06 | Página da PKZ (imagens, CSS, seções Família e Esportes) | [01](sprint-01.md) | Pronto no código |
| PB-07 | Página da One To One (imagens, CSS, seção Serviços) | [01](sprint-01.md) | Pronto no código |
| PB-08 | Agendamento de aula experimental (agenda, formulário com validação, envio pelo WhatsApp) | [02](sprint-02.md) | Pronto no código |
| PB-09 | Portal com halter arrastável | [02](sprint-02.md) | Pronto no código |
| PB-10 | Política de Privacidade e página 404 | [02](sprint-02.md) | Pronto no código |
| PB-11 | README com requisitos da AP2, rotas e equipe | [02](sprint-02.md) | Pronto no código |
| PB-12 | Rotas com `BrowserRouter` (`main.jsx` e `App.jsx`) | [02](sprint-02.md) | Pronto no código |
| PB-13 | Teste do site inteiro e correções | [02](sprint-02.md) | A fazer |
| PB-14 | Publicação no Vercel | [03](sprint-03.md) | A fazer |
| PB-15 | Ajustes finais: Revisão da privacidade, link do site no README | [03](sprint-03.md) | A fazer |

## Pendências e riscos

| # | Pendência / risco | Quando | Sprint |
|---|---|---|---|
| 1 | **`vite.config.js` para o Vercel:** hoje tem `base` apontando para um nome de repositório e o plugin `copiar404` (copia o `index.html` para `404.html`), feitos para o GitHub Pages. No Vercel, o `base` deve ser `"/"` e o plugin e o `NOME_DO_REPO` podem sair. Ajustar antes do commit 01. | Antes de 08/11 (commit 01) | [01](sprint-01.md) |
| 2 | **`vercel.json`:** criar com *rewrite* de todas as rotas para `/index.html`. Sem isso, abrir direto `/pkz` ou dar F5 numa página interna dá 404 do Vercel. | Commit 01 | [01](sprint-01.md) |
| 3 | **Favicon:** o `index.html` aponta para `/assets/icons/favicon.svg`, e o último commit do repositório removeu esse arquivo. Está previsto no commit 02. | Commit 02 | [01](sprint-01.md) |
| 4 | **README (commit 21):** trocar a seção "Publicação no GitHub Pages" pela do Vercel e tirar as menções a `deploy.yml` e `404.html`. | 12/11 | [02](sprint-02.md) |
| 5 | **Site só abre completo após o commit 22**, porque o `App.jsx` liga as páginas. Não dá para testar tudo no meio do caminho. | 12/11 | [02](sprint-02.md) |
| 6 | **Projeto no Vercel:** importar o repositório do GitHub (preset Vite, build `npm run build`, saída `dist`). Sugestão: quem é dono do repositório (Enzo) faz a importação. | 14/11 | [03](sprint-03.md) |
| 7 | **Política de privacidade:** é um modelo; revisar com o responsável legal antes de publicar. | 15/11 | [03](sprint-03.md) |
| 8 | **Prazo:** os 22 commits precisam estar prontos até 12/11. Se algum atrasar, a folga é 13/11 (teste) e 15/11 (imprevistos). | 12/11 | [02](sprint-02.md) |
