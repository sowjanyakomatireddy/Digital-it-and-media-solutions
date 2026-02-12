
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Zap, Target, Shield, Search, Clapperboard, Award, BarChart3, Globe, Smartphone, MousePointer2, PenTool, Video, Megaphone, Phone, Mail } from 'lucide-react';

interface BrochureProps {
  onClose: () => void;
}

export const Brochure: React.FC<BrochureProps> = ({ onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const pages = [
    {
      type: 'cover',
      title: 'Digital IT & Media Solutions',
      subtitle: 'Premium Digital Marketing Portfolio 2026',
      content: 'TRANSFORMING VISIONS INTO DIGITAL REALITIES',
      color: 'bg-[#1A1A1A]',
      textColor: 'text-white'
    },
    {
      type: 'service',
      icon: <Shield className="w-12 h-12 text-[#1E40AF]" />,
      title: 'Brand Building & Identity',
      content: 'Your brand is your story. We craft memorable identities that resonate with your target audience and stand the test of time.',
      features: ['Logo & Visual Design', 'Brand Guidelines', 'Voice & Tone', 'Market Positioning'],
      color: 'bg-[#FDFCF8]',
      textColor: 'text-gray-900',
      accent: 'border-[#1E40AF]'
    },
    {
      type: 'service',
      icon: <PenTool className="w-12 h-12 text-[#1A1A1A]" />,
      title: 'Graphic & Social Design',
      content: 'Stopping the scroll with stunning visuals. From posters to high-converting social media assets, we design for impact.',
      features: ['Creative Posters', 'Social Media Kits', 'Banners & Ads', 'UI/UX Visuals'],
      color: 'bg-[#FFDFDE]',
      textColor: 'text-[#1A1A1A]',
      accent: 'border-white'
    },
    {
      type: 'service',
      icon: <Video className="w-12 h-12 text-[#1A1A1A]" />,
      title: 'Video Production & Editing',
      content: 'Cinema-quality storytelling for the digital age. We produce and edit videos that capture attention and drive results.',
      features: ['4K Video Editing', 'Motion Graphics', 'Promotional Ads', 'Social Content'],
      color: 'bg-[#FBBF24]',
      textColor: 'text-black',
      accent: 'border-[#1A1A1A]'
    },
    {
      type: 'service',
      icon: <Target className="w-12 h-12 text-white" />,
      title: 'Marketing Strategy',
      content: 'Data-driven roadmaps for business growth. We analyze, strategize, and execute to ensure your brand wins online.',
      features: ['Market Research', 'Competitor Analysis', 'Growth Funnels', 'Campaign Planning'],
      color: 'bg-gradient-to-tr from-[#A0D4D2] to-[#1A1A1A]',
      textColor: 'text-white',
      accent: 'border-white/20'
    },
    {
      type: 'service',
      icon: <Megaphone className="w-12 h-12 text-[#1E40AF]" />,
      title: 'Social Media & Paid Ads',
      content: 'Targeted reach on Facebook, Instagram, and Google. We manage your presence and scale your ROI with precision advertising.',
      features: ['Meta Ads Management', 'Google Search/Display', 'Community Building', 'Influencer Outreach'],
      color: 'bg-white',
      textColor: 'text-gray-900',
      accent: 'border-[#FFDFDE]'
    },
    {
      type: 'service',
      icon: <Globe className="w-12 h-12 text-[#FBBF24]" />,
      title: 'Web Development',
      content: 'High-performance websites built for speed and conversion. We turn your digital storefront into a lead-generating machine.',
      features: ['Responsive Design', 'E-commerce Solutions', 'SEO Optimization', 'Ongoing Maintenance'],
      color: 'bg-[#1A1A1A]',
      textColor: 'text-white',
      accent: 'border-[#FBBF24]'
    },
    {
      type: 'contact_page',
      title: 'Ready to Scale?',
      subtitle: 'Your future is digital. Let\'s build it together.',
      color: 'bg-[#A0D4D2]',
      textColor: 'text-black'
    }
  ];

  const handlePageTurn = (direction: 'next' | 'prev') => {
    if (isFlipping) return;

    if (direction === 'next' && currentPage < pages.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 500);
    } else if (direction === 'prev' && currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 500);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-12 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-700"
        onClick={onClose}
      />

      {/* Close UI */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white/40 hover:text-white hover:rotate-180 transition-all duration-500 p-2 z-[70] group"
      >
        <X className="w-12 h-12 group-active:scale-90" />
      </button>

      {/* Book Frame */}
      <div className="relative w-full max-w-5xl aspect-[1.414/1] md:aspect-[2/1] bg-[#1A1A1A] rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] flex perspective-[2500px] border-4 border-white/5 overflow-hidden">

        {/* Page Curl/Turn Interactive Buttons */}
        <div
          onClick={() => handlePageTurn('prev')}
          className={`absolute left-0 top-0 bottom-0 w-32 z-50 cursor-pointer group overflow-hidden ${currentPage === 0 ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent group-hover:from-black/40 transition-all" />
          <div className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 group-hover:scale-125 group-hover:bg-[#FBBF24] group-hover:text-black transition-all duration-500">
            <ChevronLeft className="w-8 h-8 text-white" />
          </div>
        </div>

        <div
          onClick={() => handlePageTurn('next')}
          className={`absolute right-0 top-0 bottom-0 w-32 z-50 cursor-pointer group overflow-hidden ${currentPage === pages.length - 1 ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent group-hover:from-black/40 transition-all" />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 group-hover:scale-125 group-hover:bg-[#FBBF24] group-hover:text-black transition-all duration-500">
            <ChevronRight className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Render Pages */}
        {pages.map((page, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.645,0.045,0.355,1)] flex origin-center ${page.color} ${page.textColor} ${idx === currentPage
              ? 'opacity-100 z-10 rotate-y-0 translate-x-0'
              : idx < currentPage
                ? 'opacity-0 -z-10 -rotate-y-90 -translate-x-full'
                : 'opacity-0 -z-10 rotate-y-90 translate-x-full'
              }`}
          >
            {/* Spine Shadow Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none" />

            <div className="flex-grow p-8 md:p-16 flex flex-col justify-start items-center text-center overflow-y-auto">
              {page.type === 'cover' ? (
                <div className="w-full flex flex-col items-center pt-8 md:pt-12 space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                  {/* Logo Container - Styled to match Reference */}
                  <div className="w-32 h-32 md:w-44 md:h-44 flex items-center justify-center rounded-full overflow-hidden bg-transparent">
                    <img
                      src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1770092496/image_xr4lqg.png"
                      alt="Digital IT & Media Logo"
                      className="w-full h-full object-cover scale-[1.3] transform-gpu"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.95] max-w-3xl mx-auto">
                      DIGITAL IT & MEDIA<br />SOLUTIONS
                    </h1>
                    <h2 className="text-base md:text-2xl font-bold text-white/50 tracking-wide">
                      {page.subtitle}
                    </h2>
                  </div>

                  {/* Pagination Indicator (Above Pill) */}
                  <div className="flex flex-col items-center gap-4 pt-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">SECTION {idx + 1} / {pages.length}</span>
                    <div className="flex gap-2">
                      <div className="w-16 h-1.5 bg-white rounded-full overflow-hidden">
                        <div className="w-full h-full bg-white opacity-40" />
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: pages.length - 1 }).map((_, i) => (
                          <div key={i} className="w-2 h-1.5 bg-white/10 rounded-full" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Pill CTA */}
                  <div className="pt-4">
                    <div className="px-12 py-4 border-2 border-white rounded-full inline-block">
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] whitespace-nowrap">
                        {page.content}
                      </span>
                    </div>
                  </div>
                </div>
              ) : page.type === 'contact_page' ? (
                <div className="w-full flex flex-col items-center justify-center h-full space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">{page.title}</h1>
                  <h2 className="text-xl md:text-2xl font-bold opacity-70">{page.subtitle}</h2>

                  <div className="flex flex-col md:flex-row gap-8 items-center justify-center pt-8 w-full max-w-2xl">
                    <a href="tel:+91 9652352635" className="group flex flex-col items-center gap-4 p-8 rounded-[2.5rem] bg-white/20 border border-black/10 hover:bg-black hover:text-white transition-all duration-500 w-full">
                      <Phone className="w-10 h-10 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-black uppercase tracking-widest">+91 9652352635</span>
                    </a>
                    <a href="mailto:hr@digital-itsolutions.com" className="group flex flex-col items-center gap-4 p-8 rounded-[2.5rem] bg-white/20 border border-black/10 hover:bg-black hover:text-white transition-all duration-500 w-full">
                      <Mail className="w-10 h-10 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-black uppercase tracking-widest break-all">hr@digital-itsolutions.com</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="max-w-4xl w-full space-y-12 animate-in fade-in zoom-in-95 duration-700 my-auto">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <div className={`p-8 bg-white/20 rounded-[3rem] backdrop-blur-md border-2 ${(page as any).accent} shadow-2xl`}>
                      {(page as any).icon}
                    </div>
                    <div className="text-center md:text-left space-y-4">
                      <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">{page.title}</h2>
                      <div className={`w-32 h-2 bg-current opacity-30 rounded-full mx-auto md:mx-0`} />
                    </div>
                  </div>
                  <p className="text-xl md:text-2xl font-semibold opacity-80 leading-relaxed max-w-3xl mx-auto">
                    {(page as any).content}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {(page as any).features?.map((feat: string, i: number) => (
                      <div key={i} className="group/feat flex flex-col items-center gap-4 bg-white/10 p-6 rounded-[2rem] border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                        <MousePointer2 className="w-6 h-6 opacity-40 group-hover/feat:scale-125 transition-transform" />
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* General Page Footer Pagination */}
                  <div className="flex justify-center items-center gap-6 pt-12">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">SECTION {idx + 1} / {pages.length}</span>
                    <div className="flex gap-2">
                      {pages.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setCurrentPage(dotIdx)}
                          className={`h-1.5 rounded-full transition-all duration-500 ${dotIdx === currentPage ? 'w-10 bg-current' : 'w-2 bg-current/20'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .perspective-[2500px] { perspective: 2500px; }
        .rotate-y-90 { transform: rotateY(90deg); }
        .-rotate-y-90 { transform: rotateY(-90deg); }
        .rotate-y-0 { transform: rotateY(0deg); }
      `}</style>
    </div>
  );
};
