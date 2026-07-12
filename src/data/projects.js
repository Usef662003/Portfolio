// Featured projects shown in the Projects section.
// `image` paths point to /src/assets — swap in real screenshots later.

export const PROJECTS = [
  {
    id: 'deep-clone-ai',
    title: 'Deep Clone AI',
    subtitle: 'AI Voice Cloning & Dubbing Platform',
    description:
      'An AI-powered voice cloning and dubbing platform capable of generating emotionally accurate, translated speech while preserving the original speaker\'s identity — built with a multi-voice Script Studio and real-time generation analytics.',
    tech: ['React', 'Tailwind CSS', 'Redux Toolkit', 'Django', 'Python', 'OpenAI API'],
    liveUrl: 'https://deep-clone-ai.vercel.app/',
    githubUrl: 'https://github.com/Usef662003/DeepClone',
    featured: true,
    tag: 'AI Platform',
  features: [
    'Responsive User Interface',
    'Authentication Pages',
    'Voice Management Dashboard',
    'Script Studio Interface',
    'Audio Upload & Preview',
    'Generation Results View',
    'Modern UI/UX Design',
    'API Integration',
  ],
  },
  {
    id: 'ecommerce-app',
    title: 'E-Commerce Web Application',
    subtitle: 'Full-Featured Online Store',
    description:
      'A complete e-commerce experience covering authentication, product catalog and categories, wishlist, cart, and a streamlined checkout flow — designed with a fully responsive, accessible UI from the ground up.',
    tech: ['React', 'Tailwind CSS', 'Axios', 'React Query'],
    liveUrl: 'https://e-commerce-web-application-im1g-lemon.vercel.app/',
    githubUrl: 'https://github.com/Usef662003/E-Commerce-Web-Application',
    featured: true,
    tag: 'Web Application',
  features: [
    'Authentication',
    'Product Listing',
    'Product Details',
    'Categories',
    'Search & Filtering',
    'Wishlist',
    'Shopping Cart',
    'Responsive UI',
  ],
  },

  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    subtitle: 'Personal Developer Portfolio',
    description:
      'This very site — a premium, glassmorphic dark-themed portfolio built with React, Tailwind CSS, and Framer Motion, engineered for performance, accessibility, and a distinctive visual identity.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Usef662003/Portfolio',
    featured: false,
    tag: 'Personal Site',
  features: [
    'Modern Portfolio Design',
    'Responsive Layout',
    'Dark Mode UI',
    'Smooth Animations',
    'Projects Showcase',
    'Skills Section',
    'Contact Form',
    'Performance Optimized',
  ],
  },
];