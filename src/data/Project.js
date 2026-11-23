export const PROJECTS_BASE = [
  {
    slug: "ceasa-digital",
    category: "academico",
    confidential: false,
    liveUrl: null,
    highlights: [
      "Java",
      "Spring Boot",
      "APIs REST",
      "Hibernate / JPA",
      "PostgreSQL",
      "Flyway",
      "Docker",
      "Git",
      "GitHub",
      "ClicUp",
    ],
    techIds: [
      "java",
      "springboot",
      "hibernate",
      "jpa",
      "apirest",
      "sql",
      "postgresql",
      "migrations",
      "docker",
      "git",
      "github",
      "clickup",
    ],
  },
];

export const PROJECTS_CONTENT = {
  pt: {
    stepBadge: "02 / PROJETOS & ARQUITETURA",
    title: "Projetos & Estudos de Caso",
    subtitleStart: "Filtre por stack ou categoria abaixo, ou clique em ",
    subtitleHighlight: "Ver arquitetura",
    subtitleEnd: " para inspecionar as camadas e decisões técnicas.",
    usesTechPrefix: "★ USA",
    actionBtn: "Ver arquitetura",
    lockedBtn: "Confidencial no momento",
    emptyMessage:
      "Nenhum projeto encontrado para essa combinação de categoria e tecnologia.",
    categoryLabels: {
      academico: "Acadêmico • Cliente Real",
      freela: "Freelancer • Sob NDA",
      pessoal: "Pessoal",
    },
    items: {
      "ceasa-digital": {
        role: "Backend Developer",
        period: "2025.2",
        title: "Ceasa Digital — Plataforma Atacadista B2B",
        shortDesc:
          "Backend em Java e Spring Boot (arquitetura modular em camadas) para digitalização comercial da CEASA em parceria com o SESI, baseado em fila justa de rotação para equilibrar as vendas entre produtores. Implementei o fluxo de checkout (conversão de carrinho em pedido), validação de autorização para cada usuário acessar apenas os próprios pedidos, DTOs, carregamento otimizado com FetchType.LAZY, índices no PostgreSQL, migrations com Flyway e ambiente em Docker. Após a validação, o projeto captou ~R$ 1 milhão para servidores, infraestrutura e continuidade.",
      },
    },
  },
  en: {
    stepBadge: "02 / PROJECTS & ARCHITECTURE",
    title: "Projects & Case Studies",
    subtitleStart: "Filter by stack or category above, or click ",
    subtitleHighlight: "View architecture",
    subtitleEnd: " to inspect system layers and technical decisions.",
    usesTechPrefix: "★ USES",
    actionBtn: "View architecture",
    lockedBtn: "Confidential at the moment",
    emptyMessage:
      "No projects found for this combination of category and technology.",
    categoryLabels: {
      academico: "Academic • Real Client",
      freela: "Freelance • Under NDA",
      pessoal: "Personal",
    },
    items: {
      "ceasa-digital": {
        role: "Backend Developer",
        period: "2025.2",
        title: "Ceasa Digital — B2B Wholesale Platform",
        shortDesc:
          "Java and Spring Boot backend (modular layered architecture) for CEASA's commercial digitalization in partnership with SESI, driven by a fair-queue rotation model to balance sales across producers. Implemented the checkout flow (cart-to-order conversion), user authorization checks restricting order access, DTOs, FetchType.LAZY query tuning, PostgreSQL indexing, Flyway migrations, and Docker setup. Following validation, the project secured ~R$ 1M for servers, infrastructure, and platform continuity.",
      },
    },
  },
};
