import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Users, Award, Target, Heart, Lightbulb, Rocket, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const milestonesRef = useRef<HTMLElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);

  const milestones = [
    {
      icon: Globe,
      title: 'International Reach',
      description: 'Successfully launched projects across India, South Africa, and Australia, establishing our global presence.',
      color: 'mdm-gold',
      number: 5
    },
    {
      icon: Users,
      title: '150+ Clients Served',
      description: 'Built lasting relationships with over 150 clients across diverse industries and business sizes.',
      color: 'mdm-dark-gold',
      number: 150
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Trusted partner for leading businesses in technology, fitness, education, real estate, and manufacturing.',
      color: 'mdm-black',
      number: 25
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Purpose-Driven',
      description: 'Every strategy is built around your brand\'s mission and values, ensuring authentic connections with your audience.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of trends and technologies to deliver cutting-edge solutions that give you a competitive advantage.'
    },
    {
      icon: Rocket,
      title: 'Results-Focused',
      description: 'Our success is measured by your growth. We deliver measurable outcomes that directly impact your bottom line.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Open communication, honest reporting, and reliable delivery form the foundation of our client relationships.'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      if (heroRef.current) {
        const tl = gsap.timeline();
        
        tl.fromTo(
          heroRef.current.querySelector('.hero-badge'),
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
        )
        .fromTo(
          heroRef.current.querySelectorAll('.hero-title span'),
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          heroRef.current.querySelector('.hero-subtitle'),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          heroRef.current.querySelector('.hero-divider'),
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power2.out" },
          "-=0.2"
        );
      }

      // Mission section scroll-triggered animation
      if (missionRef.current) {
        gsap.fromTo(
          missionRef.current.querySelector('.mission-card'),
          {
            y: 100,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: missionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Values section animations
      if (valuesRef.current) {
        gsap.fromTo(
          valuesRef.current.querySelectorAll('.value-card'),
          {
            y: 80,
            opacity: 0,
            scale: 0.8
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: valuesRef.current,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Milestones with number counting animation
      if (milestonesRef.current) {
        const milestoneCards = milestonesRef.current.querySelectorAll('.milestone-card');
        
        milestoneCards.forEach((card, index) => {
          const numberElement = card.querySelector('.milestone-number');
          const targetNumber = milestones[index].number;
          
          gsap.fromTo(
            card,
            {
              y: 100,
              opacity: 0,
              scale: 0.8
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
                onEnter: () => {
                  // Number counting animation
                  if (numberElement) {
                    gsap.to(numberElement, {
                      duration: 2,
                      ease: "power2.out",
                      textContent: targetNumber,
                      snap: { textContent: 1 },
                      delay: 0.5
                    });
                  }
                }
              }
            }
          );
        });
      }

      // Philosophy section animation
      if (philosophyRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        });

        tl.fromTo(
          philosophyRef.current.querySelector('.philosophy-title'),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        )
        .fromTo(
          philosophyRef.current.querySelector('.philosophy-card'),
          { y: 80, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
          "-=0.4"
        );
      }

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen font-montserrat">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-br from-white via-gray-50 to-mdm-gold/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mdm-gold/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="hero-badge inline-block px-4 sm:px-6 py-2 sm:py-3 bg-mdm-gold/10 rounded-full mb-6 sm:mb-8">
              <span className="text-mdm-dark-gold font-montserrat font-semibold text-xs sm:text-sm uppercase tracking-wide">About MDM Consulting</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat mb-6 sm:mb-8 text-mdm-black leading-tight">
              <span className="hero-title">
                <span>Where Purpose Meets</span>
                <br />
                <span className="text-mdm-gold bg-gradient-to-r from-mdm-gold to-mdm-dark-gold bg-clip-text text-transparent">Performance</span>
              </span>
            </h1>
            <p className="hero-subtitle text-lg sm:text-xl text-gray-700 font-montserrat leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              We're not just another marketing agency. We're your strategic partners in building 
              meaningful brands that drive real business results.
            </p>
            <div className="hero-divider w-24 sm:w-32 h-1 bg-gradient-to-r from-mdm-gold to-mdm-dark-gold mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section ref={missionRef} className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <Card className="mission-card shadow-2xl border-0 bg-gradient-to-r from-white to-gray-50 overflow-hidden">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-mdm-gold to-mdm-dark-gold flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-mdm-black" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mdm-black font-montserrat text-center sm:text-left">
                    Our Mission
                  </h2>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl text-gray-700 font-montserrat leading-relaxed mb-4 sm:mb-6">
                    At MDM Consulting, we don't just market; we move with mission.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 font-montserrat leading-relaxed">
                    Born out of a passion to help brands stand for something more, we combine strategy, 
                    creativity, and digital excellence to build marketing ecosystems that deliver 
                    results—not just impressions. Every campaign we create, every website we build, 
                    and every story we tell is designed to amplify your brand's purpose while 
                    driving measurable business growth.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mdm-black font-montserrat mb-6 sm:mb-8 text-center lg:text-left">
                Who We Are
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-700 font-montserrat leading-relaxed">
                  We are a full-service marketing and creative consulting firm helping startups, 
                  businesses, and creators establish, grow, and sustain their digital identity.
                </p>
                <p className="text-base sm:text-lg text-gray-700 font-montserrat leading-relaxed">
                  From your first logo to your next million views, we walk every step with you. 
                  Our team combines strategic thinking with creative execution, ensuring that 
                  every touchpoint of your brand tells a compelling story.
                </p>
                <p className="text-base sm:text-lg text-gray-700 font-montserrat leading-relaxed">
                  What sets us apart is our holistic approach—we don't just focus on one aspect 
                  of your business. Instead, we integrate technology, marketing, and media production 
                  to create comprehensive solutions that work in harmony.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <Link to="/contact">
                  <Button className="mt-6 sm:mt-8 bg-gradient-to-r from-mdm-gold to-mdm-dark-gold hover:from-mdm-dark-gold hover:to-mdm-gold text-mdm-black font-montserrat font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                    Start Your Journey
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-mdm-gold/20 to-mdm-dark-gold/20 p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div className="text-center bg-white/50 p-3 sm:p-4 lg:p-6 rounded-2xl">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-mdm-gold font-montserrat mb-1 sm:mb-2">Strategy</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-montserrat font-medium">Data-Driven Insights</div>
                  </div>
                  <div className="text-center bg-white/50 p-3 sm:p-4 lg:p-6 rounded-2xl">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-mdm-gold font-montserrat mb-1 sm:mb-2">Creative</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-montserrat font-medium">Purpose-Built Design</div>
                  </div>
                  <div className="text-center bg-white/50 p-3 sm:p-4 lg:p-6 rounded-2xl">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-mdm-gold font-montserrat mb-1 sm:mb-2">Technology</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-montserrat font-medium">Cutting-Edge Solutions</div>
                  </div>
                  <div className="text-center bg-white/50 p-3 sm:p-4 lg:p-6 rounded-2xl">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-mdm-gold font-montserrat mb-1 sm:mb-2">Results</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-montserrat font-medium">Measurable Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mdm-black font-montserrat mb-4 sm:mb-6">
              Our Core <span className="text-mdm-gold">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-montserrat leading-relaxed max-w-3xl mx-auto px-4">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="value-card group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-mdm-gold to-mdm-dark-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mx-auto sm:mx-0">
                      <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-mdm-black" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-mdm-black font-montserrat mb-2 sm:mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 font-montserrat leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section ref={philosophyRef} className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="philosophy-title text-3xl sm:text-4xl md:text-5xl font-bold text-mdm-black font-montserrat mb-6 sm:mb-8">
              Our Philosophy
            </h2>
            <Card className="philosophy-card shadow-2xl border-0 bg-gradient-to-r from-mdm-gold/10 to-mdm-dark-gold/10">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <p className="text-xl sm:text-2xl text-gray-700 font-montserrat leading-relaxed mb-4 sm:mb-6">
                  We believe every brand has a mission.
                </p>
                <p className="text-base sm:text-lg text-gray-600 font-montserrat leading-relaxed">
                  Our job is to amplify it with 
                  <span className="text-mdm-gold font-semibold"> purpose-driven marketing</span>, 
                  <span className="text-mdm-dark-gold font-semibold"> innovative technology</span>, and 
                  <span className="text-mdm-black font-semibold"> compelling storytelling</span>.
                  We don't believe in one-size-fits-all solutions. Instead, we craft personalized 
                  strategies that reflect your unique value proposition and resonate with your 
                  target audience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Milestones & Achievements */}
      <section ref={milestonesRef} className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mdm-black font-montserrat mb-4 sm:mb-6">
              Milestones & <span className="text-mdm-gold">Achievements</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-montserrat max-w-3xl mx-auto px-4">
              Our journey of growth, impact, and success across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {milestones.map((milestone, index) => (
              <Card 
                key={milestone.title} 
                className="milestone-card group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-mdm-gold to-mdm-dark-gold"></div>
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-${milestone.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <milestone.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${milestone.color === 'mdm-black' ? 'text-white' : 'text-mdm-black'}`} />
                  </div>
                  
                  <div className="milestone-number text-4xl sm:text-5xl font-bold text-mdm-gold font-montserrat mb-2">
                    0
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-mdm-black font-montserrat mb-3 sm:mb-4">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 font-montserrat leading-relaxed">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-mdm-gold/10 to-mdm-dark-gold/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mdm-black font-montserrat mb-4 sm:mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 font-montserrat mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Join the 150+ businesses that have transformed their digital presence with MDM Consulting.
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-mdm-gold to-mdm-dark-gold hover:from-mdm-dark-gold hover:to-mdm-gold text-mdm-black font-montserrat font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-base sm:text-lg shadow-xl">
              Start Your Transformation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
