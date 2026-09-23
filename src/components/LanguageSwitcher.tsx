import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES, type Language } from '../i18n/types';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  theme?: 'light' | 'dark';
  className?: string;
  showIcon?: boolean;
}

export default function LanguageSwitcher({
  theme = 'light',
  className = '',
  showIcon = true,
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const isDark = theme === 'dark';

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full border transition-all ${
        isDark
          ? 'bg-white/[0.06] border-white/15 backdrop-blur-md shadow-inner shadow-black/20'
          : 'bg-black/[0.04] border-black/10 backdrop-blur-md shadow-sm'
      } ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      {showIcon && (
        <span
          className={`pl-2 pr-1.5 transition-colors ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
        </span>
      )}

      <div className="flex items-center gap-0.5">
        {LANGUAGES.map((item) => {
          const isActive = language === item.code;
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => setLanguage(item.code)}
              aria-pressed={isActive}
              aria-label={item.label}
              title={item.name}
              className={`px-2.5 py-1 text-[11px] font-bold tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                isActive
                  ? isDark
                    ? 'bg-[#1E90FF] text-white shadow-md shadow-[#1E90FF]/30 scale-[1.03]'
                    : 'bg-black text-white shadow-sm scale-[1.03]'
                  : isDark
                  ? 'text-gray-400 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-black hover:bg-black/5'
              }`}
            >
              {item.shortLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}
