
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (scrollHeight > 0) {
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(Math.min(progress, 100));
        console.log('Scroll progress calculated:', { scrollTop, scrollHeight, progress: Math.min(progress, 100) });
      }
    };

    // Calculate on scroll
    window.addEventListener('scroll', calculateScrollProgress);
    
    // Calculate on load
    calculateScrollProgress();

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      {/* Horizontal Progress bar */}
      <div className="h-2 w-full bg-gray-200/80 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-mdm-gold to-mdm-dark-gold transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Progress text - positioned at the left bottom corner */}
      <div className="absolute bottom-3 left-4 bg-mdm-black/90 backdrop-blur-sm px-2 py-1 rounded text-center">
        <span className="text-xs text-mdm-gold font-medium font-montserrat">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </div>
  );
};

export default ScrollProgress;
