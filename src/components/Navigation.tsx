
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import ConsultationPopup from '@/components/ConsultationPopup';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      hasSubmenu: true,
      submenu: [
        { name: 'Technology Solutions', href: '/services/technology' },
        { name: 'Marketing Excellence', href: '/services/marketing' },
        { name: 'Media Production', href: '/services/media-production' },
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleConsultationClick = () => {
    setIsConsultationOpen(true);
  };

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-mdm-gold/20 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="text-3xl font-bold font-montserrat text-mdm-black group-hover:text-mdm-gold transition-colors duration-300">
                  MDM
                </div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mdm-gold group-hover:w-full transition-all duration-300"></div>
              </div>
              <div className="text-sm text-mdm-dark-gold font-montserrat font-semibold uppercase tracking-widest">
                CONSULTING
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasSubmenu ? (
                    <div
                      className="relative"
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      <Link
                        to={item.href}
                        className="relative text-mdm-black hover:text-mdm-gold transition-colors duration-300 font-montserrat font-medium text-sm uppercase tracking-wide group flex items-center gap-1"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mdm-gold group-hover:w-full transition-all duration-300"></div>
                      </Link>
                      
                      {/* Submenu */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md border border-mdm-gold/20 rounded-lg shadow-xl py-2 z-50">
                          {item.submenu?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-3 text-mdm-black hover:text-mdm-gold hover:bg-mdm-gold/10 transition-all duration-200 font-montserrat font-medium text-sm"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="relative text-mdm-black hover:text-mdm-gold transition-colors duration-300 font-montserrat font-medium text-sm uppercase tracking-wide group"
                    >
                      {item.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mdm-gold group-hover:w-full transition-all duration-300"></div>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={handleConsultationClick}
                className="bg-gradient-to-r from-mdm-gold to-mdm-dark-gold hover:from-mdm-dark-gold hover:to-mdm-gold text-mdm-black font-montserrat font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-mdm-gold/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-2">
                <div className={`w-6 h-0.5 bg-mdm-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-mdm-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-mdm-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 py-6 border-t border-mdm-gold/20 bg-white/95 backdrop-blur-sm rounded-lg">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="text-mdm-black hover:text-mdm-gold transition-colors duration-300 font-montserrat font-medium text-sm uppercase tracking-wide px-4 py-2 rounded-lg hover:bg-mdm-gold/10 flex items-center justify-between"
                      onClick={() => !item.hasSubmenu && setIsMenuOpen(false)}
                    >
                      {item.name}
                      {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
                    </Link>
                    {item.hasSubmenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block text-mdm-black hover:text-mdm-gold transition-colors duration-300 font-montserrat font-medium text-sm px-4 py-2 rounded-lg hover:bg-mdm-gold/10"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleConsultationClick();
                  }}
                  className="bg-gradient-to-r from-mdm-gold to-mdm-dark-gold text-mdm-black font-montserrat font-bold px-6 py-2 rounded-full transition-all duration-300 mx-4 mt-4"
                >
                  Free Consultation
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <ConsultationPopup 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
};

export default Navigation;