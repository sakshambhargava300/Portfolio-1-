import React, { useState } from 'react';
import { ArrowUpRight, GraduationCap, Award, Compass, ShieldCheck, Activity } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export function AboutSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-28 md:px-10 md:py-36 border-t border-white/10">
      {/* Editorial Number */}
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-lime-300">
        01 / About
      </p>

      {/* Large statement typography */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.35] tracking-tight text-zinc-100 text-balance max-w-4xl">
        I’m a quant researcher turning complex mathematical concepts into clean, high-performance software. Currently a{' '}
        <span className="text-white underline decoration-lime-300 decoration-2 underline-offset-8 font-semibold">
          Quant Research Consultant at WorldQuant
        </span>
        , studying Computer Science & AI at{' '}
        <span className="text-white font-semibold">Newton School of Technology</span>, and focused on algorithmic speed and shipping real products.
      </h2>

      {/* Structured Bento Grid */}
      <div id="education" className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: WorldQuant Consultancy */}
        <div
          onMouseEnter={() => setActiveCard(1)}
          onMouseLeave={() => setActiveCard(null)}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between hover:border-lime-300/50 hover:bg-white/[0.04] transition-all duration-300 group"
        >
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-3">
              <span>RESEARCH CONSULTING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-lime-300" />
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition-colors mb-1">
              WorldQuant
            </h3>
            <p className="font-mono text-xs text-lime-300 mb-3">Quant Research Consultant</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Formulating predictive statistical alphas, running cross-sectional regressions, and evaluating risk-adjusted Sharpe performance.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-zinc-500">
            <span>Factor Modeling</span>
            <span className="text-zinc-300 font-bold">Active</span>
          </div>
        </div>

        {/* Card 2: Newton School of Technology */}
        <div
          onMouseEnter={() => setActiveCard(2)}
          onMouseLeave={() => setActiveCard(null)}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between hover:border-lime-300/50 hover:bg-white/[0.04] transition-all duration-300 group"
        >
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-3">
              <span>UNDERGRADUATE</span>
              <span className="text-zinc-400 font-mono">2023 — Present</span>
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition-colors mb-1">
              Newton School of Tech
            </h3>
            <p className="font-mono text-xs text-lime-300 mb-3">Rishihood Campus, Delhi NCR</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              B.Tech in Computer Science & Artificial Intelligence. Specializing in high-throughput Python pipelines and systems architecture.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-zinc-500">
            <span>CS & AI Major</span>
            <span className="text-zinc-300">Undergraduate</span>
          </div>
        </div>

        {/* Card 3: Maheshwari Public School, Jaipur */}
        <div
          onMouseEnter={() => setActiveCard(3)}
          onMouseLeave={() => setActiveCard(null)}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between hover:border-lime-300/50 hover:bg-white/[0.04] transition-all duration-300 group"
        >
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-3">
              <span>ACADEMIC MERIT</span>
              <span className="text-lime-300 font-bold">91% Aggregate</span>
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition-colors mb-1">
              Maheshwari Public School
            </h3>
            <p className="font-mono text-xs text-lime-300 mb-3">Jaipur, Rajasthan</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Achieved 91% in both Class 10 and Class 12 CBSE Board Examinations. Rigorous foundations in Advanced Calculus, Physics, and Probability.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-zinc-500">
            <span>CBSE Boards</span>
            <span className="text-lime-300 font-bold">91% Distinction</span>
          </div>
        </div>

        {/* Card 4: Beyond The Screen / Cricket */}
        <div
          onMouseEnter={() => setActiveCard(4)}
          onMouseLeave={() => setActiveCard(null)}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between hover:border-lime-300/50 hover:bg-white/[0.04] transition-all duration-300 group"
        >
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-3">
              <span>PASSION & SPORT</span>
              <span className="text-sky-300">Athletics</span>
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition-colors mb-1">
              Cricket & Analytics
            </h3>
            <p className="font-mono text-xs text-sky-300 mb-3">Game Theory · Spatial Physics</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Passionate cricketer modeling seam aerodynamics, corridor bounce vectors, and spatial field placement geometries.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-zinc-500">
            <span>Spatial Strategy</span>
            <span className="text-zinc-300">Kinematics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
