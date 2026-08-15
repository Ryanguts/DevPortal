// ==========================================
// 1. BANCO DE DADOS — LINGUAGENS (expandido)
// ==========================================
const linguagens = [
  {
    nome: "JavaScript",
    tag: "Web / Fullstack",
    categoria: "linguagem",
    desc: "A linguagem essencial da web moderna. Roda nativamente nos navegadores e nos servidores com Node.js.",
    detalhes: [
      "Frontend: React, Vue, Angular, Svelte",
      "Backend: Node.js, Express, NestJS",
      "Ecossistema gigante com NPM",
      "Essencial para qualquer desenvolvedor Web",
      "APIs: fetch nativo + bibliotecas como Axios para consumir REST e GraphQL"
    ]
  },
  {
    nome: "TypeScript",
    tag: "Web / Enterprise",
    categoria: "linguagem",
    desc: "Superset do JavaScript com tipagem estática que previne erros em tempo de compilação.",
    detalhes: [
      "Adotado por grandes empresas (Microsoft, Google)",
      "Facilita refatoração em grandes bases de código",
      "Excelente integração com IDEs",
      "Usado no Frontend e Backend",
      "API tipada: interfaces e tipos tornam contratos de API mais seguros"
    ]
  },
  {
    nome: "Python",
    tag: "Dados / IA / Backend",
    categoria: "linguagem",
    desc: "Sintaxe limpa e legível. Líder em Inteligência Artificial, Ciência de Dados e Automações.",
    detalhes: [
      "IA & ML: TensorFlow, PyTorch, Scikit-Learn",
      "Web: Django, FastAPI, Flask",
      "Automação, Scripts e Web Scraping",
      "Linguagem nº 1 para iniciantes",
      "APIs: FastAPI e Flask são referências para criar APIs REST modernas"
    ]
  },
  {
    nome: "Java",
    tag: "Backend / Enterprise",
    categoria: "linguagem",
    desc: "Linguagem corporativa sólida, orientada a objetos com o lema 'escreva uma vez, rode em qualquer lugar'.",
    detalhes: [
      "Framework Spring Boot domina o mercado backend",
      "Desenvolvimento Android legado e corporativo",
      "Alta performance e segurança de memória",
      "Usada por bancos e multinacionais",
      "APIs: Spring Web / Spring Boot para microsserviços e REST"
    ]
  },
  {
    nome: "C#",
    tag: "Microsoft / Games",
    categoria: "linguagem",
    desc: "Linguagem moderna desenvolvida pela Microsoft, amplamente utilizada em APIs e jogos com Unity.",
    detalhes: [
      "Motor de Jogos Unity (2D e 3D)",
      "Plataforma .NET Core para APIs ultra rápidas",
      "Aplicações Desktop e Nuvem (Azure)",
      "Tipagem forte e recursos modernos",
      "APIs: ASP.NET Core Minimal APIs e Web API"
    ]
  },
  {
    nome: "C++",
    tag: "Sistemas / Performance",
    categoria: "linguagem",
    desc: "Linguagem de baixíssimo nível com performance extrema e controle direto de memória.",
    detalhes: [
      "Motores de Jogos (Unreal Engine)",
      "Sistemas operacionais e drivers",
      "Sistemas embarcados e robótica",
      "Finanças de alta frequência (HFT)",
      "APIs: bindings nativos e bibliotecas de rede de alta performance"
    ]
  },
  {
    nome: "Go (Golang)",
    tag: "Backend / Cloud Native",
    categoria: "linguagem",
    desc: "Criada pelo Google para ser simples, rápida e altamente concorrente.",
    detalhes: [
      "Padrão da indústria para Cloud & DevOps",
      "Docker e Kubernetes foram escritos em Go",
      "Excelente suporte a concorrência com Goroutines",
      "Compila para binários únicos superleves",
      "APIs: net/http nativo + frameworks como Gin e Echo"
    ]
  },
  {
    nome: "Rust",
    tag: "Sistemas / Alta Segurança",
    categoria: "linguagem",
    desc: "Garante segurança de memória sem necessitar de Garbage Collector. Muito amada pelos devs.",
    detalhes: [
      "Substituta moderna para C/C++ em sistemas críticos",
      "WebAssembly (WASM) no navegador",
      "Infraestrutura de redes e blockchain",
      "Inclusa no núcleo do Kernel Linux",
      "APIs: frameworks como Actix e Axum para backends seguros"
    ]
  },
  {
    nome: "PHP",
    tag: "Web Backend",
    categoria: "linguagem",
    desc: "Alimenta mais de 70% da web. Passou por uma grande modernização nas versões 8+.",
    detalhes: [
      "Framework Laravel lidera o desenvolvimento moderno",
      "WordPress e e-commerces (Magento/WooCommerce)",
      "Hospedagem simples e barata",
      "Grande oferta de vagas no mercado",
      "APIs: Laravel Sanctum / Passport e Slim Framework"
    ]
  },
  {
    nome: "Kotlin",
    tag: "Mobile / Android",
    categoria: "linguagem",
    desc: "Linguagem oficial do Google para desenvolvimento Android nativo. Interoperável com Java.",
    detalhes: [
      "Desenvolvimento Android moderno e conciso",
      "Kotlin Multiplatform (KMP) para iOS e Web",
      "Sintaxe expressiva que evita NullPointerExceptions",
      "Usada também no backend com Spring",
      "APIs: Ktor e integração com Retrofit no mobile"
    ]
  },
  {
    nome: "Swift",
    tag: "Mobile / iOS",
    categoria: "linguagem",
    desc: "Linguagem criada pela Apple para desenvolvimento nos ecossistemas iOS, macOS e watchOS.",
    detalhes: [
      "Framework intuitivo SwiftUI para interfaces",
      "Alta performance e sintaxe limpa",
      "Acesso direto às APIs de hardware da Apple",
      "Essencial para desenvolvedores Apple",
      "APIs: URLSession + Combine / async-await nativos"
    ]
  },
  {
    nome: "Ruby",
    tag: "Web / Startups",
    categoria: "linguagem",
    desc: "Focada na produtividade e felicidade do desenvolvedor. Famosa pelo framework Ruby on Rails.",
    detalhes: [
      "Desenvolvimento ágil em startups (MVPs)",
      "Filosofia 'Convention over Configuration'",
      "Plataformas como GitHub e Shopify usam Ruby",
      "Comunidade acolhedora e ativa",
      "APIs: Rails API mode e Grape"
    ]
  },
  {
    nome: "SQL",
    tag: "Bancos de Dados",
    categoria: "dados",
    desc: "Linguagem padrão para consulta e manipulação de dados em Bancos Relacionais.",
    detalhes: [
      "PostgreSQL, MySQL, SQL Server, Oracle",
      "Essencial para Backend e Data Engineering",
      "Consultas analíticas complexas (JOINs, Aggregations)",
      "Indispensável em qualquer stack de tecnologia",
      "API de dados: a forma mais comum de expor dados via APIs REST/GraphQL"
    ]
  },
  {
    nome: "Dart",
    tag: "Mobile / Cross-platform",
    categoria: "linguagem",
    desc: "Criada pelo Google, otimizada para a criação de interfaces de usuário com o Flutter.",
    detalhes: [
      "Cria apps iOS e Android com um único código",
      "Renderização em tempo real ultra fluida",
      "Suporte a Hot Reload",
      "Crescendo rapidamente no mercado Mobile",
      "APIs: pacote http e Dio para consumo de serviços"
    ]
  },
  {
    nome: "R",
    tag: "Estatística / Ciência de Dados",
    categoria: "linguagem",
    desc: "Especializada em computação estatística, análise quantitativa e gráficos acadêmicos.",
    detalhes: [
      "Pesquisa científica e bioinformática",
      "Manipulação avançada de dados com Tidyverse",
      "Geração de relatórios com RMarkdown e Shiny",
      "Fortíssima na academia",
      "APIs: plumber para expor modelos e análises como serviços"
    ]
  },
  {
    nome: "Assembly",
    tag: "Hardware / Baixo Nível",
    categoria: "linguagem",
    desc: "Representação direta das instruções do processador. O nível mais baixo legível por humanos.",
    detalhes: [
      "Engenharia reversa e análise de Malware",
      "Firmwares de microcontroladores",
      "Otimização extrema em chips específicos",
      "Compreensão profunda de arquitetura de computadores"
    ]
  },
  {
    nome: "HTML5 & CSS3",
    tag: "Fundamento Web",
    categoria: "web",
    desc: "A estrutura de marcação e estilização que constrói a camada visual de toda a internet.",
    detalhes: [
      "Layouts Responsivos (Flexbox & CSS Grid)",
      "Animações e Variáveis CSS (Custom Properties)",
      "Acessibilidade Web (ARIA)",
      "Base obrigatória para qualquer Front-end",
      "Não possui lógica de programação — complementa JS/TS"
    ]
  },
  // —— Novas linguagens de programação ——
  {
    nome: "Julia",
    tag: "Científico / Performance",
    categoria: "linguagem",
    desc: "Linguagem de alto desempenho para computação científica, combinando velocidade de C com produtividade de Python.",
    detalhes: [
      "Excelente para simulações numéricas e ML científico",
      "Sintaxe amigável e tipagem opcional",
      "Pacotes como Flux.jl para deep learning",
      "Usada em pesquisa e finanças quantitativas"
    ]
  },
  {
    nome: "Scala",
    tag: "Big Data / JVM",
    categoria: "linguagem",
    desc: "Combina programação orientada a objetos e funcional sobre a JVM. Base do Apache Spark.",
    detalhes: [
      "Spark e ecossistema de Big Data",
      "Concorrência com Akka",
      "Interoperável com Java",
      "Usada em empresas de dados em escala"
    ]
  },
  {
    nome: "Elixir",
    tag: "Backend / Concorrência",
    categoria: "linguagem",
    desc: "Rodando sobre a BEAM (Erlang), é feita para sistemas distribuídos, tolerantes a falhas e altamente concorrentes.",
    detalhes: [
      "Framework Phoenix para web em tempo real",
      "Ideal para chat, IoT e telecomunicações",
      "Fault-tolerance nativa (let it crash)",
      "Sintaxe inspirada em Ruby"
    ]
  },
  {
    nome: "Lua",
    tag: "Embedded / Games",
    categoria: "linguagem",
    desc: "Linguagem leve e embutível, muito usada em jogos (Roblox, World of Warcraft) e sistemas embarcados.",
    detalhes: [
      "Scripting de jogos e engines",
      "Nginx + OpenResty",
      "Extensão de aplicações em C",
      "Sintaxe simples e footprint mínimo"
    ]
  },
  {
    nome: "Haskell",
    tag: "Funcional / Academia",
    categoria: "linguagem",
    desc: "Linguagem puramente funcional com tipagem estática forte. Influencia muitas outras linguagens modernas.",
    detalhes: [
      "Excelente para raciocínio matemático e correção",
      "Usada em finanças e compiladores",
      "Monads e efeito controlado",
      "Base teórica sólida"
    ]
  },
  {
    nome: "Zig",
    tag: "Sistemas / Alternativa a C",
    categoria: "linguagem",
    desc: "Linguagem de sistemas moderna focada em robustez, clareza e interoperabilidade com C.",
    detalhes: [
      "Sem garbage collector e sem hidden control flow",
      "Excelente para toolchains e firmware",
      "Crescente comunidade open-source",
      "Compilador capaz de cross-compile nativamente"
    ]
  },
  {
    nome: "Nim",
    tag: "Sistemas / Produtividade",
    categoria: "linguagem",
    desc: "Sintaxe Python-like com performance próxima de C. Gera código C, C++ ou JavaScript.",
    detalhes: [
      "Metaprogramação poderosa",
      "Útil para CLIs, jogos e backends",
      "Compila para vários alvos",
      "Comunidade pequena porém ativa"
    ]
  },
  {
    nome: "Perl",
    tag: "Scripting / Texto",
    categoria: "linguagem",
    desc: "Clássica em manipulação de texto, administração de sistemas e bioinformática.",
    detalhes: [
      "Expressões regulares poderosas",
      "CPAN (enorme repositório de módulos)",
      "Ainda presente em legado e pipelines de dados",
      "Útil para one-liners e automações"
    ]
  },
  {
    nome: "Bash / Shell",
    tag: "Scripting / DevOps",
    categoria: "linguagem",
    desc: "Linguagem de script do terminal Unix/Linux. Essencial para automação e DevOps.",
    detalhes: [
      "Automação de servidores e CI/CD",
      "Pipelines e orquestração de comandos",
      "Presente em praticamente todo ambiente Linux",
      "Base para quem trabalha com Cloud e SRE"
    ]
  },
  // —— Mais fundamentos web ——
  {
    nome: "HTML",
    tag: "Marcação Web",
    categoria: "web",
    desc: "Linguagem de marcação que define a estrutura e o significado do conteúdo de uma página.",
    detalhes: [
      "Elementos semânticos (header, main, article…)",
      "Formulários, tabelas e mídia",
      "Acessibilidade e SEO começam aqui",
      "Não executa lógica — apenas estrutura"
    ]
  },
  {
    nome: "CSS",
    tag: "Estilização Web",
    categoria: "web",
    desc: "Linguagem de folhas de estilo que controla layout, cores, tipografia e responsividade.",
    detalhes: [
      "Flexbox e CSS Grid para layouts modernos",
      "Variáveis CSS, animações e transitions",
      "Media queries e design responsivo",
      "Pré-processadores (Sass) e metodologias (BEM)"
    ]
  },
  {
    nome: "Sass / SCSS",
    tag: "Pré-processador CSS",
    categoria: "web",
    desc: "Extensão do CSS com variáveis, nesting, mixins e funções — facilita folhas de estilo grandes.",
    detalhes: [
      "Organização de projetos front-end",
      "Compila para CSS puro",
      "Ainda amplamente usado com frameworks",
      "Complementa HTML e JavaScript"
    ]
  },
  {
    nome: "WebAssembly (WASM)",
    tag: "Performance no Browser",
    categoria: "web",
    desc: "Formato binário que permite rodar código de alto desempenho (C, C++, Rust…) dentro do navegador.",
    detalhes: [
      "Jogos e editores pesados no browser",
      "Complementa JavaScript em pontos críticos",
      "Segurança por sandbox",
      "Usado por Figma, AutoCAD web e engines"
    ]
  },
  // —— Mais consulta a dados ——
  {
    nome: "GraphQL",
    tag: "Consulta de Dados / API",
    categoria: "dados",
    desc: "Linguagem de consulta e runtime para APIs. O cliente pede exatamente os campos que precisa.",
    detalhes: [
      "Alternativa moderna ao REST em muitos cenários",
      "Schema tipado e introspecção",
      "Apollo, Relay e Hasura são populares",
      "Excelente para apps mobile e front-ends complexos",
      "API: GraphQL é em si uma especificação de API"
    ]
  },
  {
    nome: "NoSQL Query (MongoDB)",
    tag: "Bancos Não-Relacionais",
    categoria: "dados",
    desc: "Consultas orientadas a documentos (JSON-like) usadas em MongoDB e bancos similares.",
    detalhes: [
      "Flexibilidade de schema",
      "Agregações poderosas (pipeline)",
      "Ideal para dados semi-estruturados",
      "Comum em startups e backends Node.js"
    ]
  },
  {
    nome: "Cypher",
    tag: "Grafos / Neo4j",
    categoria: "dados",
    desc: "Linguagem de consulta para bancos de grafos (Neo4j). Expressa relações de forma natural.",
    detalhes: [
      "Redes sociais, recomendações e fraudes",
      "MATCH e padrões de caminho",
      "Complementa SQL em cenários de relações complexas"
    ]
  },
  {
    nome: "SPARQL",
    tag: "Web Semântica",
    categoria: "dados",
    desc: "Linguagem de consulta para dados RDF e triplestores — base da Web Semântica e Linked Data.",
    detalhes: [
      "Usada em datasets governamentais e científicos",
      "Consultas sobre grafos de conhecimento",
      "Padrão W3C"
    ]
  },
  // —— Mais linguagens ——
  {
    nome: "Solidity",
    tag: "Blockchain / Smart Contracts",
    categoria: "linguagem",
    desc: "Linguagem orientada a contratos para a Ethereum e EVM-compatible chains.",
    detalhes: [
      "Smart contracts e dApps",
      "Padrão de facto em Web3",
      "Ferramentas: Hardhat, Foundry, Remix",
      "Atenção especial a segurança e gas"
    ]
  },
  {
    nome: "C",
    tag: "Sistemas / Embarcados",
    categoria: "linguagem",
    desc: "A linguagem que moldou sistemas operacionais, embutidos e praticamente tudo de baixo nível moderno.",
    detalhes: [
      "Kernels (Linux), firmwares e IoT",
      "Base de C++, Objective-C e muitos runtimes",
      "Controle total de memória e hardware",
      "Ainda essencial em embarcados e performance crítica"
    ]
  },
  {
    nome: "Objective-C",
    tag: "Apple Legado",
    categoria: "linguagem",
    desc: "Linguagem histórica do ecossistema Apple, ainda presente em bases legadas de iOS/macOS.",
    detalhes: [
      "Interoperável com Swift",
      "Muitos frameworks Apple ainda em Obj-C",
      "Runtime dinâmico e messaging",
      "Útil para manter código legado Apple"
    ]
  },
  {
    nome: "Groovy",
    tag: "JVM / Scripting",
    categoria: "linguagem",
    desc: "Linguagem dinâmica na JVM, famosa pelo Gradle e por scripts concisos em cima de Java.",
    detalhes: [
      "DSL do Gradle",
      "Jenkins pipelines",
      "Sintaxe flexível sobre a JVM",
      "Boa para automação em times Java"
    ]
  },
  {
    nome: "Clojure",
    tag: "Funcional / JVM",
    categoria: "linguagem",
    desc: "Lisp moderno na JVM, imutabilidade por padrão e ótimo para concorrência.",
    detalhes: [
      "REPL-driven development",
      "Dados imutáveis e STM",
      "Usada em backends e data pipelines",
      "Ecossistema JVM disponível"
    ]
  },
  {
    nome: "F#",
    tag: "Funcional / .NET",
    categoria: "linguagem",
    desc: "Linguagem funcional-first no ecossistema .NET, com tipagem forte e interoperabilidade com C#.",
    detalhes: [
      "Data science e finanças no .NET",
      "Type providers",
      "Concisa para pipelines de dados",
      "Roda em .NET Core / Azure"
    ]
  },
  {
    nome: "Crystal",
    tag: "Sistemas / Sintaxe Ruby",
    categoria: "linguagem",
    desc: "Sintaxe inspirada em Ruby com tipagem estática e compilação para código nativo rápido.",
    detalhes: [
      "Performance próxima de C",
      "Sintaxe agradável para quem veio de Ruby",
      "Bom para CLIs e serviços",
      "Comunidade menor, mas entusiasta"
    ]
  },
  {
    nome: "V",
    tag: "Sistemas / Simplicidade",
    categoria: "linguagem",
    desc: "Linguagem de sistemas simples, rápida de compilar, inspirada em Go e Oberon.",
    detalhes: [
      "Compilação muito rápida",
      "Sintaxe minimalista",
      "Foco em segurança e simplicidade",
      "Ainda em evolução ativa"
    ]
  },
  {
    nome: "COBOL",
    tag: "Legado / Mainframe",
    categoria: "linguagem",
    desc: "Linguagem clássica de negócios ainda rodando em mainframes bancários e governamentais.",
    detalhes: [
      "Sistemas financeiros legados",
      "Alta demanda de manutenção",
      "Processamento batch massivo",
      "Mercado nichado e bem pago"
    ]
  },
  {
    nome: "MATLAB",
    tag: "Científico / Engenharia",
    categoria: "linguagem",
    desc: "Ambiente e linguagem padrão em engenharia, controle, processamento de sinais e protótipos numéricos.",
    detalhes: [
      "Toolboxes especializados",
      "Simulink para sistemas dinâmicos",
      "Fortíssima na academia e indústria",
      "Alternativas open-source: Octave, Python+NumPy"
    ]
  },
  {
    nome: "PowerShell",
    tag: "Automação / Windows",
    categoria: "linguagem",
    desc: "Shell e linguagem de automação da Microsoft, orientada a objetos e multiplataforma (.NET).",
    detalhes: [
      "Administração Windows e Azure",
      "Pipelines de objetos (não só texto)",
      "Disponível também no Linux/macOS",
      "Essencial para DevOps em ambientes Microsoft"
    ]
  },
  {
    nome: "Tailwind CSS",
    tag: "Utility-first CSS",
    categoria: "web",
    desc: "Framework utility-first que acelera a estilização com classes compostas diretamente no HTML.",
    detalhes: [
      "Produtividade alta em UI",
      "Design system via config",
      "Muito usado com React/Vue/Svelte",
      "Complementa (não substitui) o domínio de CSS"
    ]
  },
  {
    nome: "Markdown",
    tag: "Documentação",
    categoria: "web",
    desc: "Linguagem de marcação leve para documentação, README, blogs e notas técnicas.",
    detalhes: [
      "Padrão de documentação open-source",
      "Renderizado em GitHub, Notion, etc.",
      "Base de static site generators (Hugo, Jekyll)",
      "Essencial para qualquer dev"
    ]
  },
  {
    nome: "JSON / YAML",
    tag: "Dados / Config",
    categoria: "dados",
    desc: "Formatos de dados e configuração onipresentes em APIs, DevOps e arquivos de projeto.",
    detalhes: [
      "JSON: payload de APIs REST",
      "YAML: Kubernetes, CI/CD, Ansible",
      "Human-readable e machine-friendly",
      "Todo dev fullstack/DevOps precisa ler e escrever ambos"
    ]
  },
  {
    nome: "PromQL",
    tag: "Observabilidade",
    categoria: "dados",
    desc: "Linguagem de consulta do Prometheus para métricas de séries temporais.",
    detalhes: [
      "Alertas e dashboards (Grafana)",
      "Rate, increase, histogram_quantile",
      "Base da observabilidade cloud-native",
      "Par com Loki (LogQL) e Tempo"
    ]
  }
];

