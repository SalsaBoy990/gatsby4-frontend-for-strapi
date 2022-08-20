import i18next from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// @ts-ignore
i18next
  .use(Backend)
  // use or not to use the language detector middleware
  .use(LanguageDetector)
  .init({
    fallbackLng: "hu", // the default in no translation is present for the string
    resources: {
      hu: {
        translations: require("../locales/hu/translations.json"),
      },
      en: {
        translations: require("../locales/en/translations.json"),
      },
      zh: {
        translations: require("../locales/zh/translations.json"),
      },
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      //wait: true,
      useSuspense: false
    },
  });

i18next.languages = ["hu", "en", "zh"];

export default i18next;
