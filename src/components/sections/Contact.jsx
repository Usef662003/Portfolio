import { Mail, Github, Linkedin, MessageCircle, MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import ContactForm from '../ui/ContactForm';
import { PERSONAL_INFO } from '../../constants';
import { slideInLeft } from '../../animations/variants';

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@Usef662003',
    href: PERSONAL_INFO.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: PERSONAL_INFO.linkedin,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Message me',
    href: PERSONAL_INFO.whatsapp,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative bg-surface/20">
      <div className="section">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          highlight="great"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact info */}
          <Reveal variants={slideInLeft} className="flex flex-col gap-4">
            {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-center gap-4 p-5 hover:border-primary/40 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-light transition-colors group-hover:bg-gradient-primary group-hover:text-white">
                  <Icon size={19} />
                </span>
                <div>
                  <p className="text-xs text-text-muted">{label}</p>
                  <p className="font-medium text-text">{value}</p>
                </div>
              </a>
            ))}

            <div className="card flex items-center gap-4 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MapPin size={19} />
              </span>
              <div>
                <p className="text-xs text-text-muted">Location</p>
                <p className="font-medium text-text">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
