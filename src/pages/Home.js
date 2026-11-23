import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import StackSection from "../components/sections/StackSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import SectionBanner from "../components/sections/SectionBanner";
import { PROJECTS_CONTENT } from "../data/Project";
import { EXPERIENCE_CONTENT } from "../data/Experience";

function Home({ lang = "pt" }) {
  const location = useLocation();
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const projectContent = PROJECTS_CONTENT[lang] || PROJECTS_CONTENT.pt;
  const expContent = EXPERIENCE_CONTENT[lang] || EXPERIENCE_CONTENT.pt;

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;

    const el = document.getElementById(targetId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <main>
      <HeroSection lang={lang} />

      {/* BANNER 02 + FILTRO DE STACK + PROJETOS */}
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

      <StackSection
        lang={lang}
        selectedTech={selectedTech}
        onSelectTech={setSelectedTech}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

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

      <AboutSection lang={lang} />
    </main>
  );
}

export default Home;
