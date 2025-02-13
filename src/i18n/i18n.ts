/* eslint-disable @typescript-eslint/no-require-imports */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: { translation: require("../locales/en/common.json") },
  hi: { translation: require("../locales/hi/common.json") },
  ta: { translation: require("../locales/ta/common.json") }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
