import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import englishTranslation from "./translations/English.json";
import frenchTranslation from "./translations/French.json";

const resources = {
  en: {
    translation: englishTranslation,
  },
  fr: {
    translation: frenchTranslation,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18next;
