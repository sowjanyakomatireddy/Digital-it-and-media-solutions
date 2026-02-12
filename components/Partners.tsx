
import React from 'react';

const brands = [
  { name: 'Vedant School', logo: 'https://placehold.co/200x80/333/FFF?text=Vedant+School' },
  { name: 'Krishnaveni School', logo: 'https://placehold.co/200x80/333/FFF?text=Krishnaveni' },
  { name: 'Arogya Hospital', logo: 'https://placehold.co/200x80/333/FFF?text=Arogya+Hospital' },
  { name: 'Srujana Hospital', logo: 'https://placehold.co/200x80/333/FFF?text=Srujana' },
  { name: 'Sathyavathi Hospital', logo: 'https://placehold.co/200x80/333/FFF?text=Sathyavathi' },
  { name: 'Mayuri Restaurant', logo: 'https://placehold.co/200x80/333/FFF?text=Mayuri' }
];

export const Partners: React.FC = () => {
  return (
    <div className="bg-[#1A1A1A] py-12 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-scroll">
        <div className="flex gap-24 items-center px-12">
          {brands.map((brand, i) => (
            <div key={i} className="flex items-center justify-center min-w-[150px] opacity-40 hover:opacity-100 transition-opacity duration-300">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless scrolling */}
        <div className="flex gap-24 items-center px-12" aria-hidden="true">
          {brands.map((brand, i) => (
            <div key={`dup-${i}`} className="flex items-center justify-center min-w-[150px] opacity-40 hover:opacity-100 transition-opacity duration-300">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Gradient masks for smooth fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" />
    </div>
  );
};
