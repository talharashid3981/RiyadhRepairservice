import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import ar from "./translations/ar.json";

// 🔥 FIXED: Always default to Arabic, no localStorage check on first load
// This ensures Arabic is ALWAYS the default language
const getInitialLanguage = () => {
  const savedLang = localStorage.getItem("lang");
  
  // If no saved language, default to Arabic
  if (!savedLang) {
    localStorage.setItem("lang", "ar");
    return "ar";
  }
  
  return savedLang;
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: getInitialLanguage(), // Always defaults to Arabic
    fallbackLng: "ar", // Fallback is also Arabic
    interpolation: {
      escapeValue: false,
    },
  });

// 🔥 FIXED: Keep LTR direction for both languages (no RTL change)
// Save language preference and ensure it persists across navigation
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
  localStorage.setItem("lang", lng);
  // Direction stays LTR for both English and Arabic
  document.documentElement.setAttribute('dir', 'ltr');
  
  // Force re-render by triggering a small DOM change
  document.body.classList.remove('lang-en', 'lang-ar');
  document.body.classList.add(`lang-${lng}`);
});

// Set initial direction to LTR
document.documentElement.setAttribute('dir', 'ltr');
document.documentElement.setAttribute('lang', i18n.language);

export default i18n;