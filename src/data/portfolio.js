export const personalInfo = {
  name: 'RAJAT YADAV',
  title: 'Software Engineer',
  email: 'rajaty2930@gmail.com',
  location: 'Noida, India',
  linkedin: 'https://www.linkedin.com/in/rajatydv2930',
  github: 'https://github.com/rajatydv001',
};

export const heroContent = {
  name: 'Rajat Yadav',
  title: 'Frontend Engineer building high-performance React & Next.js applications.',
  subtitle: 'Focused on performance, scalability, and exceptional user experiences.',
  summary: 'I build performant, scalable web applications using React, Next.js and TypeScript. Software Engineer with a focus on clean architecture, performance optimization, and user experience.',
  seeking: 'Currently seeking Frontend Engineer and Software Engineer opportunities.',
  techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git'],
};

export const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '12+', label: 'APIs Integrated' },
  { value: '96', label: 'Lighthouse Score' },
  { value: '1+', label: 'Year Experience' },
];

export const featuredProject = {
  id: 'mall-of-america',
  title: 'Mall of America',
  image: '/projects/mall-of-america.png',
  techStack: ['Next.js', 'TypeScript', 'GSAP', 'Framer Motion'],
  impact: [
    { value: '6', label: 'Animated Scenes' },
    { value: '3', label: 'Property Categories' },
    { value: 'GSAP + FM', label: 'Animation Stack' },
  ],
  demoLink: 'https://frontend-wine-chi-26.vercel.app',
};

export const projects = [
  {
    id: 8,
    title: 'Mall of America Interactive Sales Deck',
    category: 'Next.js',
    image: '/projects/mall-of-america.png',
    problem: 'Mall of America needed a compelling digital presentation to attract retail tenants. Static PDF decks failed to immerse prospects.',
    solution: 'Built a scroll-driven storytelling experience with Next.js and GSAP. Cinematic animations and an interactive property browser turn proposals into immersive journeys.',
    impact: 'Interactive sales deck for North America\'s largest mall featuring 6 animated scenes and 3 property categories.',
    features: [
      'Cinematic GSAP scroll-triggered animations',
      'Interactive property and sponsorship browser',
      'Seamless Framer Motion page transitions',
      'Type-safe Next.js App Router architecture',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Vercel'],
    demoLink: 'https://frontend-wine-chi-26.vercel.app',
    githubLink: 'https://github.com/rajatydv001/mall-of-america-sales-deck',
    timeline: '6 weeks',
  },
  {
    id: 1,
    title: 'AI Spend Audit',
    category: 'Full Stack',
    image: '/projects/ai-spend-audit.png',
    problem: 'Companies using multiple AI tools had no visibility into total spend, leading to wasted budgets across 8+ providers.',
    solution: 'Built a full-stack SaaS platform with Stripe subscription billing, team collaboration, AI-powered insights, and a multi-provider audit engine tracking usage across all major AI tools.',
    impact: 'SaaS platform helping companies track and reduce AI tool spend with real-time analytics and automated optimization recommendations.',
    features: [
      'Multi-tool audit engine (ChatGPT, Claude, Gemini, Copilot, and more)',
      'AI-powered optimization recommendations',
      'Stripe subscription billing with Free/Pro/Enterprise tiers',
      'Team role-based access control',
    ],
    techStack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Prisma', 'Stripe', 'NextAuth'],
    demoLink: 'https://ai-spend-audit-rouge.vercel.app',
    githubLink: 'https://github.com/rajatydv001/ai-spend-audit',
    timeline: '8 weeks',
  },
  {
    id: 2,
    title: 'LeadFlow Pro',
    category: 'Full Stack',
    image: '/projects/leadflow-pro.png',
    problem: 'Businesses manually collected leads, researched companies, and created reports — a slow and error-prone process.',
    solution: 'Flask-based system with lead intake, Clearbit API enrichment, web scraping, and branded PDF generation triggered by a single form submission.',
    impact: 'Automated lead capture system reducing manual research time by 80% with Clearbit enrichment and branded PDF report generation.',
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
    id: 3,
    title: 'NectarNest',
    category: 'React',
    image: '/projects/nectar-nest.png',
    problem: 'A small honey business needed an online store but lacked budget for Shopify or WooCommerce subscriptions.',
    solution: 'Lightweight React e-commerce frontend with product catalog, shopping cart, and mobile-first responsive layout — deployed on Vercel at zero recurring cost.',
    impact: 'Zero-cost e-commerce frontend enabling a small business to sell online without platform fees.',
    features: [
      'Product catalog with categories and filtering',
      'Shopping cart functionality',
      'Responsive design for all devices',
      'Smooth animations and modern UI',
    ],
    techStack: ['React', 'CSS3', 'Vite', 'Vercel'],
    demoLink: 'https://nectar-nest-gray.vercel.app/',
    githubLink: 'https://github.com/rajatydv001/nectar-nest',
    timeline: '3 weeks',
  },
  {
    id: 7,
    title: 'Customer Churn Prediction',
    category: 'Python',
    image: '/projects/customer-churn.png',
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
    role: 'Software Engineer Intern',
    company: 'SDLC Corp',
    location: 'Remote',
    period: 'Aug 2025 — Present',
    metrics: [
      { value: '3+', label: 'Production Apps' },
      { value: '25', label: 'Lighthouse Pts Gained' },
      { value: '12+', label: 'APIs Integrated' },
    ],
    highlights: [
      'Delivered 3 production React apps — improved Lighthouse score by 25 pts and page load time by 30%',
      'Integrated 12+ REST API endpoints, reducing feature delivery time by 40% across 4 projects',
      'Cut release cycle 60% by moving from weekly sprints to on-demand deployments',
      'Built a 15+ component design library reused across 4 projects',
    ],
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
  },
  {
    id: 2,
    role: 'Supply/Demand Analyst Intern',
    company: 'Stanza Living',
    location: 'Noida, India',
    period: 'Mar 2023 — Jul 2023',
    metrics: [
      { value: '10K+', label: 'Data Points Analyzed' },
      { value: '25%', label: 'Stockout Reduction' },
      { value: '$2M+', label: 'Ops Decisions' },
    ],
    highlights: [
      'Analyzed 10K+ supply chain data points to reduce stockouts by 25% across 10+ properties',
      'Built automated KPI dashboards in Excel, cutting weekly reporting from 6 hours to 45 minutes',
      'Optimized staffing and inventory allocation across 3 cities',
    ],
    technologies: ['Excel', 'SQL', 'Data Analysis', 'Reporting'],
  },
];

export const education = [
  {
    id: 1,
    degree: 'Master of Business Administration',
    specialization: 'Business Analytics & Marketing',
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
      { name: 'React', icon: '⚛' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'Tailwind CSS', icon: '🌊' },
      { name: 'HTML5 / CSS3', icon: '🌐' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'Flask', icon: '⚗' },
      { name: 'REST APIs', icon: '🔗' },
      { name: 'NextAuth', icon: '🔐' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Prisma', icon: '◆' },
      { name: 'SQL', icon: '🗄' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: '⎇' },
      { name: 'Vite', icon: '⚡' },
      { name: 'Vercel', icon: '▲' },
      { name: 'GSAP', icon: '▶' },
      { name: 'Framer Motion', icon: '✨' },
      { name: 'Stripe', icon: '💳' },
    ],
  },
];
