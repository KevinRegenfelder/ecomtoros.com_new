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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '5px 5px'
          }}
        ></div>
      </div>

      {/* Floating Icons */}
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

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-300 bg-clip-text text-transparent animate-gradient-x">
              Welcome to the
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-white">German Blockchain Market</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Unlock the full potential of the German blockchain market with deep expertise in Europe’s largest economy.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 font-semibold text-lg flex items-center justify-center"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary-500 rounded-full hover:bg-primary-500/10 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center justify-center"
            >
              Learn More
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Truck, title: 'Supply Chain', desc: 'From Fulfillment to Distribution' },
              { icon: Users, title: 'Network', desc: 'Use our strong network in the German community.' },
              { icon: Megaphone, title: 'Marketing', desc: 'Digital to Analogue Branding' }

            ].map(({ icon: Icon, title, desc }, index) => (
              <div 
                key={title}
                className="group p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon className="w-12 h-12 text-primary-400 mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;