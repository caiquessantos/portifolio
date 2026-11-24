import { useEffect, useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const projectContent = PROJECTS_CONTENT[lang] || PROJECTS_CONTENT.pt;
  const expContent = EXPERIENCE_CONTENT[lang] || EXPERIENCE_CONTENT.pt;
  const aboutContent = ABOUT_CONTENT[lang] || ABOUT_CONTENT.pt;

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;

    const el =
      document.getElementById(targetId) ||
      (targetId.startsWith("exp-")
        ? document.getElementById("Experiencia")
        : targetId.startsWith("proj-")
          ? document.getElementById("Projetos")
          : null);

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }

    navigate(location.pathname, { replace: true, state: {} });
  }, [location, navigate]);

  return (
    <main>
      <HeroSection lang={lang} />

      <StackSection
        lang={lang}
        selectedTech={selectedTech}
        onSelectTech={setSelectedTech}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
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

      <ProjectsSection
        lang={lang}
        selectedTech={selectedTech}
        selectedCategory={selectedCategory}
      />

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
