
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ClientModal from '@/components/ClientModal';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, TrendingUp, Users, Star, Sparkles, Award, Zap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const domesticRef = useRef(null);
  const internationalRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const floatingElementsRef = useRef(null);

  const clientsData = {
    'VNETIX': {
      name: 'VNETIX',
      logo: '🌐',
      industry: 'Technology',
      location: 'Delhi, India',
      services: ['Web Development', 'Digital Marketing', 'SEO'],
      description: 'Leading technology solutions provider specializing in innovative web applications and digital transformation.',
      year: '2023',
      teamSize: '50+ employees',
      results: '40% increase in online presence',
      website: 'https://vnetix.com',
      testimonial: 'MDM delivered exceptional results beyond our expectations. Their technical expertise is outstanding.'
    },
    'Dharma Engineers': {
      name: 'Dharma Engineers',
      logo: '⚙️',
      industry: 'Engineering',
      location: 'Mumbai, India',
      services: ['Website Development', 'Branding', 'Content Management'],
      description: 'Established engineering firm providing comprehensive solutions for infrastructure and industrial projects.',
      year: '2022',
      teamSize: '100+ employees',
      results: '60% increase in client inquiries',
      testimonial: 'Professional service with attention to detail. Highly recommend MDM for engineering businesses.'
    },
    'The Fitness Lounge': {
      name: 'The Fitness Lounge',
      logo: '💪',
      industry: 'Fitness & Wellness',
      location: 'Bangalore, India',
      services: ['Social Media Marketing', 'Performance Marketing', 'Content Creation'],
      description: 'Premium fitness center focused on providing personalized training and wellness solutions.',
      year: '2023',
      results: '80% increase in membership',
      testimonial: 'MDM transformed our online presence and helped us reach our target audience effectively.'
    },
    'Dopamine Gym': {
      name: 'Dopamine Gym',
      logo: '🏋️',
      industry: 'Fitness',
      location: 'Chennai, India',
      services: ['Video Content', 'Social Media', 'Creative Campaigns', 'Brand Awareness'],
      description: 'Modern fitness facility promoting mental and physical wellness through innovative training programs.',
      year: '2023',
      results: '100% increase in social media engagement',
      testimonial: 'Creative campaigns that truly captured our brand essence. Excellent work!'
    },
    'Beast Nutrition': {
      name: 'Beast Nutrition',
      logo: '🥤',
      industry: 'Supplements',
      location: 'Gurgaon, India',
      services: ['Complete Marketing Management', 'Social Media', 'Performance Marketing', 'Sales Funnel Optimization'],
      description: 'Premium nutrition brand offering high-quality supplements for fitness enthusiasts and athletes.',
      year: '2022',
      results: '300% increase in sales',
      testimonial: 'MDM\'s comprehensive marketing approach drove significant growth in our supplement sales.'
    },
    'Journey Makers': {
      name: 'Journey Makers',
      logo: '✈️',
      industry: 'Travel Agency',
      location: 'New Delhi, India',
      services: ['Meta Ads', 'Social Media', 'Content', 'Branding'],
      description: 'Boutique travel agency specializing in customized travel experiences and adventure tours.',
      year: '2023',
      results: '₹5 Crores sales in 4 months',
      testimonial: 'Incredible ROI! MDM helped us achieve ₹5 Crores in sales within just 4 months.',
      website: 'https://journeymakers.in'
    }
  };

  const domesticClients = [
    'VNETIX', 'Dharma Engineers', 'The Fitness Lounge', 'Dopamine Gym', 'AV Industries',
    'Iron MB', 'AS Precision Components', 'Guru Harkrishan Hydraulics', 'Dayal', 'Vidflyy',
    'Beast Nutrition', 'Manthan Fitness Lounge', 'DPS Chhatarpur', 'Journey Makers'
  ];

  const internationalPartners = [
    { 
      name: 'Lindenberg Racing', 
      location: 'South Africa',
      logo: '🏎️',
      industry: 'Motorsports',
      services: ['Brand Development', 'Digital Marketing'],
      description: 'Premier racing team in South African motorsports circuit.',
      year: '2023',
      isInternational: true
    },
    { 
      name: 'Combine Air Training', 
      location: 'Australia',
      logo: '✈️',
      industry: 'Aviation Training',
      services: ['Website Development', 'Online Marketing'],
      description: 'Leading aviation training academy in Australia.',
      year: '2022',
      isInternational: true
    },
    { 
      name: 'Myco Med', 
      location: 'South Africa',
      logo: '🏥',
      industry: 'Healthcare',
      services: ['Digital Presence', 'Content Strategy'],
      description: 'Medical services provider focusing on innovative healthcare solutions.',
      year: '2023',
      isInternational: true
    },
    { 
      name: 'Plus27 Digital', 
      location: 'Cape Town',
      logo: '📱',
      industry: 'Digital Agency',
      services: ['Partnership', 'Collaboration'],
      description: 'Digital marketing agency partnership for expanded service offerings.',
      year: '2022',
      isInternational: true
    },
    { 
      name: 'Lavender Farm Guest House', 
      location: 'Franschhoek',
      logo: '🏨',
      industry: 'Hospitality',
      services: ['Booking System', 'Digital Marketing'],
      description: 'Boutique guest house in the heart of South African wine country.',
      year: '2023',
      isInternational: true
    }
  ];

  const caseStudies = [
    {
      name: 'DPS Chhatarpur',
      industry: 'Education',
      services: 'Social media, website management, performance marketing',
      description: 'Comprehensive digital presence management for leading educational institution',
      icon: '🎓'
    },
    {
      name: 'Beast Nutrition',
      industry: 'Supplements',
      services: 'Complete marketing management, social media, performance marketing, sales funnel optimization',
      description: 'End-to-end marketing solutions driving significant growth in supplement sales',
      icon: '💊',
      highlight: true
    },
    {
      name: 'Manthan Fitness Lounge & Supermart',
      industry: 'Fitness & Retail',
      services: 'Social media, website management, performance marketing, creative campaigns',
      description: 'Multi-faceted marketing approach for fitness and retail business expansion',
      icon: '🏪'
    },
    {
      name: 'Dopamine Feel Good Gym',
      industry: 'Fitness',
      services: 'Video content, social media, creative campaigns, brand awareness',
      description: 'Creative content strategy focusing on community building and brand awareness',
      icon: '🎬'
    },
    {
      name: 'Journey Makers',
      industry: 'Travel Agency',
      services: 'Meta Ads, social media, content, branding',
      description: '₹5 Crores sales in 4 months through strategic digital marketing campaigns',
      icon: '🗺️',
      highlight: true
    }
  ];

  const handleClientClick = (clientName) => {
    const clientData = clientsData[clientName] || internationalPartners.find(p => p.name === clientName);
    if (clientData) {
      setSelectedClient(clientData);
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    // Floating elements animation
    if (floatingElementsRef.current) {
      gsap.to(floatingElementsRef.current.querySelectorAll('.floating-element'), {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-5, 5)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });
    }

    // Hero animation with enhanced effects
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(heroRef.current.children,
        { opacity: 0, y: 100, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1.2, 
          stagger: 0.3, 
          ease: "back.out(1.7)",
        }
      );
    }

    // Enhanced stats animation
    if (statsRef.current) {
      gsap.fromTo(statsRef.current.querySelectorAll('.stat-item'),
        { opacity: 0, scale: 0.5, rotation: -10 },
        { 
          opacity: 1, 
          scale: 1, 
          rotation: 0,
          duration: 0.8, 
          stagger: 0.15,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    // Enhanced domestic clients animation
    if (domesticRef.current) {
      gsap.fromTo(domesticRef.current.querySelectorAll('.client-card'),
        { opacity: 0, y: 50, scale: 0.8, rotation: 5 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotation: 0,
          duration: 0.6, 
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: domesticRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    // Enhanced international partners animation
    if (internationalRef.current) {
      gsap.fromTo(internationalRef.current.querySelectorAll('.partner-card'),
        { opacity: 0, x: -100, scale: 0.9 },
        { 
          opacity: 1, 
          x: 0, 
          scale: 1,
          duration: 0.8, 
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: internationalRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    // Enhanced case studies animation
    if (caseStudiesRef.current) {
      gsap.fromTo(caseStudiesRef.current.querySelectorAll('.case-study-card'),
        { opacity: 0, scale: 0.8, y: 30 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          duration: 0.9, 
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: caseStudiesRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen font-satoshi overflow-x-hidden">
      <Navigation />
      
      {/* Floating Background Elements */}
      <div ref={floatingElementsRef} className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-mdm-gold/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-mdm-dark-gold/10 rounded-full blur-2xl"></div>
        <div className="floating-element absolute bottom-40 left-20 w-24 h-24 bg-mdm-gold/15 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-20 right-10 w-28 h-28 bg-mdm-dark-gold/10 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section with Enhanced Design */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-white via-mdm-gold/5 to-mdm-dark-gold/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mdm-gold/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div ref={heroRef} className="max-w-5xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-mdm-gold/20 rounded-full text-mdm-dark-gold font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                Trusted Worldwide
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-satoshi mb-6 sm:mb-8 text-mdm-black leading-tight">
              Our Amazing
              <br />
              <span className="bg-gradient-to-r from-mdm-gold via-mdm-dark-gold to-mdm-gold bg-clip-text text-transparent">
                Clients
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-satoshi mb-8 sm:mb-10 leading-relaxed max-w-4xl mx-auto px-4">
              Empowering businesses across industries and continents with innovative digital solutions. 
              From ambitious startups to industry leaders, we craft success stories together.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-2 h-2 bg-mdm-gold rounded-full animate-pulse"></div>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-mdm-gold to-mdm-dark-gold rounded-full"></div>
              <div className="w-2 h-2 bg-mdm-dark-gold rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-white via-gray-50 to-white relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <div className="stat-item text-center group">
              <div className="relative">
                <div className="w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-mdm-gold to-mdm-dark-gold flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                  <Users className="w-8 sm:w-10 h-8 sm:h-10 text-mdm-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-mdm-dark-gold rounded-full flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-mdm-black font-satoshi mb-3 bg-gradient-to-r from-mdm-black to-mdm-dark-gold bg-clip-text text-transparent">100+</div>
              <div className="text-base sm:text-lg text-gray-600 font-satoshi font-medium">Happy Clients</div>
              <div className="text-sm text-mdm-gold mt-1">Across Industries</div>
            </div>
            <div className="stat-item text-center group">
              <div className="relative">
                <div className="w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-mdm-dark-gold to-mdm-black flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                  <Globe className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-mdm-gold rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-mdm-black" />
                </div>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-mdm-black font-satoshi mb-3 bg-gradient-to-r from-mdm-black to-mdm-dark-gold bg-clip-text text-transparent">3</div>
              <div className="text-base sm:text-lg text-gray-600 font-satoshi font-medium">Countries</div>
              <div className="text-sm text-mdm-gold mt-1">Global Reach</div>
            </div>
            <div className="stat-item text-center group">
              <div className="relative">
                <div className="w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-mdm-black to-mdm-dark-gold flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                  <TrendingUp className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-mdm-gold rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-mdm-black" />
                </div>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-mdm-black font-satoshi mb-3 bg-gradient-to-r from-mdm-black to-mdm-dark-gold bg-clip-text text-transparent">₹5Cr+</div>
              <div className="text-base sm:text-lg text-gray-600 font-satoshi font-medium">Revenue Generated</div>
              <div className="text-sm text-mdm-gold mt-1">Client Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Domestic Clients */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-mdm-gold/5 via-white to-mdm-dark-gold/5 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mdm-gold/20 rounded-full text-mdm-dark-gold font-semibold text-sm mb-6">
              <Star className="w-4 h-4" />
              India's Finest
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mdm-black font-satoshi mb-6">
              Clients We've <span className="text-mdm-gold">Empowered</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-satoshi max-w-4xl mx-auto px-4 leading-relaxed">
              Building lasting partnerships with visionary businesses across diverse industries in India
            </p>
          </div>

          <div ref={domesticRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {domesticClients.map((client, index) => (
              <div 
                key={client} 
                className="client-card group bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-105 border border-mdm-gold/20 hover:border-mdm-gold/40 relative overflow-hidden"
                onClick={() => handleClientClick(client)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-mdm-gold/10 to-mdm-dark-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {clientsData[client]?.logo || '🏢'}
                  </div>
                  <div className="text-mdm-black font-satoshi font-bold text-sm sm:text-base mb-1 group-hover:text-mdm-dark-gold transition-colors duration-300">
                    {client}
                  </div>
                  {clientsData[client] && (
                    <div className="text-xs text-mdm-gold font-medium bg-mdm-gold/10 px-2 py-1 rounded-full">
                      {clientsData[client].industry}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced International Partners */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-white via-gray-50 to-white relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mdm-dark-gold/20 rounded-full text-mdm-dark-gold font-semibold text-sm mb-6">
              <Globe className="w-4 h-4" />
              Global Network
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mdm-black font-satoshi mb-6">
              International <span className="text-mdm-dark-gold">Partners</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-satoshi max-w-4xl mx-auto px-4 leading-relaxed">
              Expanding horizons with successful partnerships across South Africa and Australia
            </p>
          </div>

          <div ref={internationalRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {internationalPartners.map((partner, index) => (
              <Card 
                key={partner.name} 
                className="partner-card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white/90 backdrop-blur-sm border-0 shadow-xl cursor-pointer relative overflow-hidden rounded-2xl"
                onClick={() => handleClientClick(partner.name)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-mdm-gold/10 via-transparent to-mdm-dark-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 sm:p-8 text-center relative z-10">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-mdm-gold/20 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-mdm-gold" />
                  </div>
                  
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {partner.logo}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-mdm-black font-satoshi mb-3 group-hover:text-mdm-dark-gold transition-colors duration-300">
                    {partner.name}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-mdm-dark-gold font-satoshi font-bold mb-2 bg-mdm-gold/10 px-3 py-1 rounded-full inline-block">
                    {partner.location}
                  </p>
                  
                  <p className="text-sm text-gray-600 font-satoshi mb-4 bg-gray-50 px-3 py-1 rounded-full inline-block">
                    {partner.industry}
                  </p>

                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-xs text-mdm-gold font-medium">Since {partner.year}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Case Studies */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-mdm-gold/5 via-white to-mdm-dark-gold/5 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mdm-gold/20 rounded-full text-mdm-dark-gold font-semibold text-sm mb-6">
              <Award className="w-4 h-4" />
              Success Stories
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mdm-black font-satoshi mb-6">
              Case Studies & <span className="text-mdm-gold">Retainer Clients</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-satoshi max-w-4xl mx-auto px-4 leading-relaxed">
              Long-term partnerships delivering consistent results and exponential growth
            </p>
          </div>

          <div ref={caseStudiesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {caseStudies.map((study, index) => (
              <Card 
                key={study.name} 
                className={`case-study-card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-xl relative overflow-hidden rounded-2xl ${
                  study.highlight 
                    ? 'bg-gradient-to-br from-mdm-gold/20 via-white to-mdm-dark-gold/20' 
                    : 'bg-white/90 backdrop-blur-sm'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-mdm-gold/5 to-mdm-dark-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 sm:p-8 relative z-10">
                  {study.highlight && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-mdm-gold px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 text-mdm-black" />
                      <span className="text-mdm-black font-satoshi font-bold text-xs">Success Story</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{study.icon}</div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-mdm-black font-satoshi group-hover:text-mdm-dark-gold transition-colors duration-300">
                        {study.name}
                      </h3>
                      <p className="text-mdm-dark-gold font-satoshi font-bold text-sm bg-mdm-gold/10 px-2 py-1 rounded-full inline-block mt-1">
                        {study.industry}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 font-satoshi text-sm">
                      <strong className="text-mdm-dark-gold">Services:</strong> {study.services}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 font-satoshi leading-relaxed text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-300">
                    {study.description}
                  </p>

                  {study.highlight && (
                    <div className="mt-4 p-3 bg-gradient-to-r from-mdm-gold/10 to-mdm-dark-gold/10 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-mdm-gold" />
                        <span className="text-mdm-dark-gold font-satoshi font-bold text-sm">Outstanding Results</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ClientModal 
        client={selectedClient}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Clients;
