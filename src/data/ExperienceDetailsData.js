export const EXPERIENCE_DETAILS_BASE = {
  "touch-health": {
    slug: "touch-health",
    techStack: [
      "Java 8 & 21",
      "Spring MVC",
      "Hibernate / JPA",
      "SOLID",
      "ReactJS",
      "TypeScript",
      "JavaScript",
      "JSP",
      "FreeMarker (FTL)",
      "AJAX",
      "PostgreSQL",
      "Oracle SQL",
      "PL/SQL",
      "Liquibase",
      "JUnit",
      "Groovy",
      "Selenium",
      "Git",
      "Gerrit",
      "OpenAPI / Swagger",
      "Scrum",
      "Jira",
    ],
  },
};

export const EXPERIENCE_DETAILS_CONTENT = {
  pt: {
    backBtn: "← Voltar para Experiência",
    notFoundTitle: "Experiência não encontrada",
    notFoundDesc:
      "O registro solicitado não existe ou o endereço está incorreto.",
    sections: {
      contextLabel: "CONTEXTO DO PRODUTO & AMBIENTE",
      metricsLabel: "IMPACTO & MÉTRICAS",
      starLabel: "ESTUDO DE CASO — MÉTODO STAR",
      techFrontsLabel: "FRENTES TÉCNICAS NA PRÁTICA",
      processLabel: "ENGENHARIA, QA & LIDERANÇA DE ESTÁGIO",
      stackLabel: "STACK & FERRAMENTAS UTILIZADAS",
    },
    items: {
      "touch-health": {
        badge: "ESTÁGIO • FULL STACK",
        company: "Touch Health (Touch Tecnologia e Informática)",
        role: "Desenvolvedor Full Stack",
        period: "Até Setembro de 2026",
        workMode: "Engenharia de Software • Saúde & Diagnósticos",
        summary:
          "Atuação no desenvolvimento evolutivo, sustentação e qualidade de sistemas do ecossistema Touch Health — trabalhando diretamente com o MotionLIS, o Motion Dasa (produto customizado derivado do LIS para a operação da Dasa) e o WiseTouch (plataforma de agendamento inteligente), além de módulos internos voltados ao setor hospitalar e de medicina diagnóstica.",
        productContext: {
          title:
            "Ecossistema Touch Health (MotionLIS, Motion Dasa & WiseTouch)",
          description:
            "Atuação direta nos três principais produtos da empresa — MotionLIS (gestão e automação laboratorial em alta escala), Motion Dasa (produto customizado derivado do LIS para a Dasa) e WiseTouch (plataforma de agendamento inteligente de exames e consultas) — além de sistemas internos. Plataformas de missão crítica que exigem alta disponibilidade, rastreabilidade e rigor técnico antes de cada entrega.",
          clientsLabel:
            "Grandes redes e hospitais atendidos por esses produtos:",
          clients: [
            "Dasa",
            "Rede D'Or",
            "Fleury",
            "Sírio-Libanês",
            "Albert Einstein",
          ],
        },
        metrics: [
          {
            value: "+150%",
            label: "Aceleração no volume de entregas reconhecida pelos devs",
          },
          {
            value: "30%",
            label: "Das entregas do período concluídas diretamente por mim",
          },
          {
            value: "5 a 6",
            label: "Projetos e sistemas rotacionados no ecossistema",
          },
          {
            value: "100%",
            label: "Dos estagiários do squad migrados para equipes fixas",
          },
        ],
        star: [
          {
            key: "S",
            title: "Situação",
            text: "Durante um período de transição interna de três meses, uma equipe formada exclusivamente por estagiários ficou sem liderança formal ou gestor direto enquanto precisava manter o ritmo de desenvolvimento nos sistemas da empresa.",
          },
          {
            key: "T",
            title: "Tarefa",
            text: "Manter o funcionamento completo da equipe de estágio mesmo sem um gestor formal — garantindo o fluxo desde a captura das demandas até a entrega, além da organização operacional e técnica entre os estagiários.",
          },
          {
            key: "A",
            title: "Ação",
            text: "Por sermos os estagiários mais experientes da equipe, eu e outro colega assumimos a liderança do squad de estágio. Além de atuar no código, conduzi code reviews no Gerrit, organizei reuniões de alinhamento, estruturei documentações e planilhas de controle, e geri a realocação de estagiários entre equipes conforme a necessidade dos projetos.",
          },
          {
            key: "R",
            title: "Resultado",
            text: "A equipe manteve plena operação durante toda a transição e acelerou o ritmo de entregas em 150% (métrica apontada pelos próprios desenvolvedores do time), com 30% das entregas concluídas por mim. Ao final do ciclo, todos os estagiários da equipe foram absorvidos e migrados para squads fixos.",
          },
        ],
        technicalFronts: [
          {
            title: "APIs RESTful & Microsserviços",
            description:
              "Desenvolvimento e manutenção de endpoints, regras de negócio e integrações em Java (8 e 21) com Spring MVC e Hibernate/JPA, aplicando princípios SOLID e documentação via OpenAPI/Swagger.",
          },
          {
            title: "Convivência entre Legado & Interfaces Modernas",
            description:
              "Construção de interfaces reativas em ReactJS e TypeScript lado a lado com manutenção evolutiva em telas legadas utilizando JSP, FreeMarker (FTL) e AJAX.",
          },
          {
            title: "Persistência & Versionamento de Schema",
            description:
              "Modelagem e otimização de consultas em PostgreSQL e Oracle SQL (SQL, HQL e PL/SQL) com Hibernate/JPA e controle seguro de migrations via Liquibase.",
          },
          {
            title: "Testes Unitários, Integração & E2E",
            description:
              "Escrita de testes unitários com JUnit, testes de integração com Groovy e testes automatizados de interface/regressão com Selenium para blindar fluxos críticos.",
          },
        ],
        leadershipAndProcess: [
          {
            title: "Padronização de Cenários & Apoio ao QA",
            description:
              "Detalhamento de cenários de teste, pré-condições e impactos técnicos nas tarefas para agilizar a validação da equipe de QA e reduzir idas e vindas entre times.",
          },
          {
            title: "Code Reviews no Gerrit & Alinhamento de Padrões",
            description:
              "Revisão de código via Gerrit (incluindo issues ligadas à esteira de QA) e encaminhamento das demandas para as equipes responsáveis — sempre respeitando o padrão do projeto e alinhando previamente com os líderes antes de propor mudanças estruturais.",
          },
          {
            title: "Liderança de Estágio: Apoio Técnico e Humano",
            description:
              "Suporte técnico (em Java, banco de dados e domínio do ambiente clínico — servindo de referência até para dúvidas da equipe de QA) e acompanhamento humano aos demais estagiários, além da organização de reuniões, planilhas e realocação entre equipes.",
          },
          {
            title: "Rotina Ágil com Scrum & Jira",
            description:
              "Atuação diária seguindo os ritos do Scrum, com gestão de tarefas, acompanhamento de entregas no Jira e controle de versão com Git e Gerrit.",
          },
        ],
      },
    },
  },
  en: {
    backBtn: "← Back to Experience",
    notFoundTitle: "Experience not found",
    notFoundDesc:
      "The requested experience record does not exist or the URL is invalid.",
    sections: {
      contextLabel: "PRODUCT & ENVIRONMENT CONTEXT",
      metricsLabel: "IMPACT & METRICS",
      starLabel: "CASE STUDY — STAR METHOD",
      techFrontsLabel: "TECHNICAL FRONTS IN PRACTICE",
      processLabel: "ENGINEERING, QA & INTERN LEADERSHIP",
      stackLabel: "STACK & TOOLS",
    },
    items: {
      "touch-health": {
        badge: "INTERNSHIP • FULL STACK",
        company: "Touch Health (Touch Tecnologia e Informática)",
        role: "Full Stack Software Developer",
        period: "Through September 2026",
        workMode: "Software Engineering • Healthcare & Diagnostics",
        summary:
          "Worked on feature development, maintenance, and quality assurance across Touch Health's ecosystem — directly building and maintaining MotionLIS, Motion Dasa (a custom LIS-derived product for Dasa), and WiseTouch (smart scheduling platform), alongside internal healthcare diagnostic modules.",
        productContext: {
          title: "Touch Health Ecosystem (MotionLIS, Motion Dasa & WiseTouch)",
          description:
            "Hands-on work across the company's three core products — MotionLIS (high-volume laboratory management and automation), Motion Dasa (custom LIS-derived product built for Dasa), and WiseTouch (smart scheduling platform for exams and appointments) — plus internal systems. Mission-critical platforms requiring high availability, traceability, and strict technical validation ahead of each delivery.",
          clientsLabel:
            "Major healthcare networks and hospitals served by these products:",
          clients: [
            "Dasa",
            "Rede D'Or",
            "Fleury",
            "Sírio-Libanês",
            "Albert Einstein",
          ],
        },
        metrics: [
          {
            value: "+150%",
            label: "Delivery acceleration recognized by the engineering team",
          },
          {
            value: "30%",
            label: "Of deliveries completed directly by me",
          },
          {
            value: "5 to 6",
            label: "Projects and systems rotated across the ecosystem",
          },
          {
            value: "100%",
            label: "Of the intern squad transitioned into permanent teams",
          },
        ],
        star: [
          {
            key: "S",
            title: "Situation",
            text: "During a three-month internal transition, an intern-only squad was left without a formal manager or direct team lead while needing to sustain ongoing development across company systems.",
          },
          {
            key: "T",
            title: "Task",
            text: "Keep the intern team operating smoothly end-to-end without a formal manager — managing everything from task pickup to delivery alongside day-to-day operational coordination.",
          },
          {
            key: "A",
            title: "Action",
            text: "As the most senior interns on the squad, another colleague and I stepped up to lead the intern team. Alongside hands-on coding, I ran code reviews on Gerrit, led team syncs, maintained documentation and tracking spreadsheets, and coordinated reallocating interns across teams as project needs shifted.",
          },
          {
            key: "R",
            title: "Result",
            text: "The squad operated seamlessly throughout the transition and accelerated delivery output by 150% (as reported by the full-time developers), with 30% of deliveries completed by me. Afterward, every member of the intern squad successfully transitioned into permanent teams.",
          },
        ],
        technicalFronts: [
          {
            title: "RESTful APIs & Microservices",
            description:
              "Built and maintained endpoints, business rules, and service integrations in Java (8 and 21) with Spring MVC and Hibernate/JPA, applying SOLID principles and OpenAPI/Swagger documentation.",
          },
          {
            title: "Legacy & Modern UI Coexistence",
            description:
              "Developed reactive interfaces in ReactJS and TypeScript alongside evolutionary maintenance on legacy screens using JSP, FreeMarker (FTL), and AJAX.",
          },
          {
            title: "Data Persistence & Schema Versioning",
            description:
              "Modeled and tuned queries across PostgreSQL and Oracle SQL (SQL, HQL, and PL/SQL) using Hibernate/JPA and safe database migrations via Liquibase.",
          },
          {
            title: "Unit, Integration & E2E Testing",
            description:
              "Wrote unit tests with JUnit, integration tests with Groovy, and automated UI/regression tests with Selenium to safeguard critical clinical flows.",
          },
        ],
        leadershipAndProcess: [
          {
            title: "Test Scenario Standardization & QA Support",
            description:
              "Documented test scenarios, preconditions, and technical impact notes on tasks to streamline QA validation and reduce back-and-forth across teams.",
          },
          {
            title: "Gerrit Code Reviews & Pattern Alignment",
            description:
              "Reviewed code via Gerrit (including issues tied to the QA pipeline) and routed completed reviews to the responsible teams — always respecting project conventions and consulting team leaders before proposing structural changes.",
          },
          {
            title: "Intern Leadership: Technical & Human Support",
            description:
              "Provided both technical support (in Java, databases, and the clinical domain — even assisting QA members with clinical workflow questions) and human support to fellow interns, alongside running syncs, tracking spreadsheets, and cross-team reallocations.",
          },
          {
            title: "Agile Workflow with Scrum & Jira",
            description:
              "Worked daily following Scrum ceremonies, managing tasks and delivery tracking in Jira alongside Git and Gerrit version control.",
          },
        ],
      },
    },
  },
};
