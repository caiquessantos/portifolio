import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { id: "Inicio", label: "Início" },
  { id: "Stack", label: "Stack" },
  { id: "Projetos", label: "Projetos" },
  { id: "Experiencia", label: "Experiência" },
  { id: "Sobre", label: "Sobre" },
];

const NAV_PALETTES = [
  { id: "Padrao", label: "Padrão", dot: "#B84A32" },
  { id: "Menta", label: "Menta", dot: "#276B60" },
  { id: "Escuro", label: "Escuro", dot: "#F08B73" },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("Inicio");
  const progressFillRef = useRef(null);

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
      for (const item of NAV_ITEMS) {
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
  }, [location.pathname]);

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
          <span className={styles.brandName}>caíque.dev</span>
        </div>

        <div className={styles.paletteGroup}>
          {NAV_PALETTES.map((palette) => {
            const isSelected = palette.id === "Padrao";

            return (
              <button
                key={palette.id}
                type="button"
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
      </div>

      <nav className={styles.navContainer}>
        {NAV_ITEMS.map((item) => {
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

export default Navbar;
