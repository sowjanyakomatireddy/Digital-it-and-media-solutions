import React from 'react';
import { Linkedin, Instagram, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onPathChange: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPathChange }) => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <button onClick={() => onPathChange('home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity group text-left">
              <div className="w-14 h-14 group-hover:scale-105 transition-transform rounded-full overflow-hidden flex items-center justify-center bg-transparent">
                <img
                  src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1770092496/image_xr4lqg.png"
                  alt="Digital IT & Media Logo"
                  className="w-full h-full object-cover scale-[1.3] transform-gpu"
                />
              </div>
              <span className="text-2xl font-black tracking-tight">Digital IT & Media</span>
            </button>
            <p className="text-gray-500 font-medium leading-relaxed max-w-[240px]">
              Building high-performance brands through creative intelligence and strategic precision.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold text-gray-400 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><button onClick={() => onPathChange('home')} className="hover:text-[#FBBF24] transition-colors">Home</button></li>
              <li><button onClick={() => onPathChange('about-page')} className="hover:text-[#FBBF24] transition-colors">About Us</button></li>
              <li><button onClick={() => onPathChange('services')} className="hover:text-[#FBBF24] transition-colors">Services</button></li>
              <li><button onClick={() => onPathChange('projects')} className="hover:text-[#FBBF24] transition-colors">Projects</button></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold text-gray-400 uppercase tracking-widest text-xs">Connect</h4>
            <ul className="space-y-5 text-sm font-bold">
              <li>
                <a href="tel:+91 9652352635" className="flex items-center gap-3 hover:text-[#FBBF24] transition-colors">
                  <Phone className="w-4 h-4 text-gray-500" /> +91 9652352635
                </a>
              </li>
              <li>
                <a href="mailto:hr@digital-itsolutions.com" className="flex items-center gap-3 hover:text-[#FBBF24] transition-colors">
                  <Mail className="w-4 h-4 text-gray-500" /> hr@digital-itsolutions.com
                </a>
              </li>
              <li><button onClick={() => onPathChange('contact')} className="hover:text-[#FBBF24] transition-colors">Contact Support</button></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold text-gray-400 uppercase tracking-widest text-xs">Social Presence</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/digital-it-media-solutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/digital_media_solutionss/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
          <p>© 2026 Digital IT & Media Solutions. All Rights Reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};