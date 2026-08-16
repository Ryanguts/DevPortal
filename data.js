// DevPortal data.js — conteúdo expandido e corrigido
const DP_LINGUAGENS = [
  {
    "nome": "JavaScript",
    "tag": "Web",
    "categoria": "linguagem",
    "desc": "Linguagem da web e do Node.",
    "detalhes": [
      "DOM",
      "Node.js",
      "NPM"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Altíssima",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "TypeScript",
      "HTML",
      "CSS"
    ]
  },
  {
    "nome": "TypeScript",
    "tag": "Web tipado",
    "categoria": "linguagem",
    "desc": "JS com tipos estáticos.",
    "detalhes": [
      "tsc",
      "Interfaces e generics",
      "Padrão em empresas"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Altíssima demanda web/enterprise",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "JavaScript",
      "C#",
      "Java"
    ]
  },
  {
    "nome": "Python",
    "tag": "Geral",
    "categoria": "linguagem",
    "desc": "Legível: dados, web, automação.",
    "detalhes": [
      "FastAPI",
      "Pandas",
      "Scripts"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Altíssima",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "SQL",
      "Go (Golang)"
    ]
  },
  {
    "nome": "Java",
    "tag": "Enterprise",
    "categoria": "linguagem",
    "desc": "JVM e backend corporativo.",
    "detalhes": [
      "Spring Boot"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Estável e amplo",
    "relacionados": [
      "Kotlin",
      "C#"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "C#",
    "tag": "NET/Games",
    "categoria": "linguagem",
    "desc": "NET e Unity.",
    "detalhes": [
      "ASP.NET",
      "Unity"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Forte games/enterprise",
    "relacionados": [
      "Java",
      "TypeScript"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "C",
    "tag": "Sistemas",
    "categoria": "linguagem",
    "desc": "Base de SO e embarcados.",
    "detalhes": [
      "Ponteiros",
      "Memória manual"
    ],
    "nivel": "Intermediário",
    "mercado": "Estável em sistemas/IoT",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "C++",
      "Rust"
    ]
  },
  {
    "nome": "C++",
    "tag": "Performance",
    "categoria": "linguagem",
    "desc": "Sistemas e games de alto desempenho.",
    "detalhes": [
      "Unreal",
      "STL"
    ],
    "nivel": "Avançado",
    "mercado": "Games/sistemas",
    "relacionados": [
      "C",
      "Rust"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Go (Golang)",
    "tag": "Cloud",
    "categoria": "linguagem",
    "desc": "Simples e concorrente.",
    "detalhes": [
      "Goroutines",
      "Cloud native"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Forte backend/cloud",
    "relacionados": [
      "Rust",
      "Python"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Rust",
    "tag": "Sistemas seguros",
    "categoria": "linguagem",
    "desc": "Memória segura sem GC.",
    "detalhes": [
      "Ownership",
      "WASM"
    ],
    "nivel": "Avançado",
    "mercado": "Crescendo rápido",
    "relacionados": [
      "C",
      "C++"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Kotlin",
    "tag": "Android",
    "categoria": "linguagem",
    "desc": "Oficial Android.",
    "detalhes": [
      "Corrotinas",
      "Null-safety"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Forte mobile",
    "relacionados": [
      "Java",
      "Swift"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Swift",
    "tag": "Apple",
    "categoria": "linguagem",
    "desc": "iOS/macOS.",
    "detalhes": [
      "SwiftUI"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Ecossistema Apple",
    "relacionados": [
      "Kotlin",
      "Objective-C"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Dart",
    "tag": "Flutter",
    "categoria": "linguagem",
    "desc": "UI multiplataforma.",
    "detalhes": [
      "Flutter widgets"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Crescendo",
    "relacionados": [
      "Kotlin",
      "Swift"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "PHP",
    "tag": "Web",
    "categoria": "linguagem",
    "desc": "Laravel e WordPress.",
    "detalhes": [
      "PHP 8+"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Ainda enorme na web",
    "relacionados": [
      "JavaScript",
      "SQL"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Ruby",
    "tag": "Web",
    "categoria": "linguagem",
    "desc": "Rails e produtividade.",
    "detalhes": [
      "Convention over config"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho sólido",
    "relacionados": [
      "Python",
      "Elixir"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "SQL",
    "tag": "Relacional",
    "categoria": "dados",
    "desc": "Consulta padrão em bancos relacionais.",
    "detalhes": [
      "JOIN",
      "Índices",
      "Transações"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Universal",
    "relacionados": [
      "Python",
      "PostgreSQL"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "HTML",
    "tag": "Marcação",
    "categoria": "web",
    "desc": "Estrutura de páginas.",
    "detalhes": [
      "Semântica",
      "A11y",
      "SEO"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Universal front",
    "relacionados": [
      "CSS",
      "JavaScript"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "CSS",
    "tag": "Estilo",
    "categoria": "web",
    "desc": "Layout e visual.",
    "detalhes": [
      "Flex/Grid",
      "Responsivo"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Universal front",
    "relacionados": [
      "HTML",
      "Sass / SCSS"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Sass / SCSS",
    "tag": "CSS",
    "categoria": "web",
    "desc": "Pré-processador CSS.",
    "detalhes": [
      "Variáveis",
      "Mixins"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Comum em times front",
    "relacionados": [
      "CSS",
      "Tailwind CSS"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Tailwind CSS",
    "tag": "Utility CSS",
    "categoria": "web",
    "desc": "Classes utilitárias.",
    "detalhes": [
      "Produtividade UI"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Altíssimo em front moderno",
    "relacionados": [
      "CSS",
      "JavaScript"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "GraphQL",
    "tag": "API query",
    "categoria": "dados",
    "desc": "Cliente pede os campos.",
    "detalhes": [
      "Schema"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "APIs modernas",
    "relacionados": [
      "TypeScript",
      "SQL"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Bash / Shell",
    "tag": "Terminal",
    "categoria": "linguagem",
    "desc": "Automação Unix.",
    "detalhes": [
      "Pipes",
      "SSH"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Universal ops",
    "relacionados": [
      "PowerShell",
      "Python"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "PowerShell",
    "tag": "Windows",
    "categoria": "linguagem",
    "desc": "Automação Microsoft.",
    "detalhes": [
      "Azure"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Empresas Windows",
    "relacionados": [
      "Bash / Shell",
      "C#"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Assembly",
    "tag": "Baixo nível",
    "categoria": "linguagem",
    "desc": "Instruções de CPU.",
    "detalhes": [
      "x86/ARM"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho",
    "relacionados": [
      "C",
      "Rust"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "R",
    "tag": "Estatística",
    "categoria": "linguagem",
    "desc": "Análise estatística.",
    "detalhes": [
      "tidyverse"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Ciência/pesquisa",
    "relacionados": [
      "Python",
      "SQL"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Julia",
    "tag": "Científico",
    "categoria": "linguagem",
    "desc": "HPC científico.",
    "detalhes": [
      "Performance"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Pesquisa",
    "relacionados": [
      "Python",
      "MATLAB"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Scala",
    "tag": "JVM dados",
    "categoria": "linguagem",
    "desc": "Funcional na JVM; Spark.",
    "detalhes": [
      "Big data"
    ],
    "nivel": "Intermediário",
    "mercado": "Dados",
    "relacionados": [
      "Java",
      "Kotlin"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Elixir",
    "tag": "Concorrência",
    "categoria": "linguagem",
    "desc": "BEAM/Phoenix realtime.",
    "detalhes": [
      "OTP"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho bem pago",
    "relacionados": [
      "Ruby",
      "Erlang"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Haskell",
    "tag": "Funcional",
    "categoria": "linguagem",
    "desc": "Pura e tipada.",
    "detalhes": [
      "Academia/fintech"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho",
    "relacionados": [
      "Scala",
      "F#"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Lua",
    "tag": "Embutida",
    "categoria": "linguagem",
    "desc": "Games e scripting leve.",
    "detalhes": [
      "Love2D",
      "Nginx"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Games/script",
    "relacionados": [
      "Python",
      "C"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Solidity",
    "tag": "Blockchain",
    "categoria": "linguagem",
    "desc": "Smart contracts EVM.",
    "detalhes": [
      "Hardhat"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Volátil",
    "relacionados": [
      "JavaScript",
      "Rust"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Zig",
    "tag": "Sistemas",
    "categoria": "linguagem",
    "desc": "Alternativa moderna a C.",
    "detalhes": [
      "Cross-compile"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Emergente",
    "relacionados": [
      "C",
      "Rust"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "V",
    "tag": "Sistemas",
    "categoria": "linguagem",
    "desc": "Simples e rápida de compilar.",
    "detalhes": [
      "Sintaxe limpa"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Emergente",
    "relacionados": [
      "Go (Golang)",
      "C"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Nim",
    "tag": "Sistemas",
    "categoria": "linguagem",
    "desc": "Expressiva compila para C.",
    "detalhes": [
      "Meta"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho",
    "relacionados": [
      "Python",
      "Rust"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Perl",
    "tag": "Texto",
    "categoria": "linguagem",
    "desc": "Regex e legado.",
    "detalhes": [
      "CPAN"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Manutenção",
    "relacionados": [
      "Python",
      "Bash / Shell"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Objective-C",
    "tag": "Apple legado",
    "categoria": "linguagem",
    "desc": "Base antiga iOS.",
    "detalhes": [
      "Interop Swift"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Legado",
    "relacionados": [
      "Swift",
      "C"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Groovy",
    "tag": "JVM script",
    "categoria": "linguagem",
    "desc": "Gradle e Jenkins.",
    "detalhes": [
      "DSL"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "CI/build",
    "relacionados": [
      "Java",
      "Kotlin"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Clojure",
    "tag": "Lisp JVM",
    "categoria": "linguagem",
    "desc": "Imutabilidade na JVM.",
    "detalhes": [
      "REPL"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho",
    "relacionados": [
      "Scala",
      "Haskell"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "F#",
    "tag": "NET funcional",
    "categoria": "linguagem",
    "desc": "Funcional no .NET.",
    "detalhes": [
      "Type providers"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho .NET",
    "relacionados": [
      "C#",
      "Haskell"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Crystal",
    "tag": "Nativo",
    "categoria": "linguagem",
    "desc": "Ruby-like nativo.",
    "detalhes": [
      "Performance"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho",
    "relacionados": [
      "Ruby",
      "Go (Golang)"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "COBOL",
    "tag": "Mainframe",
    "categoria": "linguagem",
    "desc": "Legado bancário.",
    "detalhes": [
      "Batch"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho bem pago",
    "relacionados": [
      "Java",
      "SQL"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "MATLAB",
    "tag": "Engenharia",
    "categoria": "linguagem",
    "desc": "Sinais e controle.",
    "detalhes": [
      "Simulink"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Engenharia",
    "relacionados": [
      "Python",
      "Julia"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "WebAssembly (WASM)",
    "tag": "Performance web",
    "categoria": "web",
    "desc": "Binário rápido no browser.",
    "detalhes": [
      "Rust/C++ → web"
    ],
    "nivel": "Avançado",
    "mercado": "Crescendo",
    "relacionados": [
      "Rust",
      "JavaScript"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "NoSQL Query (MongoDB)",
    "tag": "Documentos",
    "categoria": "dados",
    "desc": "Filtros e aggregation.",
    "detalhes": [
      "Pipeline"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Startups",
    "relacionados": [
      "SQL",
      "JavaScript"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Cypher",
    "tag": "Grafos",
    "categoria": "dados",
    "desc": "Neo4j query language.",
    "detalhes": [
      "MATCH"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho grafos",
    "relacionados": [
      "SQL"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "SPARQL",
    "tag": "RDF",
    "categoria": "dados",
    "desc": "Web semântica.",
    "detalhes": [
      "Linked data"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho",
    "relacionados": [
      "SQL",
      "Cypher"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Markdown",
    "tag": "Docs",
    "categoria": "web",
    "desc": "Texto leve para docs.",
    "detalhes": [
      "README"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Universal na prática",
    "relacionados": [
      "HTML"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "JSON / YAML",
    "tag": "Config/dados",
    "categoria": "dados",
    "desc": "Formatos de dados e config.",
    "detalhes": [
      "APIs e K8s"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Universal",
    "relacionados": [
      "SQL",
      "Bash / Shell"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "PromQL",
    "tag": "Métricas",
    "categoria": "dados",
    "desc": "Prometheus queries.",
    "detalhes": [
      "rate()"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "SRE/DevOps",
    "relacionados": [
      "SQL",
      "Go (Golang)"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
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
    "desc": "Script do Godot.",
    "detalhes": [
      "2D"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Indie games",
    "relacionados": [
      "C#",
      "Python"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
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
    "desc": "Base da BEAM.",
    "detalhes": [
      "Atores"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho",
    "relacionados": [
      "Elixir",
      "Go (Golang)"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "OCaml",
    "tag": "Funcional",
    "categoria": "linguagem",
    "desc": "Tipagem forte.",
    "detalhes": [
      "Compiladores"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho",
    "relacionados": [
      "Haskell",
      "F#"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Fortran",
    "tag": "HPC",
    "categoria": "linguagem",
    "desc": "Simulações científicas.",
    "detalhes": [
      "Legado numérico"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Academia/HPC",
    "relacionados": [
      "C",
      "Python"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Ada",
    "tag": "Crítico",
    "categoria": "linguagem",
    "desc": "Aviação e safety.",
    "detalhes": [
      "Contratos"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho crítico",
    "relacionados": [
      "C",
      "Rust"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "Scratch",
    "tag": "Educação",
    "categoria": "linguagem",
    "desc": "Blocos para iniciantes.",
    "detalhes": [
      "Transição p/ Python"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Educação",
    "relacionados": [
      "Python",
      "Lua"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
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
    "tag": "Power BI",
    "categoria": "dados",
    "desc": "Medidas e cálculos BI.",
    "detalhes": [
      "Power BI"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "BI corporativo",
    "relacionados": [
      "SQL",
      "Power BI"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
  },
  {
    "nome": "M (Power Query)",
    "tag": "ETL planilha",
    "categoria": "dados",
    "desc": "Transformação no Power Query.",
    "detalhes": [
      "Excel/BI"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "BI Microsoft",
    "relacionados": [
      "DAX",
      "SQL"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
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
    "tag": "Padrões",
    "categoria": "dados",
    "desc": "Busca e validação de texto.",
    "detalhes": [
      "Independe da host lang"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Universal",
    "relacionados": [
      "Python",
      "JavaScript"
    ],
    "quandoAprender": "Quando alinhar à sua meta"
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
  },
  {
    "nome": "VB.NET",
    "tag": "NET legado",
    "categoria": "linguagem",
    "desc": "Visual Basic no .NET.",
    "detalhes": [
      "Apps internos"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Legado corporativo",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "C#"
    ]
  },
  {
    "nome": "Delphi / Object Pascal",
    "tag": "Desktop",
    "categoria": "linguagem",
    "desc": "Apps desktop clássicos.",
    "detalhes": [
      "VCL"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Legado/desktop",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "C#",
      "C++"
    ]
  },
  {
    "nome": "Prolog",
    "tag": "Lógica",
    "categoria": "linguagem",
    "desc": "Programação em lógica.",
    "detalhes": [
      "IA simbólica"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho/academia",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "Haskell",
      "Python"
    ]
  },
  {
    "nome": "Scheme",
    "tag": "Funcional",
    "categoria": "linguagem",
    "desc": "Lisp minimalista educacional.",
    "detalhes": [
      "SICP"
    ],
    "nivel": "Intermediário",
    "mercado": "Educação",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "Clojure",
      "Haskell"
    ]
  },
  {
    "nome": "Smalltalk",
    "tag": "OO clássica",
    "categoria": "linguagem",
    "desc": "OO pura e imagem viva.",
    "detalhes": [
      "História da OO"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "Ruby",
      "Java"
    ]
  },
  {
    "nome": "Tcl",
    "tag": "Scripting",
    "categoria": "linguagem",
    "desc": "Tool Command Language.",
    "detalhes": [
      "Expect",
      "Embutida"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "Python",
      "Lua"
    ]
  },
  {
    "nome": "Hack",
    "tag": "PHP tipado",
    "categoria": "linguagem",
    "desc": "PHP tipado do Meta.",
    "detalhes": [
      "HHVM"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho Meta/legado",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "PHP",
      "TypeScript"
    ]
  },
  {
    "nome": "Reason / ReScript",
    "tag": "JS tipado",
    "categoria": "linguagem",
    "desc": "OCaml→JS.",
    "detalhes": [
      "Tipos fortes no front"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "TypeScript",
      "OCaml"
    ]
  },
  {
    "nome": "Elm",
    "tag": "Front funcional",
    "categoria": "linguagem",
    "desc": "Front funcional sem runtime errors.",
    "detalhes": [
      "Architecture"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "Haskell",
      "TypeScript"
    ]
  },
  {
    "nome": "PureScript",
    "tag": "Front funcional",
    "categoria": "linguagem",
    "desc": "Haskell-like para JS.",
    "detalhes": [
      "Tipos"
    ],
    "nivel": "Avançado",
    "mercado": "Nicho",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "Haskell",
      "Elm"
    ]
  },
  {
    "nome": "CoffeeScript",
    "tag": "JS alt",
    "categoria": "linguagem",
    "desc": "Sintaxe alternativa legada ao JS.",
    "detalhes": [
      "Compila para JS"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Legado",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "JavaScript",
      "TypeScript"
    ]
  },
  {
    "nome": "ClojureScript",
    "tag": "Lisp no browser",
    "categoria": "linguagem",
    "desc": "Clojure compilado para JS.",
    "detalhes": [
      "Immutabilidade"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "Clojure",
      "JavaScript"
    ]
  },
  {
    "nome": "Haxe",
    "tag": "Multi-alvo",
    "categoria": "linguagem",
    "desc": "Compila para várias plataformas.",
    "detalhes": [
      "Games"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho games",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "TypeScript",
      "C#"
    ]
  },
  {
    "nome": "Ring",
    "tag": "Educação",
    "categoria": "linguagem",
    "desc": "Linguagem multiparadigma educacional.",
    "detalhes": [
      "Didática"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Educação",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "Python"
    ]
  },
  {
    "nome": "ABAP",
    "tag": "SAP",
    "categoria": "linguagem",
    "desc": "Customização SAP.",
    "detalhes": [
      "ERP"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Corporativo SAP",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "Java",
      "SQL"
    ]
  },
  {
    "nome": "Apex",
    "tag": "Salesforce",
    "categoria": "linguagem",
    "desc": "Código na plataforma Salesforce.",
    "detalhes": [
      "CRM"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Salesforce",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "Java",
      "TypeScript"
    ]
  },
  {
    "nome": "TIA Portal / Ladder",
    "tag": "Industrial",
    "categoria": "linguagem",
    "desc": "CLPs e automação industrial (conceito).",
    "detalhes": [
      "Ladder/FBD"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Indústria",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "C",
      "Python"
    ]
  },
  {
    "nome": "Less",
    "tag": "CSS",
    "categoria": "web",
    "desc": "Outro pré-processador CSS.",
    "detalhes": [
      "Variáveis"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Legado front",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "CSS",
      "Sass / SCSS"
    ]
  },
  {
    "nome": "PostCSS",
    "tag": "CSS tooling",
    "categoria": "web",
    "desc": "Transformações de CSS.",
    "detalhes": [
      "Autoprefixer"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Tooling front",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "CSS",
      "JavaScript"
    ]
  },
  {
    "nome": "HTML5 APIs",
    "tag": "Browser APIs",
    "categoria": "web",
    "desc": "APIs do browser (storage, geo, workers).",
    "detalhes": [
      "localStorage",
      "Fetch"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Front moderno",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "JavaScript",
      "TypeScript"
    ]
  },
  {
    "nome": "Web Components",
    "tag": "Componentes nativos",
    "categoria": "web",
    "desc": "Custom elements nativos.",
    "detalhes": [
      "Shadow DOM"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Crescendo",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "JavaScript",
      "TypeScript"
    ]
  },
  {
    "nome": "SVG",
    "tag": "Gráficos vetoriais",
    "categoria": "web",
    "desc": "Gráficos escaláveis na web.",
    "detalhes": [
      "Ícones",
      "Charts"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "UI/web",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "HTML",
      "CSS"
    ]
  },
  {
    "nome": "Canvas API",
    "tag": "Desenho 2D",
    "categoria": "web",
    "desc": "Desenho bitmap no browser.",
    "detalhes": [
      "Jogos leves",
      "Gráficos"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Front criativo",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "JavaScript",
      "WebAssembly (WASM)"
    ]
  },
  {
    "nome": "WebGL",
    "tag": "3D web",
    "categoria": "web",
    "desc": "Gráficos 3D no browser.",
    "detalhes": [
      "Three.js"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Criativo/games web",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "JavaScript",
      "WebAssembly (WASM)"
    ]
  },
  {
    "nome": "Liquid / Jinja (templates)",
    "tag": "Templates",
    "categoria": "web",
    "desc": "Templates server-side.",
    "detalhes": [
      "CMS/SSG"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Web/CMS",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "HTML",
      "Python"
    ]
  },
  {
    "nome": "Pug / Jade",
    "tag": "Templates HTML",
    "categoria": "web",
    "desc": "HTML com sintaxe indentada.",
    "detalhes": [
      "Legado front"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "HTML",
      "JavaScript"
    ]
  },
  {
    "nome": "HTMX",
    "tag": "HTML interativo",
    "categoria": "web",
    "desc": "Interatividade via atributos HTML.",
    "detalhes": [
      "Menos JS"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Crescendo",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "HTML",
      "JavaScript"
    ]
  },
  {
    "nome": "Alpine.js",
    "tag": "JS mínimo",
    "categoria": "web",
    "desc": "Reatividade leve no HTML.",
    "detalhes": [
      "Pequenos widgets"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Crescendo",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "JavaScript",
      "HTML"
    ]
  },
  {
    "nome": "T-SQL",
    "tag": "SQL Server",
    "categoria": "dados",
    "desc": "SQL procedural Microsoft.",
    "detalhes": [
      "Procedures"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Empresas Microsoft",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "SQL",
      "C#"
    ]
  },
  {
    "nome": "PL/pgSQL",
    "tag": "PostgreSQL",
    "categoria": "dados",
    "desc": "Procedural do Postgres.",
    "detalhes": [
      "Functions/triggers"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Alto com Postgres",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "SQL",
      "Python"
    ]
  },
  {
    "nome": "PL/SQL",
    "tag": "Oracle",
    "categoria": "dados",
    "desc": "Procedural Oracle.",
    "detalhes": [
      "Packages"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Enterprise Oracle",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "SQL",
      "Java"
    ]
  },
  {
    "nome": "LogQL",
    "tag": "Logs",
    "categoria": "dados",
    "desc": "Consultas de logs no Loki.",
    "detalhes": [
      "Grafana stack"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Observabilidade",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "PromQL"
    ]
  },
  {
    "nome": "Kusto (KQL)",
    "tag": "Azure analytics",
    "categoria": "dados",
    "desc": "Query language Azure Data Explorer.",
    "detalhes": [
      "Telemetria"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Azure enterprise",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "SQL"
    ]
  },
  {
    "nome": "HiveQL",
    "tag": "Big data",
    "categoria": "dados",
    "desc": "SQL-like no Hadoop/Hive.",
    "detalhes": [
      "Data lake legado"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Legado big data",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "SQL",
      "Spark"
    ]
  },
  {
    "nome": "Spark SQL",
    "tag": "Big data",
    "categoria": "dados",
    "desc": "SQL distribuído no Spark.",
    "detalhes": [
      "DataFrames"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Engenharia de dados",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "SQL",
      "Scala"
    ]
  },
  {
    "nome": "PrQL",
    "tag": "Pipelines SQL",
    "categoria": "dados",
    "desc": "SQL em pipeline legível.",
    "detalhes": [
      "Alternativa moderna"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Emergente",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "SQL"
    ]
  },
  {
    "nome": "EdgeQL",
    "tag": "EdgeDB",
    "categoria": "dados",
    "desc": "Query language do EdgeDB.",
    "detalhes": [
      "Tipada"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Emergente",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "SQL",
      "GraphQL"
    ]
  },
  {
    "nome": "CQL (Cassandra)",
    "tag": "Wide-column",
    "categoria": "dados",
    "desc": "Cassandra Query Language.",
    "detalhes": [
      "Modelagem por query"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Escala",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "SQL"
    ]
  },
  {
    "nome": "N1QL",
    "tag": "Couchbase",
    "categoria": "dados",
    "desc": "SQL-like para JSON no Couchbase.",
    "detalhes": [
      "Documentos"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "SQL",
      "NoSQL Query (MongoDB)"
    ]
  },
  {
    "nome": "AQL",
    "tag": "ArangoDB",
    "categoria": "dados",
    "desc": "Multi-model query.",
    "detalhes": [
      "Docs/grafos"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "Cypher",
      "SQL"
    ]
  },
  {
    "nome": "Flux",
    "tag": "InfluxDB",
    "categoria": "dados",
    "desc": "Query de séries temporais.",
    "detalhes": [
      "Observabilidade"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Monitoring",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "PromQL",
      "SQL"
    ]
  },
  {
    "nome": "Gremlin",
    "tag": "Grafos",
    "categoria": "dados",
    "desc": "Traversal de grafos (TinkerPop).",
    "detalhes": [
      "Grafos"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Nicho",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "Cypher"
    ]
  },
  {
    "nome": "MDX",
    "tag": "OLAP",
    "categoria": "dados",
    "desc": "Cubos analíticos.",
    "detalhes": [
      "SSAS"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "BI clássico",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "SQL",
      "DAX"
    ]
  },
  {
    "nome": "jq",
    "tag": "JSON CLI",
    "categoria": "dados",
    "desc": "Processar JSON no terminal.",
    "detalhes": [
      "DevOps"
    ],
    "nivel": "Iniciante a intermediário",
    "mercado": "Ops/dev",
    "quandoAprender": "Quando alinhar à sua meta",
    "relacionados": [
      "JSON / YAML",
      "Bash / Shell"
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
      "<strong>Stack comum:</strong> HTML, CSS, JavaScript, TypeScript, SQL, Node.js",
      "<strong>Próximo passo:</strong> GitHub com README claro vale mais que 10 cursos pela metade.",
      "<strong>Mercado:</strong> No Brasil e no mundo a demanda por quem entrega front+API+banco continua alta, especialmente em produtos digitais e e-commerce. Plenos/sêniores com TypeScript e bom SQL se destacam; júnior puro sem portfólio sofre mais concorrência."
    ],
    "dica": "GitHub com README claro vale mais que 10 cursos pela metade.",
    "stackComum": "HTML, CSS, JavaScript, TypeScript, SQL, Node.js",
    "proximoPasso": "GitHub com README claro vale mais que 10 cursos pela metade.",
    "mercadoTexto": "No Brasil e no mundo a demanda por quem entrega front+API+banco continua alta, especialmente em produtos digitais e e-commerce. Plenos/sêniores com TypeScript e bom SQL se destacam; júnior puro sem portfólio sofre mais concorrência."
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
      "<strong>Stack comum:</strong> HTML, CSS, JavaScript, TypeScript, React",
      "<strong>Próximo passo:</strong> CSS profundo > depender só de lib.",
      "<strong>Mercado:</strong> Forte em mercados com muitos produtos SaaS (EUA, Europa, Brasil remoto). Ênfase em React/TypeScript, a11y e performance. Vagas júnior saturadas; mid com design system e métricas web se diferencia."
    ],
    "dica": "CSS profundo > depender só de lib.",
    "stackComum": "HTML, CSS, JavaScript, TypeScript, React",
    "proximoPasso": "CSS profundo > depender só de lib.",
    "mercadoTexto": "Forte em mercados com muitos produtos SaaS (EUA, Europa, Brasil remoto). Ênfase em React/TypeScript, a11y e performance. Vagas júnior saturadas; mid com design system e métricas web se diferencia."
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
      "<strong>Stack comum:</strong> Java, Go (Golang), Python, C#, SQL, TypeScript",
      "<strong>Próximo passo:</strong> SQL avançado é diferencial.",
      "<strong>Mercado:</strong> Demanda estável globalmente (fintechs, varejo, saúde). Go, Java e Node lideram stacks; quem domina SQL, filas e observabilidade emprega bem no BR e exterior."
    ],
    "dica": "SQL avançado é diferencial.",
    "stackComum": "Java, Go (Golang), Python, C#, SQL, TypeScript",
    "proximoPasso": "SQL avançado é diferencial.",
    "mercadoTexto": "Demanda estável globalmente (fintechs, varejo, saúde). Go, Java e Node lideram stacks; quem domina SQL, filas e observabilidade emprega bem no BR e exterior."
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
      "<strong>Stack comum:</strong> Git, SQL, JavaScript, Python",
      "<strong>Próximo passo:</strong> Escreva RFCs curtas.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Escreva RFCs curtas."
    ],
    "dica": "Escreva RFCs curtas.",
    "stackComum": "Git, SQL, JavaScript, Python",
    "proximoPasso": "Escreva RFCs curtas.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Escreva RFCs curtas."
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
      "<strong>Stack comum:</strong> Kotlin, Java, SQL",
      "<strong>Próximo passo:</strong> Kotlin first.",
      "<strong>Mercado:</strong> Mercado global grande; no BR há vagas em bancos e retail. Kotlin é o padrão. Concorrência alta em júnior; apps publicados e Play Console pesam."
    ],
    "dica": "Kotlin first.",
    "stackComum": "Kotlin, Java, SQL",
    "proximoPasso": "Kotlin first.",
    "mercadoTexto": "Mercado global grande; no BR há vagas em bancos e retail. Kotlin é o padrão. Concorrência alta em júnior; apps publicados e Play Console pesam."
  },
  {
    "nome": "Mobile iOS",
    "desc": "Apps no ecossistema Apple.",
    "langs": [
      "Swift",
      "Objective-C"
    ],
    "detalhes": [
      "<strong>Stack comum:</strong> Swift, Objective-C",
      "<strong>Próximo passo:</strong> SwiftUI + networking sólido.",
      "<strong>Mercado:</strong> Concentrado em empresas com orçamento Apple e produtos premium. SwiftUI em alta. Menos vagas que Android no BR, porém bem pagas em hubs e remoto internacional."
    ],
    "dica": "SwiftUI + networking sólido.",
    "stackComum": "Swift, Objective-C",
    "proximoPasso": "SwiftUI + networking sólido.",
    "mercadoTexto": "Concentrado em empresas com orçamento Apple e produtos premium. SwiftUI em alta. Menos vagas que Android no BR, porém bem pagas em hubs e remoto internacional."
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
      "<strong>Stack comum:</strong> Dart, Flutter, TypeScript, React Native",
      "<strong>Próximo passo:</strong> Escolha Flutter OU RN e aprofunde.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Escolha Flutter OU RN e aprofunde."
    ],
    "dica": "Escolha Flutter OU RN e aprofunde.",
    "stackComum": "Dart, Flutter, TypeScript, React Native",
    "proximoPasso": "Escolha Flutter OU RN e aprofunde.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Escolha Flutter OU RN e aprofunde."
  },
  {
    "nome": "Game Development (Unity)",
    "desc": "Jogos com Unity + C#.",
    "langs": [
      "C#",
      "Unity (C#)"
    ],
    "detalhes": [
      "<strong>Stack comum:</strong> C#, Unity (C#)",
      "<strong>Próximo passo:</strong> Termine jogos curtos.",
      "<strong>Mercado:</strong> Indie global aquecido; studios médios seletivos. C# + Unity ainda é a porta mais comum. Renda instável no indie; clutches em live-ops e mobile games."
    ],
    "dica": "Termine jogos curtos.",
    "stackComum": "C#, Unity (C#)",
    "proximoPasso": "Termine jogos curtos.",
    "mercadoTexto": "Indie global aquecido; studios médios seletivos. C# + Unity ainda é a porta mais comum. Renda instável no indie; clutches em live-ops e mobile games."
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
      "<strong>Stack comum:</strong> GDScript, C#, Godot",
      "<strong>Próximo passo:</strong> Ideal indie sem taxa de engine.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Ideal indie sem taxa de engine."
    ],
    "dica": "Ideal indie sem taxa de engine.",
    "stackComum": "GDScript, C#, Godot",
    "proximoPasso": "Ideal indie sem taxa de engine.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Ideal indie sem taxa de engine."
  },
  {
    "nome": "Game Development (Unreal)",
    "desc": "AAA e gráficos avançados.",
    "langs": [
      "C++",
      "Unreal Blueprints / C++"
    ],
    "detalhes": [
      "<strong>Stack comum:</strong> C++, Unreal Blueprints / C++",
      "<strong>Próximo passo:</strong> Curva alta — foque um sistema por vez.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Curva alta — foque um sistema por vez."
    ],
    "dica": "Curva alta — foque um sistema por vez.",
    "stackComum": "C++, Unreal Blueprints / C++",
    "proximoPasso": "Curva alta — foque um sistema por vez.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Curva alta — foque um sistema por vez."
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
      "<strong>Stack comum:</strong> Python, SQL, R, Pandas",
      "<strong>Próximo passo:</strong> SQL + pandas antes de deep learning.",
      "<strong>Mercado:</strong> Demanda alta onde há dados maduros (EUA, Europa, grandes empresas BR). Exigem SQL forte + Python; título de 'cientista' sem entrega de negócio está mais filtrado."
    ],
    "dica": "SQL + pandas antes de deep learning.",
    "stackComum": "Python, SQL, R, Pandas",
    "proximoPasso": "SQL + pandas antes de deep learning.",
    "mercadoTexto": "Demanda alta onde há dados maduros (EUA, Europa, grandes empresas BR). Exigem SQL forte + Python; título de 'cientista' sem entrega de negócio está mais filtrado."
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
      "<strong>Stack comum:</strong> SQL, Python, Spark, Airflow, dbt",
      "<strong>Próximo passo:</strong> Confiabilidade > modelo fancy.",
      "<strong>Mercado:</strong> Uma das áreas mais aquecidas globalmente (pipelines, warehouse, qualidade). No BR, fintechs e varejo contratam bem quem sabe SQL + cloud + orquestração."
    ],
    "dica": "Confiabilidade > modelo fancy.",
    "stackComum": "SQL, Python, Spark, Airflow, dbt",
    "proximoPasso": "Confiabilidade > modelo fancy.",
    "mercadoTexto": "Uma das áreas mais aquecidas globalmente (pipelines, warehouse, qualidade). No BR, fintechs e varejo contratam bem quem sabe SQL + cloud + orquestração."
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
      "<strong>Stack comum:</strong> SQL, Power BI, Tableau, DAX, Excel / Google Sheets",
      "<strong>Próximo passo:</strong> Defina a métrica antes do gráfico.",
      "<strong>Mercado:</strong> Forte no corporativo BR (Power BI/Tableau). Self-service cresce; falta de modelagem e governança ainda gera muita vaga de quem 'traduz negócio → métrica'."
    ],
    "dica": "Defina a métrica antes do gráfico.",
    "stackComum": "SQL, Power BI, Tableau, DAX, Excel / Google Sheets",
    "proximoPasso": "Defina a métrica antes do gráfico.",
    "mercadoTexto": "Forte no corporativo BR (Power BI/Tableau). Self-service cresce; falta de modelagem e governança ainda gera muita vaga de quem 'traduz negócio → métrica'."
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
      "<strong>Stack comum:</strong> Python, scikit-learn, PyTorch, MLFlow",
      "<strong>Próximo passo:</strong> Baseline simples primeiro.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Baseline simples primeiro."
    ],
    "dica": "Baseline simples primeiro.",
    "stackComum": "Python, scikit-learn, PyTorch, MLFlow",
    "proximoPasso": "Baseline simples primeiro.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Baseline simples primeiro."
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
      "<strong>Stack comum:</strong> Python, PyTorch, Hugging Face, LangChain / LlamaIndex",
      "<strong>Próximo passo:</strong> Não pule fundamentos de ML.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Não pule fundamentos de ML."
    ],
    "dica": "Não pule fundamentos de ML.",
    "stackComum": "Python, PyTorch, Hugging Face, LangChain / LlamaIndex",
    "proximoPasso": "Não pule fundamentos de ML.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Não pule fundamentos de ML."
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
      "<strong>Stack comum:</strong> Python, Docker, Kubernetes, MLFlow",
      "<strong>Próximo passo:</strong> Trate modelo como software.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Trate modelo como software."
    ],
    "dica": "Trate modelo como software.",
    "stackComum": "Python, Docker, Kubernetes, MLFlow",
    "proximoPasso": "Trate modelo como software.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Trate modelo como software."
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
      "<strong>Stack comum:</strong> Bash / Shell, Docker, GitHub Actions, Terraform (HCL)",
      "<strong>Próximo passo:</strong> Automatize a terceira repetição.",
      "<strong>Mercado:</strong> Demanda alta mundial por CI/CD, cloud e automação. No BR, perfil híbrido (dev que opera) está valorizado; Kubernetes sem base de Linux/rede não segura vaga boa."
    ],
    "dica": "Automatize a terceira repetição.",
    "stackComum": "Bash / Shell, Docker, GitHub Actions, Terraform (HCL)",
    "proximoPasso": "Automatize a terceira repetição.",
    "mercadoTexto": "Demanda alta mundial por CI/CD, cloud e automação. No BR, perfil híbrido (dev que opera) está valorizado; Kubernetes sem base de Linux/rede não segura vaga boa."
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
      "<strong>Stack comum:</strong> Go (Golang), Python, Prometheus, Grafana",
      "<strong>Próximo passo:</strong> Métrica de dor do usuário > CPU só.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Métrica de dor do usuário > CPU só."
    ],
    "dica": "Métrica de dor do usuário > CPU só.",
    "stackComum": "Go (Golang), Python, Prometheus, Grafana",
    "proximoPasso": "Métrica de dor do usuário > CPU só.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Métrica de dor do usuário > CPU só."
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
      "<strong>Stack comum:</strong> AWS, GCP, Azure, Terraform (HCL)",
      "<strong>Próximo passo:</strong> Comece por uma cloud só.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Comece por uma cloud só."
    ],
    "dica": "Comece por uma cloud só.",
    "stackComum": "AWS, GCP, Azure, Terraform (HCL)",
    "proximoPasso": "Comece por uma cloud só.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Comece por uma cloud só."
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
      "<strong>Stack comum:</strong> Python, Bash / Shell, Burp Suite, OWASP ZAP",
      "<strong>Próximo passo:</strong> Sem autorização é crime.",
      "<strong>Mercado:</strong> Escassez global de profissionais sérios. No BR cresce compliance e appsec. Sem labs/portfólio ético a entrada é difícil; senior bem pago."
    ],
    "dica": "Sem autorização é crime.",
    "stackComum": "Python, Bash / Shell, Burp Suite, OWASP ZAP",
    "proximoPasso": "Sem autorização é crime.",
    "mercadoTexto": "Escassez global de profissionais sérios. No BR cresce compliance e appsec. Sem labs/portfólio ético a entrada é difícil; senior bem pago."
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
      "<strong>Stack comum:</strong> Python, SQL, Elasticsearch, Linux",
      "<strong>Próximo passo:</strong> Fundamentos de rede e SO.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Fundamentos de rede e SO."
    ],
    "dica": "Fundamentos de rede e SO.",
    "stackComum": "Python, SQL, Elasticsearch, Linux",
    "proximoPasso": "Fundamentos de rede e SO.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Fundamentos de rede e SO."
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
      "<strong>Stack comum:</strong> OWASP ZAP, SonarQube, JavaScript, Python",
      "<strong>Próximo passo:</strong> Shift-left de verdade.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Shift-left de verdade."
    ],
    "dica": "Shift-left de verdade.",
    "stackComum": "OWASP ZAP, SonarQube, JavaScript, Python",
    "proximoPasso": "Shift-left de verdade.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Shift-left de verdade."
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
      "<strong>Stack comum:</strong> Jira, Markdown, SQL",
      "<strong>Próximo passo:</strong> Reproduzir > opinião.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Reproduzir > opinião."
    ],
    "dica": "Reproduzir > opinião.",
    "stackComum": "Jira, Markdown, SQL",
    "proximoPasso": "Reproduzir > opinião.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Reproduzir > opinião."
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
      "<strong>Stack comum:</strong> Playwright, Cypress, Selenium, TypeScript, Python",
      "<strong>Próximo passo:</strong> Menos E2E frágeis, mais unit/API.",
      "<strong>Mercado:</strong> Empresas maduras (global e BR) buscam automação além do clique manual. Playwright/Cypress + API tests abrem portas; só QA manual está mais apertado."
    ],
    "dica": "Menos E2E frágeis, mais unit/API.",
    "stackComum": "Playwright, Cypress, Selenium, TypeScript, Python",
    "proximoPasso": "Menos E2E frágeis, mais unit/API.",
    "mercadoTexto": "Empresas maduras (global e BR) buscam automação além do clique manual. Playwright/Cypress + API tests abrem portas; só QA manual está mais apertado."
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
      "<strong>Stack comum:</strong> Kubernetes, Go (Golang), TypeScript, Terraform (HCL)",
      "<strong>Próximo passo:</strong> Reduza toil do time.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Reduza toil do time."
    ],
    "dica": "Reduza toil do time.",
    "stackComum": "Kubernetes, Go (Golang), TypeScript, Terraform (HCL)",
    "proximoPasso": "Reduza toil do time.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Reduza toil do time."
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
      "<strong>Stack comum:</strong> SQL, Java, Go (Golang), TypeScript",
      "<strong>Próximo passo:</strong> Documente decisões (ADR).",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Documente decisões (ADR)."
    ],
    "dica": "Documente decisões (ADR).",
    "stackComum": "SQL, Java, Go (Golang), TypeScript",
    "proximoPasso": "Documente decisões (ADR).",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Documente decisões (ADR)."
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
      "<strong>Stack comum:</strong> Java, C#, Kafka, RabbitMQ",
      "<strong>Próximo passo:</strong> Contratos explícitos.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Contratos explícitos."
    ],
    "dica": "Contratos explícitos.",
    "stackComum": "Java, C#, Kafka, RabbitMQ",
    "proximoPasso": "Contratos explícitos.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Contratos explícitos."
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
      "<strong>Stack comum:</strong> ABAP (conceito), SQL, Java",
      "<strong>Próximo passo:</strong> Negócio + sistema, não só tela.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Negócio + sistema, não só tela."
    ],
    "dica": "Negócio + sistema, não só tela.",
    "stackComum": "ABAP (conceito), SQL, Java",
    "proximoPasso": "Negócio + sistema, não só tela.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Negócio + sistema, não só tela."
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
      "<strong>Stack comum:</strong> COBOL, SQL, Java",
      "<strong>Próximo passo:</strong> Pagamento alto, stack antiga.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Pagamento alto, stack antiga."
    ],
    "dica": "Pagamento alto, stack antiga.",
    "stackComum": "COBOL, SQL, Java",
    "proximoPasso": "Pagamento alto, stack antiga.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Pagamento alto, stack antiga."
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
      "<strong>Stack comum:</strong> C, C++, Rust, Assembly",
      "<strong>Próximo passo:</strong> Comece com ESP32 + C.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Comece com ESP32 + C."
    ],
    "dica": "Comece com ESP32 + C.",
    "stackComum": "C, C++, Rust, Assembly",
    "proximoPasso": "Comece com ESP32 + C.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Comece com ESP32 + C."
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
      "<strong>Stack comum:</strong> C, Python, MQTT (conceito), Linux",
      "<strong>Próximo passo:</strong> Protótipo ponta a ponta simples.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Protótipo ponta a ponta simples."
    ],
    "dica": "Protótipo ponta a ponta simples.",
    "stackComum": "C, Python, MQTT (conceito), Linux",
    "proximoPasso": "Protótipo ponta a ponta simples.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Protótipo ponta a ponta simples."
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
      "<strong>Stack comum:</strong> Linux, Bash / Shell, Wireshark",
      "<strong>Próximo passo:</strong> Laboratório caseiro ajuda.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Laboratório caseiro ajuda."
    ],
    "dica": "Laboratório caseiro ajuda.",
    "stackComum": "Linux, Bash / Shell, Wireshark",
    "proximoPasso": "Laboratório caseiro ajuda.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Laboratório caseiro ajuda."
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
      "<strong>Stack comum:</strong> Linux, Bash / Shell, Ansible, Nginx",
      "<strong>Próximo passo:</strong> Infrastructure as code cedo.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Infrastructure as code cedo."
    ],
    "dica": "Infrastructure as code cedo.",
    "stackComum": "Linux, Bash / Shell, Ansible, Nginx",
    "proximoPasso": "Infrastructure as code cedo.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Infrastructure as code cedo."
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
      "<strong>Stack comum:</strong> SQL, PostgreSQL, MySQL / MariaDB",
      "<strong>Próximo passo:</strong> Entenda planos de execução.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Entenda planos de execução."
    ],
    "dica": "Entenda planos de execução.",
    "stackComum": "SQL, PostgreSQL, MySQL / MariaDB",
    "proximoPasso": "Entenda planos de execução.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Entenda planos de execução."
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
      "<strong>Stack comum:</strong> SQL, Python, Metabase, Looker / Looker Studio",
      "<strong>Próximo passo:</strong> Métrica acionável > vaidade.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Métrica acionável > vaidade."
    ],
    "dica": "Métrica acionável > vaidade.",
    "stackComum": "SQL, Python, Metabase, Looker / Looker Studio",
    "proximoPasso": "Métrica acionável > vaidade.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Métrica acionável > vaidade."
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
      "<strong>Stack comum:</strong> Power BI, Tableau, SQL, DAX",
      "<strong>Próximo passo:</strong> Negócio define KPI.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Negócio define KPI."
    ],
    "dica": "Negócio define KPI.",
    "stackComum": "Power BI, Tableau, SQL, DAX",
    "proximoPasso": "Negócio define KPI.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Negócio define KPI."
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
      "<strong>Stack comum:</strong> TypeScript, React, CSS, Figma",
      "<strong>Próximo passo:</strong> Documentação é feature.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Documentação é feature."
    ],
    "dica": "Documentação é feature.",
    "stackComum": "TypeScript, React, CSS, Figma",
    "proximoPasso": "Documentação é feature.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Documentação é feature."
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
      "<strong>Stack comum:</strong> JavaScript, CSS, WebAssembly (WASM)",
      "<strong>Próximo passo:</strong> Meça no device lento.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Meça no device lento."
    ],
    "dica": "Meça no device lento.",
    "stackComum": "JavaScript, CSS, WebAssembly (WASM)",
    "proximoPasso": "Meça no device lento.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Meça no device lento."
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
      "<strong>Stack comum:</strong> HTML, CSS, JavaScript",
      "<strong>Próximo passo:</strong> a11y desde o primeiro PR.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. a11y desde o primeiro PR."
    ],
    "dica": "a11y desde o primeiro PR.",
    "stackComum": "HTML, CSS, JavaScript",
    "proximoPasso": "a11y desde o primeiro PR.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. a11y desde o primeiro PR."
  },
  {
    "nome": "Tech Writing",
    "desc": "Documentação técnica clara.",
    "langs": [
      "Markdown",
      "Git"
    ],
    "detalhes": [
      "<strong>Stack comum:</strong> Markdown, Git",
      "<strong>Próximo passo:</strong> Escreva para o você do futuro.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Escreva para o você do futuro."
    ],
    "dica": "Escreva para o você do futuro.",
    "stackComum": "Markdown, Git",
    "proximoPasso": "Escreva para o você do futuro.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Escreva para o você do futuro."
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
      "<strong>Stack comum:</strong> Markdown, JavaScript, Python",
      "<strong>Próximo passo:</strong> Credibilidade vem de código real.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Credibilidade vem de código real."
    ],
    "dica": "Credibilidade vem de código real.",
    "stackComum": "Markdown, JavaScript, Python",
    "proximoPasso": "Credibilidade vem de código real.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Credibilidade vem de código real."
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
      "<strong>Stack comum:</strong> SQL, Markdown, Jira",
      "<strong>Próximo passo:</strong> Fale a língua de dados e de pessoas.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Fale a língua de dados e de pessoas."
    ],
    "dica": "Fale a língua de dados e de pessoas.",
    "stackComum": "SQL, Markdown, Jira",
    "proximoPasso": "Fale a língua de dados e de pessoas.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Fale a língua de dados e de pessoas."
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
      "<strong>Stack comum:</strong> Markdown, Jira, Git",
      "<strong>Próximo passo:</strong> Contexto > controle.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Contexto > controle."
    ],
    "dica": "Contexto > controle.",
    "stackComum": "Markdown, Jira, Git",
    "proximoPasso": "Contexto > controle.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Contexto > controle."
  },
  {
    "nome": "Compliance & Privacy (tech)",
    "desc": "LGPD, auditoria, retenção.",
    "langs": [
      "SQL",
      "Python"
    ],
    "detalhes": [
      "<strong>Stack comum:</strong> SQL, Python",
      "<strong>Próximo passo:</strong> Privacidade por design.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Privacidade por design."
    ],
    "dica": "Privacidade por design.",
    "stackComum": "SQL, Python",
    "proximoPasso": "Privacidade por design.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Privacidade por design."
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
      "<strong>Stack comum:</strong> SQL, AWS, GCP, Azure",
      "<strong>Próximo passo:</strong> Custo é métrica de engenharia.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Custo é métrica de engenharia."
    ],
    "dica": "Custo é métrica de engenharia.",
    "stackComum": "SQL, AWS, GCP, Azure",
    "proximoPasso": "Custo é métrica de engenharia.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Custo é métrica de engenharia."
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
      "<strong>Stack comum:</strong> Solidity, JavaScript, Rust",
      "<strong>Próximo passo:</strong> Segurança primeiro.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Segurança primeiro."
    ],
    "dica": "Segurança primeiro.",
    "stackComum": "Solidity, JavaScript, Rust",
    "proximoPasso": "Segurança primeiro.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Segurança primeiro."
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
      "<strong>Stack comum:</strong> Python, OpenCV, PyTorch",
      "<strong>Próximo passo:</strong> Dados rotulados são o gargalo.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Dados rotulados são o gargalo."
    ],
    "dica": "Dados rotulados são o gargalo.",
    "stackComum": "Python, OpenCV, PyTorch",
    "proximoPasso": "Dados rotulados são o gargalo.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Dados rotulados são o gargalo."
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
      "<strong>Stack comum:</strong> Python, Hugging Face, PyTorch",
      "<strong>Próximo passo:</strong> Gold set de avaliação cedo.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Gold set de avaliação cedo."
    ],
    "dica": "Gold set de avaliação cedo.",
    "stackComum": "Python, Hugging Face, PyTorch",
    "proximoPasso": "Gold set de avaliação cedo.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Gold set de avaliação cedo."
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
      "<strong>Stack comum:</strong> C++, Python, Linux",
      "<strong>Próximo passo:</strong> Simulador antes de hardware caro.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Simulador antes de hardware caro."
    ],
    "dica": "Simulador antes de hardware caro.",
    "stackComum": "C++, Python, Linux",
    "proximoPasso": "Simulador antes de hardware caro.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Simulador antes de hardware caro."
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
      "<strong>Stack comum:</strong> C#, Unity (C#), C++",
      "<strong>Próximo passo:</strong> Conforto do usuário é requisito.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Conforto do usuário é requisito."
    ],
    "dica": "Conforto do usuário é requisito.",
    "stackComum": "C#, Unity (C#), C++",
    "proximoPasso": "Conforto do usuário é requisito.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Conforto do usuário é requisito."
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
      "<strong>Stack comum:</strong> C++, Rust, C",
      "<strong>Próximo passo:</strong> Ouça o bug.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Ouça o bug."
    ],
    "dica": "Ouça o bug.",
    "stackComum": "C++, Rust, C",
    "proximoPasso": "Ouça o bug.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Ouça o bug."
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
      "<strong>Stack comum:</strong> C++, Java, Python, SQL",
      "<strong>Próximo passo:</strong> Testes e conformidade.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Testes e conformidade."
    ],
    "dica": "Testes e conformidade.",
    "stackComum": "C++, Java, Python, SQL",
    "proximoPasso": "Testes e conformidade.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Testes e conformidade."
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
      "<strong>Stack comum:</strong> SQL, Linux, Bash / Shell",
      "<strong>Próximo passo:</strong> Notas de caso salvam o time.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Notas de caso salvam o time."
    ],
    "dica": "Notas de caso salvam o time.",
    "stackComum": "SQL, Linux, Bash / Shell",
    "proximoPasso": "Notas de caso salvam o time.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Notas de caso salvam o time."
  },
  {
    "nome": "Customer Success técnico",
    "desc": "Adoção de produto B2B.",
    "langs": [
      "SQL",
      "Markdown"
    ],
    "detalhes": [
      "<strong>Stack comum:</strong> SQL, Markdown",
      "<strong>Próximo passo:</strong> Ouça o workflow real do cliente.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Ouça o workflow real do cliente."
    ],
    "dica": "Ouça o workflow real do cliente.",
    "stackComum": "SQL, Markdown",
    "proximoPasso": "Ouça o workflow real do cliente.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Ouça o workflow real do cliente."
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
      "<strong>Stack comum:</strong> AWS, Azure, SQL, Java",
      "<strong>Próximo passo:</strong> Documente limites.",
      "<strong>Mercado:</strong> Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Documente limites."
    ],
    "dica": "Documente limites.",
    "stackComum": "AWS, Azure, SQL, Java",
    "proximoPasso": "Documente limites.",
    "mercadoTexto": "Demanda existe no Brasil e no exterior, com variação por senioridade e stack. Documente limites."
  }
];
const DP_CONCEITOS_LOGICA = [
  {
    "nome": "Teste de mesa",
    "desc": "Simular o programa no papel.",
    "detalhes": [
      "Colunas: passo, variáveis, saída.",
      "Ótimo para laços e condições.",
      "Exercício: while contando de 1 a 5."
    ]
  },
  {
    "nome": "Escopo de variáveis",
    "desc": "Onde cada variável existe no código.",
    "detalhes": [
      "Bloco, função e global.",
      "Prefira const/let a var em JavaScript.",
      "Evite poluir o escopo global."
    ]
  },
  {
    "nome": "Operadores",
    "desc": "Símbolos de cálculo, comparação e lógica.",
    "detalhes": [
      "Aritméticos + - * / %",
      "Comparação > < >= <= === !==",
      "Lógicos && || !",
      "Use parênteses para deixar a ordem clara."
    ]
  },
  {
    "nome": "Condicionais (if/else)",
    "desc": "Desviar o fluxo conforme uma condição verdadeira ou falsa.",
    "detalhes": [
      "if / else if / else escolhem caminhos diferentes.",
      "Compare com === em JS (valor e tipo).",
      "Operadores: && (e), || (ou), ! (não).",
      "Exercício: classificar um número em negativo, zero ou positivo.",
      "Erro clássico: usar = (atribuir) em vez de === (comparar)."
    ]
  },
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
    "def": "Interface de comunicação entre sistemas.",
    "termo": "API"
  },
  {
    "term": "Framework",
    "def": "Base com convenções que estrutura o app.",
    "termo": "Framework"
  },
  {
    "term": "Library",
    "def": "Conjunto de funções que você chama.",
    "termo": "Library"
  },
  {
    "term": "IDE",
    "def": "Editor com ferramentas de desenvolvimento.",
    "termo": "IDE"
  },
  {
    "term": "Runtime",
    "def": "Ambiente que executa o programa.",
    "termo": "Runtime"
  },
  {
    "term": "Compile",
    "def": "Traduzir código antes de executar.",
    "termo": "Compile"
  },
  {
    "term": "Repo",
    "def": "Repositório de código versionado.",
    "termo": "Repo"
  },
  {
    "term": "PR",
    "def": "Pull Request — proposta de mudança com revisão.",
    "termo": "PR"
  },
  {
    "term": "CI/CD",
    "def": "Automação de teste e entrega.",
    "termo": "CI/CD"
  },
  {
    "term": "Container",
    "def": "Pacote isolado da aplicação e deps.",
    "termo": "Container"
  },
  {
    "term": "REST",
    "def": "Estilo de API HTTP orientado a recursos.",
    "termo": "REST"
  },
  {
    "term": "ORM",
    "def": "Mapeia objetos para tabelas.",
    "termo": "ORM"
  },
  {
    "term": "Null",
    "def": "Ausência de valor.",
    "termo": "Null"
  },
  {
    "term": "Refactor",
    "def": "Melhorar código sem mudar comportamento externo.",
    "termo": "Refactor"
  },
  {
    "term": "Tech debt",
    "def": "Atalho que gera custo futuro.",
    "termo": "Tech debt"
  },
  {
    "term": "SDK",
    "def": "Kit para desenvolver em uma plataforma.",
    "termo": "SDK"
  },
  {
    "term": "CLI",
    "def": "Programa de linha de comando.",
    "termo": "CLI"
  },
  {
    "term": "Open source",
    "def": "Código disponível para estudo e contribuição.",
    "termo": "Open source"
  },
  {
    "term": "SemVer",
    "def": "Versionamento MAJOR.MINOR.PATCH.",
    "termo": "SemVer"
  },
  {
    "term": "Cache",
    "def": "Armazenamento rápido de resultados frequentes.",
    "termo": "Cache"
  },
  {
    "term": "Index (DB)",
    "def": "Estrutura que acelera busca no banco.",
    "termo": "Index (DB)"
  },
  {
    "term": "Transaction",
    "def": "Bloco atômico no banco (tudo ou nada).",
    "termo": "Transaction"
  },
  {
    "term": "Idempotent",
    "def": "Repetir a operação não altera o resultado final.",
    "termo": "Idempotent"
  },
  {
    "term": "Latency",
    "def": "Tempo de resposta.",
    "termo": "Latency"
  },
  {
    "term": "Throughput",
    "def": "Quantidade processada por unidade de tempo.",
    "termo": "Throughput"
  },
  {
    "term": "SLA/SLO/SLI",
    "def": "Acordo, objetivo e indicador de nível de serviço.",
    "termo": "SLA/SLO/SLI"
  },
  {
    "term": "RAG",
    "def": "Retrieval-Augmented Generation — LLM + busca em documentos.",
    "termo": "RAG"
  },
  {
    "term": "Token (LLM)",
    "def": "Pedaço de texto processado pelo modelo.",
    "termo": "Token (LLM)"
  },
  {
    "term": "Env var",
    "def": "Configuração por variável de ambiente.",
    "termo": "Env var"
  },
  {
    "term": "Secret",
    "def": "Credencial que não deve ir ao código público.",
    "termo": "Secret"
  },
  {
    "term": "Load balancer",
    "def": "Distribui tráfego entre instâncias.",
    "termo": "Load balancer"
  },
  {
    "term": "CDN",
    "def": "Rede de distribuição de conteúdo estático.",
    "termo": "CDN"
  },
  {
    "term": "DNS",
    "def": "Resolve nomes para endereços IP.",
    "termo": "DNS"
  },
  {
    "term": "TLS/HTTPS",
    "def": "Criptografia no transporte web.",
    "termo": "TLS/HTTPS"
  },
  {
    "term": "OAuth",
    "def": "Delegação de autorização.",
    "termo": "OAuth"
  },
  {
    "term": "JWT",
    "def": "Token assinados compactos.",
    "termo": "JWT"
  },
  {
    "term": "Monorepo",
    "def": "Vários projetos no mesmo repositório.",
    "termo": "Monorepo"
  },
  {
    "term": "Microservice",
    "def": "Serviço pequeno com deploy independente.",
    "termo": "Microservice"
  },
  {
    "term": "Monolith",
    "def": "Aplicação única deployada junta.",
    "termo": "Monolith"
  },
  {
    "term": "Event-driven",
    "def": "Arquitetura reativa a eventos.",
    "termo": "Event-driven"
  },
  {
    "term": "ACID",
    "def": "Propriedades clássicas de transações.",
    "termo": "ACID"
  },
  {
    "term": "BASE",
    "def": "Modelo mais flexível de consistência eventual.",
    "termo": "BASE"
  },
  {
    "term": "ETL/ELT",
    "def": "Movimentação e transformação de dados.",
    "termo": "ETL/ELT"
  },
  {
    "term": "Data warehouse",
    "def": "Banco analítico integrado.",
    "termo": "Data warehouse"
  },
  {
    "term": "OLTP vs OLAP",
    "def": "Transacional vs analítico.",
    "termo": "OLTP vs OLAP"
  },
  {
    "term": "Feature flag",
    "def": "Liga/desliga comportamento sem redeploy.",
    "termo": "Feature flag"
  },
  {
    "term": "Canary deploy",
    "def": "Liberação gradual para parte do tráfego.",
    "termo": "Canary deploy"
  },
  {
    "term": "Blue-green",
    "def": "Dois ambientes para alternar release.",
    "termo": "Blue-green"
  },
  {
    "term": "Observability",
    "def": "Logs, métricas e traces para entender o sistema.",
    "termo": "Observability"
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
const DP_MERCADO_NOTAS = [
  {
    "titulo": "Júnior no Brasil",
    "texto": "A porta de entrada está mais exigente: empresas pedem Git, uma stack e evidência de projeto. Estágio e open source ainda são os melhores atalhos."
  },
  {
    "titulo": "Remoto internacional",
    "texto": "Inglês + portfólio sólido abrem vagas em product companies. Fusos e comunicação assíncrona importam tanto quanto a stack."
  },
  {
    "titulo": "IA no fluxo de trabalho",
    "texto": "IA acelera quem já revisa código. Vagas pedem cada vez mais quem usa ferramentas com critério, não quem só cola resposta."
  },
  {
    "titulo": "Dados e cloud",
    "texto": "Engenharia de dados, analytics e cloud continuam entre as áreas com melhor relação demanda/oferta no BR e no exterior."
  },
  {
    "titulo": "Mobile e games",
    "texto": "Mobile estabilizou após o boom; games dependem de nicho (mobile live-ops, Unity indie). Portfólio jogável vale mais que certificado."
  },
  {
    "titulo": "Segurança",
    "texto": "Escassez real de profissionais com prática. Compliance (LGPD) e appsec aumentaram verba mesmo em empresas tradicionais."
  }
];
const DP_DICAS = [
  {
    "titulo": "Projeto > playlist infinita",
    "texto": "Escolha um problema seu e entregue uma versão 0.1. Curso sem projeto gruda pouco."
  },
  {
    "titulo": "SQL cedo",
    "texto": "Independente da stack, SQL aparece em vagas de web, dados, QA e até mobile com backend."
  },
  {
    "titulo": "Leia erro completo",
    "texto": "A mensagem de erro é o melhor tutor grátis. Copie inteira antes de pedir ajuda."
  },
  {
    "titulo": "Bloqueios de 45 minutos",
    "texto": "Estude em blocos curtos e frequentes. Maratona de domingo costuma virar abandono na terça."
  },
  {
    "titulo": "Explique para aprender",
    "texto": "Escreva em voz alta ou num README o que o código faz. Se travar, você achou a lacuna."
  },
  {
    "titulo": "Compare com propósito",
    "texto": "Usar o comparador do DevPortal só faz sentido com uma meta (web, dados, mobile…). 'Qual a melhor linguagem?' sem contexto não ajuda."
  }
];
const DP_GUIAS = [
  {
    "titulo": "Como montar um portfólio júnior",
    "resumo": "3 projetos, README claro, deploy se possível.",
    "detalhes": [
      "Problema → solução → stack → como rodar",
      "Um projeto full ciclo (CRUD + auth)",
      "Evite só clones de tutorial sem mudança"
    ]
  },
  {
    "titulo": "Como pedir ajuda no suporte",
    "resumo": "Objetivo, tentativas, erro, trecho mínimo.",
    "detalhes": [
      "O que você queria fazer",
      "O que já tentou",
      "Erro completo",
      "Trecho mínimo que reproduz"
    ]
  },
  {
    "titulo": "Primeira semana de estudos",
    "resumo": "Lógica + Git + um exercício por dia.",
    "detalhes": [
      "Dia 1-2: sequência e variáveis",
      "Dia 3-4: if e while",
      "Dia 5: funções",
      "Dia 6-7: Git init + GitHub"
    ]
  },
  {
    "titulo": "Do zero à primeira API",
    "resumo": "HTTP, JSON, rota, banco.",
    "detalhes": [
      "Entenda GET/POST",
      "Modele uma tabela simples",
      "CRUD mínimo",
      "Teste no Postman"
    ]
  }
];

// NÃO declarar var linguagens/areas — script.js usa const + merge DP_*.
