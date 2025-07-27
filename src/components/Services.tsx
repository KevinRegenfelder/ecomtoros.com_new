import React, { useEffect, useRef, useState } from 'react';
import { 
  Zap, 
  Shield, 
  Coins, 
  Globe, 
  Code, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Circle
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
      { 
        threshold: 0.05, 
        rootMargin: '0px 0px -200px 0px' 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Performance Marketing',
      description: 'Data-driven online campaigns tailored for growth across the DACH region.',
      features: ['Meta Ads', 'Google Ads', 'Newsletter Marketing', 'Marketing Automation'],
      color: 'from-primary-500 to-secondary-500'
    },
    {
      icon: Smartphone,
      title: 'Community Marketing',
      description: 'Building strong brand presence through partnerships, creators, and external media.',
      features: ['External Newsletters', 'Blog Features', 'Influencer Campaigns', 'Strategic Cooperations'],
      color: 'from-secondary-500 to-primary-400'
    },
    {
      icon: Coins,
      title: 'Experiential Marketing',
      description: 'Real-world exposure for your brand — targeted, creative, and regionally effective.',
      features: ['Out-of-Home Ads', 'Print Collabs', 'Street Campaigns', 'IRL Activations'],
      color: 'from-primary-400 to-secondary-400'
    },
    {
      icon: Shield,
      title: 'Fulfillment',
      description: 'Fast, secure, and scalable logistics for crypto brands in Europe.',
      features: [
        'Shopify compatible',
        '1–3 day shipping',
        'Flexible add-ons',
        'In-house warehousing'
      ],
      color: 'from-secondary-400 to-primary-300'
    },
    {
      icon: Globe,
      title: 'Marketplace Listings',
      description: 'High-converting, native listings on top EU marketplaces.',
      features: [
        'Top platforms covered',
        'Native German copy',
        'Full listing upload',
        'Product maintenance'
      ],
      color: 'from-primary-300 to-secondary-300'
    },
    {
      icon: Zap,
      title: 'Go-to-Market Consulting',
      description: 'Launch guidance for crypto hardware in the DACH region.',
      features: [
        'DACH market experts',
        '10+ years experience',
        'Crypto brand focus',
        'Customer insights'
      ],
      color: 'from-secondary-300 to-primary-200'
    }
  ];

  const roadmapSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your project and create a tailored go-to-market strategy for the DACH region.',
      status: 'completed'
    },
    {
      step: '02',
      title: 'Market Research',
      description: 'Deep dive into the German-speaking market to identify opportunities and target audiences.',
      status: 'active'
    },
    {
      step: '03',
      title: 'Campaign Development',
      description: 'Create compelling marketing campaigns across multiple channels and platforms.',
      status: 'pending'
    },
    {
      step: '04',
      title: 'Launch & Execution',
      description: 'Execute the marketing strategy with real-time optimization and performance tracking.',
      status: 'pending'
    },
    {
      step: '05',
      title: 'Scale & Optimize',
      description: 'Scale successful campaigns and continuously optimize for maximum ROI and growth.',
      status: 'pending'
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
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
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-500 sm:duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 sm:translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed px-2">
            Comprehensive Web3 solutions to power your decentralized future
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 hover:border-primary-400/50 transition-all duration-300 sm:duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 cursor-pointer ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-5 sm:translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 0.02}s` : '0s' 
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-4 sm:mb-6">
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-primary-300 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-secondary-400 mb-4 sm:mb-6 group-hover:text-secondary-300 transition-colors duration-300 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={feature} 
                    className={`flex items-center space-x-2 text-xs sm:text-sm text-secondary-500 group-hover:text-secondary-400 transition-all duration-300 ${
                      hoveredCard === index ? 'translate-x-2' : ''
                    }`}
                    style={{ transitionDelay: `${featureIndex * 0.02}s` }}
                  >
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <a 
                href="/#contact" 
                className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors duration-300"
              >
                <span className="text-xs sm:text-sm font-semibold">Learn More</span>
                <ArrowRight className={`w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-300 ${
                  hoveredCard === index ? 'translate-x-2' : ''
                }`} />
              </a>
            </div>
          ))}
        </div>

        {/* Roadmap Section */}
        <div className={`mt-16 sm:mt-20 transition-all duration-400 sm:duration-700 delay-200 sm:delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 sm:translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Our Process
              </span>
            </h3>
            <p className="text-base sm:text-lg text-secondary-300 max-w-2xl mx-auto px-2">
              A proven 5-step methodology to launch and scale your crypto hardware in the DACH region
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 sm:left-7 md:left-8 top-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" style={{ height: 'calc(100% - 8rem)' }}></div>
              
              {/* Roadmap Steps */}
              <div className="space-y-8 sm:space-y-10 pb-16 sm:pb-20">
                {roadmapSteps.map((step, index) => (
                  <div
                    key={step.step}
                    className={`flex items-start space-x-4 sm:space-x-6 transition-all duration-300 sm:duration-500 ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-5 sm:translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: isVisible ? `${index * 0.05}s` : '0s' }}
                  >
                    {/* Step Circle - Positioned over the line */}
                    <div className="relative flex-shrink-0 z-10">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-secondary-900 ${
                        step.status === 'completed' 
                          ? 'border-primary-500 text-primary-400' 
                          : step.status === 'active'
                          ? 'border-primary-500 text-primary-400 animate-pulse'
                          : 'border-secondary-600 text-secondary-500'
                      }`}>
                        {step.status === 'completed' ? (
                          <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                        ) : (
                          <span className="text-sm sm:text-lg font-bold">{step.step}</span>
                        )}
                      </div>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full blur-xl transition-opacity duration-300 ${
                        step.status === 'completed' 
                          ? 'bg-primary-500 opacity-30' 
                          : step.status === 'active'
                          ? 'bg-secondary-500 opacity-100'
                          : 'opacity-0'
                      }`}></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1 sm:pt-2">
                      <h4 className={`text-lg sm:text-xl font-semibold mb-2 transition-colors duration-300 ${
                        step.status === 'completed' 
                          ? 'text-primary-400' 
                          : step.status === 'active'
                          ? 'text-secondary-400'
                          : 'text-secondary-500'
                      }`}>
                        {step.title}
                      </h4>
                      <p className="text-sm sm:text-base text-secondary-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;