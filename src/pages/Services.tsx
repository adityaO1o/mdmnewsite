import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Users, Globe, Star, Award,
  Code, Megaphone, Video, ArrowRight,
  Shield, Target, Rocket, Sparkles,
  CheckCircle, Eye, TrendingUp, Heart, Zap, BarChart4
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);
  const floatingElementsRef = useRef(null);

  // Stats Data – FIXED!
  const stats = [
    { icon: Users, number: 150, label: 'Happy Clients', suffix: '+', prefix: '' },
    { icon: Globe, number: 5, label: 'Revenue Generated', suffix: 'Cr+', prefix: '₹' },
    { icon: Star, number: 200, label: 'Projects Completed', suffix: '+', prefix: '' },
    { icon: Award, number: 99, label: 'Client Satisfaction', suffix: '%', prefix: '' }
  ];

  useEffect(() => {
    // Floating background animation
    if (floatingElementsRef.current) {
      const elements = floatingElementsRef.current.children;
      let index = 0;
for (const element of elements) {
  gsap.to(element, {
    y: -20,
    duration: 4 + index,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    delay: index * 0.5
  });
  index++;
}

    }

    // Stats animation
    if (statsRef.current) {
      const statsItems = statsRef.current.querySelectorAll('.stat-item');
      statsItems.forEach((stat, index) => {
        const numberElement = stat.querySelector('.stat-number');
        if (numberElement) {
          const statObj = stats[index];
          gsap.fromTo(stat,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: stat,
                start: "top 85%",
                toggleActions: "play none none reverse",
                onEnter: () => {
                  // Animate only the number, keep prefix/suffix static
                  gsap.fromTo(numberElement,
                    { innerText: 0 },
                    {
                      innerText: statObj.number,
                      duration: 1.5,
                      snap: { innerText: 1 },
                      ease: "power2.out",
                      onUpdate: function () {
                        numberElement.innerHTML = `${statObj.prefix}${Math.floor(this.targets()[0].innerText)}${statObj.suffix}`;
                      }
                    }
                  );
                }
              }
            }
          );
        }
      });
    }

    // Other animations (services, features, process, cta) – similar to above
    // ... (for brevity, not shown, but use the same gsap.fromTo logic as above)

  }, []);

  // Services Data
  const services = [
    {
      icon: Code,
      title: 'Technology Solutions',
      subtitle: 'Building Digital Excellence',
      description: 'Transform your business with cutting-edge web development, custom software solutions, and digital automation that drives real results.',
      features: [
        'Custom Web Development',
        'E-commerce Platforms',
        'CRM/ERP Integration',
        'Digital Automation',
        'Cloud Solutions',
        'API Development'
      ],
      link: '/services/technology',
      color: 'mdm-gold',
      stats: '50+ Projects Delivered',
      highlight: 'Most Popular'
    },
    {
      icon: Megaphone,
      title: 'Marketing Excellence',
      subtitle: 'Growth That Matters',
      description: 'Strategic marketing campaigns that generate leads, build brand awareness, and deliver measurable ROI for sustainable business growth.',
      features: [
        'Performance Marketing',
        'Social Media Management',
        'SEO & Content Strategy',
        'Brand Development',
        'Email Automation',
        'Influencer Campaigns'
      ],
      link: '/services/marketing',
      color: 'mdm-dark-gold',
      stats: '₹5Cr+ Revenue Generated',
      highlight: 'High ROI'
    },
    {
      icon: Video,
      title: 'Media Production',
      subtitle: 'Visual Storytelling',
      description: 'Professional photography, video production, and creative content that captures your brand essence and engages your target audience.',
      features: [
        'Professional Photography',
        'Video Production',
        'Motion Graphics',
        'Brand Films',
        '3D Animation',
        'Creative Ad Visuals'
      ],
      link: '/services/media-production',
      color: 'mdm-black',
      stats: '100+ Creative Projects',
      highlight: 'Award Winning'
    }
  ];

  // Features Data (with new point)
  const features = [
    { icon: Shield, text: 'Full-Service Digital Solutions Under One Roof' },
    { icon: Target, text: 'Proven Track Record with 150+ Successful Projects' },
    { icon: Globe, text: 'International Experience Across 5+ Countries' },
    { icon: TrendingUp, text: 'Data-Driven Strategies with Measurable ROI' },
    { icon: BarChart4, text: 'Transparent Reporting & Analytics' }, // NEW
    { icon: Heart, text: 'Dedicated Account Management & 24/7 Support' },
    { icon: Rocket, text: 'Scalable Solutions for Growing Businesses' },
    { icon: Sparkles, text: 'Custom Development & Creative Excellence' },
    { icon: Zap, text: 'Performance Marketing That Delivers Results' }
  ];

  // Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Deep dive into your business goals, target audience, and competitive landscape to create a tailored strategy.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop comprehensive roadmaps with clear milestones, timelines, and measurable objectives.',
      icon: Target
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Execute with precision using cutting-edge technology, creative excellence, and industry best practices.',
      icon: Code
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'Deploy solutions with ongoing monitoring, performance optimization, and continuous improvement.',
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen font-satoshi bg-white relative overflow-hidden">
      <Navigation />

      {/* Floating Background Elements */}
      <div ref={floatingElementsRef} className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-mdm-gold/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-mdm-dark-gold/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-mdm-gold/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-mdm-dark-gold/10 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-br from-white via-gray-50/50 to-mdm-gold/5 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-mdm-gold/10 text-mdm-dark-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" aria-label="Sparkles" />
              Premium Digital Services
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-satoshi mb-8 text-mdm-black leading-tight">
              Transforming Ideas Into
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mdm-gold via-mdm-dark-gold to-mdm-gold">
                Digital Success
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-satoshi mb-10 leading-relaxed max-w-4xl mx-auto">
              From cutting-edge technology solutions to strategic marketing campaigns and stunning visual content, 
              we deliver comprehensive services that drive measurable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-mdm-gold to-mdm-dark-gold hover:from-mdm-dark-gold hover:to-mdm-gold text-mdm-black font-satoshi font-bold px-10 py-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" aria-label="Arrow Right" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-2 border-mdm-gold text-mdm-gold hover:bg-mdm-gold hover:text-mdm-black font-satoshi font-bold px-10 py-4 rounded-full text-lg transition-all duration-300">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mdm-black font-satoshi mb-6">
              Our Core <span className="text-mdm-gold">Services</span>
            </h2>
            <p className="text-xl text-gray-700 font-satoshi leading-relaxed max-w-3xl mx-auto">
              Three powerful pillars of digital excellence designed to elevate your business
            </p>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
              >
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-gradient-to-r from-mdm-gold to-mdm-dark-gold text-mdm-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    {service.highlight}
                  </span>
                </div>

                {/* Simple gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-mdm-gold/5 via-transparent to-mdm-dark-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardContent className="p-8 h-full flex flex-col relative z-10">
                  <div className={`service-icon w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color === 'mdm-black' ? 'from-mdm-black to-gray-800' : `from-${service.color} to-${service.color}`} flex items-center justify-center shadow-lg transition-shadow duration-300`}>
                    <service.icon className={`w-10 h-10 ${service.color === 'mdm-black' ? 'text-white' : 'text-mdm-black'}`} aria-label={service.title} />
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-mdm-black font-satoshi mb-2">
                      {service.title}
                    </h3>
                    <p className="text-mdm-gold font-satoshi font-semibold">
                      {service.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-700 font-satoshi leading-relaxed mb-8 text-center flex-grow">
                    {service.description}
                  </p>
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 font-satoshi">
                          <CheckCircle className="w-5 h-5 text-mdm-gold mr-3 flex-shrink-0" aria-label="Feature" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-8 p-4 bg-gradient-to-r from-mdm-gold/10 to-mdm-dark-gold/10 rounded-xl border border-mdm-gold/20">
                    <p className="text-mdm-dark-gold font-satoshi font-bold text-center">
                      {service.stats}
                    </p>
                  </div>
                  <Link to={service.link} className="mt-auto">
                    <Button className="w-full bg-gradient-to-r from-mdm-gold to-mdm-dark-gold hover:from-mdm-dark-gold hover:to-mdm-gold text-mdm-black font-satoshi font-bold py-4 rounded-full transition-all duration-300 group/btn shadow-lg hover:shadow-xl">
                      Explore Service
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" aria-label="Arrow Right" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mdm-black font-satoshi mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-mdm-gold to-mdm-dark-gold">MDM Consulting</span>?
              </h2>
              <p className="text-xl text-gray-700 font-satoshi leading-relaxed max-w-4xl mx-auto">
                Proven expertise, innovative solutions, and unwavering commitment to your success
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div ref={featuresRef} className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-mdm-gold to-mdm-dark-gold rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <feature.icon className="w-6 h-6 text-mdm-black" aria-label="Feature Icon" />
                    </div>
                    <p className="text-gray-700 font-satoshi leading-relaxed text-lg group-hover:text-mdm-dark-gold transition-colors duration-300">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
              {/* Stats Section */}
              <div ref={statsRef} className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card
                    key={stat.label}
                    className="stat-item text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-md group cursor-pointer border-2 border-transparent hover:border-mdm-gold"
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-mdm-gold to-mdm-dark-gold flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <stat.icon className="w-8 h-8 text-mdm-black" aria-label={stat.label} />
                      </div>
                      <div className="stat-number text-3xl font-bold text-mdm-black font-satoshi mb-3">
                        {stat.prefix}{stat.number}{stat.suffix}
                      </div>
                      <div className="text-gray-600 font-satoshi font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mdm-black font-satoshi mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-mdm-gold to-mdm-dark-gold">Process</span>
            </h2>
            <p className="text-xl text-gray-700 font-satoshi leading-relaxed max-w-3xl mx-auto">
              A proven methodology that ensures success at every step of your journey
            </p>
          </div>
          <div ref={processRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={step.step}
                className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-md relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-mdm-gold to-mdm-dark-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-mdm-gold to-mdm-dark-gold flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-mdm-black" aria-label={step.title} />
                  </div>
                  <div className="text-mdm-gold font-satoshi font-bold text-lg mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-mdm-black font-satoshi mb-4">{step.title}</h3>
                  <p className="text-gray-600 font-satoshi leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section ref={ctaRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-mdm-black via-mdm-dark-gold to-mdm-black relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-mdm-gold text-mdm-black px-4 py-2 rounded-full text-sm font-bold mb-8 animate-pulse">
              <Rocket className="w-4 h-4" aria-label="Rocket" />
              Ready to Get Started?
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-satoshi mb-8">
              Transform Your Business Today
            </h2>
            <p className="text-xl sm:text-2xl text-gray-200 font-satoshi mb-12 leading-relaxed">
              Join 150+ successful businesses that have accelerated their growth with our comprehensive digital solutions. 
              Let's create your success story together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-mdm-gold to-white hover:from-white hover:to-mdm-gold text-mdm-black font-satoshi font-bold px-12 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Start Your Project Now
                  <ArrowRight className="w-6 h-6 ml-3" aria-label="Arrow Right" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-mdm-gold text-mdm-gold hover:bg-mdm-gold hover:text-mdm-black font-satoshi font-bold px-12 py-5 rounded-full text-xl transition-all duration-300"
                >
                  View Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
