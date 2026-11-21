import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      acceleration: 'Acceleration',
      courses: 'Courses',
      certificates: 'Certificates',
      jobs: 'Jobs',
      teach: 'Teach',
      login: 'Log In',
      getStarted: 'Get Started'
    },
    portal: {
      searchPlaceholder: 'Search labs, apprentices...',
      notifications: 'Notifications',
      logout: 'Sign Out',
      activeStatus: 'Active',
      instructorMode: 'Instructor Mode',
      studentMode: 'Apprentice Mode'
    }
  },
  ja: {
    nav: {
      acceleration: 'キャリア加速',
      courses: '講座一覧',
      certificates: 'JIS資格認定',
      jobs: '就職求人',
      teach: '講師募集',
      login: 'ログイン',
      getStarted: '始める'
    },
    portal: {
      searchPlaceholder: '講座・見習いを検索...',
      notifications: 'お知らせ',
      logout: 'サインアウト',
      activeStatus: '稼働中',
      instructorMode: '指導員モード',
      studentMode: '見習い受講生モード'
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('samurai_language') || 'en';
    } catch {
      return 'en';
    }
  });

  const toggleLanguage = (lang) => {
    const next = lang || (language === 'en' ? 'ja' : 'en');
    setLanguage(next);
    try {
      localStorage.setItem('samurai_language', next);
    } catch {}
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      language: 'en',
      toggleLanguage: () => {},
      t: translations.en
    };
  }
  return ctx;
}
