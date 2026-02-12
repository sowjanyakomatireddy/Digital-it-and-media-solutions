
import React from 'react';
import { Target, Heart, Zap, ArrowDown } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  const scrollToValues = () => {
    const element = document.getElementById('core-values');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="about-page" className="space-y-32 py-24">
      {/* Mission Section */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <span className="bg-[#FFDFDE] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest text-black">Our Mission</span>
              <h2 className="text-6xl font-black text-[#1A1A1A] leading-tight">
                Empowering brands through <span className="text-[#A0D4D2]">Digital Innovation</span>
              </h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-lg">
                At Digital IT & Media Solutions, our mission is to bridge the gap between businesses and their digital potential. We believe every brand has a unique story that deserves to be told with creativity and technical precision.
              </p>
            </div>
            
            <div className="space-y-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="text-4xl font-black text-[#FBBF24] mb-2">100%</div>
                  <p className="text-sm font-bold text-gray-400">Client Satisfaction</p>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="text-4xl font-black text-[#A0D4D2] mb-2">250+</div>
                  <p className="text-sm font-bold text-gray-400">Projects Done</p>
                </div>
              </div>

              <button 
                onClick={scrollToValues}
                className="bg-black text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-4 hover:bg-[#A0D4D2] hover:text-black transition-all shadow-xl shadow-black/5 group"
              >
                Discover Our Story
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              </button>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-square bg-[#FBBF24] rounded-full overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values" className="bg-[#FDFCF8] py-24 px-6 md:px-16 border-y border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-[#1A1A1A]">Our Core Values</h2>
            <p className="text-gray-400 font-medium max-w-xl mx-auto">The principles that guide our work and relationships every day.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'Always pushing the boundaries of what is possible in the digital space.', color: 'bg-[#A0D4D2]', icon: <Zap /> },
              { title: 'Integrity', desc: 'Transparent communication and honest strategies that build lasting trust.', color: 'bg-[#FFDFDE]', icon: <Heart /> },
              { title: 'Impact', desc: 'We measure our success by the growth and results we deliver to our clients.', color: 'bg-[#FBBF24]', icon: <Target /> }
            ].map((value) => (
              <div key={value.title} className={`${value.color} p-12 rounded-[3rem] space-y-6 shadow-xl shadow-black/5`}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-800 shadow-sm">
                  {React.cloneElement(value.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-3xl font-black text-gray-900">{value.title}</h3>
                <p className="text-gray-800/60 font-semibold leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
