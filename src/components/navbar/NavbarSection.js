import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { NAVBAR_CONTENT, NAVBAR_LANGUAGES } from "../../data/NavbarData";
import styles from "./Navbar.module.css";

function NavbarSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const [activeSection, setActiveSection] = useState("Inicio");
  const progressFillRef = useRef(null);

  const content = NAVBAR_CONTENT[lang] || NAVBAR_CONTENT.pt;
  const navItems = content.navItems;
  const palettes = content.palettes;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const pct =
        docHeight > 0
          ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
          : 0;

      if (progressFillRef.current) {
        progressFillRef.current.style.width = `${pct}%`;
      }

      if (location.pathname !== "/") return;

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 24;

      if (nearBottom) {
        setActiveSection("Sobre");
        return;
      }

      let current = "Inicio";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 180) {
          current = item.id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname, navItems]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);

    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      }
      return;
    }

    navigate("/", { state: { scrollTo: sectionId } });
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.topBar}>
        <div className={styles.brandGroup}>
          <span className={styles.brandBadge}>C.</span>
          <span className={styles.brandName}>{content.brandName}</span>
        </div>

        <div className={styles.topActions}>
          <div className={styles.paletteGroup}>
            {palettes.map((palette) => {
              const isSelected = theme === palette.id;

              return (
                <button
                  key={palette.id}
                  type="button"
                  onClick={() => setTheme(palette.id)}
                  aria-pressed={isSelected}
                  className={`${styles.palBtn} ${
                    isSelected ? styles.palBtnActive : ""
                  }`}
                >
                  <span
                    className={styles.palDot}
                    style={{ backgroundColor: palette.dot }}
                  />
                  <span>{palette.label}</span>
                </button>
              );
            })}
          </div>

          <div className={styles.langGroup} role="group" aria-label="Idioma">
            {NAVBAR_LANGUAGES.map((item) => {
              const isSelected = lang === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLang(item.id)}
                  title={item.title}
                  aria-pressed={isSelected}
                  className={`${styles.langBtn} ${
                    isSelected ? styles.langBtnActive : ""
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <nav className={styles.navContainer}>
        {navItems.map((item) => {
          const isActive =
            (location.pathname === "/" && activeSection === item.id) ||
            (location.pathname.startsWith("/experiencia") &&
              item.id === "Experiencia") ||
            (location.pathname.startsWith("/projeto") &&
              item.id === "Projetos");

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`${styles.navBtn} ${
                isActive ? styles.navBtnActive : ""
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className={styles.progressTrack}>
        <div ref={progressFillRef} className={styles.progressFill} />
      </div>
    </header>
  );
}

export default NavbarSection;
