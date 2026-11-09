# PKZ Lab & Studio One To One - React

**Site das duas marcas refeito em React: um portal, duas identidades e agendamento de aula experimental pelo WhatsApp.**

**React 19 · React Router 7 · Vite 8 · CSS3 mobile first**

[Site publicado no Vercel](https://enzotrotto-ibmec.github.io/PFE-2026-2-Grupo-1-React/) · [Versão Vanilla (AC)](https://github.com/enzotrotto-ibmec/PFE-2026-2-Grupo-1-vanila)

---

## Sobre o projeto

A **PKZ Lab** (treino esportivo de alto rendimento) e o **Studio One To One** (personal training, fisioterapia e nutrição) dividem o mesmo endereço na Barra da Tijuca e contrataram nossa turma para reestruturar o site.

- **AP1:** documentação e protótipo.
- **AC:** implementação em HTML, CSS e JavaScript puro (Vanilla).
- **AP2 (este repositório):** a mesma experiência reconstruída em **React**, com componentes, props, estado e rotas.

O design, os textos, as imagens e o sistema de agendamento são os mesmos do Vanilla, mobile first e com menu hambúrguer. O que mudou foi a forma de construir: agora o site é uma **SPA** (*single page application*).

## Funcionalidades

- **Portal com halter arrastável:** arraste para a esquerda (PKZ) ou para a direita (One To One) e solte para entrar. Também funciona pelo teclado.
- **Duas identidades visuais:** tema escuro e esportivo na PKZ, tema claro e sofisticado na One To One.
- **Agendamento de aula experimental:** escolha do dia e do horário, formulário com máscaras de telefone e CPF, validação do CPF e envio do pedido pronto pelo WhatsApp.
- **Janela "Fale Conosco"** com mensagem personalizada para o WhatsApp.
- **Mapa sob demanda:** o Google Maps só carrega quando a pessoa pede.
- **Perguntas frequentes**, política de privacidade (LGPD) e página 404.
- **Acessibilidade:** navegação por teclado, atalho "Pular para o conteúdo", textos para leitores de tela e foco preso nas janelas.

## Requisitos da AP2

| Pedido do professor | Como foi atendido |
| --- | --- |
| Um único `index.html`; as páginas são componentes | Só existe o `index.html` da raiz; cada página fica em `src/pages/` |
| Componentes baseados no Vanilla | Cada bloco do Vanilla virou um componente em `src/components/` |
| Props | Os dados de cada marca descem por props: o mesmo `Hero`, `Faq` e `Rodape` servem às duas |
| `useState` | Menu hambúrguer, janelas, formulário de agendamento, mapa e halter do portal |
| Navegação com `BrowserRouter` | `BrowserRouter` em `main.jsx` e `Routes`/`Route` em `App.jsx` |
| Sem a tag `a` para navegação interna | Toda troca de página usa o componente `Link`; a tag `a` fica só para links externos |

## Rotas

| Endereço | Página |
| --- | --- |
| `/` | Portal (escolha da marca) |
| `/pkz` | Página da PKZ Lab |
| `/pkz/aula-experimental` | Agendamento da PKZ |
| `/one-to-one` | Página do Studio One To One |
| `/one-to-one/aula-experimental` | Agendamento da One To One |
| `/privacidade` | Política de Privacidade |
| qualquer outro | Página não encontrada (404) |

## Como rodar

Precisa do [Node.js](https://nodejs.org/) (versão LTS).

```bash
# 1. instalar as dependências (só na primeira vez)
npm install

# 2. abrir o servidor de desenvolvimento
npm run dev
```

Depois é só abrir o endereço que aparece no terminal. A página atualiza sozinha a cada arquivo salvo.

> **Por que não usar o Live Server?** O navegador não entende JSX nem os `import` do React sozinho. Quem traduz o código é o **Vite**, que já traz o próprio servidor.

Outros comandos:

```bash
npm run build    # gera a versão final na pasta dist/
npm run preview  # testa essa versão final no computador
```

## Estrutura de pastas

```
.
├── index.html            # o único HTML do projeto
├── vite.config.js        # configuração do Vite e nome do repositório no GitHub Pages
├── public/assets/        # imagens, logos e favicon
└── src/
    ├── main.jsx          # ponto de entrada (BrowserRouter)
    ├── App.jsx           # mapa de rotas (Routes e Route)
    ├── data/marcas.js    # dados das marcas: nomes, WhatsApp, horários, endereço e textos
    ├── pages/            # uma "página" = um componente
    ├── components/
    │   ├── marca/        # blocos das duas marcas (cabeçalho, rodapé, hero, FAQ...)
    │   ├── pkz/          # seções só da PKZ
    │   ├── one-to-one/   # seções só da One To One
    │   ├── agendamento/  # agenda e formulário da aula experimental
    │   └── portal/       # halter, painéis e aviso de redirecionamento
    ├── utils/            # funções de apoio (CPF, máscaras, rolagem, imagens)
    └── styles/           # CSS de cada identidade, vindo do Vanilla
```

## Decisões técnicas

- **Um tema por página.** As duas marcas usam as mesmas classes com cores diferentes. Para os temas não se misturarem, cada página carrega o próprio CSS só enquanto está na tela (componente `EstilosDaPagina`).
- **Dados num lugar só.** Nome, número do WhatsApp, horários e textos de cada marca ficam em `src/data/marcas.js`. Para trocar o WhatsApp de exemplo (`5521000000000`) pelo número real, basta mudar ali.
- **Janelas nativas.** As janelas de contato e de agendamento usam o elemento `dialog` do HTML, que já dá o fundo escuro, o foco preso e o fechamento com Esc.
- **GitHub Pages.** O build copia o `index.html` para `404.html`, para que links diretos como `/pkz` também abram o site.

## Próximos passos

Alguns comportamentos do Vanilla dependiam de acompanhar a rolagem da página, o que no React pede o hook `useEffect`, ainda não visto em aula:

- [x] Destacar no menu a seção que está na tela
- [x] Animar as seções quando aparecem na rolagem
- [x] Componente `ScrollToTop` para voltar ao topo ao trocar de página
- [x] Componentes vistos nas próximas aulas (acordeão, carrossel, galeria)

## Equipe

| Integrante |
| --- |
| Alexia Schmid |
| Bernardo Gomes |
| Bernardo Nemirovsky |
| Enzo Trotto |
| Gabriel Góis |
| Guilherme Macedo |
| João Pedro Ferreira |

## Disciplina

**Projeto Front-end** 
- Turma de terça-feira 
- Prof. Thiago Marcondes Santos 
- IBMEC · 2026.2

---

*Feito pelo Grupo 1 · PKZ Lab & Studio One To One*
