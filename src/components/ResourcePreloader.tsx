
import { useEffect } from 'react';

const ResourcePreloader = () => {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.href = href;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    // Preload critical CSS
    const preloadCSS = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    };

    // Preload critical images
    const preloadImage = (src: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    };

    // Preload Montserrat font variants
    preloadFont('https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.woff2');
    
    // Preload hero images if any
    const heroImages = [
      // Add any critical hero images here
    ];
    
    heroImages.forEach(preloadImage);

    // DNS prefetch for external resources
    const dnsPrefetch = (hostname: string) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = hostname;
      document.head.appendChild(link);
    };

    dnsPrefetch('//fonts.googleapis.com');
    dnsPrefetch('//fonts.gstatic.com');
    dnsPrefetch('//images.unsplash.com');

  }, []);

  return null;
};

export default ResourcePreloader;
