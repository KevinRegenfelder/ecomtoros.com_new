import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Code, Award } from 'lucide-react';

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
    projects: 150,
    clients: 50,
    lines: 100000,
    awards: 25
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateNumbers = () => {
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 FPS
        const stepDuration = duration / steps;

        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          const easeOut = 1 - Math.pow(1 - progress, 3); // Easing function

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

  const formatNumber = (num: number, suffix: string = '') => {
    if (num >= 100000) {
      return `${(num / 1000).toFixed(0)}K${suffix}`;
    }
    return `${num.toLocaleString()}${suffix}`;
  };

  const stats = [
    {
      icon: Code,
      value: animatedValues.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful blockchain implementations',
      color: 'from-primary-500 to-secondary-500'
    },
    {
      icon: Users,
      value: animatedValues.clients,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      color: 'from-secondary-500 to-primary-400'
    },
    {
      icon: TrendingUp,
      value: animatedValues.lines,
      suffix: '+',
      label: 'Lines of Code',
      description: 'Written with precision and care',
      color: 'from-primary-400 to-secondary-400'
    },
    {
      icon: Award,
      value: animatedValues.awards,
      suffix: '+',
      label: 'Awards Won',
      description: 'Recognition for excellence',
      color: 'from-secondary-400 to-primary-300'
    }
  ];

  return (
    <section 
      id="portfolio" 
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              We are pioneers
            </span>
            <br />
            <span className="text-white">in the Web3 space</span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed">
            We are pioneers in the Web3 space, dedicated to building the decentralized future. Our mission is to make blockchain technology accessible and powerful for everyone.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative p-8 rounded-2xl bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 hover:border-primary-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 text-center ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 0.1}s` : '0s' 
              }}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-6 flex justify-center">
                <stat.icon className="w-12 h-12 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                <div className="absolute inset-0 w-12 h-12 bg-primary-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Animated Number */}
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-secondary-300 bg-clip-text text-transparent">
                  {formatNumber(stat.value, stat.suffix)}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-300 transition-colors duration-300">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-secondary-400 group-hover:text-secondary-300 transition-colors duration-300 text-sm">
                {stat.description}
              </p>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-0.5 rounded-2xl bg-secondary-800 -z-10"></div>
            </div>
          ))}
        </div>
           {/* Full Width Map Box */}
           <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="w-full bg-gradient-to-br from-primary-900/20 to-secondary-900/20 rounded-2xl border border-primary-500/20 overflow-hidden p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Text Section - Left */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    From Germany to Austria
                  </span>
                  <br />
                  <span className="text-white">all the way to Switzerland</span>
                  <br />
                  <span className="text-primary-300 text-xl">we got the whole DACH section for you!</span>
                </h3>
                <p className="text-lg text-secondary-300 mt-4">
                  Strong connections across the German-speaking region with strategic positioning in all three countries.
                </p>
              </div>
              
              {/* Map Section - Right */}
              <div className="flex-1 w-full max-w-lg lg:max-w-xl">
                <div className="w-full overflow-hidden relative">
                  <img 
                    src="/src/media/map/map.png" 
                    alt="DACH Region Map" 
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  
                  {/* Animated Connection Points */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* Germany to Austria */}
                    <path
                      d="M 250 150 Q 360 235 470 320"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      fill="transparent"
                      className={`${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ 
                        strokeDasharray: isVisible ? '1000' : '0',
                        strokeDashoffset: isVisible ? '0' : '1000',
                        transition: 'stroke-dasharray 3s cubic-bezier(0.25, 0.46, 0.45, 0.94), stroke-dashoffset 3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1.5s ease-in-out',
                        transitionDelay: isVisible ? '0.5s' : '0s'
                      }}
                    />
                    
                    {/* Austria to Switzerland */}
                    <path
                      d="M 470 320 Q 335 360 200 400"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      fill="transparent"
                      className={`${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ 
                        strokeDasharray: isVisible ? '1000' : '0',
                        strokeDashoffset: isVisible ? '0' : '1000',
                        transition: 'stroke-dasharray 3s cubic-bezier(0.25, 0.46, 0.45, 0.94), stroke-dashoffset 3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1.5s ease-in-out',
                        transitionDelay: isVisible ? '1s' : '0s'
                      }}
                    />
                    
                    {/* Switzerland to Germany */}
                    <path
                      d="M 200 400 Q 225 275 250 150"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      fill="transparent"
                      className={`${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ 
                        strokeDasharray: isVisible ? '1000' : '0',
                        strokeDashoffset: isVisible ? '0' : '1000',
                        transition: 'stroke-dasharray 3s cubic-bezier(0.25, 0.46, 0.45, 0.94), stroke-dashoffset 3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1.5s ease-in-out',
                        transitionDelay: isVisible ? '1.5s' : '0s'
                      }}
                    />
                    
                    {/* Germany Point */}
                    <circle
                      cx="250"
                      cy="150"
                      r="8"
                      fill="#3B82F6"
                      className={`${
                        isVisible ? 'animate-pulse opacity-100' : 'opacity-0'
                      }`}
                      style={{ 
                        animationDelay: isVisible ? '0.2s' : '0s',
                        transition: 'opacity 1s ease-in-out'
                      }}
                    />
                    
                    {/* Austria Point */}
                    <circle
                      cx="470"
                      cy="320"
                      r="8"
                      fill="#3B82F6"
                      className={`${
                        isVisible ? 'animate-pulse opacity-100' : 'opacity-0'
                      }`}
                      style={{ 
                        animationDelay: isVisible ? '0.5s' : '0s',
                        transition: 'opacity 1s ease-in-out'
                      }}
                    />
                    
                    {/* Switzerland Point */}
                    <circle
                      cx="200"
                      cy="400"
                      r="8"
                      fill="#3B82F6"
                      className={`${
                        isVisible ? 'animate-pulse opacity-100' : 'opacity-0'
                      }`}
                      style={{ 
                        animationDelay: isVisible ? '1s' : '0s',
                        transition: 'opacity 1s ease-in-out'
                      }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
                {/* Achievement Badge */}
                <div className={`mt-16 flex justify-center transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-full border border-primary-500/30 backdrop-blur-sm">
            <Award className="w-6 h-6 text-primary-400" />
            <span className="text-white font-semibold">Trusted by industry leaders</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"
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

