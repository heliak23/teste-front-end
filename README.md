# Teste Econverse: Vaga Desenvolvedor Front-End

> Projeto desenvolvido como solução para o teste técnico de Desenvolvedor Front-End da **Econverse**.

---

## 💻 Demonstração & Visão Geral

Aplicação e-commerce desenvolvida com **React**, **TypeScript** e **Sass (SCSS)**, reproduzindo com fidelidade pixel a pixel o layout proposto no Figma, incluindo vitrine de produtos consumindo API externa com carrossel/slider interativo e modal responsivo de detalhes do produto.

### ✨ Principais Funcionalidades

- **Header Completo e Semântico**:
  - Barra de garantias (Compra 100% segura, Frete grátis, Parcelamento).
  - Logo Econverse, barra de busca interativa e ícones de navegação (pedidos, favoritos, perfil e carrinho dinâmico).
  - Menu de navegação por categorias com destaque para ofertas e assinaturas.
- **Hero Banner Promocional**:
  - Banner de destaque com chamada para ação ("Ver produto") e rolagem suave até a vitrine.
- **Navegação por Categorias**:
  - Seletor de categorias com ícones SVG exclusivos vetorizados, efeitos de hover e estado ativo.
- **Vitrine de Produtos (Showcase)**:
  - Consumo dinâmico dos dados da API JSON da Econverse (`produtos.json`).
  - Carrossel com navegação fluida por setas (anterior/próximo) e suporte a responsividade (desktop, tablet e mobile).
  - Abas de filtros de categoria (`CELULAR`, `ACESSÓRIOS`, `TABLETS`, etc.).
  - Cards de produto com formatação de preço em Reais (BRL), cálculo de parcelas sem juros, tag de frete grátis e botão de compra.
- **Modal Interativo de Produto**:
  - Abertura ao clicar no card ou no botão "COMPRAR".
  - Exibição de foto em alta definição, título, preço formatado, descrição curta e link de detalhes.
  - Seletor de quantidade interativo (`-`, `01`, `+`).
  - Botão de compra no modal com feedback visual e atualização em tempo real do badge do carrinho.
  - Acessibilidade: fechamento por tecla `ESC`, clique no backdrop ou botão de fechar `X`, além de bloqueio de rolagem do body.
- **Banners de Parceiros & Seção de Marcas**:
  - Banners institucionais com chamadas ("CONFIRA") e carrossel de marcas parceiras.
- **Newsletter**:
  - Formulário completo com validação de campos (nome, e-mail e aceite dos termos) e mensagens de feedback.
