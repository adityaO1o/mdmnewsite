import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const heroRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const projects = [
    // Featured Web Projects
    { 
      name: 'VNETIX', 
      url: 'vnetix.com', 
      category: 'web', 
      type: 'Tech Platform', 
      location: 'India',
      logo: '/lovable-uploads/2bcbee51-7e23-4822-b52a-eec72bab6d26.png',
      description: 'A comprehensive technology platform providing innovative solutions for modern businesses.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      completedDate: '2024',
      features: ['Real-time Analytics', 'API Integration', 'Cloud Infrastructure', 'Mobile Responsive'],
      challenges: 'Built a scalable architecture to handle high traffic and complex data processing.',
      clientTestimonial: 'VNETIX exceeded our expectations with their technical expertise and timely delivery.'
    },
    { 
      name: 'Ghoom Bara Bar Ghoom', 
      url: 'ghoombarabarghoom.com', 
      category: 'web', 
      type: 'Tour & Travels', 
      location: 'India',
      description: 'A vibrant travel platform connecting adventure seekers with unique destinations across India.',
      technologies: ['React', 'WordPress', 'WooCommerce', 'Payment Gateway'],
      completedDate: '2024',
      features: ['Booking System', 'Payment Integration', 'Tour Packages', 'Review System'],
      challenges: 'Integrated complex booking system with multiple payment gateways and real-time availability.',
      clientTestimonial: 'Outstanding work on our travel platform. Bookings increased by 200% after launch!'
    },
    { name: 'AV Industries', url: 'avindustries.in', category: 'web', type: 'Industry', location: 'India' },
    { name: 'Sprizzy', url: 'sprizzy.com', category: 'web', type: 'Marketing', location: 'India' },
    { name: 'Vidya Sarthi', url: 'vidyasarthi.com', category: 'web', type: 'Education', location: 'India' },
    { name: 'Ideas Hacks', url: 'ideashacks.com', category: 'web', type: 'Business', location: 'India' },
    { name: 'Plus27 Digital', url: 'plus27digital.com', category: 'web', type: 'Marketing', location: 'South Africa', logo: '/lovable-uploads/06bcca0f-0db3-4514-ab80-7851ec7bd639.png' },
    { name: 'Jain Group', url: 'jaingroup.online', category: 'web', type: 'Real Estate', location: 'India' },
    { name: 'Dayal Automotive', url: 'dayalautomotive.com', category: 'web', type: 'Automobile', location: 'India' },
    { name: 'Innerspace Inc', url: 'innerspaceinc.in', category: 'web', type: 'Real Estate', location: 'India' },
    { name: 'Guru Machinery', url: 'gurumachinery.com', category: 'web', type: 'Manufacturing', location: 'India' },
    { name: 'Naina Volt Energy', url: 'nainavoltenergy.com', category: 'web', type: 'Solar Energy', location: 'India' },
    { name: 'Innotech India', url: 'innotecindia.in', category: 'web', type: 'Manufacturing', location: 'India' },
    { name: 'Combine Air', url: 'combineair.com.au', category: 'web', type: 'Fitness', location: 'Australia' },

    // E-commerce Stores
    { 
      name: 'Dejure Fitness', 
      url: 'dejurefitness.com', 
      category: 'ecommerce', 
      type: 'Fitness', 
      location: 'India',
      description: 'Premium fitness equipment and supplements e-commerce platform with advanced features.',
      technologies: ['Shopify', 'React', 'Payment Gateway', 'Inventory Management'],
      completedDate: '2024',
      features: ['Product Catalog', 'Inventory Management', 'Order Tracking', 'Customer Reviews'],
      challenges: 'Implemented complex inventory management system with real-time stock updates.',
      clientTestimonial: 'Incredible e-commerce solution that boosted our online sales significantly!'
    },
    { name: 'Beast Nutrition', url: 'beastnutrition.store', category: 'ecommerce', type: 'Supplements', location: 'India', logo: '/lovable-uploads/25276a12-b984-4a73-a1d3-f0c9ac561f5b.png' },
    { name: 'Monarque Paris', url: 'monarqueparis.com', category: 'ecommerce', type: 'Fashion', location: 'India' },
    { name: 'Ruhi Tumbi', url: 'ruhitumbi.com', category: 'ecommerce', type: 'Fashion', location: 'India' },
    { name: 'The Manga Store', url: 'themangastore.in', category: 'ecommerce', type: 'Street Fashion', location: 'India', logo: '/lovable-uploads/ed95404d-c6b4-4622-8977-fad1798e8720.png' },
    { name: 'The Clinq Pharmaceuticals', url: 'theclinqpharmaceuticals.in', category: 'ecommerce', type: 'Pharmaceutical', location: 'India', logo: '/lovable-uploads/cb8507d1-7b54-4610-ae6e-3929bda45285.png' },
    { name: 'ZX3', url: 'zx3.co.in', category: 'ecommerce', type: 'Fashion', location: 'India' },

    // Custom-Coded Projects
    { 
      name: 'Tradeling', 
      url: 'tradeling.com/ae-en', 
      category: 'custom', 
      type: 'B2B Marketplace', 
      location: 'UAE', 
      description: 'Custom scalable architecture for the largest B2B marketplace in the Middle East.',
      technologies: ['Next.js', 'TypeScript', 'Microservices', 'Kubernetes', 'Redis'],
      completedDate: '2024',
      features: ['Microservices Architecture', 'Real-time Messaging', 'Advanced Search', 'Multi-language Support'],
      challenges: 'Built a highly scalable system handling millions of products and thousands of concurrent users.',
      clientTestimonial: 'Exceptional technical delivery that transformed our marketplace platform completely.'
    },
    { name: 'Thrival Learning', url: 'thrival-learning', category: 'custom', type: 'EdTech', location: 'India', description: 'Next.js, React, Vercel', logo: '/lovable-uploads/2bcbee51-7e23-4822-b52a-eec72bab6d26.png' },
    { name: 'The Rubber Company', url: 'therubbercompany.com', category: 'custom', type: 'Industrial', location: 'India', description: 'WordPress, WooCommerce' },

    // International Marketing Projects
    { 
      name: 'Lindenberg Racing', 
      url: '#', 
      category: 'marketing', 
      type: 'Racing', 
      location: 'South Africa', 
      logo: '/uploads/Lindenberg Racing.webp',
      description: 'Comprehensive digital marketing strategy for professional racing team.',
      technologies: ['Social Media Marketing', 'Content Strategy', 'Brand Design', 'Video Production'],
      completedDate: '2024',
      features: ['Brand Strategy', 'Social Media Growth', 'Content Creation', 'Event Marketing'],
      challenges: 'Developed a comprehensive brand strategy that increased social media engagement by 400%.',
      clientTestimonial: 'MDM transformed our digital presence and helped us reach a global audience!'
    },
    { name: 'Combine Air Training', url: '#', category: 'marketing', type: 'Fitness Training', location: 'Australia', description: 'Website revamp, digital marketing, brand positioning' },
    { name: 'Myco Med', url: '#', category: 'marketing', type: 'Medical', location: 'South Africa', description: 'Social, website, product-focused reels', logo: '/lovable-uploads/17d43288-1e3a-45b5-913f-752f3e7c1a77.png' },
    { name: 'Lavender Farm Guest House', url: '#', category: 'marketing', type: 'Hospitality', location: 'South Africa', description: 'Social media, content, SEO', logo: '/lovable-uploads/404b8807-35e1-40a3-9f5e-eeb8cad57b45.png' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'custom', label: 'Custom Solutions' },
    { key: 'marketing', label: 'Marketing' }
  ];

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }

    // Filters animation
    if (filtersRef.current) {
      gsap.fromTo(filtersRef.current.children,
        { 
          opacity: 0, 
          x: -50
        },
        { 
          opacity: 1, 
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.5,
          ease: "power2.out"
        }
      );
    }

    // Background gradient animation
    gsap.to("body", {
      background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)",
      duration: 0.8
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleFilterChange = (filterKey: string) => {
    setActiveFilter(filterKey);
    
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children,
        { 
          opacity: 0, 
          scale: 0.8,
          y: 30
        },
        { 
          opacity: 1, 
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }
  };

  return (
    <div className="min-h-screen font-satoshi overflow-hidden">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-white via-gray-50/50 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-mdm-gold/5 via-transparent to-mdm-gold/5"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div ref={heroRef} className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-satoshi mb-6 sm:mb-8 text-mdm-black leading-tight">
              Our
              <br />
              <span className="text-mdm-gold relative">
                Portfolio
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-mdm-gold"></div>
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-satoshi mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
              Explore our diverse portfolio of successful projects across technology, marketing, 
              and media production, spanning multiple industries and continents.
            </p>
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-mdm-gold to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-mdm-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-mdm-gold/30 rounded-full animate-pulse delay-1000"></div>
      </section>

      {/* Enhanced Filter Tabs */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={filtersRef} className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => handleFilterChange(filter.key)}
                variant={activeFilter === filter.key ? "default" : "outline"}
                className={`font-satoshi font-semibold px-6 py-3 text-sm rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.key 
                    ? 'bg-mdm-gold hover:bg-mdm-dark-gold text-mdm-black shadow-lg' 
                    : 'border-mdm-gold text-mdm-gold hover:bg-mdm-gold hover:text-mdm-black hover:shadow-md'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Grid */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/30 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${project.name}-${activeFilter}`}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-mdm-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-mdm-gold/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;