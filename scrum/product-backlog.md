# Product Backlog: Site em React (PKZ Lab & One to One)

Itens do produto em ordem de prioridade, atualizados conforme o histórico do Git (52 commits, de 01/11 a 17/11/2026). "Feito" significa que o item está no repositório; o registro por commit está na sprint indicada.

## Itens

| ID | Item | Sprint | Status |
|---|---|---|---|
| PB-01 | Configurar o projeto com Vite e React para publicar no Vercel | [01](sprint-01.md) | Feito. O `vercel.json` não foi criado (ver pendência 2) e o `base` do Vite ficou condicional ao Vercel (pendência 1) |
| PB-02 | Componentes base: ícones, `LinkInterno`, `EstilosDaPagina` e utilitários | [01](sprint-01.md) | Feito |
| PB-03 | Estilos globais e CSS do Vanilla (`global`, `base`, `cta`, `extras`) | [01](sprint-01.md) | Feito |
| PB-04 | Dados das marcas por props (`marcas.js`) e utilitários do agendamento | [01](sprint-01.md) | Feito |
| PB-05 | Componentes compartilhados das marcas (layout, cabeçalho, seções) | [01](sprint-01.md) | Feito |
| PB-06 | Página da PKZ (imagens, CSS, seções Família e Esportes) | [01](sprint-01.md) | Feito |
| PB-07 | Página da One To One (imagens, CSS, seção Serviços) | [01](sprint-01.md) | Feito |
| PB-08 | Agendamento de aula experimental (agenda, formulário com validação, envio pelo WhatsApp) | [02](sprint-02.md) | Feito. Ganhou testes (`agendamento.test.js`) e o CPF mascarado na mensagem do WhatsApp |
| PB-09 | Portal com halter arrastável | [02](sprint-02.md) | Substituído: o portal foi trocado pela página inicial do ecossistema (PB-16). Só o `RodapePortal` e o `portal.css` continuam em uso, e o resto está no histórico do Git |
| PB-10 | Política de Privacidade e página 404 | [02](sprint-02.md) | Feito |
| PB-11 | README com requisitos da AP2, rotas e equipe | [02](sprint-02.md) | Feito. Reescrito nas versões V03 e V04, com entregáveis, status e links de publicação |
| PB-12 | Rotas com `BrowserRouter` (`main.jsx` e `App.jsx`) | [02](sprint-02.md) | Feito. Hoje são 7 páginas mais a 404, com carregamento sob demanda (`lazy`) |
| PB-13 | Teste do site inteiro e correções | [02](sprint-02.md) | Sem registro separado no Git; coberto pela integração de 15/11 e pela publicação de 16/11 (ver [Sprint 03](sprint-03.md)). O README marca "Revisão e testes finais" como concluída |
| PB-14 | Publicação no Vercel | [03](sprint-03.md) | Feito em 16/11, com duas publicações (com e sem agendamento) |
| PB-15 | Ajustes finais: link do site no README, `base` do Vite para o Vercel e README final | [03](sprint-03.md) | Feito. A revisão da política de privacidade segue em aberto (pendência 7) |
| PB-16 | Página inicial do ecossistema (`/`) com CTAs para PKZ, One To One e Fisioterapia | [03](sprint-03.md) | Feito (novo, não estava no plano inicial) |
| PB-17 | Página da Fisioterapia (`/fisioterapia`) como marca independente | [03](sprint-03.md) | Feito (novo) |
| PB-18 | Animações e movimento: GSAP + ScrollTrigger, Lenis, fundo WebGL no hero, faixas rolantes, menu do celular em tela cheia e cortina de troca de página | [03](sprint-03.md) | Feito (novo) |
| PB-19 | SEO por rota (título, descrição, Open Graph, dados estruturados, `robots.txt`, `sitemap.xml`), CSP em `<meta>` e testes com `npm test` | [03](sprint-03.md) | Feito (novo) |
| PB-20 | Imagens em 4 larguras (480, 800, 1280 e 1920 px) com `srcset` | [03](sprint-03.md) | Feito (novo) |
| PB-21 | Versão sem agendamento, em outro repositório e outro projeto no Vercel | [03](sprint-03.md) | Feito (novo). Links no [README](../README.md) |

## Pendências e riscos

| # | Pendência / risco | Quando | Situação |
|---|---|---|---|
| 1 | **`vite.config.js` para o Vercel:** o `base` apontava para o nome do repositório (GitHub Pages). | Planejado antes de 08/11 | **Resolvido em 16/11** (Enzo Trotto, commit "vite config corrigida"): `base: process.env.VERCEL ? "/" : "/NOME_DO_REPO/"`. O `NOME_DO_REPO` ficou, e o plugin virou `paginasParaGithubPages`, que gera o `index.html` de cada rota e o `404.html`. |
| 2 | **`vercel.json`:** previsto com *rewrite* de todas as rotas para `/index.html`. | Planejado no commit 01 | **Não foi criado.** O build gera um `index.html` por rota (`dist/pkz/`, `dist/fisioterapia/`...) e um `404.html` que carrega o app. Se alguma rota abrir com 404 direto ou no F5, criar o `vercel.json`. |
| 3 | **Favicon:** o `index.html` aponta para `/assets/icons/favicon.svg`. | Commit 02 | **Resolvido em 08/11** (commit "Add logo barra do navegador"). |
| 4 | **README:** trocar a seção do GitHub Pages pela do Vercel. | 12/11 | **Resolvido em 16/11** (README V04 e commits seguintes). O `.github/workflows/deploy.yml` do GitHub Pages **continua no repositório**, sem uso. |
| 5 | **Site só abre completo com o `App.jsx`.** | 12/11 | **Resolvido.** O `App.jsx` entrou em 09/11. |
| 6 | **Projeto no Vercel:** importar o repositório (preset Vite, build `npm run build`, saída `dist`). | 14/11 | **Resolvido em 16/11.** Links no [README](../README.md#publicação). |
| 7 | **Política de privacidade:** é um modelo; revisar com o responsável legal antes de publicar. | 15/11 | **Em aberto.** O README ainda avisa que é um modelo. |
| 8 | **Prazo:** os 22 commits até 12/11. | 12/11 | **Não seguido como planejado.** A base foi para o repositório em 08 e 09/11; as animações, a Home, a Fisioterapia, o SEO e os testes entraram em 15/11, em um único commit grande (ver [Sprint 03](sprint-03.md)). |
| 9 | **Requisito "sem `useEffect`" da AP2:** os efeitos visuais precisam do DOM montado. | 15/11 | **Exceção assumida pelo grupo**, restrita a `utils/animacoes.js`, `FundoShader.jsx` e `TransicaoPagina.jsx`. |
| 10 | **Confusão no nome do repositório sem agendamento:** o nome termina em `-semfisio`, mas ele **tem** Fisioterapia e **não tem** agendamento. | 16/11 | **Registrado no README.** Não foi renomeado. |
