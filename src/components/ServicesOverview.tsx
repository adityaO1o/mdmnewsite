
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Megaphone, Camera, ArrowRight, Code, TrendingUp, Video } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ServicesOverview = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Services cards animation
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Hover animations for cards
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      Array.from(cards).forEach((card) => {
        const cardElement = card as HTMLElement;
        
        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }
  }, []);

  const services = [
    {
      icon: Monitor,
      title: 'Technology Solutions',
      description: 'Custom web development, e-commerce platforms, CRM/ERP integration, and digital automation to build your robust digital foundation.',
      features: ['Custom Web Development', 'E-commerce Solutions', 'CRM/ERP Integration', 'Digital Automation', 'Cloud Solutions', 'API Development'],
      color: 'mdm-gold',
      gradient: 'from-mdm-gold/10 to-mdm-gold/5',
      link: '/services/technology',
      stats: '50+ Projects Delivered'
    },
    {
      icon: Megaphone,
      title: 'Marketing Excellence',
      description: 'Performance-driven marketing strategies, social media management, SEO, and brand development that delivers measurable, scalable results.',
      features: ['Performance Marketing', 'Social Media Management', 'SEO & Content Strategy', 'Brand Development', 'Email Marketing', 'Influencer Campaigns'],
      color: 'mdm-dark-gold',
      gradient: 'from-mdm-dark-gold/10 to-mdm-dark-gold/5',
      link: '/services/marketing',
      stats: '₹5Cr+ Revenue Generated'
    },
    {
      icon: Camera,
      title: 'Media Production',
      description: 'Professional photography, video production, motion graphics, and visual storytelling that captures your brand essence and engages audiences.',
      features: ['Professional Photography', 'Video Production', 'Motion Graphics', 'Visual Storytelling', 'Brand Films', '3D Animation'],
      color: 'mdm-black',
      gradient: 'from-gray-100 to-gray-50',
      link: '/services/media-production',
      stats: '100+ Creative Projects'
    }
  ];

  return (
    <section ref={servicesRef} id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-mdm-gold/5 via-transparent to-mdm-dark-gold/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-mdm-black font-montserrat mb-8">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-mdm-gold to-mdm-dark-gold">Services</span>
          </h2>
          <p className="text-xl text-gray-700 font-montserrat max-w-4xl mx-auto leading-relaxed">
            We offer comprehensive solutions across three key areas to drive your business forward with innovation, expertise, and measurable results
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-mdm-gold to-mdm-dark-gold mx-auto mt-8"></div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`group transition-all duration-500 bg-gradient-to-br ${service.gradient} border-0 shadow-xl hover:shadow-2xl relative overflow-hidden`}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-mdm-gold/10 to-mdm-dark-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="p-10 text-center relative z-10">
                <div className={`w-20 h-20 mx-auto mb-8 rounded-full bg-${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <service.icon className={`w-10 h-10 ${service.color === 'mdm-black' ? 'text-white' : 'text-mdm-black'}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-mdm-black font-montserrat mb-6">
                  {service.title}
                </h3>
                
                <p className="text-gray-700 font-montserrat mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>

                <div className="mb-8">
                  <ul className="text-left space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 font-montserrat">
                        <div className={`w-2 h-2 bg-${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 p-4 bg-white/50 rounded-lg border border-mdm-gold/20">
                  <p className="text-mdm-dark-gold font-montserrat font-bold text-sm">
                    {service.stats}
                  </p>
                </div>

                <Link to={service.link}>
                  <Button 
                    className={`w-full bg-${service.color} hover:bg-${service.color} text-${service.color === 'mdm-black' ? 'white' : 'mdm-black'} font-montserrat font-semibold py-3 rounded-full transition-all duration-300 group/btn shadow-lg hover:shadow-xl`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center bg-gradient-to-r from-mdm-black to-mdm-dark-gold p-12 rounded-3xl shadow-2xl">
          <h3 className="text-3xl font-bold text-white font-montserrat mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-200 font-montserrat mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive services can drive your growth and success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-mdm-gold hover:bg-white text-mdm-black font-montserrat font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                View All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline"
                size="lg" 
                className="border-mdm-gold text-mdm-gold hover:bg-mdm-gold hover:text-mdm-black font-montserrat font-bold px-10 py-4 rounded-full text-lg transition-all duration-300"
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