// ==========================================
// 2. BANCO DE DADOS — ÁREAS DE CARREIRA (expandido)
// ==========================================
const areas = [
  {
    nome: "Desenvolvimento Web (Fullstack)",
    desc: "Construção de sites, portais e sistemas web modernos abrangendo cliente e servidor.",
    langs: ["JavaScript", "TypeScript", "HTML5 & CSS3", "HTML", "CSS", "Python", "PHP", "SQL", "GraphQL"]
  },
  {
    nome: "Inteligência Artificial & Ciência de Dados",
    desc: "Extração de insights de dados massivos, criação de LLMs e modelos preditivos.",
    langs: ["Python", "R", "SQL", "Julia", "Scala", "C++"]
  },
  {
    nome: "Desenvolvimento Mobile",
    desc: "Criação de aplicativos nativos ou híbridos para smartphones e tablets.",
    langs: ["Kotlin", "Swift", "Dart", "JavaScript", "TypeScript"]
  },
  {
    nome: "Backend & Engenharia de APIs",
    desc: "Arquitetura de servidores, regras de negócio, microsserviços e integração de bancos.",
    langs: ["Java", "Go (Golang)", "C#", "Python", "Rust", "Node.js (JS/TS)", "SQL", "GraphQL", "Elixir"]
  },
  {
    nome: "Cibersegurança & Ethical Hacking",
    desc: "Proteção de infraestruturas, testes de invasão (pentest) e auditoria de código.",
    langs: ["Python", "C++", "Assembly", "Bash / Shell", "SQL", "Rust"]
  },
  {
    nome: "DevOps, SRE & Cloud Computing",
    desc: "Automação de deploys, pipelines de CI/CD e gerenciamento de servidores na nuvem.",
    langs: ["Go (Golang)", "Python", "Bash / Shell", "YAML", "Terraform"]
  },
  {
    nome: "Desenvolvimento de Jogos (GameDev)",
    desc: "Criação de jogos 2D/3D, simulações físicas e motores gráficos.",
    langs: ["C#", "C++", "Lua", "Rust", "GDScript"]
  },
  {
    nome: "UI/UX & Design de Produto",
    desc: "Foco na experiência do usuário, arquitetura de informação e prototipagem visual.",
    langs: ["HTML", "CSS", "Sass / SCSS", "Figma", "JavaScript"]
  },
  {
    nome: "Sistemas Embarcados & IoT",
    desc: "Programação de hardware, dispositivos inteligentes, robótica e sensores.",
    langs: ["C", "C++", "Assembly", "Rust", "Python", "Zig"]
  },
  // —— Novas áreas ——
  {
    nome: "Data Engineering",
    desc: "Construção de pipelines, data lakes/warehouses e infraestrutura que alimenta análise e ML.",
    langs: ["Python", "SQL", "Scala", "Spark", "Airflow", "Go (Golang)"]
  },
  {
    nome: "QA, Testes & Qualidade de Software",
    desc: "Garantia de qualidade por meio de testes manuais, automatizados e cultura de qualidade.",
    langs: ["JavaScript", "Python", "Java", "TypeScript", "Selenium / Playwright"]
  },
  {
    nome: "Blockchain & Web3",
    desc: "Smart contracts, dApps, protocolos descentralizados e infraestrutura blockchain.",
    langs: ["Solidity", "Rust", "JavaScript", "Go (Golang)", "Python"]
  },
  {
    nome: "Frontend Especializado",
    desc: "Foco profundo em interfaces, performance no browser, acessibilidade e design systems.",
    langs: ["JavaScript", "TypeScript", "HTML", "CSS", "Sass / SCSS", "WebAssembly (WASM)"]
  },
  {
    nome: "Engenharia de Plataforma / Platform Engineering",
    desc: "Ferramentas internas, developer experience e plataformas self-service para times de produto.",
    langs: ["Go (Golang)", "Python", "TypeScript", "Kubernetes", "Terraform"]
  },
  {
    nome: "Observabilidade & Site Reliability",
    desc: "Monitoramento, tracing, alertas e confiabilidade de sistemas em produção.",
    langs: ["Go (Golang)", "Python", "PromQL", "Bash / Shell"]
  },
  {
    nome: "Arquitetura de Software",
    desc: "Desenho de sistemas, trade-offs, padrões e decisões técnicas de longo prazo.",
    langs: ["Qualquer stack", "C4 Model", "DDD", "Event-Driven"]
  },
  {
    nome: "Machine Learning Engineering",
    desc: "Colocar modelos em produção: serving, monitoramento de drift, feature stores e MLOps.",
    langs: ["Python", "SQL", "Docker", "Kubernetes", "Go (Golang)"]
  },
  {
    nome: "Desenvolvimento Low-Code / No-Code",
    desc: "Entrega rápida com plataformas visuais, automações e extensões quando o código tradicional não é necessário.",
    langs: ["JavaScript", "SQL", "APIs", "Power Platform / Bubble"]
  },
  {
    nome: "ERP & Sistemas Corporativos",
    desc: "Customização e integração de ERPs (SAP, TOTVS, Oracle) e sistemas de gestão empresarial.",
    langs: ["ABAP", "Java", "C#", "SQL", "Python"]
  },
  {
    nome: "Realidade Aumentada / Virtual (AR/VR)",
    desc: "Experiências imersivas para jogos, treinamento, varejo e indústria.",
    langs: ["C# (Unity)", "C++", "JavaScript (WebXR)", "Swift"]
  },
  {
    nome: "Engenharia de Dados em Tempo Real",
    desc: "Streaming, event buses e processamento contínuo (Kafka, Flink, Pulsar).",
    langs: ["Java", "Scala", "Python", "Go (Golang)", "SQL"]
  },
  {
    nome: "Acessibilidade Digital",
    desc: "Tornar produtos usáveis por todas as pessoas — WCAG, leitores de tela e design inclusivo.",
    langs: ["HTML", "CSS", "JavaScript", "ARIA", "Testes manuais"]
  }
];

// ==========================================
// 3. BANCO DE DADOS — LÓGICA DE PROGRAMAÇÃO (mantido)
// ==========================================
const conceitosLogica = [
  {
    nome: "Sequência",
    icone: "🧩",
    desc: "As instruções são executadas em ordem, uma após a outra, de cima para baixo.",
    exemplo: "INÍCIO\n  imprimir \"Passo 1\"\n  imprimir \"Passo 2\"\nFIM"
  },
  {
    nome: "Variáveis e Tipos",
    icone: "📦",
    desc: "'Caixinhas' que guardam dados na memória: números, textos, valores verdadeiro/falso.",
    exemplo: "idade = 25\nnome = \"Ana\"\nativo = verdadeiro"
  },
  {
    nome: "Condicionais (Decisão)",
    icone: "🔀",
    desc: "Permitem que o programa tome decisões diferentes dependendo de uma condição.",
    exemplo: "SE idade >= 18 ENTÃO\n  imprimir \"Maior de idade\"\nSENÃO\n  imprimir \"Menor de idade\"\nFIM SE"
  },
  {
    nome: "Repetição (Loops)",
    icone: "🔁",
    desc: "Repetem um bloco de código várias vezes, sem precisar reescrevê-lo.",
    exemplo: "PARA i DE 1 ATÉ 5 FAÇA\n  imprimir i\nFIM PARA"
  },
  {
    nome: "Funções",
    icone: "🛠️",
    desc: "Blocos de lógica reutilizáveis que recebem entradas e podem devolver um resultado.",
    exemplo: "FUNÇÃO somar(a, b)\n  RETORNE a + b\nFIM FUNÇÃO"
  },
  {
    nome: "Estruturas de Dados",
    icone: "🗂️",
    desc: "Formas de organizar coleções de dados, como listas, vetores, pilhas e filas.",
    exemplo: "frutas = [\"maçã\", \"banana\", \"uva\"]\nimprimir frutas[0]"
  }
];

const desafioLogica = [
  {
    pergunta: "Qual estrutura você usa para repetir uma ação várias vezes sem escrever o mesmo código de novo?",
    opcoes: ["Condicional", "Repetição (Loop)", "Variável", "Função"],
    correta: 1,
    explicacao: "Estruturas de repetição (como PARA e ENQUANTO) existem exatamente para isso: executar um bloco de código várias vezes sem duplicar linhas."
  },
  {
    pergunta: "O que uma estrutura condicional (SE/SENÃO) permite que o programa faça?",
    opcoes: ["Guardar um valor", "Repetir uma ação", "Tomar decisões com base em uma condição", "Organizar uma lista"],
    correta: 2,
    explicacao: "Condicionais avaliam uma condição (verdadeira ou falsa) e direcionam o programa para caminhos diferentes de acordo com o resultado."
  },
  {
    pergunta: "Em pseudocódigo, o que representa a linha 'idade = 25'?",
    opcoes: ["Uma função", "Uma condicional", "A atribuição de um valor a uma variável", "Um laço de repetição"],
    correta: 2,
    explicacao: "O sinal de igual aqui não é uma comparação matemática — é uma atribuição: o valor 25 está sendo guardado na variável 'idade'."
  },
  {
    pergunta: "Para que servem as funções na programação?",
    opcoes: ["Apenas para deixar o código bonito", "Para agrupar lógica reutilizável que pode ser chamada várias vezes", "Para armazenar apenas números", "Para conectar com a internet"],
    correta: 1,
    explicacao: "Funções evitam repetição de código: você escreve a lógica uma vez e reutiliza sempre que precisar, passando entradas diferentes."
  }
];

const cursosLogica = [
  {
    nome: "Discover",
    plataforma: "Rocketseat",
    tipo: "Gratuito",
    foco: "Fundamentos + HTML, CSS e JavaScript",
    desc: "Trilha gratuita e completa para quem nunca programou, com certificado e apoio de uma grande comunidade de devs.",
    link: "https://www.rocketseat.com.br/discover"
  },
  {
    nome: "Lógica de Programação",
    plataforma: "Escola Virtual (Fundação Bradesco)",
    tipo: "Gratuito",
    foco: "Fundamentos de lógica",
    desc: "Curso 100% gratuito e com certificado, focado especificamente em lógica de programação para iniciantes.",
    link: "https://ev.org.br"
  },
  {
    nome: "Curso em Vídeo",
    plataforma: "Gustavo Guanabara",
    tipo: "Gratuito",
    foco: "Lógica, Python e desenvolvimento web",
    desc: "Um dos cursos em vídeo mais tradicionais e queridos do Brasil, com aulas gratuitas de lógica e diversas linguagens.",
    link: "https://www.cursoemvideo.com"
  },
  {
    nome: "CS50: Introduction to Computer Science",
    plataforma: "Harvard (edX)",
    tipo: "Gratuito",
    foco: "Fundamentos de Ciência da Computação",
    desc: "O curso introdutório mais premiado do mundo, com legendas em português. Mais denso, ótimo para uma base sólida.",
    link: "https://cs50.harvard.edu/x/"
  },
  {
    nome: "Curso de Lógica de Programação",
    plataforma: "Trybe",
    tipo: "Gratuito",
    foco: "Fundamentos sem pré-requisitos",
    desc: "Curso gratuito e estruturado de uma bootcamp brasileira conhecida, pensado para quem está começando do zero.",
    link: "https://www.betrybe.com/cursos/logica-de-programacao"
  },
  {
    nome: "Currículo de Programação",
    plataforma: "freeCodeCamp",
    tipo: "Gratuito",
    foco: "Prática com desafios de código",
    desc: "Mais de 3.000 horas de conteúdo gratuito com exercícios práticos — ótimo para fixar lógica programando de verdade.",
    link: "https://www.freecodecamp.org"
  },
  {
    nome: "Curso gratuito de Lógica de Programação",
    plataforma: "Asimov Academy (via Udemy)",
    tipo: "Gratuito",
    foco: "Exemplos práticos do dia a dia",
    desc: "Curso introdutório com exemplos simples e cotidianos para quem está dando os primeiros passos.",
    link: "https://www.udemy.com/course/curso-gratuito-de-logica-de-programacao/"
  },
  {
    nome: "Formação Programação Completa",
    plataforma: "Alura",
    tipo: "Pago",
    foco: "Trilha completa e guiada",
    desc: "Uma das maiores plataformas de ensino técnico do Brasil, com trilhas guiadas e suporte — ótima opção paga para ir além do básico.",
    link: "https://www.alura.com.br"
  },
  {
    nome: "Lógica de Programação Essencial",
    plataforma: "Udemy (Nelio Alves / diversos)",
    tipo: "Pago",
    foco: "Lógica + exercícios",
    desc: "Vários cursos pagos acessíveis na Udemy com foco em lógica, algoritmos e primeira linguagem (C, Java ou Python).",
    link: "https://www.udemy.com/courses/search/?q=logica%20de%20programacao"
  },
  {
    nome: "Fundamentos de Programação",
    plataforma: "Coursera",
    tipo: "Pago",
    foco: "Universidades internacionais",
    desc: "Cursos de universidades (Duke, Michigan, etc.) sobre pensamento computacional e lógica, com certificado opcional pago.",
    link: "https://www.coursera.org"
  },
  {
    nome: "Introdução à Ciência da Computação com Python",
    plataforma: "USP (Coursera)",
    tipo: "Gratuito",
    foco: "Python + lógica pela USP",
    desc: "Curso clássico da USP no Coursera: grátis para assistir, certificado opcional. Excelente para lógica aplicada em Python.",
    link: "https://www.coursera.org/learn/ciencia-computacao-python-conceitos"
  },
  {
    nome: "Programação descomplicada",
    plataforma: "YouTube / UFABC e canais BR",
    tipo: "Gratuito",
    foco: "Vídeo-aulas abertas",
    desc: "Playlists gratuitas de universidades e canais brasileiros cobrindo algoritmos, estruturas e lógica do zero.",
    link: "https://www.youtube.com/results?search_query=l%C3%B3gica+de+programa%C3%A7%C3%A3o+curso+completo"
  },
  {
    nome: "Bootcamp Full Stack (lógica inclusa)",
    plataforma: "Rocketseat / Explorer",
    tipo: "Pago",
    foco: "Trilha guiada com comunidade",
    desc: "Formação paga da Rocketseat que começa em fundamentos e avança até full stack, com desafios e comunidade ativa.",
    link: "https://www.rocketseat.com.br"
  },
  {
    nome: "Desenvolvimento de Software",
    plataforma: "FIAP / EAD pago",
    tipo: "Pago",
    foco: "Graduação e cursos livres",
    desc: "Instituição forte em tecnologia no Brasil, com cursos livres e graduações que reforçam lógica e práticas de mercado.",
    link: "https://www.fiap.com.br"
  },
  {
    nome: "Algoritmos e Estruturas de Dados",
    plataforma: "IME-USP / material aberto",
    tipo: "Gratuito",
    foco: "Algoritmos além do básico",
    desc: "Materiais e listas de exercícios de universidades públicas brasileiras para solidificar lógica e estruturas de dados.",
    link: "https://www.ime.usp.br/~pf/algoritmos/"
  },
  {
    nome: "The Odin Project",
    plataforma: "The Odin Project",
    tipo: "Gratuito",
    foco: "Full stack com fundamentos",
    desc: "Currículo open-source em inglês (com boa base de lógica e JS) orientado a projetos reais — 100% gratuito.",
    link: "https://www.theodinproject.com"
  },
  {
    nome: "DIO — Lógica de Programação",
    plataforma: "Digital Innovation One",
    tipo: "Gratuito",
    foco: "Bootcamps e módulos curtos",
    desc: "Plataforma brasileira com bootcamps gratuitos que incluem módulos de lógica e introdução a várias linguagens.",
    link: "https://www.dio.me"
  },
  {
    nome: "DataCamp — Introduction to Programming",
    plataforma: "DataCamp",
    tipo: "Pago",
    foco: "Lógica aplicada a dados",
    desc: "Trilha interativa (assinatura) que ensina lógica e Python/R no contexto de análise de dados.",
    link: "https://www.datacamp.com"
  }
];

const cursosTI = [
  {
    nome: "Ciência da Computação",
    nivel: "Bacharelado",
    duracao: "4 anos",
    modalidades: ["Presencial", "EAD"],
    foco: "Algoritmos, IA e teoria da computação",
    desc: "Formação mais teórica e completa da área, com forte base em matemática, estrutura de dados e inteligência artificial."
  },
  {
    nome: "Engenharia de Software",
    nivel: "Bacharelado",
    duracao: "4 a 5 anos",
    modalidades: ["Presencial", "EAD"],
    foco: "Processos, arquitetura e gestão de projetos",
    desc: "Foca em como construir software de forma organizada, em equipe, com metodologias ágeis e qualidade de código."
  },
  {
    nome: "Sistemas de Informação",
    nivel: "Bacharelado",
    duracao: "4 anos",
    modalidades: ["Presencial", "EAD"],
    foco: "Tecnologia aplicada a negócios",
    desc: "Fica entre TI e gestão: forma profissionais que entendem tanto de sistemas quanto dos processos de negócio que eles automatizam."
  },
  {
    nome: "Análise e Desenvolvimento de Sistemas (ADS)",
    nivel: "Tecnólogo",
    duracao: "2 a 3 anos",
    modalidades: ["Presencial", "EAD"],
    foco: "Programação prática e entrada rápida no mercado",
    desc: "Curso mais curto e prático, ideal para quem quer programar profissionalmente o quanto antes."
  },
  {
    nome: "Redes de Computadores",
    nivel: "Tecnólogo",
    duracao: "2 a 3 anos",
    modalidades: ["Presencial", "EAD"],
    foco: "Infraestrutura, servidores e conectividade",
    desc: "Forma profissionais para projetar, configurar e manter redes corporativas e infraestrutura de TI."
  },
  {
    nome: "Segurança da Informação / Cibersegurança",
    nivel: "Tecnólogo",
    duracao: "2 a 3 anos",
    modalidades: ["Presencial", "EAD"],
    foco: "Proteção de dados e sistemas",
    desc: "Área em forte crescimento, voltada à prevenção de ataques, análise de vulnerabilidades e resposta a incidentes."
  },
  {
    nome: "Engenharia da Computação",
    nivel: "Engenharia",
    duracao: "5 anos",
    modalidades: ["Presencial"],
    foco: "Hardware integrado a software",
    desc: "Une eletrônica e programação, formando profissionais para sistemas embarcados, robótica e desenvolvimento de hardware."
  },
  {
    nome: "Jogos Digitais (Game Design / Dev)",
    nivel: "Tecnólogo",
    duracao: "2 a 3 anos",
    modalidades: ["Presencial", "EAD"],
    foco: "Desenvolvimento e design de jogos",
    desc: "Mistura programação, arte e design para formar profissionais para a indústria de games."
  },
  {
    nome: "Ciência de Dados / Big Data",
    nivel: "Tecnólogo",
    duracao: "2 a 3 anos",
    modalidades: ["Presencial", "EAD"],
    foco: "Análise de dados e Machine Learning",
    desc: "Curso mais recente e em alta demanda, focado em extrair valor de grandes volumes de dados."
  }
];

// ==========================================
// 5. QUIZ — BANCO EXPANDIDO + NÍVEIS
// Cada opção aponta para o índice do array `areas`
// ==========================================
const quizBancoCompleto = [
  {
    pergunta: "O que mais te chama atenção em tecnologia?",
    opcoes: [
      { texto: "Criar sites e aplicações que as pessoas usam todo dia", area: 0 },
      { texto: "Descobrir padrões em dados e treinar modelos de IA", area: 1 },
      { texto: "Criar o app de celular que todo mundo vai usar", area: 2 },
      { texto: "Fazer os jogos que você mesmo gostaria de jogar", area: 6 },
      { texto: "Proteger sistemas e caçar vulnerabilidades", area: 4 },
      { texto: "Automatizar deploys e cuidar da nuvem", area: 5 }
    ]
  },
  {
    pergunta: "Como você prefere resolver problemas?",
    opcoes: [
      { texto: "Organizando o 'motor' por trás de tudo: servidores, dados, regras de negócio", area: 3 },
      { texto: "Protegendo sistemas de ataques e falhas de segurança", area: 4 },
      { texto: "Automatizando processos e cuidando da infraestrutura na nuvem", area: 5 },
      { texto: "Deixando a experiência do usuário bonita e fácil de usar", area: 7 },
      { texto: "Construindo pipelines de dados robustos", area: 9 },
      { texto: "Garantindo que o software funcione bem com testes", area: 10 }
    ]
  },
  {
    pergunta: "Qual cenário parece mais divertido pra você?",
    opcoes: [
      { texto: "Ver um site que você fez ganhar vida no navegador", area: 0 },
      { texto: "Treinar uma IA até ela acertar", area: 1 },
      { texto: "Ver seu app rodando no celular de um amigo", area: 2 },
      { texto: "Ligar sensores a uma placa e ver tudo funcionando", area: 8 },
      { texto: "Publicar um smart contract e ver ele rodar on-chain", area: 11 },
      { texto: "Montar um design system usado por vários times", area: 12 }
    ]
  },
  {
    pergunta: "Se você pudesse aprender só uma coisa este mês, seria...",
    opcoes: [
      { texto: "JavaScript, a linguagem mais usada para criar sites", area: 0 },
      { texto: "Python para IA e ciência de dados", area: 1 },
      { texto: "Kotlin ou Swift para criar apps", area: 2 },
      { texto: "C# para criar um jogo na Unity", area: 6 },
      { texto: "Go ou Rust para backends de alta performance", area: 3 },
      { texto: "Bash e ferramentas de Cloud/DevOps", area: 5 }
    ]
  },
  {
    pergunta: "Você se sente mais motivado quando...",
    opcoes: [
      { texto: "O usuário final consegue resolver a tarefa com facilidade", area: 7 },
      { texto: "O sistema aguenta milhares de requisições sem cair", area: 3 },
      { texto: "Um modelo prevê algo com alta acurácia", area: 1 },
      { texto: "Um pipeline de dados roda sozinho todas as noites", area: 9 },
      { texto: "Você encontra e corrige uma falha de segurança crítica", area: 4 },
      { texto: "O time consegue fazer deploy com um clique", area: 5 }
    ]
  },
  {
    pergunta: "Qual tipo de produto te empolga mais?",
    opcoes: [
      { texto: "Um SaaS web usado por empresas", area: 0 },
      { texto: "Um app mobile viral", area: 2 },
      { texto: "Uma plataforma de dados / analytics", area: 9 },
      { texto: "Um jogo indie ou AAA", area: 6 },
      { texto: "Uma rede descentralizada ou dApp", area: 11 },
      { texto: "Ferramentas internas que aceleram outros devs", area: 13 }
    ]
  },
  {
    pergunta: "Em um projeto em equipe, você prefere ficar responsável por...",
    opcoes: [
      { texto: "A interface e a experiência do usuário", area: 12 },
      { texto: "A API e a lógica de negócio", area: 3 },
      { texto: "Os testes automatizados e a qualidade", area: 10 },
      { texto: "A infraestrutura e o monitoramento", area: 14 },
      { texto: "Os modelos de ML e experimentação", area: 1 },
      { texto: "A parte mobile nativa", area: 2 }
    ]
  },
  {
    pergunta: "Qual dessas afirmações combina mais com você?",
    opcoes: [
      { texto: "Quero ver o resultado visual rápido no navegador", area: 0 },
      { texto: "Gosto de matemática, estatística e experimentos", area: 1 },
      { texto: "Prefiro trabalhar perto do hardware e de sensores", area: 8 },
      { texto: "Me interessa a segurança e o 'lado do atacante'", area: 4 },
      { texto: "Quero construir sistemas que nunca param", area: 5 },
      { texto: "Acho fascinante a ideia de contratos autônomos", area: 11 }
    ]
  },
  {
    pergunta: "Onde você imagina trabalhar daqui a 3 anos?",
    opcoes: [
      { texto: "Em uma product company construindo features web", area: 0 },
      { texto: "Em um time de dados / AI de uma grande empresa", area: 1 },
      { texto: "Em um studio de jogos ou empresa de mobile", area: 6 },
      { texto: "Em uma consultoria de segurança ou red team", area: 4 },
      { texto: "Em uma cloud provider ou time de plataforma", area: 13 },
      { texto: "Em uma startup de IoT ou robótica", area: 8 }
    ]
  },
  {
    pergunta: "Qual skill você mais gostaria de dominar?",
    opcoes: [
      { texto: "Arquitetura de microsserviços e APIs", area: 3 },
      { texto: "Design de interfaces e design systems", area: 12 },
      { texto: "Machine Learning e feature engineering", area: 1 },
      { texto: "Kubernetes, observabilidade e SRE", area: 14 },
      { texto: "Testes de carga, e2e e cultura de qualidade", area: 10 },
      { texto: "Smart contracts e protocolos Web3", area: 11 }
    ]
  }
];

// Níveis: quantas perguntas pegar do banco
const QUIZ_NIVEIS = {
  curto: { label: "Curto", perguntas: 3, desc: "Rápido • precisão menor" },
  medio: { label: "Médio", perguntas: 6, desc: "Equilibrado • boa precisão" },
  longo: { label: "Longo", perguntas: 10, desc: "Completo • máxima precisão" }
};

// ==========================================
// 6. DICIONÁRIOS E INSTITUIÇÕES ESPECIAIS
// ==========================================
const dicionarioPaises = {
  "brasil": "Brazil",
  "estados unidos": "United States",
  "eua": "United States",
  "inglaterra": "United Kingdom",
  "reino unido": "United Kingdom",
  "espanha": "Spain",
  "alemanha": "Germany",
  "franca": "France",
  "frança": "France",
  "italia": "Italy",
  "itália": "Italy",
  "japao": "Japan",
  "japão": "Japan",
  "portugal": "Portugal",
  "canada": "Canada",
  "canadá": "Canada",
  "mexico": "Mexico",
  "méxico": "Mexico",
  "argentina": "Argentina",
  "chile": "Chile",
  "australia": "Australia",
  "austrália": "Australia"
};

