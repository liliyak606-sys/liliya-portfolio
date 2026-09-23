import { useState, useRef, type MouseEvent } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  Film, 
  Image as ImageIcon, 
  Sparkles, 
  ArrowUpRight, 
  ExternalLink,
  Layers,
  Wand2
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

interface MultimediaShowcaseProps {
  onOpenGallery: () => void;
  onContactClick?: () => void;
}

interface MediaCardItem {
  id: 'photo-1' | 'photo-2' | 'video-1' | 'video-2';
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  badge: string;
  badgeRu: string;
  badgeHe: string;
  badgeEn: string;
  highlight: string;
  highlightRu: string;
  highlightHe: string;
  highlightEn: string;
}

const MEDIA_CARDS: MediaCardItem[] = [
  {
    id: 'video-1',
    type: 'video',
    src: '/media/video_1.mp4',
    thumbnail: '/media/video_1_thumb.jpg',
    badge: 'AI Artist • 60 FPS',
    badgeRu: 'AI Креативы • 60 FPS',
    badgeHe: 'קריאייטיב AI • 60 FPS',
    badgeEn: 'AI Artist • 60 FPS',
    highlight: 'Characters & Fashion Brands',
    highlightRu: 'Любые персонажи & Бренды',
    highlightHe: 'דמויות ומותגי על',
    highlightEn: 'Characters & Fashion Brands'
  },
  {
    id: 'video-2',
    type: 'video',
    src: '/media/video_2.mp4',
    thumbnail: '/media/video_2_thumb.jpg',
    badge: 'Photoshop Workflow',
    badgeRu: 'Процесс в Photoshop',
    badgeHe: 'תהליך בפוטושופ',
    badgeEn: 'Photoshop Workflow',
    highlight: 'Live Layer Assembly',
    highlightRu: 'Пошаговая сборка фото',
    highlightHe: 'בניית תמונה צעד-אחר-צעד',
    highlightEn: 'Live Layer Assembly'
  },
  {
    id: 'photo-1',
    type: 'image',
    src: '/media/photo_1.jpeg',
    thumbnail: '/media/photo_1.jpeg',
    badge: 'Ultra-HD Portrait',
    badgeRu: 'Ultra-HD Портрет',
    badgeHe: 'פורטרט Ultra-HD',
    badgeEn: 'Ultra-HD Portrait',
    highlight: 'Dodge & Burn Retouch',
    highlightRu: 'Dodge & Burn Ретушь',
    highlightHe: 'ריטוש Dodge & Burn',
    highlightEn: 'Dodge & Burn Retouch'
  },
  {
    id: 'photo-2',
    type: 'image',
    src: '/media/photo_2.jpeg',
    thumbnail: '/media/photo_2.jpeg',
    badge: 'Fashion Compositing',
    badgeRu: 'Fashion Композитинг',
    badgeHe: 'קומפוזיטינג אופנה',
    badgeEn: 'Fashion Compositing',
    highlight: 'Color & Texture Grading',
    highlightRu: 'Сведение слоев & Свет',
    highlightHe: 'איחוד שכבות ותאורה',
    highlightEn: 'Color & Texture Grading'
  }
];

