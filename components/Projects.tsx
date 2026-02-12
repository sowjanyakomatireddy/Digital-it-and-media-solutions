import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projectList = [
  {
    title: 'Vedant School - Digital Presence',
    tag: 'Education',
    tagColor: 'bg-[#A0D4D2]',
    desc: 'Complete Website Design & Development featuring responsive pages for admissions, academics, and seamless school management.',
    img: 'https://res.cloudinary.com/dkivpkaaj/image/upload/v1768811679/Image_fbf7ze.jpg',
    link: 'https://vedanthighschoolnalgonda.org/',
    services: ['Web Development', 'Admission Portal', 'SEO', 'Video Ads']
  },
  {
    title: 'Arogya Hospital - Healthcare Branding',
    tag: 'Healthcare',
    tagColor: 'bg-[#FFDFDE]',
    desc: 'Expert SEO services combined with medical awareness posters and digital branding support to enhance local search ranking.',
    img: 'https://res.cloudinary.com/dkivpkaaj/image/upload/v1770181579/main-sample.jpg',
    services: ['Local SEO', 'Graphic Design', 'Social Media', 'Content Strategy']
  },
  {
    title: 'Krishnaveni School - Branding Suite',
    tag: 'Education',
    tagColor: 'bg-[#FBBF24]',
    desc: 'A full-service package including poster designing, promotional videos, and complete website development for school outreach.',
    img: 'https://res.cloudinary.com/dkivpkaaj/image/upload/v1770184613/cld-sample.avif',
    services: ['Brand Building', 'Video Production', 'Website UI/UX', 'Poster Design']
  },
  {
    title: 'Srujana Dental - Oral Care Branding',
    tag: 'Healthcare',
    tagColor: 'bg-[#A0D4D2]',
    desc: 'Strategic digital branding and website development for a specialized dental clinic, focused on patient engagement and automated appointment booking.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop',
    services: ['Responsive Web', 'Patient Portal', 'SEO', 'Creative Assets']
  },
  {
    title: 'Mayuri Restaurant - Visual Identity',
    tag: 'Restaurant',
    tagColor: 'bg-[#A0D4D2]',
    desc: 'Creative menu card designs and high-impact promotional posters tailored for modern food branding and customer engagement.',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    services: ['Menu Design', 'Photography Branding', 'GMB Optimization', 'Ads']
  },
  {
    title: 'School Management Software',
    tag: 'Ongoing Project',
    tagColor: 'bg-[#FFDFDE]',
    desc: 'Comprehensive management system for schools featuring student information, automated attendance, fee management, and academic reporting tools.',
    img: 'https://res.cloudinary.com/dkivpkaaj/image/upload/v1770184486/cld-sample-2.png',
    services: ['Student Portal', 'Fee Management', 'LMS', 'Auto-Attendance']
  }
];

interface ProjectsProps {
  onProjectClick: (project: any) => void;
  onViewAll: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onProjectClick, onViewAll }) => {
  return (
    <section id="projects" className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto space-y-12 md:space-y-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 text-center md:text-left">
        <div className="space-y-4 w-full">
          <h2 className="text-[2.5rem] md:text-6xl font-black text-[#1A1A1A] tracking-tight leading-tight">Our Projects</h2>
          <p className="text-gray-400 font-medium max-w-xl mx-auto md:mx-0 leading-relaxed text-base md:text-lg">
            We have successfully delivered websites, digital marketing, posters, videos, and SEO services for schools, hospitals, and restaurants.
          </p>
        </div>
      </div>

      <div className="space-y-16 md:space-y-24">
        {projectList.map((p, i) => (
          <div
            key={i}
            onClick={() => (p as any).link ? window.open((p as any).link, '_blank') : onProjectClick(p)}
            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-16 items-center group cursor-pointer active:scale-[0.99] transition-transform`}
          >
            <div className="flex-1 space-y-5 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <span className={`${p.tagColor} px-5 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-black inline-block shadow-sm`}>
                {p.tag}
              </span>
              <h3 className="text-3xl md:text-5xl font-black leading-tight group-hover:text-orange-500 transition-colors duration-500 text-[#1A1A1A] tracking-tight">
                {p.title}
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed max-w-md mx-auto lg:mx-0 text-base md:text-lg group-hover:text-gray-600 transition-colors duration-500">
                {p.desc}
              </p>
              <div className="pt-2">
                <button className="inline-flex items-center justify-center lg:justify-start gap-3 text-xs md:text-sm font-black uppercase tracking-widest group/btn text-[#1A1A1A] hover:text-orange-600 transition-colors bg-gray-50 lg:bg-transparent px-6 py-4 lg:p-0 rounded-2xl lg:rounded-none w-full lg:w-auto">
                  See Full Project <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="flex-1 w-full order-1 lg:order-2">
              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl shadow-black/5 group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-700 ease-out aspect-[16/10] md:aspect-[4/3] bg-gray-100 border border-gray-100">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-8 md:pt-10">
        <button
          onClick={onViewAll}
          className="w-full sm:w-auto bg-[#FBBF24] px-12 py-5 rounded-full text-xs md:text-sm font-black uppercase tracking-widest shadow-lg shadow-yellow-500/10 hover:bg-black hover:text-[#FBBF24] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 active:scale-95"
        >
          See All Work
        </button>
      </div>
    </section>
  );
};