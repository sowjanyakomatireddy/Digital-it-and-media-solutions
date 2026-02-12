
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface WhyUsProps {
  onOpenGetStarted: () => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ onOpenGetStarted }) => {
  const trustPoints = [
    "Experienced marketing professionals",
    "Affordable pricing for local businesses",
    "On-time delivery commitment",
    "Dedicated local business support",
    "Result-driven marketing strategies"
  ];

  return (
    <section id="why-us" className="bg-[#FBBF24] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="w-full max-w-md aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-[10px] border-white/20">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
              alt="Our Team Success"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 grid grid-cols-6 gap-4 z-0">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-4 h-1.5 bg-white/40 rounded-full rotate-45" />
            ))}
          </div>
        </div>

        <div className="space-y-12 order-1 lg:order-2">
          <div className="space-y-6">
            <h2 className="text-7xl font-black text-[#1A1A1A]">Why Choose Us?</h2>
            <p className="text-xl font-bold text-black/60 leading-relaxed">
              We don't just provide services; we build partnerships that drive real-world growth for your business.
            </p>
          </div>

          <div className="space-y-6">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-[#FBBF24]" />
                </div>
                <span className="text-2xl font-black text-gray-900">{point}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <button
              onClick={onOpenGetStarted}
              className="bg-black text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl shadow-black/10"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
