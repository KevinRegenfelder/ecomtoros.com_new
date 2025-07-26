import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Partners', href: '#partners' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" style={{ paddingTop: '2.5rem' }}>
      <header
        className={`mx-6 transition-all duration-500 rounded-3xl ${
          isScrolled
            ? 'bg-white/10 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/10'
            : 'bg-white/5 backdrop-blur-xl'
        }`}
      >
        <div className="container mx-auto px-2">
          <div className="flex items-center h-20 w-full justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3 group cursor-pointer select-none pl-0">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/20">
                  {/* Simples, minimalistisches Icon: weißer Kreis als Outline */}
                  <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="10" stroke="#fff" strokeWidth="3" />
                  </svg>
                </div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-300 bg-clip-text text-transparent tracking-tight">
                  EcomToros GmbH
                </span>
                <span className="text-xs text-gray-300 -mt-1 font-medium tracking-wide">
                  Bulding Brands in Germany
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 flex-1 justify-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-200 hover:text-primary-400 transition-all duration-200 font-semibold text-base rounded-lg"
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
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white/10 backdrop-blur-2xl border border-white/10 animate-fade-in shadow-lg shadow-black/10 rounded-2xl mb-4">
              <nav className="container mx-auto px-6 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-200 hover:text-primary-400 transition-colors duration-200 font-semibold py-2 text-lg rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 space-y-3 border-t border-gray-700/40">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-xl font-bold text-white transition-all duration-200">
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