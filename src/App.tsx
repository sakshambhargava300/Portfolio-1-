import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TechMarquee } from './components/TechMarquee';
import { ProjectsSection } from './components/ProjectsSection';
import { StatsSection } from './components/StatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { soundFx } from './utils/soundEffects';

export default function App() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  const handleToggleSound = () => {
    const nextState = soundFx.toggleSound();
    setIsSoundEnabled(nextState);
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-lime-300 selection:text-black">
      {/* Top Navbar */}
      <Navbar
        isSoundEnabled={isSoundEnabled}
        onToggleSound={handleToggleSound}
      />

      <main>
        {/* Hero Section */}
        <Hero onExploreWork={scrollToWork} />

        {/* 01 / About & Education */}
        <AboutSection />

        {/* Tech Stack Marquee Ribbon */}
        <TechMarquee />

        {/* 02 / Featured Work (Clean & Simple) */}
        <ProjectsSection />

        {/* Key Stats */}
        <StatsSection />

        {/* 03 / Contact */}
        <ContactSection />
      </main>

      {/* Footer with Giant Outlined Typography */}
      <Footer />
    </div>
  );
}
