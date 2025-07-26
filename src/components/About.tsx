import React, { useEffect, useRef, useState } from 'react';
import { Users, Trophy, Globe, Code } from 'lucide-react';

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
      icon: Code,
      title: 'Advanced Development',
      description: 'Cutting-edge blockchain development with the latest technologies and frameworks.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team of blockchain experts brings years of experience in Web3 development.'
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Successful delivery of 100+ blockchain projects across various industries.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with decentralized solutions that scale globally.'
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
              About CrypticWeb3
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are pioneers in the Web3 space, dedicated to building the decentralized future. 
            Our mission is to make blockchain technology accessible and powerful for everyone.
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
            <span className="text-secondary-300">Building the decentralized future, one block at a time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;