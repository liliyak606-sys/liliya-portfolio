import { useState, useEffect, type MouseEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'work', 'capabilities', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      
      // If near bottom of the page, highlight contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact');
        return;
      }

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }
      
      if (window.scrollY < 250) {
        setActiveSection('');
      } else {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', window.location.pathname);
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const navLinks = [
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'work', label: t('nav.work') },
    { id: 'capabilities', label: t('nav.capabilities') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/10 transition-all duration-300">
      <nav className="flex items-center justify-between py-4 sm:py-5 px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto gap-4">
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, 'top')}
          className="flex-shrink-0 text-2xl font-bold tracking-tighter text-black uppercase flex items-baseline hover:opacity-80 transition-opacity"
          aria-label={t('nav.homeAria')}
        >
          LK<span className={`inline-block w-[0.2em] h-[0.2em] bg-[#1E90FF] rounded-full ${isRTL ? 'mr-[0.05em]' : 'ml-[0.05em]'}`}></span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className={`relative transition-colors duration-200 py-1 ${
                activeSection === link.id
                  ? 'text-[#1E90FF] font-bold'
                  : 'hover:text-[#1E90FF]'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1E90FF] rounded-full" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher theme="light" />

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="hidden sm:inline-flex items-center gap-1.5 bg-black hover:bg-[#1E90FF] text-white px-4 lg:px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wider transition-colors uppercase whitespace-nowrap"
          >
            <span>{t('nav.discussProject')}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </a>
        </div>
      </nav>
    </header>
  );
}
