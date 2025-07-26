import React, { useEffect, useRef, useState } from 'react';
import { 
  Zap, 
  Shield, 
  Coins, 
  Globe, 
  Code, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Smart Contract Development',
      description: 'Custom smart contracts built with security and efficiency in mind.',
      features: ['Solidity Development', 'Security Audits', 'Gas Optimization', 'Testing & Deployment'],
      color: 'from-primary-500 to-secondary-500'
    },
    {
      icon: Smartphone,
      title: 'DApp Development',
      description: 'Full-stack decentralized applications with modern user interfaces.',
      features: ['React/Next.js Frontend', 'Web3 Integration', 'Wallet Connection', 'IPFS Storage'],
      color: 'from-secondary-500 to-primary-400'
    },
    {
      icon: Coins,
      title: 'DeFi Solutions',
      description: 'Decentralized finance protocols and trading platforms.',
      features: ['DEX Development', 'Yield Farming', 'Liquidity Pools', 'Token Creation'],
      color: 'from-primary-400 to-secondary-400'
    },
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security analysis and vulnerability assessment.',
      features: ['Code Review', 'Penetration Testing', 'Risk Assessment', 'Compliance Check'],
      color: 'from-secondary-400 to-primary-300'
    },
    {
      icon: Globe,
      title: 'Blockchain Consulting',
      description: 'Strategic guidance for your blockchain transformation journey.',
      features: ['Architecture Design', 'Technology Selection', 'Implementation Strategy', 'Team Training'],
      color: 'from-primary-300 to-secondary-300'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your blockchain applications for maximum efficiency.',
      features: ['Gas Optimization', 'Speed Enhancement', 'Scalability Solutions', 'Cost Reduction'],
      color: 'from-secondary-300 to-primary-200'
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden"
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive Web3 solutions to power your decentralized future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-2xl bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 hover:border-primary-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 cursor-pointer ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 0.1}s` : '0s' 
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <service.icon className="w-12 h-12 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                <div className="absolute inset-0 w-12 h-12 bg-primary-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary-300 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-secondary-400 mb-6 group-hover:text-secondary-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={feature} 
                    className={`flex items-center space-x-2 text-sm text-secondary-500 group-hover:text-secondary-400 transition-all duration-300 ${
                      hoveredCard === index ? 'translate-x-2' : ''
                    }`}
                    style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                <span className="text-sm font-semibold">Learn More</span>
                <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                  hoveredCard === index ? 'translate-x-2' : ''
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary-600/20 to-secondary-600/20 backdrop-blur-sm border border-primary-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Your Web3 Journey?</h3>
            <p className="text-secondary-300 mb-6">Let's discuss how we can help you build the future of decentralized technology.</p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 font-semibold">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;