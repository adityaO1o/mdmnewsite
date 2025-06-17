import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Users, Globe, Trophy, ArrowRight, TrendingUp, Zap, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stats animation
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Features animation
    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current.querySelectorAll('.feature-item'),
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Process cards animation
    if (processRef.current) {
      gsap.fromTo(
        processRef.current.children,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Testimonials animation
    if (testimonialsRef.current) {
      gsap.fromTo(
        testimonialsRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Achievements animation
    if (achievementsRef.current) {
      gsap.fromTo(
        achievementsRef.current.children,
        { scale: 0.9, opacity: 0, rotation: -5 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.7,
          stagger: 0.1,
          scrollTrigger: {
            trigger: achievementsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const stats = [
    { icon: Users, value: '150+', label: 'Happy Clients', description: 'Across multiple industries' },
    { icon: Globe, value: '5+', label: 'Countries', description: 'International presence' },
    { icon: Star, value: '200+', label: 'Projects Delivered', description: 'Successfully completed' },
    { icon: Trophy, value: '7+', label: 'Years Experience', description: 'In digital marketing' }
  ];

  const features = [
    'Full-Service Marketing & Technology Solutions',
    'International Experience (India, South Africa, Australia)',
    'Data-Driven Strategies with Measurable Results',
    'Custom Development & Creative Production',
    'Dedicated Account Management & Support',
    '24/7 Customer Support',
    'Scalable Solutions for Growing Businesses',
    'ROI-Focused Marketing Campaigns'
  ];

  const testimonials = [
    {
      name: "Journey Makers",
      role: "Travel Agency",
      content: "MDM helped us generate ₹5 Crores in sales within just 4 months through strategic Meta Ads and social media campaigns.",
      rating: 5
    },
    {
      name: "Beast Nutrition",
      role: "Fitness Supplements",
      content: "Complete marketing transformation - from website to social media, their performance marketing strategies doubled our online presence.",
      rating: 5
    },
    {
      name: "Combine Air Training",
      role: "Fitness Center - Australia",
      content: "Professional website revamp and digital marketing strategy that significantly improved our brand positioning in the market.",
      rating: 5
    }
  ];

  const achievements = [
    { icon: TrendingUp, title: "₹5Cr+ Revenue Generated", desc: "For clients through performance marketing" },
    { icon: Zap, title: "150% Average Growth", desc: "In client social media engagement" },
    { icon: Shield, title: "99.9% Uptime", desc: "For all websites we develop and maintain" },
    { icon: Award, title: "Industry Recognition", desc: "Featured by leading business publications" }
  ];

  return (
    <div className="min-h-screen font-montserrat">
      <Navigation />
      <HeroSection />
      
      {/* Enhanced Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-mdm-gold/5 to-mdm-dark-gold/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mdm-black font-montserrat mb-4 sm:mb-6">
              Our <span className="text-mdm-gold">Impact</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-montserrat leading-relaxed max-w-3xl mx-auto px-4">
              Numbers that speak louder than words - our track record of delivering results
            </p>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-mdm-gold to-mdm-dark-gold flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                  <stat.icon className="w-8 sm:w-10 h-8 sm:h-10 text-mdm-black" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-mdm-black font-montserrat mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-base sm:text-lg text-gray-800 font-montserrat font-semibold mb-1">{stat.label}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-montserrat">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesOverview />

      {/* Enhanced Why Choose Us */}
      <section ref={featuresRef} className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mdm-black font-montserrat mb-4 sm:mb-6">
                Why Choose <span className="text-mdm-gold">MDM Consulting</span>?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-montserrat leading-relaxed max-w-4xl mx-auto px-4">
                We don't just deliver projects—we build lasting partnerships that drive real business growth through innovation, expertise, and unwavering commitment to your success.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={feature} 
                    className="flex items-start space-x-3 sm:space-x-4 group feature-item"
                  >
                    <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-mdm-gold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-gray-700 font-montserrat leading-relaxed text-base sm:text-lg">{feature}</p>
                  </div>
                ))}
              </div>

              <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-3xl transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="text-center">
                    <div className="w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-mdm-gold to-mdm-dark-gold flex items-center justify-center">
                      <Trophy className="w-10 sm:w-12 h-10 sm:h-12 text-mdm-black" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-mdm-black font-montserrat mb-4 sm:mb-6">
                      Proven Success Stories
                    </h3>
                    <p className="text-gray-600 font-montserrat leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                      From startups to established businesses, we've helped clients across industries 
                      achieve their digital goals with measurable, sustainable success.
                    </p>
                    <div className="bg-gradient-to-r from-mdm-gold/10 to-mdm-dark-gold/10 p-4 sm:p-6 rounded-xl">
                      <p className="text-mdm-dark-gold font-montserrat font-bold text-base sm:text-lg">
                        "₹5 Crores in sales generated for Journey Makers in just 4 months"
                      </p>
                      <p className="text-gray-600 font-montserrat mt-2 text-sm sm:text-base">
                        Through strategic digital marketing and performance optimization
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mdm-black font-montserrat mb-4 sm:mb-6">
              What Our <span className="text-mdm-gold">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-montserrat leading-relaxed max-w-3xl mx-auto px-4">
              Real results, real testimonials from businesses that trusted us with their growth
            </p>
          </div>

          <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-mdm-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-montserrat leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="text-mdm-black font-montserrat font-bold text-base sm:text-lg">{testimonial.name}</h4>
                    <p className="text-mdm-gold font-montserrat font-semibold text-sm sm:text-base">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mdm-black font-montserrat mb-4 sm:mb-6">
              Our <span className="text-mdm-gold">Achievements</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-montserrat leading-relaxed max-w-3xl mx-auto px-4">
              Milestones that reflect our commitment to excellence and client success
            </p>
          </div>

          <div ref={achievementsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-mdm-gold to-mdm-dark-gold flex items-center justify-center">
                    <achievement.icon className="w-6 sm:w-8 h-6 sm:h-8 text-mdm-black" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-mdm-black font-montserrat mb-3 sm:mb-4">{achievement.title}</h3>
                  <p className="text-gray-600 font-montserrat leading-relaxed text-sm sm:text-base">{achievement.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mdm-black font-montserrat mb-4 sm:mb-6">
              Our <span className="text-mdm-gold">Process</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-montserrat leading-relaxed max-w-3xl mx-auto px-4">
              From strategy to execution, we follow a proven methodology that ensures success at every step
            </p>
          </div>

          <div ref={processRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Discovery & Research', desc: 'Deep dive into your business, goals, target audience, and competitive landscape' },
              { step: '02', title: 'Strategy & Planning', desc: 'Developing a comprehensive roadmap with clear milestones and measurable objectives' },
              { step: '03', title: 'Execution & Development', desc: 'Implementing solutions with precision, creativity, and cutting-edge technology' },
              { step: '04', title: 'Optimization & Growth', desc: 'Continuous improvement, performance monitoring, and scaling for long-term success' }
            ].map((phase, index) => (
              <Card 
                key={phase.step} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mdm-gold to-mdm-dark-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-mdm-gold to-mdm-dark-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-mdm-black font-montserrat font-bold text-lg sm:text-xl">{phase.step}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-mdm-black font-montserrat mb-3 sm:mb-4">{phase.title}</h3>
                  <p className="text-gray-600 font-montserrat leading-relaxed text-sm sm:text-base">{phase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-mdm-black via-mdm-dark-gold to-mdm-black">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat mb-6 sm:mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-montserrat mb-6 sm:mb-8 leading-relaxed px-4">
              Join 150+ successful businesses that have grown with our comprehensive 
              technology, marketing, and media production services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-mdm-gold hover:bg-white text-mdm-black font-montserrat font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto"
                >
                  Start Your Project Today
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-mdm-gold text-mdm-gold hover:bg-mdm-gold hover:text-mdm-black font-montserrat font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
                >
                  View Our Work
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

export default Index;
