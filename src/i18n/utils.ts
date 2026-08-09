import { translations, defaultLocale, type Locale } from './translations';

export function useTranslations(lang: string | undefined) {
	const locale = (lang && lang in translations ? lang : defaultLocale) as Locale;
	return translations[locale];
}

export function getLocale(lang: string | undefined): Locale {
	return (lang && lang in translations ? lang : defaultLocale) as Locale;
}
