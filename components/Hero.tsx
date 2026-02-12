import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

interface HeroProps {
  onOpenGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGetStarted }) => {
  return (
    <section id="home" className="px-6 md:px-16 pt-12 md:pt-20 pb-16 md:pb-24 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-10 md:space-y-12 text-center lg:text-left">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] text-[#1A1A1A] tracking-tighter">
              We Are Creative <span className="text-gray-400">Digital</span> Marketing
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-[20rem] sm:max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
              We help businesses grow online with powerful digital strategies, creative designs, and performance-driven solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              onClick={onOpenGetStarted}
              className="w-full sm:w-auto bg-[#FBBF24] text-black px-10 py-5 rounded-full text-xs sm:text-sm font-black flex items-center justify-center gap-3 hover:bg-black hover:text-[#FBBF24] transition-all shadow-xl shadow-yellow-500/10 uppercase tracking-widest group active:scale-95"
            >
              Get Started
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-[#FBBF24] group-hover:text-black transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center py-10 lg:py-0">
          {/* Mint Arched Frame */}
          <div className="relative w-40 sm:w-56 md:w-64 h-64 sm:h-80 md:h-96 bg-[#A0D4D2] rounded-t-full overflow-hidden border-4 md:border-[6px] border-white shadow-2xl -rotate-6 translate-x-12 translate-y-6 z-0 opacity-80">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Team" />
          </div>

          {/* Peach Arched Frame Container */}
          <div className="relative">
            {/* Peach Arched Frame */}
            <div className="relative w-48 sm:w-64 md:w-72 h-[18rem] sm:h-[22rem] md:h-[26rem] bg-[#FFDFDE] rounded-t-full overflow-hidden border-[6px] md:border-[8px] border-white shadow-2xl z-10">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Expert" />
            </div>

            {/* Circular Rotating Badge */}
            <div className="absolute -top-4 md:-top-6 -right-6 md:-right-10 w-20 md:w-28 h-20 md:h-28 bg-[#FDFCF8]/60 backdrop-blur-xl rounded-full border-2 border-white/50 flex items-center justify-center shadow-2xl z-20 animate-spin-slow group cursor-pointer hover:scale-110 transition-transform">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[10px] font-black uppercase tracking-[0.2em] fill-black/60">
                  <textPath xlinkHref="#circlePath">Brand Boost • Brand Boost •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FBBF24] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="text-white font-black text-lg md:text-xl">*</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
};