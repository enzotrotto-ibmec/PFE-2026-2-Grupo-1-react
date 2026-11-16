# Projeto para AP2 da disciplina Projeto Front-end

## PKZ Lab & One to One - versão React

Repositório do site da PKZ Lab & Studio One To One refeito em **React**, a partir da versão Vanilla
(HTML, CSS e JavaScript puro) entregue na AC.

**Esta é a versão com agendamento** (aula experimental com escolha de dia e horário, formulário validado e envio pelo WhatsApp).

* Repositório da versão Vanilla: https://github.com/enzotrotto-ibmec/PFE-2026-2-Grupo-1-vanila
* Site da versão Vanilla (GitHub Pages): https://enzotrotto-ibmec.github.io/PFE-2026-2-Grupo-1-vanila/
* Repositório da versão sem agendamento: 

O design, os textos, as imagens e o sistema de agendamento partem do Vanilla, mobile first e
com menu hambúrguer. O que muda é a forma de construir: o site virou uma SPA (*single page application*).
Além do que veio do Vanilla, esta versão ganhou uma página inicial do ecossistema, a página da
Fisioterapia, animações presas à rolagem e transição entre páginas.

## Tecnologias

* React 19 (componentes, props e `useState`)
* React Router (`BrowserRouter`, `Routes`, `Route` e `Link`)
* Vite (servidor de desenvolvimento e build)
* GSAP + ScrollTrigger (animações presas à rolagem), Lenis (rolagem suave) e um shader WebGL no fundo do hero
* CSS3 (as folhas de estilo do Vanilla, mais `home.css` e `fisio.css`)
* Vercel (hospedagem)

## Requisitos da AP2

| Requisito | Como foi feito |
| --- | --- |
| Só 1 `index.html`; as "páginas" são componentes | `index.html` na raiz; cada página é um componente em `src/pages/` |
| Componentes baseados no Vanilla | Cada bloco do Vanilla virou um componente em `src/components/` |
| Props | Dados da marca (`src/data/marcas.js`) descem por props; o mesmo `Hero`, `Faq`, `Rodape`... serve às marcas |
| `useState` | Menu hambúrguer, janelas de contato e agendamento, formulário, mapa |
| Navegação com `BrowserRouter` | `src/main.jsx` (BrowserRouter) e `src/App.jsx` (Routes/Route) |
| Sem `<a>` para navegação interna | Toda troca de página usa `<Link>` (via `LinkInterno`); `<a>` só para links externos (WhatsApp, Instagram, Google Maps) e para o atalho de acessibilidade "Pular para o conteúdo" (`href="#main"`, que não troca de página) |
| Sem `useEffect` | Os componentes de dados e de página não usam. **Exceção assumida pelo grupo:** os efeitos visuais (`utils/animacoes.js`, `utils/rolagem.js`, `components/efeitos/FundoShader.jsx` e `components/TransicaoPagina.jsx`) usam `useLayoutEffect`/`useEffect`, porque GSAP, Lenis e WebGL precisam do DOM já montado |

## Rotas

| Vanilla | React (rota) | Componente |
| --- | --- | --- |
| `index.html` | `/` | `pages/Home.jsx` (ecossistema: CTAs para PKZ, One To One e Fisioterapia; substituiu o portal do halter, que foi removido e continua no histórico do Git) |
| `pages/pkz.html` | `/pkz` | `pages/PaginaPkz.jsx` |
| `pages/pkz-aula-experimental.html` | `/pkz/aula-experimental` | `pages/AulaExperimental.jsx` (`marca="pkz"`) |
| `pages/one-to-one.html` | `/one-to-one` | `pages/PaginaOneToOne.jsx` |
| `pages/one-to-one-aula-experimental.html` | `/one-to-one/aula-experimental` | `pages/AulaExperimental.jsx` (`marca="oto"`) |
| `pages/privacidade.html` | `/privacidade` | `pages/Privacidade.jsx` |
| (novo) | `/fisioterapia` | `pages/PaginaFisio.jsx` (marca independente, sem aula experimental) |
| `404.html` | qualquer outra (`*`) | `pages/NaoEncontrada.jsx` |

As páginas de marca, de aula experimental, de privacidade e a 404 são carregadas sob demanda (`lazy` + `Suspense` em `App.jsx`).

