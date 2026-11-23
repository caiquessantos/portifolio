import React from "react";
import Style from "./Styles/ProjectSection.module.css";
import { PROJECTS_BASE, PROJECTS_CONTENT } from "../../data/Project";

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
  selectedCategory = "todos",
  onOpenProject,
}) {
  const content = PROJECTS_CONTENT[lang] || PROJECTS_CONTENT.pt;

  const visibleProjects = PROJECTS_BASE.filter(
    (project) =>
      selectedCategory === "todos" || project.category === selectedCategory,
  );

  if (visibleProjects.length === 0) {
    return (
      <div className="container">
        <div className={Style.emptyBox}>
          <p className={Style.emptyText}>{content.emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className={Style.grid}>
        {visibleProjects.map((project) => {
          const localized = content.items[project.slug];
          const isMatch =
            !selectedTech || project.techIds.includes(selectedTech);
          const isHighlighted = Boolean(selectedTech && isMatch);

          return (
            <article
              key={project.slug}
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
                    onClick={() => onOpenProject?.(project.slug)}
                    className={Style.actionBtn}
                  >
                    <span>{content.actionBtn}</span>
                    <span className={Style.routeHint}>/projeto →</span>
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
