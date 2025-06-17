
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Monitor, Megaphone, Camera, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate orbit container
    if (orbitRef.current) {
      tl.fromTo(
        orbitRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1.5, ease: "back.out(1.7)" }
      );
    }

    // Animate content with stagger
    if (contentRef.current) {
      tl.fromTo(
        contentRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.5"
      );
    }

    // Continuous orbit animations - each icon rotates around the center
    if (orbitRef.current) {
      // Technology orbit (Monitor)
      gsap.to(orbitRef.current.querySelector('.orbit-1'), {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center"
      });

      // Marketing orbit (Megaphone) - opposite direction
      gsap.to(orbitRef.current.querySelector('.orbit-2'), {
        rotation: -360,
        duration: 25,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center"
      });

      // Media Production orbit (Camera)
      gsap.to(orbitRef.current.querySelector('.orbit-3'), {
        rotation: 360,
        duration: 15,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center"
      });
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-mdm-gold/5 via-transparent to-mdm-dark-gold/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Animated Orbit System */}
          <div ref={orbitRef} className="relative mb-12 sm:mb-16 h-64 sm:h-72 flex items-center justify-center">
            <div className="relative">
              {/* Central Hub - MDM */}
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-mdm-black to-gray-800 rounded-full flex items-center justify-center shadow-2xl relative z-20 border-2 border-mdm-gold/30">
                <span className="text-white font-montserrat font-bold text-sm sm:text-lg">MDM</span>
              </div>
              
              {/* Orbit Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 border border-mdm-gold/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 sm:w-56 h-44 sm:h-56 border border-mdm-dark-gold/15 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 h-56 sm:h-72 border border-mdm-gold/10 rounded-full"></div>
              
              {/* Orbit 1 - Technology (Monitor) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 orbit-1" style={{ width: '160px', height: '160px' }}>
                <div 
                  className="absolute w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-mdm-gold to-mdm-dark-gold rounded-full flex items-center justify-center shadow-lg z-10 border border-white/20" 
                  style={{ 
                    top: '0px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  <Monitor className="w-4 sm:w-5 h-4 sm:h-5 text-mdm-black" />
                </div>
              </div>
              
              {/* Orbit 2 - Marketing (Megaphone) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 orbit-2" style={{ width: '224px', height: '224px' }}>
                <div 
                  className="absolute w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-mdm-dark-gold to-mdm-gold rounded-full flex items-center justify-center shadow-lg z-10 border border-white/20" 
                  style={{ 
                    top: '0px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  <Megaphone className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
              </div>
              
              {/* Orbit 3 - Media Production (Camera) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 orbit-3" style={{ width: '288px', height: '288px' }}>
                <div 
                  className="absolute w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-mdm-gold via-mdm-dark-gold to-mdm-gold rounded-full flex items-center justify-center shadow-lg z-10 border border-white/20" 
                  style={{ 
                    top: '0px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  <Camera className="w-4 sm:w-5 h-4 sm:h-5 text-mdm-black" />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div ref={contentRef} className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-montserrat mb-6 sm:mb-8 text-mdm-black leading-tight">
                Mission Driven
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mdm-gold to-mdm-dark-gold">Marketing</span>
              </h1>
            </div>

            <div>
              <p className="text-base sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 font-montserrat max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                Where <span className="text-mdm-gold font-bold">Purpose Meets Performance</span>. 
                We combine strategy, creativity, and digital excellence to deliver 
                <span className="text-mdm-dark-gold font-bold"> meaningful, measurable, and memorable</span> marketing solutions that drive real business growth.
              </p>
            </div>

            <div>
              <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-mdm-gold to-mdm-dark-gold hover:from-mdm-dark-gold hover:to-mdm-gold text-mdm-black font-montserrat font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl group w-full sm:w-auto"
                  >
                    <span className="whitespace-nowrap">Book Free Consultation</span>
                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Button>
                </Link>
                <Link to="/portfolio" className="w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-mdm-gold text-mdm-gold hover:bg-mdm-gold hover:text-mdm-black font-montserrat font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg transition-all duration-300 group w-full sm:w-auto"
                  >
                    <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="whitespace-nowrap">View Our Work</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-xl border border-mdm-gold/20 mx-2 sm:mx-0">
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-mdm-gold font-montserrat mb-1 sm:mb-2">150+</div>
                <div className="text-xs sm:text-base text-gray-700 font-montserrat font-semibold">Happy Clients</div>
                <div className="text-xs text-gray-500 font-montserrat">Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-mdm-gold font-montserrat mb-1 sm:mb-2">₹5Cr+</div>
                <div className="text-xs sm:text-base text-gray-700 font-montserrat font-semibold">Revenue Generated</div>
                <div className="text-xs text-gray-500 font-montserrat">For Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-mdm-gold font-montserrat mb-1 sm:mb-2">5+</div>
                <div className="text-xs sm:text-base text-gray-700 font-montserrat font-semibold">Countries</div>
                <div className="text-xs text-gray-500 font-montserrat">Global Reach</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-mdm-gold font-montserrat mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-base text-gray-700 font-montserrat font-semibold">Support</div>
                <div className="text-xs text-gray-500 font-montserrat">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
