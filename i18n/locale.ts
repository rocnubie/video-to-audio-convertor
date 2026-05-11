// Native names for every locale we might ship.
// Add an entry here when you add a locale to routing.ts — the LanguageSwitcher
// reads from this table automatically.

export type LocaleMeta = {
  code: string;
  native: string;
  english: string;
};

export const LOCALE_META: Record<string, LocaleMeta> = {
  en: { code: "en", native: "English", english: "English" },
  zh: { code: "zh", native: "中文", english: "Chinese" },
  ja: { code: "ja", native: "日本語", english: "Japanese" },
  ko: { code: "ko", native: "한국어", english: "Korean" },
  es: { code: "es", native: "Español", english: "Spanish" },
  fr: { code: "fr", native: "Français", english: "French" },
  de: { code: "de", native: "Deutsch", english: "German" },
  pt: { code: "pt", native: "Português", english: "Portuguese" },
  it: { code: "it", native: "Italiano", english: "Italian" },
  ru: { code: "ru", native: "Русский", english: "Russian" },
  ar: { code: "ar", native: "العربية", english: "Arabic" },
  hi: { code: "hi", native: "हिन्दी", english: "Hindi" },
  id: { code: "id", native: "Bahasa Indonesia", english: "Indonesian" },
  tr: { code: "tr", native: "Türkçe", english: "Turkish" },
  vi: { code: "vi", native: "Tiếng Việt", english: "Vietnamese" },
};

export function localeLabel(code: string): string {
  return LOCALE_META[code]?.native ?? code.toUpperCase();
}
