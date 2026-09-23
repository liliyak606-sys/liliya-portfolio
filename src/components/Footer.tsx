import { Mail, MapPin, Linkedin, Instagram, Dribbble, Clock } from 'lucide-react';
import ContactForm from './ContactForm';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="scroll-mt-24 px-8 lg:px-16 py-24 bg-white text-black border-t border-black/10">
      <div className="max-w-[1600px] mx-auto">
        {/* Main Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-start">
          {/* Left Column: Heading & Direct Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1E90FF]"></span>
                {t('footer.tag', t('contact.tag'))}
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.95] font-bold tracking-tighter uppercase mb-8 text-black">
                {t('footer.titleLine1', t('contact.headingLine1'))}<br />
                <span className="text-gray-400 font-light">{t('footer.titleLine2', t('contact.headingLine2'))}</span><br />
                <span className="text-[#1E90FF]">{t('footer.titleLine3', t('contact.headingLine3'))}</span>
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light mb-8 max-w-md">
                {t('footer.subtitle', t('contact.desc'))}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-xs text-gray-700 p-3.5 rounded-2xl bg-gray-50 border border-black/5 w-fit">
                  <Clock className="w-4 h-4 text-[#1E90FF]" />
                  <span>{t('footer.responseTime', t('contact.responseTime'))}</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-700 p-3.5 rounded-2xl bg-gray-50 border border-black/5 w-fit">
                  <MapPin className="w-4 h-4 text-[#1E90FF]" />
                  <span>{t('footer.location', t('contact.location'))}</span>
                </div>
              </div>
            </div>

            {/* Direct Social Links */}
            <div className="pt-6 border-t border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-3">
                {t('footer.directChannels', t('contact.directChannels'))}
              </span>
              <div className="flex items-center gap-3">
                <a 
                  href="mailto:lilushka50@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-[#1E90FF]/10 text-gray-700 hover:text-[#1E90FF] border border-black/5 text-xs font-medium transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  lilushka50@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm recipientEmail="lilushka50@gmail.com" />
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/10 text-[11px] text-gray-500 font-medium tracking-wide">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <img 
              src="https://raw.githubusercontent.com/liliyak606-sys/Liliya/refs/heads/main/public/logo/full%20logo%20BW.png" 
              alt="Лилия Хабло" 
              className="h-4 w-auto opacity-50 object-contain hover:opacity-100 transition-opacity" 
            />
            <p>{t('footer.copyright', t('contact.copyright'))}</p>
          </div>

          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <span className="uppercase tracking-[0.2em] text-gray-400 hidden sm:block">{t('footer.socials', t('contact.socials'))}</span>
            <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center border border-black/10 hover:border-[#1E90FF] hover:bg-[#1E90FF]/5 text-gray-500 hover:text-[#1E90FF] transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center border border-black/10 hover:border-[#1E90FF] hover:bg-[#1E90FF]/5 text-gray-500 hover:text-[#1E90FF] transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center border border-black/10 hover:border-[#1E90FF] hover:bg-[#1E90FF]/5 text-gray-500 hover:text-[#1E90FF] transition-colors">
              <Dribbble className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

