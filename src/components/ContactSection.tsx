import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'saksham.bhargava300@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    soundFx.playClick();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-36 text-center md:px-10 md:py-48">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-300/10 via-transparent to-transparent pointer-events-none" />

      {/* Numbered kicker */}
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-lime-300">
        03 / Contact
      </p>

      {/* Massive headline */}
      <h2 className="text-5xl font-bold leading-[0.95] tracking-tighter md:text-[8vw] text-white">
        Have a problem? <br />
        <span className="text-lime-300">Let’s solve it.</span>
      </h2>

      {/* Big clickable email pill button */}
      <div className="mt-12 flex flex-col items-center gap-3">
        <a
          href={`mailto:${email}`}
          onClick={handleCopyEmail}
          className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-mono text-xs sm:text-sm font-semibold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          <span>{email}</span>
          {copied ? (
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <Check className="w-4 h-4" /> Copied!
            </span>
          ) : (
            <span className="text-zinc-500 group-hover:text-black">
              (click to copy)
            </span>
          )}
        </a>

        <p className="font-mono text-xs text-zinc-500">
          Newton School of Technology · Rishihood Campus, Delhi NCR
        </p>
      </div>

      {/* Social links row */}
      <div className="mt-12 flex justify-center gap-8 font-mono text-xs uppercase tracking-widest text-zinc-400">
        <a
          href="https://github.com/sakshambhargava300"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1"
        >
          <span>GitHub</span>
          <ArrowUpRight className="w-3 h-3 text-lime-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/saksham-bhargava-48217642a/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1"
        >
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3 h-3 text-lime-300" />
        </a>
        <a
          href={`mailto:${email}`}
          className="hover:text-white transition-colors"
        >
          Direct Email
        </a>
      </div>
    </section>
  );
}
