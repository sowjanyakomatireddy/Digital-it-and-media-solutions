
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic Website",
    features: ["5 Responsive Pages", "SEO Optimization", "Basic Branding", "1 Month Support"],
    color: "bg-white",
    btnColor: "bg-black text-white"
  },
  {
    name: "SEO & Ads",
    features: ["Local SEO", "Google Ads Setup", "Keyword Research", "Monthly Reports"],
    color: "bg-[#FFDFDE]",
    btnColor: "bg-white text-black",
    popular: true
  },
  {
    name: "Creative Content",
    features: ["Social Media Posters", "Video Editing", "Menu Card Design", "Logo Design"],
    color: "bg-[#A0D4D2]",
    btnColor: "bg-black text-white"
  }
];

interface PricingProps {
  onOpenGetStarted: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenGetStarted }) => {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#1A1A1A] rounded-[5rem] mx-4 my-20">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-6xl font-black text-white">Our Packages</h2>
          <p className="text-gray-400 font-medium max-w-xl mx-auto">Choose the perfect package to elevate your business.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`${plan.color} p-12 rounded-[4rem] space-y-10 relative flex flex-col`}>
              {plan.popular && (
                <span className="absolute -top-4 right-10 bg-[#FBBF24] text-black px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Most Popular</span>
              )}
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-gray-900">{plan.name}</h3>
              </div>

              <ul className="space-y-5 flex-grow">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm font-bold text-gray-600">
                    <Check className="w-5 h-5 text-[#FBBF24]" /> {feat}
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenGetStarted}
                className={`${plan.btnColor} w-full py-5 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform`}
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 font-bold mb-6">Need something tailored to your needs?</p>
          <button
            onClick={onOpenGetStarted}
            className="text-[#FBBF24] text-2xl font-black border-b-4 border-[#FBBF24] pb-2 hover:text-white hover:border-white transition-all"
          >
            Contact us for custom pricing
          </button>
        </div>
      </div>
    </section>
  );
};
