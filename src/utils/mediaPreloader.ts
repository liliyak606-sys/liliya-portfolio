/**
 * Background preloader for key portfolio media assets
 * Ensures instant display when scrolling or navigating to projects.
 */

const PRELOAD_IMAGES: string[] = [
  '/media/photo_1.jpeg',
  '/media/photo_2.jpeg',
  '/media/video_1_thumb.jpg',
  '/media/video_2_thumb.jpg',
  '/projects/ice-preview.jpg',
  '/projects/aura-preview.jpg',
  '/projects/ice-page1.jpg',
  '/projects/ice-page2.jpg',
  '/projects/aura-page1.jpg',
  '/projects/aura-page2.jpg',
];

const PRELOAD_VIDEOS: string[] = [
  '/media/video_1.mp4',
  '/media/video_2.mp4',
];

export function initMediaPreloader(): void {
  if (typeof window === 'undefined') return;

  const runPreload = () => {
    // 1. Preload key images into memory cache
    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // 2. Pre-warm video prefetch links if supported
    PRELOAD_VIDEOS.forEach((src) => {
      try {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'video';
        link.href = src;
        document.head.appendChild(link);
      } catch {
        // Ignore fallback
      }
    });
  };

  // Schedule preloading so it never blocks initial paint
  if ('requestIdleCallback' in window) {
    (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(runPreload);
  } else {
    setTimeout(runPreload, 800);
  }
}
