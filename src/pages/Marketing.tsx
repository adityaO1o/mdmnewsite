import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Palette,
  Users,
  Target,
  Mail,
  Search,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Heart,
  Zap,
  Globe,
  Star,
  Rocket,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/CallToAction';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Palette,
    title: 'Branding & Strategy',
    description: 'Complete brand identity creation with logo design, tone of voice, and comprehensive content calendars that resonate with your audience.',
    features: ['Brand Identity Design', 'Content Strategy', 'Brand Guidelines', 'Visual Identity Systems'],
    color: 'from-pink-500 to-rose-600',
    stats: '50+ Brands Created'
  },
  {
    icon: Users,
    title: 'Social Media Management',
    description: 'Daily posts, engaging stories, viral reels, and active community management across all major social platforms.',
    features: ['Daily Content Creation', 'Community Management', 'Story & Reel Production', 'Engagement Strategies'],
    color: 'from-blue-500 to-cyan-600',
    stats: '1M+ Followers Grown'
  },
  {
    icon: Target,
    title: 'Performance Marketing',
    description: 'Data-driven Meta Ads, Google Ads, and targeted campaigns with A/B testing for maximum ROI and conversions.',
    features: ['Meta & Google Ads', 'Campaign Optimization', 'A/B Testing', 'Conversion Tracking'],
    color: 'from-green-500 to-emerald-600',
    stats: '₹5 Crores+ Revenue Generated'
  },
  {
    icon: TrendingUp,
    title: 'Influencer & PR Campaigns',
    description: 'Strategic influencer collaborations, PR outreach, media mentions, and product seeding campaigns for brand awareness.',
    features: ['Influencer Partnerships', 'PR Strategy', 'Media Outreach', 'Campaign Management'],
    color: 'from-purple-500 to-violet-600',
    stats: '100+ Collaborations'
  },
  {
    icon: Search,
    title: 'SEO & Lead Generation',
    description: 'Comprehensive on-page and off-page SEO, keyword research, and funnel-based lead capture systems that convert.',
    features: ['SEO Optimization', 'Keyword Research', 'Lead Funnels', 'Content Marketing'],
    color: 'from-orange-500 to-amber-600',
    stats: '300% Traffic Increase'
  },
  {
    icon: Mail,
    title: 'Email Marketing & Automation',
    description: 'Strategic email campaigns, automated workflows, newsletters, and retargeting sequences that nurture leads.',
    features: ['Email Campaigns', 'Marketing Automation', 'Newsletter Design', 'Retargeting Sequences'],
    color: 'from-red-500 to-pink-600',
    stats: '45% Open Rates'
  }
];

const platforms = [
  { name: 'Instagram', icon: Heart, category: 'Social' },
  { name: 'LinkedIn', icon: Users, category: 'Professional' },
  { name: 'Facebook', icon: Globe, category: 'Social' },
  { name: 'YouTube', icon: Target, category: 'Video' },
  { name: 'Google Ads', icon: Search, category: 'Advertising' },
  { name: 'Meta Ads', icon: Zap, category: 'Advertising' },
  { name: 'HubSpot', icon: BarChart3, category: 'CRM' },
  { name: 'Mailchimp', icon: Mail, category: 'Email' },
  { name: 'Hootsuite', icon: TrendingUp, category: 'Management' },
  { name: 'Canva', icon: Palette, category: 'Design' },
  { name: 'Analytics', icon: Eye, category: 'Analytics' },
  { name: 'SEMrush', icon: Rocket, category: 'SEO' }
];

const stats = [
  { number: 150, label: 'Campaigns Launched', suffix: '+', icon: Rocket },
  { number: 5, label: 'Revenue Generated', suffix: ' cr+', prefix: '₹', icon: TrendingUp },
  { number: 500, label: 'Leads Generated', suffix: '+', icon: Target },
  { number: 98, label: 'Client Satisfaction', suffix: '%', icon: Star }
];

const Marketing = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const platformsRef = useRef(null);
  const statsRef = useRef(null);

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
        { y: 80, opacity: 0, rotationY: 15 },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
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

    // Platforms animation
    if (platformsRef.current) {
      gsap.fromTo(
        platformsRef.current.children,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: platformsRef.current,
            start: "top 85%",
          }
        }
      );
    }

    // Stats counter animation
    if (statsRef.current) {
      const statsItems = statsRef.current.querySelectorAll('.stat-item');
      statsItems.forEach((stat, index) => {
        const numberElement = stat.querySelector('.stat-number');
        if (numberElement) {
          const finalValue = parseInt(numberElement.getAttribute('data-number') || '0');
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
                onEnter: () => {
                  gsap.fromTo(numberElement,
                    { innerText: 0 },
                    {
                      innerText: finalValue,
                      duration: 2,
                      snap: { innerText: 1 },
                      ease: "power2.out",
                      onUpdate: function () {
                        numberElement.innerText = Math.floor(this.targets()[0].innerText);
                      },
                      onComplete: function () {
                        numberElement.innerText = finalValue;
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

    // Floating animation for icons
    gsap.to(".marketing-icon", {
      y: -12,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.4
    });

  }, []);

  return (
    <div className="min-h-screen font-satoshi bg-white">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlYzQ4OTkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <TrendingUp className="w-4 h-4" />
              Marketing Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-satoshi mb-8 text-gray-900 leading-tight">
              Marketing
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-700 font-satoshi mb-10 leading-relaxed max-w-4xl mx-auto">
              Strategic marketing that drives engagement, generates leads, and delivers measurable business results. From branding to performance marketing, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-satoshi font-bold px-10 py-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                  Start Your Campaign
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-satoshi font-bold px-10 py-4 rounded-full text-lg transition-all duration-300">
                  View Case Studies
                </Button>
              </Link>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-satoshi mb-6">
              Our Marketing <span className="text-pink-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
              Comprehensive marketing solutions that drive growth and engagement
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
                    <div className={`marketing-icon w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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

                    <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
                      <p className="text-pink-600 font-satoshi font-bold text-center text-sm">
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

      {/* Our Marketing Results */}
      <section className="py-24 bg-gradient-to-r from-pink-50 via-purple-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-satoshi mb-6">
              Our Marketing <span className="text-pink-600">Results</span>
            </h2>
            <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
              Numbers that speak for our marketing excellence
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="stat-item text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-md group cursor-pointer"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div
                    className="stat-number text-3xl font-bold text-gray-900 font-satoshi mb-3"
                    data-number={stat.number}
                  >
                    {stat.prefix || ''}
                    {stat.number}
                    {stat.suffix || ''}
                  </div>
                  <div className="text-gray-600 font-satoshi font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms & Tools */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-satoshi mb-6">
              Platforms & Tools We Master
            </h2>
            <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
              We leverage the best marketing platforms and tools to maximize your reach and results
            </p>
          </div>
          <div ref={platformsRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <platform.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-gray-900 font-satoshi font-semibold text-sm mb-1">{platform.name}</div>
                <div className="text-gray-500 font-satoshi text-xs">{platform.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default Marketing;