const instituicoesEspeciaisPR = [
  // Paraná / Norte Pioneiro
  { name: "UENP - Universidade Estadual do Norte do Paraná (Jacarezinho, Bandeirantes, Cornélio Procópio)", country: "Brazil", state: "Paraná", city: "Jacarezinho", web_page: "https://uenp.edu.br" },
  { name: "UTFPR - Universidade Tecnológica Federal do Paraná", country: "Brazil", state: "Paraná", city: "Curitiba / Cornélio Procópio", web_page: "https://www.utfpr.edu.br" },
  { name: "UEL - Universidade Estadual de Londrina", country: "Brazil", state: "Paraná", city: "Londrina", web_page: "https://www.uel.br" },
  { name: "UEM - Universidade Estadual de Maringá", country: "Brazil", state: "Paraná", city: "Maringá", web_page: "https://www.uem.br" },
  { name: "UFPR - Universidade Federal do Paraná", country: "Brazil", state: "Paraná", city: "Curitiba", web_page: "https://www.ufpr.br" },
  { name: "FATEC Jacarezinho", country: "Brazil", state: "Paraná", city: "Jacarezinho", web_page: "https://fatecjacarezinho.edu.br" },
  { name: "UNIOESTE - Universidade Estadual do Oeste do Paraná", country: "Brazil", state: "Paraná", city: "Cascavel", web_page: "https://www.unioeste.br" },
  { name: "UNICENTRO - Universidade Estadual do Centro-Oeste", country: "Brazil", state: "Paraná", city: "Guarapuava", web_page: "https://www.unicentro.br" },
  // Nacionais de referência em TI
  { name: "USP - Universidade de São Paulo", country: "Brazil", state: "São Paulo", city: "São Paulo", web_page: "https://www.usp.br" },
  { name: "UNICAMP - Universidade Estadual de Campinas", country: "Brazil", state: "São Paulo", city: "Campinas", web_page: "https://www.unicamp.br" },
  { name: "UFMG - Universidade Federal de Minas Gerais", country: "Brazil", state: "Minas Gerais", city: "Belo Horizonte", web_page: "https://www.ufmg.br" },
  { name: "UFRJ - Universidade Federal do Rio de Janeiro", country: "Brazil", state: "Rio de Janeiro", city: "Rio de Janeiro", web_page: "https://ufrj.br" },
  { name: "UFRGS - Universidade Federal do Rio Grande do Sul", country: "Brazil", state: "Rio Grande do Sul", city: "Porto Alegre", web_page: "https://www.ufrgs.br" },
  { name: "UFSC - Universidade Federal de Santa Catarina", country: "Brazil", state: "Santa Catarina", city: "Florianópolis", web_page: "https://ufsc.br" },
  { name: "ITA - Instituto Tecnológico de Aeronáutica", country: "Brazil", state: "São Paulo", city: "São José dos Campos", web_page: "https://www.ita.br" },
  { name: "IMT - Instituto Mauá de Tecnologia", country: "Brazil", state: "São Paulo", city: "São Caetano do Sul", web_page: "https://www.maua.br" },
  { name: "FIAP - Faculdade de Informática e Administração Paulista", country: "Brazil", state: "São Paulo", city: "São Paulo", web_page: "https://www.fiap.com.br" },
  { name: "PUC-SP - Pontifícia Universidade Católica de São Paulo", country: "Brazil", state: "São Paulo", city: "São Paulo", web_page: "https://www.pucsp.br" },
  { name: "PUC-Rio - Pontifícia Universidade Católica do Rio de Janeiro", country: "Brazil", state: "Rio de Janeiro", city: "Rio de Janeiro", web_page: "https://www.puc-rio.br" },
  { name: "UNB - Universidade de Brasília", country: "Brazil", state: "Distrito Federal", city: "Brasília", web_page: "https://www.unb.br" },
  { name: "UFPE - Universidade Federal de Pernambuco", country: "Brazil", state: "Pernambuco", city: "Recife", web_page: "https://www.ufpe.br" },
  { name: "UFC - Universidade Federal do Ceará", country: "Brazil", state: "Ceará", city: "Fortaleza", web_page: "https://www.ufc.br" },
  { name: "UFBA - Universidade Federal da Bahia", country: "Brazil", state: "Bahia", city: "Salvador", web_page: "https://www.ufba.br" },
  { name: "INATEL - Instituto Nacional de Telecomunicações", country: "Brazil", state: "Minas Gerais", city: "Santa Rita do Sapucaí", web_page: "https://www.inatel.br" },
  { name: "FATEC São Paulo", country: "Brazil", state: "São Paulo", city: "São Paulo", web_page: "https://www.fatecsp.br" },
  { name: "IFSP - Instituto Federal de São Paulo", country: "Brazil", state: "São Paulo", city: "São Paulo", web_page: "https://www.ifsp.edu.br" },
  { name: "IFPR - Instituto Federal do Paraná", country: "Brazil", state: "Paraná", city: "Curitiba", web_page: "https://ifpr.edu.br" }
];

// ==========================================
// 7. COMPARAÇÃO INTELIGENTE (pares conhecidos)
// ==========================================
const comparacoesInteligentes = {
  "JavaScript|TypeScript": {
    resumo: "TypeScript é um superset de JavaScript. Tudo que roda em JS roda em TS (após compilação).",
    quandoJS: "Protótipos rápidos, scripts simples, projetos pequenos ou quando a equipe ainda não adotou tipagem.",
    quandoTS: "Projetos médios/grandes, times maiores, APIs e frontends onde erros de tipo custam caro.",
    veredito: "Na maioria dos produtos profissionais hoje, TypeScript é a escolha mais segura. JavaScript puro ainda brilha em experimentos e legados."
  },
  "Python|R": {
    resumo: "Ambas excelentes para dados. Python é generalista; R é especialista em estatística e visualização acadêmica.",
    quandoPython: "ML em produção, web + dados, automações e quando você precisa de um ecossistema amplo.",
    quandoR: "Análise estatística profunda, relatórios acadêmicos, bioestatística e gráficos Tidyverse.",
    veredito: "Python domina o mercado de trabalho em IA/ML. R continua imbatível em certos nichos científicos."
  },
  "C++|Rust": {
    resumo: "Rust oferece segurança de memória sem garbage collector; C++ oferece controle absoluto e legado imenso.",
    quandoCpp: "Motores de jogo Unreal, código legado, drivers e quando a equipe já domina C++.",
    quandoRust: "Novos sistemas críticos, blockchain, ferramentas de CLI e quando segurança de memória é prioridade.",
    veredito: "Rust é a aposta moderna para novos projetos de sistemas. C++ permanece indispensável no legado e em engines."
  },
  "Java|C#": {
    resumo: "Ambas orientadas a objetos, tipadas e maduras. Java é multiplataforma clássica; C# brilha no ecossistema Microsoft e Unity.",
    quandoJava: "Backends enterprise, Android legado, grandes bancos e ambientes JVM.",
    quandoCSharp: "Unity, .NET / Azure, desktop Windows e APIs modernas com Minimal APIs.",
    veredito: "Escolha pelo ecossistema do time e do produto. Performance e maturidade são comparáveis."
  },
  "Go (Golang)|Rust": {
    resumo: "Go prioriza simplicidade e velocidade de desenvolvimento; Rust prioriza segurança e performance máxima.",
    quandoGo: "APIs cloud-native, DevOps, microsserviços e times que valorizam legibilidade rápida.",
    quandoRust: "Componentes de performance crítica, segurança de memória e WebAssembly.",
    veredito: "Go vence em produtividade de backend típico. Rust vence quando cada ciclo de CPU e cada byte de memória importam."
  },
  "Kotlin|Swift": {
    resumo: "Linguagens oficiais de Android e iOS respectivamente. Ambas modernas, seguras e expressivas.",
    quandoKotlin: "Android nativo, Multiplatform e backends JVM.",
    quandoSwift: "iOS, macOS, watchOS e todo o ecossistema Apple.",
    veredito: "Não é 'qual é melhor' — é qual plataforma você quer dominar. Cross-platform? Considere também Dart/Flutter ou React Native."
  },
  "SQL|GraphQL": {
    resumo: "SQL consulta bancos relacionais; GraphQL é uma camada de API que permite ao cliente pedir exatamente os campos desejados.",
    quandoSQL: "Qualquer backend que fale com banco relacional — continua sendo a base.",
    quandoGraphQL: "Frontends complexos, mobile e quando over-fetching de REST vira problema.",
    veredito: "Não competem diretamente: GraphQL frequentemente usa SQL (ou NoSQL) por baixo. Aprenda os dois."
  },
  "HTML5 & CSS3|JavaScript": {
    resumo: "HTML estrutura, CSS estiliza, JavaScript adiciona comportamento. Os três formam a base da web.",
    quandoHTMLCSS: "Sempre — são obrigatórios para qualquer página.",
    quandoJS: "Quando há interatividade, estado ou comunicação com APIs.",
    veredito: "Não se escolhe um ou outro. Domine os três; depois escolha frameworks em cima de JS/TS."
  },
  "Python|JavaScript": {
    resumo: "Python brilha em dados, IA e scripts; JavaScript (e TS) domina a web e o fullstack de produto.",
    quandoPython: "Ciência de dados, automações, backends com FastAPI/Django e ML.",
    quandoJS: "Qualquer coisa que rode no navegador ou precise de realtime web.",
    veredito: "Muitos devs usam os dois. Para web pura comece por JS; para IA comece por Python."
  },
  "PHP|JavaScript": {
    resumo: "PHP ainda alimenta grande parte da web (WordPress, Laravel); JS/TS conquistou o frontend e boa parte do backend moderno.",
    quandoPHP: "WordPress, e-commerces legados e times já em Laravel.",
    quandoJS: "Novos produtos web, SPAs e Node.js.",
    veredito: "Para novos projetos greenfield, JS/TS costuma ser a escolha mais versátil. PHP continua excelente no ecossistema que já o usa."
  },
  "Python|Go (Golang)": {
    resumo: "Python prioriza legibilidade e ecossistema de dados/IA; Go prioriza concorrência simples e binários leves para cloud.",
    quandoPython: "ML, scripts, protótipos rápidos e backends com FastAPI quando a equipe já domina Python.",
    quandoGo: "Microsserviços de alta concorrência, CLIs, DevOps e serviços que precisam de deploy trivial.",
    veredito: "Não são rivais diretos: muitos times usam Python para dados/IA e Go para a plataforma que os serve."
  },
  "Java|Python": {
    resumo: "Java é a escolha enterprise clássica (tipagem forte, JVM); Python é mais rápida de escrever e líder em dados/IA.",
    quandoJava: "Sistemas bancários, Spring Boot em escala, Android legado e contratos de tipagem rígidos.",
    quandoPython: "Ciência de dados, automações, MVPs e APIs com FastAPI/Django.",
    veredito: "Java ainda domina backends corporativos legados; Python domina a onda de IA e produtividade individual."
  },
  "TypeScript|Python": {
    resumo: "TypeScript é a aposta tipada do ecossistema web; Python é a língua franca de dados e scripting.",
    quandoTS: "Frontends, full-stack Node e qualquer produto web de médio/grande porte.",
    quandoPython: "Pipelines de dados, ML e backends orientados a ciência.",
    veredito: "Escolha pelo domínio do produto: web → TypeScript; dados/IA → Python. Full-stack moderno muitas vezes usa os dois."
  },
  "Dart|Kotlin": {
    resumo: "Dart (com Flutter) entrega UI multiplataforma a partir de um código; Kotlin é a linguagem oficial do Android nativo.",
    quandoDart: "App iOS + Android (e web/desktop) com uma base só, time pequeno, UI customizada.",
    quandoKotlin: "Android nativo de alta qualidade, Multiplatform seletivo e backends JVM.",
    veredito: "Flutter/Dart vence em velocidade multiplataforma; Kotlin vence quando a experiência Android nativa é prioritária."
  },
  "Dart|Swift": {
    resumo: "Dart/Flutter cobre iOS e Android; Swift é a linguagem nativa e oficial da Apple.",
    quandoDart: "Precisa de iOS e Android com o mesmo código e time enxuto.",
    quandoSwift: "App exclusivo Apple, uso intenso de APIs de hardware e máxima integração com o ecossistema.",
    veredito: "Só iOS? Swift. iOS + Android com orçamento limitado? Dart/Flutter costuma ser a escolha pragmática."
  },
  "C#|JavaScript": {
    resumo: "C# brilha em .NET, Unity e backends Microsoft; JavaScript/TS domina a web no browser e no Node.",
    quandoCSharp: "Jogos Unity, APIs ASP.NET e desktop Windows.",
    quandoJS: "Qualquer interface web e full-stack Node.",
    veredito: "Domínios diferentes. Em jogos e Azure, C#; na web aberta, JS/TS."
  },
  "Ruby|Python": {
    resumo: "Ambas priorizam felicidade do desenvolvedor. Ruby é famosa pelo Rails; Python pelo ecossistema científico e generalista.",
    quandoRuby: "MVPs web com Rails, startups que já usam o stack e times que valorizam convenções.",
    quandoPython: "Dados, IA, scripts e backends mais heterogêneos.",
    veredito: "Ruby/Rails continua excelente para produtos web rápidos; Python tem mercado de trabalho mais amplo hoje."
  },
  "Elixir|Go (Golang)": {
    resumo: "Elixir (BEAM) é feita para tolerância a falhas e concorrência massiva; Go é simples, estático e cloud-native.",
    quandoElixir: "Chat, telecomunicações, sistemas que não podem cair e Phoenix LiveView.",
    quandoGo: "APIs HTTP, Kubernetes tooling e serviços com deploy de binário único.",
    veredito: "Elixir brilha em soft real-time e fault-tolerance; Go brilha em infraestrutura e APIs de alta throughput previsível."
  },
  "Rust|C++": {
    resumo: "Mesma família de performance; Rust adiciona o borrow checker e elimina classes inteiras de bugs de memória.",
    quandoRust: "Código novo em sistemas, WASM, blockchain e ferramentas de segurança.",
    quandoCpp: "Unreal, legado, drivers e código que já existe em C++.",
    veredito: "Para greenfield em sistemas, prefira Rust quando a curva de aprendizado for aceitável; C++ permanece o padrão de fato em engines."
  },
  "SQL|NoSQL Query (MongoDB)": {
    resumo: "SQL modela dados relacionais com schema rígido; consultas MongoDB modelam documentos flexíveis.",
    quandoSQL: "Transações, relatórios, integridade referencial e a maior parte dos backends tradicionais.",
    quandoMongo: "Protótipos rápidos, dados semi-estruturados e documentos aninhados que mudam com frequência.",
    veredito: "Não é 'SQL vs NoSQL' absoluto: escolha pelo formato dos dados e pelas queries. Muitos sistemas usam os dois."
  },
  "HTML|CSS": {
    resumo: "HTML define estrutura e significado; CSS define apresentação visual e layout.",
    quandoHTML: "Sempre — sem markup não há página.",
    quandoCSS: "Sempre — sem estilo a página é ilegível para o usuário final.",
    veredito: "São complementares e inseparáveis no front-end. Aprenda os dois juntos."
  },
  "JavaScript|Go (Golang)": {
    resumo: "JS/TS no Node compete em backends web; Go compete em serviços de infraestrutura e APIs de baixa latência.",
    quandoJS: "Full-stack com o mesmo idioma do frontend, realtime com Socket.io e ecossistema NPM.",
    quandoGo: "Serviços isolados, alta concorrência e times que preferem tipagem estática compilada.",
    veredito: "Se o time já é web/JS, Node é natural. Se o foco é plataforma/cloud, Go costuma escalar melhor em ops."
  },
  "Kotlin|Java": {
    resumo: "Kotlin é interoperável com Java e é a linguagem preferida do Google para Android moderno.",
    quandoKotlin: "Android novo, código conciso, null-safety e Multiplatform.",
    quandoJava: "Bases legadas enormes, libs que ainda não migraram e times enterprise JVM clássicos.",
    veredito: "Em projetos Android novos, Kotlin é o padrão. Em backends JVM, ambos coexistem — Kotlin reduz boilerplate."
  },
  "Swift|JavaScript": {
    resumo: "Swift é nativo Apple; JavaScript (React Native / web) cobre multiplataforma e browser.",
    quandoSwift: "Melhor UX possível no iOS/macOS e acesso total às APIs Apple.",
    quandoJS: "Compartilhar lógica entre web e mobile ou priorizar velocidade de entrega multiplataforma.",
    veredito: "Produto só Apple e premium → Swift. Precisa web + mobile rápido → JS/TS (ou Dart)."
  },
  "Assembly|C++": {
    resumo: "Assembly fala a língua do processador; C++ oferece abstrações com performance próxima do metal.",
    quandoAssembly: "Bootloaders, trechos minúsculos ultra-otimizados e engenharia reversa.",
    quandoCpp: "Quase todo o restante de sistemas de alto desempenho.",
    veredito: "Ninguém escreve sistemas inteiros em Assembly hoje. Use-o pontualmente; C++ (ou Rust) para o resto."
  },
  "PHP|Python": {
    resumo: "PHP é onipresente na web clássica; Python é generalista e líder fora do CMS tradicional.",
    quandoPHP: "WordPress, Laravel e hospedagem compartilhada barata.",
    quandoPython: "Dados, IA, automações e APIs modernas.",
    veredito: "Mercado de CMS e sites legados → PHP. Quase todo o resto de backend moderno e dados → Python (ou JS/Go/Java)."
  },
  "Scala|Python": {
    resumo: "Scala (JVM) é forte em Big Data com Spark; Python domina o restante de dados e ML.",
    quandoScala: "Pipelines Spark em escala, times JVM e tipagem funcional.",
    quandoPython: "Notebooks, ML moderno (PyTorch/TF) e engenharia de dados com Airflow/Pandas.",
    veredito: "Spark em cluster enorme ainda vê muito Scala; o dia a dia de data science e ML é Python."
  },
  "Bash / Shell|Python": {
    resumo: "Bash orquestra comandos do sistema; Python brilha quando a lógica fica complexa demais para shell.",
    quandoBash: "Pipelines curtos, CI, automação de servidor e glue entre ferramentas Unix.",
    quandoPython: "Scripts com estruturas de dados, APIs, parsing robusto e portabilidade Windows/Linux.",
    veredito: "Comece em Bash para colar comandos; migre para Python quando o script passar de ~50 linhas ou precisar de testes."
  },
  "WebAssembly (WASM)|JavaScript": {
    resumo: "WASM roda código compilado (C/C++/Rust) no browser com performance próxima de nativo; JS continua o glue da web.",
    quandoWASM: "Jogos, codecs, editores pesados e trechos CPU-bound no browser.",
    quandoJS: "DOM, rede, UI e a maior parte da lógica de aplicação web.",
    veredito: "WASM não substitui JS — complementa. Use WASM onde JS é o gargalo de CPU."
  },
  "GraphQL|JavaScript": {
    resumo: "GraphQL é a linguagem de consulta de API; JavaScript é a linguagem que mais a consome (e também a implementa no Node).",
    quandoGraphQL: "Quando o cliente precisa moldar a resposta e evitar over-fetching.",
    quandoJS: "Implementar resolvers (Apollo/Yoga) e consumir no frontend.",
    veredito: "Não competem: GraphQL é o contrato; JS/TS é o veículo mais comum para usá-lo."
  },
  "C#|C++": {
    resumo: "C# (gerenciado, .NET) vs C++ (nativo). No mundo de jogos: Unity usa C#; Unreal usa C++.",
    quandoCSharp: "Unity, ferramentas .NET e produtividade com garbage collector.",
    quandoCpp: "Unreal, engines próprias e controle fino de memória/CPU.",
    veredito: "Unity → C#. Unreal ou engine custom → C++. Fora de games, escolha pelo ecossistema (.NET vs nativo)."
  },
  "Lua|Python": {
    resumo: "Lua é minúscula e embutível (jogos, Nginx); Python é baterias inclusas para scripts e dados.",
    quandoLua: "Scripting dentro de engines (Roblox, WoW, Love2d) e extensões C.",
    quandoPython: "Automações, dados e aplicações stand-alone.",
    veredito: "Lua vence como linguagem embutida; Python vence como linguagem de aplicação geral."
  },
  "Haskell|Python": {
    resumo: "Haskell é puramente funcional e acadêmica; Python é pragmática e onipresente na indústria.",
    quandoHaskell: "Provas de correção, DSLs e finanças quantitativas que valorizam tipagem extrema.",
    quandoPython: "Quase todo o mercado de trabalho em dados, web e automação.",
    veredito: "Aprenda Haskell para formar o cérebro; use Python para entregar produto."
  },
  "Zig|Rust": {
    resumo: "Ambas miram sistemas modernos sem GC. Rust prioriza segurança via borrow checker; Zig prioriza simplicidade e interoperabilidade com C.",
    quandoZig: "Toolchains, firmware e quando você quer controle explícito sem a curva do borrow checker.",
    quandoRust: "Infraestrutura crítica, WASM e ecossistema crates maduro.",
    veredito: "Rust tem mais tração e libs. Zig é fascinante para quem vem de C e quer modernizar sem GC."
  },
  "TypeScript|Java": {
    resumo: "TypeScript tipa o mundo JS; Java tipa o mundo JVM enterprise.",
    quandoTS: "Produtos web, Node e full-stack moderno.",
    quandoJava: "Bancos, governos e backends Spring de larga escala.",
    veredito: "Domínios diferentes. A convergência existe em times que usam TS no front e Java no back."
  },
  "Go (Golang)|Java": {
    resumo: "Go é minimalista e compila para binário estático; Java é o ecossistema enterprise mais maduro da JVM.",
    quandoGo: "Cloud-native, CLIs, Kubernetes e serviços com deploy simples.",
    quandoJava: "Sistemas legados/enterprise, Spring e talent pool enorme em corporações.",
    veredito: "Greenfield cloud → Go costuma ser mais ágil. Enterprise com time Java → continue em Java."
  },
  "Python|Rust": {
    resumo: "Python para produtividade; Rust para performance e segurança quando Python vira gargalo.",
    quandoPython: "Protótipo, dados, ML e 90% da lógica de negócio.",
    quandoRust: "Extensões (PyO3), serviços de borda e partes CPU-bound reescritas.",
    veredito: "Padrão comum: escrever em Python e reescrever o hot path em Rust."
  },
  "Solidity|JavaScript": {
    resumo: "Solidity escreve contratos on-chain; JavaScript (ethers.js/web3.js) é a porta de entrada do front-end Web3.",
    quandoSolidity: "Regras de negócio imutáveis na blockchain.",
    quandoJS: "UI de dApps, carteiras e indexadores off-chain.",
    veredito: "Web3 exige os dois: Solidity no contrato e JS/TS no cliente."
  },
  "C|C++": {
    resumo: "C é o núcleo minimalista; C++ adiciona abstrações (classes, templates) mantendo performance nativa.",
    quandoC: "Kernels, MCU, código extremamente portável e previsível.",
    quandoCpp: "Engines, aplicações grandes e quando abstrações valem o custo de complexidade.",
    veredito: "Embarcados simples → C. Sistemas grandes de alta performance → C++ (ou Rust)."
  },
  "C|Rust": {
    resumo: "C é o padrão histórico de sistemas; Rust é a alternativa moderna com segurança de memória.",
    quandoC: "Código legado, toolchains maduras e restrições de ambiente.",
    quandoRust: "Novos componentes onde use-after-free não é aceitável.",
    veredito: "Rust é o caminho preferido para código novo de sistemas quando a equipe topa a curva de aprendizado."
  },
  "TypeScript|Go (Golang)": {
    resumo: "TS domina full-stack web tipado; Go domina serviços cloud compilados e simples.",
    quandoTS: "Mesmo idioma no front e no back Node.",
    quandoGo: "Microsserviços isolados, CLIs e infra.",
    veredito: "Produto web integrado → TS. Plataforma/cloud → Go."
  },
  "PHP|Java": {
    resumo: "PHP reina no web hosting clássico; Java no enterprise transacional.",
    quandoPHP: "WordPress, Laravel e sites de conteúdo.",
    quandoJava: "Bancos, governos e Spring em escala.",
    veredito: "Domínios distintos — escolha pelo contexto da empresa e do produto."
  },
  "Kotlin|Dart": {
    resumo: "Kotlin é nativo Android (e Multiplatform); Dart/Flutter entrega UI multiplataforma com um codebase.",
    quandoKotlin: "Android first e interoperabilidade JVM.",
    quandoDart: "iOS+Android com UI altamente customizada e time pequeno.",
    veredito: "Android puro de alta qualidade → Kotlin. Multiplataforma rápida → Flutter/Dart."
  },
  "Swift|Kotlin": {
    resumo: "Linguagens oficiais de iOS e Android. Ambas modernas, com null-safety e sintaxe expressiva.",
    quandoSwift: "Ecossistema Apple completo.",
    quandoKotlin: "Ecossistema Android e backends JVM.",
    veredito: "Nativas de cada plataforma. Cross-platform? Avalie KMP, Flutter ou React Native."
  },
  "MATLAB|Python": {
    resumo: "MATLAB é padrão em engenharia acadêmica; Python (+NumPy/SciPy) é a alternativa aberta e de mercado.",
    quandoMATLAB: "Lab com licenças, toolboxes específicos e ensino de engenharia.",
    quandoPython: "Produção, ML e custo zero de licença.",
    veredito: "Indústria e data science → Python. Certos laboratórios de engenharia ainda exigem MATLAB."
  },
  "PowerShell|Bash / Shell": {
    resumo: "Bash é o padrão Unix/Linux; PowerShell é orientado a objetos e forte no mundo Microsoft.",
    quandoBash: "Servidores Linux, containers e CI clássico.",
    quandoPowerShell: "Windows, Active Directory e Azure.",
    veredito: "Ambiente Linux → Bash. Ambiente Microsoft → PowerShell. DevOps moderno costuma precisar dos dois."
  },
  "Tailwind CSS|CSS": {
    resumo: "CSS é a linguagem; Tailwind é um método utility-first em cima dela.",
    quandoCSS: "Entender layout, cascata e design systems profundos.",
    quandoTailwind: "Entregar UI rápido com consistência de tokens.",
    veredito: "Aprenda CSS de verdade; use Tailwind como acelerador — não como desculpa para não aprender o fundamento."
  },
  "JSON / YAML|SQL": {
    resumo: "JSON/YAML descrevem documentos e config; SQL consulta e persiste dados relacionais.",
    quandoJSONYAML: "APIs, K8s, CI e configs.",
    quandoSQL: "Dados transacionais e analíticos em banco.",
    veredito: "Complementares. Todo backend moderno fala os três: SQL no banco, JSON na API, YAML no deploy."
  },
  "Elixir|Ruby": {
    resumo: "Elixir tem sintaxe amigável a quem veio de Ruby, mas roda na BEAM com concorrência massiva.",
    quandoElixir: "Sistemas realtime e fault-tolerant (Phoenix).",
    quandoRuby: "MVPs Rails e ecossistema Ruby maduro.",
    veredito: "Se você ama Rails mas precisa de concorrência absurda, Elixir/Phoenix é o próximo passo natural."
  },
  "Scala|Java": {
    resumo: "Scala é mais expressiva e funcional na JVM; Java é mais simples e com talent pool maior.",
    quandoScala: "Spark, DSLs e times que curtem funcional.",
    quandoJava: "Maioria dos backends enterprise e Android legado.",
    veredito: "Big data Spark → Scala ainda forte. Backend corporativo geral → Java (ou Kotlin)."
  },
  "COBOL|Java": {
    resumo: "COBOL mantém o core bancário em mainframe; Java costuma ser a ponte para sistemas modernos.",
    quandoCOBOL: "Manutenção de legados financeiros críticos.",
    quandoJava: "Novos serviços que integram com o mainframe.",
    veredito: "Não se 'escolhe' COBOL por preferência — se herda. Java é a rota típica de modernização ao redor."
  },
  "Assembly|Rust": {
    resumo: "Assembly é o nível da instrução; Rust oferece segurança com performance próxima do nativo.",
    quandoAssembly: "Boot, ISR e micro-otimizações pontuais.",
    quandoRust: "Quase todo sistema novo que antes seria C/C++.",
    veredito: "Assembly pontual; Rust (ou C) para o sistema."
  },
  "F#|C#": {
    resumo: "Ambas no .NET. F# é funcional-first; C# é multi-paradigma e dominante no ecossistema.",
    quandoFSharp: "Pipelines de dados, finanças e código conciso funcional.",
    quandoCSharp: "Unity, ASP.NET, desktop e a maioria das vagas .NET.",
    veredito: "Mercado e Unity → C#. Nicho funcional no .NET → F#."
  },
  "Groovy|Java": {
    resumo: "Groovy é dinâmica na JVM; Java é estática e majoritária.",
    quandoGroovy: "Gradle, Jenkins e scripts rápidos.",
    quandoJava: "Código de produção de longo prazo.",
    veredito: "Produção → Java/Kotlin. Build e automação JVM → Groovy ainda é comum."
  },
  "Crystal|Ruby": {
    resumo: "Crystal busca a ergonomia do Ruby com tipagem estática e compilação nativa.",
    quandoCrystal: "CLIs e serviços que querem sintaxe Ruby com performance de compilado.",
    quandoRuby: "Ecossistema Rails e gems maduras.",
    veredito: "Rails e mercado → Ruby. Experimento de performance com sintaxe parecida → Crystal."
  },
  "PromQL|SQL": {
    resumo: "SQL consulta dados de negócio; PromQL consulta métricas de séries temporais de infraestrutura.",
    quandoSQL: "Produto, analytics e OLTP/OLAP.",
    quandoPromQL: "CPU, latência, taxas de erro e alertas SRE.",
    veredito: "Mundos diferentes. Backend de produto → SQL. Observabilidade → PromQL."
  },
  "Markdown|HTML": {
    resumo: "Markdown é marcação mínima para texto; HTML é a marcação completa da web.",
    quandoMarkdown: "Docs, README, posts técnicos.",
    quandoHTML: "Qualquer interface web real.",
    veredito: "Docs → Markdown. UI → HTML (que pode ser gerado a partir de Markdown)."
  }
};

