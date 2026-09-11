"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "tr" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  // Nav
  "nav.about": { tr: "Hakkımda", en: "About" },
  "nav.skills": { tr: "Yetenekler", en: "Skills" },
  "nav.experience": { tr: "Deneyim", en: "Experience" },
  "nav.projects": { tr: "Projeler", en: "Projects" },
  "nav.architecture": { tr: "Mimari", en: "Architecture" },
  "nav.contact": { tr: "İletişim", en: "Contact" },

  // About section
  "about.title": { tr: "Hakkımda", en: "About" },
  "about.fact.experience": { tr: "Deneyim", en: "Experience" },
  "about.fact.focus": { tr: "Odak", en: "Focus" },
  "about.fact.stack": { tr: "Stack", en: "Stack" },
  "about.fact.location": { tr: "Konum", en: "Location" },

  // Skills section
  "skills.title": { tr: "Yetenekler & Teknolojiler", en: "Skills & Technologies" },
  "skills.lead": {
    tr: "Backend sistemleri tasarlarken, geliştirirken ve çalıştırırken kullandığım araçlar.",
    en: "The tools I reach for when designing, building and running backend systems.",
  },

  // Experience section
  "experience.title": { tr: "Deneyim", en: "Experience" },
  "experience.lead": {
    tr: "Çalıştığım yerler ve teslim ettiğim işler. En yeniden eskiye.",
    en: "Where I've worked and what I shipped. Most recent first.",
  },

  // Projects section
  "projects.title": { tr: "Projeler", en: "Projects" },
  "projects.lead": {
    tr: "Geliştirdiğim şeylerden bir seçki — servisler, pipeline'lar ve araçlar.",
    en: "A selection of things I've built — services, pipelines and tools.",
  },
  "projects.view": { tr: "Projeyi gör", en: "View project" },

  // Architecture section
  "architecture.title": { tr: "Mimari & Mühendislik", en: "Architecture & Engineering" },
  "architecture.lead": {
    tr: "Sistemler hakkında nasıl düşünüyorum — ilkeler ve tercih ettiğim şekiller.",
    en: "How I think about systems — the principles and the shape I reach for first.",
  },

  // Contact section
  "contact.title": { tr: "İletişim", en: "Contact" },
  "contact.pitch": {
    tr: "Yeni bir rol, işbirliği veya sadece merhaba demek için — bana ulaşın.",
    en: "For a new role, collaboration, or just to say hello — reach out.",
  },
  "contact.email": { tr: "E-posta", en: "Email" },
  "contact.github": { tr: "GitHub", en: "GitHub" },
  "contact.linkedin": { tr: "LinkedIn", en: "LinkedIn" },
  "contact.copyEmail": { tr: "E-postayı kopyala", en: "Copy email" },
  "contact.copied": { tr: "Kopyalandı", en: "Copied" },
} as const;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved === "tr" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const entry = translations[key as keyof typeof translations];
    if (!entry) return key;
    return entry[language] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
