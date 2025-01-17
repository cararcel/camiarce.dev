import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import English from "./assets/Translation/English.json";
import French from "./assets/Translation/French.json";
import Spanish from "./assets/Translation/Spanish.json";

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

i18next.use(initReactI18next).init({
  resources,
  debug: true,
  lng: "en", //default language
});

export default i18next;