function obterComparacaoInteligente(nomeA, nomeB) {
  const key1 = `${nomeA}|${nomeB}`;
  const key2 = `${nomeB}|${nomeA}`;
  return comparacoesInteligentes[key1] || comparacoesInteligentes[key2] || null;
}

// ==========================================
// 8. ESTADO GLOBAL
// ==========================================
const FAV_KEY = "devportal_favoritos_linguagens";
let favoritos = new Set();
let comparando = [];
const MAX_COMPARAR = 3;

let filtroCategoriaLinguagens = "todas";
let filtroNivelCursoTI = "todos";
let filtroModalidadeCursoTI = "todas";

// Quiz state
let quizNivel = null;           // "curto" | "medio" | "longo"
let quizPerguntasAtivas = [];   // subset embaralhado
let quizIndiceAtual = 0;
let quizRespostas = [];         // índices de área
let ultimaAreaRecomendada = null;
let ultimasLangsRecomendadas = [];

// ==========================================
// 9. INICIALIZAÇÃO
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  carregarFavoritos();
  initDeviceDetection();
  initMatrixRain();
  initNavigationPages();
  renderAreas(areas);
  renderConceitos();
  renderDesafioLogica();
  initCourseFilterLogica();
  renderCursosLogica(cursosLogica);
  initThemeEngine();
  initSearchEngine();
  initSearchModeToggle();
  initCourseCatalogSearch();
  initFilters();
  initComparador();
  initModals();
  updateCounters();
  aplicarFiltrosLinguagens();
  renderComparadorBar();
});

function irParaPagina(pageId) {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === pageId);
  });
  document.querySelectorAll(".page-view").forEach(page => {
    page.classList.toggle("active", page.id === `page-${pageId}`);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initNavigationPages() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => irParaPagina(btn.dataset.page));
  });

  document.getElementById("btn-go-langs")?.addEventListener("click", () => irParaPagina("linguagens"));
  document.getElementById("btn-go-areas")?.addEventListener("click", () => irParaPagina("areas"));
  document.getElementById("btn-go-logica")?.addEventListener("click", () => irParaPagina("logica"));
  document.getElementById("btn-go-unis")?.addEventListener("click", () => irParaPagina("faculdades"));

  document.getElementById("btn-hero-langs")?.addEventListener("click", () => irParaPagina("linguagens"));
  document.getElementById("btn-hero-quiz")?.addEventListener("click", abrirQuiz);

  document.getElementById("feat-compare")?.addEventListener("click", () => {
    irParaPagina("linguagens");
    showToast("Marque o ⚖️ em até 3 linguagens para comparar");
  });

  document.getElementById("feat-favoritos")?.addEventListener("click", () => {
    irParaPagina("linguagens");
    filtroCategoriaLinguagens = "favoritos";
    document.querySelectorAll(".sidebar-btn").forEach(b => b.classList.toggle("active", b.dataset.categoria === "favoritos"));
    aplicarFiltrosLinguagens();
  });

  document.getElementById("feat-logica")?.addEventListener("click", () => irParaPagina("logica"));
  document.getElementById("feat-faculdades")?.addEventListener("click", () => irParaPagina("faculdades"));
}

function updateCounters() {
  const countLangs = document.getElementById("count-langs");
  const countAreas = document.getElementById("count-areas");
  const countCursos = document.getElementById("count-cursos");
  const codeCountLangs = document.getElementById("code-count-langs");
  const codeCountAreas = document.getElementById("code-count-areas");

  if (countLangs) countLangs.textContent = linguagens.length;
  if (countAreas) countAreas.textContent = areas.length;
  if (countCursos) countCursos.textContent = cursosLogica.length;
  if (codeCountLangs) codeCountLangs.textContent = linguagens.length;
  if (codeCountAreas) codeCountAreas.textContent = areas.length;

  updateSidebarCounts();
}

function updateSidebarCounts() {
  const cntTodas = document.getElementById("cnt-todas");
  const cntLinguagem = document.getElementById("cnt-linguagem");
  const cntWeb = document.getElementById("cnt-web");
  const cntDados = document.getElementById("cnt-dados");
  const cntFavoritos = document.getElementById("cnt-favoritos");

  if (cntTodas) cntTodas.textContent = linguagens.length;
  if (cntLinguagem) cntLinguagem.textContent = linguagens.filter(l => l.categoria === "linguagem").length;
  if (cntWeb) cntWeb.textContent = linguagens.filter(l => l.categoria === "web").length;
  if (cntDados) cntDados.textContent = linguagens.filter(l => l.categoria === "dados").length;
  if (cntFavoritos) cntFavoritos.textContent = favoritos.size;
}

// ==========================================
// 10. DETECÇÃO DE DISPOSITIVO + RESPONSIVIDADE
// ==========================================
function initDeviceDetection() {
  const apply = () => {
    const w = window.innerWidth;
    const isMobile = w <= 640 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    const isTablet = !isMobile && w <= 900;
    document.body.classList.toggle("is-mobile", isMobile);
    document.body.classList.toggle("is-tablet", isTablet);
    document.body.classList.toggle("is-desktop", !isMobile && !isTablet);
  };
  apply();
  window.addEventListener("resize", debounce(apply, 150));
}

function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

// ==========================================
// 11. RENDERIZADORES
// ==========================================
function renderLinguagens(lista) {
  const langGrid = document.getElementById("lang-grid");
  if (!langGrid) return;
  langGrid.innerHTML = "";

  if (lista.length === 0) {
    langGrid.innerHTML = `<p class="no-results">Nenhuma linguagem encontrada com este filtro.</p>`;
    return;
  }

  lista.forEach((lang, idx) => {
    const card = document.createElement("div");
    card.className = "card fade-in";
    card.style.animationDelay = `${idx * 0.03}s`;

    card.innerHTML = `
      <div class="card-actions">
        <button class="icon-btn fav-btn ${isFavorito(lang.nome) ? "fav-active" : ""}" title="Favoritar" aria-label="Favoritar ${lang.nome}">${isFavorito(lang.nome) ? "⭐" : "☆"}</button>
        <button class="icon-btn compare-btn ${isComparando(lang.nome) ? "compare-active" : ""}" title="Comparar" aria-label="Comparar ${lang.nome}">⚖️</button>
      </div>
      <span class="tag">${lang.tag}</span>
      <h3>${lang.nome}</h3>
      <p>${lang.desc}</p>
      <div class="details">
        <ul>${lang.detalhes.map(d => `<li>${d}</li>`).join("")}</ul>
      </div>
      <span class="card-hint">💡 Clique para expandir</span>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("open");
    });

    card.querySelector(".fav-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorito(lang.nome);
      aplicarFiltrosLinguagens();
    });

    card.querySelector(".compare-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleComparar(lang.nome);
      aplicarFiltrosLinguagens();
    });

    langGrid.appendChild(card);
  });
}

function renderAreas(lista) {
  const areasGrid = document.getElementById("areas-grid");
  if (!areasGrid) return;
  areasGrid.innerHTML = "";

  if (lista.length === 0) {
    areasGrid.innerHTML = `<p class="no-results">Nenhuma área encontrada com este termo.</p>`;
    return;
  }

  lista.forEach((area, idx) => {
    const card = document.createElement("div");
    card.className = "area-card fade-in";
    card.style.animationDelay = `${idx * 0.03}s`;

    card.innerHTML = `
      <h3>${area.nome}</h3>
      <p>${area.desc}</p>
      <div class="langs">
        ${area.langs.map(l => `<span>${l}</span>`).join("")}
      </div>
    `;

    areasGrid.appendChild(card);
  });
}

function renderConceitos() {
  const grid = document.getElementById("concepts-grid");
  if (!grid) return;

  grid.innerHTML = conceitosLogica.map(c => `
    <div class="concept-card">
      <span class="concept-icon">${c.icone}</span>
      <h4>${c.nome}</h4>
      <p>${c.desc}</p>
      <pre><code>${c.exemplo}</code></pre>
    </div>
  `).join("");
}

function renderCursosLogica(lista) {
  const grid = document.getElementById("courses-grid");
  if (!grid) return;

  if (lista.length === 0) {
    grid.innerHTML = `<p class="no-results">Nenhum curso encontrado com este filtro.</p>`;
    return;
  }

  grid.innerHTML = lista.map(c => `
    <div class="course-card fade-in">
      <span class="badge ${c.tipo === "Gratuito" ? "badge-free" : "badge-paid"}">${c.tipo === "Gratuito" ? "🆓 Gratuito" : "💳 Pago"}</span>
      <div class="course-platform">${c.plataforma}</div>
      <h4>${c.nome}</h4>
      <p>${c.desc}</p>
      <p style="margin-top:0.5rem; font-size:0.8rem;"><strong>Foco:</strong> ${c.foco}</p>
      <a href="${c.link}" target="_blank" rel="noopener" class="course-link">Acessar curso ↗</a>
    </div>
  `).join("");
}

function renderCursosTI(lista) {
  const resultsContainer = document.getElementById("results-container");
  if (!resultsContainer) return;

  if (lista.length === 0) {
    resultsContainer.innerHTML = `
      <div class="empty fade-in">
        <span class="empty-icon">📚</span>
        <p>Nenhum curso encontrado com esses filtros.</p>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = `
    <div class="result-count fade-in">${lista.length} curso(s) no catálogo geral de TI:</div>
    <div class="grid">
      ${lista.map((c, index) => `
        <div class="uni-card fade-in" style="animation-delay: ${index * 0.02}s">
          <div>
            <span class="tag">${c.nivel} • ${c.duracao}</span>
            <h4>${c.nome}</h4>
            <div class="meta">${c.desc}</div>
            <div class="meta" style="margin-top:0.6rem;"><strong>Foco:</strong> ${c.foco}</div>
            <div class="meta" style="margin-top:0.4rem;"><strong>Modalidades comuns:</strong> ${c.modalidades.join(" e ")}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

// ==========================================
// 12. FAVORITOS
// ==========================================
function carregarFavoritos() {
  try {
    const raw = localStorage.getItem(FAV_KEY);
    favoritos = new Set(raw ? JSON.parse(raw) : []);
  } catch (e) {
    favoritos = new Set();
  }
}

function salvarFavoritos() {
  try {
    localStorage.setItem(FAV_KEY, JSON.stringify([...favoritos]));
  } catch (e) { /* modo privado etc. */ }
}

function isFavorito(nome) {
  return favoritos.has(nome);
}

function toggleFavorito(nome) {
  if (favoritos.has(nome)) {
    favoritos.delete(nome);
    showToast(`${nome} removido dos favoritos`);
  } else {
    favoritos.add(nome);
    showToast(`${nome} adicionado aos favoritos ⭐`);
  }
  salvarFavoritos();
  updateSidebarCounts();
}

// ==========================================
// 13. COMPARADOR + COMPARAÇÃO INTELIGENTE
// ==========================================
function isComparando(nome) {
  return comparando.includes(nome);
}

function toggleComparar(nome) {
  if (comparando.includes(nome)) {
    comparando = comparando.filter(n => n !== nome);
  } else {
    if (comparando.length >= MAX_COMPARAR) {
      showToast(`Você pode comparar até ${MAX_COMPARAR} linguagens por vez`);
      return;
    }
    comparando.push(nome);
  }
  renderComparadorBar();
}

function renderComparadorBar() {
  const bar = document.getElementById("comparator-bar");
  const count = document.getElementById("comparator-count");
  const chips = document.getElementById("comparator-chips");
  const openBtn = document.getElementById("btn-open-compare");
  if (!bar) return;

  count.textContent = `${comparando.length} de ${MAX_COMPARAR} linguagens selecionadas`;
  chips.innerHTML = comparando.map(n => `<span>${n}</span>`).join("");
  openBtn.disabled = comparando.length < 2;
  bar.classList.toggle("visible", comparando.length > 0);
}

function initComparador() {
  document.getElementById("btn-clear-compare")?.addEventListener("click", () => {
    comparando = [];
    renderComparadorBar();
    aplicarFiltrosLinguagens();
  });

  document.getElementById("btn-open-compare")?.addEventListener("click", abrirModalComparacao);
}

function abrirModalComparacao() {
  const wrap = document.getElementById("compare-table-wrap");
  const selecionadas = linguagens.filter(l => comparando.includes(l.nome));

  // Bloco de insights inteligentes (pares)
  let insightsHtml = "";
  if (selecionadas.length >= 2) {
    const pares = [];
    for (let i = 0; i < selecionadas.length; i++) {
      for (let j = i + 1; j < selecionadas.length; j++) {
        const comp = obterComparacaoInteligente(selecionadas[i].nome, selecionadas[j].nome);
        if (comp) {
          pares.push({ a: selecionadas[i].nome, b: selecionadas[j].nome, comp });
        }
      }
    }
    if (pares.length) {
      insightsHtml = `
        <div class="compare-insights">
          <h4>🧠 Comparação inteligente</h4>
          ${pares.map(p => `
            <div class="insight-card">
              <strong>${p.a} × ${p.b}</strong>
              <p>${p.comp.resumo}</p>
              <ul>
                <li><em>Quando preferir ${p.a}:</em> ${p.comp.quandoJS || p.comp.quandoPython || p.comp.quandoCpp || p.comp.quandoGo || p.comp.quandoKotlin || p.comp.quandoSQL || p.comp.quandoHTMLCSS || p.comp.quandoPHP || Object.values(p.comp).find((v, idx) => idx > 0 && typeof v === "string" && v.length > 20)}</li>
                <li><em>Quando preferir ${p.b}:</em> ${p.comp.quandoTS || p.comp.quandoR || p.comp.quandoRust || p.comp.quandoCSharp || p.comp.quandoSwift || p.comp.quandoGraphQL || p.comp.quandoJS || Object.values(p.comp).filter(v => typeof v === "string")[2] || ""}</li>
              </ul>
              <p class="veredito"><strong>Veredito:</strong> ${p.comp.veredito}</p>
            </div>
          `).join("")}
        </div>
      `;
    } else {
      insightsHtml = `
        <div class="compare-insights">
          <h4>🧠 Comparação inteligente</h4>
          <p class="hint">Ainda não há um perfil de comparação detalhado para este par específico. Use a tabela abaixo para ver categoria, descrição e usos lado a lado.</p>
        </div>
      `;
    }
  }

  // Corrige extração de "quando preferir" de forma mais robusta
  insightsHtml = "";
  if (selecionadas.length >= 2) {
    const pares = [];
    for (let i = 0; i < selecionadas.length; i++) {
      for (let j = i + 1; j < selecionadas.length; j++) {
        const comp = obterComparacaoInteligente(selecionadas[i].nome, selecionadas[j].nome);
        if (comp) pares.push({ a: selecionadas[i].nome, b: selecionadas[j].nome, comp });
      }
    }
    if (pares.length) {
      insightsHtml = `
        <div class="compare-insights">
          <h4>🧠 Comparação inteligente</h4>
          ${pares.map(p => {
            const keys = Object.keys(p.comp).filter(k => k.startsWith("quando"));
            const quandoA = keys[0] ? p.comp[keys[0]] : "";
            const quandoB = keys[1] ? p.comp[keys[1]] : "";
            return `
              <div class="insight-card">
                <strong>${p.a} × ${p.b}</strong>
                <p>${p.comp.resumo}</p>
                <ul>
                  <li><em>Quando preferir ${p.a}:</em> ${quandoA}</li>
                  <li><em>Quando preferir ${p.b}:</em> ${quandoB}</li>
                </ul>
                <p class="veredito"><strong>Veredito:</strong> ${p.comp.veredito}</p>
              </div>
            `;
          }).join("")}
        </div>
      `;
    } else {
      insightsHtml = `
        <div class="compare-insights">
          <h4>🧠 Comparação inteligente</h4>
          <p class="hint">Ainda não há um perfil de comparação detalhado para este par específico. Use a tabela abaixo para ver categoria, descrição e usos lado a lado.</p>
        </div>
      `;
    }
  }

  wrap.innerHTML = `
    ${insightsHtml}
    <table class="compare-table">
      <thead>
        <tr><th>Critério</th>${selecionadas.map(l => `<th>${l.nome}</th>`).join("")}</tr>
      </thead>
      <tbody>
        <tr><td><strong>Categoria</strong></td>${selecionadas.map(l => `<td>${l.tag}</td>`).join("")}</tr>
        <tr><td><strong>Descrição</strong></td>${selecionadas.map(l => `<td>${l.desc}</td>`).join("")}</tr>
        <tr><td><strong>Principais usos</strong></td>${selecionadas.map(l => `<td><ul>${l.detalhes.map(d => `<li>${d}</li>`).join("")}</ul></td>`).join("")}</tr>
      </tbody>
    </table>
  `;

  abrirModal("compare-modal-overlay");
}

// ==========================================
// 14. TOASTS
// ==========================================
function showToast(mensagem) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = mensagem;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("leaving");
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// ==========================================
// 15. MODAIS
// ==========================================
function abrirModal(id) {
  document.getElementById(id)?.classList.add("open");
  document.body.style.overflow = "hidden";
}

function fecharModal(id) {
  document.getElementById(id)?.classList.remove("open");
  document.body.style.overflow = "";
}

function initModals() {
  document.getElementById("close-compare-modal")?.addEventListener("click", () => fecharModal("compare-modal-overlay"));
  document.getElementById("close-quiz-modal")?.addEventListener("click", () => fecharModal("quiz-modal-overlay"));

  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) fecharModal(overlay.id);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open").forEach(overlay => fecharModal(overlay.id));
    }
  });
}