## Estrutura

```
.
├── index.html                      O ÚNICO HTML do projeto (o React desenha tudo dentro de <div id="root">)
├── vite.config.js                  Configuração do Vite, base do site e geração do HTML de cada rota no build
├── package.json                    Dependências e scripts (dev, build, preview, test)
├── public/assets/                  Imagens (em 4 larguras), logos e favicon
├── scrum/                          Documentação Scrum: product backlog e as 3 sprints
└── src/
    ├── main.jsx                    Ponto de entrada: <BrowserRouter> em volta do <App />, liga a rolagem suave
    ├── App.jsx                     <Routes> e <Route>: qual componente aparece em cada endereço
    ├── data/
    │   ├── marcas.js               Dados das marcas: nome, WhatsApp, horários, endereço, textos (era o js/data.js)
    │   ├── seo.js                  Título, descrição e dados estruturados de cada rota (fonte única)
    │   └── seo.test.js             Testes do <head> gerado por rota
    ├── pages/                      Uma "página" = um componente
    │   ├── Home.jsx
    │   ├── PaginaPkz.jsx
    │   ├── PaginaOneToOne.jsx
    │   ├── PaginaFisio.jsx
    │   ├── AulaExperimental.jsx
    │   ├── Privacidade.jsx
    │   └── NaoEncontrada.jsx
    ├── components/
    │   ├── LinkInterno.jsx         <Link> do React Router que também rola a tela (topo ou seção)
    │   ├── EstilosDaPagina.jsx     Aplica o CSS de cada página só enquanto ela está na tela (ver abaixo)
    │   ├── TransicaoPagina.jsx     Cortina animada na troca de página (GSAP)
    │   ├── Icones.jsx              Ícones SVG reutilizados
    │   ├── marca/                  Blocos comuns às marcas
    │   │   ├── LayoutMarca.jsx     Moldura: cabeçalho + <main> + rodapé + janela de contato + atalhos
    │   │   ├── Cabecalho.jsx       Menu hambúrguer em tela cheia (useState)
    │   │   ├── Rodape.jsx
    │   │   ├── ContatoModal.jsx    Janela "Fale Conosco" (useState + <dialog>)
    │   │   ├── Hero.jsx
    │   │   ├── Sobre.jsx
    │   │   ├── FaixaNumeros.jsx
    │   │   ├── Faq.jsx
    │   │   ├── FaixaCta.jsx
    │   │   ├── Localizacao.jsx     Mapa que só carrega no clique (useState)
    │   │   ├── ConhecaTambem.jsx
    │   │   ├── BarraAcoesMobile.jsx
    │   │   ├── AtalhosFlutuantes.jsx
    │   │   └── BotaoWhatsapp.jsx
    │   ├── pkz/                    Seções só da PKZ
    │   │   ├── SecaoFamilia.jsx
    │   │   └── SecaoEsportes.jsx
    │   ├── one-to-one/             Seções só da One To One
    │   │   └── SecaoServicos.jsx
    │   ├── fisio/                  Seções só da Fisioterapia
    │   │   └── SecaoTratamentos.jsx
    │   ├── agendamento/            Sistema de agendamento (lógica do professor, agora com estado)
    │   │   ├── Agenda.jsx          Botões de dia e horários
    │   │   └── AgendamentoModal.jsx Formulário com validação e envio pelo WhatsApp
    │   ├── efeitos/                Efeitos visuais
    │   │   ├── FundoShader.jsx     Fundo do hero em WebGL
    │   │   └── FaixaRolante.jsx    Faixas em loop (logos e esportes)
    │   └── portal/
    │       └── RodapePortal.jsx    Rodapé da página inicial
    ├── utils/
    │   ├── agendamento.js          Validação de CPF, máscaras e link do WhatsApp
    │   ├── agendamento.test.js     Testes do agendamento
    │   ├── animacoes.js            Animações GSAP/ScrollTrigger (hooks das páginas, faixas e menu)
    │   ├── rolagem.js              Rolagem suave (Lenis) ligada ao GSAP
    │   ├── asset.js                Caminho das imagens e srcset (considera a base do site)
    │   ├── dialogo.js              Abre o <dialog> nativo como janela modal
    │   └── navegacao.js            Rolagem para o topo ou para uma seção
    └── styles/                     CSS do Vanilla (base, pkz, one-to-one, cta, extras, portal, legal),
                                    mais home.css, fisio.css e global.css
```

