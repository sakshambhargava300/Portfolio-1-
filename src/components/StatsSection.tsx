import React from 'react';

export function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-6xl divide-y md:divide-y-0 md:divide-x divide-white/10 md:grid-cols-3">
        {/* Stat 1: 91% Boards */}
        <div className="px-4 py-14 text-center md:px-10">
          <p className="text-7xl font-bold tracking-tighter text-white md:text-8xl">
            <span>91</span>
            <span className="text-lime-300">%</span>
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
            CBSE Boards Class 10 & 12
          </p>
        </div>

        {/* Stat 2: Newton School of Technology */}
        <div className="px-4 py-14 text-center md:px-10 flex flex-col justify-center">
          <p className="text-5xl sm:text-6xl font-bold tracking-tighter text-white md:text-7xl">
            <span>NST</span>
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
            Newton School of Technology · Rishihood
          </p>
        </div>

        {/* Stat 3: WorldQuant */}
        <div className="px-4 py-14 text-center md:px-10 flex flex-col justify-center">
          <p className="text-4xl sm:text-5xl font-bold tracking-tighter text-white md:text-6xl">
            <span>World</span>
            <span className="text-lime-300">Quant</span>
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
            Quant Research Consultant
          </p>
        </div>
      </div>
    </section>
  );
}
