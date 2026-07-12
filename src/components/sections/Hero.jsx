import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { staggerContainer, fadeUp, scaleIn } from '../../animations/variants';
import FloatingShape from '../ui/FloatingShape';
import img from '../../Image/WhatsApp Image 2026-07-02 at 12.44.15 AM (1).jpeg';

const SOCIALS = [
  { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
  { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
  { icon: MessageCircle, href: PERSONAL_INFO.whatsapp, label: 'WhatsApp' },
  { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
];

export default function Hero() {
  const parallax = useMouseParallax();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Ambient animated background */}
      <div className="absolute inset-0 bg-gradient-mesh" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:32px_32px]"
        aria-hidden="true"
      />

      {/* Floating shapes with mouse parallax */}
      <div
        style={{
          transform: `translate3d(${parallax.x * 18}px, ${parallax.y * 18}px, 0)`,
        }}
        className="transition-transform duration-300 ease-out"
      >
        <FloatingShape
          size={420}
          className="-left-32 top-16 opacity-60"
          gradient="from-primary/40 to-transparent"
          animationClass="animate-float-slow"
        />
      </div>
      <div
        style={{
          transform: `translate3d(${parallax.x * -14}px, ${parallax.y * -14}px, 0)`,
        }}
        className="transition-transform duration-300 ease-out"
      >
        <FloatingShape
          size={360}
          className="right-[-6rem] top-40 opacity-50"
          gradient="from-secondary/40 to-transparent"
          animationClass="animate-float-delayed"
        />
      </div>
      <FloatingShape
        size={280}
        className="bottom-10 left-1/3 opacity-30"
        gradient="from-accent/30 to-transparent"
        animationClass="animate-float"
      />

      <div className="section relative grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Text column */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          <motion.span
            variants={fadeUp}
            className="eyebrow mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 animate-pulse-slow rounded-full bg-accent" />
            Available for new opportunities
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-[1.1] text-text sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m{' '}
            <span className="relative inline-block">
              <span className="text-gradient">{PERSONAL_INFO.name}</span>
            </span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-2xl font-semibold text-text-muted sm:text-3xl lg:text-4xl"
          >
            {PERSONAL_INFO.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
<a
  href={PERSONAL_INFO.resumeUrl}
  download="Yousef_Ahmed_CV.pdf"
  className="btn-primary"
>
  <Download size={17} />
  <span>Download Resume</span>
</a>
            <a href="#contact" className="btn-secondary">
              <Mail size={17} />
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-muted backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary-light hover:shadow-glow"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual column */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/20" />
          <div className="absolute inset-8 rounded-full border border-secondary/20" />
          <div className="relative flex h-72 w-72 items-center justify-center rounded-[2.5rem] bg-gradient-primary p-2 shadow-glow">

            {/* Profile Image */}
            <div className="h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/5 to-white/10">
              <img
                src={img}
                alt="Yousef Ahmed"
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Tech Badge */}
            <div className="absolute -bottom-5 -right-5 flex items-center gap-2 rounded-2xl glass-strong px-4 py-3 shadow-card">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="text-xs font-medium text-text">
                React &middot; JavaScript
              </span>
            </div>

            {/* Location Badge */}
            <div className="absolute -top-6 -left-6 rounded-2xl glass-strong px-4 py-3 shadow-card">
              <span className="text-xs font-medium text-text">
                Cairo, Egypt 🇪🇬
              </span>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <ArrowDown size={12} />
        </motion.span>
      </motion.a>
    </section>
  );
}
