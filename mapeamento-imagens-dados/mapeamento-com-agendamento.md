# Mapeamento de imagens e dados fictícios do site: versão React com agendamento

Documento do projeto **PKZ Lab & Studio One To One** (Projeto Front-end, IBMEC, 2026.2). Mostra **todas as imagens do site, exceto as logos, que são oficiais da empresa**, e onde cada uma aparece: a **página**, a **seção** e o **arquivo do código** (com a linha). Mostra também os **dados fictícios** do site (como o número de WhatsApp) e onde eles estão. O endereço e o Instagram das marcas são **reais**.

* Repositório: https://github.com/enzotrotto-ibmec/PFE-2026-2-Grupo-1-react
* Site publicado: https://pfe-2026-2-grupo-1-react-sigma.vercel.app/
* Linhas conferidas no commit `756da54`. Se o código for editado, os números de linha podem mudar.

## Resumo

* São **12 imagens fictícias**: pessoas, equipes e espaços que **não são reais**, nem das marcas, nem de clientes. Foram criadas com uma ferramenta de IA generativa para o site não ter imagens vazias nem *placeholders* (requisito do professor).
* **10 imagens aparecem nas páginas** e **2 só servem de imagem de compartilhamento** (`og:image`: a miniatura que aparece quando o link do site é enviado).
* Cada imagem existe em quatro larguras (480, 800, 1280 e 1920 px, em WebP), exceto as 2 de compartilhamento, que só têm 1280 px. Ao todo são 42 arquivos, todos em `public/assets/img/`.
* Ficam **fora** do mapeamento de imagens as **logos, que são oficiais da empresa** (`public/assets/img/logos/`), o favicon (`public/assets/icons/favicon.svg`) e os ícones SVG do código. A única exceção é a logo da **Fisioterapia**, que é **provisória** (ver a seção de dados fictícios).
* Os **dados fictícios** são o número de WhatsApp, os horários de funcionamento e a marca Fisioterapia, que ainda é provisória. Todos estão em `src/data/marcas.js`.

## Mapa das imagens

