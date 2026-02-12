
import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activePath: string;
  onPathChange: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePath, onPathChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About Us', path: 'about-page' },
    { name: 'Services', path: 'services' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavClick = (path: string) => {
    onPathChange(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 md:py-6 bg-[#FDFCF8]/95 backdrop-blur-md w-full max-w-full overflow-hidden border-b border-gray-100 shadow-sm">
      {/* Brand */}
      <button
        onClick={() => handleNavClick('home')}
        className="flex items-center gap-3 hover:opacity-80 transition-opacity group flex-shrink-0"
      >
        <div className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-105 transition-transform flex items-center justify-center rounded-full overflow-hidden bg-white shadow-sm border border-gray-100">
          <img
            src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1770092496/image_xr4lqg.png"
            alt="Digital IT & Media Logo"
            className="w-full h-full object-cover scale-[1.25] transform-gpu"
          />
        </div>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[14px] sm:text-xl font-black tracking-tight text-[#1A1A1A]">
            Digital IT & Media Solutions
          </span>
          {/* <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest hidden sm:block">Solutions</span> */}
        </div>
      </button>

      {/* Centered Navigation Pill - Desktop Only */}
      <div className="hidden md:flex items-center gap-1 lg:gap-2 px-2 py-1.5 rounded-full border border-gray-200 bg-white/50 shadow-sm">
        {navLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => handleNavClick(link.path)}
            className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-full transition-all whitespace-nowrap ${activePath === link.path
              ? 'bg-[#1A1A1A] text-white shadow-md'
              : 'text-gray-500 hover:text-black hover:bg-gray-100/50'
              }`}
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Action Button & Toggle */}
      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
        <button
          onClick={() => handleNavClick('contact')}
          className="hidden sm:inline-flex bg-[#FBBF24] text-black px-7 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-black hover:text-[#FBBF24] transition-all shadow-md active:scale-95"
        >
          Work With Us
        </button>
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 active:scale-90"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-5 h-5 text-[#1A1A1A]" /> : <Menu className="w-5 h-5 text-[#1A1A1A]" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-6 flex flex-col gap-3 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-300 z-50">
          <div className="flex flex-col gap-1 mb-2">
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] px-4">Menu</span>
          </div>
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`text-left text-base font-bold uppercase tracking-widest p-4 rounded-2xl transition-all ${activePath === link.path
                ? 'bg-black text-[#FBBF24] shadow-lg translate-x-1'
                : 'text-gray-500 hover:text-black hover:bg-gray-50'
                }`}
            >
              {link.name}
            </button>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-[#FBBF24] text-black py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-lg active:scale-[0.98] transition-all"
            >
              Get Started Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
