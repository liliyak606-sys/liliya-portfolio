import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Globe, 
  Shield, 
  ChevronRight,
  Maximize2,
  X,
  Film, 
} from 'lucide-react';
import { getProject, type ProjectData } from '../data/projectsData';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import CreativeGalleryPage from './CreativeGalleryPage';

interface ProjectDetailPageProps {
  projectId: string;
  onBack: () => void;
  onNavigateProject: (newProjectId: string) => void;
  onContactClick: () => void;
}

export default function ProjectDetailPage({
  projectId,
  onBack,
  onNavigateProject,
  onContactClick
}: ProjectDetailPageProps) {
  const { t, language, isRTL } = useLanguage();

  // If the user selected the Photoshop & AI Creative Media project,
  // render the dedicated art & video exhibition gallery
  if (projectId === 'ai-creative-media') {
    return (
      <CreativeGalleryPage
        onBack={onBack}
        onNavigateProject={onNavigateProject}
        onContactClick={onContactClick}
      />
    );
  }

  const project: ProjectData = getProject(projectId, language);
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Scroll to top on project load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedGalleryIdx(0);
  }, [projectId]);

  if (!project) return null;

  const nextProject = getProject(project.nextProjectId, language);
  const prevProject = getProject(project.prevProjectId, language);

  return (
    <div className="min-h-screen bg-white text-black animate-fade-in">
      {/* Top Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-black/10 transition-all">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 py-4 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-[#1E90FF] py-2 px-3.5 rounded-full hover:bg-gray-100 transition-all group"
          >
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'} transition-transform`} />
            <span>{t('projectDetail.backToPortfolio')}</span>
          </button>

          {/* Breadcrumb / Title preview */}
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-400 font-mono">
            <span>{t('projectDetail.projectsBreadcrumb')}</span>
            <ChevronRight className={`w-3.5 h-3.5 text-gray-300 ${isRTL ? 'rotate-180' : ''}`} />
            <span className="text-black font-semibold">{project.title}</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <LanguageSwitcher theme="light" />

            {project.pdfUrl.startsWith('http') && (
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-black/10 hover:border-[#1E90FF] text-xs font-semibold text-gray-700 hover:text-[#1E90FF] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#1E90FF]" />
                <span>{t('projectDetail.pdfScreencap')}</span>
              </a>
            )}

            {project.liveUrl.startsWith('http') && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1E90FF] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{t('projectDetail.openWebsite')}</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <article className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 py-12 md:py-16">
        {/* Project Header / Hero */}
        <section className="mb-14 md:mb-20">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#1E90FF] bg-[#1E90FF]/10 px-3.5 py-1.5 rounded-full uppercase">
              {project.badge}
            </span>
            <span className="text-[11px] font-mono text-gray-400">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black uppercase leading-[1.05] mb-6 max-w-5xl">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mb-8">
            {project.subtitle}
          </p>

          {/* Quick Meta Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-black/10">
            <div className="p-4 rounded-2xl bg-gray-50 border border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                {t('projectDetail.client')}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-black">
                {project.client}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                {t('projectDetail.myRole')}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#1E90FF]">
                {project.role}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                {t('projectDetail.period')}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-black font-mono">
                {project.year}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                {t('projectDetail.directLinks')}
              </span>
              <div className="flex items-center gap-3">
                {project.liveUrl.startsWith('http') && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-bold text-[#1E90FF] hover:underline flex items-center gap-1"
                  >
                    {t('projectDetail.site')} <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.pdfUrl.startsWith('http') && (
                  <a 
                    href={project.pdfUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-medium text-gray-600 hover:text-black flex items-center gap-1"
                  >
                    {t('projectDetail.pdf')} <FileText className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Big Showcase Visual */}
        <section className="mb-20">
          <div className="relative rounded-3xl overflow-hidden bg-gray-900 border border-black/10 shadow-2xl group">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-auto max-h-[750px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[#1E90FF] uppercase mb-2">
                  {t('projectDetail.keyConcept')}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {project.tagline}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setLightboxImage(project.heroImage)}
                  className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{t('projectDetail.enlarge')}</span>
                </button>

                {project.liveUrl.startsWith('http') && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#1E90FF] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <span>{t('projectDetail.goToSite')}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Section 01: Overview & Challenges */}
        <section className="mb-20 grid lg:grid-cols-12 gap-12 pt-12 border-t border-black/10">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono font-bold text-[#1E90FF] bg-[#1E90FF]/10 px-2.5 py-1 rounded-md">
              {t('projectDetail.sec01Context')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black uppercase mt-3 mb-4">
              {t('projectDetail.sec01TitleFirst')} <span className="text-[#1E90FF]">{t('projectDetail.sec01TitleSecond')}</span>
            </h2>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              {t('projectDetail.sec01Subtitle')}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="p-8 rounded-3xl bg-gray-50 border border-black/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#1E90FF]" /> {t('projectDetail.essenceMission')}
              </h3>
              <p className="text-base sm:text-lg text-gray-800 font-light leading-relaxed">
                {project.overview.summary}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-7 rounded-3xl bg-red-50/40 border border-red-200/50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2.5">
                  {t('projectDetail.challenge')}
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                  {project.overview.challenge}
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-blue-50/50 border border-blue-200/50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E90FF] mb-2.5">
                  {t('projectDetail.solution')}
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                  {project.overview.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Section 02: My Tasks Solved */}
        <section className="mb-20 pt-12 border-t border-black/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#1E90FF] bg-[#1E90FF]/10 px-2.5 py-1 rounded-md">
                {t('projectDetail.sec02Expertise')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black uppercase mt-3">
                {t('projectDetail.sec02TitleFirst')} <span className="text-[#1E90FF]">{t('projectDetail.sec02TitleSecond')}</span>
              </h2>
            </div>
            <p className="text-xs text-gray-500 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
              {t('projectDetail.sec02Subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {project.tasks.map((task, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-black/10 hover:border-[#1E90FF] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-bold text-[#1E90FF] bg-blue-50 px-2.5 py-1 rounded-lg">
                      0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-black tracking-tight">
                      {task.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6">
                    {task.description}
                  </p>
                </div>

                {task.deliverables && (
                  <div className="pt-4 border-t border-black/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                      {t('projectDetail.deliverablesLabel')}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {task.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[11px] bg-gray-50 text-gray-700 px-3 py-1 rounded-lg border border-black/5 font-medium flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#1E90FF]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Deep Dive Section 03: Design System & Visual Language */}
        <section className="mb-20 grid lg:grid-cols-12 gap-12 pt-12 border-t border-black/10">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono font-bold text-[#1E90FF] bg-[#1E90FF]/10 px-2.5 py-1 rounded-md">
              {t('projectDetail.sec03DesignSystem')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black uppercase mt-3 mb-4">
              {t('projectDetail.sec03TitleFirst')} <span className="text-[#1E90FF]">{t('projectDetail.sec03TitleSecond')}</span>
            </h2>
            <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">
              {t('projectDetail.conceptPrefix')}{project.designSystem.aesthetic}
            </p>

            <div className="p-6 rounded-2xl bg-gray-50 border border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                {t('projectDetail.typography')}
              </span>
              <p className="text-xs font-mono text-gray-800 leading-relaxed">
                {project.designSystem.typography}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {/* Color Palette */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                {t('projectDetail.colorCode')}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.designSystem.colors.map((color, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-2xl border border-black/10 bg-white hover:border-[#1E90FF] transition-colors"
                  >
                    <div
                      className="w-full h-12 rounded-xl mb-3 shadow-inner border border-black/10"
                      style={{ backgroundColor: color.hex }}
                    />
                    <p className="text-xs font-bold text-black">{color.name}</p>
                    <p className="text-[11px] font-mono text-gray-400 mb-1">{color.hex}</p>
                    <p className="text-[10px] text-gray-500 font-light leading-snug">{color.usage}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Features */}
            <div className="p-8 rounded-3xl bg-gray-50 border border-black/5 mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                {t('projectDetail.featuresTitle')}
              </h3>
              <ul className="space-y-3">
                {project.designSystem.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 font-light">
                    <Sparkles className="w-4 h-4 text-[#1E90FF] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Deep Dive Section 04: Screen Gallery / Interactive Inspector */}
        <section className="mb-20 pt-12 border-t border-black/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#1E90FF] bg-[#1E90FF]/10 px-2.5 py-1 rounded-md">
                {t('projectDetail.sec04Gallery')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black uppercase mt-3">
                {t('projectDetail.sec04TitleFirst')} <span className="text-[#1E90FF]">{t('projectDetail.sec04TitleSecond')}</span>
              </h2>
            </div>
            <p className="text-xs text-gray-500 font-light max-w-sm mt-4 md:mt-0 leading-relaxed">
              {t('projectDetail.sec04Subtitle')}
            </p>
          </div>

          {/* Interactive tabs for gallery items */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.gallery.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedGalleryIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedGalleryIdx === idx
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t('projectDetail.screenPrefix')}{idx + 1}: {item.title}
              </button>
            ))}
          </div>

          {/* Active Screen Display */}
          {project.gallery[selectedGalleryIdx] && (
            <div className="bg-gray-50 rounded-3xl border border-black/10 p-6 md:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-black tracking-tight">
                    {project.gallery[selectedGalleryIdx].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-light mt-1">
                    {project.gallery[selectedGalleryIdx].caption}
                  </p>
                </div>

                <button
                  onClick={() => setLightboxImage(project.gallery[selectedGalleryIdx].image)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-black/10 text-xs font-bold text-black hover:text-[#1E90FF] hover:border-[#1E90FF] transition-all self-start sm:self-auto"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{t('projectDetail.openOriginal')}</span>
                </button>
              </div>

              <div 
                className="relative rounded-2xl overflow-hidden bg-black/5 border border-black/10 cursor-pointer group"
                onClick={() => setLightboxImage(project.gallery[selectedGalleryIdx].image)}
              >
                <img
                  src={project.gallery[selectedGalleryIdx].image}
                  alt={project.gallery[selectedGalleryIdx].title}
                  className="w-full h-auto max-h-[800px] object-contain mx-auto group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-black/80 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2">
                    <Maximize2 className="w-4 h-4" /> {t('projectDetail.clickToEnlarge')}
                  </span>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Video Showcase Section (when project.videos is defined) */}
        {project.videos && project.videos.length > 0 && (
          <section className="mb-20 pt-12 border-t border-black/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#1E90FF] bg-[#1E90FF]/10 px-2.5 py-1 rounded-md uppercase">
                  {t('projectDetail.aiMotionBadge')}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black uppercase mt-3">
                  {t('projectDetail.aiMotionTitleFirst')} <span className="text-[#1E90FF]">{t('projectDetail.aiMotionTitleSecond')}</span>
                </h2>
              </div>
              <p className="text-xs text-gray-500 font-light max-w-sm mt-4 md:mt-0 leading-relaxed">
                {t('projectDetail.aiMotionSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {project.videos.map((vid, vIdx) => (
                <div
                  key={vIdx}
                  className="rounded-3xl overflow-hidden bg-gray-900 border border-black/10 shadow-xl flex flex-col justify-between"
                >
                  <div className="relative aspect-[9/16] bg-black overflow-hidden group">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={vid.thumbnail}
                      className="w-full h-full object-cover"
                    >
                      <source src={vid.videoUrl} type="video/mp4" />
                      {t('projectDetail.videoBrowserUnsupported')}
                    </video>
                  </div>

                  <div className="p-6 bg-white border-t border-black/10">
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase text-[#1E90FF] mb-1.5">
                      <Film className="w-3.5 h-3.5" />
                      <span>{vid.title}</span>
                    </div>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
                      {vid.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Deep Dive Section 05: Business Results & Impact */}
        <section className="mb-20 pt-12 border-t border-black/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-mono font-bold text-[#1E90FF] bg-[#1E90FF]/10 px-2.5 py-1 rounded-md uppercase">
              {t('projectDetail.sec05Results')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black uppercase mt-3 mb-3">
              {t('projectDetail.sec05TitleFirst')} <span className="text-[#1E90FF]">{t('projectDetail.sec05TitleSecond')}</span>
            </h2>
            <p className="text-xs text-gray-500 font-light">
              {t('projectDetail.sec05Subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((res, rIdx) => (
              <div
                key={rIdx}
                className="p-8 rounded-3xl bg-white border border-black/10 hover:border-[#1E90FF] transition-all group"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-black group-hover:text-[#1E90FF] transition-colors block mb-2">
                  {res.metric}
                </span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-black mb-1">
                  {res.label}
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {res.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Dive Section 06: Tools & Tech Stack */}
        <section className="mb-24 pt-12 border-t border-black/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#1E90FF] bg-[#1E90FF]/10 px-2.5 py-1 rounded-md">
                {t('projectDetail.sec06Stack')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black uppercase mt-2">
                {t('projectDetail.sec06Title')}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-4 py-2 rounded-xl bg-gray-100 text-gray-800 text-xs font-semibold border border-black/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Project Navigation Footer & Big CTA Banner */}
        <section className="pt-12 border-t border-black/10">
          {/* Previous / Next Projects Switcher */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {prevProject && (
              <button
                onClick={() => onNavigateProject(prevProject.id)}
                className={`p-8 rounded-3xl bg-gray-50 hover:bg-white border border-black/10 hover:border-[#1E90FF] ${isRTL ? 'text-right' : 'text-left'} transition-all duration-300 group flex flex-col justify-between`}
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#1E90FF] transition-colors mb-3">
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'} transition-transform`} />
                  <span>{t('projectDetail.prevProject')}</span>
                </div>
                <h4 className="text-xl font-bold text-black tracking-tight">
                  {prevProject.title}
                </h4>
                <p className="text-xs text-gray-500 font-light mt-1">
                  {prevProject.category}
                </p>
              </button>
            )}

            {nextProject && (
              <button
                onClick={() => onNavigateProject(nextProject.id)}
                className={`p-8 rounded-3xl bg-gray-50 hover:bg-white border border-black/10 hover:border-[#1E90FF] ${isRTL ? 'text-left items-start' : 'text-right items-end'} transition-all duration-300 group flex flex-col justify-between`}
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#1E90FF] transition-colors mb-3">
                  <span>{t('projectDetail.nextProject')}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
                </div>
                <h4 className="text-xl font-bold text-black tracking-tight">
                  {nextProject.title}
                </h4>
                <p className="text-xs text-gray-500 font-light mt-1">
                  {nextProject.category}
                </p>
              </button>
            )}
          </div>

          {/* Big CTA Banner */}
          <div className="rounded-3xl bg-black text-white p-8 sm:p-12 md:p-16 relative overflow-hidden text-center flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-2xl bg-[#1E90FF]/20 text-[#1E90FF] flex items-center justify-center mb-6">
              <Sparkles className="w-7 h-7" />
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 max-w-2xl">
              {t('projectDetail.ctaLiked')}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base font-light max-w-lg mb-8 leading-relaxed">
              {t('projectDetail.ctaDesc')}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={onContactClick}
                className="px-8 py-4 rounded-xl bg-[#1E90FF] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-blue-500/25 flex items-center gap-2"
              >
                <span>{t('projectDetail.ctaDiscuss')}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={onBack}
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/20"
              >
                {t('projectDetail.ctaReturn')}
              </button>
            </div>
          </div>
        </section>
      </article>

      {/* Fullscreen Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors z-10"
            title={t('projectDetail.close')}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Fullscreen preview"
            className="max-w-[95vw] max-h-[92vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