| # | Imagem (pasta/arquivo) | Tipo | O que mostra | Onde aparece (página e seção) | Onde está no código |
|---|---|---|---|---|---|
| 1 | `img/pkz/EquipePKZ` | Imagem fictícia | Equipe da PKZ em pé numa academia: dois profissionais de jaleco e dois de uniforme, sob um letreiro "PKZ Academia & Saúde". | `/pkz`: imagem de destaque no topo (Hero)<br>`/pkz`: card "Equipe PKZ", na seção de esportes<br>`/`: faixa tripla do topo (decorativa) e card "PKZ Lab" do ecossistema | `src/pages/PaginaPkz.jsx:75` (define a imagem do Hero; desenhada em `src/components/marca/Hero.jsx:50`)<br>`src/components/pkz/SecaoEsportes.jsx:38-39`<br>`src/pages/Home.jsx:22` (dados; desenhada nas linhas 91 e 159) |
| 2 | `img/pkz/karate` | Imagem fictícia | Uma criança de faixa amarela e um adulto de faixa preta em posição de luta, num dojo com placas em japonês. | `/pkz`: card "Karateca?" (seção de esportes) | `src/components/pkz/SecaoEsportes.jsx:8` (desenhada na linha 77) |
| 3 | `img/pkz/JiuJitsu` | Imagem fictícia | Adulto de kimono ensinando uma criança de kimono sentadas num tatame, com outros alunos ao fundo. | `/pkz`: card "Praticante de Jiu-Jitsu?" (seção de esportes) | `src/components/pkz/SecaoEsportes.jsx:9` (desenhada na linha 77) |
| 4 | `img/pkz/volei` | Imagem fictícia | Mulher agachada ensinando uma criança com uma bola de vôlei, numa quadra. | `/pkz`: card "Jogadora de Vôlei?" (seção de esportes) | `src/components/pkz/SecaoEsportes.jsx:10` (desenhada na linha 77) |
| 5 | `img/one-to-one/equipe` | Imagem fictícia | Quatro profissionais posando numa academia (três de uniforme e um de jaleco), com o letreiro "One To One Health & Fitness Center". | `/one-to-one`: imagem de destaque no topo (Hero)<br>`/`: faixa tripla do topo (decorativa) e card "Studio One To One" do ecossistema | `src/pages/PaginaOneToOne.jsx:71` (define a imagem do Hero; desenhada em `src/components/marca/Hero.jsx:50`)<br>`src/pages/Home.jsx:31` (dados; desenhada nas linhas 91 e 159) |
| 6 | `img/one-to-one/personal-training` | Imagem fictícia | Personal trainer orientando uma aluna numa máquina de musculação. | `/one-to-one`: card "Personal Training" (seção Soluções Exclusivas) | `src/components/one-to-one/SecaoServicos.jsx:6` (desenhada na linha 51) |
| 7 | `img/one-to-one/fisioterapia` | Imagem fictícia | Fisioterapeuta sorrindo, em pé, numa sala com maca e o letreiro "One To One Physiotherapy & Wellness". | `/one-to-one`: card "Fisioterapia" (seção Soluções Exclusivas) | `src/components/one-to-one/SecaoServicos.jsx:13` (desenhada na linha 51) |
| 8 | `img/one-to-one/nutricao` | Imagem fictícia | Consulta nutricional: nutricionista com tablet e um aluno sentados à mesa, com uma balança ao fundo. | `/one-to-one`: card "Nutricionista" (seção Soluções Exclusivas) | `src/components/one-to-one/SecaoServicos.jsx:20` (desenhada na linha 51) |
| 9 | `img/fisio/equipe` | Imagem fictícia | Fisioterapeuta orientando uma paciente num exercício com faixa elástica, numa clínica clara com janelas. | `/fisioterapia`: imagem de destaque no topo (Hero)<br>`/`: faixa tripla do topo (decorativa) e card "Fisioterapia" do ecossistema<br>Imagem de compartilhamento (`og:image`) da rota `/fisioterapia` | `src/pages/PaginaFisio.jsx:58` (define a imagem do Hero; desenhada em `src/components/marca/Hero.jsx:50`)<br>`src/pages/Home.jsx:40` (dados; desenhada nas linhas 91 e 159)<br>`src/data/seo.js:53` (`og:image`) |
| 10 | `img/fisio/atendimento` | Imagem fictícia | Close de uma fisioterapeuta de jaleco segurando o braço de uma paciente durante o atendimento. | `/fisioterapia`: seção de etapas do tratamento (ao lado da lista) | `src/components/fisio/SecaoTratamentos.jsx:95-96` |
| 11 | `img/portal/LandingPKZ` | Imagem fictícia | Menino fazendo exercício sobre discos coloridos de agilidade, com um treinador ao fundo, numa academia com os letreiros "Performance Elite Academy" e "Train Smart". | Imagem de compartilhamento (`og:image`) das rotas `/`, `/pkz`, `/pkz/aula-experimental`, `/privacidade`, que **não aparece na página** | `src/data/seo.js:20`, `:27`, `:34` e `:60` |
| 12 | `img/portal/LandingOneToOne` | Imagem fictícia | Homem fazendo supino numa máquina, com um treinador de tablet ao lado, numa sala com a frase "Centro de Treinamento de Alta Performance - Reação e Agilidade". | Imagem de compartilhamento (`og:image`) das rotas `/one-to-one`, `/one-to-one/aula-experimental`, que **não aparece na página** | `src/data/seo.js:40` e `:47` |

Todas ficam em `public/assets/img/<marca>/<nome>-<largura>.webp`. Os nomes das duas últimas começam com `Landing` porque vieram do portal da versão Vanilla. O tamanho em `srcSet` é montado por `src/utils/asset.js` (função `srcsetDe`).

## Imagens por página

| Rota | Arquivos do código | Imagens que aparecem na página | Imagem de compartilhamento (`og:image`) |
|---|---|---|---|
| `/` (Home) | `src/pages/Home.jsx` | `pkz/EquipePKZ`, `one-to-one/equipe` e `fisio/equipe`, cada uma duas vezes (faixa tripla do topo e cards do ecossistema) | `portal/LandingPKZ` |
| `/pkz` | `src/pages/PaginaPkz.jsx`, `src/components/pkz/SecaoEsportes.jsx` | `pkz/EquipePKZ` (2 vezes), `pkz/karate`, `pkz/JiuJitsu` e `pkz/volei` | `portal/LandingPKZ` |
| `/pkz/aula-experimental` | `src/pages/AulaExperimental.jsx` | nenhuma | `portal/LandingPKZ` |
| `/one-to-one` | `src/pages/PaginaOneToOne.jsx`, `src/components/one-to-one/SecaoServicos.jsx` | `one-to-one/equipe`, `one-to-one/personal-training`, `one-to-one/fisioterapia` e `one-to-one/nutricao` | `portal/LandingOneToOne` |
| `/one-to-one/aula-experimental` | `src/pages/AulaExperimental.jsx` | nenhuma | `portal/LandingOneToOne` |
| `/fisioterapia` | `src/pages/PaginaFisio.jsx`, `src/components/fisio/SecaoTratamentos.jsx` | `fisio/equipe` e `fisio/atendimento` | `fisio/equipe` |
| `/privacidade` | `src/pages/Privacidade.jsx` | nenhuma | `portal/LandingPKZ` |
| 404 | `src/pages/NaoEncontrada.jsx` | nenhuma | n/a |

