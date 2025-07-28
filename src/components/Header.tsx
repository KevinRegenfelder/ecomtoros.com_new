import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about', offset: 120 },
  { name: 'Partners', href: '#partners', offset: 120 },
  { name: 'Portfolio', href: '#portfolio', offset: 120 },
  { name: 'Services', href: '#services', offset: 120 },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, offset: number) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const targetPosition = targetElement.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-6 sm:pt-10">
      <header
        className={`mx-3 sm:mx-6 transition-all duration-500 rounded-2xl sm:rounded-3xl ${
          isScrolled
            ? 'bg-white/10 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/10'
            : 'bg-white/5 backdrop-blur-xl'
        }`}
      >
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex items-center h-16 sm:h-20 w-full justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer select-none pl-0">
              <div className="relative">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 animate-pulse" />
                <div className="absolute inset-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary-400 rounded-full blur-xl opacity-20 animate-ping"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-300 bg-clip-text text-transparent tracking-tight">
                  EcomToros GmbH
                </span>
                <span className="text-xs text-gray-300 -mt-1 font-medium tracking-wide">
                  DACH Brand Building
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 flex-1 justify-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.offset)}
                  className="px-4 py-2 text-gray-200 hover:text-primary-400 transition-all duration-200 font-semibold text-base rounded-lg cursor-pointer"
                  style={{ textDecoration: 'none' }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="#contact"
                className="px-7 py-2.5 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/25 text-base flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-200 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white/10 backdrop-blur-2xl border border-white/10 animate-fade-in shadow-lg shadow-black/10 rounded-xl sm:rounded-2xl mb-4">
              <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.offset);
                      setIsMenuOpen(false);
                    }}
                    className="block text-gray-200 hover:text-primary-400 transition-colors duration-200 font-semibold py-2 sm:py-3 text-base sm:text-lg rounded-lg cursor-pointer"
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-3 sm:pt-4 space-y-3 border-t border-gray-700/40">
                  <button className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-xl font-bold text-white transition-all duration-200 text-sm sm:text-base">
                    Contact Us
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;