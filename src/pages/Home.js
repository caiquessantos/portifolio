import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import StackSection from "../components/sections/StackSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import SectionBanner from "../components/sections/SectionBanner";
import { PROJECTS_CONTENT } from "../data/ProjectData";
import { EXPERIENCE_CONTENT } from "../data/ExperienceData";
import { ABOUT_CONTENT } from "../data/AboutData";

function Home() {
  const { lang } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTech, setSelectedTech] = useState(null);
  const pendingSectionRef = useRef(null);

  const projectContent = PROJECTS_CONTENT[lang] || PROJECTS_CONTENT.pt;
  const expContent = EXPERIENCE_CONTENT[lang] || EXPERIENCE_CONTENT.pt;
  const aboutContent = ABOUT_CONTENT[lang] || ABOUT_CONTENT.pt;

  useEffect(() => {
    const state = location.state;
    if (!state?.scrollTo && !state?.projectSlug) return;

    if (state.scrollTo?.startsWith("exp-")) {
      pendingSectionRef.current = "Experiencia";
    } else if (state.scrollTo?.startsWith("proj-") || state.projectSlug) {
      pendingSectionRef.current = "Projetos";
    } else if (state.scrollTo) {
      pendingSectionRef.current = state.scrollTo;
    }

    navigate(location.pathname, { replace: true, state: {} });
  }, [location.state, location.pathname, navigate]);

  useEffect(() => {
    const sectionId = pendingSectionRef.current;
    if (!sectionId) return;

    const scrollToSection = () => {
      const el = document.getElementById(sectionId);
      if (!el) return false;

      const headerOffset = 140;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: "auto",
      });
      return true;
    };

    const t1 = setTimeout(scrollToSection, 0);
    const t2 = setTimeout(() => {
      if (scrollToSection()) {
        pendingSectionRef.current = null;
      }
    }, 150);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.key]);

  return (
    <main>
      <HeroSection lang={lang} />

      <StackSection
        lang={lang}
        selectedTech={selectedTech}
        onSelectTech={setSelectedTech}
      />

      {/* BANNER 02 + PROJETOS */}
      <section id="Projetos" className="container">
        <SectionBanner
          stepBadge={projectContent.stepBadge}
          title={projectContent.title}
          subtitleStart={projectContent.subtitleStart}
          subtitleHighlight={projectContent.subtitleHighlight}
          subtitleMiddle={projectContent.subtitleMiddle}
          subtitleCode={projectContent.subtitleCode}
          subtitleEnd={projectContent.subtitleEnd}
        />
      </section>

      <ProjectsSection lang={lang} selectedTech={selectedTech} />

      {/* BANNER 03 + EXPERIÊNCIAS */}
      <section id="Experiencia" className="container">
        <SectionBanner
          stepBadge={expContent.stepBadge}
          title={expContent.title}
          subtitleStart={expContent.subtitleStart}
          subtitleHighlight={expContent.subtitleHighlight}
          subtitleMiddle={expContent.subtitleMiddle}
          subtitleCode={expContent.subtitleCode}
          subtitleEnd={expContent.subtitleEnd}
        />
      </section>

      <ExperienceSection lang={lang} selectedTech={selectedTech} />

      {/* BANNER 04 + SOBRE */}
      <section id="Sobre" className="container">
        <SectionBanner
          stepBadge={aboutContent.stepBadge}
          title={aboutContent.title}
          subtitleStart={aboutContent.subtitleStart}
          subtitleHighlight={aboutContent.subtitleHighlight}
          subtitleEnd={aboutContent.subtitleEnd}
        />
      </section>

      <AboutSection lang={lang} />
    </main>
  );
}

export default Home;
