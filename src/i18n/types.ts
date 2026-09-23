export type Language = 'en' | 'he' | 'ru';

export interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
  name: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', shortLabel: 'EN', name: 'English' },
  { code: 'he', label: 'עברית', shortLabel: 'HE', name: 'עברית' },
  { code: 'ru', label: 'Русский', shortLabel: 'RU', name: 'Русский' },
];
