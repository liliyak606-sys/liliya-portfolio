import React, { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import { type Language } from './types';
import { translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (path: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lk_lang_pref') as Language;
      if (saved && (saved === 'en' || saved === 'he' || saved === 'ru')) {
        return saved;
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lk_lang_pref', lang);
      localStorage.setItem('lk_lang', lang);
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const isRTL = language === 'he';
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language]);

  const isRTL = language === 'he';

  const t = useMemo(() => {
    return (path: string, fallback?: string): string => {
      const keys = path.split('.');
      let current: any = translations[language];
      for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
          current = current[k];
        } else {
          // Fallback to EN first, then RU
          let enCurrent: any = translations.en;
          for (const ek of keys) {
            if (enCurrent && typeof enCurrent === 'object' && ek in enCurrent) {
              enCurrent = enCurrent[ek];
            } else {
              enCurrent = undefined;
              break;
            }
          }
          if (typeof enCurrent === 'string') return enCurrent;

          let ruCurrent: any = translations.ru;
          for (const rk of keys) {
            if (ruCurrent && typeof ruCurrent === 'object' && rk in ruCurrent) {
              ruCurrent = ruCurrent[rk];
            } else {
              ruCurrent = undefined;
              break;
            }
          }
          return typeof ruCurrent === 'string' ? ruCurrent : fallback || path;
        }
      }
      return typeof current === 'string' ? current : fallback || path;
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
