// ==========================================
// DevPortal — data.js
// Módulo de conteúdo. Carregar ANTES de script.js:
//   <script src="data.js"></script>
//   <script src="script.js" defer></script>
// Motivo: separar dados volumosos da lógica da aplicação,
// facilitar manutenção e permitir reutilizar o conteúdo.
// ==========================================

const DP_LINGUAGENS = [
  {
    "nome": "Solidity",
    "tag": "Blockchain",
    "categoria": "linguagem",
    "desc": "Contratos inteligentes na Ethereum e chains EVM.",
    "nivel": "Iniciante",
    "mercado": "Alta demanda no mercado brasileiro e global.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Blockchain",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "C",
      "COBOL",
      "MATLAB"
    ]
  },
  {
    "nome": "C",
    "tag": "Sistemas",
    "categoria": "linguagem",
    "desc": "Base de sistemas operacionais, embarcados e performance nativa.",
    "nivel": "Iniciante a intermediário",
    "mercado": "Demanda estável, com picos em setores específicos.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Sistemas",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "COBOL",
      "MATLAB"
    ]
  },
  {
    "nome": "COBOL",
    "tag": "Mainframe",
    "categoria": "linguagem",
    "desc": "Legado bancário e governamental em mainframes.",
    "nivel": "Intermediário",
    "mercado": "Nicho bem pago, porém com menos vagas abertas.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Mainframe",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "MATLAB"
    ]
  },
  {
    "nome": "MATLAB",
    "tag": "Científico",
    "categoria": "linguagem",
    "desc": "Engenharia, controle e protótipos numéricos.",
    "nivel": "Intermediário a avançado",
    "mercado": "Crescimento acelerado nos últimos anos.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Científico",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "PowerShell",
    "tag": "Automação",
    "categoria": "linguagem",
    "desc": "Automação Windows/Azure orientada a objetos.",
    "nivel": "Avançado",
    "mercado": "Base quase obrigatória em qualquer stack moderna.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Automação",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "F#",
    "tag": "Funcional .NET",
    "categoria": "linguagem",
    "desc": "Funcional-first no ecossistema .NET.",
    "nivel": "Iniciante",
    "mercado": "Alta demanda no mercado brasileiro e global.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Funcional .NET",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Clojure",
    "tag": "Funcional JVM",
    "categoria": "linguagem",
    "desc": "Lisp moderno na JVM com imutabilidade.",
    "nivel": "Iniciante a intermediário",
    "mercado": "Demanda estável, com picos em setores específicos.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Funcional JVM",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Crystal",
    "tag": "Sistemas",
    "categoria": "linguagem",
    "desc": "Sintaxe Ruby com compilação nativa e tipagem estática.",
    "nivel": "Intermediário",
    "mercado": "Nicho bem pago, porém com menos vagas abertas.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Sistemas",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Zig",
    "tag": "Sistemas",
    "categoria": "linguagem",
    "desc": "Sistemas modernos, interoperável com C, sem GC.",
    "nivel": "Intermediário a avançado",
    "mercado": "Crescimento acelerado nos últimos anos.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Sistemas",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Nim",
    "tag": "Sistemas",
    "categoria": "linguagem",
    "desc": "Sintaxe Python-like com performance próxima de C.",
    "nivel": "Avançado",
    "mercado": "Base quase obrigatória em qualquer stack moderna.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Sistemas",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Perl",
    "tag": "Scripting",
    "categoria": "linguagem",
    "desc": "Manipulação de texto e automação clássica.",
    "nivel": "Iniciante",
    "mercado": "Alta demanda no mercado brasileiro e global.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Scripting",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Haskell",
    "tag": "Funcional",
    "categoria": "linguagem",
    "desc": "Funcional pura com tipagem forte — base teórica sólida.",
    "nivel": "Iniciante a intermediário",
    "mercado": "Demanda estável, com picos em setores específicos.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Funcional",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Elixir",
    "tag": "Concorrência",
    "categoria": "linguagem",
    "desc": "BEAM/Erlang: fault-tolerance e sistemas distribuídos.",
    "nivel": "Intermediário",
    "mercado": "Nicho bem pago, porém com menos vagas abertas.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Concorrência",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Scala",
    "tag": "Big Data",
    "categoria": "linguagem",
    "desc": "Funcional+OO na JVM; base do Apache Spark.",
    "nivel": "Intermediário a avançado",
    "mercado": "Crescimento acelerado nos últimos anos.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Big Data",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Julia",
    "tag": "Científico",
    "categoria": "linguagem",
    "desc": "Alta performance para computação científica.",
    "nivel": "Avançado",
    "mercado": "Base quase obrigatória em qualquer stack moderna.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Científico",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Lua",
    "tag": "Embedded",
    "categoria": "linguagem",
    "desc": "Leve e embutível; jogos e Nginx/OpenResty.",
    "nivel": "Iniciante",
    "mercado": "Alta demanda no mercado brasileiro e global.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Embedded",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Dart",
    "tag": "Mobile",
    "categoria": "linguagem",
    "desc": "Otimizada para Flutter e apps multiplataforma.",
    "nivel": "Iniciante a intermediário",
    "mercado": "Demanda estável, com picos em setores específicos.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Mobile",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Kotlin",
    "tag": "Mobile",
    "categoria": "linguagem",
    "desc": "Oficial Android; também backends JVM.",
    "nivel": "Intermediário",
    "mercado": "Nicho bem pago, porém com menos vagas abertas.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Mobile",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Swift",
    "tag": "Apple",
    "categoria": "linguagem",
    "desc": "Ecossistema iOS, macOS e watchOS.",
    "nivel": "Intermediário a avançado",
    "mercado": "Crescimento acelerado nos últimos anos.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Apple",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Go (Golang)",
    "tag": "Cloud",
    "categoria": "linguagem",
    "desc": "Simples, concorrente e cloud-native (Google).",
    "nivel": "Avançado",
    "mercado": "Base quase obrigatória em qualquer stack moderna.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Cloud",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Rust",
    "tag": "Sistemas",
    "categoria": "linguagem",
    "desc": "Segurança de memória sem garbage collector.",
    "nivel": "Iniciante",
    "mercado": "Alta demanda no mercado brasileiro e global.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Sistemas",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês.",
      "Curva mais íngreme; recompensa em performance e controle."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "TypeScript",
    "tag": "Web",
    "categoria": "linguagem",
    "desc": "JavaScript com tipagem estática.",
    "nivel": "Iniciante a intermediário",
    "mercado": "Demanda estável, com picos em setores específicos.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Web",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês.",
      "Indispensável para front-end e muito usada no back com Node.js."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "JavaScript",
    "tag": "Web",
    "categoria": "linguagem",
    "desc": "Linguagem da web no browser e no Node.js.",
    "nivel": "Intermediário",
    "mercado": "Nicho bem pago, porém com menos vagas abertas.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Web",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês.",
      "Indispensável para front-end e muito usada no back com Node.js."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Python",
    "tag": "Dados/IA",
    "categoria": "linguagem",
    "desc": "Legível; líder em IA, dados e automações.",
    "nivel": "Intermediário a avançado",
    "mercado": "Crescimento acelerado nos últimos anos.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Dados/IA",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês.",
      "Ecossistema forte em IA (PyTorch, TensorFlow) e web (FastAPI, Django)."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Java",
    "tag": "Enterprise",
    "categoria": "linguagem",
    "desc": "Sólida, multiplataforma, Spring Boot e Android legado.",
    "nivel": "Avançado",
    "mercado": "Base quase obrigatória em qualquer stack moderna.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Enterprise",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "C#",
    "tag": "Microsoft",
    "categoria": "linguagem",
    "desc": ".NET, Unity, Azure e APIs modernas.",
    "nivel": "Iniciante",
    "mercado": "Alta demanda no mercado brasileiro e global.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Microsoft",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "C++",
    "tag": "Performance",
    "categoria": "linguagem",
    "desc": "Controle de memória e performance extrema.",
    "nivel": "Iniciante a intermediário",
    "mercado": "Demanda estável, com picos em setores específicos.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Performance",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês.",
      "Curva mais íngreme; recompensa em performance e controle."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "PHP",
    "tag": "Web Backend",
    "categoria": "linguagem",
    "desc": "Ainda alimenta grande parte da web (Laravel, WP).",
    "nivel": "Intermediário",
    "mercado": "Nicho bem pago, porém com menos vagas abertas.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Web Backend",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Ruby",
    "tag": "Web/Startups",
    "categoria": "linguagem",
    "desc": "Produtividade e Rails para MVPs.",
    "nivel": "Intermediário a avançado",
    "mercado": "Crescimento acelerado nos últimos anos.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Web/Startups",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "R",
    "tag": "Estatística",
    "categoria": "linguagem",
    "desc": "Análise quantitativa e visualização acadêmica.",
    "nivel": "Avançado",
    "mercado": "Base quase obrigatória em qualquer stack moderna.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Estatística",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Assembly",
    "tag": "Hardware",
    "categoria": "linguagem",
    "desc": "Instruções do processador; reverso e firmware.",
    "nivel": "Iniciante",
    "mercado": "Alta demanda no mercado brasileiro e global.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Hardware",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Bash / Shell",
    "tag": "DevOps",
    "categoria": "linguagem",
    "desc": "Automação Unix/Linux e pipelines de CI.",
    "nivel": "Iniciante a intermediário",
    "mercado": "Demanda estável, com picos em setores específicos.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: DevOps",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "SQL",
    "tag": "Dados",
    "categoria": "dados",
    "desc": "Consulta e manipulação em bancos relacionais.",
    "nivel": "Intermediário",
    "mercado": "Nicho bem pago, porém com menos vagas abertas.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Dados",
      "Focada em consulta, modelagem ou configuração de dados.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês.",
      "Aprenda JOINs, índices e modelagem antes de frameworks ORM."
    ],
    "relacionados": [
      "Assembly",
      "Bash / Shell",
      "GraphQL"
    ]
  },
  {
    "nome": "GraphQL",
    "tag": "API/Dados",
    "categoria": "dados",
    "desc": "Consulta de API sob demanda, tipada.",
    "nivel": "Intermediário a avançado",
    "mercado": "Crescimento acelerado nos últimos anos.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: API/Dados",
      "Focada em consulta, modelagem ou configuração de dados.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Bash / Shell",
      "SQL",
      "NoSQL Query (MongoDB)"
    ]
  },
  {
    "nome": "NoSQL Query (MongoDB)",
    "tag": "NoSQL",
    "categoria": "dados",
    "desc": "Consultas em documentos JSON-like.",
    "nivel": "Avançado",
    "mercado": "Base quase obrigatória em qualquer stack moderna.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: NoSQL",
      "Focada em consulta, modelagem ou configuração de dados.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês.",
      "Aprenda JOINs, índices e modelagem antes de frameworks ORM."
    ],
    "relacionados": [
      "SQL",
      "GraphQL",
      "Cypher"
    ]
  },
  {
    "nome": "Cypher",
    "tag": "Grafos",
    "categoria": "dados",
    "desc": "Consultas em bancos de grafos (Neo4j).",
    "nivel": "Iniciante",
    "mercado": "Alta demanda no mercado brasileiro e global.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Grafos",
      "Focada em consulta, modelagem ou configuração de dados.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "SQL",
      "GraphQL",
      "NoSQL Query (MongoDB)"
    ]
  },
  {
    "nome": "SPARQL",
    "tag": "Semântica",
    "categoria": "dados",
    "desc": "Consultas RDF / Linked Data.",
    "nivel": "Iniciante a intermediário",
    "mercado": "Demanda estável, com picos em setores específicos.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Semântica",
      "Focada em consulta, modelagem ou configuração de dados.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "SQL",
      "GraphQL",
      "NoSQL Query (MongoDB)"
    ]
  },
  {
    "nome": "PromQL",
    "tag": "Observabilidade",
    "categoria": "dados",
    "desc": "Métricas de séries temporais (Prometheus).",
    "nivel": "Intermediário",
    "mercado": "Nicho bem pago, porém com menos vagas abertas.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Observabilidade",
      "Focada em consulta, modelagem ou configuração de dados.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "SQL",
      "GraphQL",
      "NoSQL Query (MongoDB)"
    ]
  },
  {
    "nome": "JSON / YAML",
    "tag": "Config",
    "categoria": "dados",
    "desc": "Formatos de dados e configuração onipresentes.",
    "nivel": "Intermediário a avançado",
    "mercado": "Crescimento acelerado nos últimos anos.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Config",
      "Focada em consulta, modelagem ou configuração de dados.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "SQL",
      "GraphQL",
      "NoSQL Query (MongoDB)"
    ]
  },
  {
    "nome": "HTML",
    "tag": "Marcação",
    "categoria": "web",
    "desc": "Estrutura e significado do conteúdo web.",
    "nivel": "Avançado",
    "mercado": "Base quase obrigatória em qualquer stack moderna.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Marcação",
      "Complementa a lógica das linguagens de programação.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "PromQL",
      "JSON / YAML",
      "CSS"
    ]
  },
  {
    "nome": "CSS",
    "tag": "Estilo",
    "categoria": "web",
    "desc": "Layout, tipografia, cores e responsividade.",
    "nivel": "Iniciante",
    "mercado": "Alta demanda no mercado brasileiro e global.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Estilo",
      "Complementa a lógica das linguagens de programação.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "JSON / YAML",
      "HTML",
      "HTML5 & CSS3"
    ]
  },
  {
    "nome": "HTML5 & CSS3",
    "tag": "Fundamento Web",
    "categoria": "web",
    "desc": "Base visual moderna da internet.",
    "nivel": "Iniciante a intermediário",
    "mercado": "Demanda estável, com picos em setores específicos.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Fundamento Web",
      "Complementa a lógica das linguagens de programação.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "HTML",
      "CSS",
      "Sass / SCSS"
    ]
  },
  {
    "nome": "Sass / SCSS",
    "tag": "CSS",
    "categoria": "web",
    "desc": "Pré-processador CSS com nesting e mixins.",
    "nivel": "Intermediário",
    "mercado": "Nicho bem pago, porém com menos vagas abertas.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: CSS",
      "Complementa a lógica das linguagens de programação.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "HTML",
      "CSS",
      "HTML5 & CSS3"
    ]
  },
  {
    "nome": "Tailwind CSS",
    "tag": "CSS utilitário",
    "categoria": "web",
    "desc": "Utility-first para UI rápida e consistente.",
    "nivel": "Intermediário a avançado",
    "mercado": "Crescimento acelerado nos últimos anos.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: CSS utilitário",
      "Complementa a lógica das linguagens de programação.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "HTML",
      "CSS",
      "HTML5 & CSS3"
    ]
  },
  {
    "nome": "WebAssembly (WASM)",
    "tag": "Performance Web",
    "categoria": "web",
    "desc": "Código nativo-like no browser.",
    "nivel": "Avançado",
    "mercado": "Base quase obrigatória em qualquer stack moderna.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Performance Web",
      "Complementa a lógica das linguagens de programação.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "HTML",
      "CSS",
      "HTML5 & CSS3"
    ]
  },
  {
    "nome": "Markdown",
    "tag": "Docs",
    "categoria": "web",
    "desc": "Marcação leve para documentação.",
    "nivel": "Iniciante",
    "mercado": "Alta demanda no mercado brasileiro e global.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Docs",
      "Complementa a lógica das linguagens de programação.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "HTML",
      "CSS",
      "HTML5 & CSS3"
    ]
  },
  {
    "nome": "Objective-C",
    "tag": "Apple legado",
    "categoria": "linguagem",
    "desc": "Legado iOS/macOS, interoperável com Swift.",
    "nivel": "Iniciante a intermediário",
    "mercado": "Demanda estável, com picos em setores específicos.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Apple legado",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Groovy",
    "tag": "JVM Script",
    "categoria": "linguagem",
    "desc": "Dinâmica na JVM; Gradle e Jenkins.",
    "nivel": "Intermediário",
    "mercado": "Nicho bem pago, porém com menos vagas abertas.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: JVM Script",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "V",
    "tag": "Sistemas",
    "categoria": "linguagem",
    "desc": "Simples, compilação rápida, inspirada em Go.",
    "nivel": "Intermediário a avançado",
    "mercado": "Crescimento acelerado nos últimos anos.",
    "quandoAprender": "Bom ponto de partida se o objetivo se alinha à área desta linguagem.",
    "detalhes": [
      "Categoria principal: Sistemas",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "JavaScript (Node.js)",
    "tag": "Backend JS",
    "categoria": "linguagem",
    "desc": "JavaScript no servidor — APIs, CLIs e tooling.",
    "nivel": "Avançado",
    "mercado": "Base quase obrigatória em qualquer stack moderna.",
    "quandoAprender": "Faça sentido depois de dominar lógica e uma linguagem mais geral.",
    "detalhes": [
      "Categoria principal: Backend JS",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês.",
      "Indispensável para front-end e muito usada no back com Node.js."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  },
  {
    "nome": "Erlang",
    "tag": "Telecom",
    "categoria": "linguagem",
    "desc": "Concorrência massiva e sistemas que não podem cair.",
    "nivel": "Iniciante",
    "mercado": "Alta demanda no mercado brasileiro e global.",
    "quandoAprender": "Ideal quando você já tem base e quer se especializar.",
    "detalhes": [
      "Categoria principal: Telecom",
      "Possui variáveis, controle de fluxo e funções.",
      "Aparece com frequência em vagas e roadmaps de estudo.",
      "Vale combinar com Git, terminal e um banco de dados.",
      "Comunidade ativa e material de estudo em português e inglês."
    ],
    "relacionados": [
      "Solidity",
      "C",
      "COBOL"
    ]
  }
];

const DP_AREAS = [
  {
    "nome": "Desenvolvimento Web (Fullstack)",
    "desc": "Sites, sistemas e APIs cobrindo cliente e servidor.",
    "langs": [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Python",
      "SQL",
      "GraphQL"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Inteligência Artificial & Ciência de Dados",
    "desc": "Modelos, análise e extração de valor a partir de dados.",
    "langs": [
      "Python",
      "R",
      "SQL",
      "Julia",
      "C++"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Desenvolvimento Mobile",
    "desc": "Apps nativos e multiplataforma para smartphones.",
    "langs": [
      "Kotlin",
      "Swift",
      "Dart",
      "JavaScript",
      "TypeScript"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Backend & Engenharia de APIs",
    "desc": "Servidores, regras de negócio e integrações.",
    "langs": [
      "Java",
      "Go (Golang)",
      "C#",
      "Python",
      "Rust",
      "SQL"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Cibersegurança",
    "desc": "Proteção, pentest e resposta a incidentes.",
    "langs": [
      "Python",
      "C",
      "C++",
      "Assembly",
      "Bash / Shell",
      "SQL"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "DevOps, SRE & Cloud",
    "desc": "CI/CD, infraestrutura como código e confiabilidade.",
    "langs": [
      "Go (Golang)",
      "Python",
      "Bash / Shell",
      "PowerShell"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "GameDev",
    "desc": "Jogos 2D/3D, engines e gameplay.",
    "langs": [
      "C#",
      "C++",
      "Lua",
      "Rust"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "UI/UX & Design de Produto",
    "desc": "Experiência do usuário e interfaces.",
    "langs": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Sistemas Embarcados & IoT",
    "desc": "Hardware, sensores e firmware.",
    "langs": [
      "C",
      "C++",
      "Rust",
      "Assembly",
      "Python"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Data Engineering",
    "desc": "Pipelines, lakes e infraestrutura de dados.",
    "langs": [
      "Python",
      "SQL",
      "Scala",
      "Go (Golang)"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "QA & Qualidade",
    "desc": "Testes manuais, automatizados e cultura de qualidade.",
    "langs": [
      "JavaScript",
      "Python",
      "TypeScript",
      "Java"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Blockchain & Web3",
    "desc": "Smart contracts e aplicações descentralizadas.",
    "langs": [
      "Solidity",
      "Rust",
      "JavaScript",
      "Go (Golang)"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Frontend Especializado",
    "desc": "Performance no browser, acessibilidade e design systems.",
    "langs": [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "WebAssembly (WASM)"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Platform Engineering",
    "desc": "Developer experience e plataformas internas.",
    "langs": [
      "Go (Golang)",
      "Python",
      "TypeScript"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Observabilidade & SRE",
    "desc": "Métricas, logs, traces e confiabilidade.",
    "langs": [
      "Go (Golang)",
      "Python",
      "PromQL",
      "Bash / Shell"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Arquitetura de Software",
    "desc": "Padrões, trade-offs e desenho de sistemas.",
    "langs": [
      "Java",
      "C#",
      "Go (Golang)",
      "TypeScript"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Machine Learning Engineering",
    "desc": "Modelos em produção, MLOps e serving.",
    "langs": [
      "Python",
      "SQL",
      "Go (Golang)"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "ERP & Sistemas Corporativos",
    "desc": "Customização de ERPs e integrações empresariais.",
    "langs": [
      "Java",
      "C#",
      "SQL",
      "Python"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "AR/VR",
    "desc": "Experiências imersivas e engines 3D.",
    "langs": [
      "C#",
      "C++",
      "JavaScript",
      "Swift"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Acessibilidade Digital",
    "desc": "Inclusão, WCAG e interfaces usáveis por todos.",
    "langs": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Engenharia de Dados em Tempo Real",
    "desc": "Streaming e processamento contínuo.",
    "langs": [
      "Java",
      "Scala",
      "Python",
      "SQL"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  },
  {
    "nome": "Low-Code / No-Code",
    "desc": "Entrega rápida com plataformas visuais e automações.",
    "langs": [
      "JavaScript",
      "SQL"
    ],
    "diaADia": "Combina estudo teórico, prática em projetos e leitura de código de terceiros.",
    "softSkills": [
      "Comunicação",
      "Resolução de problemas",
      "Colaboração"
    ],
    "dica": "Monte um projeto pequeno e público (GitHub) para validar o aprendizado."
  }
];

const DP_GLOSSARIO = [
  {
    "termo": "API",
    "def": "Interface que permite a um sistema conversar com outro de forma padronizada, em geral via HTTP."
  },
  {
    "termo": "REST",
    "def": "Estilo de API baseado em recursos e verbos HTTP (GET, POST, PUT, DELETE)."
  },
  {
    "termo": "GraphQL",
    "def": "Linguagem de consulta para APIs em que o cliente pede exatamente os campos necessários."
  },
  {
    "termo": "Framework",
    "def": "Conjunto de ferramentas e convenções que aceleram o desenvolvimento (ex.: React, Django, Spring)."
  },
  {
    "termo": "Biblioteca",
    "def": "Código reutilizável que você chama no seu programa (ex.: lodash, requests)."
  },
  {
    "termo": "SDK",
    "def": "Kit de desenvolvimento com libs, docs e ferramentas para uma plataforma específica."
  },
  {
    "termo": "IDE",
    "def": "Ambiente integrado de desenvolvimento (VS Code, IntelliJ, PyCharm)."
  },
  {
    "termo": "Git",
    "def": "Sistema de controle de versão distribuído, padrão da indústria."
  },
  {
    "termo": "GitHub",
    "def": "Plataforma para hospedar repositórios Git, PRs e colaboração."
  },
  {
    "termo": "CI/CD",
    "def": "Integração e entrega contínuas: automatizar build, teste e deploy."
  },
  {
    "termo": "Container",
    "def": "Empacota app e dependências (Docker) para rodar igual em qualquer ambiente."
  },
  {
    "termo": "Kubernetes",
    "def": "Orquestra containers em escala (deploy, scaling, self-healing)."
  },
  {
    "termo": "Microserviços",
    "def": "Arquitetura em serviços pequenos e independentes que se comunicam por rede."
  },
  {
    "termo": "Monolito",
    "def": "Aplicação única e coesa; mais simples no início, pode ficar difícil de escalar times."
  },
  {
    "termo": "ORM",
    "def": "Mapeia tabelas de banco para objetos no código (Prisma, Hibernate, SQLAlchemy)."
  },
  {
    "termo": "SQL Injection",
    "def": "Ataque que injeta SQL malicioso em entradas mal tratadas."
  },
  {
    "termo": "XSS",
    "def": "Cross-Site Scripting: injeção de script malicioso em páginas web."
  },
  {
    "termo": "JWT",
    "def": "Token assinado usado para autenticação entre cliente e API."
  },
  {
    "termo": "OAuth",
    "def": "Protocolo de autorização (login com Google, GitHub, etc.)."
  },
  {
    "termo": "HTTPS",
    "def": "HTTP com TLS — criptografa o tráfego entre cliente e servidor."
  },
  {
    "termo": "DNS",
    "def": "Traduz nomes de domínio em endereços IP."
  },
  {
    "termo": "CDN",
    "def": "Rede de distribuição de conteúdo para servir arquivos estáticos mais perto do usuário."
  },
  {
    "termo": "Cache",
    "def": "Armazena respostas ou dados para acesso mais rápido (Redis, CDN, browser)."
  },
  {
    "termo": "Load balancer",
    "def": "Distribui tráfego entre várias instâncias do serviço."
  },
  {
    "termo": "Refatoração",
    "def": "Reorganizar código sem mudar o comportamento externo."
  },
  {
    "termo": "Code review",
    "def": "Revisão de código por pares antes de integrar mudanças."
  },
  {
    "termo": "Teste unitário",
    "def": "Testa uma unidade pequena (função/classe) de forma isolada."
  },
  {
    "termo": "Teste e2e",
    "def": "Testa o fluxo completo do ponto de vista do usuário."
  },
  {
    "termo": "TDD",
    "def": "Desenvolver guiado por testes: escreve o teste antes do código."
  },
  {
    "termo": "Agile",
    "def": "Conjunto de práticas iterativas (Scrum, Kanban) para entregar valor em ciclos curtos."
  },
  {
    "termo": "Scrum",
    "def": "Framework ágil com sprints, daily, review e retrospectiva."
  },
  {
    "termo": "Kanban",
    "def": "Fluxo visual de trabalho com limites de WIP."
  },
  {
    "termo": "Tech debt",
    "def": "Atalhos técnicos que cobram juros depois (manutenção mais cara)."
  },
  {
    "termo": "Open source",
    "def": "Software com código aberto para uso, estudo e contribuição."
  },
  {
    "termo": "CLI",
    "def": "Interface de linha de comando."
  },
  {
    "termo": "Runtime",
    "def": "Ambiente que executa o programa (Node, JVM, .NET CLR)."
  },
  {
    "termo": "Compilador",
    "def": "Traduz código-fonte para outro formato (muitas vezes código de máquina)."
  },
  {
    "termo": "Interpretador",
    "def": "Executa o código diretamente, linha a linha ou via bytecode."
  },
  {
    "termo": "Garbage collector",
    "def": "Libera memória automaticamente (JVM, Go, C#); Rust e C não usam da mesma forma."
  },
  {
    "termo": "Null safety",
    "def": "Recursos da linguagem para evitar erros de referência nula."
  },
  {
    "termo": "Type system",
    "def": "Conjunto de regras sobre tipos (estático vs dinâmico, forte vs fraco)."
  },
  {
    "termo": "Paradigma",
    "def": "Estilo de programação: imperativo, OO, funcional, etc."
  },
  {
    "termo": "Design pattern",
    "def": "Solução reutilizável para um problema recorrente de desenho de software."
  },
  {
    "termo": "Clean Code",
    "def": "Práticas para código legível, simples e fácil de mudar."
  },
  {
    "termo": "SOLID",
    "def": "Cinco princípios de desenho OO: SRP, OCP, LSP, ISP e DIP."
  },
  {
    "termo": "DRY",
    "def": "Don't Repeat Yourself — evite duplicação de conhecimento no sistema."
  },
  {
    "termo": "KISS",
    "def": "Keep It Simple — prefira soluções simples."
  },
  {
    "termo": "YAGNI",
    "def": "You Aren't Gonna Need It — não implemente o que não precisa agora."
  },
  {
    "termo": "Semantic versioning",
    "def": "Versionar como MAJOR.MINOR.PATCH conforme o tipo de mudança."
  },
  {
    "termo": "Changelog",
    "def": "Registro legível do que mudou entre versões."
  },
  {
    "termo": "Observabilidade",
    "def": "Capacidade de entender o sistema em produção via logs, métricas e traces."
  },
  {
    "termo": "SLA/SLO/SLI",
    "def": "Acordos e objetivos de nível de serviço e seus indicadores."
  },
  {
    "termo": "Feature flag",
    "def": "Liga ou desliga funcionalidades sem novo deploy."
  },
  {
    "termo": "A/B test",
    "def": "Comparar duas variantes com usuários reais para decidir com dados."
  },
  {
    "termo": "Acessibilidade (a11y)",
    "def": "Tornar interfaces usáveis por pessoas com diferentes capacidades."
  },
  {
    "termo": "SEO",
    "def": "Otimização para mecanismos de busca."
  },
  {
    "termo": "SSR/SSG",
    "def": "Renderização no servidor ou geração estática de páginas."
  },
  {
    "termo": "SPA",
    "def": "Single Page Application — navegação no cliente sem recarregar a página inteira."
  },
  {
    "termo": "PWA",
    "def": "Progressive Web App — site com recursos de app (offline, instalável)."
  },
  {
    "termo": "WebSocket",
    "def": "Canal bidirecional persistente entre cliente e servidor."
  },
  {
    "termo": "gRPC",
    "def": "RPC de alta performance com Protocol Buffers."
  },
  {
    "termo": "Message queue",
    "def": "Fila para desacoplar produtores e consumidores (RabbitMQ, SQS)."
  },
  {
    "termo": "Event-driven",
    "def": "Arquitetura reativa a eventos publicados e consumidos."
  },
  {
    "termo": "Domain-Driven Design",
    "def": "Modelar o software em torno do domínio de negócio."
  },
  {
    "termo": "CQRS",
    "def": "Separar modelos de leitura e escrita."
  },
  {
    "termo": "Event sourcing",
    "def": "Persistir estado como sequência de eventos."
  },
  {
    "termo": "Blue-green deploy",
    "def": "Dois ambientes idênticos para alternar versões com baixo downtime."
  },
  {
    "termo": "Canary release",
    "def": "Liberar para uma fração dos usuários antes do rollout total."
  },
  {
    "termo": "Infrastructure as Code",
    "def": "Infra descrita em arquivos versionados (Terraform, Pulumi)."
  },
  {
    "termo": "Serverless",
    "def": "Executar funções sob demanda sem gerenciar servidores."
  },
  {
    "termo": "Edge computing",
    "def": "Processar mais perto do usuário (edge workers, CDN inteligente)."
  },
  {
    "termo": "Pull Request",
    "def": "Proposta de mudança em um repositório para revisão e merge."
  },
  {
    "termo": "Branching",
    "def": "Isolar trabalho em linhas paralelas de desenvolvimento no Git."
  },
  {
    "termo": "Merge conflict",
    "def": "Quando duas mudanças alteram a mesma região e precisam de resolução manual."
  },
  {
    "termo": "Linter",
    "def": "Ferramenta que aponta problemas de estilo e bugs óbvios estaticamente."
  },
  {
    "termo": "Formatter",
    "def": "Ferramenta que padroniza o estilo do código automaticamente (Prettier, Black)."
  },
  {
    "termo": "Package manager",
    "def": "Gerencia dependências (npm, pip, cargo, maven)."
  },
  {
    "termo": "Virtualenv",
    "def": "Ambiente isolado de dependências Python."
  },
  {
    "termo": "Monorepo",
    "def": "Um repositório contendo vários projetos relacionados."
  },
  {
    "termo": "Changelog-driven",
    "def": "Comunicar mudanças de produto de forma contínua e legível."
  }
];

const DP_TRILHAS = [
  {
    "id": "web",
    "titulo": "Trilha Web Fullstack",
    "nivel": "Iniciante → Avançado",
    "tempo": "6 a 12 meses (dedicação parcial)",
    "resumo": "Do zero até conseguir construir e publicar aplicações web completas.",
    "etapas": [
      {
        "nome": "Fundamentos",
        "itens": [
          "Lógica de programação",
          "HTML semântico",
          "CSS moderno (Flexbox/Grid)",
          "Git e GitHub"
        ]
      },
      {
        "nome": "Front-end",
        "itens": [
          "JavaScript moderno",
          "TypeScript básico",
          "React ou Vue",
          "Consumo de APIs"
        ]
      },
      {
        "nome": "Back-end",
        "itens": [
          "Node.js ou Python",
          "SQL e modelagem",
          "Autenticação (JWT/sessão)",
          "Deploy simples"
        ]
      },
      {
        "nome": "Profissionalização",
        "itens": [
          "Testes",
          "CI básico",
          "Performance e acessibilidade",
          "Portfólio com 2–3 projetos"
        ]
      }
    ]
  },
  {
    "id": "dados",
    "titulo": "Trilha Dados e IA",
    "nivel": "Iniciante → Intermediário",
    "tempo": "8 a 14 meses",
    "resumo": "Base estatística, Python e projetos de análise e ML.",
    "etapas": [
      {
        "nome": "Base",
        "itens": [
          "Lógica e Python",
          "Estatística descritiva",
          "SQL",
          "Pandas e visualização"
        ]
      },
      {
        "nome": "Análise",
        "itens": [
          "EDA",
          "Feature engineering",
          "Notebooks bem documentados",
          "Storytelling com dados"
        ]
      },
      {
        "nome": "ML",
        "itens": [
          "Scikit-learn",
          "Validação de modelos",
          "Métricas certas",
          "Projeto de ponta a ponta"
        ]
      },
      {
        "nome": "Próximos passos",
        "itens": [
          "Deep learning intro",
          "MLOps básico",
          "Portfólio no GitHub/Kaggle"
        ]
      }
    ]
  },
  {
    "id": "mobile",
    "titulo": "Trilha Mobile",
    "nivel": "Iniciante → Intermediário",
    "tempo": "6 a 10 meses",
    "resumo": "Apps publicáveis nas lojas.",
    "etapas": [
      {
        "nome": "Escolha de caminho",
        "itens": [
          "Kotlin (Android)",
          "Swift (iOS)",
          "ou Flutter/Dart multiplataforma"
        ]
      },
      {
        "nome": "UI e navegação",
        "itens": [
          "Layouts",
          "Navegação",
          "Estado",
          "Listas e formulários"
        ]
      },
      {
        "nome": "Dados e rede",
        "itens": [
          "API REST",
          "Armazenamento local",
          "Autenticação"
        ]
      },
      {
        "nome": "Publicação",
        "itens": [
          "Build de release",
          "Lojas",
          "Crash reporting",
          "Polimento de UX"
        ]
      }
    ]
  },
  {
    "id": "devops",
    "titulo": "Trilha DevOps e Cloud",
    "nivel": "Com base prévia de dev",
    "tempo": "6 a 12 meses",
    "resumo": "Do código ao ambiente de produção confiável.",
    "etapas": [
      {
        "nome": "Sistemas",
        "itens": [
          "Linux e shell",
          "Redes básicas",
          "Git avançado"
        ]
      },
      {
        "nome": "Containers",
        "itens": [
          "Docker",
          "Imagens enxutas",
          "Compose"
        ]
      },
      {
        "nome": "Automação",
        "itens": [
          "CI/CD",
          "IaC (Terraform)",
          "Observabilidade"
        ]
      },
      {
        "nome": "Cloud",
        "itens": [
          "Um provedor (AWS/GCP/Azure)",
          "Kubernetes intro",
          "Custo e segurança"
        ]
      }
    ]
  },
  {
    "id": "seguranca",
    "titulo": "Trilha Cibersegurança (visão dev)",
    "nivel": "Intermediário",
    "tempo": "contínuo",
    "resumo": "Segurança aplicada ao desenvolvimento e operações.",
    "etapas": [
      {
        "nome": "Base",
        "itens": [
          "Redes e HTTP",
          "Linux",
          "Scripting (Python/Bash)"
        ]
      },
      {
        "nome": "AppSec",
        "itens": [
          "OWASP Top 10",
          "Auth segura",
          "Headers e HTTPS"
        ]
      },
      {
        "nome": "Prática",
        "itens": [
          "Labs (DVWA, PortSwigger)",
          "Bug bounty ético",
          "Hardening básico"
        ]
      },
      {
        "nome": "Carreira",
        "itens": [
          "Certificações (opcional)",
          "Blue/Red team intro",
          "Documentação clara"
        ]
      }
    ]
  },
  {
    "id": "inicio",
    "titulo": "Trilha Primeiros Passos",
    "nivel": "Absolute beginner",
    "tempo": "4 a 8 semanas",
    "resumo": "Para quem ainda não programou nada.",
    "etapas": [
      {
        "nome": "Mentalidade",
        "itens": [
          "O que é programar",
          "Como estudar com consistência",
          "Montar ambiente (VS Code)"
        ]
      },
      {
        "nome": "Lógica",
        "itens": [
          "Variáveis",
          "Condicionais",
          "Loops",
          "Funções"
        ]
      },
      {
        "nome": "Primeira linguagem",
        "itens": [
          "Python ou JavaScript",
          "Exercícios diários",
          "Primeiro projetinho"
        ]
      },
      {
        "nome": "Comunidade",
        "itens": [
          "GitHub",
          "Pedir feedback",
          "Não estudar só passivamente"
        ]
      }
    ]
  }
];

const DP_FERRAMENTAS = [
  {
    "nome": "VS Code",
    "cat": "Editor",
    "desc": "Editor gratuito e extensível; padrão de facto para a maioria dos devs web."
  },
  {
    "nome": "Git",
    "cat": "Versionamento",
    "desc": "Histórico de mudanças, branches e colaboração."
  },
  {
    "nome": "GitHub",
    "cat": "Colaboração",
    "desc": "Hospeda repositórios, PRs, Actions e portfólio público."
  },
  {
    "nome": "Docker",
    "cat": "Containers",
    "desc": "Empacota a aplicação para rodar igual em qualquer máquina."
  },
  {
    "nome": "Postman / Insomnia",
    "cat": "APIs",
    "desc": "Testar e documentar endpoints HTTP."
  },
  {
    "nome": "Figma",
    "cat": "Design",
    "desc": "Prototipação de interfaces e handoff para devs."
  },
  {
    "nome": "Linux (Ubuntu)",
    "cat": "Sistema",
    "desc": "Ambiente próximo ao de servidores; ótimo para aprender terminal."
  },
  {
    "nome": "PostgreSQL",
    "cat": "Banco",
    "desc": "Banco relacional robusto e open-source, excelente para aprender SQL de verdade."
  },
  {
    "nome": "Redis",
    "cat": "Cache",
    "desc": "Armazenamento em memória para filas, cache e sessões."
  },
  {
    "nome": "Nginx",
    "cat": "Proxy",
    "desc": "Servidor web e reverse proxy amplamente usado em produção."
  },
  {
    "nome": "Vercel / Netlify",
    "cat": "Deploy",
    "desc": "Publicar front-ends e serverless com pouco atrito."
  },
  {
    "nome": "AWS / GCP / Azure",
    "cat": "Cloud",
    "desc": "Provedores de nuvem; escolha um para começar e aprofunde aos poucos."
  },
  {
    "nome": "Notion / Obsidian",
    "cat": "Notas",
    "desc": "Organizar estudos, glossário pessoal e projetos."
  },
  {
    "nome": "ChatGPT / Claude",
    "cat": "Estudo",
    "desc": "Úteis como tutores — valide sempre o que geram e não substitua a prática."
  }
];

const DP_FAQ = [
  {
    "q": "Preciso de faculdade para trabalhar com programação?",
    "a": "Não é obrigatório, mas pode ajudar em concursos, empresas grandes e base teórica. Muitos devs entram por autestudo, bootcamps e portfólio. O que mais conta na prática é conseguir entregar: projetos, GitHub e capacidade de aprender."
  },
  {
    "q": "Qual a primeira linguagem eu devo aprender?",
    "a": "Se quiser web, comece por HTML/CSS e JavaScript. Se quiser dados ou uma base geral limpa, Python. O mais importante é aprender lógica — a sintaxe vem depois."
  },
  {
    "q": "Quanto tempo até conseguir o primeiro emprego?",
    "a": "Varia demais (dedicação, cidade, rede, sorte). Com estudo consistente e portfólio, muitas pessoas relatam de 6 a 18 meses. Foque em projetos reais e em comunicar o que você fez."
  },
  {
    "q": "Inglês é obrigatório?",
    "a": "Não no dia um, mas é um multiplicador enorme: documentação, vagas remotas e comunidades. Estude em paralelo, mesmo que devagar."
  },
  {
    "q": "Certificados valem a pena?",
    "a": "Ajudam a estruturar o estudo e a mostrar iniciativa, mas raramente substituem um bom projeto. Prefira certificados ligados a prática."
  },
  {
    "q": "Melhor estudar sozinho ou em bootcamp?",
    "a": "Depende do seu perfil e orçamento. Sozinho exige disciplina; bootcamp oferece ritmo e rede. Em ambos os casos, o portfólio continua sendo o centro."
  },
  {
    "q": "Como montar um portfólio bom?",
    "a": "Dois a quatro projetos bem acabados batem vinte tutoriais pela metade. README claro, deploy online e código organizado."
  },
  {
    "q": "Preciso saber matemática avançada?",
    "a": "Para a maioria das vagas web e mobile, não. Para IA, gráficos, jogos e algumas áreas de dados, sim — e aí você estuda sob demanda."
  },
  {
    "q": "O que colocar no LinkedIn?",
    "a": "Headline clara (ex.: 'Estudante de desenvolvimento web | React e Node'), projetos com link, e um resumo humano sobre o que você busca."
  },
  {
    "q": "Como lidar com a síndrome do impostor?",
    "a": "É comum. Compare-se com quem você era há três meses, não com seniores no Twitter. Pequenos projetos concluídos são o antídoto."
  }
];

const DP_DICAS = [
  {
    "titulo": "Consistência supera intensidade",
    "texto": "Quarenta e cinco minutos por dia quase todo dia vencem oito horas só no sábado."
  },
  {
    "titulo": "Aprenda fazendo",
    "texto": "Cada conceito novo merece um mini experimento no código."
  },
  {
    "titulo": "Espaçamento",
    "texto": "Revisar depois de um dia, uma semana e um mês fixa melhor do que reler na hora."
  },
  {
    "titulo": "Ensine",
    "texto": "Escrever um README ou explicar para alguém revela o que você ainda não entendeu."
  },
  {
    "titulo": "Limite o stack",
    "texto": "Evite aprender cinco frameworks ao mesmo tempo. Profundidade primeiro."
  },
  {
    "titulo": "Durma e pause",
    "texto": "Cansaço vira bug mental. Pausas curtas melhoram o raciocínio."
  },
  {
    "titulo": "Leia código alheio",
    "texto": "Repositórios open source bons ensinam organização e estilo de verdade."
  },
  {
    "titulo": "Registre dúvidas",
    "texto": "Uma lista de 'não sei ainda' vira roteiro de estudo da semana seguinte."
  }
];

const DP_GUIAS = [
  {
    "id": "como-estudar",
    "titulo": "Como estudar programação de verdade",
    "paragrafos": [
      "Programar é habilidade prática. Ler é necessário, mas sem digitar e errar o aprendizado gruda pouco.",
      "Monte um ciclo simples: assista ou leia um conceito, reproduza, quebre de propósito, conserte e anote o que aprendeu.",
      "Use o DevPortal para escolher a direção (trilha e linguagem), não como substituto da prática diária."
    ]
  },
  {
    "id": "primeiro-emprego",
    "titulo": "Caminho até a primeira vaga",
    "paragrafos": [
      "Recrutadores olham evidências: GitHub, projetos no ar, clareza ao explicar decisões.",
      "Candidate-se também a estágios e vagas júnior adjacentes (suporte técnico, QA) se fizer sentido na sua região.",
      "Prepare um discurso de dois minutos sobre o projeto de que mais se orgulha — isso aparece em toda entrevista."
    ]
  },
  {
    "id": "stack",
    "titulo": "O que é uma stack?",
    "paragrafos": [
      "Stack é o conjunto de tecnologias usadas em um produto (por exemplo React, Node e PostgreSQL).",
      "Não existe stack universalmente melhor. Existe stack adequada ao problema, ao time e ao prazo.",
      "No início, escolha uma stack comum na sua região para maximizar chances de mentoria e vagas."
    ]
  },
  {
    "id": "conta-devportal",
    "titulo": "Sobre a conta no DevPortal",
    "paragrafos": [
      "A conta local guarda e-mail, favoritos e preferências neste navegador (localStorage).",
      "Não é um login na nuvem: limpar dados do site apaga a conta neste aparelho.",
      "No futuro, o mesmo desenho pode ser ligado a um backend real (API + banco) sem mudar a experiência de uso."
    ]
  }
];

const DP_MERCADO_NOTAS = [
  {
    "titulo": "Web ainda absorve muita gente nova",
    "texto": "Há volume de vagas, mas também muita concorrência em júnior. Diferencie-se com projetos bem acabados."
  },
  {
    "titulo": "Dados e IA pedem base",
    "texto": "Python sozinho não basta: estatística, SQL e pensamento analítico fazem diferença."
  },
  {
    "titulo": "Mobile nativo versus multiplataforma",
    "texto": "Flutter e React Native aceleram; nativo (Kotlin/Swift) ainda vence em casos exigentes."
  },
  {
    "titulo": "DevOps não é só ferramenta",
    "texto": "Cultura de responsabilidade sobre o que vai para produção importa tanto quanto Kubernetes."
  },
  {
    "titulo": "Segurança é transversal",
    "texto": "Todo dev deveria conhecer o OWASP Top 10, mesmo sem seguir carreira de segurança."
  },
  {
    "titulo": "Soft skills importam",
    "texto": "Comunicar trade-offs e pedir ajuda cedo costuma ser o que separa o júnior que evolui do que estagna."
  }
];

/** Expõe aliases usados pelo script principal, se ainda não existirem */
if (typeof linguagens === "undefined") {
  // preenchido no script após merge; data fica disponível globalmente
}