// ==========================================
// 16. QUIZ COM NÍVEIS + RANDOMIZAÇÃO + FILTRO
// ==========================================
function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function abrirQuiz() {
  quizNivel = null;
  quizPerguntasAtivas = [];
  quizIndiceAtual = 0;
  quizRespostas = [];
  ultimaAreaRecomendada = null;
  ultimasLangsRecomendadas = [];
  renderQuizEscolhaNivel();
  abrirModal("quiz-modal-overlay");
}

function renderQuizEscolhaNivel() {
  const content = document.getElementById("quiz-content");
  content.innerHTML = `
    <h3>🎯 Qual linguagem combina comigo?</h3>
    <p style="color:var(--text-muted); margin-bottom:1.2rem; font-size:0.9rem;">
      Escolha o tamanho do quiz. Quanto mais perguntas, maior a precisão da recomendação.
    </p>
    <div class="quiz-level-grid">
      ${Object.entries(QUIZ_NIVEIS).map(([key, info]) => `
        <button class="quiz-level-btn" data-nivel="${key}">
          <strong>${info.label}</strong>
          <span>${info.perguntas} perguntas</span>
          <small>${info.desc}</small>
        </button>
      `).join("")}
    </div>
  `;

  content.querySelectorAll(".quiz-level-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      iniciarQuizComNivel(btn.dataset.nivel);
    });
  });
}

function iniciarQuizComNivel(nivel) {
  quizNivel = nivel;
  const qtd = QUIZ_NIVEIS[nivel].perguntas;
  // Embaralha o banco e pega as N primeiras; depois embaralha as opções de cada pergunta
  const bancoEmbaralhado = shuffle(quizBancoCompleto);
  quizPerguntasAtivas = bancoEmbaralhado.slice(0, qtd).map(p => ({
    pergunta: p.pergunta,
    opcoes: shuffle(p.opcoes)
  }));
  quizIndiceAtual = 0;
  quizRespostas = [];
  renderQuizPergunta();
}

function renderQuizPergunta() {
  const content = document.getElementById("quiz-content");
  const pergunta = quizPerguntasAtivas[quizIndiceAtual];
  const total = quizPerguntasAtivas.length;
  const progresso = quizPerguntasAtivas.map((_, i) =>
    `<span class="${i < quizIndiceAtual ? "done" : ""}"></span>`
  ).join("");

  content.innerHTML = `
    <div class="quiz-progress">${progresso}</div>
    <p class="quiz-step-label">Pergunta ${quizIndiceAtual + 1} de ${total} · ${QUIZ_NIVEIS[quizNivel].label}</p>
    <h3>${pergunta.pergunta}</h3>
    ${pergunta.opcoes.map((op) => `
      <button class="quiz-modal-option" data-area="${op.area}">${op.texto}</button>
    `).join("")}
  `;

  content.querySelectorAll(".quiz-modal-option").forEach(btn => {
    btn.addEventListener("click", () => {
      quizRespostas.push(parseInt(btn.dataset.area, 10));
      quizIndiceAtual++;
      if (quizIndiceAtual < quizPerguntasAtivas.length) {
        renderQuizPergunta();
      } else {
        renderQuizResultado();
      }
    });
  });
}

function renderQuizResultado() {
  const contagem = {};
  quizRespostas.forEach(idx => {
    contagem[idx] = (contagem[idx] || 0) + 1;
  });

  // Ordena áreas por score
  const ranking = Object.entries(contagem)
    .map(([idx, score]) => ({ idx: parseInt(idx, 10), score }))
    .sort((a, b) => b.score - a.score);

  const melhorIndice = ranking[0]?.idx ?? 0;
  const areaRecomendada = areas[melhorIndice];
  ultimaAreaRecomendada = areaRecomendada;

  // Linguagens recomendadas = união das langs das top áreas (limitado)
  const langSet = new Set();
  ranking.slice(0, 3).forEach(r => {
    (areas[r.idx]?.langs || []).forEach(l => langSet.add(l));
  });
  // Mantém só as que existem no nosso banco de linguagens
  const nomesLangs = linguagens.map(l => l.nome);
  ultimasLangsRecomendadas = [...langSet].filter(n =>
    nomesLangs.some(nl => nl.toLowerCase().includes(n.toLowerCase()) || n.toLowerCase().includes(nl.toLowerCase()))
  ).slice(0, 8);

  // Fallback: se poucas, usa as da área principal
  if (ultimasLangsRecomendadas.length < 3) {
    ultimasLangsRecomendadas = areaRecomendada.langs.slice(0, 6);
  }

  const outrasAreas = ranking.slice(1, 3).map(r => areas[r.idx]).filter(Boolean);

  const content = document.getElementById("quiz-content");
  content.innerHTML = `
    <div class="quiz-progress">${quizPerguntasAtivas.map(() => '<span class="done"></span>').join("")}</div>
    <h3>🎯 Sua área ideal: ${areaRecomendada.nome}</h3>
    <p style="color:var(--text-muted); margin-bottom:0.8rem;">${areaRecomendada.desc}</p>
    <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem;">
      Baseado no quiz <strong>${QUIZ_NIVEIS[quizNivel].label}</strong> (${quizPerguntasAtivas.length} perguntas).
    </p>

    <h4 style="font-size:0.95rem; margin-bottom:0.5rem;">Linguagens recomendadas</h4>
    <div class="quiz-result-langs">${ultimasLangsRecomendadas.map(l => `<span>${l}</span>`).join("")}</div>

    ${outrasAreas.length ? `
      <h4 style="font-size:0.95rem; margin:1rem 0 0.5rem;">Outras áreas que combinam</h4>
      <ul class="quiz-other-areas">
        ${outrasAreas.map(a => `<li><strong>${a.nome}</strong> — ${a.desc}</li>`).join("")}
      </ul>
    ` : ""}

    <div class="hero-actions" style="margin-top:1.4rem;">
      <button class="btn-primary" id="quiz-filtrar-langs">Ver linguagens filtradas</button>
      <button class="btn-ghost" id="quiz-filtrar-areas">Ver áreas filtradas</button>
      <button class="btn-ghost" id="quiz-refazer">Refazer quiz</button>
    </div>
  `;

  document.getElementById("quiz-filtrar-langs")?.addEventListener("click", () => {
    fecharModal("quiz-modal-overlay");
    aplicarFiltroPosQuiz("linguagens");
  });

  document.getElementById("quiz-filtrar-areas")?.addEventListener("click", () => {
    fecharModal("quiz-modal-overlay");
    aplicarFiltroPosQuiz("areas");
  });

  document.getElementById("quiz-refazer")?.addEventListener("click", () => {
    abrirQuiz();
  });
}

function aplicarFiltroPosQuiz(destino) {
  if (destino === "linguagens") {
    irParaPagina("linguagens");
    // Filtra o grid pelas linguagens recomendadas
    const termoBusca = "";
    const filtradas = linguagens.filter(l =>
      ultimasLangsRecomendadas.some(rec =>
        l.nome.toLowerCase().includes(rec.toLowerCase()) ||
        rec.toLowerCase().includes(l.nome.toLowerCase())
      )
    );
    // Limpa categoria para "todas" e mostra só as recomendadas
    filtroCategoriaLinguagens = "todas";
    document.querySelectorAll(".sidebar-btn").forEach(b =>
      b.classList.toggle("active", b.dataset.categoria === "todas")
    );
    const input = document.getElementById("search-lang-input");
    if (input) input.value = "";
    renderLinguagens(filtradas.length ? filtradas : linguagens);
    showToast(`Mostrando ${filtradas.length || linguagens.length} linguagens alinhadas ao seu perfil`);
  } else {
    irParaPagina("areas");
    // Mostra a área principal + secundárias
    const indices = new Set([areas.indexOf(ultimaAreaRecomendada)]);
    // Reconstrói ranking simples a partir das respostas
    const contagem = {};
    quizRespostas.forEach(idx => { contagem[idx] = (contagem[idx] || 0) + 1; });
    Object.keys(contagem)
      .sort((a, b) => contagem[b] - contagem[a])
      .slice(0, 3)
      .forEach(i => indices.add(parseInt(i, 10)));

    const filtradas = areas.filter((_, i) => indices.has(i));
    const input = document.getElementById("search-area-input");
    if (input) input.value = "";
    renderAreas(filtradas.length ? filtradas : areas);
    showToast(`Mostrando as áreas que mais combinam com você`);
  }
}

// ==========================================
// 17. DESAFIO DE LÓGICA
// ==========================================
function renderDesafioLogica() {
  const container = document.getElementById("logic-quiz-grid");
  if (!container) return;

  container.innerHTML = desafioLogica.map((q, qi) => `
    <div class="quiz-item">
      <p class="quiz-question">${qi + 1}. ${q.pergunta}</p>
      <div class="quiz-options">
        ${q.opcoes.map((op, oi) => `<button class="quiz-option" data-q="${qi}" data-o="${oi}">${op}</button>`).join("")}
      </div>
      <div class="quiz-explanation" id="explicacao-${qi}">${q.explicacao}</div>
    </div>
  `).join("");

  container.querySelectorAll(".quiz-option").forEach(btn => {
    btn.addEventListener("click", () => {
      const qi = parseInt(btn.dataset.q, 10);
      const oi = parseInt(btn.dataset.o, 10);
      const pergunta = desafioLogica[qi];
      const todasOpcoes = container.querySelectorAll(`.quiz-option[data-q="${qi}"]`);

      todasOpcoes.forEach(b => {
        b.disabled = true;
        const bo = parseInt(b.dataset.o, 10);
        if (bo === pergunta.correta) b.classList.add("correct");
        else if (bo === oi) b.classList.add("incorrect");
      });

      document.getElementById(`explicacao-${qi}`)?.classList.add("show");
    });
  });
}

// ==========================================
// 18. FILTROS
// ==========================================
function aplicarFiltrosLinguagens() {
  const termo = (document.getElementById("search-lang-input")?.value || "").toLowerCase().trim();

  const filtradas = linguagens.filter(l => {
    const matchTermo =
      l.nome.toLowerCase().includes(termo) ||
      l.tag.toLowerCase().includes(termo) ||
      l.desc.toLowerCase().includes(termo);

    let matchCategoria = true;
    if (filtroCategoriaLinguagens === "favoritos") {
      matchCategoria = isFavorito(l.nome);
    } else if (filtroCategoriaLinguagens !== "todas") {
      matchCategoria = l.categoria === filtroCategoriaLinguagens;
    }

    return matchTermo && matchCategoria;
  });

  renderLinguagens(filtradas);
}

function aplicarFiltrosCursosTI() {
  const termo = (document.getElementById("course-search-input")?.value || "").toLowerCase().trim();

  const filtrados = cursosTI.filter(c => {
    const matchTermo =
      c.nome.toLowerCase().includes(termo) ||
      c.foco.toLowerCase().includes(termo) ||
      c.desc.toLowerCase().includes(termo);
    const matchNivel = filtroNivelCursoTI === "todos" || c.nivel === filtroNivelCursoTI;
    const matchModalidade = filtroModalidadeCursoTI === "todas" || c.modalidades.includes(filtroModalidadeCursoTI);
    return matchTermo && matchNivel && matchModalidade;
  });

  renderCursosTI(filtrados);
}

function initFilters() {
  const langInput = document.getElementById("search-lang-input");
  const areaInput = document.getElementById("search-area-input");

  langInput?.addEventListener("input", aplicarFiltrosLinguagens);

  areaInput?.addEventListener("input", (e) => {
    const termo = e.target.value.toLowerCase().trim();
    const filtradas = areas.filter(a =>
      a.nome.toLowerCase().includes(termo) ||
      a.desc.toLowerCase().includes(termo) ||
      a.langs.some(l => l.toLowerCase().includes(termo))
    );
    renderAreas(filtradas);
  });

  document.querySelectorAll(".sidebar-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".sidebar-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filtroCategoriaLinguagens = btn.dataset.categoria;
      aplicarFiltrosLinguagens();
    });
  });
}

function initCourseFilterLogica() {
  const chips = document.querySelectorAll("#course-filter-chips .chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const filtro = chip.dataset.filtro;
      const filtrados = filtro === "todos" ? cursosLogica : cursosLogica.filter(c => c.tipo === filtro);
      renderCursosLogica(filtrados);
    });
  });
}

function initCourseCatalogSearch() {
  document.getElementById("course-search-input")?.addEventListener("input", aplicarFiltrosCursosTI);

  document.querySelectorAll("#course-level-chips .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#course-level-chips .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      filtroNivelCursoTI = chip.dataset.nivel;
      aplicarFiltrosCursosTI();
    });
  });

  document.querySelectorAll("#course-modality-chips .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#course-modality-chips .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      filtroModalidadeCursoTI = chip.dataset.modalidade;
      aplicarFiltrosCursosTI();
    });
  });
}

// ==========================================
// 19. BUSCA DE FACULDADES
// ==========================================
function pareceEAD(nome) {
  return /\bead\b|distânc|distanc|virtual|\bpolo\b|semipresencial/i.test(nome);
}

function initSearchModeToggle() {
  const toggle = document.getElementById("search-mode-toggle");
  if (!toggle) return;

  const btns = toggle.querySelectorAll(".segmented-btn");
  const facPanel = document.getElementById("faculdades-panel");
  const cursosPanel = document.getElementById("cursos-panel");
  const resultsContainer = document.getElementById("results-container");

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      if (btn.dataset.mode === "faculdades") {
        facPanel.style.display = "";
        cursosPanel.style.display = "none";
        resultsContainer.innerHTML = `
          <div class="empty fade-in">
            <span class="empty-icon">🏫</span>
            <p>Preencha os campos acima ou escolha um atalho rápido para listar as instituições.</p>
          </div>
        `;
      } else {
        facPanel.style.display = "none";
        cursosPanel.style.display = "";
        aplicarFiltrosCursosTI();
      }
    });
  });
}

// Cache em memória do dataset mundial (carregado 1x via CDN HTTPS com CORS)
let universidadesCache = null;
let universidadesLoadPromise = null;

async function carregarUniversidadesGlobais() {
  if (universidadesCache) return universidadesCache;
  if (universidadesLoadPromise) return universidadesLoadPromise;

  universidadesLoadPromise = (async () => {
    // Dataset oficial Hipo — espelhado no jsDelivr (HTTPS + Access-Control-Allow-Origin: *)
    // A API hipolabs.com só responde em HTTP e falha em páginas HTTPS (mixed content).
    const url = "https://cdn.jsdelivr.net/gh/Hipo/university-domains-list@master/world_universities_and_domains.json";
    const response = await fetch(url);
    if (!response.ok) throw new Error("Falha ao baixar base de universidades.");
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error("Formato inesperado da base de dados.");
    universidadesCache = data;
    return data;
  })();

  try {
    return await universidadesLoadPromise;
  } catch (err) {
    universidadesLoadPromise = null;
    throw err;
  }
}

function normalizarPais(nome) {
  const n = (nome || "").trim().toLowerCase();
  return dicionarioPaises[n] || nome.trim();
}

