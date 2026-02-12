
import React from 'react';
import { School, Stethoscope, Utensils, Store, Building2 } from 'lucide-react';

const industries = [
  { title: "Schools & Colleges", icon: <School />, color: "bg-[#A0D4D2]", desc: "Admissions growth & branding" },
  { title: "Hospitals & Clinics", icon: <Stethoscope />, color: "bg-[#FFDFDE]", desc: "Patient trust & digital SEO" },
  { title: "Restaurants", icon: <Utensils />, color: "bg-[#FBBF24]", desc: "Visual menu & local traffic" },
  { title: "Small Businesses", icon: <Building2 />, color: "bg-[#A0D4D2]", desc: "Operations & lead generation" },
  { title: "Local Shops", icon: <Store />, color: "bg-[#FFDFDE]", desc: "Online presence & visibility" }
];

export const Industries: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-6xl font-black text-[#1A1A1A] leading-tight">Industries We Serve</h2>
            <p className="text-lg text-gray-400 font-medium leading-relaxed">
              We specialize in creating niche-specific digital solutions that address the unique challenges of your industry. Our experience across sectors makes us the perfect partner for your business.
            </p>
          </div>

        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {industries.map((item, i) => (
            <div key={i} className={`${item.color} p-8 rounded-[3rem] space-y-4 shadow-lg shadow-black/5 hover:-rotate-2 transition-transform cursor-default group`}>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-900 shadow-sm group-hover:scale-110 transition-transform">
                {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-900/40 font-bold">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