export default function MultimediaShowcase({
  onOpenGallery,
  onContactClick
}: MultimediaShowcaseProps) {
  const { language, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'video' | 'image'>('all');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [lightboxItem, setLightboxItem] = useState<MediaCardItem | null>(null);

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const galleryTrans = translations[language]?.creativeGallery || translations.en.creativeGallery || translations.ru.creativeGallery;
  const itemsTrans = galleryTrans.mediaItems;

  const filteredCards = MEDIA_CARDS.filter((card) => {
    if (activeFilter === 'all') return true;
    return card.type === activeFilter;
  });

  const handleTogglePlay = (id: string, e?: MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      // Pause other videos
      Object.keys(videoRefs.current).forEach((key) => {
        if (key !== id && videoRefs.current[key]) {
          videoRefs.current[key]?.pause();
        }
      });
      video.play().then(() => {
        setPlayingVideoId(id);
      }).catch((err) => {
        console.warn('Playback notice:', err);
      });
    } else {
      video.pause();
      setPlayingVideoId(null);
    }
  };

  const handleToggleMute = (e: MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    Object.values(videoRefs.current).forEach((vid) => {
      if (vid) {
        (vid as HTMLVideoElement).muted = nextMuted;
      }
    });
  };

  const openLightbox = (card: MediaCardItem) => {
    setLightboxItem(card);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };

  // Localized texts
  const titles = {
    ru: {
      tag: 'Photoshop & Генеративный ИИ Продакшн',
      titleFirst: 'AI Видео & ',
      titleSecond: 'Photoshop Арт',
      subtitle: 'Синтез глубокого владения Adobe Photoshop и генеративных нейросетей (Runway Gen-3, Kling, Midjourney): разработка любых персонажей, интеграция брендов, динамичные ролики 60 fps и авторский саунд-дизайн.',
      filterAll: 'Все работы (4)',
      filterVideos: 'AI Видео 60 fps (2)',
      filterImages: 'Photoshop & Арт (2)',
      viewGalleryBtn: 'Открыть полную выставку',
      discussBtn: 'Заказать креативы',
      cardActionVideo: 'Смотреть со звуком',
      cardActionPhoto: 'Увеличить фото',
      fullCaseLink: 'Открыть детальный кейс'
    },
    en: {
      tag: 'Photoshop & Generative AI Media Production',
      titleFirst: 'AI Video & ',
      titleSecond: 'Photoshop Art',
      subtitle: 'The synthesis of advanced Adobe Photoshop craftsmanship and generative neural pipelines (Runway Gen-3, Kling, Midjourney): character design, luxury brand integration, 60 fps motion clips, and high-end retouching.',
      filterAll: 'All Works (4)',
      filterVideos: 'AI Video 60 fps (2)',
      filterImages: 'Photoshop & Art (2)',
      viewGalleryBtn: 'Explore Full Exhibition',
      discussBtn: 'Order Creatives',
      cardActionVideo: 'Watch with sound',
      cardActionPhoto: 'Zoom photo',
      fullCaseLink: 'Open detailed case'
    },
    he: {
      tag: 'הפקת פוטושופ ובינה מלאכותית גנרטיבית',
      titleFirst: 'וידאו AI ו-',
      titleSecond: 'אמנות פוטושופ',
      subtitle: 'שילוב של מיומנות מתקדמת ב-Adobe Photoshop ורשתות נוירונים גנרטיביות: יצירת דמויות, שילוב מותגי אופנה, סרטוני תנועה ב-60 fps, ריטוש קפדני ועיצוב סאונד מקורי.',
      filterAll: 'כל העבודות (4)',
      filterVideos: 'וידאו AI ב-60 fps (2)',
      filterImages: 'פוטושופ ואמנות (2)',
      viewGalleryBtn: 'לצפייה בתערוכה המלאה',
      discussBtn: 'הזמנת קריאייטיב',
      cardActionVideo: 'צפייה עם סאונד',
      cardActionPhoto: 'הגדלת תמונה',
      fullCaseLink: 'פתיחת המקרה המלא'
    }
  };

  const currentText = titles[language] || titles.en;

  return (
    <section id="multimedia" className="scroll-mt-24 px-8 lg:px-16 py-20 max-w-[1600px] mx-auto border-t border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <p className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1E90FF] animate-pulse"></span>
            {currentText.tag}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black uppercase">
            {currentText.titleFirst}
            <span className="text-[#1E90FF]">{currentText.titleSecond}</span>
          </h2>
        </div>

        <p className="text-xs text-gray-500 font-light max-w-lg leading-relaxed">
          {currentText.subtitle}
        </p>
      </div>

      {/* Filter Tabs & Quick Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-black/5">
        <div className="flex items-center gap-2 bg-gray-100/80 p-1 rounded-full border border-black/5">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all uppercase ${
              activeFilter === 'all'
                ? 'bg-black text-white shadow-sm'
                : 'text-gray-600 hover:text-black hover:bg-white/60'
            }`}
          >
            {currentText.filterAll}
          </button>
          <button
            onClick={() => setActiveFilter('video')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5 uppercase ${
              activeFilter === 'video'
                ? 'bg-black text-white shadow-sm'
                : 'text-gray-600 hover:text-black hover:bg-white/60'
            }`}
          >
            <Film className="w-3.5 h-3.5 text-[#1E90FF]" />
            {currentText.filterVideos}
          </button>
          <button
            onClick={() => setActiveFilter('image')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5 uppercase ${
              activeFilter === 'image'
                ? 'bg-black text-white shadow-sm'
                : 'text-gray-600 hover:text-black hover:bg-white/60'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#1E90FF]" />
            {currentText.filterImages}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenGallery}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-[#1E90FF] transition-colors py-2 px-3"
          >
            <span>{currentText.viewGalleryBtn}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Grid of Media Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCards.map((card) => {
          const itemData = itemsTrans[card.id];
          const isVideo = card.type === 'video';
          const isPlaying = playingVideoId === card.id;

          const badgeText = language === 'ru' 
            ? card.badgeRu 
            : language === 'he' 
            ? card.badgeHe 
            : card.badgeEn;

          const highlightText = language === 'ru' 
            ? card.highlightRu 
            : language === 'he' 
            ? card.highlightHe 
            : card.highlightEn;

          return (
            <div
              key={card.id}
              onClick={() => openLightbox(card)}
              className="group rounded-3xl overflow-hidden bg-white border border-black/10 hover:border-[#1E90FF] hover:shadow-xl hover:shadow-[#1E90FF]/10 transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-[4/5] bg-black overflow-hidden">
                {isVideo ? (
                  <>
                    <video
                      ref={(el) => { videoRefs.current[card.id] = el; }}
                      src={card.src}
                      poster={card.thumbnail}
                      loop
                      muted={isMuted}
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Video Floating Controls */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <button
                        type="button"
                        onClick={(e) => handleTogglePlay(card.id, e)}
                        className={`pointer-events-auto w-14 h-14 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/30 flex items-center justify-center hover:bg-[#1E90FF] hover:border-[#1E90FF] hover:scale-110 transition-all shadow-lg ${
                          isPlaying ? 'opacity-0 group-hover:opacity-90' : 'opacity-100'
                        }`}
                        title={isPlaying ? galleryTrans.paused : galleryTrans.playing}
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 fill-current" />
                        ) : (
                          <Play className={`w-6 h-6 fill-current ${isRTL ? 'mr-1' : 'ml-1'}`} />
                        )}
                      </button>
                    </div>

                    {/* Mute Button */}
                    <div className={`absolute bottom-3 ${isRTL ? 'left-3' : 'right-3'} z-10`}>
                      <button
                        type="button"
                        onClick={handleToggleMute}
                        className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#1E90FF] hover:border-[#1E90FF] transition-all"
                        title={isMuted ? galleryTrans.soundTooltipUnmute : galleryTrans.soundTooltipMute}
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#1E90FF]" />}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={card.src}
                      alt={itemData?.title || 'Creative Art'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Zoom Icon indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/30 flex items-center justify-center shadow-lg">
                        <Maximize2 className="w-5 h-5 text-[#1E90FF]" />
                      </div>
                    </div>
                  </>
                )}

                {/* Top Badges */}
                <div className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} flex flex-wrap items-center gap-1.5 z-10`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/20 shadow-sm flex items-center gap-1">
                    {isVideo ? <Film className="w-3 h-3 text-[#1E90FF]" /> : <Wand2 className="w-3 h-3 text-[#1E90FF]" />}
                    {badgeText}
                  </span>
                </div>

                {/* Bottom Highlight on media */}
                <div className={`absolute bottom-3 ${isRTL ? 'right-3' : 'left-3'} z-10`}>
                  <span className="text-[10px] font-semibold text-white/90 bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15">
                    {highlightText}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E90FF] mb-1.5 flex items-center gap-1">
                    {isVideo ? <Film className="w-3 h-3" /> : <Layers className="w-3 h-3" />}
                    {itemData?.category || (isVideo ? 'AI Video Motion' : 'Photoshop Art')}
                  </p>
                  <h3 className="text-sm font-bold text-black tracking-tight mb-2 group-hover:text-[#1E90FF] transition-colors line-clamp-2">
                    {itemData?.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-light line-clamp-2 leading-relaxed mb-3">
                    {itemData?.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/5 flex items-center justify-between text-[11px] font-semibold text-gray-600 group-hover:text-black">
                  <span className="text-gray-400 font-normal">
                    {isVideo ? currentText.cardActionVideo : currentText.cardActionPhoto}
                  </span>
                  <span className="flex items-center gap-1 text-[#1E90FF]">
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Bar */}
      <div className="mt-12 p-8 rounded-3xl bg-gray-50 border border-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-[#1E90FF]" />
          </div>
          <div>
            <h4 className="text-base font-bold text-black uppercase tracking-tight">
              {galleryTrans.heroTitleFirst}
              <span className="text-[#1E90FF]">{galleryTrans.heroTitleSecond}</span>
              {galleryTrans.heroTitleThird}
              <span className="text-[#1E90FF]">{galleryTrans.heroTitleFourth}</span>
            </h4>
            <p className="text-xs text-gray-500 font-light mt-0.5 max-w-xl">
              {galleryTrans.heroDesc}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={onOpenGallery}
            className="flex items-center gap-2 bg-black hover:bg-[#1E90FF] text-white px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-colors shadow-sm"
          >
            <span>{currentText.viewGalleryBtn}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </button>
          {onContactClick && (
            <button
              onClick={onContactClick}
              className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black border border-black/10 px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <span>{currentText.discussBtn}</span>
            </button>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#1E90FF] text-white flex items-center justify-center transition-colors shadow-lg"
              title={galleryTrans.close}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Area */}
            <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
              {lightboxItem.type === 'video' ? (
                <video
                  src={lightboxItem.src}
                  poster={lightboxItem.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[85vh] w-full object-contain"
                />
              ) : (
                <img
                  src={lightboxItem.src}
                  alt={itemsTrans[lightboxItem.id]?.title || 'Artwork'}
                  className="max-h-[85vh] w-full object-contain"
                />
              )}
            </div>

            {/* Information Side Panel */}
            <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[85vh]">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full">
                    {lightboxItem.type === 'video' ? 'AI Video • 60 FPS' : 'Adobe Photoshop'}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E90FF]">
                    {itemsTrans[lightboxItem.id]?.tag}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight mb-3">
                  {itemsTrans[lightboxItem.id]?.title}
                </h3>

                <p className="text-xs text-gray-600 font-light leading-relaxed mb-6">
                  {itemsTrans[lightboxItem.id]?.description}
                </p>

                {/* Techniques */}
                {itemsTrans[lightboxItem.id]?.technique && (
                  <div className="mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                      {galleryTrans.techniqueTitle}
                    </p>
                    <ul className="space-y-2">
                      {itemsTrans[lightboxItem.id]?.technique.map((tech: string, i: number) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1E90FF] mt-1.5 shrink-0" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-black/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    closeLightbox();
                    onOpenGallery();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-black hover:bg-[#1E90FF] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>{currentText.fullCaseLink}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href={lightboxItem.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-black text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>{galleryTrans.openOriginalFile}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
