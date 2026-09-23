import { ArrowUpRight, ExternalLink, FileText, Globe, Film } from 'lucide-react';
import { getProjects, type ProjectData } from '../data/projectsData';
import { useLanguage } from '../i18n/LanguageContext';

interface FeaturedWorkProps {
  onSelectProject?: (projectId: string) => void;
}

export default function FeaturedWork({ onSelectProject }: FeaturedWorkProps) {
  const { t, language, isRTL } = useLanguage();
  const currentProjects = getProjects(language);
  const projectList: ProjectData[] = Object.values(currentProjects);

  const handleCardClick = (projectId: string) => {
    if (onSelectProject) {
      onSelectProject(projectId);
    } else {
      window.location.hash = `#/project/${projectId}`;
    }
  };

  return (
    <section id="work" className="scroll-mt-24 px-8 lg:px-16 py-24 max-w-[1600px] mx-auto border-t border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <p className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1E90FF]"></span>
            {t('work.tag', t('featured.tag'))}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black uppercase">
            {t('work.titleFirst', t('featured.titleFirst'))} <span className="text-[#1E90FF]">{t('work.titleSecond', t('featured.titleSecond'))}</span>
          </h2>
        </div>
        <p className="text-xs text-gray-500 font-light max-w-sm mt-4 md:mt-0 leading-relaxed">
          {t('work.subtitle', t('featured.desc'))}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {projectList.map((project) => (
          <div 
            key={project.id}
            onClick={() => handleCardClick(project.id)}
            className="group rounded-3xl overflow-hidden bg-white border border-black/10 hover:border-[#1E90FF] hover:shadow-2xl hover:shadow-[#1E90FF]/10 transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            {/* Project Image & Live Badge */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 border-b border-black/5">
              <img 
                src={project.heroImage} 
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Badge */}
              <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} flex flex-wrap items-center gap-1.5`}>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-black px-3 py-1 rounded-full border border-black/10 shadow-sm">
                  {project.badge}
                </span>
                {project.videos && project.videos.length > 0 && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/85 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/20 shadow-sm flex items-center gap-1">
                    <Film className="w-3 h-3 text-[#1E90FF]" /> {t('work.videoAndArtBadge', t('featured.videoArtBadge'))}
                  </span>
                )}
              </div>

              {/* Quick Actions On Hover */}
              <div className={`absolute bottom-4 ${isRTL ? 'left-4' : 'right-4'} flex items-center gap-2`}>
                {project.liveUrl.startsWith('http') && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-9 h-9 rounded-full bg-white/95 hover:bg-[#1E90FF] text-black hover:text-white backdrop-blur-md flex items-center justify-center transition-all shadow-sm"
                    title={t('work.openWebsite', t('featured.siteLabel'))}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <span className="px-3.5 py-1.5 rounded-full bg-black hover:bg-[#1E90FF] text-white text-[11px] font-bold tracking-wider uppercase backdrop-blur-md flex items-center gap-1.5 transition-colors shadow-sm">
                  <span>{t('work.openCase', t('featured.openCase'))}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E90FF] mb-2">
                  {project.role}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight mb-2 group-hover:text-[#1E90FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 font-light mb-4 line-clamp-2">
                  {project.subtitle}
                </p>
                <p className="text-xs text-gray-600 font-light leading-relaxed mb-6 line-clamp-3">
                  {project.overview.summary}
                </p>
              </div>

              {/* Footer details & Action Buttons */}
              <div className="pt-5 border-t border-black/5 space-y-4">
                {/* Tech tags preview */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-[10px] bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md border border-black/5 font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] bg-gray-50 text-gray-400 px-2 py-1 rounded-md border border-black/5 font-mono">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Bottom link row */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#1E90FF] flex items-center gap-1.5 transition-colors">
                    <span>{t('work.viewProjectPage', t('featured.viewProjectPage'))}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'} transition-transform`} />
                  </span>

                  <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                    {project.pdfUrl.startsWith('http') && (
                      <a
                        href={project.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-medium text-gray-500 hover:text-black flex items-center gap-1 transition-colors"
                        title={t('work.viewPdf', t('featured.pdfLabel'))}
                      >
                        <FileText className="w-3.5 h-3.5 text-[#1E90FF]" /> {t('work.pdfBadge', t('featured.pdfLabel'))}
                      </a>
                    )}
                    {project.liveUrl.startsWith('http') && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#1E90FF] hover:underline flex items-center gap-1"
                      >
                        <Globe className="w-3.5 h-3.5" /> {project.id === 'ai-creative-media' ? t('work.originalBadge', t('featured.originalLabel')) : t('work.siteBadge', t('featured.siteLabel'))}
                      </a>
                    )}
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

