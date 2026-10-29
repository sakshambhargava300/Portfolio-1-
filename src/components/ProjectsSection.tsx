import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

interface Project {
  num: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      num: '01',
      title: 'AlphaStream Engine',
      tagline: 'Quantitative Research · Python',
      description:
        'A high-throughput algorithmic backtesting engine in Python. Evaluates cross-sectional alpha factor signals using parallel vectorized operations and purged cross-validation.',
      image: '/src/assets/images/quant_lab_visual_1793266915718.jpg',
      tech: ['Python', 'VectorBT', 'Numba JIT', 'NumPy'],
      githubUrl: 'https://github.com/sakshambhargava300/alphastream-engine',
      liveUrl: 'https://github.com/sakshambhargava300/alphastream-engine',
    },
    {
      num: '02',
      title: 'Nexus Market Terminal',
      tagline: 'Market Microstructure · WebGL',
      description:
        'Interactive financial engineering tool calculating closed-form Black-Scholes Greeks and rendering real-time 3D implied volatility surfaces directly in the browser.',
      image: '/src/assets/images/quant_hero_visual_1793266915819.jpg',
      tech: ['TypeScript', 'WebGL Canvas', 'Financial Math'],
      githubUrl: 'https://github.com/sakshambhargava300/nexus-quant-terminal',
      liveUrl: 'https://github.com/sakshambhargava300/nexus-quant-terminal',
    },
    {
      num: '03',
      title: 'VibeCode Studio',
      tagline: 'Developer Tooling · AI',
      description:
        'A rapid prototyping workspace that pairs LLM agent workflows with strict design systems and automated type validation to turn ideas into working applications quickly.',
      image: '/src/assets/images/vibe_coding_visual_1793266916498.jpg',
      tech: ['TypeScript', 'React 19', 'Vite', 'Tailwind CSS'],
      githubUrl: 'https://github.com/sakshambhargava300/vibecode-studio',
      liveUrl: 'https://github.com/sakshambhargava300/vibecode-studio',
    },
    {
      num: '04',
      title: 'CricketKinematics',
      tagline: 'Sports Analytics · Physics',
      description:
        'A sports intelligence model applying 3D fluid drag and Magnus seam mechanics to analyze ball trajectory vectors and optimize field placement strategy.',
      image: '/src/assets/images/cricket_analytics_visual_1793266916589.jpg',
      tech: ['Python', 'SciPy', 'Kinematics', 'Data Modeling'],
      githubUrl: 'https://github.com/sakshambhargava300/cricket-strategy-telemetry',
      liveUrl: 'https://github.com/sakshambhargava300/cricket-strategy-telemetry',
    },
  ];

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24 md:px-10 md:py-32">
      {/* Simple, clean header */}
      <div className="mb-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-lime-300">
          02 / Projects
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Featured Work
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-lg">
          Selected algorithmic systems, Python tools, and quantitative projects.
        </p>
      </div>

      {/* Clean, straightforward 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <article
            key={p.num}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-lime-300/40 hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* Visual thumbnail */}
            <div className="aspect-[16/10] overflow-hidden bg-zinc-950 relative">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>

            {/* Info */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-lime-300 transition-colors">
                    <span className="mr-2.5 font-mono text-xs text-zinc-500">{p.num}</span>
                    {p.title}
                  </h3>

                  <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Code</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-lime-300" />
                    </a>
                  </div>
                </div>

                <p className="mt-1 font-mono text-xs text-zinc-400">
                  {p.tagline}
                </p>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Clean tech badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-0.5 font-mono text-xs text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
