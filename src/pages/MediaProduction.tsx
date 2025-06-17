
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  Video, 
  Palette, 
  Edit,
  ArrowRight,
  CheckCircle,
  Film,
  Image,
  Mic,
  Monitor,
  Layers,
  Zap,
  Star,
  Award,
  Eye,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/CallToAction';

gsap.registerPlugin(ScrollTrigger);

const MediaProduction = () => {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

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

    // Services cards animation with 3D effect
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current.children,
        { y: 100, opacity: 0, rotationX: 45 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Process animation
    if (processRef.current) {
      gsap.fromTo(
        processRef.current.children,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Portfolio items animation
    if (portfolioRef.current) {
      gsap.fromTo(
        portfolioRef.current.children,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: portfolioRef.current,
            start: "top 85%",
          }
        }
      );
    }

    // Floating animation for media icons
    gsap.to(".media-icon", {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.5
    });

    // Continuous rotation for some elements
    gsap.to(".rotate-element", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

  }, []);

  const services = [
    {
      icon: Camera,
      title: 'Product Photography & Videos',
      description: 'Professional product shoots that showcase your offerings in the best light with studio-quality results and creative compositions.',
      features: ['Studio Photography', 'Product Styling', '360° Product Views', 'Lifestyle Photography'],
      color: 'from-amber-500 to-orange-600',
      stats: '500+ Products Shot'
    },
    {
      icon: Palette,
      title: 'Creative Ad Visuals',
      description: 'Motion graphics, animations, and ad creatives that capture attention and drive action across all digital platforms.',
      features: ['Motion Graphics', 'Animation Design', 'Ad Creatives', 'Visual Effects'],
      color: 'from-purple-500 to-pink-600',
      stats: '200+ Ad Campaigns'
    },
    {
      icon: Edit,
      title: 'Editing & Post Production',
      description: 'Professional editing services that transform raw content into polished final products ready for any platform.',
      features: ['Video Editing', 'Color Grading', 'Audio Enhancement', 'Visual Effects'],
      color: 'from-blue-500 to-cyan-600',
      stats: '1000+ Hours Edited'
    },
    {
      icon: Video,
      title: 'Storytelling through Visual Content',
      description: 'High-quality visual content that tells your brand story and engages your audience across all touchpoints.',
      features: ['Brand Films', 'Documentary Style', 'Social Media Content', 'Corporate Videos'],
      color: 'from-green-500 to-emerald-600',
      stats: '100+ Stories Told'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Concept & Planning',
      description: 'Understanding your vision, goals, and target audience to create a compelling creative brief.',
      icon: Eye,
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: '02',
      title: 'Pre-Production',
      description: 'Detailed planning including storyboarding, location scouting, and talent coordination.',
      icon: Film,
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: '03',
      title: 'Production',
      description: 'Professional photography and videography using state-of-the-art equipment and techniques.',
      icon: Camera,
      color: 'from-green-500 to-green-600'
    },
    {
      step: '04',
      title: 'Post-Production',
      description: 'Expert editing, color grading, sound design, and final delivery in all required formats.',
      icon: Edit,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const portfolioHighlights = [
    { title: 'Brand Films', icon: Video, count: '50+' },
    { title: 'Product Photography', icon: Camera, count: '500+' },
    { title: 'Motion Graphics', icon: Layers, count: '200+' },
    { title: 'Social Content', icon: Image, count: '1000+' },
    { title: 'Audio Production', icon: Mic, count: '100+' },
    { title: 'Live Streams', icon: Monitor, count: '50+' }
  ];

  return (
    <div className="min-h-screen font-satoshi bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl rotate-element"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Film className="w-4 h-4" />
              Visual Storytelling
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-satoshi mb-8 text-white leading-tight">
              Media
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                Production
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-satoshi mb-10 leading-relaxed max-w-4xl mx-auto">
              Visual storytelling that captivates, engages, and converts. From product photography 
              to motion graphics, we create content that makes your brand unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-satoshi font-bold px-10 py-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                  Start Your Project
                  <Play className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 font-satoshi font-bold px-10 py-4 rounded-full text-lg transition-all duration-300">
                  View Portfolio
                </Button>
              </Link>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-satoshi mb-6">
              Our Media <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
              Comprehensive visual content creation that tells your story beautifully
            </p>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-2xl transition-all duration-500 bg-white border-0 shadow-lg relative overflow-hidden h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardContent className="p-10 relative z-10 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <div className={`media-icon w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-12 h-12 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 font-satoshi mb-6">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 font-satoshi leading-relaxed mb-8 text-lg">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 font-satoshi">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-4 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="p-6 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl border border-purple-200">
                      <p className="text-purple-600 font-satoshi font-bold text-center">
                        {service.stats}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-satoshi mb-6">
              Our Creative <span className="text-purple-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
              A showcase of our creative excellence across different media formats
            </p>
          </div>

          <div ref={portfolioRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {portfolioHighlights.map((item, index) => (
              <Card 
                key={item.title} 
                className="group hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-md text-center transform hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 font-satoshi mb-2">{item.count}</div>
                  <div className="text-gray-600 font-satoshi text-sm">{item.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-satoshi mb-6">
              Our Creative Process
            </h2>
            <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
              From concept to delivery, we ensure every piece of content aligns with your brand vision
            </p>
          </div>

          <div ref={processRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card 
                key={step.step} 
                className="group hover:shadow-xl transition-all duration-500 bg-white border-0 shadow-lg relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}></div>
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-purple-600 font-satoshi font-bold text-lg mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 font-satoshi mb-4">{step.title}</h3>
                  <p className="text-gray-600 font-satoshi leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default MediaProduction;
