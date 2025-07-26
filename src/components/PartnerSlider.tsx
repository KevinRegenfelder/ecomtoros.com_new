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
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
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
          Years of experience and a strong network allow us to market your products through top German distribution channels.
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
    </section>
  );
};

export default PartnerSlider;