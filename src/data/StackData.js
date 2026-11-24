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
      { id: "oracle", label: "Oracle SQL" },
      { id: "plsql", label: "PL/SQL" },
      { id: "sqlite", label: "SQLite" },
      { id: "jdbc", label: "JDBC" },
      { id: "hql", label: "HQL" },
      { id: "liquibase", label: "Liquibase" },
      { id: "flyway", label: "Flyway" },
    ],
  },
  {
    id: "frontend",
    tecnologias: [
      { id: "react", label: "React" },
      { id: "angular", label: "Angular" },
      { id: "javascript", label: "JavaScript" },
      { id: "typescript", label: "TypeScript" },
      { id: "html", label: "HTML" },
      { id: "css", label: "CSS" },
      { id: "bootstrap", label: "Bootstrap" },
      { id: "jsp", label: "JSP" },
      { id: "ftl", label: "FreeMarker (FTL)" },
      { id: "ajax", label: "AJAX" },
      { id: "firebase", label: "Firebase" },
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
      { id: "jenkins", label: "Jenkins" },
      { id: "maven", label: "Maven" },
      { id: "postman", label: "Postman" },
      { id: "openswagger", label: "OpenAPI / Swagger" },
    ],
  },
  {
    id: "patterns",
    tecnologias: [
      { id: "mvc", label: "MVC" },
      {
        id: "di",
        label: "Injeção de Dependência",
        enLabel: "Dependency Injection",
      },
      { id: "repository", label: "Repository" },
      { id: "builder", label: "Builder" },
      { id: "dto", label: "DTO" },
      { id: "dao", label: "DAO" },
      { id: "vo", label: "VO" },
      { id: "solid", label: "SOLID" },
      { id: "dry", label: "DRY" },
      { id: "yagni", label: "YAGNI" },
    ],
  },
  {
    id: "agile",
    tecnologias: [
      { id: "scrum", label: "Scrum" },
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
      backend: "Backend & Banco de Dados",
      frontend: "Frontend",
      qa: "Testes e Qualidade",
      devops: "DevOps, Build & Ferramentas",
      patterns: "Arquitetura & Padrões",
      agile: "Gestão Ágil",
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
      backend: "Backend & Databases",
      frontend: "Frontend",
      qa: "Testing & Quality",
      devops: "DevOps, Build & Tooling",
      patterns: "Architecture & Patterns",
      agile: "Agile Management",
    },
    categories: {
      todos: "All",
      pessoal: "Personal",
      academico: "Academic",
      freela: "Freelance",
    },
  },
};
