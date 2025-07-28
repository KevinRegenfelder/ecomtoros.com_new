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
        <br>EcomToros GmbH<br>Hauptstra&szlig;e 35<br>86391 Stadtbergen<br>Germany<br><br>Phone.: +49 (0)821 899848 21<br>e-mail: mail@ecomtoros.com<br><br>Register court: Augsburg<br>Register number: HRB 40351<br><br>Managing Director: Markus Schmid, Kevin Regenfelder<br><br>Sales tax identification number: DE369777332<br><br>We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.<br><br>Member of the "Fairness in Trade" initiative.<br>Further information: <a target="_blank" href="https://www.fairness-im-handel.de" rel="noopener">https://www.fairness-im-handel.de</a></div>
        <div id="itkanzlei_txt_copyright" style="font-size: 12px; margin-top: 8em;">
        <div style="display: inline-block; vertical-align: top; margin-left: 5px; float: right; white-space: nowrap;">Version: 28.07.2025, 15:56:31 Clock</div>
        <div style="clear: right;"></div>
      `
    }
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/ecomtoros', label: 'Twitter' },
    { icon: Mail, href: 'mailto:mail@ecomtoros.com', label: 'Email' },
    { icon: MessageCircle, href: 'https://t.me/kevinregenfelder', label: 'Telegram' }
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
              Launch and scale your physical Web3 product in the German speaking market — with local know how and end to end execution.
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