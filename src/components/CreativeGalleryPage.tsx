import { useState, useRef, type MouseEvent } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  Film, 
  Image as ImageIcon, 
  Sparkles, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Palette,
} from 'lucide-react';
import { getProject } from '../data/projectsData';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import LanguageSwitcher from './LanguageSwitcher';

interface CreativeGalleryPageProps {
  onBack: () => void;
  onNavigateProject: (projectId: string) => void;
  onContactClick: () => void;
}

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  category: string;
  tag: string;
  description: string;
  technique: string[];
  src: string;
  thumbnail: string;
  originalUrl?: string;
  dimensions?: string;
  duration?: string;
}

export default function CreativeGalleryPage({
  onBack,
  onNavigateProject,
  onContactClick
}: CreativeGalleryPageProps) {
  const { t, language, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'image' | 'video'>('all');
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // Video refs
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const currentTranslations = translations[language]?.creativeGallery || translations.en?.creativeGallery || translations.ru.creativeGallery;
  const itemsTrans = currentTranslations.mediaItems;

  const mediaItems: MediaItem[] = [
    {
      id: 'photo-1',
      type: 'image',
      title: itemsTrans['photo-1'].title,
      category: itemsTrans['photo-1'].category,
      tag: itemsTrans['photo-1'].tag,
      description: itemsTrans['photo-1'].description,
      technique: itemsTrans['photo-1'].technique,
      src: '/media/photo_1.jpeg',
      thumbnail: '/media/photo_1.jpeg',
      originalUrl: 'https://raw.githubusercontent.com/liliyak606-sys/Liliya/refs/heads/main/public/img/photo_2026-09-23%2022.53.30.jpeg',
      dimensions: '1939 × 2560 px'
    },
    {
      id: 'photo-2',
      type: 'image',
      title: itemsTrans['photo-2'].title,
      category: itemsTrans['photo-2'].category,
      tag: itemsTrans['photo-2'].tag,
      description: itemsTrans['photo-2'].description,
      technique: itemsTrans['photo-2'].technique,
      src: '/media/photo_2.jpeg',
      thumbnail: '/media/photo_2.jpeg',
      originalUrl: 'https://raw.githubusercontent.com/liliyak606-sys/Liliya/refs/heads/main/public/img/photo_2026-09-23%2022.53.34.jpeg',
      dimensions: '1080 × 1350 px (4:5)'
    },
    {
      id: 'video-1',
      type: 'video',
      title: itemsTrans['video-1'].title,
      category: itemsTrans['video-1'].category,
      tag: itemsTrans['video-1'].tag,
      description: itemsTrans['video-1'].description,
      technique: itemsTrans['video-1'].technique,
      src: '/media/video_1.mp4',
      thumbnail: '/media/video_1_thumb.jpg',
      originalUrl: 'https://raw.githubusercontent.com/liliyak606-sys/Liliya/main/public/img/telegram-cloud-document-4-5881863806707048377.mp4',
      duration: '18.8 сек • 60 fps'
    },
    {
      id: 'video-2',
      type: 'video',
      title: itemsTrans['video-2'].title,
      category: itemsTrans['video-2'].category,
      tag: itemsTrans['video-2'].tag,
      description: itemsTrans['video-2'].description,
      technique: itemsTrans['video-2'].technique,
      src: '/media/video_2.mp4',
      thumbnail: '/media/video_2_thumb.jpg',
      originalUrl: 'https://raw.githubusercontent.com/liliyak606-sys/Liliya/main/public/img/telegram-cloud-document-4-5882223832340635043.mp4',
      duration: '19.7 сек • 30 fps'
    }
  ];

  const filteredItems = mediaItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  const handleTogglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      // Pause other playing videos
      Object.keys(videoRefs.current).forEach(key => {
        if (key !== id && videoRefs.current[key]) {
          videoRefs.current[key]?.pause();
        }
      });
      video.play().then(() => {
        setPlayingVideoId(id);
      }).catch(err => {
        console.warn('Playback error:', err);
      });
    } else {
      video.pause();
      setPlayingVideoId(null);
    }
  };

  const handleToggleMute = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const prevProject = getProject('aura-tel-aviv', language);
  const nextProject = getProject('bunker-ice-ai', language);

  return (
    <article className="min-h-screen bg-[#070709] text-white selection:bg-[#1E90FF] selection:text-white">
      {/* Top Floating Navigation */}
      <header className="sticky top-0 z-40 bg-[#070709]/80 backdrop-blur-xl border-b border-white/10 px-6 lg:px-16 py-4">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className={`w-4 h-4 text-[#1E90FF] ${isRTL ? 'rotate-180' : ''}`} />
            <span>{t('creativeGallery.navBack')}</span>
          </button>

          <div className="flex items-center gap-3">
            <LanguageSwitcher theme="dark" />

            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1E90FF] bg-[#1E90FF]/10 px-3 py-1 rounded-full border border-[#1E90FF]/20 hidden sm:inline-block">
              {t('creativeGallery.navTag')}
            </span>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#1E90FF]/20"
            >
              <span>{t('creativeGallery.orderCreatives')}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Exhibition Header */}
      <section className="px-6 lg:px-16 pt-16 pb-12 max-w-[1600px] mx-auto border-b border-white/10">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#1E90FF] bg-[#1E90FF]/15 px-3 py-1 rounded-md border border-[#1E90FF]/30">
              {t('creativeGallery.artMotionBadge')}
            </span>
            <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400 bg-white/5 px-3 py-1 rounded-md border border-white/10">
              {t('creativeGallery.authorLabel')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.05] mb-6">
            {t('creativeGallery.heroTitleFirst')}<span className="text-[#1E90FF]">{t('creativeGallery.heroTitleSecond')}</span>{t('creativeGallery.heroTitleThird')}<span className="text-[#1E90FF]">{t('creativeGallery.heroTitleFourth')}</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-8 max-w-3xl">
            {t('creativeGallery.heroDesc')}
          </p>

          {/* Quick Role Summary Cards */}
          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-[#1E90FF]/20 text-[#1E90FF] flex items-center justify-center mb-3">
                <Palette className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">{t('creativeGallery.cardPsTitle')}</h4>
              <p className="text-[11px] text-gray-400 font-light leading-snug">
                {t('creativeGallery.cardPsDesc')}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-[#1E90FF]/20 text-[#1E90FF] flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">{t('creativeGallery.cardAiTitle')}</h4>
              <p className="text-[11px] text-gray-400 font-light leading-snug">
                {t('creativeGallery.cardAiDesc')}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-[#1E90FF]/20 text-[#1E90FF] flex items-center justify-center mb-3">
                <Film className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">{t('creativeGallery.cardVideoTitle')}</h4>
              <p className="text-[11px] text-gray-400 font-light leading-snug">
                {t('creativeGallery.cardVideoDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section className="px-6 lg:px-16 py-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 w-fit">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#1E90FF] text-white shadow-lg shadow-[#1E90FF]/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('creativeGallery.filterAll')}
            </button>
            <button
              onClick={() => setActiveFilter('image')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeFilter === 'image'
                  ? 'bg-[#1E90FF] text-white shadow-lg shadow-[#1E90FF]/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>{t('creativeGallery.filterImages')}</span>
            </button>
            <button
              onClick={() => setActiveFilter('video')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeFilter === 'video'
                  ? 'bg-[#1E90FF] text-white shadow-lg shadow-[#1E90FF]/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>{t('creativeGallery.filterVideos')}</span>
            </button>
          </div>

          <div className="text-xs text-gray-400 font-light flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1E90FF] animate-pulse"></span>
            <span>{t('creativeGallery.filterTip')}</span>
          </div>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="px-6 lg:px-16 pb-24 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {filteredItems.map((item) => {
            const isPlaying = playingVideoId === item.id;

            return (
              <div
                key={item.id}
                className="group rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-[#1E90FF]/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Media Container */}
                <div className="relative overflow-hidden bg-black/40">
                  {item.type === 'image' ? (
                    <div 
                      className="relative aspect-[3/4] cursor-pointer overflow-hidden group/img"
                      onClick={() => setLightboxItem(item)}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover/img:scale-[1.03] transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-40 group-hover/img:opacity-70 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20">
                          {item.tag}
                        </span>
                        {item.dimensions && (
                          <span className="text-[10px] font-mono text-gray-300 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                            {item.dimensions}
                          </span>
                        )}
                      </div>

                      {/* Zoom Indicator on Hover */}
                      <div className="absolute bottom-4 right-4">
                        <span className="px-3.5 py-1.5 rounded-full bg-[#1E90FF] text-white text-[11px] font-bold tracking-wider uppercase backdrop-blur-md flex items-center gap-1.5 shadow-lg opacity-0 group-hover/img:opacity-100 transition-opacity">
                          <Maximize2 className="w-3.5 h-3.5" /> {t('creativeGallery.enlargePhoto')}
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Video Container (9:16 Aspect Ratio) */
                    <div className="relative aspect-[9/14] sm:aspect-[9/15] bg-black overflow-hidden group/vid">
                      <video
                        ref={(el) => { videoRefs.current[item.id] = el; }}
                        src={item.src}
                        poster={item.thumbnail}
                        playsInline
                        loop
                        muted={isMuted}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => handleTogglePlay(item.id)}
                      />

                      {/* Gradient overlay */}
                      <div 
                        className={`absolute inset-0 bg-black/40 transition-opacity pointer-events-none ${
                          isPlaying ? 'opacity-0' : 'opacity-100'
                        }`} 
                      />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10 pointer-events-none">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#1E90FF] text-white px-3 py-1 rounded-full shadow-lg">
                          {item.tag}
                        </span>
                        {item.duration && (
                          <span className="text-[10px] font-mono text-gray-200 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                            {item.duration}
                          </span>
                        )}
                      </div>

                      {/* Sound toggle button */}
                      <button
                        onClick={(e) => handleToggleMute(item.id, e)}
                        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-[#1E90FF] text-white backdrop-blur-md flex items-center justify-center transition-colors border border-white/20"
                        title={isMuted ? t('creativeGallery.soundTooltipUnmute') : t('creativeGallery.soundTooltipMute')}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>

                      {/* Center Play/Pause Overlay */}
                      <div 
                        onClick={() => handleTogglePlay(item.id)}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                      >
                        <button
                          className={`w-16 h-16 rounded-full bg-[#1E90FF]/90 hover:bg-[#1E90FF] text-white flex items-center justify-center transition-all transform shadow-2xl ${
                            isPlaying ? 'opacity-0 hover:opacity-100 scale-95 hover:scale-100' : 'opacity-100 scale-100'
                          }`}
                        >
                          {isPlaying ? (
                            <Pause className="w-7 h-7" />
                          ) : (
                            <Play className="w-7 h-7 ml-1" />
                          )}
                        </button>
                      </div>

                      {/* Bottom status bar */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-white/90 z-10 pointer-events-none">
                        <span className="bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                          {isPlaying ? t('creativeGallery.playing') : t('creativeGallery.paused')}
                        </span>
                        <span className="bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                          {isMuted ? t('creativeGallery.soundOff') : t('creativeGallery.soundOn')}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content & Details */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#1E90FF] block mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-4">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">
                        {t('creativeGallery.techniqueTitle')}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.technique.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] bg-white/[0.04] text-gray-200 px-3 py-1 rounded-lg border border-white/10 font-light flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#1E90FF]" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-between pt-2">
                      {item.originalUrl && (
                        <a
                          href={item.originalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E90FF] hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{t('creativeGallery.openOriginalFile')}</span>
                        </a>
                      )}

                      {item.type === 'image' && (
                        <button
                          onClick={() => setLightboxItem(item)}
                          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>{t('creativeGallery.fullscreenView')}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Narrative Section: What I Did (Чем я занималась) */}
      <section className="px-6 lg:px-16 py-20 bg-white/[0.02] border-t border-b border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#1E90FF] uppercase block mb-3">
              {t('creativeGallery.processBadge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase mb-4">
              {t('creativeGallery.processTitle')}
            </h2>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              {t('creativeGallery.processSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
              <span className="text-xs font-mono text-[#1E90FF] font-bold block mb-3">{t('creativeGallery.step1Num')}</span>
              <h3 className="text-base font-bold text-white mb-2">{t('creativeGallery.step1Title')}</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                {t('creativeGallery.step1Desc')}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
              <span className="text-xs font-mono text-[#1E90FF] font-bold block mb-3">{t('creativeGallery.step2Num')}</span>
              <h3 className="text-base font-bold text-white mb-2">{t('creativeGallery.step2Title')}</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                {t('creativeGallery.step2Desc')}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
              <span className="text-xs font-mono text-[#1E90FF] font-bold block mb-3">{t('creativeGallery.step3Num')}</span>
              <h3 className="text-base font-bold text-white mb-2">{t('creativeGallery.step3Title')}</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                {t('creativeGallery.step3Desc')}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
              <span className="text-xs font-mono text-[#1E90FF] font-bold block mb-3">{t('creativeGallery.step4Num')}</span>
              <h3 className="text-base font-bold text-white mb-2">{t('creativeGallery.step4Title')}</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                {t('creativeGallery.step4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation Footer (Prev / Next) */}
      <footer className="px-6 lg:px-16 py-16 max-w-[1600px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
          <button
            onClick={() => onNavigateProject(prevProject.id)}
            className={`flex items-center gap-3 ${isRTL ? 'text-right' : 'text-left'} p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-all w-full sm:w-auto`}
          >
            <ArrowLeft className={`w-5 h-5 text-[#1E90FF] ${isRTL ? 'rotate-180' : ''}`} />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block">{t('creativeGallery.prevCase')}</span>
              <span className="text-sm font-bold text-white">{prevProject.title}</span>
            </div>
          </button>

          <button
            onClick={onBack}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            {t('creativeGallery.allProjects')}
          </button>

          <button
            onClick={() => onNavigateProject(nextProject.id)}
            className={`flex items-center justify-end gap-3 ${isRTL ? 'text-left' : 'text-right'} p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-all w-full sm:w-auto`}
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block">{t('creativeGallery.nextCase')}</span>
              <span className="text-sm font-bold text-white">{nextProject.title}</span>
            </div>
            <ArrowRight className={`w-5 h-5 text-[#1E90FF] ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </footer>

      {/* Lightbox Modal for Full-Screen Image Viewing */}
      {lightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxItem(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute -top-12 right-0 sm:right-0 p-2 text-white/70 hover:text-white transition-colors"
              title={t('creativeGallery.close')}
            >
              <X className="w-7 h-7" />
            </button>

            {/* Full Image */}
            <img
              src={lightboxItem.src}
              alt={lightboxItem.title}
              className="max-w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Details Bar */}
            <div 
              className="mt-4 p-4 rounded-2xl bg-black/60 border border-white/10 text-center max-w-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-sm font-bold text-white mb-1">{lightboxItem.title}</h4>
              <p className="text-xs text-gray-400 font-light mb-2">{lightboxItem.description}</p>
              {lightboxItem.originalUrl && (
                <a
                  href={lightboxItem.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#1E90FF] hover:underline"
                >
                  <Download className="w-3 h-3" />
                  <span>{t('creativeGallery.downloadOriginal')}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

