
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin);

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top with GSAP animation
    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: 0, autoKill: true },
      ease: "power2.out"
    });
  }, [location.pathname]);
};
