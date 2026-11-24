import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { PROJECTS_BASE } from "../data/ProjectData";
import { PROJECTS_DETAILS_CONTENT } from "../data/ProjectDetailsData";
import MobileCardCarousel from "../components/common/MobileCardCarousel";
import ContactsSection from "../components/sections/ContactsSection";
import styles from "./styles/ProjectDetails.module.css";

function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useLanguage();

  const currentLang = lang === "en" ? "en" : "pt";
  const content =
    PROJECTS_DETAILS_CONTENT[currentLang] || PROJECTS_DETAILS_CONTENT.pt;

  const baseItem = PROJECTS_BASE.find((item) => item.slug === slug);
  const detailItem = content.items?.[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const handleBack = () => {
    const targetId = location.state?.scrollTo || `proj-${slug}`;
    const projectSlug = location.state?.projectSlug || slug;
    navigate("/", {
      state: {
        scrollTo: targetId,
        projectSlug,
      },
    });
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

        <ContactsSection lang={currentLang} />

        <div className={styles.bottomBar}>
          <button
            type="button"
            onClick={handleScrollTop}
            className={styles.topBtn}
          >
            {content.topBtn}
          </button>
        </div>
      </main>
    );
  }

  const renderInfoCard = (item) => (
    <article className={styles.infoCard}>
      <h3 className={styles.infoCardTitle}>{item.title}</h3>
      <p className={styles.infoCardDesc}>{item.description}</p>
    </article>
  );

  const renderFeatureCard = (feature, index) => (
    <article className={styles.featureCard}>
      <div className={styles.featureItem}>
        <span className={styles.featureMarker}>▸</span>
        <span className={styles.featureText}>{feature}</span>
      </div>
    </article>
  );

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
          <span className={styles.rolePill}>{detailItem.role}</span>
        </div>

        <div className={styles.titleGroup}>
          <h1 className={styles.title}>{detailItem.title}</h1>
        </div>

        <p className={styles.summary}>{detailItem.summary}</p>

        {(baseItem.repoUrl || baseItem.liveUrl) && (
          <div className={styles.linksRow}>
            {baseItem.repoUrl && (
              <a
                href={baseItem.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                <span>{content.repoBtn}</span>
                <span>↗</span>
              </a>
            )}
            {baseItem.liveUrl && (
              <a
                href={baseItem.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryLinkBtn}
              >
                <span>{content.liveBtn}</span>
                <span>↗</span>
              </a>
            )}
          </div>
        )}
      </section>

      {/* Contexto & Problema Resolvido */}
      {detailItem.context && (
        <section className={styles.contextCard}>
          <span className={styles.sectionLabel}>
            {content.sections.contextLabel}
          </span>
          <h2 className={styles.contextTitle}>{detailItem.context.title}</h2>
          <p className={styles.contextDesc}>{detailItem.context.description}</p>
        </section>
      )}

      {/* Arquitetura & Camadas */}
      {detailItem.architecture?.length > 0 && (
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionLabel}>
            {content.sections.architectureLabel}
          </h2>
          <MobileCardCarousel
            items={detailItem.architecture}
            renderItem={renderInfoCard}
            getItemKey={(layer) => layer.title}
            resetKey={`${currentLang}-${slug}-architecture`}
            desktopClassName={styles.twoColGrid}
            prevAriaLabel={
              currentLang === "en" ? "Previous item" : "Item anterior"
            }
            nextAriaLabel={currentLang === "en" ? "Next item" : "Próximo item"}
            controlsAriaLabel={
              currentLang === "en"
                ? "Architecture navigation"
                : "Navegação da arquitetura"
            }
          />
        </section>
      )}

      {/* Decisões Técnicas & Implementação */}
      {detailItem.decisions?.length > 0 && (
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionLabel}>
            {content.sections.decisionsLabel}
          </h2>
          <MobileCardCarousel
            items={detailItem.decisions}
            renderItem={renderInfoCard}
            getItemKey={(decision) => decision.title}
            resetKey={`${currentLang}-${slug}-decisions`}
            desktopClassName={styles.twoColGrid}
            prevAriaLabel={
              currentLang === "en" ? "Previous decision" : "Decisão anterior"
            }
            nextAriaLabel={
              currentLang === "en" ? "Next decision" : "Próxima decisão"
            }
            controlsAriaLabel={
              currentLang === "en"
                ? "Technical decisions navigation"
                : "Navegação das decisões técnicas"
            }
          />
        </section>
      )}

      {/* Entregas & Fluxos Principais */}
      {detailItem.features?.length > 0 && (
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionLabel}>
            {content.sections.featuresLabel}
          </h2>
          <MobileCardCarousel
            items={detailItem.features}
            renderItem={renderFeatureCard}
            getItemKey={(feature, index) => `${slug}-feat-${index}`}
            resetKey={`${currentLang}-${slug}-features`}
            desktopClassName={styles.featuresList}
            prevAriaLabel={
              currentLang === "en" ? "Previous item" : "Item anterior"
            }
            nextAriaLabel={currentLang === "en" ? "Next item" : "Próximo item"}
            controlsAriaLabel={
              currentLang === "en"
                ? "Features navigation"
                : "Navegação das entregas e fluxos"
            }
          />
        </section>
      )}

      {/* Stack & Ferramentas */}
      {baseItem.highlights?.length > 0 && (
        <section className={styles.stackCard}>
          <h2 className={styles.sectionLabel}>{content.sections.stackLabel}</h2>
          <div className={styles.stackTags}>
            {baseItem.highlights.map((tech) => (
              <span key={tech} className={styles.stackTag}>
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Seção de Contato */}
      <ContactsSection lang={currentLang} />

      {/* Rodapé com Voltar ao Topo */}
      <div className={styles.bottomBar}>
        <button
          type="button"
          onClick={handleScrollTop}
          className={styles.topBtn}
        >
          {content.topBtn}
        </button>
      </div>
    </main>
  );
}

export default ProjectDetails;
