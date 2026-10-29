import React from 'react';

export function TechMarquee() {
  const stackItems = [
    'Python',
    'VectorBT',
    'NumPy',
    'Pandas',
    'Quant Research',
    'TypeScript',
    'Next.js',
    'SciPy',
    'Vibe Coding',
    'Numba JIT',
    'Algorithmic Thinking',
    'WorldQuant Consultant',
    'Newton School of Tech',
    '91% CBSE Boards',
  ];

  return (
    <section aria-label="Tech stack" className="overflow-hidden border-y border-white/10 py-8 bg-black/40">
      <div className="animate-marquee flex gap-10 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-600 select-none">
        {/* Loop twice for smooth infinite loop */}
        {[...stackItems, ...stackItems].map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-10 whitespace-nowrap transition-colors hover:text-white"
          >
            <span>{item}</span>
            <span className="text-lime-300 font-normal">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
