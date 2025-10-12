import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import ar from "./translations/ar.json";

// 👇 Check if user already has saved language, otherwise default to Arabic
const savedLang = localStorage.getItem("lang") || "ar";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: savedLang, // default or saved language
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
