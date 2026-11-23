import React from "react";
import "./Styles/Geral.css";
import Style from "./Styles/ExperienceSection.module.css";
import { EXPERIENCES_BASE, EXPERIENCE_CONTENT } from "../../data/Experience";

function ExperienceSection({
  lang = "pt",
  selectedTech = null,
  onOpenExperience,
}) {
  const content = EXPERIENCE_CONTENT[lang] || EXPERIENCE_CONTENT.pt;

  return (
    <section id="Experiencia" className="container">
      <div className={Style.list}>
        {EXPERIENCES_BASE.map((exp) => {
          const localized = content.items[exp.slug];
          const isMatch = !selectedTech || exp.techIds.includes(selectedTech);
          const isHighlighted = Boolean(selectedTech && isMatch);

          return (
            <article
              key={exp.slug}
              className={`${Style.card} ${
                isHighlighted ? Style.cardHighlighted : ""
              } ${!isMatch ? Style.cardDimmed : ""}`}
            >
              <div className={Style.topRow}>
                <div className={Style.meta}>
                  <span className={Style.companyBadge}>{exp.company}</span>
                  <span className={Style.period}>{localized.period}</span>
                  <span
                    className={`${Style.infoBadge} ${
                      isHighlighted ? Style.infoBadgeActive : ""
                    }`}
                  >
                    {isHighlighted
                      ? `${content.usesTechPrefix} ${selectedTech.toUpperCase()}`
                      : localized.badge}
                  </span>
                </div>

                <h3 className={Style.role}>{localized.role}</h3>
              </div>

              <p className={Style.summary}>{localized.summary}</p>

              <div className={Style.metricsGrid}>
                {localized.metrics.map((metric) => (
                  <div key={metric.label} className={Style.metricBox}>
                    <span className={Style.metricValue}>{metric.value}</span>
                    <span className={Style.metricLabel}>{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className={Style.bottomRow}>
                <div className={Style.tags}>
                  {exp.highlights.map((tag) => (
                    <span key={tag} className={Style.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onOpenExperience?.(exp.slug)}
                  className={Style.actionBtn}
                >
                  <span>{content.actionBtn}</span>
                  <span className={Style.arrow}>→</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ExperienceSection;
