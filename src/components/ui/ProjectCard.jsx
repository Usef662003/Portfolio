import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';

/**
 * Project showcase card. `featured` projects render slightly larger
 * with a gradient banner; standard projects render in a compact grid.
 */
export default function ProjectCard({ project, index = 0 }) {
  const { title, subtitle, description, tech, liveUrl, githubUrl, tag, features } =
    project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="card group relative flex h-full flex-col overflow-hidden p-0 hover:border-primary/40 hover:shadow-glow"
    >
      {/* Banner */}
      <div className="relative h-40 w-full overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_55%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px]" />
        <span className="absolute right-4 top-4 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {tag}
        </span>
        <span className="absolute bottom-4 left-5 font-display text-2xl font-bold text-white/95">
          {title}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-primary-light">{subtitle}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
          {description}
        </p>

        {features && (
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-1.5 text-xs text-text-muted"
              >
                <CheckCircle2 size={13} className="shrink-0 text-accent" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3 border-t border-white/5 pt-5">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
          >
            <Github size={15} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
