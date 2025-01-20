import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import English from "./assets/Translation/English.json";
import French from "./assets/Translation/French.json";
import Spanish from "./assets/Translation/Spanish.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: English,
  },
  fr: {
    translation: French,
  },
  es: {
    translation: Spanish,
  },
};

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources,
    // debug: true,
    // lng: "en",
    supportedLngs: ["en", "fr", "es"],
    detection: {
      order: ["path"],
    },
  });

export default i18next;
