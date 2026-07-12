import { Briefcase } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { EXPERIENCE } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-surface/20">
      <div className="section">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've applied my craft"
          highlight="craft"
          align="left"
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical timeline rail */}
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          {EXPERIENCE.map((exp, index) => (
            <Reveal key={exp.id} delay={index * 0.1} className="relative mb-10 pl-16 last:mb-0">
              <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                <Briefcase size={18} className="text-white" />
              </span>

              <div className="card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-text">
                    {exp.role}
                  </h3>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-secondary">
                  {exp.company} &middot; {exp.type}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 text-sm leading-relaxed text-text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