## Descrição dos entregáveis

**HTML / JSX**
Um único `index.html` na raiz; cada página é um componente React (`src/pages/`) com HTML semântico e acessível (`<header>`, `<main>`, `<footer>`, `<dialog>`, atalho "Pular para o conteúdo", `aria-label` nos controles).

**CSS**
Estilização com identidade visual consistente, seguindo a abordagem mobile first, com layout responsivo, bom espaçamento entre elementos, menu hambúrguer no mobile e menu completo no desktop. As folhas de estilo do Vanilla foram mantidas, com `home.css` e `fisio.css` para as páginas novas (`src/styles/`).

**JavaScript / React**
Funcionalidades e interações do site (menu hambúrguer controlado por estado, sistema de agendamento, validações de formulário, janelas modais, mapa que carrega no clique, animações de rolagem e transição entre páginas), implementadas com React, React Router, GSAP e Lenis.

**Documentação Scrum ([`scrum/`](scrum/README.md))**
Registro de como a equipe aplicou o Scrum nesta tarefa: [Product Backlog](scrum/product-backlog.md) priorizado e um arquivo por sprint ([Sprint 1](scrum/sprint-01.md), [Sprint 2](scrum/sprint-02.md) e [Sprint 3](scrum/sprint-03.md)) com Sprint Backlog, cronograma e tarefas.

## Como executar

