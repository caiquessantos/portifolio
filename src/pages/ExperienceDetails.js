import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  EXPERIENCE_DETAILS_BASE,
  EXPERIENCE_DETAILS_CONTENT,
} from "../data/ExperienceDetailsData";
import ContactSection from "../components/sections/ContactsSection";
import styles from "./styles/ExperienceDetails.module.css";

function ExperienceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useLanguage();

  const currentLang = lang === "en" ? "en" : "pt";
  const content =
    EXPERIENCE_DETAILS_CONTENT[currentLang] || EXPERIENCE_DETAILS_CONTENT.pt;

  const baseItem = EXPERIENCE_DETAILS_BASE[slug];
  const detailItem = content.items?.[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const handleBack = () => {
    const targetId = location.state?.scrollTo || `exp-${slug}`;
    navigate("/", { state: { scrollTo: targetId } });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!baseItem || !detailItem) {
    return (
      <main className={styles.page}>
        <div className={styles.topBar}>
          <button type="button" onClick={handleBack} className={styles.backBtn}>
            {content.backBtn}
          </button>
        </div>

        <section className={styles.notFoundCard}>
          <h1 className={styles.notFoundTitle}>{content.notFoundTitle}</h1>
          <p className={styles.notFoundDesc}>{content.notFoundDesc}</p>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <button type="button" onClick={handleBack} className={styles.backBtn}>
          {content.backBtn}
        </button>
      </div>

      {/* Cabeçalho Principal */}
      <section className={styles.heroCard}>
        <div className={styles.metaRow}>
          <span className={styles.badge}>{detailItem.badge}</span>
          <span className={styles.period}>{detailItem.period}</span>
          <span className={styles.workMode}>{detailItem.workMode}</span>
        </div>

        <div className={styles.titleGroup}>
          <h1 className={styles.role}>{detailItem.role}</h1>
          <p className={styles.company}>{detailItem.company}</p>
        </div>

        <p className={styles.summary}>{detailItem.summary}</p>
      </section>

      {/* Faixa de Métricas / KPIs */}
      {detailItem.metrics?.length > 0 && (
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionLabel}>
            {content.sections.metricsLabel}
          </h2>
          <div className={styles.metricsGrid}>
            {detailItem.metrics.map((metric, index) => (
              <article key={index} className={styles.metricCard}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Contexto do Produto & Criticidade */}
      {detailItem.productContext && (
        <section className={styles.contextCard}>
          <span className={styles.sectionLabel}>
            {content.sections.contextLabel}
          </span>
          <h2 className={styles.contextTitle}>
            {detailItem.productContext.title}
          </h2>
          <p className={styles.contextDesc}>
            {detailItem.productContext.description}
          </p>

          {detailItem.productContext.clients?.length > 0 && (
            <div className={styles.clientsWrap}>
              <span className={styles.clientsLabel}>
                {detailItem.productContext.clientsLabel}
              </span>
              <div className={styles.clientsList}>
                {detailItem.productContext.clients.map((client) => (
                  <span key={client} className={styles.clientPill}>
                    {client}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Método STAR */}
      {detailItem.star?.length > 0 && (
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionLabel}>{content.sections.starLabel}</h2>
          <div className={styles.twoColGrid}>
            {detailItem.star.map((step) => (
              <article key={step.key} className={styles.starCard}>
                <div className={styles.starHeader}>
                  <span className={styles.starKey}>{step.key}</span>
                  <h3 className={styles.starTitle}>{step.title}</h3>
                </div>
                <p className={styles.starText}>{step.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Frentes Técnicas na Prática */}
      {detailItem.technicalFronts?.length > 0 && (
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionLabel}>
            {content.sections.techFrontsLabel}
          </h2>
          <div className={styles.twoColGrid}>
            {detailItem.technicalFronts.map((front, index) => (
              <article key={index} className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>{front.title}</h3>
                <p className={styles.infoCardDesc}>{front.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Engenharia, QA & Liderança Técnica */}
      {detailItem.leadershipAndProcess?.length > 0 && (
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionLabel}>
            {content.sections.processLabel}
          </h2>
          <div className={styles.twoColGrid}>
            {detailItem.leadershipAndProcess.map((item, index) => (
              <article key={index} className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>{item.title}</h3>
                <p className={styles.infoCardDesc}>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Stack & Ferramentas */}
      {baseItem.techStack?.length > 0 && (
        <section className={styles.stackCard}>
          <h2 className={styles.sectionLabel}>{content.sections.stackLabel}</h2>
          <div className={styles.stackTags}>
            {baseItem.techStack.map((tech) => (
              <span key={tech} className={styles.stackTag}>
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Seção de Contato */}
      <ContactSection lang={currentLang} />

      {/* Rodapé com Voltar ao Topo */}
      <div className={styles.bottomBar}>
        <button
          type="button"
          onClick={handleScrollTop}
          className={styles.topBtn}
        >
          {currentLang === "en" ? "↑ Back to top" : "↑ Voltar ao topo"}
        </button>
      </div>
    </main>
  );
}

export default ExperienceDetails;
