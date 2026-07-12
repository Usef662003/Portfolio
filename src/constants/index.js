// Central place for static, non-content configuration values.
// Keeping these separate from "data" (projects/skills) makes it obvious
// what's site config vs. what's editorial content.

export const PERSONAL_INFO = {
  name: 'Yousef Ahmed',
  title: 'Frontend Developer',
  degree: 'Bachelor of Computer Engineering',
  university: 'Modern Academy for Engineering and Technology',
  location: 'Cairo, Egypt',
  email: 'yousef662003@gmail.com',
  github: 'https://github.com/Usef662003',
  linkedin: 'https://www.linkedin.com/in/yousef-ahmed-951b06327/', // placeholder
  whatsapp: 'https://wa.me/01289645338', // placeholder
  resumeUrl: "./CV/Yousef_Ahmed_CV.pdf",
  tagline:
    'I build fast, accessible, and thoughtfully designed interfaces — turning complex product ideas into interactions that feel effortless.',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

// EmailJS config placeholders — replace with real IDs from your EmailJS dashboard.
export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
};
