
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { AboutUs } from './components/AboutUs';
import { AboutUsPage } from './components/AboutUsPage';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Industries } from './components/Industries';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Brochure } from './components/Brochure';
import { GetStartedModal } from './components/GetStartedModal';
import { ProjectModal } from './components/ProjectModal';
import { ResponsiveShowcase } from './components/ResponsiveShowcase';
import { Monitor } from 'lucide-react';

const App: React.FC = () => {
  const [activePath, setActivePath] = useState('home');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Ensure page starts at top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePath]);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const handlePathChange = (path: string) => {
    if (path === 'contact') {
      setIsGetStartedOpen(true);
    } else {
      setActivePath(path);
    }
  };

  const getPageContent = () => {
    switch (activePath) {
      case 'showcase':
        return <ResponsiveShowcase onBack={() => setActivePath('home')} />;
      case 'about-page':
        return (
          <div className="pt-20">
            <AboutUsPage />
            <Process />
            <ContactSection onOpenModal={() => setIsGetStartedOpen(true)} />
          </div>
        );
      case 'services':
        return (
          <div className="pt-20">
            <Services onServiceClick={() => setIsGetStartedOpen(true)} />
            <Process />
            <ContactSection onOpenModal={() => setIsGetStartedOpen(true)} />
          </div>
        );
      case 'projects':
        return (
          <div className="pt-20">
            <Projects onProjectClick={handleProjectClick} onViewAll={() => handlePathChange('projects')} />
            <Testimonials />
            <ContactSection onOpenModal={() => setIsGetStartedOpen(true)} />
          </div>
        );
      case 'home':
      default:
        return (
          <>
            <Hero onOpenGetStarted={() => setIsGetStartedOpen(true)} />
            <AboutUs onLearnMore={() => handlePathChange('about-page')} />
            <WhyUs onOpenGetStarted={() => setIsGetStartedOpen(true)} />
            <Process />
            <Services onServiceClick={() => setIsGetStartedOpen(true)} />
            <Industries />
            <Projects onProjectClick={handleProjectClick} onViewAll={() => handlePathChange('projects')} />
            <Pricing onOpenGetStarted={() => setIsGetStartedOpen(true)} />
            <Testimonials />
            <FAQ />
            <ContactSection onOpenModal={() => setIsGetStartedOpen(true)} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8]">
      {activePath !== 'showcase' && (
        <Navbar activePath={activePath} onPathChange={handlePathChange} />
      )}

      <main className="transition-all duration-500 ease-in-out">
        {getPageContent()}
      </main>

      {activePath !== 'showcase' && (
        <Footer onPathChange={handlePathChange} />
      )}



      {/* Floating Brochure Button - Only visible in standard pages */}
      {activePath !== 'showcase' && (
        <button
          onClick={() => setIsBrochureOpen(true)}
          className="fixed bottom-8 left-4 md:left-8 z-40 bg-black text-white px-4 md:px-6 py-3 md:py-4 rounded-full shadow-2xl flex items-center gap-2 md:gap-3 hover:bg-[#FBBF24] hover:text-black transition-all group border-2 border-white/10"
        >
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/10">
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Digital Brochure</span>
        </button>
      )}

      {/* Interactive Brochure Modal */}
      {isBrochureOpen && <Brochure onClose={() => setIsBrochureOpen(false)} />}

      {/* Lead Generation Modal */}
      {isGetStartedOpen && <GetStartedModal onClose={() => setIsGetStartedOpen(false)} />}

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onContact={() => {
            setSelectedProject(null);
            setIsGetStartedOpen(true);
          }}
        />
      )}
    </div>
  );
};

export default App;


