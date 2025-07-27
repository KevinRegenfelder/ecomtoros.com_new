import React from 'react';

const PartnerSlider = () => {
  // Partner logos
  const partners = [
    {
      name: 'Fairfillment',
      logo: '/media/logos/fairfillment.png',
      width: 'w-24 sm:w-32'
    },
    {
      name: 'Hardware-Wallet.Shop',
      logo: '/media/logos/hws.png',
      width: 'w-24 sm:w-32'
    },
    {
      name: 'Media Markt & Saturn',
      logo: '/media/logos/mediamarkt_saturn.png',
      width: 'w-24 sm:w-32'
    },
    {
      name: 'CHIP',
      logo: '/media/logos/chip.png',
      width: 'w-24 sm:w-32'
    },
    {
      name: 'OneKey',
      logo: '/media/logos/onekey.png',
      width: 'w-24 sm:w-32'
    },
    {
      name: 'Cyberport',
      logo: '/media/logos/cyberport.png',
      width: 'w-24 sm:w-32'
    },
    {
      name: 'Idealo',
      logo: '/media/logos/idealo.png',
      width: 'w-24 sm:w-32'
    },
    {
      name: 'Billiger.de',
      logo: '/media/logos/billiger_de.png',
      width: 'w-24 sm:w-32'
    },
    {
      name: 'Conrad',
      logo: '/media/logos/conrad.png',
      width: 'w-24 sm:w-32'
    },
    {
      name: 'Amazon',
      logo: '/media/logos/amazon.png',
      width: 'w-24 sm:w-32'
    },
    {
      name: 'DHL',
      logo: '/media/logos/dhl.png',
      width: 'w-24 sm:w-32'
    },
    {
      name: 'gls',
      logo: '/media/logos/gls.png',
      width: 'w-24 sm:w-32'
    },
    {
      name: 'ebay',
      logo: '/media/logos/ebay.png',
      width: 'w-24 sm:w-32'
    },
    {
      name: 'tangem',
      logo: '/media/logos/tangem.png',
      width: 'w-24 sm:w-32'
    }
  ];

  // Function to create shuffled arrays without consecutive duplicates
  // Function to split logos into rows without duplicates
  const createShuffledRows = (logos: typeof partners, numRows: number) => {
    const rows = [];
    
    // Shuffle the logos first
    const shuffledLogos = [...logos].sort(() => Math.random() - 0.5);
    
    // Split logos into rows
    const logosPerRow = Math.ceil(logos.length / numRows);
    
    for (let row = 0; row < numRows; row++) {
      const rowLogos = [];
      const startIndex = row * logosPerRow;
      const endIndex = Math.min(startIndex + logosPerRow, logos.length);
      
      // Get logos for this row
      const rowLogosSubset = shuffledLogos.slice(startIndex, endIndex);
      
      // Fill the row by repeating the subset
      for (let i = 0; i < 30; i++) {
        const logoIndex = i % rowLogosSubset.length;
        rowLogos.push(rowLogosSubset[logoIndex]);
      }
      
      rows.push(rowLogos);
    }
    
    return rows;
  };

  // Create separate rows for mobile (3) and desktop (2)
  const mobileRows = createShuffledRows(partners, 3);
  const desktopRows = createShuffledRows(partners, 2);

  return (
    <section 
      id="partners" 
      className="py-12 sm:py-16 relative overflow-hidden"
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
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 overflow-hidden">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Clients and Partners
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            From marketplaces and marketing to fulfillment — our partner network delivers an all-in-one solution tailored for crypto hardware in the German market.
          </p>
        </div>

        {/* Mobile Slider - 3 Rows */}
        <div className="block lg:hidden space-y-4 sm:space-y-6 pb-8">
          {/* Mobile Row 1 */}
          <div className="relative">
            <div className="flex animate-slide-infinite" style={{ animationDuration: '30s' }}>
              {mobileRows[0].map((partner, index) => (
                <div
                  key={`mobile-1-${partner.name}-${index}`}
                  className="flex-shrink-0 mx-2 sm:mx-4 group"
                >
                  <div className="flex items-center justify-center h-16 sm:h-20 w-24 sm:w-28 p-2 sm:p-3 rounded-lg bg-secondary-800/50 backdrop-blur-sm border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300 group-hover:transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-18 sm:w-24 h-auto object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Row 2 */}
          <div className="relative">
            <div className="flex animate-slide-infinite" style={{ 
              animationDuration: '25s',
              transform: 'translateX(-20%)'
            }}>
              {mobileRows[1].map((partner, index) => (
                <div
                  key={`mobile-2-${partner.name}-${index}`}
                  className="flex-shrink-0 mx-2 sm:mx-4 group"
                >
                  <div className="flex items-center justify-center h-16 sm:h-20 w-24 sm:w-28 p-2 sm:p-3 rounded-lg bg-secondary-800/50 backdrop-blur-sm border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300 group-hover:transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-18 sm:w-24 h-auto object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Row 3 */}
          <div className="relative">
            <div className="flex animate-slide-infinite" style={{ 
              animationDuration: '35s',
              transform: 'translateX(-10%)'
            }}>
              {mobileRows[2].map((partner, index) => (
                <div
                  key={`mobile-3-${partner.name}-${index}`}
                  className="flex-shrink-0 mx-2 sm:mx-4 group"
                >
                  <div className="flex items-center justify-center h-16 sm:h-20 w-24 sm:w-28 p-2 sm:p-3 rounded-lg bg-secondary-800/50 backdrop-blur-sm border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300 group-hover:transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-18 sm:w-24 h-auto object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Slider - 2 Rows */}
        <div className="hidden lg:block space-y-6 pb-12">
          {/* Desktop Row 1 */}
          <div className="relative">
            <div className="flex animate-slide-infinite" style={{ animationDuration: '40s' }}>
              {desktopRows[0].map((partner, index) => (
                <div
                  key={`desktop-1-${partner.name}-${index}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="flex items-center justify-center h-24 w-36 p-4 rounded-xl bg-secondary-800/50 backdrop-blur-sm border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300 group-hover:transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-28 h-auto object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Row 2 */}
          <div className="relative">
            <div className="flex animate-slide-infinite" style={{ 
              animationDuration: '35s',
              transform: 'translateX(-30%)'
            }}>
              {desktopRows[1].map((partner, index) => (
                <div
                  key={`desktop-2-${partner.name}-${index}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="flex items-center justify-center h-24 w-36 p-4 rounded-xl bg-secondary-800/50 backdrop-blur-sm border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300 group-hover:transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-28 h-auto object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-16 sm:mt-20 text-center px-4 sm:px-6">
        <div className="inline-block p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary-600/20 to-secondary-600/20 backdrop-blur-sm border border-primary-500/30">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Ready to Launch in the German Market?</h3>
          <p className="text-sm sm:text-base text-secondary-300 mb-4 sm:mb-6">Let's bring your crypto hardware or blockchain brand to life — with strategy, speed, and local know-how.</p>
          <a 
            href="#contact" 
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 font-semibold text-sm sm:text-base text-white"
          >
            Let's Talk Growth
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;