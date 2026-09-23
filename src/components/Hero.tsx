import type { MouseEvent } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t, isRTL } = useLanguage();

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section className="px-8 lg:px-16 py-12 lg:py-24 max-w-[1600px] mx-auto relative overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-8 flex flex-col items-start">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-gray-500 uppercase px-3 py-1 rounded-full bg-gray-100 border border-black/5">
              {t('hero.badge')}
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-[#1E90FF] uppercase">
              {t('hero.name')}
            </span>
          </div>
          
          <div className="mb-4 relative z-20 w-full max-w-2xl flex items-baseline">
            <h1 className="text-[16vw] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] font-bold tracking-tighter uppercase text-black leading-none whitespace-nowrap flex items-baseline">
              Liliya K<span className={`inline-block w-[0.15em] h-[0.15em] bg-[#1E90FF] rounded-full ${isRTL ? 'mr-[0.05em]' : 'ml-[0.05em]'}`}></span>
            </h1>
          </div>
          
          <div className="max-w-xl">
            <p className="text-base text-gray-600 mb-8 leading-relaxed font-light">
              {t('hero.bio')}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, 'work')}
                className="flex items-center gap-2 bg-black hover:bg-[#1E90FF] text-white px-6 py-3.5 rounded-full text-[11px] font-bold tracking-wider transition-colors uppercase"
              >
                <span>{t('hero.viewProjects')}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="flex items-center gap-2 bg-transparent hover:text-[#1E90FF] text-black px-2 py-3.5 text-[11px] font-bold tracking-wider transition-colors uppercase"
              >
                <span>{t('hero.discussTask')}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
              </a>
            </div>
          </div>
        </div>
        
        <div className={`lg:col-span-4 absolute top-0 bottom-0 w-[45%] hidden lg:block -z-10 ${isRTL ? 'left-0' : 'right-0'}`}>
          <div className={`absolute top-1/4 text-black/10 animate-pulse ${isRTL ? 'left-1/4' : 'right-1/4'}`}>
            <Sparkles className="w-8 h-8" />
          </div>
          <video 
            src="https://raw.githubusercontent.com/liliyak606-sys/Liliya/main/public/img/Liliya_khablo_httpss.mj.run7lTBzFtMKwo_--ar_11_--video_1_0d0bf9b8-9c0f-487d-ab37-732aae372b07_2.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover object-top opacity-60 mix-blend-luminosity"
            style={{ 
              WebkitMaskImage: isRTL 
                ? 'linear-gradient(to left, transparent, black 20%)' 
                : 'linear-gradient(to right, transparent, black 20%)' 
            }}
          />
          <div className={`absolute top-1/2 -translate-y-1/2 flex flex-col gap-1 ${isRTL ? '-left-8 items-start' : '-right-8 items-end'}`}>
             <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">{t('hero.openFor')}</p>
             <p className="text-xl font-bold tracking-widest uppercase text-black flex items-center gap-2">
               {t('hero.projectsUpper')} <ArrowUpRight className={`w-4 h-4 text-gray-500 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
             </p>
             <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">{t('hero.andTasks')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
