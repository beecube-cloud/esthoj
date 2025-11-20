"use client";

import Image from 'next/image';


const partners = [
  { id: 1, name: 'Nigerian Air Force', logo: '/partners/airforce.svg' },
  { id: 2, name: 'Bima Shelters', logo: '/partners/Bima.png' },
  { id: 3, name: 'Renewed Hope', logo: '/partners/renewed_hope.jpg' },
  { id: 4, name: 'Cannon Projects', logo: '/partners/cannon.png' },
  { id: 5, name: 'CITEC', logo: '/partners/citec.jpeg' },
  { id: 6, name: 'MTN', logo: '/partners/mtn.jpg' },
  { id: 7, name: 'Leadership and Service', logo: '/partners/leadership_and_service.jpeg' },
  { id: 8, name: 'First Bank', logo: '/partners/firstbank.png' },
  { id: 9, name: 'Nigeria Sovereign Investment Authority', logo: '/partners/NSIA.png' },
  { id: 10, name: 'Signature Realty', logo: '/partners/signature_realty.jpeg' },
];


export function PartnersSection() {
  return (
    <section className="w-full bg-[#0A1B3D] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Our Global Partners
        </h2>
        
        <div className="relative">
          {/* Fade Gradients */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0A1B3D, transparent)' }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0A1B3D, transparent)' }}
          />
          
          {/* Scrolling Logos - No Background */}
          <div className="flex overflow-hidden">
            <div className="partners-scroll flex items-center">
              {/* First set */}
              {partners.map((partner) => (
                <div key={`first-${partner.id}`} className="flex-shrink-0 mx-8">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={80}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {partners.map((partner) => (
                <div key={`second-${partner.id}`} className="flex-shrink-0 mx-8">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={80}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-animation {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .partners-scroll {
          animation: scroll-animation 30s linear infinite;
        }
        
        .partners-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}


export function PartnersSectionWithGlow() {
  return (
    <section className="w-full bg-[#0A1B3D] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Our Global Partners
        </h2>
        
        <div className="relative">
          <div 
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0A1B3D, transparent)' }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0A1B3D, transparent)' }}
          />
          
          <div className="flex overflow-hidden">
            <div className="partners-scroll-glow flex items-center">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`logo-${index}`} className="flex-shrink-0 mx-8">
                  <div className="hover:scale-110 transition-transform duration-300">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={180}
                      height={80}
                      className="object-contain drop-shadow-2xl"
                      style={{ filter: 'drop-shadow(0 4px 12px rgba(255, 255, 255, 0.1))' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-glow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .partners-scroll-glow {
          animation: scroll-glow 30s linear infinite;
        }
        
        .partners-scroll-glow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}


export function PartnersSectionLarge() {
  return (
    <section className="w-full bg-[#0A1B3D] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Our Global Partners
        </h2>
        
        <div className="relative">
          <div 
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0A1B3D, transparent)' }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0A1B3D, transparent)' }}
          />
          
          <div className="flex overflow-hidden">
            <div className="partners-scroll-large flex items-center">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`logo-${index}`} className="flex-shrink-0 mx-12">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="object-contain hover:scale-110 hover:opacity-90 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-large {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .partners-scroll-large {
          animation: scroll-large 35s linear infinite;
        }
        
        .partners-scroll-large:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}


export function PartnersSectionGrayscale() {
  return (
    <section className="w-full bg-[#0A1B3D] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Our Global Partners
        </h2>
        
        <div className="relative">
          <div 
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0A1B3D, transparent)' }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0A1B3D, transparent)' }}
          />
          
          <div className="flex overflow-hidden">
            <div className="partners-scroll-gray flex items-center">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`logo-${index}`} className="flex-shrink-0 mx-8">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={80}
                    className="object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-gray {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .partners-scroll-gray {
          animation: scroll-gray 30s linear infinite;
        }
        
        .partners-scroll-gray:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}


export function PartnersSectionFast() {
  return (
    <section className="w-full bg-[#0A1B3D] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Our Global Partners
        </h2>
        
        <div className="relative">
          <div 
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0A1B3D, transparent)' }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0A1B3D, transparent)' }}
          />
          
          <div className="flex overflow-hidden">
            <div className="partners-scroll-fast flex items-center">
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div key={`logo-${index}`} className="flex-shrink-0 mx-8">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={80}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        
        .partners-scroll-fast {
          animation: scroll-fast 20s linear infinite;
        }
        
        .partners-scroll-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}


export default PartnersSection;