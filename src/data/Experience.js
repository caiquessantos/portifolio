export const EXPERIENCES_BASE = [
  {
    slug: "touch-health",
    company: "Touch Health",
    highlights: [
      "Java",
      "Spring MVC",
      "APIs REST",
      "SQL & Liquibase",
      "React & TypeScript",
      "JSP & FreeMarker",
      "JUnit & Selenium",
      "Gerrit & Jenkins",
    ],
    techIds: [
      "java",
      "springmvc",
      "hibernate",
      "jpa",
      "apirest",
      "sql",
      "hql",
      "liquibase",
      "migrations",
      "react",
      "typescript",
      "javascript",
      "html",
      "css",
      "jsp",
      "ftl",
      "ajax",
      "junit",
      "jest",
      "selenium",
      "groovy",
      "git",
      "gerrit",
    ],
  },
];

export const EXPERIENCE_CONTENT = {
  pt: {
    stepBadge: "03 / EXPERIÊNCIA PROFISSIONAL",
    title: "Trajetória & Frentes de Atuação",
    subtitleStart: "Atuação em sistemas críticos de saúde B2B. Clique em ",
    subtitleHighlight: "Ver trilha & entregas",
    subtitleEnd: " para abrir o detalhamento técnico da operação.",
    usesTechPrefix: "★ USA",
    actionBtn: "Ver trilha & entregas",
    items: {
      "touch-health": {
        role: "Estagiário Full Stack",
        period: "Set 2024 — 2026",
        badge: "Sistemas Hospitalares B2B • +150% QA",
        summary:
          "Atuação Full Stack (Java, Spring MVC, APIs REST, React/TypeScript, JSP e FreeMarker) na evolução do MotionLIS e MotionDASA e de sistemas distintos de agendamento e integração para Fleury, Rede D'Or, Albert Einstein e Sírio-Libanês. Responsável por otimização de queries SQL e versionamento/índices via Liquibase, suíte contínua de testes automatizados (JUnit, Jest, Selenium e Groovy), monitoramento no Jenkins e apoio técnico na transição da equipe com onboarding, code review no Gerrit e 30% das entregas da força-tarefa dos estagiários.",
        metrics: [
          { value: "5+ sistemas", label: "MotionLIS & agendamentos B2B" },
          { value: "30% entregas", label: "Na força-tarefa dos estagiários" },
          { value: "+150% QA", label: "Volume de issues homologadas" },
        ],
      },
    },
  },
  en: {
    stepBadge: "03 / PROFESSIONAL EXPERIENCE",
    title: "Career Path & Workstreams",
    subtitleStart:
      "Experience in mission-critical B2B healthcare systems. Click ",
    subtitleHighlight: "View track & deliveries",
    subtitleEnd: " to open the technical breakdown of the operation.",
    usesTechPrefix: "★ USES",
    actionBtn: "View track & deliveries",
    items: {
      "touch-health": {
        role: "Full Stack Developer Intern",
        period: "Sep 2024 — 2026",
        badge: "B2B Healthcare Systems • +150% QA",
        summary:
          "Full Stack development (Java, Spring MVC, REST APIs, React/TypeScript, JSP, and FreeMarker) evolving MotionLIS and MotionDASA alongside distinct scheduling and integration systems for Fleury, Rede D'Or, Albert Einstein, and Sírio-Libanês. Responsible for SQL query optimization and schema/index versioning via Liquibase, continuous automated testing suites (JUnit, Jest, Selenium, and Groovy), Jenkins CI monitoring, and technical support during a team transition—leading onboarding, Gerrit code reviews, and 30% of deliveries in an intern task force.",
        metrics: [
          { value: "5+ systems", label: "MotionLIS & B2B scheduling" },
          { value: "30% deliveries", label: "In the intern task force" },
          { value: "+150% QA", label: "Validated issues volume" },
        ],
      },
    },
  },
};
