import React, { useState, useEffect } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Footer } from './components/Footer';

import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ConceptsSection } from './sections/ConceptsSection';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { NotesSection } from './sections/NotesSection';
import { ContactSection } from './sections/ContactSection';

import { BenchRotationModal } from './components/BenchRotationModal';
import { NoteModal } from './components/NoteModal';
import { ResumeModal } from './components/ResumeModal';
import { NotFoundPage } from './pages/NotFoundPage';

import { useActiveSection } from './hooks/useActiveSection';

export function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBenchCaseStudyOpen, setIsBenchCaseStudyOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [is404, setIs404] = useState(false);

  const sectionIds = [
    'home',
    'me',
    'works',
    'skills',
    'experience',
    'certifications',
    'notes',
    'contact'
  ];

  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#404') {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenCaseStudy = (projectId) => {
    if (projectId === 'bench-rotation') {
      setIsBenchCaseStudyOpen(true);
    }
  };

  const navLinks = [
    { id: 'me', label: 'ME' },
    { id: 'works', label: 'WORKS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'notes', label: 'NOTES' },
    { id: 'contact', label: 'CONTACT' },
  ];

  if (is404) {
    return <NotFoundPage onReturnHome={() => (window.location.hash = '')} />;
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic Ambient Background */}
      <AmbientBackground />

      {/* Global Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Mobile Fullscreen Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Content Sections */}
      <main className="relative z-10">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onOpenCaseStudy={handleOpenCaseStudy} />
        <ConceptsSection />
        <EducationSection />
        <ExperienceSection />
        <CertificationsSection />
        <AchievementsSection />
        <NotesSection onOpenNote={(note) => setSelectedNote(note)} />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Flagship Bench Rotation Case Study Modal */}
      <BenchRotationModal
        isOpen={isBenchCaseStudyOpen}
        onClose={() => setIsBenchCaseStudyOpen(false)}
      />

      {/* Developer Note Reading Modal */}
      <NoteModal
        note={selectedNote}
        onClose={() => setSelectedNote(null)}
      />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
