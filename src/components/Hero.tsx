import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Zap, Shield, Truck, Users, Megaphone } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}%`);
      heroRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const floatingIcons = [
    { Icon: Truck, delay: '0s', duration: '6s' },
    { Icon: Users, delay: '2s', duration: '8s' },
    { Icon: Megaphone, delay: '4s', duration: '7s' },
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-24 md:pt-32"
      style={{
        background: `radial-gradient(circle at 50% 50%, rgba(13, 0, 255, 0.05) 0%, rgba(13, 0, 255, 0.05) 25%, transparent 50%)`
      }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-secondary-800/20"></div>
        <div 
          className="absolute inset-0 bg-grid-pattern animate-pulse"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: '5px 5px'
          }}
        ></div>
      </div>

      {/* Floating Icons - Hidden on mobile for better performance */}
      <div className="hidden md:block">
        {floatingIcons.map(({ Icon, delay, duration }, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-30"
            style={{
              animationDelay: delay,
              animationDuration: duration,
              left: `${20 + index * 25}%`,
              top: `${30 + index * 5}%`
            }}
          >
            <Icon className="w-12 h-12 text-primary-400" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-300 bg-clip-text text-transparent animate-gradient-x">
              Welcome to the
            </span>
            <br />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">German speaking Blockchain Market</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          Unlock the German speaking blockchain market with hands on expertise and end to end support to launch and scale physical Web3 products.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 font-semibold text-base sm:text-lg flex items-center justify-center"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-500 rounded-full hover:bg-primary-500/10 transition-all duration-300 transform hover:scale-105 font-semibold text-base sm:text-lg flex items-center justify-center"
            >
              Learn More
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-2">
            {[
              { icon: Truck, title: 'Supply Chain', desc: 'From logistics to distribution.' },
              { icon: Users, title: 'Marketplaces', desc: 'Use our strong network to list on major marketplaces.' },
              { icon: Megaphone, title: 'Marketing', desc: 'From Online to Offline Branding that works.' }
            ].map(({ icon: Icon, title, desc }, index) => (
              <div 
                key={title}
                className="group p-4 sm:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon className="w-8 h-8 sm:w-12 sm:h-12 text-primary-400 mx-auto mb-3 sm:mb-4 group-hover:animate-pulse" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:absolute sm:-bottom-20 sm:left-1/2 sm:transform sm:-translate-x-1/2 animate-bounce z-20">
          <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;