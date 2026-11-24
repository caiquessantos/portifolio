import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileCardCarousel from "../common/MobileCardCarousel";
import Style from "./Styles/ProjectSection.module.css";
import { PROJECTS_BASE, PROJECTS_CONTENT } from "../../data/ProjectData";

const FILTER_CATEGORIES = ["todos", "pessoal", "academico", "freela"];

const FILTER_LABELS = {
  pt: {
    todos: "Todos",
    pessoal: "Pessoal",
    academico: "Acadêmico",
    freela: "Freelancer",
  },
  en: {
    todos: "All",
    pessoal: "Personal",
    academico: "Academic",
    freela: "Freelance",
  },
};

function LockIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 7V5a3.5 3.5 0 1 1 7 0v2M3.5 7h9a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectSection({
  lang = "pt",
  selectedTech = null,
  focusedProjectSlug = null,
  onSelectCategory,
  onOpenProject,
}) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const content = PROJECTS_CONTENT[lang] || PROJECTS_CONTENT.pt;
  const tabLabels = FILTER_LABELS[lang] || FILTER_LABELS.pt;

  useEffect(() => {
    if (!focusedProjectSlug) return;
    const existsInCurrentCategory = PROJECTS_BASE.some(
      (project) =>
        project.slug === focusedProjectSlug &&
        (selectedCategory === "todos" || project.category === selectedCategory),
    );
    if (!existsInCurrentCategory) {
      setSelectedCategory("todos");
    }
  }, [focusedProjectSlug, selectedCategory]);

  const handleCategoryChange = (categoryId) => {
    const next =
      categoryId !== "todos" && selectedCategory === categoryId
        ? "todos"
        : categoryId;

    setSelectedCategory(next);
    if (typeof onSelectCategory === "function") {
      onSelectCategory(next);
    }
  };

  const getCategoryCount = (categoryId) => {
    if (categoryId === "todos") return PROJECTS_BASE.length;
    return PROJECTS_BASE.filter((project) => project.category === categoryId)
      .length;
  };

  const visibleProjects = PROJECTS_BASE.filter(
    (project) =>
      selectedCategory === "todos" || project.category === selectedCategory,
  );

  const rawFocusedIndex = focusedProjectSlug
    ? visibleProjects.findIndex((p) => p.slug === focusedProjectSlug)
    : 0;
  const focusedIndex = rawFocusedIndex >= 0 ? rawFocusedIndex : 0;

  const handleSelectProject = (slug) => {
    if (typeof onOpenProject === "function") {
      onOpenProject(slug);
      return;
    }

    navigate(`/projeto/${slug}`, {
      state: {
        scrollTo: `proj-${slug}`,
        projectSlug: slug,
      },
    });
  };

  const renderCategoryTabs = () => (
    <div
      className={Style.tabsBar}
      role="tablist"
      aria-label={
        lang === "en"
          ? "Filter projects by category"
          : "Filtrar projetos por categoria"
      }
    >
      {FILTER_CATEGORIES.map((categoryId) => {
        const isActive = selectedCategory === categoryId;
        const count = getCategoryCount(categoryId);

        return (
          <button
            key={categoryId}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => handleCategoryChange(categoryId)}
            className={`${Style.categoryBtn} ${
              isActive ? Style.categoryBtnActive : ""
            }`}
          >
            <span>{tabLabels[categoryId]}</span>
            <span className={Style.tabCount}>{count}</span>
          </button>
        );
      })}
    </div>
  );

  if (visibleProjects.length === 0) {
    return (
      <div className="container">
        {renderCategoryTabs()}
        <div className={Style.emptyBox}>
          <p className={Style.emptyText}>{content.emptyMessage}</p>
        </div>
      </div>
    );
  }

  const renderProjectCard = (project, includeId = true) => {
    const localized = content.items[project.slug];
    const isMatch = !selectedTech || project.techIds.includes(selectedTech);
    const isHighlighted = Boolean(selectedTech && isMatch);

    return (
      <article
        id={includeId ? `proj-${project.slug}` : undefined}
        className={`${Style.card} ${
          project.confidential ? Style.cardConfidential : ""
        } ${isHighlighted ? Style.cardHighlighted : ""} ${
          !isMatch ? Style.cardDimmed : ""
        }`}
      >
        <div className={Style.cardTop}>
          <div className={Style.metaRow}>
            <span
              className={`${Style.originBadge} ${
                isHighlighted ? Style.originBadgeActive : ""
              } ${
                project.confidential && !isHighlighted
                  ? Style.originBadgeConfidential
                  : ""
              }`}
            >
              {isHighlighted
                ? `${content.usesTechPrefix} ${selectedTech.toUpperCase()}`
                : content.categoryLabels[project.category]}
            </span>

            <span className={Style.period}>{localized.period}</span>
          </div>

          <span className={Style.roleTag}>{localized.role}</span>

          <h3 className={Style.cardTitle}>{localized.title}</h3>

          <p className={Style.description}>{localized.shortDesc}</p>
        </div>

        <div className={Style.cardBottom}>
          <div className={Style.tags}>
            {project.highlights.map((tech) => (
              <span key={tech} className={Style.tag}>
                {tech}
              </span>
            ))}
          </div>

          {project.confidential ? (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className={`${Style.actionBtn} ${Style.actionBtnLocked}`}
            >
              <LockIcon className={Style.lockIcon} />
              <span>{content.lockedBtn}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleSelectProject(project.slug)}
              className={Style.actionBtn}
            >
              <span>{content.actionBtn}</span>
              <span className={Style.routeHint}>/projeto →</span>
            </button>
          )}
        </div>
      </article>
    );
  };

  return (
    <div className="container">
      {renderCategoryTabs()}

      <MobileCardCarousel
        items={visibleProjects}
        renderItem={(project) => renderProjectCard(project, false)}
        renderDesktopItem={(project) => renderProjectCard(project, true)}
        getItemKey={(project) => project.slug}
        resetKey={`${lang}-${selectedCategory}-${selectedTech || "all"}-${focusedProjectSlug || ""}`}
        initialIndex={focusedIndex}
        desktopClassName={Style.grid}
        prevAriaLabel={lang === "en" ? "Previous project" : "Projeto anterior"}
        nextAriaLabel={lang === "en" ? "Next project" : "Próximo projeto"}
        controlsAriaLabel={
          lang === "en" ? "Projects navigation" : "Navegação dos projetos"
        }
      />
    </div>
  );
}

export default ProjectSection;