function initSearchEngine() {
  const form = document.getElementById("search-form");
  const resultsContainer = document.getElementById("results-container");
  const searchBtn = document.getElementById("search-btn");
  const eadFilter = document.getElementById("ead-filter");

  if (!form) return;

  // Pré-carrega a base em background (não bloqueia a UI)
  carregarUniversidadesGlobais().catch(() => { /* silencioso até a busca */ });

  const quickBtns = document.querySelectorAll(".quick-tag-btn");
  quickBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("country").value = btn.dataset.c || "";
      document.getElementById("state").value = btn.dataset.s || "";
      document.getElementById("city").value = btn.dataset.ci || "";
      form.dispatchEvent(new Event("submit"));
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const rawCountry = document.getElementById("country").value.trim();
    const stateInput = document.getElementById("state").value.trim().toLowerCase();
    const cityInput = document.getElementById("city").value.trim().toLowerCase();
    const somenteEAD = eadFilter?.checked;

    if (!rawCountry) {
      showToast("Informe o país para buscar");
      return;
    }

    const apiCountry = normalizarPais(rawCountry);
    const countryLower = apiCountry.toLowerCase();

    searchBtn.disabled = true;
    searchBtn.innerHTML = "⏳ Buscando...";
    resultsContainer.innerHTML = `
      <div class="loading fade-in">
        <div class="spinner"></div>
        <p>Carregando base mundial e filtrando <strong>${apiCountry}</strong>...</p>
      </div>
    `;

    try {
      const all = await carregarUniversidadesGlobais();

      // Filtro por país (nome canônico em inglês no dataset)
      let universities = all.filter(u =>
        (u.country || "").toLowerCase() === countryLower
      );

      // Instituições de referência BR (sempre injetadas se Brasil)
      if (countryLower === "brazil") {
        instituicoesEspeciaisPR.forEach(inst => {
          const key = (inst.name || "").toLowerCase().slice(0, 12);
          const jaExiste = universities.some(u =>
            (u.name || "").toLowerCase().includes(key) ||
            (u.name || "").toLowerCase() === (inst.name || "").toLowerCase()
          );
          if (!jaExiste) {
            universities.unshift({
              name: inst.name,
              country: inst.country,
              "state-province": inst.state,
              web_pages: [inst.web_page],
              domains: []
            });
          }
        });
      }

      if (stateInput) {
        universities = universities.filter(u => {
          const st = (u["state-province"] || "").toLowerCase();
          const nm = (u.name || "").toLowerCase();
          return st.includes(stateInput) || nm.includes(stateInput);
        });
      }

      if (cityInput) {
        universities = universities.filter(u => {
          const nm = (u.name || "").toLowerCase();
          const st = (u["state-province"] || "").toLowerCase();
          return nm.includes(cityInput) || st.includes(cityInput);
        });
      }

      if (somenteEAD) {
        universities = universities.filter(u => pareceEAD(u.name || ""));
      }

      // Ordena por nome
      universities.sort((a, b) => (a.name || "").localeCompare(b.name || "", "pt", { sensitivity: "base" }));

      const totalEncontrados = universities.length;
      const mostrar = universities.slice(0, 80);

      if (mostrar.length === 0) {
        resultsContainer.innerHTML = `
          <div class="empty fade-in">
            <span class="empty-icon">❌</span>
            <p>Nenhuma instituição encontrada com esses critérios.</p>
            <small>Dica: use o nome do país em português (ex: Brasil) ou inglês (Brazil). Tente só o país, ou limpe cidade/EAD.</small>
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = `
        <div class="result-count fade-in">
          Encontradas <strong>${totalEncontrados}</strong> instituições
          ${stateInput ? ` · estado/termo “${stateInput}”` : ""}
          ${cityInput ? ` · cidade/termo “${cityInput}”` : ""}
          ${somenteEAD ? " · filtro EAD ativo" : ""}
          ${totalEncontrados > 80 ? " · exibindo as 80 primeiras" : ""}
        </div>
        <div class="grid results-grid">
          ${mostrar.map((u, index) => {
            const pages = u.web_pages || [];
            const webLink = pages[0] || null;
            const ead = pareceEAD(u.name || "");
            const domains = (u.domains || []).slice(0, 2).join(", ");
            return `
              <div class="uni-card fade-in" style="animation-delay: ${Math.min(index, 20) * 0.02}s">
                <div>
                  <h4>${u.name}</h4>
                  <div class="meta">
                    📍 ${u.country}${u["state-province"] ? ` · ${u["state-province"]}` : ""}
                  </div>
                  ${domains ? `<div class="meta meta-domain">🌐 ${domains}</div>` : ""}
                  ${ead ? '<span class="ead-flag">📡 Sinal de EAD no nome</span>' : ""}
                </div>
                ${webLink
                  ? `<a href="${webLink}" target="_blank" rel="noopener" class="uni-link-btn">Acessar portal ↗</a>`
                  : '<span class="uni-link-btn disabled">Website indisponível</span>'}
              </div>
            `;
          }).join("")}
        </div>
      `;
    } catch (err) {
      console.error(err);
      resultsContainer.innerHTML = `
        <div class="error-box fade-in">
          <span class="empty-icon">⚠️</span>
          <h4>Erro ao carregar a base de universidades</h4>
          <p>Não foi possível baixar os dados (CDN). Verifique sua conexão e tente de novo.</p>
          <p style="margin-top:0.6rem;font-size:0.8rem;opacity:0.8">${String(err.message || err)}</p>
        </div>
      `;
    } finally {
      searchBtn.disabled = false;
      searchBtn.innerHTML = '<span>🔍</span> Pesquisar';
    }
  });
}

// ==========================================
// 20. TEMA
// ==========================================
function initThemeEngine() {
  const themeBtn = document.getElementById("theme-btn");
  if (!themeBtn) return;

  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.setAttribute("data-theme", savedTheme);
  themeBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  themeBtn.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.body.setAttribute("data-theme", nextTheme);
    themeBtn.textContent = nextTheme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", nextTheme);
  });
}


// ==========================================
// MATRIX BINARY RAIN (fundo)
// ==========================================
function initMatrixRain() {
  const canvas = document.getElementById("matrix-bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let w, h, columns;
  // Cada coluna: { y, speed, hue: 'purple'|'green', stream: string[], head }
  let streams = [];
  const fontSize = 15;
  const brand = "DevPortal";
  const binary = "01";
  let raf = null;
  let last = 0;

  function buildStreamChars() {
    // Mistura binário com o nome do site (espalhado)
    const len = 18 + Math.floor(Math.random() * 14);
    const arr = [];
    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.12) {
        // injeta uma letra de DevPortal
        arr.push(brand[Math.floor(Math.random() * brand.length)]);
      } else if (Math.random() < 0.04) {
        // ocasionalmente a palavra inteira em sequência
        for (const ch of brand) arr.push(ch);
        i += brand.length - 1;
      } else {
        arr.push(binary[Math.random() > 0.5 ? 1 : 0]);
      }
    }
    return arr;
  }

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    columns = Math.floor(w / fontSize);
    streams = Array.from({ length: columns }, (_, i) => ({
      y: Math.random() * -80,
      // mais lento: 0.25–0.55 células por frame
      speed: 0.28 + Math.random() * 0.32,
      hue: i % 2 === 0 ? "purple" : "green",
      chars: buildStreamChars(),
      tick: 0
    }));
  }

  function colorFor(hue, theme, isHead) {
    const owner = document.body.classList.contains("owner-view");
    if (owner) {
      // carmesim / sangue
      if (isHead) return "rgba(255, 70, 90, 0.7)";
      return hue === "purple" || hue === "crimson"
        ? "rgba(160, 20, 40, 0.28)"
        : "rgba(110, 10, 25, 0.16)";
    }
    if (theme === "light") {
      if (hue === "purple") return isHead ? "rgba(110, 50, 180, 0.28)" : "rgba(100, 50, 160, 0.1)";
      return isHead ? "rgba(30, 120, 80, 0.25)" : "rgba(20, 100, 70, 0.08)";
    }
    if (hue === "purple") {
      return isHead ? "rgba(170, 130, 220, 0.45)" : "rgba(90, 45, 150, 0.18)";
    }
    return isHead ? "rgba(120, 190, 150, 0.4)" : "rgba(25, 90, 60, 0.16)";
  }

  function draw(ts) {
    // ~18fps — chuva mais lenta e suave
    if (ts - last < 55) {
      raf = requestAnimationFrame(draw);
      return;
    }
    last = ts;

    const theme = document.body.getAttribute("data-theme") || "dark";
    // trilha longa (fade lento)
    ctx.fillStyle = theme === "dark" ? "rgba(7, 4, 20, 0.08)" : "rgba(250, 248, 255, 0.1)";
    ctx.fillRect(0, 0, w, h);

    ctx.font = `600 ${fontSize}px "JetBrains Mono", monospace`;
    ctx.textBaseline = "top";

    for (let i = 0; i < streams.length; i++) {
      const s = streams[i];
      const x = i * fontSize;
      const baseY = s.y * fontSize;

      for (let j = 0; j < s.chars.length; j++) {
        const cy = baseY - j * fontSize;
        if (cy < -fontSize || cy > h) continue;
        const isHead = j === 0;
        ctx.fillStyle = colorFor(s.hue, theme, isHead);
        // letras do nome um pouco mais visíveis
        if (brand.includes(s.chars[j]) && s.chars[j] !== "0" && s.chars[j] !== "1") {
          ctx.globalAlpha = isHead ? 1 : 0.75;
        } else {
          ctx.globalAlpha = isHead ? 1 : 0.55;
        }
        ctx.fillText(s.chars[j], x, cy);
      }
      ctx.globalAlpha = 1;

      s.y += s.speed;
      s.tick++;
      // troca o conteúdo da stream de vez em quando
      if (s.tick % 90 === 0) s.chars = buildStreamChars();
      if (baseY - s.chars.length * fontSize > h) {
        s.y = Math.random() * -40;
        s.speed = 0.28 + Math.random() * 0.32;
        s.chars = buildStreamChars();
        s.hue = Math.random() > 0.5 ? "purple" : "green";
      }
    }
    raf = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", debounce(resize, 200));
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    ctx.clearRect(0, 0, w, h);
    return;
  }
  raf = requestAnimationFrame(draw);
}

// ==========================================
// 21. INTEGRAÇÃO COM data.js + ENRIQUECIMENTO
// ==========================================
(function mergeDataModule() {
  if (typeof DP_LINGUAGENS !== "undefined" && Array.isArray(DP_LINGUAGENS) && DP_LINGUAGENS.length) {
    // Mescla por nome: data.js enriquece ou adiciona
    const byName = new Map(linguagens.map(l => [l.nome.toLowerCase(), l]));
    DP_LINGUAGENS.forEach(d => {
      const key = d.nome.toLowerCase();
      if (byName.has(key)) {
        Object.assign(byName.get(key), d);
      } else {
        linguagens.push(d);
        byName.set(key, d);
      }
    });
  }
  if (typeof DP_AREAS !== "undefined" && DP_AREAS.length) {
    const byName = new Map(areas.map(a => [a.nome.toLowerCase(), a]));
    DP_AREAS.forEach(d => {
      const key = d.nome.toLowerCase();
      if (byName.has(key)) Object.assign(byName.get(key), d);
      else areas.push(d);
    });
  }
})();

// ==========================================
// 22. CONTA LOCAL (e-mail + senha no localStorage)
// ==========================================
const AUTH_KEY = "devportal_users_v1";
const SESSION_KEY = "devportal_session_v1";

function hashSenha(s) {
  // Hash simples não-criptográfico para demo local (não use em produção real)
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return "dp_" + Math.abs(h).toString(16) + "_" + s.length;
}

function listUsers() {
  try { return JSON.parse(localStorage.getItem(AUTH_KEY) || "[]"); }
  catch { return []; }
}
function saveUsers(arr) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(arr));
}
function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); }
  catch { return null; }
}
function setSession(email) {
  if (!email) localStorage.removeItem(SESSION_KEY);
  else localStorage.setItem(SESSION_KEY, JSON.stringify({ email, at: Date.now() }));
}

function initAuth() {
  const chip = document.getElementById("auth-chip");
  const closeBtn = document.getElementById("close-auth-modal");
  closeBtn?.addEventListener("click", () => fecharModal("auth-modal-overlay"));
  chip?.addEventListener("click", () => {
    const s = getSession();
    if (s?.email) renderAuthLogged(s.email);
    else renderAuthForms("login");
    abrirModal("auth-modal-overlay");
  });
  updateAuthChip();
}

function updateAuthChip() {
  const chip = document.getElementById("auth-chip");
  if (!chip) return;
  const s = getSession();
  if (s?.email) {
    const short = s.email.split("@")[0];
    chip.textContent = short.length > 12 ? short.slice(0, 12) + "…" : short;
    chip.classList.add("auth-chip-on");
  } else {
    chip.textContent = "Entrar";
    chip.classList.remove("auth-chip-on");
  }
}

function renderAuthForms(mode) {
  const el = document.getElementById("auth-content");
  if (!el) return;
  const isLogin = mode === "login";
  el.innerHTML = `
    <h3>${isLogin ? "Entrar na conta" : "Criar conta"}</h3>
    <p class="auth-note">Crie uma conta ou entre com o e-mail e a senha que você cadastrou.</p>
    <form id="auth-form" class="auth-form">
      <div class="form-group">
        <label for="auth-email">E-mail</label>
        <input type="email" id="auth-email" required placeholder="voce@email.com" autocomplete="username">
      </div>
      <div class="form-group">
        <label for="auth-pass">Senha (mín. 6 caracteres)</label>
        <input type="password" id="auth-pass" required minlength="6" placeholder="••••••••" autocomplete="${isLogin ? "current-password" : "new-password"}">
      </div>
      <button type="submit" class="btn-primary" style="width:100%;margin-top:0.5rem;">${isLogin ? "Entrar" : "Criar conta"}</button>
    </form>
    <p class="auth-switch">
      ${isLogin
        ? 'Não tem conta? <button type="button" class="linkish" id="auth-go-register">Criar uma</button>'
        : 'Já tem conta? <button type="button" class="linkish" id="auth-go-login">Entrar</button>'}
    </p>
  `;
  el.querySelector("#auth-go-register")?.addEventListener("click", () => renderAuthForms("register"));
  el.querySelector("#auth-go-login")?.addEventListener("click", () => renderAuthForms("login"));
  el.querySelector("#auth-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("auth-email").value.trim().toLowerCase();
    const pass = document.getElementById("auth-pass").value;
    if (isLogin) doLogin(email, pass);
    else doRegister(email, pass);
  });
}

function doRegister(email, pass) {
  if (!email.includes("@") || pass.length < 6) {
    showToast("E-mail inválido ou senha muito curta");
    return;
  }
  const users = listUsers();
  if (users.some(u => u.email === email)) {
    showToast("Já existe conta com este e-mail neste navegador");
    return;
  }
  users.push({ email, pass: hashSenha(pass), created: Date.now(), favoritos: [...favoritos] });
  saveUsers(users);
  setSession(email);
  updateAuthChip();
  showToast("Conta criada e sessão iniciada");
  fecharModal("auth-modal-overlay");
}

function doLogin(email, pass) {
  const users = listUsers();
  const u = users.find(x => x.email === email && x.pass === hashSenha(pass));
  if (!u) {
    showToast("E-mail ou senha incorretos");
    return;
  }
  setSession(email);
  if (Array.isArray(u.favoritos)) {
    favoritos = new Set(u.favoritos);
    salvarFavoritos();
    updateSidebarCounts();
  }
  updateAuthChip();
  showToast("Bem-vindo(a) de volta");
  fecharModal("auth-modal-overlay");
}

function renderAuthLogged(email) {
  const el = document.getElementById("auth-content");
  if (!el) return;
  el.innerHTML = `
    <h3>Sua conta</h3>
    <p class="auth-note">Conectado como <strong>${email}</strong></p>
    <ul class="auth-meta">
      <li>Favoritos salvos: <strong>${favoritos.size}</strong></li>
      <li>Armazenamento: localStorage deste navegador</li>
    </ul>
    <div class="hero-actions" style="margin-top:1rem;">
      <button class="btn-primary" id="auth-sync-favs">Salvar favoritos na conta</button>
      <button class="btn-ghost" id="auth-logout">Sair</button>
    </div>
  `;
  el.querySelector("#auth-logout")?.addEventListener("click", () => {
    setSession(null);
    updateAuthChip();
    showToast("Sessão encerrada");
    fecharModal("auth-modal-overlay");
  });
  el.querySelector("#auth-sync-favs")?.addEventListener("click", () => {
    const users = listUsers();
    const u = users.find(x => x.email === email);
    if (u) {
      u.favoritos = [...favoritos];
      saveUsers(users);
      showToast("Favoritos sincronizados na conta local");
    }
  });
}

// ==========================================
// 23. PÁGINA TRILHAS / GLOSSÁRIO / FAQ
// ==========================================
function initTrilhasPage() {
  const toggle = document.getElementById("trilhas-mode-toggle");
  if (!toggle) return;

  const panels = {
    trilhas: document.getElementById("trilhas-panel"),
    glossario: document.getElementById("glossario-panel"),
    ferramentas: document.getElementById("ferramentas-panel"),
    faq: document.getElementById("faq-panel"),
    guias: document.getElementById("guias-panel")
  };

  toggle.querySelectorAll(".segmented-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      toggle.querySelectorAll(".segmented-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const mode = btn.dataset.tmode;
      Object.entries(panels).forEach(([k, el]) => {
        if (el) el.style.display = k === mode ? "" : "none";
      });
    });
  });

  renderTrilhas();
  renderGlossario(typeof DP_GLOSSARIO !== "undefined" ? DP_GLOSSARIO : []);
  renderFerramentas(typeof DP_FERRAMENTAS !== "undefined" ? DP_FERRAMENTAS : []);
  renderFaq(typeof DP_FAQ !== "undefined" ? DP_FAQ : []);
  renderGuias();

  document.getElementById("search-glossario")?.addEventListener("input", (e) => {
    const termo = e.target.value.toLowerCase().trim();
    const all = typeof DP_GLOSSARIO !== "undefined" ? DP_GLOSSARIO : [];
    const filtrado = all.filter(g =>
      g.termo.toLowerCase().includes(termo) || g.def.toLowerCase().includes(termo)
    );
    renderGlossario(filtrado);
  });

  document.getElementById("feat-trilhas")?.addEventListener("click", () => irParaPagina("trilhas"));
}

function renderTrilhas() {
  const grid = document.getElementById("trilhas-grid");
  if (!grid) return;
  const list = typeof DP_TRILHAS !== "undefined" ? DP_TRILHAS : [];
  grid.innerHTML = list.map(t => `
    <div class="trilha-card">
      <span class="tag">${t.nivel}</span>
      <h3>${t.titulo}</h3>
      <p>${t.resumo}</p>
      <p class="meta"><strong>Tempo estimado:</strong> ${t.tempo}</p>
      <div class="trilha-etapas">
        ${t.etapas.map((e, i) => `
          <div class="trilha-etapa">
            <strong>${i + 1}. ${e.nome}</strong>
            <ul>${e.itens.map(it => `<li>${it}</li>`).join("")}</ul>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function renderGlossario(lista) {
  const grid = document.getElementById("glossario-grid");
  if (!grid) return;
  if (!lista.length) {
    grid.innerHTML = `<p class="no-results">Nenhum termo encontrado.</p>`;
    return;
  }
  grid.innerHTML = lista.map(g => `
    <div class="glossary-item">
      <h4>${g.termo}</h4>
      <p>${g.def}</p>
    </div>
  `).join("");
}

function renderFerramentas(lista) {
  const grid = document.getElementById("ferramentas-grid");
  if (!grid) return;
  grid.innerHTML = lista.map(f => `
    <div class="tool-card">
      <span class="tag">${f.cat}</span>
      <h4>${f.nome}</h4>
      <p>${f.desc}</p>
    </div>
  `).join("");
}

function renderFaq(lista) {
  const box = document.getElementById("faq-list");
  if (!box) return;
  box.innerHTML = lista.map((f, i) => `
    <details class="faq-item">
      <summary>${f.q}</summary>
      <p>${f.a}</p>
    </details>
  `).join("");
}

function renderGuias() {
  const wrap = document.getElementById("guias-wrap");
  const mercado = document.getElementById("mercado-grid");
  const dicas = document.getElementById("dicas-grid");
  if (wrap && typeof DP_GUIAS !== "undefined") {
    wrap.innerHTML = DP_GUIAS.map(g => `
      <article class="guia-card">
        <h3>${g.titulo}</h3>
        ${g.paragrafos.map(p => `<p>${p}</p>`).join("")}
      </article>
    `).join("");
  }
  if (mercado && typeof DP_MERCADO_NOTAS !== "undefined") {
    mercado.innerHTML = DP_MERCADO_NOTAS.map(m => `
      <div class="note-card">
        <h4>${m.titulo}</h4>
        <p>${m.texto}</p>
      </div>
    `).join("");
  }
  if (dicas && typeof DP_DICAS !== "undefined") {
    dicas.innerHTML = DP_DICAS.map(d => `
      <div class="note-card">
        <h4>${d.titulo}</h4>
        <p>${d.texto}</p>
      </div>
    `).join("");
  }
}

// Enriquecer cards de linguagem com nivel/mercado quando existirem
const _renderLinguagensOriginal = renderLinguagens;
renderLinguagens = function(lista) {
  const langGrid = document.getElementById("lang-grid");
  if (!langGrid) return;
  langGrid.innerHTML = "";
  if (lista.length === 0) {
    langGrid.innerHTML = `<p class="no-results">Nenhuma linguagem encontrada com este filtro.</p>`;
    return;
  }
  lista.forEach((lang, idx) => {
    const card = document.createElement("div");
    card.className = "card fade-in";
    card.style.animationDelay = `${idx * 0.03}s`;
    const extra = [];
    if (lang.nivel) extra.push(`<li><strong>Nível:</strong> ${lang.nivel}</li>`);
    if (lang.mercado) extra.push(`<li><strong>Mercado:</strong> ${lang.mercado}</li>`);
    if (lang.quandoAprender) extra.push(`<li><strong>Quando aprender:</strong> ${lang.quandoAprender}</li>`);
    if (lang.relacionados?.length) extra.push(`<li><strong>Relacionadas:</strong> ${lang.relacionados.join(", ")}</li>`);
    card.innerHTML = `
      <div class="card-actions">
        <button class="icon-btn fav-btn ${isFavorito(lang.nome) ? "fav-active" : ""}" title="Favoritar" aria-label="Favoritar ${lang.nome}">${isFavorito(lang.nome) ? "⭐" : "☆"}</button>
        <button class="icon-btn compare-btn ${isComparando(lang.nome) ? "compare-active" : ""}" title="Comparar" aria-label="Comparar ${lang.nome}">⚖️</button>
      </div>
      <span class="tag">${lang.tag}</span>
      <h3>${lang.nome}</h3>
      <p>${lang.desc}</p>
      <div class="details">
        <ul>
          ${(lang.detalhes || []).map(d => `<li>${d}</li>`).join("")}
          ${extra.join("")}
        </ul>
      </div>
      <span class="card-hint">💡 Clique para expandir</span>
    `;
    card.addEventListener("click", () => card.classList.toggle("open"));
    card.querySelector(".fav-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorito(lang.nome);
      aplicarFiltrosLinguagens();
    });
    card.querySelector(".compare-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleComparar(lang.nome);
      aplicarFiltrosLinguagens();
    });
    langGrid.appendChild(card);
  });
};

// Hook init
const _domReady = document.addEventListener;
document.addEventListener("DOMContentLoaded", () => {
  // já existe listener principal; este é adicional seguro
  try { initAuth(); } catch (e) { console.warn(e); }
  try { initTrilhasPage(); } catch (e) { console.warn(e); }
  try { updateCounters(); aplicarFiltrosLinguagens(); renderAreas(areas); } catch (e) {}
});

// ==========================================
// 24. SPLASH DE ABERTURA (Matrix + DevPortal)
// ==========================================
function initSplash() {
  const splash = document.getElementById("splash-screen");
  const canvas = document.getElementById("splash-matrix");
  if (!splash) return;

  document.body.classList.add("splash-active");

  // mini matrix só no splash
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let w, h, cols, drops;
    const fs = 16;
    const chars = "01DevPortal";

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cols = Math.floor(w / fs);
      drops = Array.from({ length: cols }, () => Math.random() * 40);
    }
    resize();

    let running = true;
    function frame() {
      if (!running) return;
      ctx.fillStyle = "rgba(5, 2, 16, 0.12)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `600 ${fs}px "JetBrains Mono", monospace`;
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const purple = i % 2 === 0;
        ctx.fillStyle = purple ? "rgba(160, 100, 230, 0.55)" : "rgba(40, 140, 90, 0.45)";
        ctx.fillText(ch, i * fs, drops[i] * fs);
        drops[i] += 0.45 + Math.random() * 0.35;
        if (drops[i] * fs > h && Math.random() > 0.97) drops[i] = 0;
      }
      requestAnimationFrame(frame);
    }
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(frame);
    }

    // fecha em ~2.8s (barra anima 2.6s)
    const DURATION = 2800;
    setTimeout(() => {
      running = false;
      splash.classList.add("splash-hide");
      document.body.classList.remove("splash-active");
      setTimeout(() => splash.remove(), 800);
    }, DURATION);
  } else {
    setTimeout(() => {
      splash.classList.add("splash-hide");
      document.body.classList.remove("splash-active");
      setTimeout(() => splash.remove(), 800);
    }, 2200);
  }
}

// ==========================================
// 25. AUTH VIA BACKEND (Node) + PAINEL ADMIN
// ==========================================
// Se o site for aberto pelo server.js (porta 3847), usa mesma origem.
// Se for Live Server / file://, aponta para a API local.
const API_BASE = (function () {
  // file:// ou Live Server (5500/5501) → API local
  if (location.protocol === "file:" || location.port === "5500" || location.port === "5501") {
    return "http://localhost:3847";
  }
  // Servido pelo backend TypeScript (local ou Render/Fly/etc.) → mesma origem
  return "";
})();

const SESSION_TOKEN_KEY = "devportal_api_token";

function apiUrl(path) {
  return `${API_BASE}${path}`;
}

async function apiFetch(path, options = {}) {
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
  const token = localStorage.getItem(SESSION_TOKEN_KEY);
  if (token) headers["X-Session-Token"] = token;
  const res = await fetch(apiUrl(path), { ...options, headers });
  let data = null;
  try { data = await res.json(); } catch { data = {}; }
  if (!res.ok) {
    const err = new Error(data.error || "Falha na API");
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

async function apiHealth() {
  try {
    const r = await fetch(apiUrl("/api/health"), { method: "GET" });
    return r.ok;
  } catch {
    return false;
  }
}

// Sobrescreve o fluxo de conta para usar a API
function initAuth() {
  const chip = document.getElementById("auth-chip");
  const closeBtn = document.getElementById("close-auth-modal");
  const closeAdmin = document.getElementById("close-admin-modal");
  closeBtn?.addEventListener("click", () => fecharModal("auth-modal-overlay"));
  closeAdmin?.addEventListener("click", () => fecharModal("admin-modal-overlay"));

  chip?.addEventListener("click", async () => {
    const token = localStorage.getItem(SESSION_TOKEN_KEY);
    if (token) {
      try {
        await apiFetch("/api/me");
        openProfilePanel();
        return;
      } catch {
        localStorage.removeItem(SESSION_TOKEN_KEY);
      }
    }
    renderAuthFormsApi("login");
    abrirModal("auth-modal-overlay");
  });

  updateAuthChipApi();
}

async function updateAuthChipApi() {
  const chip = document.getElementById("auth-chip");
  if (!chip) return;
  const letterEl = document.getElementById("avatar-chip-letter");
  const imgEl = document.getElementById("avatar-chip-img");
  const token = localStorage.getItem(SESSION_TOKEN_KEY);

  function setLoggedOut() {
    chip.classList.remove("auth-chip-on", "is-logged");
    chip.title = "Entrar";
    if (letterEl) {
      letterEl.hidden = false;
      letterEl.textContent = "?";
    }
    if (imgEl) {
      imgEl.hidden = true;
      imgEl.removeAttribute("src");
    }
    applyOwnerView(null);
    applyStaffNav(false);
  }

  if (!token) {
    setLoggedOut();
    return;
  }
  try {
    const me = await apiFetch("/api/me");
    window.__dpMe = me;
    chip.classList.add("auth-chip-on", "is-logged");
    const base = (me.displayName || me.username || (me.email || "?").split("@")[0] || "?").trim();
    const letter = (base.charAt(0) || "?").toUpperCase();
    chip.title = base + (me.role === "owner" ? " (dono)" : me.role === "moderator" ? " (moderador)" : "");
    if (me.avatarUrl) {
      if (imgEl) {
        imgEl.src = me.avatarUrl;
        imgEl.hidden = false;
      }
      if (letterEl) letterEl.hidden = true;
    } else {
      if (imgEl) {
        imgEl.hidden = true;
        imgEl.removeAttribute("src");
      }
      if (letterEl) {
        letterEl.hidden = false;
        letterEl.textContent = letter;
      }
    }
    applyStaffNav(me.role === "owner" || me.role === "moderator");
    applyOwnerView(me);
  } catch (err) {
    if (err && (err.status === 403 || err.status === 423) && err.data) {
      showRestrictionWall(err.data);
      localStorage.removeItem(SESSION_TOKEN_KEY);
      setLoggedOut();
      return;
    }
    if (err && err.status === 401) {
      localStorage.removeItem(SESSION_TOKEN_KEY);
      setLoggedOut();
    } else if (!window.__dpMe) {
      setLoggedOut();
    }
  }
}

function renderAuthFormsApi(mode) {
  const el = document.getElementById("auth-content");
  if (!el) return;
  const isLogin = mode === "login";
  el.innerHTML = `
    <h3>${isLogin ? "Entrar na conta" : "Criar conta"}</h3>
    <p class="auth-note">Crie uma conta ou entre com o e-mail e a senha que você cadastrou.</p>
    <form id="auth-form" class="auth-form">
      <div class="form-group">
        <label for="auth-email">E-mail</label>
        <input type="text" id="auth-email" required placeholder="voce@email.com" autocomplete="username">
      </div>
      <div class="form-group">
        <label for="auth-pass">Senha (mín. 6 caracteres)</label>
        <input type="password" id="auth-pass" required minlength="6" placeholder="••••••••" autocomplete="${isLogin ? "current-password" : "new-password"}">
      </div>
      <button type="submit" class="btn-primary" style="width:100%;margin-top:0.5rem;">${isLogin ? "Entrar" : "Criar conta"}</button>
    </form>
    <p class="auth-switch">
      ${isLogin
        ? 'Não tem conta? <button type="button" class="linkish" id="auth-go-register">Criar uma</button>'
        : 'Já tem conta? <button type="button" class="linkish" id="auth-go-login">Entrar</button>'}
    </p>
    <div id="google-auth-section" style="display:none;">
      <div class="auth-divider">ou</div>
      <div class="google-btn-wrap" id="google-btn-wrap"></div>
    </div>
    <p class="auth-note" id="auth-api-status" style="margin-top:0.8rem;"></p>
  `;
  apiHealth().then(ok => {
    const st = document.getElementById("auth-api-status");
    if (st) {
      if (!ok) st.textContent = "Não foi possível conectar. Tente de novo em instantes.";
      else st.textContent = "";
    }
  });
  mountGoogleButton();
  el.querySelector("#auth-go-register")?.addEventListener("click", () => renderAuthFormsApi("register"));
  el.querySelector("#auth-go-login")?.addEventListener("click", () => renderAuthFormsApi("login"));
  el.querySelector("#auth-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("auth-email").value.trim().toLowerCase();
    const pass = document.getElementById("auth-pass").value;
    try {
      if (isLogin) {
        const data = await apiFetch("/api/login", { method: "POST", body: JSON.stringify({ email, password: pass }) });
        localStorage.setItem(SESSION_TOKEN_KEY, data.token);
        if (Array.isArray(data.favorites)) {
          favoritos = new Set(data.favorites);
          salvarFavoritos();
          updateSidebarCounts();
          aplicarFiltrosLinguagens();
        }
        showToast(data.role === "owner" ? "Dono conectado" : data.role === "moderator" ? "Moderador conectado" : "Bem-vindo(a) de volta");
        await updateAuthChipApi();
        fecharModal("auth-modal-overlay");
        rebuildMainNav(window.__dpMe);
        if (data.role === "owner") goToPage("owner-dash");
        else if (data.role === "moderator") goToPage("painel");
      } else {
        const data = await apiFetch("/api/register", {
          method: "POST",
          body: JSON.stringify({ email, password: pass, favorites: [...favoritos] })
        });
        localStorage.setItem(SESSION_TOKEN_KEY, data.token);
        showToast("Conta criada no servidor");
        updateAuthChipApi();
        fecharModal("auth-modal-overlay");
      }
    } catch (err) {
      if (err.data && (err.data.code === "BANNED" || err.data.code === "TIMEOUT" || err.status === 403)) showRestrictionWall(err.data || { error: err.message, code: "BANNED" });
      else showToast(err.message || "Erro de autenticação");
    }
  });
}

function renderAuthLoggedApi(me) {
  const el = document.getElementById("auth-content");
  if (!el) return;
  el.innerHTML = `
    <h3>Sua conta</h3>
    <p class="auth-note">Conectado como <strong>${me.email}</strong>${me.role === "owner" ? " · <span class=\"admin-badge\">dono</span>" : me.role === "moderator" ? " · <span class=\"admin-badge\">moderador</span>" : ""}</p>
    <ul class="auth-meta">
      <li>Favoritos salvos: <strong>${(me.favorites || []).length}</strong></li>
    </ul>
    <div class="hero-actions" style="margin-top:1rem;">
      <button class="btn-primary" id="auth-open-profile">Meu perfil</button>
      <button class="btn-ghost" id="auth-sync-favs">Salvar favoritos</button>
      ${me.role === "owner" || me.role === "moderator" ? '<button class="btn-ghost" id="auth-open-admin">Painel da equipe</button>' : ""}
      <button class="btn-ghost" id="auth-logout">Sair</button>
    </div>
  `;
  el.querySelector("#auth-logout")?.addEventListener("click", async () => {
    try { await apiFetch("/api/logout", { method: "POST", body: "{}" }); } catch {}
    localStorage.removeItem(SESSION_TOKEN_KEY);
    updateAuthChipApi();
    showToast("Sessão encerrada");
    fecharModal("auth-modal-overlay");
  });
  el.querySelector("#auth-sync-favs")?.addEventListener("click", async () => {
    try {
      await apiFetch("/api/favorites", { method: "POST", body: JSON.stringify({ favorites: [...favoritos] }) });
      showToast("Favoritos salvos no servidor");
    } catch (e) {
      showToast(e.message || "Falha ao salvar");
    }
  });
  el.querySelector("#auth-open-admin")?.addEventListener("click", () => {
    fecharModal("auth-modal-overlay");
    openAdminPanel();
  });
  el.querySelector("#auth-open-profile")?.addEventListener("click", () => {
    fecharModal("auth-modal-overlay");
    openProfilePanel();
  });
}


async function openAdminPanel() {
  const box = document.getElementById("admin-content");
  if (!box) return;
  box.innerHTML = `<div class="loading"><div class="spinner"></div><p>Carregando…</p></div>`;
  abrirModal("admin-modal-overlay");
  try {
    const data = await apiFetch("/api/admin/users");
    const me = data.me || {};
    const perms = me.permissions || {};
    const isOwner = me.role === "owner";
    let bans = { bans: [] };
    try {
      if (perms.ban) bans = await apiFetch("/api/admin/bans");
    } catch (_) {}
    const banSet = new Set((bans.bans || []).map(b => b.email));

    box.innerHTML = `
      <p class="result-count">${data.total} conta(s) · você: <strong>${isOwner ? "dono" : "moderador"}</strong></p>
      <div style="overflow-x:auto;">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Conta</th>
              <th>Papel</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            ${(data.users || []).map(u => {
              const roleLabel = u.role === "owner" ? "dono" : u.role === "moderator" ? "moderador" : "membro";
              const banned = u.banned || banSet.has(u.email);
              const timeout = u.timeoutUntil && new Date(u.timeoutUntil) > new Date();
              let status = "ativa";
              if (banned) status = "banida";
              else if (timeout) status = "timeout";
              const name = (u.displayName || u.username || "").trim();
              const canAct = u.role !== "owner";
              return `<tr>
                <td>
                  <strong>${name ? name + " · " : ""}${u.email}</strong>
                  ${u.username ? `<div class="text-xs text-muted">@${u.username}</div>` : ""}
                  ${u.bio ? `<div class="text-xs text-muted">${u.bio.slice(0, 80)}</div>` : ""}
                </td>
                <td><span class="admin-badge ${u.role === "user" ? "user" : ""}">${roleLabel}</span></td>
                <td>${status}${timeout ? " · " + new Date(u.timeoutUntil).toLocaleString("pt-BR") : ""}</td>
                <td class="admin-actions">
                  ${!canAct ? "—" : `
                    ${perms.timeout ? `<button type="button" class="btn-ghost btn-tiny" data-act="timeout" data-email="${u.email}">Timeout</button>
                    <button type="button" class="btn-ghost btn-tiny" data-act="untimeout" data-email="${u.email}">Tirar timeout</button>` : ""}
                    ${perms.ban ? `<button type="button" class="btn-ghost btn-tiny" data-act="ban" data-email="${u.email}">Banir</button>
                    <button type="button" class="btn-ghost btn-tiny" data-act="unban" data-email="${u.email}">Desbanir</button>` : ""}
                    ${perms.impersonate ? `<button type="button" class="btn-ghost btn-tiny" data-act="impersonate" data-email="${u.email}">Entrar como</button>` : ""}
                    ${perms.editProfiles ? `<button type="button" class="btn-ghost btn-tiny" data-act="edit-profile" data-email="${u.email}">Editar perfil</button>` : ""}
                    ${isOwner && u.role !== "owner" ? `<button type="button" class="btn-ghost btn-tiny" data-act="make-mod" data-email="${u.email}">Tornar mod</button>
                    <button type="button" class="btn-ghost btn-tiny" data-act="make-member" data-email="${u.email}">Tornar membro</button>
                    <button type="button" class="btn-ghost btn-tiny" data-act="edit-perms" data-email="${u.email}">Permissões</button>` : ""}
                  `}
                </td>
              </tr>`;
            }).join("")}
          </tbody>
        </table>
      </div>
      ${perms.ban ? `<div class="admin-ban-box">
        <h4>Banir e-mail</h4>
        <div class="row" style="gap:0.5rem;margin-top:0.5rem;">
          <input type="email" id="admin-ban-email" placeholder="email@exemplo.com" style="flex:1;min-width:140px;">
          <input type="text" id="admin-ban-reason" placeholder="Motivo" style="flex:1;min-width:120px;">
          <button type="button" class="btn-primary" id="admin-ban-submit">Banir</button>
        </div>
      </div>` : ""}
      <p class="auth-note" style="margin-top:0.75rem;">Senhas não são visíveis (só hash). “Entrar como” usa a conta da pessoa no site, sem a senha dela.</p>
    `;

    box.querySelectorAll("[data-act]").forEach(btn => {
      btn.addEventListener("click", async () => {
        const act = btn.getAttribute("data-act");
        const email = btn.getAttribute("data-email");
        try {
          if (act === "timeout") {
            const raw = prompt("Timeout em minutos (60 = 1h, 1440 = 1 dia)", "60");
            if (raw == null) return;
            const minutes = Math.max(1, parseInt(raw, 10) || 60);
            await apiFetch("/api/admin/timeout", { method: "POST", body: JSON.stringify({ email, minutes }) });
            showToast("Timeout aplicado");
          } else if (act === "untimeout") {
            await apiFetch("/api/admin/untimeout", { method: "POST", body: JSON.stringify({ email }) });
            showToast("Timeout removido");
          } else if (act === "ban") {
            const reason = prompt("Motivo do ban", "Violação") || "";
            if (!confirm("Banir " + email + "?")) return;
            await apiFetch("/api/admin/ban", { method: "POST", body: JSON.stringify({ email, reason }) });
            showToast("Banido");
          } else if (act === "unban") {
            await apiFetch("/api/admin/unban", { method: "POST", body: JSON.stringify({ email }) });
            showToast("Desbanido");
          } else if (act === "impersonate") {
            if (!confirm("Entrar no site como " + email + "? Suas ações serão nessa conta.")) return;
            const data = await apiFetch("/api/admin/impersonate", { method: "POST", body: JSON.stringify({ email }) });
            const staffTok = localStorage.getItem(SESSION_TOKEN_KEY);
            if (staffTok) localStorage.setItem("devportal_staff_token", staffTok);
            localStorage.setItem(SESSION_TOKEN_KEY, data.token);
            localStorage.setItem("devportal_impersonating", email);
            if (Array.isArray(data.favorites)) {
              favoritos = new Set(data.favorites);
              salvarFavoritos();
            }
            showImpersonationBanner(email);
            showToast("Agora você está como " + email);
            fecharModal("admin-modal-overlay");
            updateAuthChipApi();
            aplicarFiltrosLinguagens();
          } else if (act === "edit-profile") {
            fecharModal("admin-modal-overlay");
            openProfilePanel(email);
          } else if (act === "make-mod") {
            await apiFetch("/api/admin/set-role", {
              method: "POST",
              body: JSON.stringify({
                email,
                role: "moderator",
                permissions: { timeout: true, ban: false, impersonate: false, editProfiles: false }
              })
            });
            showToast("Agora é moderador");
          } else if (act === "make-member") {
            await apiFetch("/api/admin/set-role", {
              method: "POST",
              body: JSON.stringify({ email, role: "user" })
            });
            showToast("Agora é membro");
          } else if (act === "edit-perms") {
            const timeout = confirm("Pode dar timeout? OK = sim, Cancelar = não");
            const ban = confirm("Pode banir? OK = sim, Cancelar = não");
            const imp = confirm("Pode entrar como usuário? OK = sim, Cancelar = não");
            const edit = confirm("Pode editar perfis? OK = sim, Cancelar = não");
            await apiFetch("/api/admin/set-role", {
              method: "POST",
              body: JSON.stringify({
                email,
                role: "moderator",
                permissions: { timeout, ban, impersonate: imp, editProfiles: edit }
              })
            });
            showToast("Permissões atualizadas");
          }
          if (act !== "impersonate" && act !== "edit-profile") openAdminPanel();
        } catch (e) {
          showToast(e.message || "Falha");
        }
      });
    });

    document.getElementById("admin-ban-submit")?.addEventListener("click", async () => {
      const email = document.getElementById("admin-ban-email")?.value?.trim();
      const reason = document.getElementById("admin-ban-reason")?.value?.trim() || "";
      if (!email) return showToast("Informe o e-mail");
      try {
        await apiFetch("/api/admin/ban", { method: "POST", body: JSON.stringify({ email, reason }) });
        showToast("E-mail banido");
        openAdminPanel();
      } catch (e) {
        showToast(e.message || "Falha");
      }
    });
  } catch (e) {
    box.innerHTML = `<div class="error-box"><p>${e.message || "Erro ao carregar painel."}</p></div>`;
  }
}

// Splash + rebind auth no load
document.addEventListener("DOMContentLoaded", () => {
  try { initSplash(); } catch (e) { console.warn(e); }
  // re-inicializa auth com versão API (substitui handlers do chip)
  try { initAuth(); } catch (e) { console.warn(e); }
});


// ---------- Google Sign-In ----------
async function mountGoogleButton(attempt) {
  attempt = attempt || 0;
  const section = document.getElementById("google-auth-section");
  const wrap = document.getElementById("google-btn-wrap");
  if (!wrap) return;

  let clientId = null;
  try {
    const cfg = await apiFetch("/api/config");
    clientId = cfg && cfg.googleClientId ? String(cfg.googleClientId).trim() : null;
  } catch (e) {
    if (section) section.style.display = "none";
    return;
  }

  if (!clientId) {
    if (section) section.style.display = "none";
    return;
  }

  // Client ID existe: mostra a seção
  if (section) section.style.display = "block";
  wrap.innerHTML = "";

  if (!window.google || !window.google.accounts || !window.google.accounts.id) {
    if (attempt < 15) {
      setTimeout(function () { mountGoogleButton(attempt + 1); }, 400);
      return;
    }
    wrap.innerHTML = '<p class="auth-note">Não foi possível carregar o botão do Google. Use e-mail e senha, ou atualize a página.</p>';
    return;
  }

  try {
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: async function (response) {
        try {
          const data = await apiFetch("/api/auth/google", {
            method: "POST",
            body: JSON.stringify({ credential: response.credential })
          });
          localStorage.setItem(SESSION_TOKEN_KEY, data.token);
          if (Array.isArray(data.favorites)) {
            favoritos = new Set(data.favorites);
            salvarFavoritos();
            updateSidebarCounts();
            aplicarFiltrosLinguagens();
          }
          showToast(data.role === "owner" ? "Dono conectado" : data.role === "moderator" ? "Moderador conectado" : "Entrada com Google ok");
          updateAuthChipApi();
          fecharModal("auth-modal-overlay");
          if (data.role === "owner" || data.role === "moderator") openAdminPanel();
        } catch (err) {
          if (err.data && (err.data.code === "BANNED" || err.data.code === "TIMEOUT")) showRestrictionWall(err.data);
        else showToast(err.message || "Falha no login Google");
        }
      },
      auto_select: false,
      cancel_on_tap_outside: true
    });
    window.google.accounts.id.renderButton(wrap, {
      theme: "outline",
      size: "large",
      shape: "pill",
      text: "continue_with",
      width: 280,
      locale: "pt-BR"
    });
  } catch (err) {
    console.warn("Google button error", err);
    wrap.innerHTML = '<p class="auth-note">Não foi possível carregar o botão do Google. Use e-mail e senha.</p>';
  }
}


function openProfilePanel(targetEmail) {
  const box = document.getElementById("profile-content");
  if (!box) return;
  box.innerHTML = `<div class="loading"><div class="spinner"></div><p>Carregando perfil…</p></div>`;
  abrirModal("profile-modal-overlay");
  const staffEdit = Boolean(targetEmail);
  const load = staffEdit
    ? apiFetch("/api/admin/users").then(data => {
        const u = (data.users || []).find(x => x.email === targetEmail);
        if (!u) throw new Error("Usuário não encontrado");
        return u;
      })
    : apiFetch("/api/me");
  load.then(me => {
    const avatar = me.avatarUrl
      ? `<img class="profile-avatar" src="${me.avatarUrl}" alt="Avatar">`
      : `<div class="profile-avatar profile-avatar-empty">👤</div>`;
    box.innerHTML = `
      <div class="profile-head">${avatar}</div>
      ${staffEdit ? `<p class="auth-note">Editando perfil de <strong>${me.email}</strong></p>` : ""}
      <form id="profile-form" class="auth-form">
        <div class="form-group">
          <label for="pf-display">Nome de exibição</label>
          <input type="text" id="pf-display" maxlength="40" value="${String(me.displayName || "").replace(/"/g, "&quot;")}">
        </div>
        <div class="form-group">
          <label for="pf-user">Username</label>
          <input type="text" id="pf-user" maxlength="24" value="${String(me.username || "").replace(/"/g, "&quot;")}" placeholder="sem espaços">
        </div>
        <div class="form-group">
          <label for="pf-bio">Biografia</label>
          <textarea id="pf-bio" maxlength="300" rows="3" placeholder="Uma frase sobre você">${String(me.bio || "").replace(/</g, "&lt;")}</textarea>
        </div>
        <div class="form-group">
          <label for="pf-avatar">Foto (URL)</label>
          <input type="url" id="pf-avatar" value="${String(me.avatarUrl || "").replace(/"/g, "&quot;")}">
        </div>
        <div class="form-group">
          <label for="pf-file">Ou enviar imagem (máx. ~100 KB)</label>
          <input type="file" id="pf-file" accept="image/*">
        </div>
        ${staffEdit ? "" : `<p class="auth-note">E-mail: <strong>${me.email}</strong></p>`}
        <button type="submit" class="btn-primary" style="width:100%">Salvar perfil</button>
        ${staffEdit ? "" : `<button type="button" class="btn-ghost" id="pf-logout" style="width:100%;margin-top:0.5rem">Sair da conta</button>
        ${me.role === "owner" || me.role === "moderator" ? `<button type="button" class="btn-ghost" id="pf-goto-painel" style="width:100%;margin-top:0.35rem">Abrir painel da equipe</button>` : ""}`}
      </form>
    `;
    document.getElementById("pf-file")?.addEventListener("change", (ev) => {
      const f = ev.target.files && ev.target.files[0];
      if (!f) return;
      if (f.size > 100000) {
        showToast("Imagem maior que 100 KB");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        document.getElementById("pf-avatar").value = String(reader.result || "");
      };
      reader.readAsDataURL(f);
    });
    document.getElementById("profile-form")?.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const payload = {
          displayName: document.getElementById("pf-display").value,
          username: document.getElementById("pf-user").value,
          bio: document.getElementById("pf-bio").value,
          avatarUrl: document.getElementById("pf-avatar").value
        };
        if (staffEdit) payload.targetEmail = targetEmail;
        await apiFetch("/api/profile", { method: "POST", body: JSON.stringify(payload) });
        showToast("Perfil salvo");
        if (!staffEdit) updateAuthChipApi();
        fecharModal("profile-modal-overlay");
      } catch (err) {
        showToast(err.message || "Falha ao salvar");
      }
    });
    document.getElementById("pf-logout")?.addEventListener("click", async () => {
      try { await apiFetch("/api/logout", { method: "POST", body: "{}" }); } catch (_) {}
      localStorage.removeItem(SESSION_TOKEN_KEY);
      sessionStorage.removeItem("dp_force_public");
      updateAuthChipApi();
      fecharModal("profile-modal-overlay");
      showToast("Sessão encerrada");
      irParaPagina("home");
    });
    document.getElementById("pf-goto-painel")?.addEventListener("click", () => {
      fecharModal("profile-modal-overlay");
      sessionStorage.removeItem("dp_force_public");
      applyOwnerView(window.__dpMe);
      irParaPagina(window.__dpMe?.role === "owner" ? "owner-dash" : "painel");
    });
  }).catch(err => {
    box.innerHTML = `<div class="error-box"><p>${err.message || "Erro"}</p></div>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("close-profile-modal")?.addEventListener("click", () => fecharModal("profile-modal-overlay"));
});


