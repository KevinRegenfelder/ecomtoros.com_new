import React, { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Network, 
  Rocket,
  MapPin,
  Target,
  Zap,
  Shield
} from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: 'Local Market Experts',
      description: 'Over a decade of e-commerce experience in DACH — enabling smooth entry, growth, and brand localization.'
    },
    {
      icon: Users,
      title: 'The Team',
      description: '10+ specialists focused on launching crypto hardware — tailored for the German market and consumers.'
    },
    {
      icon: Network,
      title: 'Integrated Growth Network',
      description: 'From fulfillment to marketing — our network covers all steps to reach, convert, and grow your brand.'
    },
    {
      icon: Rocket,
      title: 'Full Go-to-Market Support',
      description: 'We deliver a complete launch setup — from strategy to execution — to build lasting brands in Germany.'
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.3) 0%, rgba(30, 41, 59, 0.2) 25%, transparent 50%)`
      }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-secondary-800/20"></div>
        <div 
          className="absolute inset-0 bg-grid-pattern animate-pulse"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.2) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(30, 41, 59, 0.2) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              About EcomToros GmbH
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          With over a decade of e-commerce experience, we’ve built strong partnerships and connections. 
          Our focus is to establish your blockchain-based product—such as a hardware wallet—on the German market and grow your brand. 
          We use both proven marketing strategies and unique, network-driven tactics unavailable elsewhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-8 rounded-2xl bg-gradient-to-br from-secondary-800 to-secondary-900 border border-primary-500/20 hover:border-primary-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/10 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 0.1}s` : '0s' 
              }}
            >
              <div className="relative mb-6">
                <feature.icon className="w-12 h-12 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                <div className="absolute inset-0 w-12 h-12 bg-primary-400 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-secondary-400 group-hover:text-secondary-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-full border border-primary-500/30">
            <span className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></span>
            <span className="text-secondary-300">From concept to consumer — powering crypto growth in Germany</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;