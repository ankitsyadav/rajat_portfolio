export const personalInfo = {
  email: 'rajaty2930@gmail.com',
  phone: '+91-9837837902',
  location: 'Greater Noida, Uttar Pradesh, India',
  linkedin: 'https://www.linkedin.com/in/rajatydv2930',
  github: 'https://github.com/rajatydv001',
};

export const heroContent = {
  name: 'Rajat Yadav',
  title: 'Full Stack Developer',
  subtitle: 'Full Stack Developer with 1 year 8 months of experience building production-ready SaaS and client applications with React.js, Next.js, Node.js, and PostgreSQL.',
  techStack: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
};

export const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '1.5+', label: 'Years Exp' },
];

export const featuredProject = {
  id: 1,
  title: 'AI Spend Audit',
  image: '/projects/ai-spend-audit.jpg',
  techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'NextAuth', 'OpenAI API'],
  impact: [
    { value: '8+', label: 'AI Providers' },
    { value: 'RBAC', label: 'Auth & Access' },
    { value: 'Stripe', label: 'Subscriptions' },
  ],
  demoLink: 'https://ai-spend-audit-rouge.vercel.app',
  githubLink: 'https://github.com/rajatydv001/ai-spend-audit',
  browserUrl: 'ai-spend-audit.vercel.app',
  tagline: 'Full-stack SaaS that audits and optimizes AI tool spending across providers — with NextAuth authentication, role-based access, Stripe billing, and OpenAI-powered insights.',
};

export const projects = [
  {
    id: 1,
    title: 'AI Spend Audit',
    category: 'Full Stack',
    image: '/projects/ai-spend-audit.jpg',
    problem: 'Companies using multiple AI tools had no visibility into total spend, leading to wasted budgets across 8+ providers.',
    solution: 'Built a full-stack SaaS app that audits and optimizes AI tool spending, with role-based access control for team accounts and automated spend-analysis insights.',
    impact: 'Reduced AI spend with analytics, automated recommendations, and exportable PDF reports.',
    features: [
      'Multi-provider audit engine tracking spend across AI tools',
      'NextAuth authentication with role-based access control',
      'Stripe subscription billing for multi-tier pricing plans',
      'OpenAI API integration for automated spend-analysis insights',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'NextAuth', 'OpenAI API'],
    demoLink: 'https://ai-spend-audit-rouge.vercel.app',
    githubLink: 'https://github.com/rajatydv001/ai-spend-audit',
    timeline: '8 weeks',
  },
  {
    id: 8,
    title: 'Mall of America Interactive Sales Presentation',
    category: 'Next.js',
    image: '/projects/mall-of-america.jpg',
    problem: 'Mall of America needed a compelling digital presentation to attract retail tenants. Static PDF decks failed to immerse prospects.',
    solution: 'Built a cinematic, single-page app for retail and sponsor pitches using a modular, reusable component architecture with scroll-based animations.',
    impact: 'Interactive sales presentation for North America\'s largest mall featuring 5 responsive, mobile-first sections.',
    features: [
      'Cinematic scroll-based animations with GSAP and Lenis',
      'Modular, reusable component architecture',
      'Seamless Framer Motion transitions',
      'Type-safe Next.js App Router architecture',
    ],
    techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'GSAP', 'Lenis'],
    demoLink: 'https://frontend-wine-chi-26.vercel.app',
    githubLink: 'https://github.com/rajatydv001/mall-of-america-sales-deck',
    timeline: '6 weeks',
  },
  {
    id: 3,
    title: 'NectarNest',
    category: 'React',
    image: '/projects/nectar-nest.jpg',
    problem: 'A small business needed an online store but lacked budget for Shopify or WooCommerce subscriptions.',
    solution: 'Developed a fully responsive e-commerce storefront with a reusable component library to speed up page development, deployed with SEO best practices.',
    impact: 'Zero-cost e-commerce storefront enabling a small business to sell online without platform fees.',
    features: [
      'Reusable component library for rapid page development',
      'Product catalog and shopping cart functionality',
      'Responsive mobile-first layout',
      'Vercel deployment with SEO best practices',
    ],
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Vercel'],
    demoLink: 'https://nectar-nest-gray.vercel.app/',
    githubLink: 'https://github.com/rajatydv001/nectar-nest',
    timeline: '3 weeks',
  },
  {
    id: 2,
    title: 'LeadFlow Pro',
    category: 'Full Stack',
    image: '/projects/leadflow-pro.jpg',
    problem: 'Businesses manually collected leads, researched companies, and created reports — a slow and error-prone process.',
    solution: 'Flask-based system with lead intake, Clearbit API enrichment, web scraping, and branded PDF generation triggered by a single form submission.',
    impact: 'Automated lead capture reducing research time by 80%.',
    features: [
      'Automated Clearbit API company research',
      'Branded PDF audit reports with custom styling',
      'Automated email delivery via SMTP',
      'Google Sheets integration for lead logging',
    ],
    techStack: ['Python', 'Flask', 'JavaScript', 'Clearbit API', 'SMTP'],
    demoLink: 'https://leadflow-pro-orpin.vercel.app',
    githubLink: 'https://github.com/rajatydv001/leadflow-pro',
    timeline: '4 weeks',
  },
  {
    id: 7,
    title: 'Customer Churn Prediction',
    category: 'Python',
    image: '/projects/customer-churn.jpg',
    problem: 'Financial services needed to identify at-risk customers before churning, but lacked actionable insights from raw data.',
    solution: 'Trained Logistic Regression and Decision Tree models on American Express data. Identified churn drivers through feature importance analysis with interactive Tableau dashboards.',
    impact: 'ML model analyzing customer data to predict churn — identified key drivers with published research paper.',
    features: [
      'Data extraction with SQL and Pandas',
      'ML models with Logistic Regression and Decision Trees',
      'Feature importance analysis for churn drivers',
      'Interactive Tableau dashboards',
    ],
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Tableau'],
    demoLink: null,
    githubLink: 'https://github.com/rajatydv001/Churn_Prediction_Project',
    timeline: '5 weeks',
  },
];

