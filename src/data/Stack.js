export const STACK_GROUPS = [
  {
    id: "backend",
    tecnologias: [
      { id: "java", label: "Java" },
      { id: "springmvc", label: "Spring MVC" },
      { id: "springboot", label: "Spring Boot" },
      { id: "hibernate", label: "Hibernate" },
      { id: "jpa", label: "JPA" },
      { id: "apirest", label: "APIs RESTful", enLabel: "RESTful APIs" },
      { id: "microservico", label: "Microsserviços", enLabel: "Microservices" },
      { id: "sql", label: "SQL" },
      { id: "postgresql", label: "PostgreSQL" },
      { id: "mysql", label: "MySQL" },
      { id: "hql", label: "HQL" },
      { id: "liquibase", label: "Liquibase" },
      { id: "migrations", label: "Migrations" },
    ],
  },
  {
    id: "frontend",
    tecnologias: [
      { id: "react", label: "React" },
      { id: "javascript", label: "JavaScript" },
      { id: "typescript", label: "TypeScript" },
      { id: "html", label: "HTML" },
      { id: "css", label: "CSS" },
      { id: "jsp", label: "JSP" },
      { id: "ftl", label: "FreeMarker (FTL)" },
      { id: "ajax", label: "AJAX" },
    ],
  },
  {
    id: "qa",
    tecnologias: [
      { id: "junit", label: "JUnit" },
      { id: "jest", label: "Jest" },
      { id: "selenium", label: "Selenium" },
      { id: "groovy", label: "Groovy" },
    ],
  },
  {
    id: "devops",
    tecnologias: [
      { id: "git", label: "Git" },
      { id: "github", label: "GitHub" },
      { id: "gerrit", label: "Gerrit" },
      { id: "docker", label: "Docker" },
      { id: "linux", label: "Linux" },
    ],
  },
  {
    id: "architecture",
    tecnologias: [
      { id: "openswagger", label: "OpenAPI / Swagger" },
      { id: "solid", label: "SOLID" },
      { id: "dry", label: "DRY" },
      { id: "yagni", label: "YAGNI" },
      { id: "jira", label: "Jira" },
      { id: "trello", label: "Trello" },
      { id: "clickup", label: "ClickUp" },
    ],
  },
];

export const CATEGORY_IDS = ["todos", "pessoal", "academico", "freela"];

export const STACK_CONTENT = {
  pt: {
    title: "Minha Stack (você pode usar para filtrar os projetos)",
    clearBtn: "Limpar",
    categoryLabel: "Categoria:",
    groupTitles: {
      backend: "Backend",
      frontend: "Frontend",
      qa: "Testes e Qualidade",
      devops: "DevOps",
      architecture: "Documentação, arquitetura e metodologia",
    },
    categories: {
      todos: "Todos",
      pessoal: "Pessoal",
      academico: "Acadêmico",
      freela: "Freelancer",
    },
  },
  en: {
    title: "My Stack (You can use to filter the projects)",
    clearBtn: "Clear",
    categoryLabel: "Category:",
    groupTitles: {
      backend: "Backend",
      frontend: "Frontend",
      qa: "Testing & Quality",
      devops: "DevOps",
      architecture: "Documentation, Architecture & Methodology",
    },
    categories: {
      todos: "All",
      pessoal: "Personal",
      academico: "Academic",
      freela: "Freelance",
    },
  },
};
