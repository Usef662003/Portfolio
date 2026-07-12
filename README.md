# Yousef Ahmed — Portfolio

A premium, fully responsive personal portfolio built with React 19, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- Dark, glassmorphic UI with blue/cyan gradient accents
- Animated hero with floating shapes and mouse parallax
- Scroll-reveal animations throughout (Framer Motion)
- Skills section with animated progress bars (Frontend / Tools tabs)
- Featured projects grid with live demo + GitHub links
- Experience timeline and education section
- Contact form wired to EmailJS
- Fully responsive, accessible (visible focus states, semantic markup, reduced-motion support), and SEO-ready (meta tags, OpenGraph, robots.txt)
- Code-split bundles (vendor chunks for React, Framer Motion, icons) for fast loads

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

## 🔧 Configuration

Before deploying, update the following:

1. **Personal info** — `src/constants/index.js`
   - Email, LinkedIn URL, WhatsApp number, GitHub (already set), resume path
2. **EmailJS** — `src/constants/index.js` → `EMAILJS_CONFIG`
   - Create a free account at [emailjs.com](https://www.emailjs.com/), then set `serviceId`, `templateId`, and `publicKey`
3. **Resume PDF** — drop your CV at `public/Yousef_Ahmed_CV.pdf` (matches the `resumeUrl` in constants)
4. **OG image** — add `public/og-image.png` (1200×630) for social share previews
5. **Projects / Skills / Experience content** — edit files in `src/data/`

## 📁 Folder Structure

```
src/
 ├─ components/
 │   ├─ layout/       # Navbar, Footer
 │   ├─ ui/            # Reusable primitives (Reveal, SectionHeading, SkillBar, ProjectCard, ContactForm, FloatingShape)
 │   └─ sections/      # Page sections (Hero, About, Skills, Projects, Experience, Education, Contact)
 ├─ pages/             # Route-level pages (Home, NotFound)
 ├─ layouts/           # MainLayout (Navbar + Footer wrapper)
 ├─ hooks/             # useScrollPosition, useActiveSection, useMouseParallax
 ├─ context/           # Reserved for future global state
 ├─ data/              # skills.js, projects.js, experience.js
 ├─ constants/         # Site-wide config (personal info, nav links, EmailJS config)
 ├─ animations/        # Shared Framer Motion variants
 └─ utils/             # Reserved for helper functions
```

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Background | `#0F172A` |
| Surface | `#1E293B` |
| Primary | `#3B82F6` |
| Secondary | `#06B6D4` |
| Accent | `#22C55E` |
| Text | `#F8FAFC` |
| Muted Text | `#94A3B8` |
| Display font | Poppins |
| Body font | Inter |

## 🛠 Tech Stack

React 19 · Vite · Tailwind CSS · Framer Motion · React Icons · Lucide React · React Router · EmailJS · Swiper.js
