import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Users, Target, Eye, Heart,
  Building2, Shield, Sparkles, Wrench, FileText,
  Check, Star, Award, Briefcase
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Handle scroll spy for active nav item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'quality', 'values', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "BPO Workforce",
      description: "Skilled professionals for business process outsourcing operations."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Gardening",
      description: "Professional landscaping and garden maintenance services."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Helpers & Manpower Services",
      description: "Reliable skilled and unskilled manpower for various industries."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security",
      description: "Comprehensive security solutions for premises and events."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Housekeeping",
      description: "Professional cleaning and maintenance services."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Electrical & Maintenance",
      description: "Technical support and maintenance solutions."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Compliance & Statutory Services",
      description: "Legal compliance and documentation services."
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Property Management Services",
      description: "Complete property management and maintenance solutions."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Office Support Staff",
      description: "Administrative and clerical support services."
    }
  ];

  const complianceItems = [
    "ESI", "PF", "GST", "Professional Tax", "Income Tax"
  ];

  const qmsFeatures = [
    "Job Profiles",
    "SOPs (Standard Operating Procedures)",
    "Daily Reports (DVR, DSR)",
    "Client Feedback Reports (CFR, CSR)",
    "Standard Checklists (SCL)"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-[#005B96]">
              <img 
                className="h-10 w-auto" 
                src="https://github.com/gridnestworkforce/assets/blob/main/SCS%20logo.png?raw=true" 
                alt="SCS Complete Solutions Logo" 
              />
              </div>
              <div className="hidden sm:block ml-2 text-sm font-medium text-[#005B96]">
                Saraswathi Complete Solutions
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Values', id: 'values' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-300 hover:text-[#D4AF37] font-medium transition-colors duration-300 ${
                    activeSection === item.id ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-[#D4AF37]"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Values', id: 'values' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#D4AF37] font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Teamwork Makes the <span className="text-[#D4AF37]">Dream Work</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Complete Facility & Manpower Solutions for Every Need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="border-2 border-white text-white hover:bg-white hover:text-[#005B96] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional team at work"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Saraswathi Complete Solutions</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Registered in 2023 with over 18 years of combined experience, Saraswathi Complete Solutions 
                  has established itself as a trusted partner in facility management and manpower deployment.
                </p>
                <p>
                  We specialize in providing skilled and unskilled manpower across diverse industries, 
                  ensuring dependability, quality, and excellence in every assignment. Our commitment to 
                  delivering the right person at the right time and place sets us apart in the industry.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-[#D4AF37] mr-2" />
                    <span className="font-semibold text-white">18+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-[#D4AF37] mr-2" />
                    <span className="font-semibold text-white">Trusted Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
              <p className="text-gray-300">
                To deliver quality manpower solutions at the right time, right place, 
                with the right person for optimal organizational efficiency.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
              <p className="text-gray-300">
                To become the leading provider of complete organizational manpower 
                solutions, driving excellence and innovation in service delivery.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Values</h3>
              <p className="text-gray-300">
                Knowledge, Transparency, Compliance, and unwavering dedication to 
                client success through ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive facility management and manpower solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group hover:border-[#D4AF37]"
              >
                <div className="w-16 h-16 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#005B96] transition-colors duration-300">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center text-[#D4AF37] group-hover:text-white transition-colors duration-300">
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Compliance Section */}
      <section id="quality" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Quality Commitment</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain the highest standards through our comprehensive Quality Management System
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Quality Management System</h3>
              <div className="space-y-4">
                {qmsFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-[#D4AF37] mr-3" />
                    <span className="text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Compliance & Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {complianceItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg text-center border-2 border-gray-700 hover:border-[#D4AF37] transition-colors duration-300"
                  >
                    <Award className="h-8 w-8 text-[#D4AF37] mx-auto mb-2" />
                    <span className="text-sm font-semibold text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Culture Section */}
      <section id="values" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values & Culture</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Built on trust, respect, and responsibility in every relationship we foster
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Trust & Respect</h3>
                    <p className="text-gray-300">
                      Building lasting relationships through mutual trust and respect in every interaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Diversity & Innovation</h3>
                    <p className="text-gray-300">
                      Embracing diversity and fostering innovation through progressive thinking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Responsibility</h3>
                    <p className="text-gray-300">
                      Taking ownership and responsibility for delivering exceptional results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your manpower and facility management needs? Contact us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Office Address</h3>
                    <p className="text-gray-300">
                      #951, 2nd Floor, 2nd Stage, Bazaar Street,<br />
                      Austin Town, Bengaluru – 560047
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center">
    <Phone className="h-6 w-6 text-white" />
  </div>
  <div>
    <h3 className="text-xl font-bold text-white mb-2">Phone Numbers</h3>
    <p className="text-gray-300">
      <a href="tel:+918147358244" className="hover:underline block">
        +91 81473 58244
      </a>
      <a href="tel:+919902192664" className="hover:underline block">
        +91 99021 92664
      </a>
    </p>
  </div>
</div>

<div className="flex items-start space-x-4 mt-4">
  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center">
    <Mail className="h-6 w-6 text-white" />
  </div>
  <div>
    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
    <p className="text-gray-300">
      <a href="mailto:saraswathi.scs1@gmail.com" className="hover:underline">
        saraswathi.scs1@gmail.com
      </a>
    </p>
  </div>
</div>
</div>

              {/* Google Maps Embed */}
              <div className="mt-8">
                <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700" style={{ height: '300px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0849959283073!2d77.63937851532245!3d12.973598590861024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae160b02b9b0b1%3A0x3c4d01b98764c7c4!2sAustin%20Town%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SCS Office Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-white"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-white"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent resize-none text-white"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-3xl font-bold">
                  <img 
                className="h-10 w-auto" 
                src="https://github.com/gridnestworkforce/assets/blob/main/SCS%20logo.png?raw=true" 
                alt="SCS Complete Solutions Logo" 
              />
                </div>
                <div className="ml-3">
                  <div className="text-lg font-bold">Saraswathi Complete Solutions</div>
                  <div className="text-sm opacity-75">Complete Manpower Solutions</div>
                </div>
              </div>
              <p className="text-sm opacity-90">
                Your trusted partner for comprehensive facility management and manpower solutions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'About Us', id: 'about' },
                  { name: 'Services', id: 'services' },
                  { name: 'Values', id: 'values' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-sm text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300">
                  <Users className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300">
                  <Users className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300">
                  <Users className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-gray-400">
                Follow us for updates and industry insights.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Saraswathi Complete Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;