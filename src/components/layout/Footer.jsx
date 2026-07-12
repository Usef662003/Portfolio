import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../../constants';

const SOCIALS = [
  { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
  { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-surface/40">
      <div className="section flex flex-col gap-10 py-14">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          {/* Brand */}
          <div>
            <a href="#home" className="font-display text-xl font-bold text-text">
              Yousef<span className="text-gradient">.dev</span>
            </a>
            <p className="mt-2 max-w-sm text-sm text-text-muted">
              Frontend Developer crafting fast, accessible interfaces from
              Cairo, Egypt.
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-muted transition-colors hover:text-primary-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials + back to top */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary-light"
              >
                <Icon size={17} />
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-white transition-transform duration-300 hover:-translate-y-1"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-text-muted sm:flex-row">
          <p>&copy; {year} Yousef Ahmed. All rights reserved.</p>
          <p>Built with React, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
