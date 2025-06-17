
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Database, 
  Cog, 
  Globe, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Layers,
  Cloud,
  Monitor,
  Settings,
  Rocket,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/CallToAction';

gsap.registerPlugin(ScrollTrigger);

const Technology = () => {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }

    // Services cards animation
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current.children,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Tech stack animation
    if (techStackRef.current) {
      gsap.fromTo(
        techStackRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: techStackRef.current,
            start: "top 85%",
          }
        }
      );
    }

    // Features animation
    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current.children,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Floating animation for icons
    gsap.to(".tech-icon", {
      y: -10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.3
    });

  }, []);

  const services = [
    {
      icon: Code,
      title: 'Custom Web Design & Development',
      description: 'Tailored websites built to your exact specifications and business needs with modern frameworks and cutting-edge technology.',
      features: ['React & Next.js Development', 'Custom UI/UX Design', 'Responsive Web Development', 'Progressive Web Apps'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'Front-End & Back-End Engineering',
      description: 'Full-stack development using React, Vue, Angular, Node.js, Laravel, Django, and more modern technologies.',
      features: ['Full-Stack Development', 'API Development', 'Database Design', 'Cloud Architecture'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'WordPress & E-commerce',
      description: 'WooCommerce, Shopify, Magento, and custom e-commerce solutions that drive sales and growth.',
      features: ['E-commerce Platforms', 'Payment Integration', 'Inventory Management', 'Custom Plugins'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Cog,
      title: 'ERP & CRM Integration',
      description: 'HubSpot, Zoho, Salesforce, and custom admin panels for business automation and efficiency.',
      features: ['CRM Integration', 'Business Automation', 'Data Analytics', 'Custom Dashboards'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Automation & Data Workflows',
      description: 'Zapier, Make.com, API integrations, Excel/CSV automations for streamlined operations.',
      features: ['Process Automation', 'Data Migration', 'Workflow Optimization', 'Third-party Integrations'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Shield,
      title: 'SEO-Ready Development & Maintenance',
      description: 'Built for search engines with ongoing support, security updates, and performance optimization.',
      features: ['SEO Optimization', 'Security Hardening', 'Performance Monitoring', '24/7 Support'],
      color: 'from-red-500 to-red-600'
    }
  ];

  const techStack = [
    { name: 'React', icon: Monitor, category: 'Frontend' },
    { name: 'Vue.js', icon: Layers, category: 'Frontend' },
    { name: 'Angular', icon: Settings, category: 'Frontend' },
    { name: 'Node.js', icon: Database, category: 'Backend' },
    { name: 'Laravel', icon: Code, category: 'Backend' },
    { name: 'Django', icon: Cog, category: 'Backend' },
    { name: 'WordPress', icon: Globe, category: 'CMS' },
    { name: 'Shopify', icon: Zap, category: 'E-commerce' },
    { name: 'HubSpot', icon: Shield, category: 'CRM' },
    { name: 'Salesforce', icon: Cloud, category: 'CRM' },
    { name: 'Zapier', icon: Rocket, category: 'Automation' },
    { name: 'AWS', icon: Lock, category: 'Cloud' }
  ];

  const features = [
    'Custom Development Solutions',
    'Scalable Architecture Design',
    'Performance Optimization',
    'Security Best Practices',
    'Cross-Platform Compatibility',
    'Ongoing Support & Maintenance'
  ];

  return (
    <div className="min-h-screen font-satoshi bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Code className="w-4 h-4" />
              Technology Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-satoshi mb-8 text-gray-900 leading-tight">
              Technology
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-700 font-satoshi mb-10 leading-relaxed max-w-4xl mx-auto">
              Building digital foundations that scale with your business. From custom web development 
              to complex integrations, we create technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-satoshi font-bold px-10 py-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-satoshi font-bold px-10 py-4 rounded-full text-lg transition-all duration-300">
                  View Our Work
                </Button>
              </Link>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-satoshi mb-6">
              Our Technology <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business
            </p>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-2xl transition-all duration-500 bg-white border-0 shadow-lg relative overflow-hidden h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardContent className="p-8 relative z-10 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className={`tech-icon w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 font-satoshi mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 font-satoshi leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 font-satoshi text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-satoshi mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver robust, scalable solutions
            </p>
          </div>

          <div ref={techStackRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name} 
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-gray-900 font-satoshi font-semibold text-sm mb-1">{tech.name}</div>
                <div className="text-gray-500 font-satoshi text-xs">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-satoshi mb-6">
                Why Choose Our <span className="text-blue-600">Technology Solutions</span>?
              </h2>
            </div>

            <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-center space-x-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-satoshi leading-relaxed text-lg group-hover:text-blue-600 transition-colors duration-300">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default Technology;
