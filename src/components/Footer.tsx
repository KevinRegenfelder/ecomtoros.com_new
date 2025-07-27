import React, { useState } from 'react';
import { 
  Zap, 
  Twitter, 
  Github, 
  Linkedin, 
  Mail,
  ArrowUp,
  Heart,
  MessageCircle,
  X
} from 'lucide-react';

const Footer = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const legalContent = {
    legalNotice: {
      title: 'Legal Notice',
      content: `
        <h3 class="text-base sm:text-lg font-semibold mb-4">EcomToros GmbH</h3>
        <p class="mb-3 text-sm sm:text-base"><strong>Address:</strong><br/>
        Musterstraße 123<br/>
        12345 Musterstadt<br/>
        Germany</p>
        
        <p class="mb-3 text-sm sm:text-base"><strong>Contact:</strong><br/>
        Email: mail@ecomtoros.com<br/>
        Phone: +49 123 456 789</p>
        
        <p class="mb-3 text-sm sm:text-base"><strong>Commercial Register:</strong><br/>
        District Court: Amtsgericht Musterstadt<br/>
        Registration Number: HRB 12345</p>
        
        <p class="mb-3 text-sm sm:text-base"><strong>VAT ID:</strong><br/>
        DE123456789</p>
        
        <p class="mb-3 text-sm sm:text-base"><strong>Managing Director:</strong><br/>
        Kevin Regenfelder</p>
        
        <p class="mb-3 text-sm sm:text-base"><strong>Responsible for content:</strong><br/>
        Kevin Regenfelder<br/>
        EcomToros GmbH<br/>
        Musterstraße 123<br/>
        12345 Musterstadt</p>
      `
    },
    terms: {
      title: 'Terms and Conditions',
      content: `
        <h3 class="text-base sm:text-lg font-semibold mb-4">Terms and Conditions</h3>
        
        <h4 class="font-semibold mb-2 text-sm sm:text-base">1. General</h4>
        <p class="mb-3 text-sm sm:text-base">These terms and conditions apply to all services provided by EcomToros GmbH.</p>
        
        <h4 class="font-semibold mb-2 text-sm sm:text-base">2. Services</h4>
        <p class="mb-3 text-sm sm:text-base">We provide crypto hardware and Web3 go-to-market services in the DACH region.</p>
        
        <h4 class="font-semibold mb-2 text-sm sm:text-base">3. Payment Terms</h4>
        <p class="mb-3 text-sm sm:text-base">Payment is due within 30 days of invoice date unless otherwise agreed.</p>
        
        <h4 class="font-semibold mb-2 text-sm sm:text-base">4. Liability</h4>
        <p class="mb-3 text-sm sm:text-base">Our liability is limited to the amount of the service fee paid.</p>
        
        <h4 class="font-semibold mb-2 text-sm sm:text-base">5. Governing Law</h4>
        <p class="mb-3 text-sm sm:text-base">These terms are governed by German law.</p>
      `
    },
    privacy: {
      title: 'Privacy Policy',
      content: `
        <h3 class="text-base sm:text-lg font-semibold mb-4">Privacy Policy</h3>
        
        <h4 class="font-semibold mb-2 text-sm sm:text-base">1. Data Collection</h4>
        <p class="mb-3 text-sm sm:text-base">We collect only the data necessary to provide our services and improve user experience.</p>
        
        <h4 class="font-semibold mb-2 text-sm sm:text-base">2. Data Usage</h4>
        <p class="mb-3 text-sm sm:text-base">Your data is used exclusively for service provision and communication.</p>
        
        <h4 class="font-semibold mb-2 text-sm sm:text-base">3. Data Protection</h4>
        <p class="mb-3 text-sm sm:text-base">We implement appropriate security measures to protect your personal data.</p>
        
        <h4 class="font-semibold mb-2 text-sm sm:text-base">4. Your Rights</h4>
        <p class="mb-3 text-sm sm:text-base">You have the right to access, correct, or delete your personal data.</p>
        
        <h4 class="font-semibold mb-2 text-sm sm:text-base">5. Contact</h4>
        <p class="mb-3 text-sm sm:text-base">For privacy concerns, contact us at: mail@ecomtoros.com</p>
      `
    }
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/ecomtoros', label: 'Twitter' },
    { icon: Mail, href: 'mailto:mail@ecomtoros.com', label: 'Email' },
    { icon: MessageCircle, href: 'https://t.me/ecomtoros', label: 'Telegram' }
  ];

  return (
    <footer className="relative bg-secondary-900 border-t border-primary-500/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="flex flex-col items-center text-center">
            {/* Brand Section */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
                <div className="relative">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 animate-pulse" />
                  <div className="absolute inset-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary-400 rounded-full blur-xl opacity-20 animate-ping"></div>
                </div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  EcomToros GmbH
                </span>
              </div>
              
              <p className="text-sm sm:text-base text-secondary-400 mb-4 sm:mb-6 max-w-md mx-auto leading-relaxed">
                Pioneering the future of decentralized technology. We build secure, 
                scalable, and innovative Web3 solutions that empower businesses and individuals.
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-3 sm:space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="group p-2 sm:p-3 bg-secondary-800 rounded-lg border border-primary-500/20 hover:border-primary-400/50 transition-all duration-300 hover:transform hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-400 group-hover:text-primary-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links Section */}
        <div className="py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 mb-4">
            <button 
              onClick={() => setActivePopup('legalNotice')}
              className="text-xs sm:text-sm text-secondary-400 hover:text-primary-400 transition-colors duration-300 font-medium"
            >
              Legal Notice
            </button>
            <span className="hidden sm:block text-primary-400">•</span>
            <button 
              onClick={() => setActivePopup('terms')}
              className="text-xs sm:text-sm text-secondary-400 hover:text-primary-400 transition-colors duration-300 font-medium"
            >
              Terms and Conditions
            </button>
            <span className="hidden sm:block text-primary-400">•</span>
            <button 
              onClick={() => setActivePopup('privacy')}
              className="text-xs sm:text-sm text-secondary-400 hover:text-primary-400 transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-4 sm:py-6 border-t border-primary-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 sm:space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-[8px] sm:text-sm text-secondary-400">
              <span>© 2025 EcomToros GmbH. Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400 animate-pulse" />
              <span>by the EcomToros GmbH Team</span>
            </div>
            
            <div className="flex items-center">
              <button
                onClick={scrollToTop}
                className="group p-1.5 sm:p-2 bg-secondary-800 rounded-full border border-primary-500/20 hover:border-primary-400/50 transition-all duration-300 hover:transform hover:scale-110"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-400 group-hover:text-primary-400 transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Orbs */}
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-secondary-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Legal Popup */}
      {activePopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-secondary-800 rounded-xl sm:rounded-2xl border border-primary-500/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {legalContent[activePopup as keyof typeof legalContent].title}
                </h2>
                <button
                  onClick={() => setActivePopup(null)}
                  className="p-1.5 sm:p-2 hover:bg-secondary-700 rounded-lg transition-colors duration-300"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-400 hover:text-white" />
                </button>
              </div>
              <div 
                className="text-secondary-300 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: legalContent[activePopup as keyof typeof legalContent].content 
                }}
              />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;