function showImpersonationBanner(email) {
  let bar = document.getElementById("impersonate-banner");
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "impersonate-banner";
    bar.className = "impersonate-banner";
    document.body.appendChild(bar);
  }
  bar.style.display = "flex";
  bar.innerHTML = `<span>Você está usando o site como <strong>${email}</strong></span>
    <button type="button" class="btn-primary btn-tiny" id="stop-impersonate">Voltar à minha conta</button>`;
  document.getElementById("stop-impersonate")?.addEventListener("click", stopImpersonation);
}

function stopImpersonation() {
  const staff = localStorage.getItem("devportal_staff_token");
  if (staff) {
    localStorage.setItem(SESSION_TOKEN_KEY, staff);
    localStorage.removeItem("devportal_staff_token");
  }
  localStorage.removeItem("devportal_impersonating");
  const bar = document.getElementById("impersonate-banner");
  if (bar) bar.style.display = "none";
  showToast("Voltou à sua conta");
  updateAuthChipApi();
  location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  const imp = localStorage.getItem("devportal_impersonating");
  if (imp) showImpersonationBanner(imp);
});




// ========== Navegação unificada (topo) + papéis ==========
function rebuildMainNav(me) {
  const nav = document.getElementById("main-nav");
  if (!nav) return;

  const isOwner = !!(me && me.role === "owner");
  const isMod = !!(me && me.role === "moderator");
  const isStaff = isOwner || isMod;

  document.body.classList.toggle("owner-view", isOwner);

  const brandEmoji = document.getElementById("brand-emoji");
  const brandText = document.getElementById("brand-text");
  const brandSub = document.getElementById("brand-subtitle");
  if (isOwner) {
    if (brandEmoji) brandEmoji.textContent = "🩸";
    if (brandText) brandText.textContent = "DevPortal · Comando";
    if (brandSub) brandSub.textContent = "Centro de operação do dono — contas, equipe, moderação e inteligência.";
  } else {
    if (brandEmoji) brandEmoji.textContent = "🚀";
    if (brandText) brandText.textContent = "DevPortal";
    if (brandSub) brandSub.textContent = "Linguagens, carreiras, lógica e faculdades — um mapa claro para quem está começando (ou recomeçando) na tecnologia.";
  }

  const chatBtn = document.getElementById("btn-chat");
  if (chatBtn) chatBtn.hidden = !me;

  let items = [];
  if (isOwner) {
    items = [
      ["owner-dash", "🩸", "Comando"],
      ["owner-perfis", "👥", "Perfis"],
      ["owner-equipe", "🛡️", "Equipe"],
      ["owner-mod", "⚖️", "Moderação"],
      ["owner-intel", "📡", "Inteligência"],
      ["painel", "⚔️", "Painel"],
      ["chat", "💬", "Mensagens"],
    ];
  } else {
    items = [
      ["home", "🏠", "Início"],
      ["linguagens", "💻", "Linguagens"],
      ["areas", "🎯", "Áreas de TI"],
      ["logica", "🧠", "Lógica"],
      ["trilhas", "🗺️", "Trilhas"],
      ["faculdades", "🎓", "Faculdades"],
      ["chat", "💬", "Mensagens"],
    ];
    if (isMod) items.push(["painel", "⚔️", "Painel"]);
  }

  const current = document.querySelector(".page-view.active")?.id?.replace(/^page-/, "") || (isOwner ? "owner-dash" : "home");
  nav.innerHTML = items.map(([id, emoji, label]) => {
    const active = id === current ? " active" : "";
    return `<button type="button" class="nav-btn${active}" data-page="${id}">${emoji} ${label}</button>`;
  }).join("");

  nav.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      goToPage(btn.dataset.page);
    });
  });
}

function applyStaffNav(isStaff) {
  // legado — agora rebuildMainNav cuida de tudo
  void isStaff;
}

function applyOwnerView(me) {
  rebuildMainNav(me);
}

function goToPage(pageId) {
  if (!pageId) return;
  document.querySelectorAll(".page-view").forEach((p) => p.classList.remove("active"));
  const page = document.getElementById("page-" + pageId);
  if (page) page.classList.add("active");
  else {
    console.warn("Página não encontrada:", pageId);
  }

  document.querySelectorAll("#main-nav .nav-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.page === pageId);
  });

  try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch (_) {}

  if (pageId === "painel") renderPainelPage();
  if (pageId === "owner-dash") renderOwnerDash();
  if (pageId === "owner-perfis") renderOwnerPerfis();
  if (pageId === "owner-equipe") renderOwnerEquipe();
  if (pageId === "owner-mod") renderOwnerMod();
  if (pageId === "owner-intel") renderOwnerIntel();
  if (pageId === "chat") renderChatPage();
}

irParaPagina = goToPage;

function bindAllNavOnce() {
  // no-op: rebuildMainNav recoloca listeners
  rebuildMainNav(window.__dpMe || null);
}

function roleLabel(r) {
  if (r === "owner") return "dono";
  if (r === "moderator") return "moderador";
  return "membro";
}

async function fetchStaffUsers() {
  return apiFetch("/api/admin/users");
}