export const experience = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'SDLC Corp',
    location: 'Noida, India',
    period: 'Jan 2025 — Present',
    metrics: [
      { value: '15+', label: 'Reusable Components' },
      { value: '20+', label: 'REST Endpoints' },
      { value: '30%', label: 'Faster Page Dev' },
    ],
    highlights: [
      'Developed responsive, production-ready e-commerce and CRM applications using React.js, Next.js, TypeScript, and Tailwind CSS, converting Figma designs into reusable, mobile-first interfaces.',
      'Designed and developed 15+ reusable components including data tables, forms, modals, filters, and dashboard widgets, reducing new-page development time by approximately 30%.',
      'Integrated 20+ REST API endpoints with centralized error handling, validation, loading states, pagination, client-side caching, and reusable API integration patterns.',
      'Implemented authentication, protected routes, RBAC, and application state management using Redux Toolkit, Context API, and custom hooks across client-facing applications.',
      'Improved application performance using code splitting, lazy loading, image optimization, and memoization; followed Git/GitHub, Agile/Scrum, code review, testing, CI/CD, and Vercel deployment workflows.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Context API', 'Tailwind CSS', 'REST APIs', 'Vercel'],
  },
  {
    id: 2,
    role: 'Business Analyst Intern',
    company: 'Stanza Living',
    location: 'Greater Noida, India',
    period: 'Jun 2023 — Dec 2023',
    highlights: [
      'Analyzed customer churn, supply-demand trends, and business KPIs using SQL and Advanced Excel, supporting data-driven reporting.',
      'Built dashboards to identify churn drivers and retention trends and presented insights to cross-functional stakeholders.',
    ],
    technologies: ['SQL', 'Advanced Excel', 'Data Analysis', 'Reporting'],
  },
];

export const education = [
  {
    id: 1,
    degree: 'Master of Business Administration',
    specialization: 'Business Strategy',
    institution: 'Galgotias University',
    period: '2023 — 2025',
    location: 'Greater Noida, India',
  },
  {
    id: 2,
    degree: 'Bachelor of Business Administration',
    specialization: 'Marketing',
    institution: 'Galgotias University',
    period: '2020 — 2023',
    location: 'Greater Noida, India',
  },
];

export const stackCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Redux Toolkit', icon: 'react' },
      { name: 'Context API', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'HTML5 / CSS3', icon: 'html5' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'nodejs' },
      { name: 'Python', icon: 'python' },
      { name: 'Flask', icon: 'flask' },
      { name: 'REST APIs', icon: 'api' },
      { name: 'NextAuth', icon: 'lock' },
      { name: 'JWT', icon: 'lock' },
      { name: 'OAuth', icon: 'lock' },
      { name: 'RBAC', icon: 'lock' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'SQL', icon: 'database' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'GSAP', icon: 'play' },
      { name: 'Framer Motion', icon: 'sparkle' },
      { name: 'Stripe', icon: 'credit' },
      { name: 'Jest', icon: 'play' },
      { name: 'React Testing Library', icon: 'play' },
      { name: 'Postman', icon: 'api' },
      { name: 'CI/CD', icon: 'git' },
    ],
  },
];
