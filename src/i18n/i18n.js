import { createI18n } from "vue-i18n";
import ar from "./ar";
import en from "./en";
export default createI18n({
  locale: "en", // Set the default locale
  fallbackLocale: "en", // Fallback if translation is missing
  messages: {
    en, // English translations
    ar, // arabic translations
  },
});
