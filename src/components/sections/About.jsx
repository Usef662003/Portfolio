import { motion } from 'framer-motion';
import { Code2, GraduationCap, Layers, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { PERSONAL_INFO } from '../../constants';
import { slideInLeft, staggerContainer, fadeUp } from '../../animations/variants';
import img from '../../Image/img 2.jpeg';

const STATS = [
  { icon: Code2, value: '15+', label: 'Projects Built' },
  { icon: Layers, value: '10+', label: 'Technologies' },
  { icon: Sparkles, value: '3+', label: 'Years Learning' },
  { icon: GraduationCap, value: '1', label: 'Engineering Degree' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into interfaces"
          highlight="interfaces"
          description="A little about my background, how I work, and what drives me."
        />

        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Photo placeholder */}
          <Reveal variants={slideInLeft} className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-primary opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
                <div className="relative flex h-full w-full items-center justify-center">
                  <img
                    src={img}
                    alt="Yousef Ahmed"/>
                </div>
              {/* Corner frame accents */}
              <div className="absolute left-4 top-4 h-10 w-10 rounded-tl-2xl border-l-2 border-t-2 border-white/50" />
              <div className="absolute bottom-4 right-4 h-10 w-10 rounded-br-2xl border-b-2 border-r-2 border-white/50" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl glass-strong px-5 py-4 shadow-card">
              <p className="font-display text-2xl font-bold text-gradient">
                {PERSONAL_INFO.location}
              </p>
              <p className="text-xs text-text-muted">Currently based in</p>
            </div>
          </Reveal>

          {/* Bio + stats */}
          <div>
            <Reveal delay={0.05}>
              <p className="text-base leading-relaxed text-text-muted sm:text-lg">
                I&apos;m a {PERSONAL_INFO.title.toLowerCase()} and{' '}
                {PERSONAL_INFO.degree.toLowerCase()} graduate from{' '}
                {PERSONAL_INFO.university}, based in {PERSONAL_INFO.location}.
                My focus is building interfaces that feel fast, intuitive, and
                considered down to the smallest interaction.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
                My most recent work is{' '}
                <span className="font-semibold text-text">Deep Clone</span>, a
                full-stack AI voice cloning platform where I owned the entire
                frontend and UI/UX — from a multi-voice Script Studio to
                real-time analytics dashboards. I care deeply about clean
                architecture, accessibility, and shipping interfaces that
                hold up under real-world use.
              </p>
            </Reveal>

            {/* Stats grid */}
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {STATS.map(({ icon: Icon, value, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="card group flex flex-col items-start gap-3 p-5 hover:border-primary/40"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary-light transition-colors duration-300 group-hover:bg-primary/20">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-bold text-text">
                      {value}
                    </p>
                    <p className="text-xs text-text-muted">{label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
