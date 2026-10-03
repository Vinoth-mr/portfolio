/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setResumeOpen(true);
  };

  const handleCloseResume = () => {
    setResumeOpen(false);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-teal-500/30 selection:text-teal-200">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenResume={handleOpenResume}
        onOpenContact={handleScrollToContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={handleOpenResume}
          onOpenContact={handleScrollToContact}
        />
        <About onOpenResume={handleOpenResume} />
        <Experience />
        <Projects />
        <Skills />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Printable / Fullscreen Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}