Precisa do [Node.js](https://nodejs.org/) 20.19 ou mais novo.

```bash
npm install      # instala as dependências (só na primeira vez)
npm run dev      # abre o servidor de desenvolvimento (o terminal mostra o endereço)
```

### Comandos extras

```bash
npm run build    # gera a versão de produção na pasta dist/
npm run preview  # testa a versão de produção localmente
npm test         # roda os testes (Node, sem dependências extras)
```

## Publicação

O site é publicado via Vercel.

* Link do site publicado: 

Configuração do projeto no Vercel: preset **Vite**, comando de build `npm run build` e pasta de saída `dist`.
O Vercel faz um novo deploy a cada push na `main`.

O app é uma SPA com `BrowserRouter`, então o servidor precisa devolver o app para endereços como `/pkz`
ao abrir direto ou dar F5. No build, o `vite.config.js` já gera um `index.html` por rota e um `404.html`;
um `vercel.json` com *rewrite* para `/index.html` cobre qualquer outro caso (ver `scrum/sprint-03.md`).

## Observações técnicas

* **CSS das marcas:** as marcas usam os mesmos nomes de classe e de variável com valores diferentes.
  Num app React todo CSS importado do jeito comum vale para o site inteiro, então cada página importa
  o seu CSS com `?inline` e o componente `EstilosDaPagina` o aplica só enquanto a página está na tela.
  Por isso os arquivos de `src/styles/` são praticamente os mesmos do Vanilla.
* **`display: contents`:** o `#root` e o invólucro de cada página não geram caixa (ver `global.css`),
  então o layout continua igual ao Vanilla, onde `<header>`, `<main>` e `<footer>` eram filhos do `<body>`.
* **Janelas (`<dialog>`):** a janela só é renderizada quando está aberta, e o `ref={abrirComoModal}`
  chama `showModal()`, que dá o fundo escuro, o foco preso e o fechamento com Esc.
* **Links para seções** (Sobre, Localização): `LinkInterno` com a prop `secao` troca de rota, se for
  preciso, e rola até a seção.
* **Troca de página:** `TransicaoPagina` mostra uma cortina na cor da marca de destino (com o logo) a cada
  mudança de rota, e o clique no `LinkInterno` leva a tela ao topo.
* **WhatsApp:** o número `5521000000000` é de exemplo. Troque em `src/data/marcas.js` (uma vez por marca).
* **Política de privacidade:** é um modelo; revisar com o responsável legal antes de publicar.

### Sobre o `useEffect`

Os efeitos de rolagem e de animação (seções que aparecem ao rolar, faixas, menu escalonado, cortina de
troca de página, fundo WebGL) ficam isolados em `utils/animacoes.js`, `utils/rolagem.js`,
`components/efeitos/FundoShader.jsx` e `components/TransicaoPagina.jsx`, para o resto do código seguir
sem `useEffect`. O botão "voltar ao topo" aparece com a rolagem via CSS (`animation-timeline`, em
`global.css`); nos navegadores sem suporte fica sempre visível.

## Nossa equipe

* Alexia Schmid
* Bernardo Gomes
* Bernardo Nemirovsky
* Enzo Trotto
* Gabriel Góis
* Guilherme Macedo
* João Pedro Ferreira

## Disciplina

- **Curso/Disciplina:** Projeto Front-end (turma de terça-feira)
- **Professor:** Thiago Marcondes Santos
- **Instituição:** IBMEC
- **Semestre:** 2026.2

## Rolagem suave e componentes animados

* **Lenis 1.3.27** (MIT, darkroom.engineering): rolagem suave do site inteiro, ligada ao relógio do GSAP em `src/utils/rolagem.js` (sem isso o ScrollTrigger sai de sincronia). Se a Lenis falhar ao iniciar, o site rola do jeito nativo. As janelas (`<dialog>`) param a Lenis enquanto estão abertas e têm `data-lenis-prevent`.
* **React Bits** (reactbits.dev, de David Haz; licença MIT + Commons Clause: pode usar no site, não pode revender os componentes): usamos só as ideias, em versões enxutas escritas por nós, sem instalar o pacote:
  * faixa de logos em loop na home e faixa de esportes da PKZ que acelera com a rolagem (`components/efeitos/FaixaRolante.jsx`, `useFaixaPorVelocidade` em `utils/animacoes.js`; ideias do LogoLoop e do ScrollVelocity);
  * borda que brilha seguindo o mouse nos cartões da home (BorderGlow) e botão "Agendar aula" com luz correndo pela borda (StarBorder): só CSS;
  * menu do celular em tela cheia, com camadas e links entrando em sequência (`useMenuEscalonado`; ideia do StaggeredMenu).
* GSAP continua em 3.15.1. As animações não respeitam `prefers-reduced-motion`, por decisão do grupo.

## Imagens

As fotos em `public/assets/img/` existem em quatro larguras (480, 800, 1280 e 1920 px; `srcsetDe` em `src/utils/asset.js` monta o `srcset`). As de `img/portal/` só servem de imagem de compartilhamento (og:image) e existem só em 1280 px.

## SEO e segurança

No `npm run build` o `vite.config.js` gera um `index.html` por rota (`dist/pkz/`, `dist/fisioterapia/`...) com título, descrição, Open Graph e dados estruturados da página (fonte única: `src/data/seo.js`), mais `robots.txt`, `404.html` (noindex) e a política de conteúdo (CSP) em `<meta>`.

Para gerar também `sitemap.xml`, canonical e `og:image` (precisam do endereço público), defina o endereço antes do build. No Vercel, crie a variável de ambiente `VITE_SITE_URL` com o endereço do site; localmente:

```bash
VITE_SITE_URL=https://seu-projeto.vercel.app npm run build
```

Sem a variável o build funciona, só omite essas quatro peças.

### Segurança: o que está feito
- Sem segredos no código, sem `innerHTML`/`dangerouslySetInnerHTML`, `npm audit` sem vulnerabilidades, links externos com `rel="noopener noreferrer"`.
- **Agendamento:** a mensagem do WhatsApp (que vai na URL do `wa.me` e fica no histórico do navegador) mostra o CPF mascarado (`***.***.***-12`). O formulário continua validando o CPF completo. O telefone segue na mensagem.
- **CSP e `Referrer-Policy` por `<meta>`** (só no build), que funcionam em qualquer hospedagem. O Vercel força HTTPS; cabeçalhos HTTP como `X-Content-Type-Options` e `Strict-Transport-Security` podem ser configurados no `vercel.json`.
- **Terceiros que carregam:** Google Fonts (CSS e arquivos de fonte) e, só ao clicar em "Ver mapa", o mapa do Google. O CSS do Google Fonts não aceita SRI. Para eliminar esse terceiro, o caminho é hospedar as fontes no próprio site (pacotes `@fontsource`).
