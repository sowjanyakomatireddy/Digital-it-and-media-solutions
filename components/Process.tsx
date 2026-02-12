
import React from 'react';
import { PhoneCall, Search, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <PhoneCall />,
    title: "1. Contact & Discovery",
    desc: "Fill out our form and we'll call you to understand your specific business requirements."
  },
  {
    icon: <Search />,
    title: "2. Requirement Analysis",
    desc: "Our experts analyze your niche, competitors, and goals to build a custom roadmap."
  },
  {
    icon: <Lightbulb />,
    title: "3. Strategy Planning",
    desc: "We present a detailed strategy including design mockups and marketing funnels."
  },
  {
    icon: <Code />,
    title: "4. Design & Development",
    desc: "Our creative team builds your digital assets with technical precision and style."
  },
  {
    icon: <Rocket />,
    title: "5. Delivery & Support",
    desc: "We launch your project and provide ongoing support to ensure continued success."
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <span className="text-sm font-black text-[#FBBF24] uppercase tracking-[0.3em]">Our Workflow</span>
          <h2 className="text-6xl font-black text-[#1A1A1A]">How We Work</h2>
          <p className="text-gray-400 font-medium max-w-xl mx-auto">A transparent, step-by-step process designed to remove fear and deliver results.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-50 -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-5 gap-10 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl shadow-black/5 space-y-6 hover:-translate-y-2 transition-all group">
                <div className="w-16 h-16 bg-[#FDFCF8] rounded-2xl flex items-center justify-center text-gray-900 shadow-inner group-hover:bg-[#FBBF24] transition-colors">
                  {React.cloneElement(step.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-400 font-semibold leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};
