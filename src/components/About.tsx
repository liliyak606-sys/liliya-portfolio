import { Sparkles, GraduationCap, Laptop, Camera } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

export default function About() {
  const { t, language } = useLanguage();

  const pillarIcons = [Laptop, Sparkles, Camera];
  const currentAbout = translations[language]?.about || translations.ru.about;

  return (
    <section id="about" className="scroll-mt-24 px-8 lg:px-16 py-24 max-w-[1600px] mx-auto border-t border-black/10 mt-12">
      <div className="grid lg:grid-cols-12 gap-12">
        {/* Left column */}
        <div className="lg:col-span-4">
          <p className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1E90FF]"></span>
            {t('about.tag')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black uppercase mb-6">
            {t('about.titleFirst')} <span className="text-[#1E90FF]">{t('about.titleSecond')}</span>
          </h2>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-8">
            {t('about.role')}
          </p>

          <div className="p-6 rounded-2xl bg-gray-50 border border-black/5 space-y-4">
            <div className="flex items-center gap-3 text-xs font-medium text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {t('about.status')}
            </div>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              {t('about.statusDesc')}
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          {/* Main Statement */}
          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-black mb-6 leading-snug tracking-tight">
              {t('about.mainTitle')}
            </h3>
            <p className="text-base text-gray-600 font-light leading-relaxed max-w-3xl">
              {t('about.mainDesc')}
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid md:grid-cols-3 gap-5">
            {currentAbout.pillars.map((pillar, i) => {
              const IconComponent = pillarIcons[i] || Laptop;
              return (
                <div 
                  key={i} 
                  className="group p-6 rounded-2xl bg-gray-50/80 border border-black/5 hover:border-[#1E90FF] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1E90FF]/10 transition-all duration-300 flex flex-col cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center mb-6 group-hover:bg-[#1E90FF] group-hover:border-[#1E90FF] transition-colors">
                    <IconComponent className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-semibold text-sm text-black mb-2 group-hover:text-[#1E90FF] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Education & Certification Section */}
          <div className="pt-8 border-t border-black/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#1E90FF]" />
                <h4 className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                  {t('about.educationTitle')}
                </h4>
              </div>
              <span className="text-xs font-mono text-gray-400">{t('about.educationYears')}</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {currentAbout.education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-black/10 hover:border-[#1E90FF]/60 hover:bg-[#1E90FF]/5 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E90FF] bg-[#1E90FF]/10 px-2.5 py-0.5 rounded-full">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono text-gray-400">{edu.year}</span>
                  </div>
                  <h5 className="font-bold text-sm text-black group-hover:text-[#1E90FF] transition-colors mb-1">
                    {edu.role}
                  </h5>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    {edu.school}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
