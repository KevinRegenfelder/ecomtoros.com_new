import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Package, Building, Rocket } from 'lucide-react';

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    projects: 0,
    clients: 0,
    lines: 0,
    awards: 0
  });

  const finalValues = {
    projects: 2500000,
    clients: 60,
    lines: 670000,
    awards: 10
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.2, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateNumbers = () => {
        const duration = 3000; // 3 seconds for smoother animation
        const steps = 120; // 120 FPS for smoother counting
        const stepDuration = duration / steps;

        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          const easeOut = 1 - Math.pow(1 - progress, 2); // Smoother easing

          setAnimatedValues({
            projects: Math.floor(finalValues.projects * easeOut),
            clients: Math.floor(finalValues.clients * easeOut),
            lines: Math.floor(finalValues.lines * easeOut),
            awards: Math.floor(finalValues.awards * easeOut)
          });

          if (currentStep >= steps) {
            clearInterval(timer);
            setAnimatedValues(finalValues);
          }
        }, stepDuration);

        return () => clearInterval(timer);
      };

      const timeout = setTimeout(animateNumbers, 500);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  const formatNumber = (num: number, suffix: string = '', isBudget: boolean = false) => {
    if (isBudget && num >= 1000000) {
      return `€${(num / 1000000).toFixed(1)}M+`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(0)}M${suffix}`;
    }
    if (num >= 100000) {
      return `${(num / 1000).toFixed(0)}K${suffix}`;
    }
    return `${num.toLocaleString()}${suffix}`;
  };

  const stats = [
{
  icon: TrendingUp,
  value: animatedValues.projects,
  suffix: '',
  label: 'Managed Budget',
  description: 'Campaigns across the DACH Region Market',
  color: 'from-primary-500 to-secondary-500'
},
{
  icon: Users,
  value: animatedValues.clients,
  suffix: '+',
  label: 'Happy Clients',
  description: 'Trusted by satisfied partners across the DACH region',
  color: 'from-secondary-500 to-primary-400'
},
{
  icon: Package,
  value: animatedValues.lines,
  suffix: '+',
  label: 'Products Fulfilled',
  description: 'Delivered via our in-house fulfillment & logistics network',
  color: 'from-primary-400 to-secondary-400'
},
{
  icon: Building,
  value: animatedValues.awards,
  suffix: '+',
  label: 'Team Members',
  description: 'Cross-functional experts — from engineering to execution',
  color: 'from-secondary-400 to-primary-300'
}
  ];

  return (
    <section 
      id="portfolio" 
      ref={sectionRef} 
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
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
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              We are pioneers 
            </span>
            <br />
            <span className="text-white">in the Crypto Hardware space</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed px-2">
          We are specialists in crypto hardware and Web3 go-to-market. Our mission is to bring blockchain products to life — accessible, localized, and built to grow in the German-speaking world.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 hover:border-primary-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 text-center ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 0.1}s` : '0s' 
              }}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-4 sm:mb-6 flex justify-center">
                <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Animated Number */}
              <div className="mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-secondary-300 bg-clip-text text-transparent">
                  {formatNumber(stat.value, stat.suffix, stat.label === 'Managed Budget')}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-primary-300 transition-colors duration-300">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-secondary-400 group-hover:text-secondary-300 transition-colors duration-300 leading-relaxed">
                {stat.description}
              </p>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-0.5 rounded-xl sm:rounded-2xl bg-secondary-800 -z-10"></div>
            </div>
          ))}
        </div>
        
        {/* Full Width Map Box */}
        <div className={`mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="w-full bg-gradient-to-br from-primary-900/20 to-secondary-900/20 rounded-xl sm:rounded-2xl border border-primary-500/20 overflow-hidden p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              {/* Text Section - Left */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                  <span className="text-white">
                    From <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Germany</span> to <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Austria</span>
                  </span>
                  <br />
                  <span className="text-white">
                    all the way to <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Switzerland</span>
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent text-lg sm:text-xl">we got the whole DACH section for you!</span>
                </h3>
                <p className="text-base sm:text-lg text-secondary-300 mt-3 sm:mt-4">
                  Strong connections across the German-speaking region with strategic positioning in all three countries.
                </p>
              </div>
              
              {/* Map Section - Right */}
              <div className="flex-1 w-full max-w-lg lg:max-w-xl">
                <div className="w-full overflow-hidden relative">
                  <img 
                    src="/src/media/map/map.png" 
                    alt="DACH Region Map" 
                    className="w-full h-auto object-cover rounded-lg sm:rounded-xl"
                  />
                  
                  {/* Animated Connection Points */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Germany Point */}
                    <div 
                      className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-primary-400 rounded-full animate-pulse shadow-lg shadow-primary-400/50"
                      style={{ 
                        top: '25%',
                        left: '40%',
                        animationDelay: isVisible ? '0.2s' : '0s',
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 1s ease-in-out'
                      }}
                    />
                    {/* Austria Point */}
                    <div 
                      className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-primary-400 rounded-full animate-pulse shadow-lg shadow-primary-400/50"
                      style={{ 
                        top: '55%',
                        left: '80%',
                        animationDelay: isVisible ? '0.5s' : '0s',
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 1s ease-in-out'
                      }}
                    />
                    {/* Switzerland Point */}
                    <div 
                      className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-primary-400 rounded-full animate-pulse shadow-lg shadow-primary-400/50"
                      style={{ 
                        top: '65%',
                        left: '35%',
                        animationDelay: isVisible ? '1s' : '0s',
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 1s ease-in-out'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievement Badge */}
        <div className={`mt-12 sm:mt-16 flex justify-center transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-full border border-primary-500/30 backdrop-blur-sm">
            <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
            <span className="text-sm sm:text-base text-white font-semibold">We'll help you grow your brand across the DACH region.</span>
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

