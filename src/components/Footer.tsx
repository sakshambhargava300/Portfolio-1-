import React from 'react';
import { soundFx } from '../utils/soundEffects';

export function Footer() {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="overflow-hidden px-4 pt-8 md:px-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
        <div className="flex items-center gap-6">
          <span>© {new Date().getFullYear()} Saksham Bhargava</span>
          <a
            href="https://github.com/sakshambhargava300"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/saksham-bhargava-48217642a/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
        <button
          type="button"
          onClick={scrollToTop}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Back to top ↑
        </button>
      </div>

      {/* Giant outline text across the bottom */}
      <p
        aria-hidden="true"
        className="mt-6 whitespace-nowrap text-[clamp(3.2rem,14vw,9.8rem)] font-bold leading-[0.8] tracking-[-0.04em] text-transparent text-stroke-zinc pr-4"
      >
        SAKSHAM
      </p>
    </footer>
  );
}
