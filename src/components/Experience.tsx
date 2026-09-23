import { useState } from 'react';
import { 
  Video, 
  Globe, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Zap, 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { t, language } = useLanguage();

  const currentExpData = translations[language]?.experience || translations.ru.experience;
  const statIcons = [Zap, Video, Globe, Layers];

  // Robust filter tabs definition supporting both object or array format
  const filterTabs = [
    { id: 'all', label: currentExpData.filters?.all || 'Все направления' },
    { id: 'creativeDirection', label: currentExpData.filters?.creativeDirection || 'Арт-дирекшн' },
    { id: 'marketing', label: currentExpData.filters?.marketing || 'SMM & Контент' },
    { id: 'aiMedia', label: currentExpData.filters?.aiMedia || 'AI Фото & Видео' },
    { id: 'webDesign', label: currentExpData.filters?.webDesign || 'Веб-дизайн & AI' },
  ];

  const itemCategoryMap: Record<string, string> = {
    'bunker-255': 'creativeDirection',
    'freelance-smm-media': 'marketing',
    'ai-media': 'aiMedia',
    'web-design': 'webDesign',
  };

  const experienceItems = currentExpData.items || (currentExpData as any).experiences || [];

  const filteredExperiences = activeFilter === 'all'
    ? experienceItems
    : experienceItems.filter(exp => itemCategoryMap[exp.id] === activeFilter || (exp as any).category === activeFilter);

  return (
    <section id="experience" className="scroll-mt-24 px-8 lg:px-16 py-24 max-w-[1600px] mx-auto border-t border-black/10">
      {/* Header section */}
      <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
        <div className="lg:col-span-4">
          <p className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1E90FF]"></span>
            {t('experience.tag')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black uppercase">
            {t('experience.titleFirst')} <span className="text-[#1E90FF]">{t('experience.titleSecond')}</span>
          </h2>
        </div>
        
        <div className="lg:col-span-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="text-gray-600 max-w-xl text-sm md:text-base font-light leading-relaxed">
            {t('experience.subtitle', t('experience.desc'))}
          </p>

          {/* Interactive filter pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-gray-100/80 rounded-2xl border border-black/5 self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-[11px] font-medium transition-all duration-200 uppercase tracking-wider ${
                  activeFilter === tab.id
                    ? 'bg-black text-white shadow-sm'
                    : 'text-gray-600 hover:text-black hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics & Impact Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
        {currentExpData.stats.map((stat, i) => {
          const IconComp = statIcons[i] || Zap;
          return (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-gray-50/70 border border-black/5 hover:border-[#1E90FF]/40 hover:bg-white transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-black group-hover:text-[#1E90FF] transition-colors">
                  {stat.value}
                </span>
                <div className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center text-black group-hover:bg-[#1E90FF] group-hover:text-white group-hover:border-[#1E90FF] transition-all">
                  <IconComp className="w-4 h-4" />
                </div>
              </div>
              <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-1">{stat.label}</h4>
              <p className="text-xs text-gray-500 font-light leading-snug">{stat.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Experience Cards Grid */}
      <div className="space-y-6">
        {filteredExperiences.map((exp: any) => (
          <div
            key={exp.id}
            className="group relative bg-white rounded-3xl border border-black/10 p-7 md:p-10 hover:border-[#1E90FF] hover:shadow-xl hover:shadow-[#1E90FF]/5 transition-all duration-300"
          >
            {/* Top row: Number, badges, and period */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-black/5 pb-5">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-[#1E90FF] bg-[#1E90FF]/10 px-2.5 py-1 rounded-md">
                  {exp.number}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-black/5">
                  {exp.categoryBadge}
                </span>
                <span className="text-xs text-gray-400 font-medium">|</span>
                <span className="text-xs text-gray-600 font-medium">{exp.company}</span>
              </div>

              <div className="flex items-center gap-3">
                {(exp.metricValue || exp.metric?.value) && (
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-black bg-gray-50 border border-black/10 px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3 text-[#1E90FF]" />
                    <span className="text-[#1E90FF]">{exp.metricValue || exp.metric?.value}</span> {exp.metricLabel || exp.metric?.label}
                  </span>
                )}
                <span className="text-xs font-mono text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-black/5">
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Main content */}
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left column: Title, role, summary */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-[#1E90FF] transition-colors tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-700 mb-4">{exp.role}</p>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {exp.summary}
                  </p>
                </div>

                {/* Mobile metric if present */}
                {(exp.metricValue || exp.metric?.value) && (
                  <div className="sm:hidden mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-black bg-gray-50 border border-black/10 px-3 py-1.5 rounded-xl w-fit">
                    <Sparkles className="w-3.5 h-3.5 text-[#1E90FF]" />
                    <span className="text-[#1E90FF]">{exp.metricValue || exp.metric?.value}</span> {exp.metricLabel || exp.metric?.label}
                  </div>
                )}
              </div>

              {/* Right column: Highlights list & tools */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div className="mb-6">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                    {t('experience.keyResultsTitle')}
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#1E90FF] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech & AI Tools stack tags */}
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">
                    {t('experience.stackTitle')}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium text-gray-700 bg-gray-50 hover:bg-[#1E90FF]/10 hover:text-[#1E90FF] border border-black/5 hover:border-[#1E90FF]/30 px-2.5 py-1 rounded-lg transition-colors cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


