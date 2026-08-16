// ==========================================
// DevPortal — data.js (EXPANDIDO)
// Carregar ANTES de script.js:
//   <script src="data.js"></script>
//   <script src="script.js" defer></script>
// ==========================================

const DP_LINGUAGENS = [
  {
    "nome": "JavaScript",
    "tag": "Web / Fullstack",
    "categoria": "linguagem",
    "desc": "Linguagem da web no navegador e no servidor (Node.js).",
    "detalhes": [
      "DOM e eventos",
      "Node.js / Express / NestJS",
      "NPM e ecossistema enorme",
      "Base do TypeScript",
      "Frameworks: React, Vue, Svelte, Angular"
    ],
    "nivel": "Iniciante",
    "mercado": "Altíssimo",
    "quandoAprender": "Primeira opção para web",
    "relacionados": [
      "TypeScript",
      "HTML",
      "CSS"
    ]
  },
  {
    "nome": "TypeScript",
    "tag": "Web / Enterprise",
    "categoria": "linguagem",
    "desc": "Superset tipado do JavaScript — menos bugs em projetos grandes.",
    "detalhes": [
      "Tipos, generics, interfaces",
      "Padrão em React/Next/Nest",
      "Compila para JS",
      "Ótimo para APIs tipadas",
      "Comparado a C: alto nível web vs baixo nível sistemas"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Altíssimo",
    "quandoAprender": "Junto ou logo após JS",
    "relacionados": [
      "JavaScript",
      "C#",
      "Java"
    ]
  },
  {
    "nome": "Python",
    "tag": "Dados / Backend / Automação",
    "categoria": "linguagem",
    "desc": "Legível e versátil: dados, IA, web e scripts.",
    "detalhes": [
      "Django, Flask, FastAPI",
      "Pandas, PyTorch, scikit-learn",
      "Automação e DevOps",
      "Excelente primeira linguagem"
    ],
    "nivel": "Iniciante",
    "mercado": "Altíssimo",
    "quandoAprender": "Ótima porta de entrada",
    "relacionados": [
      "SQL",
      "R",
      "TypeScript"
    ]
  },
  {
    "nome": "Java",
    "tag": "Enterprise / Android",
    "categoria": "linguagem",
    "desc": "Pilar corporativo na JVM: Spring, bancos, Android histórico.",
    "detalhes": [
      "Orientação a objetos",
      "Spring Boot",
      "JVM multiplataforma",
      "Muito pedido em empresas"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Estável e amplo",
    "relacionados": [
      "Kotlin",
      "C#",
      "Scala"
    ]
  },
  {
    "nome": "C#",
    "tag": "Games / .NET / Enterprise",
    "categoria": "linguagem",
    "desc": "Linguagem do .NET e do Unity. Games, web, desktop e cloud Microsoft.",
    "detalhes": [
      "Unity gameplay",
      "ASP.NET Core",
      "async/await e OO moderna",
      "Blazor e MAUI"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Forte em games e enterprise",
    "relacionados": [
      "Unity (C#)",
      "Java",
      "TypeScript",
      "F#"
    ]
  },
  {
    "nome": "C",
    "tag": "Sistemas / Embarcados",
    "categoria": "linguagem",
    "desc": "Base de SO, embarcados e performance nativa. Clássica e ainda essencial.",
    "detalhes": [
      "Ponteiros e memória manual",
      "Kernels, firmwares, engines",
      "Fundamento para C++/Rust",
      "GCC, Clang, MSVC"
    ],
    "nivel": "Intermediário",
    "mercado": "Estável em sistemas e IoT",
    "quandoAprender": "Depois de lógica, para entender o hardware",
    "relacionados": [
      "C++",
      "Rust",
      "Zig",
      "Assembly"
    ]
  },
  {
    "nome": "C++",
    "tag": "Sistemas / Games / Performance",
    "categoria": "linguagem",
    "desc": "C com OO e templates. Engines, HFT e software de alta performance.",
    "detalhes": [
      "Unreal Engine",
      "STL e RAII",
      "Controle fino de memória",
      "Curva íngreme"
    ],
    "nivel": "Intermediário a avançado",
    "mercado": "Games, sistemas, quant",
    "relacionados": [
      "C",
      "Rust",
      "C#"
    ]
  },
  {
    "nome": "Go (Golang)",
    "tag": "Backend / Cloud",
    "categoria": "linguagem",
    "desc": "Simples, concorrente e rápida de compilar. Cloud e microsserviços.",
    "detalhes": [
      "Goroutines",
      "Docker/K8s tooling",
      "Binário estático"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Muito forte em backend",
    "relacionados": [
      "Rust",
      "C",
      "Python"
    ]
  },
  {
    "nome": "Rust",
    "tag": "Sistemas / Segurança",
    "categoria": "linguagem",
    "desc": "Performance de C/C++ com segurança de memória no compilador.",
    "detalhes": [
      "Ownership",
      "WASM, CLI, sistemas",
      "Curva alta, recompensa alta"
    ],
    "nivel": "Intermediário a avançado",
    "mercado": "Crescendo rápido",
    "relacionados": [
      "C",
      "C++",
      "Zig"
    ]
  },
  {
    "nome": "Kotlin",
    "tag": "Android / JVM",
    "categoria": "linguagem",
    "desc": "Oficial no Android; concisa e null-safe sobre a JVM.",
    "detalhes": [
      "Corrotinas",
      "Interopera com Java",
      "Ktor / Spring"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Forte em mobile",
    "relacionados": [
      "Java",
      "Swift",
      "Dart"
    ]
  },
  {
    "nome": "Swift",
    "tag": "Apple / iOS",
    "categoria": "linguagem",
    "desc": "Linguagem moderna Apple: iOS, macOS, visionOS.",
    "detalhes": [
      "SwiftUI",
      "Segurança de tipos",
      "Playgrounds"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Ecossistema Apple",
    "relacionados": [
      "Kotlin",
      "Objective-C",
      "Dart"
    ]
  },
  {
    "nome": "Dart",
    "tag": "Flutter",
    "categoria": "linguagem",
    "desc": "Linguagem do Flutter: mobile, web e desktop com uma base.",
    "detalhes": [
      "Hot reload",
      "Widgets",
      "MVPs multiplataforma"
    ],
    "nivel": "Iniciante",
    "mercado": "Crescendo",
    "relacionados": [
      "Kotlin",
      "Swift",
      "JavaScript"
    ]
  },
  {
    "nome": "PHP",
    "tag": "Web / CMS",
    "categoria": "linguagem",
    "desc": "WordPress, Laravel e grande parte da web ainda roda em PHP.",
    "detalhes": [
      "Laravel 11",
      "PHP 8+",
      "Hospedagem acessível"
    ],
    "nivel": "Iniciante",
    "mercado": "Ainda enorme",
    "relacionados": [
      "JavaScript",
      "SQL",
      "HTML"
    ]
  },
  {
    "nome": "Ruby",
    "tag": "Web / Produtividade",
    "categoria": "linguagem",
    "desc": "Famosa pelo Rails e produtividade em produtos web.",
    "detalhes": [
      "Ruby on Rails",
      "Sintaxe elegante",
      "Startups"
    ],
    "nivel": "Iniciante",
    "mercado": "Nicho sólido",
    "relacionados": [
      "Python",
      "Elixir"
    ]
  },
  {
    "nome": "SQL",
    "tag": "Dados / Consulta",
    "categoria": "dados",
    "desc": "Padrão para bancos relacionais.",
    "detalhes": [
      "JOIN, índices, transações",
      "PostgreSQL, MySQL, SQL Server",
      "Todo backend precisa"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal",
    "relacionados": [
      "Python",
      "GraphQL",
      "NoSQL Query (MongoDB)"
    ]
  },
  {
    "nome": "HTML",
    "tag": "Web / Estrutura",
    "categoria": "web",
    "desc": "Marcação que estrutura páginas.",
    "detalhes": [
      "Semântica",
      "Acessibilidade",
      "Base do front"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal",
    "relacionados": [
      "CSS",
      "JavaScript"
    ]
  },
  {
    "nome": "CSS",
    "tag": "Web / Estilo",
    "categoria": "web",
    "desc": "Layout, cores, responsivo e animação.",
    "detalhes": [
      "Flexbox e Grid",
      "Variáveis CSS",
      "Mobile-first"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal",
    "relacionados": [
      "HTML",
      "Sass / SCSS",
      "Tailwind CSS"
    ]
  },
  {
    "nome": "Sass / SCSS",
    "tag": "Web / CSS",
    "categoria": "web",
    "desc": "Pré-processador CSS com variáveis e mixins.",
    "detalhes": [
      "Organização em projetos grandes",
      "Compila para CSS"
    ],
    "nivel": "Iniciante",
    "mercado": "Comum em front",
    "relacionados": [
      "CSS",
      "Tailwind CSS"
    ]
  },
  {
    "nome": "Tailwind CSS",
    "tag": "Utility CSS",
    "categoria": "web",
    "desc": "Classes utilitárias para montar UI rápido.",
    "detalhes": [
      "Design tokens",
      "React/Vue/Svelte",
      "Não substitui CSS de verdade"
    ],
    "nivel": "Iniciante",
    "mercado": "Altíssimo",
    "relacionados": [
      "CSS",
      "JavaScript"
    ]
  },
  {
    "nome": "GraphQL",
    "tag": "APIs",
    "categoria": "dados",
    "desc": "O cliente pede só os campos que precisa.",
    "detalhes": [
      "Schema tipado",
      "Apollo/Relay",
      "Alternativa flexível ao REST"
    ],
    "nivel": "Intermediário",
    "mercado": "Produtos web modernos",
    "relacionados": [
      "TypeScript",
      "SQL"
    ]
  },
  {
    "nome": "Bash / Shell",
    "tag": "Terminal",
    "categoria": "linguagem",
    "desc": "Scripts no Linux/macOS.",
    "detalhes": [
      "Pipes, cron, SSH",
      "Essencial em servidores"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal Unix",
    "relacionados": [
      "PowerShell",
      "Python"
    ]
  },
  {
    "nome": "PowerShell",
    "tag": "Automação Windows",
    "categoria": "linguagem",
    "desc": "Shell orientado a objetos Microsoft.",
    "detalhes": [
      "Azure e AD",
      "Multiplataforma"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Empresas Windows",
    "relacionados": [
      "Bash / Shell",
      "C#"
    ]
  },
  {
    "nome": "Assembly",
    "tag": "Baixo nível",
    "categoria": "linguagem",
    "desc": "Instruções próximas da CPU.",
    "detalhes": [
      "x86/ARM",
      "Reverse engineering",
      "Embarcados"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho",
    "relacionados": [
      "C",
      "Rust"
    ]
  },
  {
    "nome": "R",
    "tag": "Estatística",
    "categoria": "linguagem",
    "desc": "Estatística e visualização científica.",
    "detalhes": [
      "tidyverse",
      "ggplot2",
      "Pesquisa"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Ciência",
    "relacionados": [
      "Python",
      "SQL"
    ]
  },
  {
    "nome": "Julia",
    "tag": "Científico / HPC",
    "categoria": "linguagem",
    "desc": "Performance para ciência e simulação.",
    "detalhes": [
      "Multiple dispatch",
      "Numérico"
    ],
    "nivel": "Intermediário",
    "mercado": "Pesquisa",
    "relacionados": [
      "Python",
      "MATLAB",
      "C++"
    ]
  },
  {
    "nome": "Scala",
    "tag": "JVM / Dados",
    "categoria": "linguagem",
    "desc": "Funcional+OO; histórico com Spark.",
    "detalhes": [
      "Spark",
      "Akka",
      "Expressiva"
    ],
    "nivel": "Intermediário",
    "mercado": "Dados/backend",
    "relacionados": [
      "Java",
      "Kotlin"
    ]
  },
  {
    "nome": "Elixir",
    "tag": "Backend concorrente",
    "categoria": "linguagem",
    "desc": "BEAM/Erlang: fault-tolerance e realtime.",
    "detalhes": [
      "Phoenix",
      "OTP"
    ],
    "nivel": "Intermediário",
    "mercado": "Nicho bem pago",
    "relacionados": [
      "Ruby",
      "Erlang",
      "Go (Golang)"
    ]
  },
  {
    "nome": "Haskell",
    "tag": "Funcional",
    "categoria": "linguagem",
    "desc": "Funcional pura e tipos avançados.",
    "detalhes": [
      "Monads",
      "Influencia outras langs"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho",
    "relacionados": [
      "Scala",
      "F#",
      "OCaml"
    ]
  },
  {
    "nome": "Lua",
    "tag": "Embutida / Games",
    "categoria": "linguagem",
    "desc": "Leve: Love2D, Roblox, Nginx, engines.",
    "detalhes": [
      "Scripting embutido",
      "Sintaxe simples"
    ],
    "nivel": "Iniciante",
    "mercado": "Games/script",
    "relacionados": [
      "GDScript",
      "Python",
      "C"
    ]
  },
  {
    "nome": "Solidity",
    "tag": "Blockchain",
    "categoria": "linguagem",
    "desc": "Smart contracts EVM/Ethereum.",
    "detalhes": [
      "Hardhat/Foundry",
      "Segurança crítica"
    ],
    "nivel": "Intermediário",
    "mercado": "Volátil",
    "relacionados": [
      "JavaScript",
      "Rust"
    ]
  },
  {
    "nome": "Zig",
    "tag": "Sistemas",
    "categoria": "linguagem",
    "desc": "Alternativa moderna ao C.",
    "detalhes": [
      "Cross-compile",
      "Sem hidden control flow"
    ],
    "nivel": "Intermediário",
    "mercado": "Emergente",
    "relacionados": [
      "C",
      "Rust",
      "V"
    ]
  },
  {
    "nome": "V",
    "tag": "Sistemas",
    "categoria": "linguagem",
    "desc": "Simples e rápida de compilar.",
    "detalhes": [
      "Sintaxe limpa",
      "Ainda madurando"
    ],
    "nivel": "Intermediário",
    "mercado": "Emergente",
    "relacionados": [
      "Go (Golang)",
      "C"
    ]
  },
  {
    "nome": "Nim",
    "tag": "Sistemas",
    "categoria": "linguagem",
    "desc": "Expressiva, compila para C/JS.",
    "detalhes": [
      "Metaprogramação",
      "CLIs"
    ],
    "nivel": "Intermediário",
    "mercado": "Nicho",
    "relacionados": [
      "Python",
      "Rust"
    ]
  },
  {
    "nome": "Perl",
    "tag": "Texto / Legado",
    "categoria": "linguagem",
    "desc": "Regex e scripts clássicos.",
    "detalhes": [
      "Legado bioinfo/sysadmin"
    ],
    "nivel": "Intermediário",
    "mercado": "Manutenção",
    "relacionados": [
      "Python",
      "Bash / Shell"
    ]
  },
  {
    "nome": "Objective-C",
    "tag": "Apple legado",
    "categoria": "linguagem",
    "desc": "Antecessora do Swift.",
    "detalhes": [
      "Interop com Swift"
    ],
    "nivel": "Intermediário",
    "mercado": "Legado iOS",
    "relacionados": [
      "Swift",
      "C"
    ]
  },
  {
    "nome": "Groovy",
    "tag": "JVM / CI",
    "categoria": "linguagem",
    "desc": "Gradle e Jenkins pipelines.",
    "detalhes": [
      "Sintaxe sobre Java"
    ],
    "nivel": "Intermediário",
    "mercado": "Build/CI",
    "relacionados": [
      "Java",
      "Kotlin"
    ]
  },
  {
    "nome": "Clojure",
    "tag": "Funcional JVM",
    "categoria": "linguagem",
    "desc": "Lisp moderno na JVM.",
    "detalhes": [
      "Imutabilidade",
      "REPL"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho",
    "relacionados": [
      "Scala",
      "Haskell"
    ]
  },
  {
    "nome": "F#",
    "tag": "Funcional .NET",
    "categoria": "linguagem",
    "desc": "Funcional no ecossistema .NET.",
    "detalhes": [
      "Type providers",
      "Interop C#"
    ],
    "nivel": "Intermediário",
    "mercado": "Nicho .NET",
    "relacionados": [
      "C#",
      "Haskell"
    ]
  },
  {
    "nome": "Crystal",
    "tag": "Ruby-like nativo",
    "categoria": "linguagem",
    "desc": "Sintaxe Ruby, binário nativo.",
    "detalhes": [
      "Performance alta"
    ],
    "nivel": "Intermediário",
    "mercado": "Nicho",
    "relacionados": [
      "Ruby",
      "Go (Golang)"
    ]
  },
  {
    "nome": "COBOL",
    "tag": "Mainframe",
    "categoria": "linguagem",
    "desc": "Bancos e governo em mainframe.",
    "detalhes": [
      "Batch financeiro",
      "Bem pago em manutenção"
    ],
    "nivel": "Intermediário",
    "mercado": "Nicho",
    "relacionados": [
      "Java",
      "SQL",
      "C"
    ]
  },
  {
    "nome": "MATLAB",
    "tag": "Engenharia",
    "categoria": "linguagem",
    "desc": "Controle, sinais e protótipos numéricos.",
    "detalhes": [
      "Simulink",
      "Academia/indústria"
    ],
    "nivel": "Intermediário",
    "mercado": "Engenharia",
    "relacionados": [
      "Python",
      "Julia",
      "R"
    ]
  },
  {
    "nome": "WebAssembly (WASM)",
    "tag": "Web performance",
    "categoria": "web",
    "desc": "Binário rápido no navegador.",
    "detalhes": [
      "De Rust/C/C++",
      "Jogos e editors web"
    ],
    "nivel": "Intermediário a avançado",
    "mercado": "Crescendo",
    "relacionados": [
      "Rust",
      "C++",
      "JavaScript"
    ]
  },
  {
    "nome": "NoSQL Query (MongoDB)",
    "tag": "Documentos",
    "categoria": "dados",
    "desc": "Consultas em bancos documentais.",
    "detalhes": [
      "Aggregation pipeline",
      "Flexível vs SQL"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Startups",
    "relacionados": [
      "SQL",
      "JavaScript"
    ]
  },
  {
    "nome": "Cypher",
    "tag": "Grafos",
    "categoria": "dados",
    "desc": "Query language do Neo4j.",
    "detalhes": [
      "MATCH de relacionamentos"
    ],
    "nivel": "Intermediário",
    "mercado": "Nicho grafos",
    "relacionados": [
      "SQL",
      "SPARQL"
    ]
  },
  {
    "nome": "SPARQL",
    "tag": "Web semântica",
    "categoria": "dados",
    "desc": "Consulta RDF/linked data.",
    "detalhes": [
      "Knowledge graphs"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho",
    "relacionados": [
      "SQL",
      "Cypher"
    ]
  },
  {
    "nome": "Markdown",
    "tag": "Documentação",
    "categoria": "web",
    "desc": "Texto leve para README e docs.",
    "detalhes": [
      "GitHub, blogs estáticos"
    ],
    "nivel": "Iniciante",
    "mercado": "Prática universal",
    "relacionados": [
      "HTML"
    ]
  },
  {
    "nome": "JSON / YAML",
    "tag": "Config / APIs",
    "categoria": "dados",
    "desc": "JSON em APIs; YAML em K8s e CI.",
    "detalhes": [
      "Todo dev lê ambos"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal",
    "relacionados": [
      "SQL",
      "Bash / Shell"
    ]
  },
  {
    "nome": "PromQL",
    "tag": "Observabilidade",
    "categoria": "dados",
    "desc": "Métricas no Prometheus.",
    "detalhes": [
      "Grafana",
      "SRE"
    ],
    "nivel": "Intermediário",
    "mercado": "DevOps",
    "relacionados": [
      "Go (Golang)",
      "SQL"
    ]
  },
  {
    "nome": "Terraform (HCL)",
    "tag": "IaC",
    "categoria": "ferramenta",
    "desc": "Infraestrutura como código.",
    "detalhes": [
      "AWS/GCP/Azure",
      "plan/apply"
    ],
    "nivel": "Intermediário",
    "mercado": "Altíssimo cloud",
    "relacionados": [
      "YAML",
      "Bash / Shell"
    ]
  },
  {
    "nome": "Unity (C#)",
    "tag": "GameDev Engine",
    "categoria": "ferramenta",
    "desc": "Engine de jogos; gameplay em C#.",
    "detalhes": [
      "Não é linguagem: é motor",
      "2D/3D/VR",
      "ciclo MonoBehaviour",
      "itch.io / stores"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Altíssimo game dev",
    "quandoAprender": "Com C# básico",
    "relacionados": [
      "C#",
      "GDScript",
      "C++"
    ]
  },
  {
    "nome": "GDScript",
    "tag": "Godot",
    "categoria": "linguagem",
    "desc": "Linguagem do Godot, estilo Python.",
    "detalhes": [
      "2D forte",
      "Open-source"
    ],
    "nivel": "Iniciante",
    "mercado": "Indie crescente",
    "relacionados": [
      "Unity (C#)",
      "Python",
      "C#"
    ]
  },
  {
    "nome": "Unreal Blueprints / C++",
    "tag": "Unreal Engine",
    "categoria": "ferramenta",
    "desc": "Blueprints + C++ para AAA.",
    "detalhes": [
      "Gráficos avançados",
      "Curva alta"
    ],
    "nivel": "Intermediário a avançado",
    "mercado": "AAA",
    "relacionados": [
      "C++",
      "C#",
      "Unity (C#)"
    ]
  },
  {
    "nome": "Erlang",
    "tag": "Telecom",
    "categoria": "linguagem",
    "desc": "Base da BEAM, sistemas distribuídos.",
    "detalhes": [
      "Modelo de atores",
      "Origem do Elixir"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho",
    "relacionados": [
      "Elixir",
      "Go (Golang)"
    ]
  },
  {
    "nome": "OCaml",
    "tag": "Funcional",
    "categoria": "linguagem",
    "desc": "Funcional tipada; compiladores e fintech.",
    "detalhes": [
      "Inferência de tipos"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho",
    "relacionados": [
      "Haskell",
      "F#",
      "Rust"
    ]
  },
  {
    "nome": "Fortran",
    "tag": "HPC",
    "categoria": "linguagem",
    "desc": "Simulações científicas e supercomputação.",
    "detalhes": [
      "Legado numérico enorme"
    ],
    "nivel": "Intermediário",
    "mercado": "Academia/HPC",
    "relacionados": [
      "C",
      "Python",
      "Julia"
    ]
  },
  {
    "nome": "Ada",
    "tag": "Sistemas críticos",
    "categoria": "linguagem",
    "desc": "Aviação e safety-critical.",
    "detalhes": [
      "Contratos e tipagem rígida"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho crítico",
    "relacionados": [
      "C",
      "Rust"
    ]
  },
  {
    "nome": "Scratch",
    "tag": "Educação",
    "categoria": "linguagem",
    "desc": "Blocos visuais para lógica inicial.",
    "detalhes": [
      "Transição para Python"
    ],
    "nivel": "Iniciante absoluto",
    "mercado": "Educação",
    "relacionados": [
      "Python",
      "Lua"
    ]
  },
  {
    "nome": "Processing / p5.js",
    "tag": "Criativo",
    "categoria": "linguagem",
    "desc": "Arte generativa e visualização.",
    "detalhes": [
      "p5.js no browser"
    ],
    "nivel": "Iniciante",
    "mercado": "Criativo",
    "relacionados": [
      "JavaScript",
      "Java"
    ]
  },
  {
    "nome": "T-SQL / PL/pgSQL",
    "tag": "SQL procedural",
    "categoria": "dados",
    "desc": "Procedures e funções no banco.",
    "detalhes": [
      "Triggers e jobs"
    ],
    "nivel": "Intermediário",
    "mercado": "Backend/dados",
    "relacionados": [
      "SQL",
      "Python"
    ]
  },
  {
    "nome": "HTML5 & CSS3",
    "tag": "Web moderno",
    "categoria": "web",
    "desc": "Combo clássico de front introdutório.",
    "detalhes": [
      "Semântica + layout moderno"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal",
    "relacionados": [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  },
  {
    "nome": "Vue.js",
    "tag": "Front framework",
    "categoria": "ferramenta",
    "desc": "Framework progressivo de UI.",
    "detalhes": [
      "Composition API",
      "Curva amigável"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Forte",
    "relacionados": [
      "JavaScript",
      "TypeScript",
      "React"
    ]
  },
  {
    "nome": "React",
    "tag": "Front library",
    "categoria": "ferramenta",
    "desc": "Biblioteca de UI componentizada (Meta).",
    "detalhes": [
      "Hooks",
      "Ecossistema enorme",
      "Next.js"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Altíssimo",
    "relacionados": [
      "JavaScript",
      "TypeScript",
      "Vue.js"
    ]
  },
  {
    "nome": "Angular",
    "tag": "Front framework",
    "categoria": "ferramenta",
    "desc": "Framework completo da Google.",
    "detalhes": [
      "RxJS",
      "TypeScript first",
      "Enterprise"
    ],
    "nivel": "Intermediário",
    "mercado": "Enterprise",
    "relacionados": [
      "TypeScript",
      "Java",
      "C#"
    ]
  },
  {
    "nome": "Svelte",
    "tag": "Front compiler",
    "categoria": "ferramenta",
    "desc": "Compila away o framework.",
    "detalhes": [
      "Pouco boilerplate",
      "SvelteKit"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Crescendo",
    "relacionados": [
      "JavaScript",
      "Vue.js"
    ]
  },
  {
    "nome": "Next.js",
    "tag": "Fullstack React",
    "categoria": "ferramenta",
    "desc": "Meta-framework React com SSR/SSG.",
    "detalhes": [
      "App Router",
      "Deploy Vercel"
    ],
    "nivel": "Intermediário",
    "mercado": "Altíssimo",
    "relacionados": [
      "React",
      "TypeScript"
    ]
  },
  {
    "nome": "Node.js",
    "tag": "Runtime JS",
    "categoria": "ferramenta",
    "desc": "JS no servidor.",
    "detalhes": [
      "Event loop",
      "npm",
      "APIs"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Altíssimo",
    "relacionados": [
      "JavaScript",
      "TypeScript"
    ]
  },
  {
    "nome": "Deno",
    "tag": "Runtime JS/TS",
    "categoria": "ferramenta",
    "desc": "Runtime moderno com TS nativo e permissões.",
    "detalhes": [
      "Padrões web",
      "Segurança por default"
    ],
    "nivel": "Intermediário",
    "mercado": "Emergente",
    "relacionados": [
      "TypeScript",
      "Node.js"
    ]
  },
  {
    "nome": "Bun",
    "tag": "Runtime JS",
    "categoria": "ferramenta",
    "desc": "Runtime/toolkit rápido (bundler, test runner).",
    "detalhes": [
      "Compat npm",
      "Performance"
    ],
    "nivel": "Intermediário",
    "mercado": "Emergente",
    "relacionados": [
      "Node.js",
      "TypeScript"
    ]
  },
  {
    "nome": "Spring Boot",
    "tag": "Java backend",
    "categoria": "ferramenta",
    "desc": "Framework Java para APIs rápidas.",
    "detalhes": [
      "Starters",
      "Ecossistema enterprise"
    ],
    "nivel": "Intermediário",
    "mercado": "Altíssimo enterprise",
    "relacionados": [
      "Java",
      "Kotlin"
    ]
  },
  {
    "nome": "Django",
    "tag": "Python web",
    "categoria": "ferramenta",
    "desc": "Framework batteries-included.",
    "detalhes": [
      "ORM",
      "Admin",
      "Auth"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Forte",
    "relacionados": [
      "Python",
      "SQL"
    ]
  },
  {
    "nome": "FastAPI",
    "tag": "Python APIs",
    "categoria": "ferramenta",
    "desc": "APIs modernas com type hints.",
    "detalhes": [
      "OpenAPI automático",
      "Async"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Crescendo",
    "relacionados": [
      "Python",
      "TypeScript"
    ]
  },
  {
    "nome": "Laravel",
    "tag": "PHP web",
    "categoria": "ferramenta",
    "desc": "Framework PHP elegante.",
    "detalhes": [
      "Eloquent",
      "Blade",
      "Filas"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Forte web",
    "relacionados": [
      "PHP",
      "SQL"
    ]
  },
  {
    "nome": "Flutter",
    "tag": "UI multiplataforma",
    "categoria": "ferramenta",
    "desc": "UI toolkit do Google com Dart.",
    "detalhes": [
      "iOS/Android/Web/Desktop",
      "Material/Cupertino"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Forte mobile",
    "relacionados": [
      "Dart",
      "Kotlin",
      "Swift"
    ]
  },
  {
    "nome": "React Native",
    "tag": "Mobile multiplataforma",
    "categoria": "ferramenta",
    "desc": "Apps mobile com React.",
    "detalhes": [
      "Bridge nativa",
      "Expo"
    ],
    "nivel": "Intermediário",
    "mercado": "Forte",
    "relacionados": [
      "React",
      "TypeScript",
      "Kotlin"
    ]
  },
  {
    "nome": "Docker",
    "tag": "Containers",
    "categoria": "ferramenta",
    "desc": "Empacota app e dependências.",
    "detalhes": [
      "Dockerfile",
      "Compose",
      "Base de K8s"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Universal DevOps",
    "relacionados": [
      "Linux",
      "YAML",
      "Kubernetes"
    ]
  },
  {
    "nome": "Kubernetes",
    "tag": "Orquestração",
    "categoria": "ferramenta",
    "desc": "Orquestra containers em escala.",
    "detalhes": [
      "Pods, Services, Deployments",
      "Cloud-native"
    ],
    "nivel": "Avançado",
    "mercado": "Altíssimo cloud",
    "relacionados": [
      "Docker",
      "Go (Golang)",
      "YAML"
    ]
  },
  {
    "nome": "Git",
    "tag": "Versionamento",
    "categoria": "ferramenta",
    "desc": "Controle de versão distribuído.",
    "detalhes": [
      "branch, merge, rebase",
      "Base de todo time"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal",
    "relacionados": [
      "GitHub",
      "Bash / Shell"
    ]
  },
  {
    "nome": "GitHub",
    "tag": "Colaboração",
    "categoria": "ferramenta",
    "desc": "Hospedagem Git + PRs + Actions.",
    "detalhes": [
      "Code review",
      "CI"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal",
    "relacionados": [
      "Git",
      "YAML"
    ]
  },
  {
    "nome": "PostgreSQL",
    "tag": "Banco relacional",
    "categoria": "dados",
    "desc": "Banco open-source poderoso.",
    "detalhes": [
      "SQL padrão + extensões",
      "Default sólido"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Altíssimo",
    "relacionados": [
      "SQL",
      "Python"
    ]
  },
  {
    "nome": "MySQL / MariaDB",
    "tag": "Banco relacional",
    "categoria": "dados",
    "desc": "Clássicos da web.",
    "detalhes": [
      "LAMP",
      "Ampla hospedagem"
    ],
    "nivel": "Iniciante",
    "mercado": "Alto",
    "relacionados": [
      "SQL",
      "PHP"
    ]
  },
  {
    "nome": "Redis",
    "tag": "Cache / estruturas",
    "categoria": "dados",
    "desc": "In-memory: cache, filas, sessões.",
    "detalhes": [
      "Estruturas de dados em memória"
    ],
    "nivel": "Intermediário",
    "mercado": "Altíssimo backend",
    "relacionados": [
      "SQL",
      "Go (Golang)"
    ]
  },
  {
    "nome": "MongoDB",
    "tag": "Documentos",
    "categoria": "dados",
    "desc": "Banco documental JSON-like.",
    "detalhes": [
      "Flex schema",
      "Atlas cloud"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Alto startups",
    "relacionados": [
      "NoSQL Query (MongoDB)",
      "JavaScript"
    ]
  },
  {
    "nome": "SQLite",
    "tag": "Banco embarcado",
    "categoria": "dados",
    "desc": "Banco em arquivo, zero servidor.",
    "detalhes": [
      "Mobile e desktop",
      "Protótipos"
    ],
    "nivel": "Iniciante",
    "mercado": "Onipresente em apps",
    "relacionados": [
      "SQL",
      "Python"
    ]
  },
  {
    "nome": "Kafka",
    "tag": "Streaming",
    "categoria": "ferramenta",
    "desc": "Log distribuído para eventos.",
    "detalhes": [
      "Producers/consumers",
      "Alta vazão"
    ],
    "nivel": "Avançado",
    "mercado": "Dados/event-driven",
    "relacionados": [
      "Java",
      "Scala",
      "Go (Golang)"
    ]
  },
  {
    "nome": "RabbitMQ",
    "tag": "Mensageria",
    "categoria": "ferramenta",
    "desc": "Broker AMQP clássico.",
    "detalhes": [
      "Filas e exchanges"
    ],
    "nivel": "Intermediário",
    "mercado": "Backend",
    "relacionados": [
      "Python",
      "Java",
      "Go (Golang)"
    ]
  },
  {
    "nome": "Nginx",
    "tag": "Proxy / web server",
    "categoria": "ferramenta",
    "desc": "Servidor e reverse proxy.",
    "detalhes": [
      "TLS, load balance",
      "Static files"
    ],
    "nivel": "Intermediário",
    "mercado": "Universal ops",
    "relacionados": [
      "Bash / Shell",
      "Linux"
    ]
  },
  {
    "nome": "Linux",
    "tag": "Sistema operacional",
    "categoria": "ferramenta",
    "desc": "Base de servidores e containers.",
    "detalhes": [
      "Permissões, processos, rede",
      "WSL no Windows"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Universal servidor",
    "relacionados": [
      "Bash / Shell",
      "Docker"
    ]
  },
  {
    "nome": "AWS",
    "tag": "Cloud",
    "categoria": "ferramenta",
    "desc": "Maior nuvem pública.",
    "detalhes": [
      "EC2, S3, RDS, Lambda",
      "Certificações"
    ],
    "nivel": "Intermediário",
    "mercado": "Altíssimo",
    "relacionados": [
      "Terraform (HCL)",
      "Python",
      "Linux"
    ]
  },
  {
    "nome": "GCP",
    "tag": "Cloud",
    "categoria": "ferramenta",
    "desc": "Nuvem Google; forte em dados/K8s.",
    "detalhes": [
      "BigQuery",
      "GKE"
    ],
    "nivel": "Intermediário",
    "mercado": "Alto",
    "relacionados": [
      "Kubernetes",
      "Python"
    ]
  },
  {
    "nome": "Azure",
    "tag": "Cloud",
    "categoria": "ferramenta",
    "desc": "Nuvem Microsoft; forte enterprise.",
    "detalhes": [
      "AD, .NET, híbrido"
    ],
    "nivel": "Intermediário",
    "mercado": "Alto enterprise",
    "relacionados": [
      "C#",
      "PowerShell",
      "Terraform (HCL)"
    ]
  },
  {
    "nome": "Pandas",
    "tag": "Dados Python",
    "categoria": "ferramenta",
    "desc": "Tabelas e análise em Python.",
    "detalhes": [
      "DataFrame",
      "ETL leve"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Dados",
    "relacionados": [
      "Python",
      "SQL"
    ]
  },
  {
    "nome": "NumPy",
    "tag": "Numérico Python",
    "categoria": "ferramenta",
    "desc": "Arrays e álgebra linear.",
    "detalhes": [
      "Base do stack científico"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Dados/IA",
    "relacionados": [
      "Python",
      "MATLAB"
    ]
  },
  {
    "nome": "PyTorch",
    "tag": "Deep learning",
    "categoria": "ferramenta",
    "desc": "Framework de redes neurais.",
    "detalhes": [
      "Pesquisa e produção",
      "GPU"
    ],
    "nivel": "Intermediário a avançado",
    "mercado": "IA",
    "relacionados": [
      "Python",
      "NumPy"
    ]
  },
  {
    "nome": "TensorFlow",
    "tag": "Deep learning",
    "categoria": "ferramenta",
    "desc": "Framework ML do Google.",
    "detalhes": [
      "Keras",
      "Serving"
    ],
    "nivel": "Intermediário a avançado",
    "mercado": "IA",
    "relacionados": [
      "Python",
      "PyTorch"
    ]
  },
  {
    "nome": "scikit-learn",
    "tag": "ML clássico",
    "categoria": "ferramenta",
    "desc": "Modelos clássicos de ML em Python.",
    "detalhes": [
      "Pipeline, métricas"
    ],
    "nivel": "Intermediário",
    "mercado": "Dados",
    "relacionados": [
      "Python",
      "Pandas"
    ]
  },
  {
    "nome": "Spark",
    "tag": "Big data",
    "categoria": "ferramenta",
    "desc": "Processamento distribuído.",
    "detalhes": [
      "DataFrames",
      "Streaming"
    ],
    "nivel": "Avançado",
    "mercado": "Engenharia de dados",
    "relacionados": [
      "Scala",
      "Python",
      "SQL"
    ]
  },
  {
    "nome": "dbt",
    "tag": "Transformação de dados",
    "categoria": "ferramenta",
    "desc": "SQL-first analytics engineering.",
    "detalhes": [
      "Models, tests, docs"
    ],
    "nivel": "Intermediário",
    "mercado": "Analytics eng",
    "relacionados": [
      "SQL",
      "Python"
    ]
  },
  {
    "nome": "Airflow",
    "tag": "Orquestração de pipelines",
    "categoria": "ferramenta",
    "desc": "DAGs para ETL/ELT.",
    "detalhes": [
      "Operators",
      "Scheduling"
    ],
    "nivel": "Intermediário a avançado",
    "mercado": "Dados",
    "relacionados": [
      "Python",
      "SQL"
    ]
  },
  {
    "nome": "Power BI",
    "tag": "BI / Visualização",
    "categoria": "ferramenta",
    "desc": "BI da Microsoft: dashboards e DAX.",
    "detalhes": [
      "Power Query",
      "Integração Office/Azure"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Altíssimo BI corporativo",
    "relacionados": [
      "SQL",
      "Excel",
      "DAX"
    ]
  },
  {
    "nome": "Tableau",
    "tag": "BI / Visualização",
    "categoria": "ferramenta",
    "desc": "Visualização analítica líder de mercado.",
    "detalhes": [
      "VizQL",
      "Dashboards interativos"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Alto BI",
    "relacionados": [
      "SQL",
      "Python"
    ]
  },
  {
    "nome": "Looker / Looker Studio",
    "tag": "BI Google",
    "categoria": "ferramenta",
    "desc": "BI e relatórios no ecossistema Google.",
    "detalhes": [
      "LookML",
      "BigQuery"
    ],
    "nivel": "Intermediário",
    "mercado": "Alto com GCP",
    "relacionados": [
      "SQL",
      "GCP"
    ]
  },
  {
    "nome": "Metabase",
    "tag": "BI open-source",
    "categoria": "ferramenta",
    "desc": "Perguntas SQL e dashboards simples.",
    "detalhes": [
      "Bom para times pequenos"
    ],
    "nivel": "Iniciante",
    "mercado": "Startups",
    "relacionados": [
      "SQL",
      "PostgreSQL"
    ]
  },
  {
    "nome": "Superset",
    "tag": "BI open-source",
    "categoria": "ferramenta",
    "desc": "BI Apache para exploração SQL.",
    "detalhes": [
      "Rich visualizations"
    ],
    "nivel": "Intermediário",
    "mercado": "Dados open-source",
    "relacionados": [
      "SQL",
      "Python"
    ]
  },
  {
    "nome": "Excel / Google Sheets",
    "tag": "Planilhas",
    "categoria": "ferramenta",
    "desc": "Análise tabular onipresente.",
    "detalhes": [
      "Base de muitos analistas",
      "Power Query no Excel"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal negócios",
    "relacionados": [
      "SQL",
      "Power BI"
    ]
  },
  {
    "nome": "DAX",
    "tag": "Linguagem BI",
    "categoria": "dados",
    "desc": "Fórmulas do Power BI / Analysis Services.",
    "detalhes": [
      "Medidas e colunas calculadas"
    ],
    "nivel": "Intermediário",
    "mercado": "BI Microsoft",
    "relacionados": [
      "Power BI",
      "SQL"
    ]
  },
  {
    "nome": "M (Power Query)",
    "tag": "ETL planilhas",
    "categoria": "dados",
    "desc": "Linguagem do Power Query.",
    "detalhes": [
      "Transformação de dados no Excel/BI"
    ],
    "nivel": "Intermediário",
    "mercado": "BI Microsoft",
    "relacionados": [
      "Power BI",
      "Excel / Google Sheets"
    ]
  },
  {
    "nome": "Qlik Sense",
    "tag": "BI",
    "categoria": "ferramenta",
    "desc": "BI associativo in-memory.",
    "detalhes": [
      "Modelo associativo"
    ],
    "nivel": "Intermediário",
    "mercado": "Corporativo",
    "relacionados": [
      "SQL",
      "Tableau"
    ]
  },
  {
    "nome": "MicroStrategy",
    "tag": "BI enterprise",
    "categoria": "ferramenta",
    "desc": "Plataforma BI corporativa.",
    "detalhes": [
      "Governança e escala"
    ],
    "nivel": "Intermediário",
    "mercado": "Enterprise",
    "relacionados": [
      "SQL",
      "Power BI"
    ]
  },
  {
    "nome": "Apache Flink",
    "tag": "Stream processing",
    "categoria": "ferramenta",
    "desc": "Processamento de eventos em tempo real.",
    "detalhes": [
      "Stateful streaming"
    ],
    "nivel": "Avançado",
    "mercado": "Dados tempo real",
    "relacionados": [
      "Kafka",
      "Java",
      "Scala"
    ]
  },
  {
    "nome": "Elasticsearch",
    "tag": "Busca",
    "categoria": "ferramenta",
    "desc": "Busca full-text e analytics de logs.",
    "detalhes": [
      "ELK stack"
    ],
    "nivel": "Intermediário",
    "mercado": "Alto",
    "relacionados": [
      "JSON / YAML",
      "Java"
    ]
  },
  {
    "nome": "Grafana",
    "tag": "Dashboards",
    "categoria": "ferramenta",
    "desc": "Visualização de métricas e logs.",
    "detalhes": [
      "Prometheus, Loki"
    ],
    "nivel": "Intermediário",
    "mercado": "DevOps/SRE",
    "relacionados": [
      "PromQL",
      "Docker"
    ]
  },
  {
    "nome": "Prometheus",
    "tag": "Métricas",
    "categoria": "ferramenta",
    "desc": "Coleta de métricas cloud-native.",
    "detalhes": [
      "Pull model",
      "Alertmanager"
    ],
    "nivel": "Intermediário",
    "mercado": "SRE",
    "relacionados": [
      "PromQL",
      "Grafana"
    ]
  },
  {
    "nome": "Jenkins",
    "tag": "CI clássico",
    "categoria": "ferramenta",
    "desc": "Automação de build/deploy.",
    "detalhes": [
      "Pipelines Groovy"
    ],
    "nivel": "Intermediário",
    "mercado": "Legado+enterprise",
    "relacionados": [
      "Groovy",
      "Docker"
    ]
  },
  {
    "nome": "GitHub Actions",
    "tag": "CI/CD",
    "categoria": "ferramenta",
    "desc": "CI integrado ao GitHub.",
    "detalhes": [
      "YAML workflows"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Altíssimo",
    "relacionados": [
      "Git",
      "YAML"
    ]
  },
  {
    "nome": "GitLab CI",
    "tag": "CI/CD",
    "categoria": "ferramenta",
    "desc": "CI do GitLab.",
    "detalhes": [
      ".gitlab-ci.yml"
    ],
    "nivel": "Intermediário",
    "mercado": "Alto",
    "relacionados": [
      "Git",
      "Docker"
    ]
  },
  {
    "nome": "Ansible",
    "tag": "Automação config",
    "categoria": "ferramenta",
    "desc": "Config management agentless.",
    "detalhes": [
      "Playbooks YAML"
    ],
    "nivel": "Intermediário",
    "mercado": "Ops",
    "relacionados": [
      "YAML",
      "Bash / Shell",
      "Python"
    ]
  },
  {
    "nome": "Pulumi",
    "tag": "IaC",
    "categoria": "ferramenta",
    "desc": "IaC com linguagens gerais (TS/Python/Go).",
    "detalhes": [
      "Vs Terraform HCL"
    ],
    "nivel": "Intermediário",
    "mercado": "Crescendo",
    "relacionados": [
      "TypeScript",
      "Python",
      "Terraform (HCL)"
    ]
  },
  {
    "nome": "Godot",
    "tag": "Game engine",
    "categoria": "ferramenta",
    "desc": "Engine open-source.",
    "detalhes": [
      "GDScript",
      "2D excelente"
    ],
    "nivel": "Iniciante",
    "mercado": "Indie",
    "relacionados": [
      "GDScript",
      "C#"
    ]
  },
  {
    "nome": "Blender (scripting)",
    "tag": "3D / Python",
    "categoria": "ferramenta",
    "desc": "3D open-source; automação em Python.",
    "detalhes": [
      "Pipeline de assets"
    ],
    "nivel": "Intermediário",
    "mercado": "Games/VFX",
    "relacionados": [
      "Python",
      "C++"
    ]
  },
  {
    "nome": "OpenCV",
    "tag": "Visão computacional",
    "categoria": "ferramenta",
    "desc": "Biblioteca de computer vision.",
    "detalhes": [
      "Python/C++"
    ],
    "nivel": "Intermediário",
    "mercado": "IA/visão",
    "relacionados": [
      "Python",
      "C++"
    ]
  },
  {
    "nome": "Hadoop",
    "tag": "Big data legado",
    "categoria": "ferramenta",
    "desc": "Ecossistema HDFS/MapReduce.",
    "detalhes": [
      "Ainda em legados"
    ],
    "nivel": "Avançado",
    "mercado": "Legado dados",
    "relacionados": [
      "Java",
      "Spark"
    ]
  },
  {
    "nome": "Cassandra",
    "tag": "NoSQL wide-column",
    "categoria": "dados",
    "desc": "Banco distribuído para escrita pesada.",
    "detalhes": [
      "Modelagem por query"
    ],
    "nivel": "Avançado",
    "mercado": "Escala",
    "relacionados": [
      "SQL",
      "Kafka"
    ]
  },
  {
    "nome": "Neo4j",
    "tag": "Banco de grafos",
    "categoria": "dados",
    "desc": "Grafos nativos + Cypher.",
    "detalhes": [
      "Relacionamentos complexos"
    ],
    "nivel": "Intermediário",
    "mercado": "Nicho",
    "relacionados": [
      "Cypher",
      "SQL"
    ]
  },
  {
    "nome": "Protobuf",
    "tag": "Serialização",
    "categoria": "dados",
    "desc": "Contratos binários gRPC.",
    "detalhes": [
      "Schema evolution"
    ],
    "nivel": "Intermediário",
    "mercado": "APIs internas",
    "relacionados": [
      "Go (Golang)",
      "Java",
      "TypeScript"
    ]
  },
  {
    "nome": "gRPC",
    "tag": "RPC",
    "categoria": "ferramenta",
    "desc": "RPC HTTP/2 + Protobuf.",
    "detalhes": [
      "Microsserviços"
    ],
    "nivel": "Intermediário",
    "mercado": "Backend",
    "relacionados": [
      "Protobuf",
      "Go (Golang)"
    ]
  },
  {
    "nome": "OpenAPI / Swagger",
    "tag": "Contrato HTTP",
    "categoria": "ferramenta",
    "desc": "Especificação de APIs REST.",
    "detalhes": [
      "Gera docs e clients"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "APIs",
    "relacionados": [
      "JSON / YAML",
      "TypeScript"
    ]
  },
  {
    "nome": "Jest / Vitest",
    "tag": "Testes JS",
    "categoria": "ferramenta",
    "desc": "Test runners no ecossistema JS.",
    "detalhes": [
      "Unit e snapshot"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Front/Node",
    "relacionados": [
      "JavaScript",
      "TypeScript"
    ]
  },
  {
    "nome": "Playwright",
    "tag": "E2E",
    "categoria": "ferramenta",
    "desc": "Testes end-to-end multi-browser.",
    "detalhes": [
      "Auto-wait",
      "Trace"
    ],
    "nivel": "Intermediário",
    "mercado": "QA/front",
    "relacionados": [
      "TypeScript",
      "JavaScript"
    ]
  },
  {
    "nome": "Cypress",
    "tag": "E2E",
    "categoria": "ferramenta",
    "desc": "E2E popular para web.",
    "detalhes": [
      "DX amigável"
    ],
    "nivel": "Intermediário",
    "mercado": "QA",
    "relacionados": [
      "JavaScript"
    ]
  },
  {
    "nome": "Selenium",
    "tag": "E2E clássico",
    "categoria": "ferramenta",
    "desc": "Automação de browser multi-linguagem.",
    "detalhes": [
      "WebDriver"
    ],
    "nivel": "Intermediário",
    "mercado": "QA legado+",
    "relacionados": [
      "Java",
      "Python"
    ]
  },
  {
    "nome": "JUnit",
    "tag": "Testes Java",
    "categoria": "ferramenta",
    "desc": "Framework de testes Java.",
    "detalhes": [
      "Base do ecossistema JVM"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Java",
    "relacionados": [
      "Java",
      "Spring Boot"
    ]
  },
  {
    "nome": "pytest",
    "tag": "Testes Python",
    "categoria": "ferramenta",
    "desc": "Testes simples e plugins em Python.",
    "detalhes": [
      "Fixtures"
    ],
    "nivel": "Iniciante",
    "mercado": "Python",
    "relacionados": [
      "Python"
    ]
  },
  {
    "nome": "Regex",
    "tag": "Padrões de texto",
    "categoria": "dados",
    "desc": "Linguagem de padrões para buscar/validar texto.",
    "detalhes": [
      "Independe de linguagem host",
      "Poderosa e perigosa se abusada"
    ],
    "nivel": "Intermediário",
    "mercado": "Universal",
    "relacionados": [
      "Perl",
      "Python",
      "JavaScript"
    ]
  },
  {
    "nome": "LaTeX",
    "tag": "Documentos técnicos",
    "categoria": "ferramenta",
    "desc": "Composição de textos científicos.",
    "detalhes": [
      "Papers e fórmulas"
    ],
    "nivel": "Intermediário",
    "mercado": "Academia",
    "relacionados": [
      "Markdown"
    ]
  },
  {
    "nome": "VHDL / Verilog",
    "tag": "Hardware",
    "categoria": "linguagem",
    "desc": "Descrição de hardware digital.",
    "detalhes": [
      "FPGA/ASIC"
    ],
    "nivel": "Avançado",
    "mercado": "Hardware",
    "relacionados": [
      "C",
      "Assembly"
    ]
  },
  {
    "nome": "CUDA",
    "tag": "GPU NVIDIA",
    "categoria": "ferramenta",
    "desc": "Programação paralela em GPU.",
    "detalhes": [
      "ML e simulação"
    ],
    "nivel": "Avançado",
    "mercado": "IA/HPC",
    "relacionados": [
      "C++",
      "Python"
    ]
  },
  {
    "nome": "OpenCL",
    "tag": "GPU heterogênea",
    "categoria": "ferramenta",
    "desc": "Compute paralelo multi-vendor.",
    "detalhes": [
      "Alternativa/complemento CUDA"
    ],
    "nivel": "Avançado",
    "mercado": "HPC",
    "relacionados": [
      "C",
      "CUDA"
    ]
  },
  {
    "nome": "SAS",
    "tag": "Analytics enterprise",
    "categoria": "ferramenta",
    "desc": "Suite analítica corporativa clássica.",
    "detalhes": [
      "Ainda em bancos e indústria"
    ],
    "nivel": "Intermediário",
    "mercado": "Corporativo legado",
    "relacionados": [
      "SQL",
      "R"
    ]
  },
  {
    "nome": "SPSS",
    "tag": "Estatística",
    "categoria": "ferramenta",
    "desc": "Análise estatística GUI (IBM).",
    "detalhes": [
      "Ciências sociais"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Academia/corp",
    "relacionados": [
      "R",
      "Python"
    ]
  },
  {
    "nome": "Snowflake",
    "tag": "Cloud warehouse",
    "categoria": "ferramenta",
    "desc": "Data warehouse cloud.",
    "detalhes": [
      "Separação storage/compute"
    ],
    "nivel": "Intermediário",
    "mercado": "Alto dados",
    "relacionados": [
      "SQL",
      "dbt"
    ]
  },
  {
    "nome": "BigQuery",
    "tag": "Warehouse Google",
    "categoria": "ferramenta",
    "desc": "SQL analítico serverless no GCP.",
    "detalhes": [
      "Petabytes",
      "ML integrado"
    ],
    "nivel": "Intermediário",
    "mercado": "Alto",
    "relacionados": [
      "SQL",
      "GCP"
    ]
  },
  {
    "nome": "Redshift",
    "tag": "Warehouse AWS",
    "categoria": "ferramenta",
    "desc": "Warehouse analítico na AWS.",
    "detalhes": [
      "Colunar"
    ],
    "nivel": "Intermediário",
    "mercado": "Alto",
    "relacionados": [
      "SQL",
      "AWS"
    ]
  },
  {
    "nome": "Airbyte",
    "tag": "Ingestão dados",
    "categoria": "ferramenta",
    "desc": "EL open-source para connectors.",
    "detalhes": [
      "Syncs para warehouse"
    ],
    "nivel": "Intermediário",
    "mercado": "Dados",
    "relacionados": [
      "SQL",
      "Airflow"
    ]
  },
  {
    "nome": "Great Expectations",
    "tag": "Qualidade de dados",
    "categoria": "ferramenta",
    "desc": "Testes de qualidade em datasets.",
    "detalhes": [
      "Expectations"
    ],
    "nivel": "Intermediário",
    "mercado": "Dados",
    "relacionados": [
      "Python",
      "SQL"
    ]
  },
  {
    "nome": "MLFlow",
    "tag": "MLOps",
    "categoria": "ferramenta",
    "desc": "Tracking de experimentos ML.",
    "detalhes": [
      "Registry de modelos"
    ],
    "nivel": "Intermediário",
    "mercado": "IA",
    "relacionados": [
      "Python",
      "PyTorch"
    ]
  },
  {
    "nome": "Hugging Face",
    "tag": "Modelos / NLP",
    "categoria": "ferramenta",
    "desc": "Hub de modelos e datasets.",
    "detalhes": [
      "Transformers"
    ],
    "nivel": "Intermediário",
    "mercado": "IA",
    "relacionados": [
      "Python",
      "PyTorch"
    ]
  },
  {
    "nome": "LangChain / LlamaIndex",
    "tag": "Orquestração LLM",
    "categoria": "ferramenta",
    "desc": "Frameworks para apps com LLMs e RAG.",
    "detalhes": [
      "Agents, tools, retrieval"
    ],
    "nivel": "Intermediário",
    "mercado": "IA aplicada",
    "relacionados": [
      "Python",
      "TypeScript"
    ]
  },
  {
    "nome": "OpenAI API",
    "tag": "LLM API",
    "categoria": "ferramenta",
    "desc": "API de modelos generativos.",
    "detalhes": [
      "Não cole segredos no front"
    ],
    "nivel": "Iniciante",
    "mercado": "Alto",
    "relacionados": [
      "Python",
      "TypeScript"
    ]
  },
  {
    "nome": "Ollama",
    "tag": "LLM local",
    "categoria": "ferramenta",
    "desc": "Rodar LLMs localmente.",
    "detalhes": [
      "Privacidade e custo"
    ],
    "nivel": "Intermediário",
    "mercado": "Crescendo",
    "relacionados": [
      "Python",
      "Linux"
    ]
  },
  {
    "nome": "Figma",
    "tag": "Design UI",
    "categoria": "ferramenta",
    "desc": "Design colaborativo de interfaces.",
    "detalhes": [
      "Handoff para devs"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal produto",
    "relacionados": [
      "CSS",
      "HTML"
    ]
  },
  {
    "nome": "Jira",
    "tag": "Gestão de trabalho",
    "categoria": "ferramenta",
    "desc": "Issues e sprints ágeis.",
    "detalhes": [
      "Scrum/Kanban"
    ],
    "nivel": "Iniciante",
    "mercado": "Corporativo",
    "relacionados": [
      "Git"
    ]
  },
  {
    "nome": "Postman",
    "tag": "APIs manuais",
    "categoria": "ferramenta",
    "desc": "Coleções HTTP para testar APIs.",
    "detalhes": [
      "Environments"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal API",
    "relacionados": [
      "OpenAPI / Swagger",
      "JSON / YAML"
    ]
  },
  {
    "nome": "Insomnia",
    "tag": "APIs manuais",
    "categoria": "ferramenta",
    "desc": "Cliente HTTP alternativo ao Postman.",
    "detalhes": [
      "GraphQL support"
    ],
    "nivel": "Iniciante",
    "mercado": "API",
    "relacionados": [
      "Postman",
      "GraphQL"
    ]
  },
  {
    "nome": "VS Code",
    "tag": "Editor",
    "categoria": "ferramenta",
    "desc": "Editor extensível dominante.",
    "detalhes": [
      "Debug, extensions, remote"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal",
    "relacionados": [
      "Git",
      "JavaScript"
    ]
  },
  {
    "nome": "IntelliJ IDEA",
    "tag": "IDE JVM",
    "categoria": "ferramenta",
    "desc": "IDE poderosa para Java/Kotlin.",
    "detalhes": [
      "Refactoring"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Java",
    "relacionados": [
      "Java",
      "Kotlin"
    ]
  },
  {
    "nome": "Visual Studio",
    "tag": "IDE Microsoft",
    "categoria": "ferramenta",
    "desc": "IDE completa para .NET e C++.",
    "detalhes": [
      "Debugger forte"
    ],
    "nivel": "Iniciante",
    "mercado": ".NET",
    "relacionados": [
      "C#",
      "C++"
    ]
  },
  {
    "nome": "Xcode",
    "tag": "IDE Apple",
    "categoria": "ferramenta",
    "desc": "IDE oficial iOS/macOS.",
    "detalhes": [
      "Simulators"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Apple",
    "relacionados": [
      "Swift",
      "Objective-C"
    ]
  },
  {
    "nome": "Android Studio",
    "tag": "IDE Android",
    "categoria": "ferramenta",
    "desc": "IDE oficial Android.",
    "detalhes": [
      "Emulator",
      "Gradle"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Android",
    "relacionados": [
      "Kotlin",
      "Java"
    ]
  },
  {
    "nome": "Vite",
    "tag": "Bundler front",
    "categoria": "ferramenta",
    "desc": "Dev server e build rápidos.",
    "detalhes": [
      "ESM native"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Front moderno",
    "relacionados": [
      "JavaScript",
      "TypeScript"
    ]
  },
  {
    "nome": "Webpack",
    "tag": "Bundler",
    "categoria": "ferramenta",
    "desc": "Bundler clássico e configurável.",
    "detalhes": [
      "Legado em muitos projetos"
    ],
    "nivel": "Intermediário",
    "mercado": "Front",
    "relacionados": [
      "JavaScript"
    ]
  },
  {
    "nome": "esbuild / SWC",
    "tag": "Compiladores JS",
    "categoria": "ferramenta",
    "desc": "Transpilação extremamente rápida.",
    "detalhes": [
      "Usados por Vite e Next"
    ],
    "nivel": "Intermediário",
    "mercado": "Tooling front",
    "relacionados": [
      "TypeScript",
      "JavaScript"
    ]
  },
  {
    "nome": "Babel",
    "tag": "Transpilação JS",
    "categoria": "ferramenta",
    "desc": "Transforma JS moderno para alvos antigos.",
    "detalhes": [
      "Plugin ecosystem"
    ],
    "nivel": "Intermediário",
    "mercado": "Front",
    "relacionados": [
      "JavaScript"
    ]
  },
  {
    "nome": "ESLint",
    "tag": "Lint JS",
    "categoria": "ferramenta",
    "desc": "Análise estática e estilo em JS/TS.",
    "detalhes": [
      "Evita classes de bugs"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal JS",
    "relacionados": [
      "TypeScript",
      "JavaScript"
    ]
  },
  {
    "nome": "Prettier",
    "tag": "Formatador",
    "categoria": "ferramenta",
    "desc": "Formatação automática de código.",
    "detalhes": [
      "Zero debate de estilo"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal",
    "relacionados": [
      "ESLint",
      "JavaScript"
    ]
  },
  {
    "nome": "SonarQube",
    "tag": "Qualidade de código",
    "categoria": "ferramenta",
    "desc": "Análise estática multi-linguagem.",
    "detalhes": [
      "Debt e vulnerabilidades"
    ],
    "nivel": "Intermediário",
    "mercado": "Enterprise",
    "relacionados": [
      "Java",
      "JavaScript"
    ]
  },
  {
    "nome": "OWASP ZAP",
    "tag": "Segurança",
    "categoria": "ferramenta",
    "desc": "Proxy para achar falhas web.",
    "detalhes": [
      "Uso ético/autorizado"
    ],
    "nivel": "Intermediário",
    "mercado": "AppSec",
    "relacionados": [
      "Python",
      "Bash / Shell"
    ]
  },
  {
    "nome": "Wireshark",
    "tag": "Rede",
    "categoria": "ferramenta",
    "desc": "Análise de pacotes de rede.",
    "detalhes": [
      "TCP/HTTP debugging"
    ],
    "nivel": "Intermediário",
    "mercado": "Rede/segurança",
    "relacionados": [
      "Linux"
    ]
  },
  {
    "nome": "Burp Suite",
    "tag": "Pentest web",
    "categoria": "ferramenta",
    "desc": "Proxy de pentest web profissional.",
    "detalhes": [
      "Só com autorização"
    ],
    "nivel": "Avançado",
    "mercado": "Segurança",
    "relacionados": [
      "OWASP ZAP",
      "Python"
    ]
  },
  {
    "nome": "Make / CMake",
    "tag": "Build C/C++",
    "categoria": "ferramenta",
    "desc": "Sistemas de build nativos.",
    "detalhes": [
      "Padrão em C/C++"
    ],
    "nivel": "Intermediário",
    "mercado": "Sistemas",
    "relacionados": [
      "C",
      "C++"
    ]
  },
  {
    "nome": "Gradle",
    "tag": "Build JVM",
    "categoria": "ferramenta",
    "desc": "Build moderno Android/Java.",
    "detalhes": [
      "Kotlin DSL"
    ],
    "nivel": "Intermediário",
    "mercado": "Android/Java",
    "relacionados": [
      "Groovy",
      "Kotlin"
    ]
  },
  {
    "nome": "Maven",
    "tag": "Build Java",
    "categoria": "ferramenta",
    "desc": "Build e dependências Java clássico.",
    "detalhes": [
      "pom.xml"
    ],
    "nivel": "Intermediário",
    "mercado": "Java",
    "relacionados": [
      "Java"
    ]
  },
  {
    "nome": "npm / pnpm / yarn",
    "tag": "Pacotes JS",
    "categoria": "ferramenta",
    "desc": "Gerenciadores de pacotes JS.",
    "detalhes": [
      "Lockfiles",
      "Workspaces"
    ],
    "nivel": "Iniciante",
    "mercado": "Universal JS",
    "relacionados": [
      "Node.js",
      "JavaScript"
    ]
  },
  {
    "nome": "pip / uv / poetry",
    "tag": "Pacotes Python",
    "categoria": "ferramenta",
    "desc": "Ambientes e deps Python.",
    "detalhes": [
      "venv",
      "lock"
    ],
    "nivel": "Iniciante",
    "mercado": "Python",
    "relacionados": [
      "Python"
    ]
  },
  {
    "nome": "Cargo",
    "tag": "Pacotes Rust",
    "categoria": "ferramenta",
    "desc": "Build e registry crates.io.",
    "detalhes": [
      "Toolchain unificada"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Rust",
    "relacionados": [
      "Rust"
    ]
  },
  {
    "nome": "NuGet",
    "tag": "Pacotes .NET",
    "categoria": "ferramenta",
    "desc": "Pacotes do ecossistema .NET.",
    "detalhes": [
      "dotnet CLI"
    ],
    "nivel": "Iniciante",
    "mercado": ".NET",
    "relacionados": [
      "C#"
    ]
  },
  {
    "nome": "Homebrew",
    "tag": "Pacotes macOS",
    "categoria": "ferramenta",
    "desc": "Pacotes no Mac.",
    "detalhes": [
      "Dev laptop"
    ],
    "nivel": "Iniciante",
    "mercado": "macOS devs",
    "relacionados": [
      "Bash / Shell"
    ]
  },
  {
    "nome": "Chocolatey / winget",
    "tag": "Pacotes Windows",
    "categoria": "ferramenta",
    "desc": "Instalação de tools no Windows.",
    "detalhes": [
      "Automação de setup"
    ],
    "nivel": "Iniciante",
    "mercado": "Windows",
    "relacionados": [
      "PowerShell"
    ]
  },
  {
    "nome": "Zig build",
    "tag": "Build Zig",
    "categoria": "ferramenta",
    "desc": "Sistema de build do Zig.",
    "detalhes": [
      "Cross compilation"
    ],
    "nivel": "Intermediário",
    "mercado": "Zig",
    "relacionados": [
      "Zig",
      "C"
    ]
  },
  {
    "nome": "SDL",
    "tag": "Games low-level",
    "categoria": "ferramenta",
    "desc": "Lib multimídia para games/input.",
    "detalhes": [
      "C/C++"
    ],
    "nivel": "Intermediário",
    "mercado": "Games",
    "relacionados": [
      "C",
      "C++"
    ]
  },
  {
    "nome": "OpenGL / Vulkan",
    "tag": "Gráficos",
    "categoria": "ferramenta",
    "desc": "APIs gráficas de baixo nível.",
    "detalhes": [
      "Vulkan mais moderno"
    ],
    "nivel": "Avançado",
    "mercado": "Games/engine",
    "relacionados": [
      "C++",
      "Rust"
    ]
  },
  {
    "nome": "DirectX",
    "tag": "Gráficos Windows",
    "categoria": "ferramenta",
    "desc": "API gráfica Microsoft.",
    "detalhes": [
      "Games Windows/Xbox"
    ],
    "nivel": "Avançado",
    "mercado": "Games",
    "relacionados": [
      "C++",
      "C#"
    ]
  },
  {
    "nome": "Three.js",
    "tag": "3D web",
    "categoria": "ferramenta",
    "desc": "3D no browser via WebGL.",
    "detalhes": [
      "Cenas e materiais"
    ],
    "nivel": "Intermediário",
    "mercado": "Web criativo",
    "relacionados": [
      "JavaScript",
      "WebAssembly (WASM)"
    ]
  },
  {
    "nome": "Socket.IO",
    "tag": "Realtime web",
    "categoria": "ferramenta",
    "desc": "WebSockets com fallbacks.",
    "detalhes": [
      "Chat e multiplayer leve"
    ],
    "nivel": "Intermediário",
    "mercado": "Web realtime",
    "relacionados": [
      "JavaScript",
      "Node.js"
    ]
  },
  {
    "nome": "WebRTC",
    "tag": "P2P realtime",
    "categoria": "ferramenta",
    "desc": "Áudio/vídeo/dados P2P no browser.",
    "detalhes": [
      "Calls e collaboration"
    ],
    "nivel": "Avançado",
    "mercado": "Comms",
    "relacionados": [
      "JavaScript"
    ]
  },
  {
    "nome": "OAuth 2 / OIDC",
    "tag": "Auth padrão",
    "categoria": "ferramenta",
    "desc": "Delegação de login e tokens.",
    "detalhes": [
      "Auth code + PKCE"
    ],
    "nivel": "Intermediário",
    "mercado": "Universal auth",
    "relacionados": [
      "HTTP",
      "TypeScript"
    ]
  },
  {
    "nome": "JWT",
    "tag": "Tokens",
    "categoria": "dados",
    "desc": "Tokens assinados para auth stateless.",
    "detalhes": [
      "Não guarde segredos no payload"
    ],
    "nivel": "Intermediário",
    "mercado": "APIs",
    "relacionados": [
      "JSON / YAML",
      "TypeScript"
    ]
  },
  {
    "nome": "GraphQL Federation",
    "tag": "APIs compostas",
    "categoria": "ferramenta",
    "desc": "Compor múltiplos serviços GraphQL.",
    "detalhes": [
      "Gateway"
    ],
    "nivel": "Avançado",
    "mercado": "Enterprise APIs",
    "relacionados": [
      "GraphQL",
      "TypeScript"
    ]
  },
  {
    "nome": "tRPC",
    "tag": "APIs tipadas",
    "categoria": "ferramenta",
    "desc": "RPC end-to-end tipado TS.",
    "detalhes": [
      "Monorepos TS"
    ],
    "nivel": "Intermediário",
    "mercado": "TS fullstack",
    "relacionados": [
      "TypeScript",
      "Node.js"
    ]
  },
  {
    "nome": "Prisma",
    "tag": "ORM TypeScript",
    "categoria": "ferramenta",
    "desc": "ORM moderno para Node/TS.",
    "detalhes": [
      "Schema declarativo"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Node",
    "relacionados": [
      "TypeScript",
      "SQL",
      "PostgreSQL"
    ]
  },
  {
    "nome": "Hibernate / JPA",
    "tag": "ORM Java",
    "categoria": "ferramenta",
    "desc": "ORM padrão JVM.",
    "detalhes": [
      "Entity mapping"
    ],
    "nivel": "Intermediário",
    "mercado": "Java enterprise",
    "relacionados": [
      "Java",
      "SQL"
    ]
  },
  {
    "nome": "Entity Framework",
    "tag": "ORM .NET",
    "categoria": "ferramenta",
    "desc": "ORM da Microsoft.",
    "detalhes": [
      "LINQ"
    ],
    "nivel": "Intermediário",
    "mercado": ".NET",
    "relacionados": [
      "C#",
      "SQL"
    ]
  },
  {
    "nome": "SQLAlchemy",
    "tag": "ORM Python",
    "categoria": "ferramenta",
    "desc": "ORM poderoso Python.",
    "detalhes": [
      "Core + ORM"
    ],
    "nivel": "Intermediário",
    "mercado": "Python",
    "relacionados": [
      "Python",
      "SQL"
    ]
  },
  {
    "nome": "Celery",
    "tag": "Filas Python",
    "categoria": "ferramenta",
    "desc": "Workers assíncronos.",
    "detalhes": [
      "Redis/Rabbit broker"
    ],
    "nivel": "Intermediário",
    "mercado": "Python backend",
    "relacionados": [
      "Python",
      "Redis",
      "RabbitMQ"
    ]
  },
  {
    "nome": "Sidekiq",
    "tag": "Filas Ruby",
    "categoria": "ferramenta",
    "desc": "Background jobs no Rails.",
    "detalhes": [
      "Redis"
    ],
    "nivel": "Intermediário",
    "mercado": "Rails",
    "relacionados": [
      "Ruby",
      "Redis"
    ]
  },
  {
    "nome": "BullMQ",
    "tag": "Filas Node",
    "categoria": "ferramenta",
    "desc": "Filas Redis para Node.",
    "detalhes": [
      "Repeatable jobs"
    ],
    "nivel": "Intermediário",
    "mercado": "Node",
    "relacionados": [
      "Node.js",
      "Redis"
    ]
  }
];

const DP_AREAS = [
  {
    "nome": "Desenvolvimento Web Fullstack",
    "desc": "Cliente, servidor e dados na web.",
    "langs": [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Node.js"
    ],
    "detalhes": [
      "Front + API + banco",
      "Auth e deploy",
      "Projeto: CRUD completo publicado",
      "Armadilha: só tutorial de framework"
    ],
    "dica": "GitHub com README claro vale mais que 10 cursos pela metade."
  },
  {
    "nome": "Frontend / UI Engineering",
    "desc": "Interfaces, a11y e performance no cliente.",
    "langs": [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React"
    ],
    "detalhes": [
      "Design system",
      "Core Web Vitals",
      "Acessibilidade",
      "Projeto: dashboard responsivo"
    ],
    "dica": "CSS profundo > depender só de lib."
  },
  {
    "nome": "Backend / APIs",
    "desc": "Regras de negócio, integrações e dados.",
    "langs": [
      "Java",
      "Go (Golang)",
      "Python",
      "C#",
      "SQL",
      "TypeScript"
    ],
    "detalhes": [
      "Modelagem e migrations",
      "Auth, cache, filas",
      "Observabilidade",
      "Projeto: API versionada com testes"
    ],
    "dica": "SQL avançado é diferencial."
  },
  {
    "nome": "Engenharia de Software (visão geral)",
    "desc": "Ciclo de vida: requisitos, design, código, qualidade.",
    "langs": [
      "Git",
      "SQL",
      "JavaScript",
      "Python"
    ],
    "detalhes": [
      "Arquitetura em camadas",
      "Code review",
      "Débito técnico consciente"
    ],
    "dica": "Escreva RFCs curtas."
  },
  {
    "nome": "Mobile Android",
    "desc": "Apps nativos no ecossistema Google.",
    "langs": [
      "Kotlin",
      "Java",
      "SQL"
    ],
    "detalhes": [
      "Android Studio",
      "Play Store",
      "Offline-first"
    ],
    "dica": "Kotlin first."
  },
  {
    "nome": "Mobile iOS",
    "desc": "Apps no ecossistema Apple.",
    "langs": [
      "Swift",
      "Objective-C"
    ],
    "detalhes": [
      "Xcode",
      "SwiftUI",
      "App Store review"
    ],
    "dica": "SwiftUI + networking sólido."
  },
  {
    "nome": "Mobile Multiplataforma",
    "desc": "Um código, várias plataformas.",
    "langs": [
      "Dart",
      "Flutter",
      "TypeScript",
      "React Native"
    ],
    "detalhes": [
      "Trade-off vs nativo",
      "Stores ainda exigem contas"
    ],
    "dica": "Escolha Flutter OU RN e aprofunde."
  },
  {
    "nome": "Game Development (Unity)",
    "desc": "Jogos com Unity + C#.",
    "langs": [
      "C#",
      "Unity (C#)"
    ],
    "detalhes": [
      "Game loop",
      "Física e UI",
      "Publique jogo pequeno"
    ],
    "dica": "Termine jogos curtos."
  },
  {
    "nome": "Game Development (Godot)",
    "desc": "Jogos open-source com GDScript/C#.",
    "langs": [
      "GDScript",
      "C#",
      "Godot"
    ],
    "detalhes": [
      "2D excelente",
      "Export multiplataforma"
    ],
    "dica": "Ideal indie sem taxa de engine."
  },
  {
    "nome": "Game Development (Unreal)",
    "desc": "AAA e gráficos avançados.",
    "langs": [
      "C++",
      "Unreal Blueprints / C++"
    ],
    "detalhes": [
      "Blueprints + C++",
      "Multiplayer"
    ],
    "dica": "Curva alta — foque um sistema por vez."
  },
  {
    "nome": "Ciência de Dados",
    "desc": "Explorar, modelar e comunicar dados.",
    "langs": [
      "Python",
      "SQL",
      "R",
      "Pandas"
    ],
    "detalhes": [
      "Estatística básica",
      "Visualização",
      "Storytelling"
    ],
    "dica": "SQL + pandas antes de deep learning."
  },
  {
    "nome": "Engenharia de Dados",
    "desc": "Pipelines, warehouses e qualidade.",
    "langs": [
      "SQL",
      "Python",
      "Spark",
      "Airflow",
      "dbt"
    ],
    "detalhes": [
      "ETL/ELT",
      "Modelagem dimensional",
      "Observabilidade de dados"
    ],
    "dica": "Confiabilidade > modelo fancy."
  },
  {
    "nome": "Analytics / BI",
    "desc": "Indicadores, dashboards e decisões.",
    "langs": [
      "SQL",
      "Power BI",
      "Tableau",
      "DAX",
      "Excel / Google Sheets"
    ],
    "detalhes": [
      "Métricas de negócio",
      "Camada semântica",
      "Governança"
    ],
    "dica": "Defina a métrica antes do gráfico."
  },
  {
    "nome": "Machine Learning Engineering",
    "desc": "Modelos em produção.",
    "langs": [
      "Python",
      "scikit-learn",
      "PyTorch",
      "MLFlow"
    ],
    "detalhes": [
      "Feature store mental model",
      "Monitoring de drift",
      "APIs de inferência"
    ],
    "dica": "Baseline simples primeiro."
  },
  {
    "nome": "Deep Learning / IA Generativa",
    "desc": "Redes neurais e LLMs.",
    "langs": [
      "Python",
      "PyTorch",
      "Hugging Face",
      "LangChain / LlamaIndex"
    ],
    "detalhes": [
      "RAG e avaliação",
      "Custo de inferência",
      "Ética e vieses"
    ],
    "dica": "Não pule fundamentos de ML."
  },
  {
    "nome": "MLOps",
    "desc": "Ciclo de vida de modelos.",
    "langs": [
      "Python",
      "Docker",
      "Kubernetes",
      "MLFlow"
    ],
    "detalhes": [
      "CI de dados/modelos",
      "Registry",
      "Rollback"
    ],
    "dica": "Trate modelo como software."
  },
  {
    "nome": "DevOps",
    "desc": "CI/CD, automação e colaboração dev-ops.",
    "langs": [
      "Bash / Shell",
      "Docker",
      "GitHub Actions",
      "Terraform (HCL)"
    ],
    "detalhes": [
      "Pipelines",
      "IaC",
      "Cultura de feedback"
    ],
    "dica": "Automatize a terceira repetição."
  },
  {
    "nome": "SRE (Site Reliability)",
    "desc": "Confiabilidade com engenharia.",
    "langs": [
      "Go (Golang)",
      "Python",
      "Prometheus",
      "Grafana"
    ],
    "detalhes": [
      "SLIs/SLOs",
      "Error budgets",
      "Postmortems"
    ],
    "dica": "Métrica de dor do usuário > CPU só."
  },
  {
    "nome": "Cloud Architect (visão)",
    "desc": "Desenhar sistemas na nuvem.",
    "langs": [
      "AWS",
      "GCP",
      "Azure",
      "Terraform (HCL)"
    ],
    "detalhes": [
      "Custo, segurança, HA",
      "Well-Architected"
    ],
    "dica": "Comece por uma cloud só."
  },
  {
    "nome": "Cibersegurança Ofensiva",
    "desc": "Pentest e red team (com autorização).",
    "langs": [
      "Python",
      "Bash / Shell",
      "Burp Suite",
      "OWASP ZAP"
    ],
    "detalhes": [
      "OWASP Top 10",
      "Labs legais",
      "Relatórios"
    ],
    "dica": "Sem autorização é crime."
  },
  {
    "nome": "Cibersegurança Defensiva",
    "desc": "Blue team, SOC, detecção.",
    "langs": [
      "Python",
      "SQL",
      "Elasticsearch",
      "Linux"
    ],
    "detalhes": [
      "Logs",
      "SIEM mental model",
      "Resposta a incidente"
    ],
    "dica": "Fundamentos de rede e SO."
  },
  {
    "nome": "AppSec",
    "desc": "Segurança no ciclo de desenvolvimento.",
    "langs": [
      "OWASP ZAP",
      "SonarQube",
      "JavaScript",
      "Python"
    ],
    "detalhes": [
      "Threat modeling",
      "SAST/DAST",
      "Secure defaults"
    ],
    "dica": "Shift-left de verdade."
  },
  {
    "nome": "QA Manual",
    "desc": "Exploração e casos de teste.",
    "langs": [
      "Jira",
      "Markdown",
      "SQL"
    ],
    "detalhes": [
      "Casos de borda",
      "Regressão",
      "Report claro"
    ],
    "dica": "Reproduzir > opinião."
  },
  {
    "nome": "QA Automation",
    "desc": "Testes automatizados.",
    "langs": [
      "Playwright",
      "Cypress",
      "Selenium",
      "TypeScript",
      "Python"
    ],
    "detalhes": [
      "Pirâmide de testes",
      "E2E estável",
      "CI"
    ],
    "dica": "Menos E2E frágeis, mais unit/API."
  },
  {
    "nome": "Engenharia de Plataforma",
    "desc": "Ferramentas internas para devs.",
    "langs": [
      "Kubernetes",
      "Go (Golang)",
      "TypeScript",
      "Terraform (HCL)"
    ],
    "detalhes": [
      "Developer experience",
      "Golden paths"
    ],
    "dica": "Reduza toil do time."
  },
  {
    "nome": "Arquitetura de Software",
    "desc": "Trade-offs e limites de sistemas.",
    "langs": [
      "SQL",
      "Java",
      "Go (Golang)",
      "TypeScript"
    ],
    "detalhes": [
      "C4 model",
      "Event vs request",
      "Consistência"
    ],
    "dica": "Documente decisões (ADR)."
  },
  {
    "nome": "Integração de Sistemas / Middleware",
    "desc": "Conectar legados e serviços.",
    "langs": [
      "Java",
      "C#",
      "Kafka",
      "RabbitMQ"
    ],
    "detalhes": [
      "Filas",
      "Transformação",
      "Idempotência"
    ],
    "dica": "Contratos explícitos."
  },
  {
    "nome": "ERP / Sistemas Corporativos",
    "desc": "SAP e afins — processos de negócio.",
    "langs": [
      "ABAP (conceito)",
      "SQL",
      "Java"
    ],
    "detalhes": [
      "Processos financeiros/logísticos",
      "Customização vs padrão"
    ],
    "dica": "Negócio + sistema, não só tela."
  },
  {
    "nome": "Mainframe & Legado",
    "desc": "COBOL e sistemas centrais.",
    "langs": [
      "COBOL",
      "SQL",
      "Java"
    ],
    "detalhes": [
      "Batch",
      "Alta criticidade",
      "Modernização gradual"
    ],
    "dica": "Pagamento alto, stack antiga."
  },
  {
    "nome": "Embarcados / Firmware",
    "desc": "Software perto do hardware.",
    "langs": [
      "C",
      "C++",
      "Rust",
      "Assembly"
    ],
    "detalhes": [
      "RTOS",
      "Consumo",
      "Periféricos"
    ],
    "dica": "Comece com ESP32 + C."
  },
  {
    "nome": "IoT",
    "desc": "Dispositivos conectados.",
    "langs": [
      "C",
      "Python",
      "MQTT (conceito)",
      "Linux"
    ],
    "detalhes": [
      "Firmware + cloud",
      "Segurança de device"
    ],
    "dica": "Protótipo ponta a ponta simples."
  },
  {
    "nome": "Redes e Infraestrutura",
    "desc": "Conectividade e serviços de rede.",
    "langs": [
      "Linux",
      "Bash / Shell",
      "Wireshark"
    ],
    "detalhes": [
      "TCP/IP",
      "DNS",
      "Firewall"
    ],
    "dica": "Laboratório caseiro ajuda."
  },
  {
    "nome": "Administração de Sistemas",
    "desc": "Servidores e serviços.",
    "langs": [
      "Linux",
      "Bash / Shell",
      "Ansible",
      "Nginx"
    ],
    "detalhes": [
      "Hardening",
      "Backup",
      "Monitoramento"
    ],
    "dica": "Infrastructure as code cedo."
  },
  {
    "nome": "Banco de Dados (DBA)",
    "desc": "Performance, backup e disponibilidade.",
    "langs": [
      "SQL",
      "PostgreSQL",
      "MySQL / MariaDB"
    ],
    "detalhes": [
      "Índices",
      "Vacuum/maintenance",
      "HA"
    ],
    "dica": "Entenda planos de execução."
  },
  {
    "nome": "Data Analytics Product",
    "desc": "Métricas de produto digital.",
    "langs": [
      "SQL",
      "Python",
      "Metabase",
      "Looker / Looker Studio"
    ],
    "detalhes": [
      "Funis",
      "Experimentos",
      "North star"
    ],
    "dica": "Métrica acionável > vaidade."
  },
  {
    "nome": "Business Intelligence Corporativo",
    "desc": "Governança e self-service BI.",
    "langs": [
      "Power BI",
      "Tableau",
      "SQL",
      "DAX"
    ],
    "detalhes": [
      "Camada semântica",
      "Row-level security"
    ],
    "dica": "Negócio define KPI."
  },
  {
    "nome": "Engenharia Frontend de Design Systems",
    "desc": "Componentes e tokens reutilizáveis.",
    "langs": [
      "TypeScript",
      "React",
      "CSS",
      "Figma"
    ],
    "detalhes": [
      "Acessibilidade",
      "Versionamento de lib"
    ],
    "dica": "Documentação é feature."
  },
  {
    "nome": "Web Performance",
    "desc": "Velocidade percebida e real.",
    "langs": [
      "JavaScript",
      "CSS",
      "WebAssembly (WASM)"
    ],
    "detalhes": [
      "LCP/INP",
      "Caching",
      "Bundles"
    ],
    "dica": "Meça no device lento."
  },
  {
    "nome": "Acessibilidade Digital (a11y)",
    "desc": "Produtos usáveis por todos.",
    "langs": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "detalhes": [
      "WCAG",
      "Teclado e leitores",
      "Contraste"
    ],
    "dica": "a11y desde o primeiro PR."
  },
  {
    "nome": "Tech Writing",
    "desc": "Documentação técnica clara.",
    "langs": [
      "Markdown",
      "Git"
    ],
    "detalhes": [
      "Tutoriais",
      "ADRs",
      "API docs"
    ],
    "dica": "Escreva para o você do futuro."
  },
  {
    "nome": "Developer Relations / Advocacy",
    "desc": "Comunidade e conteúdo técnico.",
    "langs": [
      "Markdown",
      "JavaScript",
      "Python"
    ],
    "detalhes": [
      "Talks",
      "Demos",
      "Feedback de users"
    ],
    "dica": "Credibilidade vem de código real."
  },
  {
    "nome": "Product Management técnico",
    "desc": "Ponte produto-engenharia.",
    "langs": [
      "SQL",
      "Markdown",
      "Jira"
    ],
    "detalhes": [
      "Discovery",
      "Priorização",
      "Trade-offs"
    ],
    "dica": "Fale a língua de dados e de pessoas."
  },
  {
    "nome": "Engineering Management",
    "desc": "Pessoas, entrega e sistema.",
    "langs": [
      "Markdown",
      "Jira",
      "Git"
    ],
    "detalhes": [
      "1:1",
      "Hiring",
      "Processo leve"
    ],
    "dica": "Contexto > controle."
  },
  {
    "nome": "Compliance & Privacy (tech)",
    "desc": "LGPD, auditoria, retenção.",
    "langs": [
      "SQL",
      "Python"
    ],
    "detalhes": [
      "Minimização de dados",
      "Trilhas de auditoria"
    ],
    "dica": "Privacidade por design."
  },
  {
    "nome": "FinOps",
    "desc": "Custo de nuvem sob controle.",
    "langs": [
      "SQL",
      "AWS",
      "GCP",
      "Azure"
    ],
    "detalhes": [
      "Tags",
      "Budgets",
      "Rightsizing"
    ],
    "dica": "Custo é métrica de engenharia."
  },
  {
    "nome": "Blockchain / Web3 Engineering",
    "desc": "Contratos e dApps.",
    "langs": [
      "Solidity",
      "JavaScript",
      "Rust"
    ],
    "detalhes": [
      "Carteiras",
      "Auditoria",
      "Testes"
    ],
    "dica": "Segurança primeiro."
  },
  {
    "nome": "Computer Vision",
    "desc": "Imagens e vídeo.",
    "langs": [
      "Python",
      "OpenCV",
      "PyTorch"
    ],
    "detalhes": [
      "Datasets",
      "Métricas",
      "Deploy edge/cloud"
    ],
    "dica": "Dados rotulados são o gargalo."
  },
  {
    "nome": "NLP / Language AI",
    "desc": "Texto e linguagem natural.",
    "langs": [
      "Python",
      "Hugging Face",
      "PyTorch"
    ],
    "detalhes": [
      "Tokenização",
      "Avaliação humana",
      "RAG"
    ],
    "dica": "Gold set de avaliação cedo."
  },
  {
    "nome": "Robotics Software",
    "desc": "Percepção e controle.",
    "langs": [
      "C++",
      "Python",
      "Linux"
    ],
    "detalhes": [
      "ROS (conceito)",
      "Simulação"
    ],
    "dica": "Simulador antes de hardware caro."
  },
  {
    "nome": "AR/VR Development",
    "desc": "Experiências imersivas.",
    "langs": [
      "C#",
      "Unity (C#)",
      "C++"
    ],
    "detalhes": [
      "UX de movimento",
      "Performance GPU"
    ],
    "dica": "Conforto do usuário é requisito."
  },
  {
    "nome": "Audio Programming",
    "desc": "DSP e engines de áudio.",
    "langs": [
      "C++",
      "Rust",
      "C"
    ],
    "detalhes": [
      "Latência",
      "Buffers"
    ],
    "dica": "Ouça o bug."
  },
  {
    "nome": "Quantitative / Fintech Engineering",
    "desc": "Sistemas financeiros de baixa latência.",
    "langs": [
      "C++",
      "Java",
      "Python",
      "SQL"
    ],
    "detalhes": [
      "Precisão numérica",
      "Auditoria"
    ],
    "dica": "Testes e conformidade."
  },
  {
    "nome": "Suporte técnico N2/N3 (tech)",
    "desc": "Diagnóstico profundo de produtos.",
    "langs": [
      "SQL",
      "Linux",
      "Bash / Shell"
    ],
    "detalhes": [
      "Logs",
      "Reprodução",
      "Escalation"
    ],
    "dica": "Notas de caso salvam o time."
  },
  {
    "nome": "Customer Success técnico",
    "desc": "Adoção de produto B2B.",
    "langs": [
      "SQL",
      "Markdown"
    ],
    "detalhes": [
      "Onboarding",
      "Health scores"
    ],
    "dica": "Ouça o workflow real do cliente."
  },
  {
    "nome": "Solutions Architecture",
    "desc": "Desenhar soluções sob requisito de cliente.",
    "langs": [
      "AWS",
      "Azure",
      "SQL",
      "Java"
    ],
    "detalhes": [
      "PoCs",
      "Trade-offs comerciais"
    ],
    "dica": "Documente limites."
  }
];

const DP_CONCEITOS_LOGICA = [
  {
    "nome": "Sequência",
    "desc": "Passos em ordem definida.",
    "detalhes": [
      "Programas seguem ordem salvo concorrência.",
      "Erro comum: usar valor antes de atribuir.",
      "Exercício: algoritmo cotidiano numerado.",
      "Leia o fluxo completo antes de caçar bug."
    ]
  },
  {
    "nome": "Decisão (if/else)",
    "desc": "Escolher caminho por condição.",
    "detalhes": [
      "Booleanos e comparações.",
      "Early return reduz aninhamento.",
      "Tabela verdade para lógica complexa.",
      "Exercício: faixas de nota sem duplicar código."
    ]
  },
  {
    "nome": "Laços (for/while)",
    "desc": "Repetição controlada.",
    "detalhes": [
      "for = intervalo conhecido; while = condição.",
      "Evite loop infinito.",
      "map/filter quando expressam melhor a intenção.",
      "Exercício: soma e máximo de lista."
    ]
  },
  {
    "nome": "Variáveis e tipos",
    "desc": "Nomes para valores com regras.",
    "detalhes": [
      "Tipo limita operações.",
      "Dinâmico vs estático.",
      "Nomes claros.",
      "const/final quando não muda."
    ]
  },
  {
    "nome": "Funções",
    "desc": "Blocos reutilizáveis.",
    "detalhes": [
      "Uma responsabilidade.",
      "Parâmetros e retorno explícitos.",
      "Cuidado com efeitos colaterais.",
      "Exercício: extrair cálculo repetido."
    ]
  },
  {
    "nome": "Vetores e listas",
    "desc": "Coleção ordenada de elementos.",
    "detalhes": [
      "Índice a partir de 0 na maioria das langs.",
      "Custo de inserir no meio.",
      "Exercício: inverter lista."
    ]
  },
  {
    "nome": "Mapas / dicionários",
    "desc": "Pares chave → valor.",
    "detalhes": [
      "Busca eficiente por chave.",
      "Contagem de frequências.",
      "Exercício: anagramas."
    ]
  },
  {
    "nome": "Conjuntos",
    "desc": "Coleção sem duplicatas.",
    "detalhes": [
      "União, interseção.",
      "Teste de pertinência.",
      "Exercício: remover duplicados."
    ]
  },
  {
    "nome": "Pilha (stack)",
    "desc": "LIFO — último a entrar, primeiro a sair.",
    "detalhes": [
      "Undo, parse, chamada de função.",
      "push/pop.",
      "Exercício: validar parênteses."
    ]
  },
  {
    "nome": "Fila (queue)",
    "desc": "FIFO — primeiro a entrar, primeiro a sair.",
    "detalhes": [
      "Print jobs, BFS.",
      "enqueue/dequeue.",
      "Exercício: simular fila de banco."
    ]
  },
  {
    "nome": "Recursão",
    "desc": "Função que se chama com caso base.",
    "detalhes": [
      "Caso base obrigatório.",
      "Pilha de chamadas.",
      "Versão iterativa muitas vezes existe.",
      "Exercício: fatorial e Fibonacci."
    ]
  },
  {
    "nome": "Busca linear",
    "desc": "Percorrer até achar.",
    "detalhes": [
      "O(n).",
      "Simples e suficiente em listas pequenas.",
      "Exercício: achar índice de um valor."
    ]
  },
  {
    "nome": "Busca binária",
    "desc": "Dividir lista ordenada ao meio.",
    "detalhes": [
      "O(log n).",
      "Pré-requisito: ordenado.",
      "Off-by-one é clássico.",
      "Exercício: implementar e testar bordas."
    ]
  },
  {
    "nome": "Ordenação — ideia",
    "desc": "Reorganizar por critério.",
    "detalhes": [
      "Entenda custo antes de memorizar código.",
      "Biblioteca padrão costuma bastar.",
      "Estável vs instável.",
      "Exercício: ordenar objetos por campo."
    ]
  },
  {
    "nome": "Complexidade Big-O",
    "desc": "Como cresce tempo/memória com N.",
    "detalhes": [
      "O(1), O(n), O(n log n), O(n²).",
      "Não otimize cedo.",
      "Índices de banco são Big-O aplicado."
    ]
  },
  {
    "nome": "Depuração metódica",
    "desc": "Achar causa com processo.",
    "detalhes": [
      "Reproduzir.",
      "Ler erro completo.",
      "Isolar.",
      "Uma mudança por vez."
    ]
  },
  {
    "nome": "Pseudocódigo",
    "desc": "Descrever lógica sem sintaxe rígida.",
    "detalhes": [
      "Planeje antes de digitar.",
      "Útil em entrevistas.",
      "Exercício: pseudocódigo de login."
    ]
  },
  {
    "nome": "Entrada e saída",
    "desc": "Ler dados e mostrar resultados.",
    "detalhes": [
      "Validar entrada.",
      "Mensagens claras de erro.",
      "Exercício: calculadora no terminal."
    ]
  },
  {
    "nome": "Booleanos e operadores",
    "desc": "E, OU, NÃO e curto-circuito.",
    "detalhes": [
      "Precedência.",
      "Evite negações duplas confusas.",
      "Exercício: permissões de acesso."
    ]
  },
  {
    "nome": "Modularização",
    "desc": "Dividir em partes coesas.",
    "detalhes": [
      "Arquivos e módulos.",
      "API interna clara.",
      "Exercício: separar I/O da regra."
    ]
  },
  {
    "nome": "Testes de mesa",
    "desc": "Simular variáveis no papel.",
    "detalhes": [
      "Tabela de estados.",
      "Pega off-by-one.",
      "Exercício: laço com contador."
    ]
  },
  {
    "nome": "Invariantes",
    "desc": "O que permanece verdadeiro no laço.",
    "detalhes": [
      "Ajuda a provar correção.",
      "Útil em algoritmos."
    ]
  },
  {
    "nome": "Idempotência (ideia)",
    "desc": "Repetir não muda o resultado final.",
    "detalhes": [
      "Importante em APIs e retries.",
      "Exemplos: PUT vs side effects."
    ]
  },
  {
    "nome": "Estado e efeitos",
    "desc": "O que muda ao longo do tempo.",
    "detalhes": [
      "Estado local vs global.",
      "UI é máquina de estados.",
      "Exercício: semáforo simples."
    ]
  },
  {
    "nome": "Padrão produce/consume",
    "desc": "Um gera, outro processa.",
    "detalhes": [
      "Filas.",
      "Backpressure (ideia).",
      "Base de sistemas reais."
    ]
  }
];

const DP_TRILHAS = [
  {
    "nome": "Iniciante absoluto",
    "resumo": "Lógica + primeira linguagem + Git.",
    "detalhes": [
      "Semanas 1-2: sequência, if, while, funções",
      "Semanas 3-5: Python ou JS diário",
      "Semana 6: Git + GitHub",
      "Projeto pessoal mínimo",
      "Saída: corrige erros sem travar dias"
    ]
  },
  {
    "nome": "Web Fullstack",
    "resumo": "HTML/CSS/JS → TS → API → SQL → deploy.",
    "detalhes": [
      "Fundamentos sem framework",
      "TypeScript",
      "React ou Vue",
      "API Node ou FastAPI",
      "PostgreSQL",
      "Auth + CRUD",
      "Deploy Render/Railway/Vercel"
    ]
  },
  {
    "nome": "Unity GameDev",
    "resumo": "C# → Unity → jogo 2D publicado.",
    "detalhes": [
      "C# básico",
      "Editor Unity",
      "Movimento, colisão, UI",
      "Build itch.io",
      "Evite MMO como primeiro projeto"
    ]
  },
  {
    "nome": "Godot Indie",
    "resumo": "GDScript e jogos 2D.",
    "detalhes": [
      "Nodes e cenas",
      "Input e física",
      "Export",
      "Um jogo completo curto"
    ]
  },
  {
    "nome": "Dados & BI",
    "resumo": "SQL → modelagem → dashboard.",
    "detalhes": [
      "SQL até window functions",
      "ETL leve",
      "Power BI ou Metabase",
      "Métrica de negócio definida"
    ]
  },
  {
    "nome": "Engenharia de Dados",
    "resumo": "Pipelines confiáveis.",
    "detalhes": [
      "SQL avançado",
      "Python",
      "Airflow/dbt",
      "Qualidade (tests)",
      "Documentação de dataset"
    ]
  },
  {
    "nome": "ML aplicado",
    "resumo": "Do baseline ao deploy simples.",
    "detalhes": [
      "Pandas + scikit-learn",
      "Validação",
      "API de inferência",
      "Monitoramento mínimo"
    ]
  },
  {
    "nome": "Mobile Flutter",
    "resumo": "Dart + Flutter até store interna.",
    "detalhes": [
      "Widgets",
      "Estado",
      "HTTP",
      "Build Android/iOS"
    ]
  },
  {
    "nome": "Mobile Android Kotlin",
    "resumo": "Apps nativos Android.",
    "detalhes": [
      "Kotlin",
      "Jetpack",
      "Room/SQL",
      "Play internal track"
    ]
  },
  {
    "nome": "DevOps iniciante",
    "resumo": "Git → CI → Docker → deploy.",
    "detalhes": [
      "GitHub Actions",
      "Dockerfile",
      "Variáveis de ambiente",
      "Observabilidade básica"
    ]
  },
  {
    "nome": "Cloud AWS prática",
    "resumo": "Conta free tier com arquitetura simples.",
    "detalhes": [
      "IAM mínimo",
      "S3 + compute + DB",
      "Custo e alarmes",
      "IaC com Terraform depois"
    ]
  },
  {
    "nome": "AppSec para devs",
    "resumo": "OWASP no dia a dia.",
    "detalhes": [
      "Top 10 com exemplos",
      "Secrets management",
      "Headers e auth",
      "Lab local deliberadamente vulnerável"
    ]
  },
  {
    "nome": "QA Automation web",
    "resumo": "Pirâmide + Playwright.",
    "detalhes": [
      "Unit no front/back",
      "API tests",
      "E2E estável",
      "CI"
    ]
  },
  {
    "nome": "Sistemas com C",
    "resumo": "Memória e baixo nível.",
    "detalhes": [
      "Ponteiros",
      "Makefile",
      "Valgrind (conceito)",
      "Projeto CLI em C"
    ]
  },
  {
    "nome": "Rust systems",
    "resumo": "Ownership na prática.",
    "detalhes": [
      "Livro oficial",
      "CLI útil",
      "WASM opcional",
      "Exercícios de compilador feliz"
    ]
  },
  {
    "nome": "Frontend avançado",
    "resumo": "Performance e design system.",
    "detalhes": [
      "Code splitting",
      "a11y",
      "Tokens",
      "Lib de componentes"
    ]
  },
  {
    "nome": "Backend Java Spring",
    "resumo": "API enterprise.",
    "detalhes": [
      "Spring Boot",
      "JPA",
      "Security",
      "Testes"
    ]
  },
  {
    "nome": "Backend .NET",
    "resumo": "API e cloud Microsoft.",
    "detalhes": [
      "ASP.NET Core",
      "EF Core",
      "Azure basics"
    ]
  },
  {
    "nome": "Realtime & chat",
    "resumo": "WebSockets na prática.",
    "detalhes": [
      "Socket.IO ou WS puro",
      "Presença",
      "Escala com filas (ideia)"
    ]
  },
  {
    "nome": "Carreira e portfólio",
    "resumo": "Ser contratável.",
    "detalhes": [
      "3 projetos no GitHub",
      "README forte",
      "LinkedIn alinhado",
      "Mock interview técnica"
    ]
  }
];

const DP_FERRAMENTAS = [
  {
    "nome": "ChatGPT",
    "cat": "IA",
    "desc": "Assistente generativo OpenAI.",
    "detalhes": [
      "Tutor e rascunho",
      "Valide código",
      "Nunca cole segredos"
    ]
  },
  {
    "nome": "Claude",
    "cat": "IA",
    "desc": "Modelo Anthropic para texto longo.",
    "detalhes": [
      "Revisão de PRs/docs",
      "Verifique fatos"
    ]
  },
  {
    "nome": "Gemini",
    "cat": "IA",
    "desc": "Modelo Google multimodal.",
    "detalhes": [
      "Integração Google",
      "Valide saídas"
    ]
  },
  {
    "nome": "GitHub Copilot",
    "cat": "IA",
    "desc": "Autocompletar no editor.",
    "detalhes": [
      "Acelera boilerplate",
      "Revise tudo"
    ]
  },
  {
    "nome": "Cursor",
    "cat": "IA",
    "desc": "Editor centrado em IA.",
    "detalhes": [
      "Refactors grandes com cautela"
    ]
  },
  {
    "nome": "Perplexity",
    "cat": "IA",
    "desc": "Busca com citações.",
    "detalhes": [
      "Ótimo para pesquisa",
      "Abra a fonte"
    ]
  },
  {
    "nome": "Mistral / open models",
    "cat": "IA",
    "desc": "Ecossistema de modelos abertos.",
    "detalhes": [
      "Opções locais e API",
      "Compare qualidade/custo"
    ]
  },
  {
    "nome": "Ollama",
    "cat": "IA",
    "desc": "LLMs locais.",
    "detalhes": [
      "Privacidade",
      "Hardware importa"
    ]
  },
  {
    "nome": "Power BI",
    "cat": "BI",
    "desc": "Dashboards e DAX (Microsoft).",
    "detalhes": [
      "Power Query",
      "Gateway",
      "RLS"
    ]
  },
  {
    "nome": "Tableau",
    "cat": "BI",
    "desc": "Visualização analítica.",
    "detalhes": [
      "Storytelling visual",
      "Calc fields"
    ]
  },
  {
    "nome": "Looker Studio",
    "cat": "BI",
    "desc": "Relatórios Google.",
    "detalhes": [
      "Conectores",
      "Compartilhamento fácil"
    ]
  },
  {
    "nome": "Metabase",
    "cat": "BI",
    "desc": "BI open-source simples.",
    "detalhes": [
      "Perguntas SQL",
      "Bom para startups"
    ]
  },
  {
    "nome": "Apache Superset",
    "cat": "BI",
    "desc": "BI open-source avançado.",
    "detalhes": [
      "Exploração SQL rica"
    ]
  },
  {
    "nome": "Qlik Sense",
    "cat": "BI",
    "desc": "Modelo associativo.",
    "detalhes": [
      "Descoberta de relações"
    ]
  },
  {
    "nome": "Excel / Google Sheets",
    "cat": "BI",
    "desc": "Planilhas onipresentes.",
    "detalhes": [
      "Base de analistas",
      "Cuidado com versão da verdade"
    ]
  },
  {
    "nome": "Git & GitHub",
    "cat": "Versionamento",
    "desc": "Histórico e colaboração.",
    "detalhes": [
      "PR e review",
      "Actions"
    ]
  },
  {
    "nome": "GitLab",
    "cat": "Versionamento",
    "desc": "Git + CI integrados.",
    "detalhes": [
      "Pipelines"
    ]
  },
  {
    "nome": "Docker",
    "cat": "DevOps",
    "desc": "Containers.",
    "detalhes": [
      "Mesmo ambiente",
      "Compose"
    ]
  },
  {
    "nome": "Kubernetes",
    "cat": "DevOps",
    "desc": "Orquestração.",
    "detalhes": [
      "Conceitos antes de produção"
    ]
  },
  {
    "nome": "Postman",
    "cat": "APIs",
    "desc": "Testes manuais HTTP.",
    "detalhes": [
      "Coleções por ambiente"
    ]
  },
  {
    "nome": "Insomnia",
    "cat": "APIs",
    "desc": "Cliente HTTP.",
    "detalhes": [
      "GraphQL"
    ]
  },
  {
    "nome": "Figma",
    "cat": "Design",
    "desc": "UI colaborativa.",
    "detalhes": [
      "Handoff"
    ]
  },
  {
    "nome": "VS Code",
    "cat": "Editor",
    "desc": "Editor extensível.",
    "detalhes": [
      "Debug e remote"
    ]
  },
  {
    "nome": "Linux terminal",
    "cat": "SO",
    "desc": "Ferramenta diária de servidor.",
    "detalhes": [
      "SSH, permissões"
    ]
  },
  {
    "nome": "PostgreSQL",
    "cat": "Dados",
    "desc": "Banco relacional robusto.",
    "detalhes": [
      "Default excelente"
    ]
  },
  {
    "nome": "Unity Hub",
    "cat": "Games",
    "desc": "Gerencia editores Unity.",
    "detalhes": [
      "Versione o editor do projeto"
    ]
  },
  {
    "nome": "Godot",
    "cat": "Games",
    "desc": "Engine open-source.",
    "detalhes": [
      "GDScript"
    ]
  },
  {
    "nome": "Grafana",
    "cat": "Observabilidade",
    "desc": "Dashboards de métricas.",
    "detalhes": [
      "Prometheus/Loki"
    ]
  },
  {
    "nome": "Notion / Obsidian",
    "cat": "Notas",
    "desc": "Base de conhecimento pessoal.",
    "detalhes": [
      "Anotação ativa"
    ]
  },
  {
    "nome": "Jira",
    "cat": "Gestão",
    "desc": "Issues e sprints.",
    "detalhes": [
      "WIP limit"
    ]
  },
  {
    "nome": "dbt",
    "cat": "Dados",
    "desc": "Transformações SQL versionadas.",
    "detalhes": [
      "Tests e docs"
    ]
  },
  {
    "nome": "Airflow",
    "cat": "Dados",
    "desc": "Orquestração de DAGs.",
    "detalhes": [
      "Dependências e retries"
    ]
  },
  {
    "nome": "Snowflake",
    "cat": "Dados",
    "desc": "Warehouse cloud.",
    "detalhes": [
      "Separação storage/compute"
    ]
  },
  {
    "nome": "BigQuery",
    "cat": "Dados",
    "desc": "SQL analítico GCP.",
    "detalhes": [
      "Serverless"
    ]
  },
  {
    "nome": "Spark",
    "cat": "Dados",
    "desc": "Processamento distribuído.",
    "detalhes": [
      "Batch e streaming"
    ]
  }
];

const DP_FAQ = [
  {
    "q": "Por onde começar do zero?",
    "a": "Lógica (sequência, decisão, laços) e uma linguagem amigável (Python ou JavaScript). Evite cinco frentes na primeira semana."
  },
  {
    "q": "Preciso de faculdade?",
    "a": "Não é o único caminho. Ajuda em base e algumas vagas. Portfólio e prática pesam muito. Use a seção de faculdades como mapa, não como sentença."
  },
  {
    "q": "Unity é linguagem?",
    "a": "Não. É uma engine. A programação de gameplay é principalmente em C#. Busque Unity (C#) e C#."
  },
  {
    "q": "TypeScript ou C?",
    "a": "Objetivos diferentes. TS = web/apps tipadas. C = sistemas e memória. Use o comparador; um não substitui o outro."
  },
  {
    "q": "Quantas linguagens eu preciso?",
    "a": "Uma com profundidade + SQL na maioria dos caminhos. Depois a do seu ecossistema."
  },
  {
    "q": "Como pedir ajuda no suporte?",
    "a": "Objetivo, o que tentou, erro completo, trecho mínimo, esperado vs obtido."
  },
  {
    "q": "IA substitui programador?",
    "a": "IA acelera quem revisa. Colar cego gera fragilidade. Use como tutor."
  },
  {
    "q": "Front ou back?",
    "a": "Faça um CRUD nos dois. Prefere UI ou dados/regras? Amplitude cedo demais atrasa profundidade."
  },
  {
    "q": "O que colocar no portfólio?",
    "a": "2–3 projetos terminados, README com problema/solução/stack/como rodar, e um diferencial (deploy, testes, a11y)."
  },
  {
    "q": "Como estudar sem desistir?",
    "a": "Blocos curtos diários, projeto real pequeno, anotar erros. Streak > maratona semanal irregular."
  },
  {
    "q": "Certificação vale a pena?",
    "a": "Depende da área (cloud/segurança pesam mais). Nunca substitui projeto."
  },
  {
    "q": "Windows, Mac ou Linux?",
    "a": "Qualquer um dá. Linux/macOS aproximam do servidor. No Windows, WSL é ótimo."
  },
  {
    "q": "O que é API?",
    "a": "Contrato para sistemas conversarem. Na web, muitas vezes HTTP + JSON."
  },
  {
    "q": "SQL ainda importa com NoSQL e IA?",
    "a": "Sim. Dados relacionais e análise continuam no centro de muita empresa."
  },
  {
    "q": "Como comparar duas linguagens direito?",
    "a": "Olhe objetivo, curva, mercado, ecossistema e exemplos de uso — não só 'qual é melhor'."
  },
  {
    "q": "Estágio pede experiência: e agora?",
    "a": "Projetos públicos, contribuições pequenas, networking, processos seletivos de base. Persistência conta."
  },
  {
    "q": "Devo aprender DSA (estruturas)?",
    "a": "Sim em dose adequada: listas, mapas, complexidade e alguns algoritmos. Excesso só de leetcode sem projeto também trava."
  },
  {
    "q": "O que é deploy?",
    "a": "Colocar a aplicação em um ambiente acessível (nuvem/servidor), não só rodar na sua máquina."
  }
];

const DP_GLOSSARIO = [
  {
    "term": "API",
    "def": "Interface de comunicação entre sistemas."
  },
  {
    "term": "Framework",
    "def": "Base com convenções que estrutura o app."
  },
  {
    "term": "Library",
    "def": "Conjunto de funções que você chama."
  },
  {
    "term": "IDE",
    "def": "Editor com ferramentas de desenvolvimento."
  },
  {
    "term": "Runtime",
    "def": "Ambiente que executa o programa."
  },
  {
    "term": "Compile",
    "def": "Traduzir código antes de executar."
  },
  {
    "term": "Repo",
    "def": "Repositório de código versionado."
  },
  {
    "term": "PR",
    "def": "Pull Request — proposta de mudança com revisão."
  },
  {
    "term": "CI/CD",
    "def": "Automação de teste e entrega."
  },
  {
    "term": "Container",
    "def": "Pacote isolado da aplicação e deps."
  },
  {
    "term": "REST",
    "def": "Estilo de API HTTP orientado a recursos."
  },
  {
    "term": "ORM",
    "def": "Mapeia objetos para tabelas."
  },
  {
    "term": "Null",
    "def": "Ausência de valor."
  },
  {
    "term": "Refactor",
    "def": "Melhorar código sem mudar comportamento externo."
  },
  {
    "term": "Tech debt",
    "def": "Atalho que gera custo futuro."
  },
  {
    "term": "SDK",
    "def": "Kit para desenvolver em uma plataforma."
  },
  {
    "term": "CLI",
    "def": "Programa de linha de comando."
  },
  {
    "term": "Open source",
    "def": "Código disponível para estudo e contribuição."
  },
  {
    "term": "SemVer",
    "def": "Versionamento MAJOR.MINOR.PATCH."
  },
  {
    "term": "Cache",
    "def": "Armazenamento rápido de resultados frequentes."
  },
  {
    "term": "Index (DB)",
    "def": "Estrutura que acelera busca no banco."
  },
  {
    "term": "Transaction",
    "def": "Bloco atômico no banco (tudo ou nada)."
  },
  {
    "term": "Idempotent",
    "def": "Repetir a operação não altera o resultado final."
  },
  {
    "term": "Latency",
    "def": "Tempo de resposta."
  },
  {
    "term": "Throughput",
    "def": "Quantidade processada por unidade de tempo."
  },
  {
    "term": "SLA/SLO/SLI",
    "def": "Acordo, objetivo e indicador de nível de serviço."
  },
  {
    "term": "RAG",
    "def": "Retrieval-Augmented Generation — LLM + busca em documentos."
  },
  {
    "term": "Token (LLM)",
    "def": "Pedaço de texto processado pelo modelo."
  },
  {
    "term": "Env var",
    "def": "Configuração por variável de ambiente."
  },
  {
    "term": "Secret",
    "def": "Credencial que não deve ir ao código público."
  },
  {
    "term": "Load balancer",
    "def": "Distribui tráfego entre instâncias."
  },
  {
    "term": "CDN",
    "def": "Rede de distribuição de conteúdo estático."
  },
  {
    "term": "DNS",
    "def": "Resolve nomes para endereços IP."
  },
  {
    "term": "TLS/HTTPS",
    "def": "Criptografia no transporte web."
  },
  {
    "term": "OAuth",
    "def": "Delegação de autorização."
  },
  {
    "term": "JWT",
    "def": "Token assinados compactos."
  },
  {
    "term": "Monorepo",
    "def": "Vários projetos no mesmo repositório."
  },
  {
    "term": "Microservice",
    "def": "Serviço pequeno com deploy independente."
  },
  {
    "term": "Monolith",
    "def": "Aplicação única deployada junta."
  },
  {
    "term": "Event-driven",
    "def": "Arquitetura reativa a eventos."
  },
  {
    "term": "ACID",
    "def": "Propriedades clássicas de transações."
  },
  {
    "term": "BASE",
    "def": "Modelo mais flexível de consistência eventual."
  },
  {
    "term": "ETL/ELT",
    "def": "Movimentação e transformação de dados."
  },
  {
    "term": "Data warehouse",
    "def": "Banco analítico integrado."
  },
  {
    "term": "OLTP vs OLAP",
    "def": "Transacional vs analítico."
  },
  {
    "term": "Feature flag",
    "def": "Liga/desliga comportamento sem redeploy."
  },
  {
    "term": "Canary deploy",
    "def": "Liberação gradual para parte do tráfego."
  },
  {
    "term": "Blue-green",
    "def": "Dois ambientes para alternar release."
  },
  {
    "term": "Observability",
    "def": "Logs, métricas e traces para entender o sistema."
  }
];

const DP_FACULDADES = [
  {
    "nome": "Ciência da Computação",
    "tipo": "Bacharelado",
    "foco": "Fundamentos, algoritmos, sistemas",
    "detalhes": [
      "Forte em teoria e base",
      "Boa para pesquisa e software profundo",
      "Grade típica: cálc, estrutura de dados, SO, redes"
    ],
    "dica": "Combine com projetos desde o 2º semestre."
  },
  {
    "nome": "Sistemas de Informação",
    "tipo": "Bacharelado",
    "foco": "Sistemas nas organizações",
    "detalhes": [
      "Mais aplicado a negócio",
      "Web, banco, gestão de projetos"
    ],
    "dica": "Bom equilíbrio tech + contexto empresarial."
  },
  {
    "nome": "Engenharia de Software",
    "tipo": "Bacharelado",
    "foco": "Processo e qualidade de software",
    "detalhes": [
      "Requisitos, testes, arquitetura",
      "Ênfase em engenharia do produto"
    ],
    "dica": "Portfólio de times e processos ajuda."
  },
  {
    "nome": "Engenharia da Computação",
    "tipo": "Engenharia",
    "foco": "Hardware + software",
    "detalhes": [
      "Eletrônica e sistemas digitais",
      "Embarcados"
    ],
    "dica": "Caminho natural para IoT/firmware."
  },
  {
    "nome": "Análise e Desenvolvimento de Sistemas (ADS)",
    "tipo": "Tecnólogo",
    "foco": "Formação rápida para o mercado",
    "detalhes": [
      "2–3 anos",
      "Prática de dev"
    ],
    "dica": "Complemente com projetos públicos."
  },
  {
    "nome": "Banco de Dados",
    "tipo": "Tecnólogo",
    "foco": "Modelagem e administração",
    "detalhes": [
      "SQL avançado",
      "Performance e segurança de dados"
    ],
    "dica": "Certificações de cloud data ajudam."
  },
  {
    "nome": "Redes de Computadores",
    "tipo": "Tecnólogo",
    "foco": "Infraestrutura de rede",
    "detalhes": [
      "Protocolos, segurança de perímetro"
    ],
    "dica": "Labs e certificações (conceito) somam."
  },
  {
    "nome": "Jogos Digitais",
    "tipo": "Tecnólogo/Bach",
    "foco": "Game design e produção",
    "detalhes": [
      "Engines, arte, gameplay"
    ],
    "dica": "Portfólio de jogos publicados."
  },
  {
    "nome": "Inteligência Artificial (cursos emergentes)",
    "tipo": "Bach/Pós",
    "foco": "ML e dados",
    "detalhes": [
      "Matemática e estatística",
      "Projetos de modelo"
    ],
    "dica": "Fundamentos > só ferramentas de moda."
  },
  {
    "nome": "Segurança da Informação",
    "tipo": "Tecnólogo/Bach",
    "foco": "Proteção e governança",
    "detalhes": [
      "Normas, pentest introdutório, gestão de risco"
    ],
    "dica": "Ética e laboratórios legais."
  },
  {
    "nome": "EAD de qualidade (critérios)",
    "tipo": "Modalidade",
    "foco": "Como escolher EAD",
    "detalhes": [
      "MEC, TCC, estágio, avaliações presenciais quando houver",
      "Evite milagre de diploma sem carga"
    ],
    "dica": "Olhe grade e corpo docente, não só preço."
  },
  {
    "nome": "Bootcamps",
    "tipo": "Livre",
    "foco": "Aceleração prática",
    "detalhes": [
      "Curto e intenso",
      "Qualidade variável"
    ],
    "dica": "Avalie ex-alunos e projetos finais."
  },
  {
    "nome": "Cursos livres (front/back)",
    "tipo": "Livre",
    "foco": "Habilidade específica",
    "detalhes": [
      "Complementam faculdade ou autodidata"
    ],
    "dica": "Termine com projeto, não só certificado."
  },
  {
    "nome": "Pós em Arquitetura de Software",
    "tipo": "Pós",
    "foco": "Sênior e liderança técnica",
    "detalhes": [
      "Melhor com experiência prévia"
    ],
    "dica": "Traga problemas reais da sua empresa."
  },
  {
    "nome": "Pós em Data Science",
    "tipo": "Pós",
    "foco": "Dados e modelos",
    "detalhes": [
      "Exige base de programação e estatística"
    ],
    "dica": "Monte portfólio paralelo."
  },
  {
    "nome": "Licenciatura em Computação",
    "tipo": "Licenciatura",
    "foco": "Ensino de computação",
    "detalhes": [
      "Didática + tech"
    ],
    "dica": "Caminho para educação tecnológica."
  },
  {
    "nome": "Matemática / Estatística (apoio)",
    "tipo": "Bacharelado",
    "foco": "Base quantitativa",
    "detalhes": [
      "Útil para dados, quant, ML"
    ],
    "dica": "Programe durante o curso."
  },
  {
    "nome": "Estácio, Unip, Anhanguera, etc. (particulares de massa)",
    "tipo": "Instituição (categoria)",
    "foco": "Acesso e flexibilidade",
    "detalhes": [
      "Qualidade varia por polo/curso",
      "O que você faz com a grade importa mais"
    ],
    "dica": "Complemente com rede e projetos."
  },
  {
    "nome": "Universidades públicas (USP, UFRJ, UFMG, UFCG, ...)",
    "tipo": "Instituição (categoria)",
    "foco": "Pesquisa e base forte",
    "detalhes": [
      "Processo seletivo competitivo",
      "Boa para fundamentos"
    ],
    "dica": "Iniciação científica + open source."
  },
  {
    "nome": "IF e CEFETs",
    "tipo": "Rede federal",
    "foco": "Técnico e superior aplicado",
    "detalhes": [
      "Boa reputação prática em várias regiões"
    ],
    "dica": "Aproveite laboratórios."
  },
  {
    "nome": "Técnico em Informática (nível médio)",
    "tipo": "Técnico",
    "foco": "Entrada cedo no mercado",
    "detalhes": [
      "Pode combinar com estágio jovem"
    ],
    "dica": "Não pare de estudar depois do técnico."
  },
  {
    "nome": "Certificações cloud (AWS/Azure/GCP)",
    "tipo": "Certificação",
    "foco": "Validar práticas de nuvem",
    "detalhes": [
      "Melhor com labs",
      "Não substituem experiência"
    ],
    "dica": "Estude com conta prática."
  },
  {
    "nome": "Certificações segurança",
    "tipo": "Certificação",
    "foco": "Carreira em security",
    "detalhes": [
      "Caminhos longos e éticos",
      "Labs"
    ],
    "dica": "Construa base de rede/SO antes."
  }
];


// NÃO declarar var linguagens/areas aqui — o script.js já tem const linguagens/areas.
// A mescla é feita em mergeDataModule() lendo DP_LINGUAGENS / DP_AREAS etc.
