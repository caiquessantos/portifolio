import React from "react";
import "./Styles/Geral.css";
import Style from "./Styles/HeroSection.module.css";
import Contact from "./ContactsSection";
import { HERO_CONTENT } from "../../data/HeroData";

function HeroSection({ lang = "pt", children }) {
  const content = HERO_CONTENT[lang] || HERO_CONTENT.pt;
  const hasArt = Boolean(children);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const oneRem = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
    const y =
      el.getBoundingClientRect().top + window.scrollY - headerHeight - oneRem;

    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  return (
    <section
      id="Inicio"
      className={`container ${Style.hero} ${hasArt ? Style.heroWithArt : ""}`}
    >
      <div className={Style.contentCol}>
        <p className={Style.badge}>
          <span className={Style.statusDot} />
          <span>{content.badge}</span>
        </p>

        <h1 className={Style.title}>
          {content.name} — <span className={Style.role}>{content.role}</span>
        </h1>

        <p className={Style.bio}>
          {content.bioStart}
          <b>{content.backendStack}</b>
          {content.bioMiddle}
          <b>{content.frontendStack}</b>
          {content.bioEnd}
        </p>

        <Contact lang={lang} />

        <p className={Style.ctaText}>
          {content.ctaStart}
          <button
            type="button"
            onClick={() => scrollToSection("Sobre")}
            className={Style.inlineBtn}
          >
            {content.ctaButton}
          </button>
          {content.ctaEnd}
        </p>
      </div>

      {hasArt && <div className={Style.artSlot}>{children}</div>}
    </section>
  );
}

export default HeroSection;
