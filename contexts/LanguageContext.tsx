"use client";
import { createContext, useContext, useState, useEffect } from "react";

const translations: Record<string, Record<string, string>> = {
  en: {
    marketplace: "Marketplace",
    createAccount: "Create Account",
    login: "Login",
    seller: "Become a Seller",
  },
  it: {
    marketplace: "Marketplace",
    createAccount: "Crea Account",
    login: "Accedi",
    seller: "Diventa venditore",
  },
  ja: {
    marketplace: "マーケットプレイス",
    createAccount: "アカウントを作成",
    login: "ログイン",
    seller: "販売者になる",
  },
};

const LanguageContext = createContext<{
  lang: string;
  t: (key: string) => string;
  setLang: (lang: string) => void;
}>({
  lang: "en",
  t: (key: string) => key,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored) setLang(stored);
      else {
        const browserLang = navigator.language.split("-")[0];
        if (["en", "it", "ja"].includes(browserLang)) setLang(browserLang);
      }
    } catch (e) {
      // ignore (server-side)
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  const t = (key: string) => (translations[lang] && translations[lang][key]) || key;

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
