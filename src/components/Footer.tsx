import React from 'react';
import { 
  Zap, 
  Twitter, 
  Github, 
  Linkedin, 
  Mail,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' },
      { name: 'Blog', href: '#' }
    ],
    services: [
      { name: 'Smart Contracts', href: '#' },
      { name: 'DApp Development', href: '#' },
      { name: 'DeFi Solutions', href: '#' },
      { name: 'Security Audits', href: '#' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Whitepaper', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'FAQ', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="relative bg-secondary-900 border-t border-primary-500/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Zap className="w-8 h-8 text-primary-400 animate-pulse" />
                  <div className="absolute inset-0 w-8 h-8 bg-primary-400 rounded-full blur-xl opacity-20 animate-ping"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  CrypticWeb3
                </span>
              </div>
              
              <p className="text-secondary-400 mb-6 max-w-md leading-relaxed">
                Pioneering the future of decentralized technology. We build secure, 
                scalable, and innovative Web3 solutions that empower businesses and individuals.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="group p-3 bg-secondary-800 rounded-lg border border-primary-500/20 hover:border-primary-400/50 transition-all duration-300 hover:transform hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-secondary-400 group-hover:text-primary-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary-400 hover:text-primary-400 transition-colors duration-300 relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary-400 hover:text-primary-400 transition-colors duration-300 relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary-400 hover:text-primary-400 transition-colors duration-300 relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-primary-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-secondary-400">Get the latest news and updates from CrypticWeb3</p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-secondary-800 border border-primary-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-secondary-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 font-semibold text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-primary-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-secondary-400">
              <span>© 2025 CrypticWeb3. Made with</span>
              <Heart className="w-4 h-4 text-primary-400 animate-pulse" />
              <span>by the CrypticWeb3 Team</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="group p-2 bg-secondary-800 rounded-full border border-primary-500/20 hover:border-primary-400/50 transition-all duration-300 hover:transform hover:scale-110"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4 text-secondary-400 group-hover:text-primary-400 transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Orbs */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </footer>
  );
};

export default Footer;