O Hero (`src/components/marca/Hero.jsx`) é um componente compartilhado: ele recebe a imagem pela página e a desenha.

## Dados fictícios

Dados de exemplo ou provisórios que aparecem no site. Todos ficam em `src/data/marcas.js`, que é a fonte única de dados do site: trocando lá, o site inteiro é atualizado.

| # | Dado | Valor fictício | Onde está no código | Onde aparece no site |
|---|---|---|---|---|
| 1 | **Número de WhatsApp da PKZ Lab** | `5521000000000` (DDI 55 + DDD 21 + zeros) | `src/data/marcas.js:40` (comentário "Placeholder" na linha 39) | Botões e links de WhatsApp: janela "Fale Conosco" (`src/components/marca/ContatoModal.jsx:21`), botão do WhatsApp (`BotaoWhatsapp.jsx:9`), atalho flutuante (`AtalhosFlutuantes.jsx:29`), botão "Agendar avaliação" da Fisioterapia (`src/pages/PaginaFisio.jsx:57`) e o **envio do agendamento** (`src/components/agendamento/AgendamentoModal.jsx:75`) |
| 2 | **Número de WhatsApp da One To One** | `5521000000000` | `src/data/marcas.js:70` | Os mesmos botões e links do item 1, quando se está nas páginas da One To One |
| 3 | **Número de WhatsApp da Fisioterapia** | `5521000000000` | `src/data/marcas.js:103` | Os mesmos botões e links do item 1, quando se está na página da Fisioterapia |
| 4 | **Dias e horários de funcionamento** | 7 dias (Seg a Dom) e 16 horários por dia (de 07:00 a 22:00, de hora em hora), iguais nas duas marcas | `src/data/marcas.js:7-21` (comentário "Ajuste aos horários reais" na linha 6) | Faixa de números de `/pkz` (`src/pages/PaginaPkz.jsx:98-99`), de `/one-to-one` (`src/pages/PaginaOneToOne.jsx:94-95`) e da Home (`src/pages/Home.jsx:52`). Também são os **dias e horários da agenda** do agendamento (`src/components/agendamento/Agenda.jsx:23` e `:42`; `src/pages/AulaExperimental.jsx:18` e `:44`). Os números exibidos (7 dias e 16 horários) vêm desses dados. Na agenda, todo horário aparece como disponível. |
| 5 | **Marca Fisioterapia (provisória)** | Nome "Fisioterapia", textos, WhatsApp e Instagram são *placeholders*, e o Instagram está vazio (`null`) | `src/data/marcas.js:93-125` (comentário "PROVISÓRIO" na linha 94; Instagram na linha 106) | Página `/fisioterapia`, card "Fisioterapia" da Home e card "Conheça também". O rodapé e o FAQ escondem o Instagram enquanto ele estiver vazio |
| 6 | **Logo provisória da Fisioterapia** | `fisio-provisorio.svg` e `fisio-provisorio-branco.svg`: **não são logos oficiais** | `src/data/marcas.js:104-105` (arquivos em `public/assets/img/logos/`); também em `src/pages/Home.jsx:41`, `src/components/TransicaoPagina.jsx:19` e `src/components/portal/RodapePortal.jsx:22` | Cabeçalho, rodapé e FAQ da página `/fisioterapia`, card "Fisioterapia" da Home, rodapé da Home e cortina de troca de página |
| 7 | **Número de WhatsApp nos testes** | `5521000000000` (só como exemplo nos testes automáticos) | `src/utils/agendamento.test.js:18` e `:24-25` | Não aparece no site |

**Dados reais (não são fictícios):** o endereço "Av. Armando Lombardi, 949, Loja G, Barra da Tijuca, Rio de Janeiro" (`src/data/marcas.js:23-29`, também em `src/pages/Privacidade.jsx:40`) e os perfis de Instagram `@playmakerz_pkz` e `@studioonetoone` (`src/data/marcas.js:43` e `:73`). A Fisioterapia ainda não tem Instagram.

## Observações

* Na Home, as 3 imagens de equipe têm `alt=""` porque são decorativas. Nas demais páginas, todas as imagens visíveis têm texto alternativo.
* Algumas imagens contêm letreiros desenhados pela própria IA (por exemplo "One To One" e "PKZ" e as placas em japonês do dojo). As duas imagens de compartilhamento mostram letreiros de outras marcas fictícias ("Performance Elite Academy" e "CT").
* As 12 imagens são **idênticas** às da versão sem agendamento (mesmos arquivos). O que muda entre as versões são as rotas `/pkz/aula-experimental` e `/one-to-one/aula-experimental`, que só usam a imagem de compartilhamento.
