import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const STORAGE_KEY = "caique-portfolio-lang";
const VALID_LANGS = ["pt", "en"];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return VALID_LANGS.includes(saved) ? saved : "pt";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "lang",
      lang === "en" ? "en" : "pt-BR",
    );
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
}
