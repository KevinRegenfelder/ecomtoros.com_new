import React from 'react';

const PartnerSlider = () => {
  // Partner logos - Sie können diese URLs durch echte Partner-Logos ersetzen
  const partners = [
    {
      name: 'Fairfillment',
      logo: '/src/media/logos/fairfillment.png',
      width: 'w-32'
    },
    {
      name: 'Hardware-Wallet.Shop',
      logo: '/src/media/logos/hws.png',
      width: 'w-32'
    },
    {
      name: 'Media Markt & Saturn',
      logo: '/src/media/logos/mediamarkt_saturn.png',
      width: 'w-32'
    },
    {
      name: 'CHIP',
      logo: '/src/media/logos/chip.png',
      width: 'w-32'
    },
    {
      name: 'OneKey',
      logo: '/src/media/logos/onekey.png',
      width: 'w-32'
    },
    {
      name: 'Cyberport',
      logo: '/src/media/logos/cyberport.png',
      width: 'w-32'
    },
    {
      name: 'Idealo',
      logo: '/src/media/logos/idealo.png',
      width: 'w-32'
    },
    {
      name: 'Billiger.de',
      logo: '/src/media/logos/billiger_de.png',
      width: 'w-32'
    },
    {
      name: 'Conrad',
      logo: '/src/media/logos/conrad.png',
      width: 'w-32'
    }
  ];

  // Dupliziere die Partner für nahtloses Looping
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section 
      id="partners" 
      className="py-16 relative overflow-hidden"
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Clients and Partners
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          From marketplaces and marketing to fulfillment — our partner network delivers an all-in-one solution tailored for crypto hardware in the German market.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          {/* Sliding Track */}
          <div className="flex animate-slide-infinite" style={{ animationDuration: '20s' }}>
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="flex items-center justify-center h-20 w-32 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group-hover:transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={`${partner.width} h-auto object-contain transition-all duration-300`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
         {/* CTA Section */}
<div className={`mt-16 text-center transition-all duration-1000 delay-800`}>
  <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary-600/20 to-secondary-600/20 backdrop-blur-sm border border-primary-500/30">
    <h3 className="text-2xl font-bold mb-4 text-white">Ready to Launch in the German Market?</h3>
    <p className="text-secondary-300 mb-6">Let’s bring your crypto hardware or blockchain brand to life — with strategy, speed, and local know-how.</p>
    <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 font-semibold">
      <a href="#contact" className="text-white">Let's Talk Growth</a>
    </button>
  </div>
</div>
    </section>
  );
};

export default PartnerSlider;