function showRestrictionWall(payload) {
  const wall = document.getElementById("restriction-wall");
  if (!wall) return;
  const code = payload.code || "";
  const title = document.getElementById("restriction-title");
  const msg = document.getElementById("restriction-msg");
  const meta = document.getElementById("restriction-meta");
  const icon = document.getElementById("restriction-icon");
  const dismiss = document.getElementById("restriction-dismiss");

  if (code === "BANNED") {
    if (icon) icon.textContent = "🚫";
    if (title) title.textContent = "Conta banida permanentemente";
    if (msg) msg.textContent = payload.reason || payload.error || "Você perdeu o acesso a esta conta.";
    if (meta) meta.textContent = payload.bannedAt
      ? "Desde " + new Date(payload.bannedAt).toLocaleString("pt-BR")
      : "Esta conta não pode mais ser usada neste site.";
    if (dismiss) dismiss.hidden = true;
  } else if (code === "TIMEOUT") {
    if (icon) icon.textContent = "⏳";
    if (title) title.textContent = "Conta em timeout";
    if (msg) msg.textContent = payload.reason || "Um moderador suspendeu temporariamente sua conta.";
    if (meta) meta.textContent = payload.timeoutUntil
      ? "Liberação prevista: " + new Date(payload.timeoutUntil).toLocaleString("pt-BR")
      : "Tente novamente mais tarde.";
    if (dismiss) {
      dismiss.hidden = false;
      dismiss.onclick = () => {
        wall.hidden = true;
        localStorage.removeItem(SESSION_TOKEN_KEY);
        updateAuthChipApi();
      };
    }
  } else {
    if (icon) icon.textContent = "⛔";
    if (title) title.textContent = "Acesso restrito";
    if (msg) msg.textContent = payload.error || "Não foi possível entrar.";
    if (meta) meta.textContent = "";
    if (dismiss) {
      dismiss.hidden = false;
      dismiss.onclick = () => { wall.hidden = true; };
    }
  }
  wall.hidden = false;
}


// Chat UI (sem reload de página)
let __chatThreadId = null;
let __chatStaff = false;

async function renderChatPage() {
  const threadsEl = document.getElementById("chat-threads");
  const messagesEl = document.getElementById("chat-messages");
  if (!threadsEl || !messagesEl) return;
  threadsEl.innerHTML = `<div class="loading"><div class="spinner"></div></div>`;
  try {
    const data = await apiFetch("/api/chat/threads");
    const threads = data.threads || [];
    __chatStaff = !!data.staff;
    const me = window.__dpMe || {};

    if (!__chatStaff) {
      // Membro: lista estilo Discord — conversa com a Equipe
      threadsEl.innerHTML = `
        <div class="chat-side-title">Conversas</div>
        <button type="button" class="chat-person ${!__chatThreadId ? "active" : ""}" id="chat-team-btn" data-id="">
          <span class="chat-person-avatar">E</span>
          <span class="chat-person-info">
            <strong>Equipe DevPortal</strong>
            <small>Dúvidas e suporte</small>
          </span>
        </button>
        ${threads.map((th) => {
          const letter = "E";
          return `<button type="button" class="chat-person ${th.id === __chatThreadId ? "active" : ""}" data-id="${th.id}">
            <span class="chat-person-avatar">${letter}</span>
            <span class="chat-person-info">
              <strong>Equipe DevPortal</strong>
              <small>${(th.preview || th.subject || "Conversa").replace(/</g, "&lt;")}</small>
            </span>
          </button>`;
        }).join("")}
      `;
      document.getElementById("chat-team-btn")?.addEventListener("click", (e) => {
        e.preventDefault();
        __chatThreadId = null;
        messagesEl.innerHTML = `<div class="chat-empty"><p>Envie uma mensagem para a equipe. Um moderador ou o dono responde por aqui.</p></div>`;
        document.querySelectorAll(".chat-person").forEach((b) => b.classList.remove("active"));
        document.getElementById("chat-team-btn")?.classList.add("active");
      });
    } else {
      // Staff: cada membro com inicial (sem e-mail na cara)
      threadsEl.innerHTML = `
        <div class="chat-side-title">Membros</div>
        ${threads.map((th) => {
          const name = th.memberName || th.memberUsername || th.memberEmail.split("@")[0] || "Membro";
          const letter = (name.charAt(0) || "?").toUpperCase();
          const av = th.memberAvatar
            ? `<img class="chat-person-avatar" src="${th.memberAvatar}" alt="" style="object-fit:cover;padding:0;border:none">`
            : `<span class="chat-person-avatar">${letter}</span>`;
          return `<button type="button" class="chat-person ${th.id === __chatThreadId ? "active" : ""}" data-id="${th.id}">
            ${av}
            <span class="chat-person-info">
              <strong>${String(name).replace(/</g, "&lt;")}${th.memberUsername ? " · @" + String(th.memberUsername).replace(/</g, "&lt;") : ""}</strong>
              <small>${(th.preview || "").replace(/</g, "&lt;")}</small>
            </span>
          </button>`;
        }).join("") || `<p class="text-muted text-sm" style="padding:0.5rem">Nenhuma dúvida na fila.</p>`}
      `;
    }

    threadsEl.querySelectorAll(".chat-person[data-id]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.getAttribute("data-id");
        if (id) openChatThread(id);
      });
    });

    if (__chatThreadId) await openChatThread(__chatThreadId);
    else if (threads[0] && __chatStaff) await openChatThread(threads[0].id);
    else if (!__chatStaff && threads[0]) await openChatThread(threads[0].id);
    else {
      messagesEl.innerHTML = `<div class="chat-empty"><p>${__chatStaff ? "Selecione um membro à esquerda." : "Escreva abaixo para falar com a equipe."}</p></div>`;
    }
  } catch (e) {
    threadsEl.innerHTML = `<div class="error-box"><p>${e.message || "Faça login para usar o chat."}</p></div>`;
  }
}

async function openChatThread(id) {
  if (!id) return;
  __chatThreadId = id;
  const messagesEl = document.getElementById("chat-messages");
  if (!messagesEl) return;
  messagesEl.innerHTML = `<div class="loading"><div class="spinner"></div></div>`;
  try {
    const data = await apiFetch("/api/chat/thread?id=" + encodeURIComponent(id));
    const th = data.thread;
    const meEmail = window.__dpMe?.email;
    messagesEl.innerHTML = (th.messages || []).map((m) => {
      const mine = m.from === meEmail;
      const who = mine ? "Você" : (__chatStaff ? (m.from.split("@")[0] || m.from) : "Equipe");
      return `<div class="chat-bubble ${mine ? "mine" : "theirs"}">
        <div class="chat-bubble-meta">${who} · ${new Date(m.at).toLocaleString("pt-BR")}</div>
        <div>${String(m.text).replace(/</g, "&lt;")}</div>
      </div>`;
    }).join("") || `<div class="chat-empty"><p>Sem mensagens ainda.</p></div>`;
    messagesEl.scrollTop = messagesEl.scrollHeight;
    document.querySelectorAll(".chat-person").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-id") === id);
    });
  } catch (e) {
    messagesEl.innerHTML = `<div class="error-box"><p>${e.message}</p></div>`;
  }
}

async function sendChatMessage(text) {
  const data = await apiFetch("/api/chat/send", {
    method: "POST",
    body: JSON.stringify({ text, threadId: __chatThreadId || undefined }),
  });
  __chatThreadId = data.threadId;
  await renderChatPage();
  if (__chatThreadId) await openChatThread(__chatThreadId);
}

function initChatCompose() {
  const form = document.getElementById("chat-compose");
  const input = document.getElementById("chat-input");
  // HTML usa type="button" id="chat-send-btn" — NÃO type="submit"
  const sendBtn = document.getElementById("chat-send-btn");
  if (!form || form.dataset.bound === "1") return;
  form.dataset.bound = "1";

  async function doSend() {
    const text = (input?.value || "").trim();
    if (!text) return;
    if (sendBtn) sendBtn.disabled = true;
    try {
      await sendChatMessage(text);
      if (input) input.value = "";
    } catch (err) {
      showToast(err.message || "Não foi possível enviar");
    } finally {
      if (sendBtn) sendBtn.disabled = false;
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await doSend();
    return false;
  });

  if (sendBtn) {
    sendBtn.type = "button";
    sendBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      await doSend();
    });
  }

  // Enter no input também envia
  if (input) {
    input.addEventListener("keydown", async (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        await doSend();
      }
    });
  }

  document.getElementById("btn-chat")?.addEventListener("click", (e) => {
    e.preventDefault();
    goToPage("chat");
  });
}

async function renderPainelPage() {
  const root = document.getElementById("painel-page-root");
  if (!root) return;
  root.innerHTML = `<div class="loading"><div class="spinner"></div><p>Carregando painel…</p></div>`;
  try {
    const data = await fetchStaffUsers();
    const me = data.me || {};
    const perms = me.permissions || {};
    const users = data.users || [];
    const banned = users.filter((u) => u.banned).length;
    const mods = users.filter((u) => u.role === "moderator").length;
    const timeouts = users.filter((u) => u.timeoutUntil && new Date(u.timeoutUntil) > new Date()).length;

    root.innerHTML = `
      <div class="painel-stats">
        <div class="painel-stat"><strong>${users.length}</strong><span>contas</span></div>
        <div class="painel-stat"><strong>${mods}</strong><span>moderadores</span></div>
        <div class="painel-stat"><strong>${timeouts}</strong><span>em timeout</span></div>
        <div class="painel-stat"><strong>${banned}</strong><span>banidos</span></div>
      </div>
      <div class="painel-toolbar">
        <input type="search" id="painel-search" placeholder="Filtrar por e-mail, @user ou nome…">
        <span class="text-muted text-sm">Você: <strong>${roleLabel(me.role)}</strong></span>
      </div>
      <div class="painel-table-wrap" id="painel-table-host"></div>
    `;
    const host = document.getElementById("painel-table-host");
    const paint = (list) => {
      host.innerHTML = `
        <table class="admin-table">
          <thead><tr><th>Conta</th><th>Papel</th><th>Status</th><th>Ações</th></tr></thead>
          <tbody>
            ${list.map((u) => {
              const timeout = u.timeoutUntil && new Date(u.timeoutUntil) > new Date();
              const status = u.banned ? "banida" : timeout ? "timeout" : "ativa";
              const name = (u.displayName || u.username || "").trim();
              const canAct = u.role !== "owner";
              return `<tr>
                <td><strong>${name ? name + " · " : ""}${u.email}</strong>
                  ${u.username ? `<div class="text-xs text-muted">@${u.username}</div>` : ""}
                </td>
                <td><span class="admin-badge ${u.role === "user" ? "user" : ""}">${roleLabel(u.role)}</span></td>
                <td>${status}</td>
                <td class="admin-actions">${!canAct ? "—" : `
                  ${perms.timeout ? `<button type="button" class="btn-ghost btn-tiny" data-act="timeout" data-email="${u.email}">Timeout</button>
                  <button type="button" class="btn-ghost btn-tiny" data-act="untimeout" data-email="${u.email}">Tirar timeout</button>` : ""}
                  ${perms.ban ? `<button type="button" class="btn-ghost btn-tiny" data-act="ban" data-email="${u.email}">Banir</button>
                  <button type="button" class="btn-ghost btn-tiny" data-act="unban" data-email="${u.email}">Desbanir</button>` : ""}
                  ${perms.impersonate ? `<button type="button" class="btn-ghost btn-tiny" data-act="impersonate" data-email="${u.email}">Entrar como</button>` : ""}
                  ${perms.editProfiles ? `<button type="button" class="btn-ghost btn-tiny" data-act="edit-profile" data-email="${u.email}">Perfil</button>` : ""}
                  ${me.role === "owner" && u.role !== "owner" ? `
                    <button type="button" class="btn-ghost btn-tiny" data-act="make-mod" data-email="${u.email}">Tornar mod</button>
                    <button type="button" class="btn-ghost btn-tiny" data-act="make-member" data-email="${u.email}">Membro</button>
                    <button type="button" class="btn-ghost btn-tiny" data-act="edit-perms" data-email="${u.email}">Permissões</button>` : ""}
                `}</td>
              </tr>`;
            }).join("")}
          </tbody>
        </table>`;
      host.querySelectorAll("[data-act]").forEach((btn) => {
        btn.addEventListener("click", () => handleStaffAction(btn.getAttribute("data-act"), btn.getAttribute("data-email"), renderPainelPage));
      });
    };
    paint(users);
    document.getElementById("painel-search")?.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      paint(users.filter((u) =>
        (u.email || "").includes(q) ||
        (u.username || "").toLowerCase().includes(q) ||
        (u.displayName || "").toLowerCase().includes(q)
      ));
    });
  } catch (e) {
    root.innerHTML = `<div class="error-box"><p>${e.message || "Sem acesso ao painel."}</p></div>`;
  }
}

async function handleStaffAction(act, email, refresh) {
  try {
    if (act === "timeout") {
      const raw = prompt("Timeout em minutos", "60");
      if (raw == null) return;
      await apiFetch("/api/admin/timeout", { method: "POST", body: JSON.stringify({ email, minutes: Math.max(1, parseInt(raw, 10) || 60) }) });
      showToast("Timeout ok");
    } else if (act === "untimeout") {
      await apiFetch("/api/admin/untimeout", { method: "POST", body: JSON.stringify({ email }) });
      showToast("Timeout removido");
    } else if (act === "ban") {
      const reason = prompt("Motivo", "Violação") || "";
      if (!confirm("Banir " + email + "?")) return;
      await apiFetch("/api/admin/ban", { method: "POST", body: JSON.stringify({ email, reason }) });
      showToast("Banido");
    } else if (act === "unban") {
      await apiFetch("/api/admin/unban", { method: "POST", body: JSON.stringify({ email }) });
      showToast("Desbanido");
    } else if (act === "impersonate") {
      if (!confirm("Entrar como " + email + "?")) return;
      const data = await apiFetch("/api/admin/impersonate", { method: "POST", body: JSON.stringify({ email }) });
      const staffTok = localStorage.getItem(SESSION_TOKEN_KEY);
      if (staffTok) localStorage.setItem("devportal_staff_token", staffTok);
      localStorage.setItem(SESSION_TOKEN_KEY, data.token);
      localStorage.setItem("devportal_impersonating", email);
      if (Array.isArray(data.favorites)) {
        favoritos = new Set(data.favorites);
        salvarFavoritos();
      }
      showImpersonationBanner(email);
      showToast("Sessão: " + email);
      updateAuthChipApi();
    } else if (act === "edit-profile") {
      openProfilePanel(email);
      return;
    } else if (act === "make-mod") {
      await apiFetch("/api/admin/set-role", { method: "POST", body: JSON.stringify({ email, role: "moderator", permissions: { timeout: true, ban: false, impersonate: false, editProfiles: false } }) });
      showToast("Moderador");
    } else if (act === "make-member") {
      await apiFetch("/api/admin/set-role", { method: "POST", body: JSON.stringify({ email, role: "user" }) });
      showToast("Membro");
    } else if (act === "edit-perms") {
      const timeout = confirm("Timeout?");
      const ban = confirm("Ban?");
      const impersonate = confirm("Entrar como?");
      const editProfiles = confirm("Editar perfis?");
      await apiFetch("/api/admin/set-role", { method: "POST", body: JSON.stringify({ email, role: "moderator", permissions: { timeout, ban, impersonate, editProfiles } }) });
      showToast("Permissões salvas");
    }
    if (typeof refresh === "function") refresh();
  } catch (e) {
    showToast(e.message || "Falha");
  }
}

async function renderOwnerDash() {
  const root = document.getElementById("owner-dash-root");
  if (!root) return;
  root.innerHTML = `<div class="loading"><div class="spinner"></div></div>`;
  try {
    const data = await fetchStaffUsers();
    const users = data.users || [];
    const mods = users.filter((u) => u.role === "moderator");
    const banned = users.filter((u) => u.banned);
    root.innerHTML = `
      <div class="owner-kpi"><strong>${users.length}</strong><span class="meta">contas</span></div>
      <div class="owner-kpi"><strong>${mods.length}</strong><span class="meta">moderadores</span></div>
      <div class="owner-kpi"><strong>${banned.length}</strong><span class="meta">banidos</span></div>
      <div class="owner-kpi"><strong>${users.filter(u=>u.avatarUrl).length}</strong><span class="meta">com foto</span></div>
      <div class="owner-card" style="grid-column:1/-1">
        <h3>Centro de comando</h3>
        <p class="meta">Visão carmesim exclusiva do dono. Membros jamais veem este menu.</p>
        <div class="card-actions-row">
          <button type="button" class="btn-primary" data-go="owner-perfis">Perfis</button>
          <button type="button" class="btn-ghost" data-go="owner-equipe">Equipe</button>
          <button type="button" class="btn-ghost" data-go="owner-mod">Moderação</button>
          <button type="button" class="btn-ghost" data-go="painel">Painel</button>
        </div>
      </div>
    `;
    root.querySelectorAll("[data-go]").forEach((b) => b.addEventListener("click", () => goToPage(b.getAttribute("data-go"))));
  } catch (e) {
    root.innerHTML = `<div class="error-box"><p>${e.message}</p></div>`;
  }
}

async function renderOwnerPerfis() {
  const root = document.getElementById("owner-perfis-root");
  if (!root) return;
  root.innerHTML = `<div class="loading"><div class="spinner"></div></div>`;
  try {
    const data = await fetchStaffUsers();
    let users = data.users || [];
    const paint = (list) => {
      root.innerHTML = list.map((u) => `
        <article class="owner-card">
          <div class="row" style="gap:0.75rem">
            ${u.avatarUrl ? `<img class="profile-avatar" style="width:48px;height:48px" src="${u.avatarUrl}" alt="">` :
              `<div class="profile-avatar profile-avatar-empty" style="width:48px;height:48px;font-size:1rem">${(u.displayName||u.username||u.email||"?").charAt(0).toUpperCase()}</div>`}
            <div>
              <h3>${u.displayName || u.username || u.email}</h3>
              <div class="meta">${u.email}${u.username ? " · @" + u.username : ""}</div>
            </div>
          </div>
          <p class="meta">${u.bio || "Sem biografia."}</p>
          <div class="meta">${roleLabel(u.role)} · ${u.favoritesCount || 0} favoritos</div>
          <div class="card-actions-row">
            <button type="button" class="btn-ghost btn-tiny" data-act="edit-profile" data-email="${u.email}">Editar</button>
            ${u.role !== "owner" ? `<button type="button" class="btn-ghost btn-tiny" data-act="impersonate" data-email="${u.email}">Entrar como</button>` : ""}
          </div>
        </article>
      `).join("") || `<p class="no-results">Nenhum perfil.</p>`;
      root.querySelectorAll("[data-act]").forEach((b) => {
        b.addEventListener("click", () => handleStaffAction(b.dataset.act, b.dataset.email, () => renderOwnerPerfis()));
      });
    };
    paint(users);
    const search = document.getElementById("owner-search-perfis");
    if (search && !search.dataset.bound) {
      search.dataset.bound = "1";
      search.addEventListener("input", (e) => {
        const q = e.target.value.toLowerCase().trim();
        paint(users.filter((u) =>
          (u.email||"").includes(q) || (u.username||"").toLowerCase().includes(q) || (u.displayName||"").toLowerCase().includes(q)
        ));
      });
    }
  } catch (e) {
    root.innerHTML = `<div class="error-box"><p>${e.message}</p></div>`;
  }
}

async function renderOwnerEquipe() {
  const root = document.getElementById("owner-equipe-root");
  if (!root) return;
  try {
    const data = await fetchStaffUsers();
    const mods = (data.users || []).filter((u) => u.role === "moderator" || u.role === "owner");
    root.innerHTML = mods.map((u) => {
      const p = u.permissions || {};
      return `<article class="owner-card">
        <h3>${u.displayName || u.username || u.email}</h3>
        <div class="meta">${u.email} · ${roleLabel(u.role)}</div>
        <div class="meta">timeout: ${p.timeout ? "sim" : "não"} · ban: ${p.ban ? "sim" : "não"} · entrar como: ${p.impersonate ? "sim" : "não"} · editar perfil: ${p.editProfiles ? "sim" : "não"}</div>
        ${u.role === "moderator" ? `<div class="card-actions-row">
          <button type="button" class="btn-ghost btn-tiny" data-act="edit-perms" data-email="${u.email}">Permissões</button>
          <button type="button" class="btn-ghost btn-tiny" data-act="make-member" data-email="${u.email}">Rebaixar</button>
        </div>` : ""}
      </article>`;
    }).join("") || `<p class="no-results">Sem equipe além do dono.</p>`;
    root.querySelectorAll("[data-act]").forEach((b) => {
      b.addEventListener("click", () => handleStaffAction(b.dataset.act, b.dataset.email, () => renderOwnerEquipe()));
    });
  } catch (e) {
    root.innerHTML = `<div class="error-box"><p>${e.message}</p></div>`;
  }
}

async function renderOwnerMod() {
  const root = document.getElementById("owner-mod-root");
  if (!root) return;
  try {
    const data = await fetchStaffUsers();
    const users = data.users || [];
    const flagged = users.filter((u) => u.banned || (u.timeoutUntil && new Date(u.timeoutUntil) > new Date()));
    root.innerHTML = `
      <article class="owner-card" style="grid-column:1/-1">
        <h3>Fila de moderação</h3>
        <p class="meta">${flagged.length} conta(s) com restrição</p>
      </article>
      ${flagged.map((u) => `
        <article class="owner-card">
          <h3>${u.email}</h3>
          <div class="meta">${u.banned ? "BANIDA" : ""} ${u.timeoutUntil ? "timeout até " + new Date(u.timeoutUntil).toLocaleString("pt-BR") : ""}</div>
          <div class="card-actions-row">
            <button type="button" class="btn-ghost btn-tiny" data-act="untimeout" data-email="${u.email}">Tirar timeout</button>
            <button type="button" class="btn-ghost btn-tiny" data-act="unban" data-email="${u.email}">Desbanir</button>
            <button type="button" class="btn-ghost btn-tiny" data-act="ban" data-email="${u.email}">Banir</button>
          </div>
        </article>
      `).join("") || `<p class="no-results">Nada pendente.</p>`}
      <article class="owner-card" style="grid-column:1/-1">
        <h4>Banir e-mail</h4>
        <div class="row" style="gap:0.5rem;margin-top:0.5rem">
          <input type="email" id="om-ban-email" placeholder="email@" style="flex:1">
          <button type="button" class="btn-primary" id="om-ban-go">Banir</button>
        </div>
      </article>
    `;
    root.querySelectorAll("[data-act]").forEach((b) => {
      b.addEventListener("click", () => handleStaffAction(b.dataset.act, b.dataset.email, () => renderOwnerMod()));
    });
    document.getElementById("om-ban-go")?.addEventListener("click", async () => {
      const email = document.getElementById("om-ban-email")?.value?.trim();
      if (!email) return;
      await handleStaffAction("ban", email, () => renderOwnerMod());
    });
  } catch (e) {
    root.innerHTML = `<div class="error-box"><p>${e.message}</p></div>`;
  }
}

async function renderOwnerIntel() {
  const root = document.getElementById("owner-intel-root");
  if (!root) return;
  let health = { ok: false };
  try { health = await apiFetch("/api/health"); } catch (_) {}
  try {
    const data = await fetchStaffUsers();
    const users = data.users || [];
    const weekAgo = Date.now() - 7 * 864e5;
    const recent = users.filter((u) => u.createdAt && Date.parse(u.createdAt) > weekAgo).length;
    root.innerHTML = `
      <div class="owner-kpi"><strong>${health.ok ? "ON" : "OFF"}</strong><span class="meta">API</span></div>
      <div class="owner-kpi"><strong>${recent}</strong><span class="meta">contas (7 dias)</span></div>
      <div class="owner-card" style="grid-column:1/-1">
        <h3>Status</h3>
        <p class="meta">Sessões assinadas: permanecem após F5. Tema carmesim só para o dono.</p>
      </div>
    `;
  } catch (e) {
    root.innerHTML = `<div class="error-box"><p>${e.message}</p></div>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  bindAllNavOnce();
  try { initChatCompose(); } catch (e) { console.warn("initChatCompose", e); }
  // Restaura sessão visual se houver token
  if (localStorage.getItem(SESSION_TOKEN_KEY)) {
    updateAuthChipApi().then(() => {
      if (window.__dpMe?.role === "owner") goToPage("owner-dash");
    });
  }
});

// openProfilePanel: ensure works when called with no args from avatar
