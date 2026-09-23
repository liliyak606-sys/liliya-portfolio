/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MultimediaShowcase from './components/MultimediaShowcase';
import About from './components/About';
import Experience from './components/Experience';
import FeaturedWork from './components/FeaturedWork';
import Capabilities from './components/Capabilities';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';
import { initMediaPreloader } from './utils/mediaPreloader';

export default function App() {
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        return hash.replace('#/project/', '').trim() || null;
      }
    }
    return null;
  });

  useEffect(() => {
    // Initiate background CDN preloading for all media assets
    initMediaPreloader();

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const id = hash.replace('#/project/', '').trim();
        setCurrentProjectId(id || null);
      } else {
        setCurrentProjectId(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (projectId: string) => {
    window.location.hash = `#/project/${projectId}`;
    setCurrentProjectId(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    window.location.hash = '#work';
    setCurrentProjectId(null);
    setTimeout(() => {
      const workEl = document.getElementById('work');
      if (workEl) {
        workEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  const handleNavigateProject = (nextId: string) => {
    window.location.hash = `#/project/${nextId}`;
    setCurrentProjectId(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    window.location.hash = '#contact';
    setCurrentProjectId(null);
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  const handleOpenMultimediaGallery = () => {
    handleSelectProject('ai-creative-media');
  };

  if (currentProjectId) {
    return (
      <main className="min-h-screen bg-white">
        <ProjectDetailPage
          projectId={currentProjectId}
          onBack={handleBackToPortfolio}
          onNavigateProject={handleNavigateProject}
          onContactClick={handleContactClick}
        />
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white selection:bg-[#1E90FF] selection:text-white">
      <Navbar />
      <Hero />
      <MultimediaShowcase 
        onOpenGallery={handleOpenMultimediaGallery}
        onContactClick={handleContactClick}
      />
      <About />
      <Experience />
      <FeaturedWork onSelectProject={handleSelectProject} />
      <Capabilities />
      <Footer />
    </main>
  );
}
