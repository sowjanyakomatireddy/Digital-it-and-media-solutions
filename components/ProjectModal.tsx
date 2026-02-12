import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
  onContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContact }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#1A1A1A]/90 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#FDFCF8] rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black hover:rotate-90 transition-all p-2 z-20 bg-white rounded-full shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col">
          {/* Hero Image */}
          <div className="h-64 overflow-hidden relative">
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-8">
              <span className={`${project.tagColor} px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-black shadow-sm`}>
                {project.tag}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-tight">
                {project.title}
              </h2>
              <p className="text-gray-500 font-medium text-base leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Services Delivered</h4>
              <div className="flex flex-wrap gap-2">
                {project.services?.map((service: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FBBF24]" />
                    <span className="text-xs font-bold text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onContact}
                className="bg-black text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:bg-[#FBBF24] hover:text-black group shadow-xl shadow-black/10"
              >
                Start Similar Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onClose}
                className="px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest border border-gray-200 text-gray-500 hover:text-black hover:border-black transition-all"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};