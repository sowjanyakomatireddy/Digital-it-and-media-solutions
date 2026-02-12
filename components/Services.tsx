import React from 'react';
import { Shield, PenTool, Video, Target, Users, Globe, Search, Clapperboard } from 'lucide-react';

const serviceData = [
  {
    title: 'Brand Building',
    desc: 'Build a strong and memorable brand identity.',
    icon: <Shield />,
    color: 'bg-[#A0D4D2]'
  },
  {
    title: 'Graphic Design',
    desc: 'Creative posters, banners, and social media designs.',
    icon: <PenTool />,
    color: 'bg-[#FFDFDE]'
  },
  {
    title: 'Video Editing',
    desc: 'High-quality promotional and social media videos.',
    icon: <Video />,
    color: 'bg-[#FBBF24]'
  },
  {
    title: 'Marketing Strategy',
    desc: 'Data-driven strategies to grow your business.',
    icon: <Target />,
    color: 'bg-[#A0D4D2]'
  },
  {
    title: 'Social Media Marketing',
    desc: 'Engage and grow your audience on all platforms.',
    icon: <Users />,
    color: 'bg-[#FFDFDE]'
  },
  {
    title: 'Website Designing',
    desc: 'Modern, responsive, and user-friendly website designs.',
    icon: <Globe />,
    color: 'bg-[#FBBF24]'
  },
  {
    title: 'Google Ads',
    desc: 'Lead-focused search and display advertising.',
    icon: <Search />,
    color: 'bg-[#A0D4D2]'
  },
  {
    title: 'Video Production',
    desc: 'Professional videos for ads and branding.',
    icon: <Clapperboard />,
    color: 'bg-[#FFDFDE]'
  }
];

interface ServicesProps {
  onServiceClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto text-center space-y-12 md:space-y-20">
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-[2.25rem] md:text-5xl font-black text-[#1A1A1A] max-w-2xl mx-auto leading-tight tracking-tight">
          Save time managing your business with our services
        </h2>
        <p className="text-gray-400 font-medium max-w-md mx-auto text-base md:text-lg leading-relaxed">
          We provide end-to-end digital solutions to elevate your brand presence through creativity and technology.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {serviceData.map((s, i) => (
          <div
            key={i}
            onClick={onServiceClick}
            className={`${s.color} rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 text-left space-y-6 md:space-y-8 shadow-xl shadow-black/5 hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col min-h-[220px] md:min-h-[260px] active:scale-[0.98] border-2 border-transparent hover:border-white`}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-gray-800 shadow-sm group-hover:rotate-6 transition-transform">
              {React.cloneElement(s.icon as React.ReactElement<any>, { className: 'w-7 h-7 md:w-8 md:h-8' })}
            </div>

            <div className="space-y-3 md:space-y-4 flex-grow">
              <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">{s.title}</h3>
              <p className="text-gray-800/60 text-sm md:text-base font-semibold leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};