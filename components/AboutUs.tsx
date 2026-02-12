
import React from 'react';
import { CheckCircle2, ArrowRight, Heart } from 'lucide-react';

interface AboutUsProps {
  onLearnMore?: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative group">
          <div className="aspect-[4/5] bg-[#D1EAD8] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="Team Workshop"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#FBBF24] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-xl space-y-2 max-w-[160px] md:max-w-[200px] hidden sm:block border-4 border-white">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-black" />
            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-black leading-tight">Driven by passion, led by data.</p>
          </div>
        </div>

        <div className="space-y-10 md:space-y-12 text-center lg:text-left">
          <div className="space-y-6 md:space-y-8">
            <span className="text-[10px] md:text-sm font-black text-[#FF6B6B] uppercase tracking-[0.3em] md:tracking-[0.4em]">Our Story</span>
            <h2 className="text-[2.5rem] md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">Bridging the gap to your <span className="text-[#A0D4D2]">Digital Potential.</span></h2>
            <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Digital IT & Media Solutions started with a simple mission: to make world-class digital growth accessible to local businesses. We bridge the gap between complexity and creativity.
            </p>
          </div>

          <div className="space-y-5 max-w-md mx-auto lg:mx-0">
            {[
              "Personalized storytelling for every brand",
              "Cutting-edge technical infrastructure",
              "Transparent & ethical marketing practices"
            ].map((highlight) => (
              <div key={highlight} className="flex items-center gap-4 group text-left">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-[#D1EAD8] rounded-full flex-shrink-0 flex items-center justify-center group-hover:bg-[#FFB347] transition-all duration-300">
                  <CheckCircle2 className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-base md:text-lg font-bold text-gray-800 tracking-tight">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button
              onClick={onLearnMore}
              className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#FBBF24] hover:text-black transition-all shadow-xl shadow-black/10 group active:scale-95"
            >
              Learn More About Us
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
