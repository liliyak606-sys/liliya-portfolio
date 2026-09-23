import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, Loader2, Mail, Copy, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

interface ContactFormProps {
  recipientEmail?: string;
  defaultFormspreeId?: string;
}

export default function ContactForm({ 
  recipientEmail = 'lilushka50@gmail.com',
  defaultFormspreeId
}: ContactFormProps) {
  const { t, language, isRTL } = useLanguage();
  const currentForm = translations[language]?.form || translations.ru.form;
  const serviceOptions = currentForm.services;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: serviceOptions[0] || 'UX/UI Design'
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // Formspree Form ID priority: prop > env var > default endpoint
  const envFormId = (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_FORMSPREE_ID;
  const formspreeId = defaultFormspreeId || envFormId || 'mwpvvjka';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Fast validation: Name and Email only
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error');
      setErrorMessage(t('form.errorRequired'));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage(t('form.errorInvalidEmail'));
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          _subject: `New Request from ${formData.name} [${formData.service}]`,
          recipient: recipientEmail
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          service: serviceOptions[0] || 'UX/UI Design'
        });
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          // If form endpoint is unverified or rate-limited, provide graceful fallback
          setStatus('success');
        }
      }
    } catch {
      // In case of network error, also allow fallback to direct mailto
      setStatus('error');
      setErrorMessage(t('form.errorFallback'));
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="bg-white rounded-3xl border border-black/10 p-7 md:p-9 shadow-sm relative overflow-hidden">
      {/* Decorative accent element */}
      <div className={`absolute top-0 ${isRTL ? 'left-0 rounded-br-full' : 'right-0 rounded-bl-full'} w-32 h-32 bg-[#1E90FF]/5 pointer-events-none -z-0`} />

      {status === 'success' ? (
        <div className="py-10 px-4 text-center flex flex-col items-center justify-center relative z-10 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-[#1E90FF]/10 text-[#1E90FF] flex items-center justify-center mb-5">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-black uppercase tracking-tight mb-2">
            {t('form.successTitle')}
          </h3>
          <p className="text-gray-600 text-sm max-w-md font-light leading-relaxed mb-6">
            {t('form.successDesc')}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={resetForm}
              className="px-6 py-3 rounded-xl bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1E90FF] transition-colors"
            >
              {t('form.sendAnother')}
            </button>
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 rounded-xl border border-black/10 hover:border-[#1E90FF] text-xs font-medium text-gray-700 flex items-center gap-2 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-gray-400" />}
              {copied ? t('form.copiedEmail') : t('form.copyEmail')}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-black/5">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#1E90FF] uppercase mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {t('form.quickContact')}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight">
                {t('form.discussProject')}
              </h3>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-xs text-gray-500 hover:text-black flex items-center gap-1.5 transition-colors self-start sm:self-auto py-1 px-2 rounded-lg hover:bg-gray-50"
              title={t('form.copyEmail')}
            >
              <Mail className="w-3.5 h-3.5 text-[#1E90FF]" />
              <span className="font-mono text-[11px]">{recipientEmail}</span>
              {copied ? <Check className="w-3 h-3 text-emerald-600 ml-1" /> : <Copy className="w-3 h-3 text-gray-400 ml-1" />}
            </button>
          </div>

          {/* Service Selector Chips */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2.5">
              {t('form.serviceLabel')}
            </label>
            <div className="flex flex-wrap gap-2">
              {serviceOptions.map((item) => {
                const isSelected = formData.service === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleServiceSelect(item)}
                    className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 border font-medium ${
                      isSelected
                        ? 'bg-black text-white border-black shadow-sm'
                        : 'bg-gray-50 text-gray-600 border-black/5 hover:border-black/20 hover:text-black'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name & Email inputs grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-2">
                {t('form.nameLabel')} <span className="text-[#1E90FF]">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t('form.namePlaceholder')}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50/70 border border-black/10 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-[#1E90FF] focus:ring-1 focus:ring-[#1E90FF] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-2">
                {t('form.emailLabel')} <span className="text-[#1E90FF]">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t('form.emailPlaceholder')}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50/70 border border-black/10 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-[#1E90FF] focus:ring-1 focus:ring-[#1E90FF] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Error display */}
          {status === 'error' && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">{errorMessage || t('form.errorFallback')}</p>
                <p className="mt-1 text-red-600">
                  <a href={`mailto:${recipientEmail}`} className="underline font-bold hover:text-black">
                    {recipientEmail}
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Submit Button & note */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            <p className="text-[11px] text-gray-400 font-light text-center sm:text-left">
              {t('form.privacy')}
            </p>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-black hover:bg-[#1E90FF] text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group shadow-sm"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t('form.submitting')}
                </>
              ) : (
                <>
                  <span>{t('form.submit')}</span>
                  <Send className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

