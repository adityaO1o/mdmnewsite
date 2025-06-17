
import React, { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: 0, autoKill: true },
      ease: "power2.out"
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = "+918700954700";
    const message = "Hi! I'd like to know more about your services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat on WhatsApp
        </span>
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-mdm-gold hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-fade-in group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Back to top
          </span>
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
