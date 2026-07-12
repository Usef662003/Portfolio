import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../../constants';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useActiveSection } from '../../hooks/useActiveSection';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollPosition(30);
  const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
  const activeId = useActiveSection(sectionIds);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`section flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-card' : 'bg-transparent'
        }`}
        aria-label="Primary"
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-text"
        >
          <span className="text-gradient text-[23px]">YA</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-text'
                      : 'text-text-muted hover:text-text'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA (desktop) */}
        <a
          href={PERSONAL_INFO.resumeUrl}
          download
          className="hidden rounded-full bg-gradient-primary px-5 py-2.5 font-display text-sm font-semibold text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
        >
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 text-text lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="section mt-3 lg:hidden"
          >
            <div className="glass-strong flex flex-col gap-1 rounded-2xl p-4 shadow-card">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-text-muted transition-colors hover:bg-white/5 hover:text-text"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PERSONAL_INFO.resumeUrl}
                download
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-3 font-display text-sm font-semibold text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
