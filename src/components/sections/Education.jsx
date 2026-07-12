import { GraduationCap } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { EDUCATION } from '../../data/experience';

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="section">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          highlight="foundation"
        />

        <div className="mx-auto max-w-3xl">
          {EDUCATION.map((edu, index) => (
            <Reveal key={edu.id} delay={index * 0.1}>
              <div className="card mb-5 flex flex-col gap-5 p-7 sm:flex-row sm:items-start">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                  <GraduationCap size={24} className="text-white" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-semibold text-text">
                      {edu.degree}
                    </h3>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-secondary">
                    {edu.institution}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
