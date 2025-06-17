import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Calendar,
  CheckCircle,
  Linkedin,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  const services = [
    'Technology Solutions',
    'Marketing Services',
    'Media Production',
    'Complete Digital Transformation',
    'Consultation Only'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,50,000',
    '₹2,50,000 - ₹5,00,000',
    'Above ₹5,00,000'
  ];

  // Social Links Data
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/consultingmdm',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/mdm_consulting?igsh=MWNrcG9taDNuMHBnZA==',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/19Aa4PSPCN/?mibextid=wwXIfr',
      icon: Facebook,
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@mdmconsulting?si=-rDWqQ2ho0_DP9DI',
      icon: Youtube,
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen font-montserrat">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-white via-gray-50 to-mdm-gold/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mdm-gold/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-mdm-gold/10 rounded-full mb-6 sm:mb-8">
              <span className="text-mdm-dark-gold font-montserrat font-semibold text-xs sm:text-sm uppercase tracking-wide">Contact Us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat mb-6 sm:mb-8 text-mdm-black leading-tight">
              Ready to grow your brand?
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-mdm-gold font-montserrat mb-6 sm:mb-8 font-semibold">
              Let's build something extraordinary together.
            </p>
            <p className="text-base sm:text-lg text-gray-600 font-montserrat mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Whether you're a startup looking to establish your digital presence or an established
              business ready to scale, we're here to help you achieve your goals.
            </p>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-mdm-gold to-mdm-dark-gold mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-mdm-black font-montserrat mb-2">
                  Send us a message
                </h2>
                <p className="text-sm sm:text-base text-gray-600 font-montserrat mb-6 sm:mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="name" className="text-mdm-black font-montserrat font-semibold mb-2 block text-sm sm:text-base">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-mdm-gold focus:ring-mdm-gold font-montserrat h-10 sm:h-12 text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-mdm-black font-montserrat font-semibold mb-2 block text-sm sm:text-base">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-mdm-gold focus:ring-mdm-gold font-montserrat h-10 sm:h-12 text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-mdm-black font-montserrat font-semibold mb-2 block text-sm sm:text-base">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-mdm-gold focus:ring-mdm-gold font-montserrat h-10 sm:h-12 text-sm sm:text-base"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-mdm-black font-montserrat font-semibold mb-2 block text-sm sm:text-base">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-mdm-gold focus:ring-mdm-gold font-montserrat h-10 sm:h-12 text-sm sm:text-base"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="service" className="text-mdm-black font-montserrat font-semibold mb-2 block text-sm sm:text-base">
                        Service Interested In
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full h-10 sm:h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mdm-gold focus:border-mdm-gold font-montserrat text-sm sm:text-base"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="budget" className="text-mdm-black font-montserrat font-semibold mb-2 block text-sm sm:text-base">
                        Project Budget
                      </Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full h-10 sm:h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mdm-gold focus:border-mdm-gold font-montserrat text-sm sm:text-base"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-mdm-black font-montserrat font-semibold mb-2 block text-sm sm:text-base">
                      Project Details *
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mdm-gold focus:border-mdm-gold font-montserrat text-sm sm:text-base"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-mdm-gold to-mdm-dark-gold hover:from-mdm-dark-gold hover:to-mdm-gold text-mdm-black font-montserrat font-bold py-3 sm:py-4 rounded-full transition-all duration-300 group text-sm sm:text-lg"
                  >
                    Send Message
                    <Send className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-mdm-black font-montserrat mb-4 sm:mb-6">
                  Get in touch
                </h2>
                <p className="text-base sm:text-lg text-gray-700 font-montserrat leading-relaxed mb-6 sm:mb-8">
                  Ready to take your business to the next level? Contact us today for a free
                  strategy consultation and let's discuss how we can help you achieve your goals.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6">
                {/* Email Us */}
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-4 sm:p-6 flex items-start">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-r from-mdm-gold to-mdm-dark-gold flex items-center justify-center mr-4 sm:mr-5 flex-shrink-0">
                      <Mail className="w-5 sm:w-7 h-5 sm:h-7 text-mdm-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mdm-black font-montserrat mb-1 sm:mb-2 text-base sm:text-lg">Email Us</h3>
                      <a
                        href="mailto:mukul@mdmconsulting.in"
                        className="text-blue-600 underline font-montserrat mb-1 text-sm sm:text-base block"
                      >
                        mukul@mdmconsulting.in
                      </a>
                       <a
                        href="mailto:sukh@mdmconsulting.in"
                        className="text-blue-600 underline font-montserrat mb-1 text-sm sm:text-base block"
                      >
                        sukh@mdmconsulting.in
                      </a>
                      <p className="text-gray-600 font-montserrat text-sm sm:text-base">info@mdmconsulting.in</p>
                      <p className="text-xs sm:text-sm text-mdm-dark-gold font-montserrat mt-1 sm:mt-2">Response within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Book a Call */}
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-4 sm:p-6 flex items-start">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-r from-mdm-dark-gold to-mdm-gold flex items-center justify-center mr-4 sm:mr-5 flex-shrink-0">
                      <Calendar className="w-5 sm:w-7 h-5 sm:h-7 text-mdm-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mdm-black font-montserrat mb-1 sm:mb-2 text-base sm:text-lg">Book a Call</h3>
                      <p className="text-gray-600 font-montserrat mb-1 sm:mb-2 text-sm sm:text-base">Free 30-minute strategy consultation</p>
                      <a
                        href="tel:+918700954700"
                        className="text-blue-600 underline font-montserrat mb-1 sm:mb-2 text-sm sm:text-base block"
                      >
                        +91-8700954700
                      </a>
                      <p className="text-xs sm:text-sm text-mdm-dark-gold font-montserrat">Available Mon-Fri, 10 AM - 6 PM IST</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-4 sm:p-6 flex items-start">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-r from-mdm-black to-gray-800 flex items-center justify-center mr-4 sm:mr-5 flex-shrink-0">
                      <MapPin className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mdm-black font-montserrat mb-1 sm:mb-2 text-base sm:text-lg">Global Reach</h3>
                      <p className="text-gray-600 font-montserrat mb-1 text-sm sm:text-base">Headquarters: India</p>
                      <p className="text-gray-600 font-montserrat text-sm sm:text-base">International: South Africa • Australia</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* What to Expect */}
              <Card className="bg-gradient-to-r from-mdm-gold/10 to-mdm-dark-gold/10 border-0">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-mdm-black font-montserrat mb-3 sm:mb-4 flex items-center">
                    <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-mdm-gold mr-3" />
                    What to Expect
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-mdm-dark-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 font-montserrat text-sm sm:text-base">Response within 24 hours</p>
                    </div>
                    <div className="flex items-start">
                      <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 text-mdm-dark-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 font-montserrat text-sm sm:text-base">Free initial consultation call</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-mdm-dark-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 font-montserrat text-sm sm:text-base">Detailed project proposal within 48 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-r from-mdm-gold/10 to-mdm-dark-gold/10 border-0">
                <CardContent className="p-6 sm:p-8 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-mdm-black font-montserrat mb-3">
                    Ready to start your project?
                  </h3>
                  <p className="text-gray-700 font-montserrat mb-4 sm:mb-6 text-sm sm:text-base">
                    Book a free strategy call or send us your project brief today.
                  </p>
                  <a
                    href="tel:+918700954700"
                    className="inline-block bg-gradient-to-r from-mdm-gold to-mdm-dark-gold hover:from-mdm-dark-gold hover:to-mdm-gold text-mdm-black font-montserrat font-bold px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Book Free Strategy Call
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mdm-black font-montserrat mb-4 sm:mb-6">
              Frequently Asked <span className="text-mdm-gold">Questions</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on scope. Website projects typically take 2-6 weeks, while comprehensive marketing campaigns can range from 1-3 months for full implementation."
              },
              {
                q: "Do you work with international clients?",
                a: "Yes! We have successfully completed projects in India, South Africa, and Australia. We work across time zones and provide dedicated support regardless of location."
              },
              {
                q: "What's included in your free consultation?",
                a: "Our free consultation includes a comprehensive review of your current digital presence, discussion of your goals, and a preliminary strategy outline with actionable recommendations."
              },
              {
                q: "Do you offer ongoing support after project completion?",
                a: "Absolutely! We offer various maintenance and support packages, including retainer services for ongoing marketing, website updates, and technical support."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-md border-0 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="font-bold text-mdm-black font-montserrat mb-2 sm:mb-3 text-sm sm:text-base">{faq.q}</h4>
                  <p className="text-gray-600 font-montserrat leading-relaxed text-sm sm:text-base">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links with Icons */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-mdm-black font-montserrat mb-4 sm:mb-6">
            Follow us on social media
          </h3>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-r ${social.color} hover:shadow-lg text-white flex items-center justify-center transition-all duration-300 font-montserrat font-bold text-xs sm:text-sm transform hover:scale-110`}
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
