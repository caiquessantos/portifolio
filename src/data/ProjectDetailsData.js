export const PROJECTS_DETAILS_CONTENT = {
  pt: {
    backBtn: "← Voltar para Projetos",
    topBtn: "↑ Voltar ao topo",
    notFoundTitle: "Projeto não encontrado",
    notFoundDesc:
      "Não foi possível localizar os detalhes deste projeto. Retorne para a lista de projetos e tente novamente.",
    repoBtn: "Ver no GitHub",
    liveBtn: "Ver ao vivo",
    sections: {
      contextLabel: "Contexto & Problema Resolvido",
      architectureLabel: "Arquitetura & Camadas",
      decisionsLabel: "Decisões Técnicas & Implementação",
      featuresLabel: "Entregas & Fluxos Principais",
      stackLabel: "Stack & Ferramentas",
    },
    items: {
      "ceasa-digital": {
        role: "Backend Developer",
        period: "2025.2",
        badge: "ACADÊMICO • PROCURADO PELA CEASA / WEB",
        title: "Ceasa Digital — Plataforma Atacadista B2B",
        summary:
          "Backend em Java e Spring Boot com arquitetura modular em camadas para a digitalização comercial da CEASA em parceria Web, construído a partir de demanda da própria operação para equilibrar as vendas entre os vendedores por meio de uma fila justa.",
        context: {
          title:
            "Demanda direta da CEASA para equilibrar vendas entre vendedores",
          description:
            "O projeto nasceu quando o pessoal da CEASA entrou em contato para digitalizar a operação, já que nem todos os vendedores conseguiam vender de forma equilibrada. A fila justa entra para distribuir melhor as oportunidades de venda entre todos, exigindo controle de estoque/disponibilidade ao montar o carrinho e validação de autorização para cada usuário acessar apenas os próprios pedidos.",
        },
        architecture: [
          {
            title: "Arquitetura em Camadas & DTOs",
            description:
              "Separação entre endpoints REST, regras de negócio e persistência com DTOs para desacoplar o contrato da API das entidades JPA e evitar exposição indevida de dados internos.",
          },
          {
            title: "Persistência Relacional, Índices & Flyway",
            description:
              "Banco PostgreSQL versionado com migrations via Flyway para garantir evolução controlada do schema, aliado a índices para consultas frequentes e relacionamento otimizado com FetchType.LAZY.",
          },
        ],
        decisions: [
          {
            title: "Carrinho, Fila Justa & Conversão em Pedido",
            description:
              "Implementação do fluxo de carrinho: checagem de estoque/disponibilidade na fila ao adicionar itens, aplicação da regra de fila justa para que todos consigam vender e conversão do carrinho em pedido na confirmação da compra.",
          },
          {
            title: "Autorização de Pedidos & Ambiente Docker",
            description:
              "Validação de autorização para que cada usuário consulte e opere apenas sobre os próprios pedidos, com ambiente containerizado em Docker para padronizar execução e testes.",
          },
        ],
        features: [
          "Demanda iniciada pela própria CEASA para resolver o desequilíbrio de vendas entre vendedores.",
          "Fila justa para equilibrar a participação e as vendas entre quem está na fila.",
          "Controle de estoque/disponibilidade no carrinho, conversão em pedido e autorização por usuário.",
          "Base validada que impulsionou a captação de ~R$ 1 milhão para servidores, infraestrutura e continuidade do projeto.",
        ],
      },
      sportify: {
        role: "Backend & Mobile Developer (50% do backend)",
        period: "Projeto em Equipe",
        badge: "ACADÊMICO • ANDROID / SQLITE",
        title: "Sportify — Gerenciamento de Campeonatos Esportivos",
        summary:
          "Aplicativo Android nascido da vivência universitária para organizar campeonatos esportivos que costumavam ter mudanças de horário, data e local avisadas em cima da hora, visando acompanhamento rápido e em tempo real.",
        context: {
          title:
            "Organização de campeonatos universitários e acompanhamento em tempo real",
          description:
            "Na rotina da faculdade, campeonatos e atividades esportivas eram mal organizados e alterações de data, horário ou local frequentemente só chegavam na hora. O Sportify surgiu para centralizar partidas, times, jogadores e estatísticas com a intenção de acompanhamento em tempo real, operando localmente em SQLite sem ORM devido às restrições e decisões do projeto.",
        },
        architecture: [
          {
            title: "Camadas Controller, Interface e DAO",
            description:
              "Organização em controladores de domínio (Campeonato, Jogador, Time, Usuário e Partidas/Estatísticas), interfaces contratuais (i*DAO / iMatches / iStats*) e implementações DAO encapsulando SQLiteDatabase, SQLiteStatement e Cursor.",
          },
          {
            title: "Schema SQLite & Integridade Referencial",
            description:
              "Classe DBCreation gerenciando a criação das tabelas (Usuario, Campeonato, Time, Jogador, Partida, Joga_Campeonato, Joga_Partida, Estatisticas_Futebol e Estatisticas_Volei) com PRAGMA foreign_keys = ON e deleções em cascata onde aplicável.",
          },
        ],
        decisions: [
          {
            title: "Persistência Local em SQLite sem ORM & DTO/DAO",
            description:
              "Uso de SQLiteStatement com bind de parâmetros e leitura explícita via Cursor para operações CRUD em armazenamento local, combinando modelos/DTOs entre camadas e hash de senha em UsuarioDAO via PasswordUtil.",
          },
          {
            title: "Consultas Agregadas para Estatísticas e Rankings",
            description:
              "Queries SQL com JOIN, SUM, GROUP BY e ORDER BY DESC para calcular artilharia, assistências, cartões e bloqueios por campeonato, além de métricas de partidas como mandante e visitante.",
          },
        ],
        features: [
          "Centralização de campeonatos, partidas (data, horário, local e placar), times e jogadores para reduzir falhas de comunicação da rotina universitária.",
          "Vínculo entre times e partidas com identificação de mandante e visitante.",
          "Estatísticas de futebol (gols, assistências, cartões amarelos e vermelhos) e vôlei (pontos e bloqueios).",
          "Rankings e recortes de desempenho por campeonato e mando de campo.",
        ],
      },
      kiqblog: {
        role: "Frontend Developer",
        period: "Projeto Pessoal",
        badge: "ESTUDO PRÁTICO • REACT & FIREBASE",
        title: "KiqBlog — Miniblog com React & Firebase",
        summary:
          "Miniblog desenvolvido para estudo prático de React, React Router DOM, Context API, providers, custom hooks, componentização e primeiro contato com Firebase (Authentication e Firestore), com deploy na Vercel.",
        context: {
          title:
            "Estudo prático de arquitetura React e integração com Firebase",
          description:
            "Projeto criado sem um problema comercial prévio, com foco em praticar organização de componentes, gerenciamento de estado global, rotas, custom hooks e integração com backend gerenciado (Firebase Auth + Firestore), consolidando a base de React no dia a dia.",
        },
        architecture: [
          {
            title: "Componentização & Reaproveitamento",
            description:
              "Estrutura dividida em páginas e componentes reutilizáveis, com componentes genéricos adaptados por props/comportamento em diferentes telas, modais e fluxos de postagem.",
          },
          {
            title: "Context API, Rotas & Custom Hooks",
            description:
              "Uso de Context API e providers para compartilhar estado (como autenticação), React Router DOM para navegação e proteção de rotas, e custom hooks para encapsular operações de leitura, escrita, atualização, exclusão, modais e busca.",
          },
        ],
        decisions: [
          {
            title: "Firebase Auth & Firestore no Lugar de API Própria",
            description:
              "Escolha do Firebase para autenticação de usuários e persistência de documentos em tempo real/nuvem sem precisar subir um servidor backend próprio durante o estudo de frontend.",
          },
          {
            title: "Encapsulamento de CRUD e Fluxos em Hooks",
            description:
              "Extração das chamadas ao Firestore e estados de carregamento/erro/confirmação para hooks dedicados, mantendo os componentes de interface mais enxutos e fáceis de refinar.",
          },
        ],
        features: [
          "Cadastro, autenticação e sessão de usuários via Firebase Authentication.",
          "Criação, listagem, edição, exclusão e busca de posts persistidos no Firestore.",
          "Componentes reutilizáveis, modais e hooks customizados para separar lógica de apresentação.",
          "Aplicação publicada na Vercel a partir do repositório no GitHub.",
        ],
      },
      "gerenciador-de-tarefas-angular": {
        role: "Frontend Developer",
        period: "Projeto Pessoal",
        badge: "ESTUDO PRÁTICO • ANGULAR & TYPESCRIPT",
        title: "Gerenciador de Tarefas — Angular 13 & TypeScript",
        summary:
          "Aplicação web de lista de tarefas desenvolvida para estudo de Angular e TypeScript, estruturada com módulo de feature, rotas, serviço centralizado, diretiva e persistência no LocalStorage.",
        context: {
          title:
            "Prática de arquitetura modular, rotas e formulários no Angular",
          description:
            "Projeto de estudo focado em entender a estrutura do Angular — módulos, roteamento por feature, injeção de dependência via serviço, validação de formulários e manipulação de estado/persistência no navegador via LocalStorage.",
        },
        architecture: [
          {
            title: "Módulo de Feature & Rotas Dedicadas",
            description:
              "Organização em TarefasModule integrando componentes de listagem, cadastro e edição com rotas específicas (/tarefas/listar, /tarefas/cadastrar e /tarefas/editar/:id) acopladas ao roteamento principal.",
          },
          {
            title: "Serviço Centralizado & Diretiva",
            description:
              "Centralização das operações de listar, cadastrar, buscar por ID, atualizar, remover e alternar status em TarefaService, acompanhada de diretiva customizada (TarefaConcluiaDirective) no módulo.",
          },
        ],
        decisions: [
          {
            title: "Persistência Local via LocalStorage",
            description:
              "Armazenamento das tarefas no LocalStorage pelo serviço para manter os dados entre recarregamentos da página sem exigir backend externo neste projeto de estudo.",
          },
          {
            title: "Formulários com NgForm & Navegação Programática",
            description:
              "Uso de FormsModule, @ViewChild e NgForm para validar dados antes de salvar ou atualizar, redirecionando para a listagem via Router após a ação.",
          },
        ],
        features: [
          "Listagem de tarefas com alternância de status e confirmação antes da remoção.",
          "Fluxos dedicados de cadastro e edição de tarefas com validação de formulário.",
          "Persistência local no LocalStorage e deploy na Vercel.",
        ],
      },
      "api-rest-pessoas-e-tarefas-spring": {
        role: "Backend Developer",
        period: "Estudo Prático",
        badge: "ESTUDO PRÁTICO • SPRING BOOT 3 & MYSQL",
        title: "API REST CRUD em Spring Boot & MySQL",
        summary:
          "API RESTful em Java 18 e Spring Boot 3.0.12 com MySQL, Spring Data JPA, DozerMapper e padrão Value Object (PersonVO) para operações CRUD de pessoas, mapeamento de objetos e tratamento global de exceções.",
        context: {
          title:
            "Prática de API RESTful com Spring Boot 3, VO/Mapper e tratamento de erros",
          description:
            "Projeto de estudo focado na estruturação de uma API REST com Spring Boot e MySQL (base person e tabela persons), separando o modelo persistido (Person) do objeto exposto/trafegado (PersonVO) via DozerMapper e padronizando respostas de erro HTTP.",
        },
        architecture: [
          {
            title: "Camadas Controller, Service, Repository e VO",
            description:
              "Separação em PersonController (/pessoas), PersonServices (@Service), PersonRepository (JpaRepository<Person, Long>), entidade Person e PersonVO mapeados por DozerMapper.",
          },
          {
            title: "Tratamento Global de Exceções",
            description:
              "Exceção de domínio ResourceNotFoundExeption (HTTP 404) e manipulador global com @ControllerAdvice (CustomizedResponseEntityExceptionHandler) retornando ExceptionResponse estruturado.",
          },
        ],
        decisions: [
          {
            title: "Encapsulamento com PersonVO & DozerMapper",
            description:
              "Conversão entre Person e PersonVO por meio de DozerMapper nos fluxos de criação, atualização, busca por ID e listagem para desacoplar a representação da API da entidade JPA.",
          },
          {
            title: "Endpoints REST & Resposta 204 na Exclusão",
            description:
              "Rotas em /pessoas (/criar, /atualizar, GET /pessoas, GET /pessoas/{id} e /deletar/{id} devolvendo ResponseEntity.noContent().build()), configuradas com MySQL e Spring Data JPA.",
          },
        ],
        features: [
          "Criação, atualização, listagem geral, busca por ID e exclusão de registros em /pessoas.",
          "Mapeamento de objetos entre entidade Person e PersonVO com DozerMapper.",
          "Respostas padronizadas de erro via @ControllerAdvice para recurso não encontrado (404) e falhas gerais (500).",
        ],
      },
      "crud-jpa-hibernate-lista-telefonica": {
        role: "Backend Developer",
        period: "Estudo Prático",
        badge: "ESTUDO PRÁTICO • JPA, HIBERNATE & MYSQL",
        title: "CRUD Relacional JPA & Hibernate — Lista Telefônica",
        summary:
          "Aplicação em Java com JPA, Hibernate e MySQL para estudo de mapeamento relacional ManyToOne e OneToMany entre Telefone, Aluno e Professor, com DAO genérico, controle de transações e menu em console.",
        context: {
          title:
            "Estudo prático de relacionamentos ManyToOne / OneToMany e transações JPA",
          description:
            "Projeto criado para estudar mapeamento objeto-relacional com JPA/Hibernate e MySQL: modelar Telefone vinculado a Aluno ou Professor (@ManyToOne e @OneToMany), gerenciar transações com EntityManager e validar regras de unicidade de CPF e número.",
        },
        architecture: [
          {
            title: "Modelagem JPA (ManyToOne e OneToMany)",
            description:
              "Entidades Aluno, Professor e Telefone mapeadas com JPA/Hibernate (persistence.xml com unidade MuitospraUm e MySQL), onde Telefone referencia Aluno e Professor via @ManyToOne e cada pessoa mapeia seus telefones via @OneToMany(mappedBy = ...).",
          },
          {
            title: "DAO Genérico, DAOs Específicos & Controle",
            description:
              "Classe genérica DAO<E> encapsulando EntityManagerFactory/EntityManager, abrirTransacao(), fecharTransacao(), inserir(), obterTodos(), obterPorId() e remover(), estendida por AlunoDAO, ProfessorDAO e TelefoneDAO e orquestrada por classes de controle e InterfaceUser.",
          },
        ],
        decisions: [
          {
            title:
              "Controle Explícito de Transações & Validação de Duplicidade",
            description:
              "Abertura e fechamento explícitos de transação nas operações de escrita e edição, com checagens para impedir CPF ou número de telefone duplicado e geração de matrícula para aluno.",
          },
          {
            title: "Remoção Coordenada de Contato e Pessoa Vinculada",
            description:
              "Na exclusão de um contato, o fluxo remove o registro de Telefone e também o Aluno ou Professor associado a ele, mantendo a consistência dos dados no MySQL.",
          },
        ],
        features: [
          "Cadastro de alunos (com geração de matrícula) e professores com telefone e operadora.",
          "Listagem separada de contatos de alunos e professores e busca por ID.",
          "Edição de CPF, nome, número e operadora com validação de campos e duplicidade.",
          "Remoção de contato e da entidade de aluno/professor vinculada.",
        ],
      },
    },
  },
  en: {
    backBtn: "← Back to Projects",
    topBtn: "↑ Back to top",
    notFoundTitle: "Project not found",
    notFoundDesc:
      "We could not find details for this project. Return to the projects list and try again.",
    repoBtn: "View on GitHub",
    liveBtn: "Live demo",
    sections: {
      contextLabel: "Context & Problem Solved",
      architectureLabel: "Architecture & Layers",
      decisionsLabel: "Technical Decisions & Implementation",
      featuresLabel: "Key Deliverables & Flows",
      stackLabel: "Stack & Tools",
    },
    items: {
      "ceasa-digital": {
        role: "Backend Developer",
        period: "2025.2",
        badge: "ACADEMIC • CEASA REQUEST / WEB",
        title: "Ceasa Digital — B2B Wholesale Platform",
        summary:
          "Java and Spring Boot backend with a modular layered architecture for CEASA's Web commercial digitalization, built from a request by CEASA to balance sales across sellers through a fair queue.",
        context: {
          title: "Direct CEASA request to balance sales across sellers",
          description:
            "The project started when the CEASA team reached out to digitize operations because not all sellers were able to sell evenly. A fair queue was designed so everyone gets a fair chance to sell, requiring stock/availability checks during cart actions and authorization checks so users only access their own orders.",
        },
        architecture: [
          {
            title: "Layered Architecture & DTOs",
            description:
              "Clear separation across REST endpoints, business rules, and persistence using DTOs to decouple API contracts from JPA entities and avoid exposing internal domain models directly.",
          },
          {
            title: "Relational Persistence, Indexes & Flyway",
            description:
              "PostgreSQL database versioned with Flyway migrations for repeatable schema evolution, paired with indexes for frequent queries and FetchType.LAZY associations to avoid unnecessary loading.",
          },
        ],
        decisions: [
          {
            title: "Cart, Fair Queue & Order Checkout",
            description:
              "Implemented the cart-to-order lifecycle: checking available stock/queue eligibility when adding items, applying fair-queue rules so sellers have balanced sales opportunities, and converting the cart into an order upon purchase confirmation.",
          },
          {
            title: "Order Authorization & Docker Setup",
            description:
              "Added authorization validation so each user can only view and manage their own orders, backed by a Docker environment for consistent local and test setups.",
          },
        ],
        features: [
          "Initiated by the CEASA team to address uneven sales distribution among sellers.",
          "Fair queue logic to balance sales opportunities across participants in the queue.",
          "Cart stock/availability checks, order conversion, and per-user authorization.",
          "Validated foundation that helped raise ~R$ 1M for servers, infrastructure, and ongoing development.",
        ],
      },
      sportify: {
        role: "Backend & Mobile Developer (~50% of backend)",
        period: "Team Project",
        badge: "ACADEMIC • ANDROID / SQLITE",
        title: "Sportify — Sports Championship Management",
        summary:
          "Android app born from university sports experience to organize tournaments where schedule, date, or venue changes often arrived last-minute, aiming for real-time tracking.",
        context: {
          title:
            "Organizing university tournaments with real-time tracking in mind",
          description:
            "In college sports, tournaments and activities were often poorly organized and changes to dates, times, or locations frequently came up last-minute. Sportify was built to organize matches, teams, players, and stats with real-time tracking in mind, using local SQLite storage without an ORM given project constraints.",
        },
        architecture: [
          {
            title: "Controller, Interface & DAO Layers",
            description:
              "Structured around domain controllers (Championship, Player, Team, User, and Matches/Stats), contract interfaces (i*DAO / iMatches / iStats*), and DAO classes wrapping SQLiteDatabase, SQLiteStatement, and Cursor.",
          },
          {
            title: "SQLite Schema & Foreign Key Integrity",
            description:
              "DBCreation helper defining tables (Usuario, Campeonato, Time, Jogador, Partida, Joga_Campeonato, Joga_Partida, Estatisticas_Futebol, and Estatisticas_Volei) with PRAGMA foreign_keys = ON and cascade deletes where configured.",
          },
        ],
        decisions: [
          {
            title: "Local SQLite Without ORM & DTO/DAO",
            description:
              "Used SQLiteStatement parameter binding and Cursor reads for CRUD operations on local storage, paired with model/DTO objects across layers and password hashing in UsuarioDAO via PasswordUtil.",
          },
          {
            title: "Aggregated SQL Queries for Stats & Leaderboards",
            description:
              "Wrote SQL queries using JOIN, SUM, GROUP BY, and ORDER BY DESC to compute top scorers, assists, cards, and blocks per championship, plus home and away match breakdowns.",
          },
        ],
        features: [
          "Centralized management of championships, matches (date, time, venue, score), teams, and players for college sports.",
          "Team-to-match associations tracking home and away sides.",
          "Soccer stats (goals, assists, yellow/red cards) and volleyball stats (points and blocks).",
          "Championship leaderboards and home/away performance queries.",
        ],
      },
      kiqblog: {
        role: "Frontend Developer",
        period: "Personal Project",
        badge: "HANDS-ON STUDY • REACT & FIREBASE",
        title: "KiqBlog — Miniblog with React & Firebase",
        summary:
          "Miniblog built for hands-on practice with React, React Router DOM, Context API, providers, custom hooks, componentization, and initial Firebase (Authentication and Firestore) integration, deployed on Vercel.",
        context: {
          title:
            "Hands-on study of React architecture and Firebase integration",
          description:
            "Created without a prior external problem statement to practice component structure, shared state via providers/Context API, routing, custom hooks, and working with Firebase Auth and Firestore as a managed backend.",
        },
        architecture: [
          {
            title: "Componentization & Reuse",
            description:
              "Structured into pages and reusable components, including generic components adapted across screens, modals, and post flows.",
          },
          {
            title: "Context API, Routing & Custom Hooks",
            description:
              "Used Context API and providers for shared state (such as auth), React Router DOM for navigation and route handling, and custom hooks to encapsulate CRUD actions, modals, and search.",
          },
        ],
        decisions: [
          {
            title: "Firebase Auth & Firestore Over Custom Backend",
            description:
              "Used Firebase for authentication and document storage so the study could focus on React state, routing, and UI flows without standing up a separate backend service.",
          },
          {
            title: "Encapsulating Data & UI State in Hooks",
            description:
              "Moved Firestore operations and loading/error/modal states into custom hooks to keep page and UI components cleaner and easier to iterate on.",
          },
        ],
        features: [
          "User sign-up, login, and session handling with Firebase Authentication.",
          "Create, read, update, delete, and search posts stored in Firestore.",
          "Reusable components, modals, and custom hooks separating logic from rendering.",
          "Deployed on Vercel from GitHub.",
        ],
      },
      "gerenciador-de-tarefas-angular": {
        role: "Frontend Developer",
        period: "Personal Project",
        badge: "HANDS-ON STUDY • ANGULAR & TYPESCRIPT",
        title: "Task Manager — Angular 13 & TypeScript",
        summary:
          "Task list web app built to study Angular and TypeScript, structured around a feature module, routes, a shared service, a directive, and LocalStorage persistence.",
        context: {
          title:
            "Practicing modular architecture, routing, and forms in Angular",
          description:
            "Study project aimed at practicing core Angular building blocks—feature modules, routing, service-based dependency injection, form validation, and browser persistence via LocalStorage.",
        },
        architecture: [
          {
            title: "Feature Module & Dedicated Routes",
            description:
              "Organized inside TarefasModule with list, create, and edit components wired to dedicated routes (/tarefas/listar, /tarefas/cadastrar, /tarefas/editar/:id) under the root router.",
          },
          {
            title: "Shared Service & Directive",
            description:
              "Centralized listing, creation, lookup by ID, update, deletion, and status toggling in TarefaService, alongside TarefaConcluiaDirective declared in the module.",
          },
        ],
        decisions: [
          {
            title: "LocalStorage Persistence",
            description:
              "Persisted tasks in LocalStorage through the service layer to retain state across reloads without needing a backend API for this study project.",
          },
          {
            title: "NgForm Validation & Router Navigation",
            description:
              "Used FormsModule, @ViewChild, and NgForm to validate submissions on create and edit before navigating back to the task list with Router.",
          },
        ],
        features: [
          "Task list with status toggling and confirmation before deleting items.",
          "Dedicated create and edit views with form validation.",
          "LocalStorage persistence and deployment on Vercel.",
        ],
      },
      "api-rest-pessoas-e-tarefas-spring": {
        role: "Backend Developer",
        period: "Hands-On Study",
        badge: "HANDS-ON STUDY • SPRING BOOT 3 & MYSQL",
        title: "Spring Boot & MySQL REST CRUD API",
        summary:
          "RESTful API built with Java 18 and Spring Boot 3.0.12, MySQL, Spring Data JPA, DozerMapper, and the Value Object pattern (PersonVO) for person CRUD operations, object mapping, and global exception handling.",
        context: {
          title:
            "Practicing RESTful APIs with Spring Boot 3, VO/Mapper, and error handling",
          description:
            "Study project focused on building a REST API with Spring Boot and MySQL (person database and persons table), separating the persisted model (Person) from the API representation (PersonVO) via DozerMapper and standardizing HTTP error responses.",
        },
        architecture: [
          {
            title: "Controller, Service, Repository & VO Layers",
            description:
              "Organized into PersonController (/pessoas), PersonServices (@Service), PersonRepository (JpaRepository<Person, Long>), Person entity, and PersonVO mapped via DozerMapper.",
          },
          {
            title: "Global Exception Handling",
            description:
              "Custom ResourceNotFoundExeption (HTTP 404) and @ControllerAdvice handler (CustomizedResponseEntityExceptionHandler) returning structured ExceptionResponse payloads.",
          },
        ],
        decisions: [
          {
            title: "PersonVO Encapsulation & DozerMapper",
            description:
              "Mapped between Person and PersonVO through DozerMapper across create, update, find-by-ID, and list operations to keep persistence entities decoupled from API payloads.",
          },
          {
            title: "REST Endpoints & 204 No Content on Delete",
            description:
              "Exposed /pessoas routes (/criar, /atualizar, GET /pessoas, GET /pessoas/{id}, and /deletar/{id} returning ResponseEntity.noContent().build()) backed by MySQL and Spring Data JPA.",
          },
        ],
        features: [
          "Create, update, list all, fetch by ID, and delete person records under /pessoas.",
          "Object mapping between Person and PersonVO using DozerMapper.",
          "Consistent error responses via @ControllerAdvice for not-found (404) and general errors (500).",
        ],
      },
      "crud-jpa-hibernate-lista-telefonica": {
        role: "Backend Developer",
        period: "Hands-On Study",
        badge: "HANDS-ON STUDY • JPA, HIBERNATE & MYSQL",
        title: "JPA & Hibernate Relational CRUD — Phone Directory",
        summary:
          "Java application with JPA, Hibernate, and MySQL studying ManyToOne and OneToMany mappings across Telefone, Aluno, and Professor, using a generic DAO, manual transaction management, and a console menu.",
        context: {
          title:
            "Hands-on study of ManyToOne / OneToMany mappings and JPA transactions",
          description:
            "Built to practice ORM mappings with JPA/Hibernate and MySQL: modeling Telefone linked to Aluno or Professor (@ManyToOne and @OneToMany), managing EntityManager transactions, and checking duplicate CPF or phone numbers.",
        },
        architecture: [
          {
            title: "JPA Mappings (ManyToOne and OneToMany)",
            description:
              "Aluno, Professor, and Telefone entities mapped with JPA/Hibernate (persistence.xml using the MuitospraUm unit and MySQL), where Telefone references Aluno and Professor via @ManyToOne and each person maps phones via @OneToMany(mappedBy = ...).",
          },
          {
            title: "Generic DAO, Specific DAOs & Control Layer",
            description:
              "Generic DAO<E> wrapping EntityManagerFactory/EntityManager, abrirTransacao(), fecharTransacao(), inserir(), obterTodos(), obterPorId(), and remover(), extended by AlunoDAO, ProfessorDAO, and TelefoneDAO and driven by control classes and InterfaceUser.",
          },
        ],
        decisions: [
          {
            title: "Explicit Transaction Lifecycle & Duplicate Checks",
            description:
              "Explicitly opened and committed transactions around writes and edits, with checks to prevent duplicate CPF or phone numbers and automatic student registration number generation.",
          },
          {
            title: "Coordinated Contact & Linked Person Deletion",
            description:
              "Deleting a contact removes both the Telefone record and the associated Aluno or Professor entity to keep MySQL data consistent.",
          },
        ],
        features: [
          "Create students (with generated registration number) and professors with phone and carrier info.",
          "Separate listing for student and professor contacts plus lookup by ID.",
          "Edit CPF, name, phone number, and carrier with input and duplicate validation.",
          "Delete a contact along with its linked student or professor record.",
        ],
      },
    },
  },
};
