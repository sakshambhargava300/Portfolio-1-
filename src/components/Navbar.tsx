import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

interface NavbarProps {
  isSoundEnabled: boolean;
  onToggleSound: () => void;
}

export function Navbar({ isSoundEnabled, onToggleSound }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  // Live ticking clock for IST (UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeStr(now.toLocaleTimeString('en-GB', options) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundFx.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-10 flex items-center justify-between gap-6">
        {/* Brand & Live Clock */}
        <div className="flex items-center gap-4">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              soundFx.playClick();
            }}
            className="font-mono text-xs uppercase tracking-widest text-zinc-200 hover:text-white transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-lime-300 shadow-[0_0_10px_#bef264] animate-pulse" />
            <span className="font-bold">Saksham Bhargava</span>
          </a>

          {timeStr && (
            <span className="hidden xl:inline-block font-mono text-[11px] text-zinc-500 pl-4 border-l border-white/10">
              {timeStr}
            </span>
          )}
        </div>

        {/* Status / WorldQuant Consultant */}
        <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-300" />
          <span className="text-zinc-300">Quant Research Consultant</span>
          <span className="text-zinc-600">·</span>
          <span className="text-lime-300 font-semibold">WorldQuant</span>
        </div>

        {/* Navigation links & controls */}
        <div className="flex items-center gap-5">
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-white transition-colors py-1 relative hover:text-lime-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Sound toggle with animated equalizer bars */}
          <button
            type="button"
            onClick={() => {
              onToggleSound();
              soundFx.playClick();
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full font-mono text-xs transition-all cursor-pointer border ${
              isSoundEnabled
                ? 'bg-lime-300/15 border-lime-300/40 text-lime-300 shadow-[0_0_15px_rgba(190,242,100,0.25)]'
                : 'bg-white/[0.04] border-white/10 text-zinc-500 hover:text-zinc-200'
            }`}
            title={isSoundEnabled ? 'Audio Active ♪' : 'Turn Sound On'}
            aria-label="Toggle sound feedback"
          >
            {isSoundEnabled ? (
              <div className="flex items-end gap-0.5 h-3 w-3">
                <span className="w-0.5 bg-lime-300 animate-[pulse_0.6s_ease-in-out_infinite] h-full" />
                <span className="w-0.5 bg-lime-300 animate-[pulse_0.4s_ease-in-out_infinite_0.2s] h-2/3" />
                <span className="w-0.5 bg-lime-300 animate-[pulse_0.8s_ease-in-out_infinite_0.4s] h-4/5" />
              </div>
            ) : (
              <VolumeX className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline text-[11px] font-mono">
              {isSoundEnabled ? 'Sound On' : 'Mute'}
            </span>
          </button>

          <a
            href="mailto:saksham.bhargava300@gmail.com"
            onClick={() => soundFx.playClick()}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 font-mono text-xs font-semibold text-black transition-transform hover:scale-105 active:scale-95 shadow-md"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 font-mono text-sm uppercase tracking-widest text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-lime-300 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10">
              <a
                href="mailto:saksham.bhargava300@gmail.com"
                className="inline-block w-full text-center rounded-full bg-white px-5 py-2.5 font-mono text-xs text-black font-semibold"
              >
                saksham.bhargava300@gmail.com
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
