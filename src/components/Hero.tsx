import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

interface HeroProps {
  onExploreWork: () => void;
}

export function Hero({ onExploreWork }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-8 px-4 md:px-10 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-lime-400/10 via-cyan-400/5 to-transparent blur-[120px] pointer-events-none -z-10"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 30}px), calc(-50% + ${mousePos.y * 30}px))`,
        }}
      />

      {/* Top info row */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime-300">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-300" />
            <span>Quant Research Consultant</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-3xl leading-[1.15] text-balance">
            I build fast, algorithmic systems, quantitative models and clean software.
          </h1>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            Consultant at <strong className="text-white">WorldQuant</strong> · CS & AI at{' '}
            <strong className="text-white">Newton School of Technology</strong>.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
          <div className="flex items-center gap-2.5 rounded-full border border-lime-300/30 bg-lime-300/[0.05] px-4 py-2 font-mono text-xs text-lime-300 shadow-[0_0_15px_rgba(190,242,100,0.15)]">
            <span className="w-2 h-2 rounded-full bg-lime-300 animate-pulse shadow-[0_0_8px_#bef264]" />
            <span>Available for collaborations</span>
          </div>
          <span className="font-mono text-[11px] text-zinc-500">
            Python · VectorBT · React · AI
          </span>
        </div>
      </div>

      {/* Massive Brutalist Typographic Display */}
      <div className="my-auto py-12 md:py-16 select-none overflow-hidden text-center md:text-left">
        <h2
          className="text-[clamp(3.2rem,13.8vw,9.6rem)] font-black leading-[0.82] tracking-[-0.04em] text-white hover:text-lime-300 transition-colors duration-500 whitespace-nowrap cursor-default pr-4"
          style={{
            transform: `translateX(${mousePos.x * -6}px)`,
          }}
        >
          SAKSHAM
        </h2>
      </div>

      {/* Bottom Hero Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-xs text-zinc-400">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="text-zinc-200">WorldQuant Consultant</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-200">Newton School of Tech</span>
          <span className="text-zinc-600">·</span>
          <span className="text-lime-300 font-bold">Quantitative Systems</span>
        </div>

        <button
          type="button"
          onClick={() => {
            soundFx.playClick();
            onExploreWork();
          }}
          className="flex items-center gap-2 text-zinc-300 hover:text-lime-300 transition-colors group cursor-pointer"
        >
          <span>Explore selected work</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
