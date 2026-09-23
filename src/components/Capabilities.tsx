import { Monitor, Sparkles, Camera, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

export default function Capabilities() {
  const { t, language } = useLanguage();
  const currentCapData = translations[language]?.capabilities || translations.ru.capabilities;

  const groupIcons = [Monitor, Sparkles, Camera];

  return (
    <section id="capabilities" className="scroll-mt-24 px-8 lg:px-16 py-24 max-w-[1600px] mx-auto border-t border-black/10 mt-12">
      <div className="grid lg:grid-cols-12 gap-16">
        {/* Left column: 3 Core Skill Groups */}
        <div className="lg:col-span-7">
          <p className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1E90FF]"></span>
            {t('capabilities.tag')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black uppercase mb-12">
            {t('capabilities.titleFirst')} <span className="text-[#1E90FF]">{t('capabilities.titleSecond')}</span>
          </h2>

          <div className="space-y-10">
            {currentCapData.skillGroups.map((group, i) => {
              const IconComp = groupIcons[i] || Monitor;
              return (
                <div 
                  key={i}
                  className="p-8 rounded-3xl bg-gray-50/70 border border-black/5 hover:border-[#1E90FF]/40 hover:bg-white transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-black/10 flex items-center justify-center text-[#1E90FF] group-hover:bg-[#1E90FF] group-hover:text-white group-hover:border-[#1E90FF] transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm tracking-wider text-black uppercase">
                        {group.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-light mt-0.5">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-2.5 mt-5 pt-5 border-t border-black/5">
                    {group.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E90FF] flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column: Tools & Education */}
        <div className="lg:col-span-5 flex flex-col gap-12">
          {/* Tools Grid */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">
              {t('capabilities.toolsTitle')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {(currentCapData.tools || [
                { name: 'Figma', category: 'UX/UI & Prototyping' },
                { name: 'Adobe Photoshop', category: 'Generative AI & Art' },
                { name: 'Midjourney v6', category: 'Concept & Prompts' },
                { name: 'Runway Gen-3', category: 'AI Video 60 fps' },
                { name: 'Kling AI', category: 'AI Video Motion' },
                { name: 'ComfyUI / SD', category: 'Generative Models' },
                { name: 'Premiere Pro', category: 'Video Edit & Sound' },
                { name: 'Topaz Video AI', category: 'Motion Upscale' },
                { name: 'Tailwind CSS', category: 'Design Systems' }
              ]).map((tool, i) => (
                <div 
                  key={i} 
                  className="p-3.5 rounded-2xl bg-white border border-black/10 hover:border-[#1E90FF] hover:bg-[#1E90FF]/5 transition-all group"
                >
                  <p className="text-xs font-bold text-black group-hover:text-[#1E90FF] transition-colors">
                    {tool.name}
                  </p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                    {tool.category}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Courses */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">
              {t('capabilities.educationTitle', t('capabilities.eduTitle'))}
            </h3>
            <div className="space-y-3">
              {(currentCapData.education || []).map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-gray-50 border border-black/5 hover:border-[#1E90FF]/40 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h4 className="font-bold text-sm text-black">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono text-gray-400 flex-shrink-0">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    {item.place}
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

