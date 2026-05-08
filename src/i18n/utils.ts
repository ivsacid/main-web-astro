import { ui, defaultLang } from './ui';

type UITranslations = typeof ui[typeof defaultLang];

export function useTranslations(lang: string | undefined) {
    const validLang = lang && lang in ui ? (lang as keyof typeof ui) : defaultLang;
  
    return function t(key: keyof UITranslations) {
        return ui[validLang][key] || ui[defaultLang][key];
    }
}