- **Rodapé (Footer)**:
  - Links institucionais, ajuda, termos de uso, redes sociais e copyright.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** (v19) - Biblioteca para interfaces reativas baseadas em componentes.
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para maior robustez e previsibilidade.
- **[Vite](https://vitejs.dev/)** - Bundler e ambiente de desenvolvimento ultrarrápido.
- **[Sass / SCSS](https://sass-lang.com/)** - Pré-processador CSS para modularização, variáveis e mixins responsivos.
- **CSS Modules** - Escopo isolado de estilização por componente, prevenindo vazamentos de estilo.
- **100% CSS Customizado**: Nenhuma biblioteca de UI pronta utilizada (sem Bootstrap, Tailwind ou UI Frameworks), atendendo rigorosamente ao edital do teste.

---

## 📁 Estrutura do Projeto

```text
teste-front-end/
├── public/
│   ├── foto-iphone.png        # Imagem padrão de fallback dos produtos
│   ├── hero-banner.jpg        # Imagem de fundo do banner principal
│   ├── partner-banner.jpg     # Imagem dos banners de parceiros
│   └── produtos.json          # Fallback local da lista de produtos
├── src/
│   ├── assets/                # Ícones SVG personalizados vetorizados
│   ├── components/
│   │   ├── BrandsSection/     # Seção "Navigue por marcas"
│   │   ├── CategoryNav/       # Lista de ícones e categorias
│   │   ├── Footer/            # Rodapé institucional e links
│   │   ├── Header/            # Barra superior, busca e navegação
│   │   ├── HeroBanner/        # Banner principal de promoções
│   │   ├── Icons/             # Componentes SVG puros (ícones da interface)
│   │   ├── Newsletter/        # Formulário de captura com validação
│   │   ├── PartnerBanners/    # Banners duplos de parceiros
│   │   ├── ProductModal/      # Modal de detalhes e quantidade do produto
│   │   └── ProductShowcase/   # Vitrine, carrossel e cards de produtos
│   ├── hooks/
│   │   └── useProducts.ts     # Hook customizado para carga assíncrona
│   ├── services/
│   │   └── api.ts             # Cliente de dados com resiliência e fallbacks
│   ├── styles/
│   │   ├── _mixins.scss       # Mixins para responsividade e flexbox
│   │   ├── _reset.scss        # Reset padronizado de estilos
│   │   ├── _variables.scss    # Cores, fontes, espaçamentos e breakpoints
│   │   └── global.scss        # Estilos globais e fontes do projeto
│   ├── types/
│   │   └── product.ts         # Definições de tipos e interfaces TypeScript
│   ├── App.tsx                # Componente raiz da aplicação
│   ├── App.module.scss        # Estilos do layout base
│   └── main.tsx               # Ponto de entrada React DOM
├── index.html                 # Template HTML com meta tags SEO e Google Fonts
├── package.json               # Dependências e scripts de execução
├── tsconfig.json              # Configurações do TypeScript
└── vite.config.ts             # Configuração do Vite com proxy reverso
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada).
- Gerenciador de pacotes `npm` ou `yarn`.

### 1. Clonar o repositório
```bash
git clone https://github.com/heliak23/teste-front-end.git
cd teste-front-end
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Rodar em ambiente de desenvolvimento
```bash
npm run dev
```
O servidor será iniciado em: `http://localhost:3000` (ou porta indicada no terminal). Abra o navegador para visualizar a aplicação com Hot Module Replacement (HMR).

### 4. Testar e validar o código (Linting & Análise Estática)
```bash
npm test
# ou: npm run lint
```
Executa a validação estática de código com o **Oxlint**, assegurando conformidade de regras, tipagem TypeScript e boas práticas do React.

### 5. Compilar / Gerar build de produção
```bash
npm run build
```
Os arquivos otimizados e minificados serão gerados no diretório `dist/`.

### 6. Pré-visualizar o build de produção
```bash
npm run preview
```

---

## 🌐 Resiliência de Dados e API

A aplicação consome a API oficial fornecida:
`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`

Para garantir que o projeto funcione perfeitamente em qualquer ambiente de avaliação (mesmo sem conexão com a internet ou em navegadores com bloqueio restritivo de CORS em requisições de origens diferentes), implementamos uma estratégia em três camadas em [`src/services/api.ts`](src/services/api.ts):
1. **Proxy Reverso do Vite (`/api/...`)** em ambiente de desenvolvimento local;
2. **Requisição direta ao endpoint oficial da Econverse**;
3. **Fallback automático transparente para o arquivo JSON local** em caso de falha de rede ou CORS.

---

## 🔍 SEO e Acessibilidade (100% Otimizado)

- **Tags semânticas do HTML5**: (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) com links `<a>` rastreáveis para crawlers.
- **Meta Tags de SEO Completas**: Title comercial com proposta de valor, meta description otimizada, meta robots e URL canônica (`canonical`).
- **Open Graph & Twitter Cards**: Tags completas (`og:title`, `og:description`, `og:image`, `og:url`, `og:locale`, `twitter:card`, `twitter:title`, `twitter:image`) para pré-visualização rica em compartilhamentos sociais (WhatsApp, LinkedIn, Twitter/X).
- **Dados Estruturados (Schema.org / JSON-LD)**: Schemas `Organization`, `WebSite` (com `SearchAction` para busca no Google) e `ItemList`/`Product` (para geração de Rich Snippets e carrosséis nos resultados de pesquisa).
- **SEO Técnico & Rastreamento**: Arquivos [`robots.txt`](public/robots.txt) e [`sitemap.xml`](public/sitemap.xml) integrados na raiz pública para indexação eficiente por buscadores.
- **PWA & Mobile**: Arquivo [`manifest.webmanifest`](public/manifest.webmanifest) configurado com ícones vetoriais e `theme-color` corporativo.
- **Core Web Vitals & Performance**: Preload antecipado do banner Hero (`<link rel="preload">`) para otimizar LCP e dimensões explícitas em imagens para prevenir CLS (Cumulative Layout Shift).
- **Acessibilidade Completa**: Atributos `aria-label`, `aria-hidden` em ícones decorativos, suporte integral à navegação por teclado e fechamento de modal acessível com suporte à tecla `Escape`.

---

## 👨‍💻 Autor

Desenvolvido para o processo seletivo da **Econverse**.
