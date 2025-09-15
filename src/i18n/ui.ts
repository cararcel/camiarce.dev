import englishTranslation from '../assets/translation/en.json'
import frenchTranslation from '../assets/translation/fr.json'
import spanishTranslation from '../assets/translation/es.json'

export const languages = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
};

export const lang = [
    {
        label: "English",
        url: "/en",
        icon: "🇬🇧",
        title: "Switch to English"
    },
    {
        label: "Français",
        url: "/fr",
        icon: "🇧🇪",
        title: "Switch to French"
    },
    {
        label: "Español",
        url: "/es",
        icon: "🇨🇱",
        title: "Switch to Spanish"
    }
]

export const defaultLang = 'en';

export const showDefaultLang = false;

export const ui = {
  en: englishTranslation,
  fr: frenchTranslation,
  es: spanishTranslation,
} as const;

