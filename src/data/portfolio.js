export const personalInfo = {
  email: 'rajaty2930@gmail.com',
  location: 'Noida, India',
  linkedin: 'https://www.linkedin.com/in/rajatydv2930',
  github: 'https://github.com/rajatydv001',
};

export const heroContent = {
  name: 'Rajat Yadav',
  title: 'Frontend Developer (React.js / Next.js)',
  subtitle: 'Focused on performance, scalability, and exceptional user experiences.',
  techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git'],
};

export const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '1+', label: 'Year Exp' },
];

export const featuredProject = {
  id: 'mall-of-america',
  title: 'Mall of America',
  image: '/projects/mall-of-america.png',
  techStack: ['Next.js', 'TypeScript', 'GSAP', 'Framer Motion', 'Lenis'],
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
    title: 'Mall of America Interactive Sales Presentation',
    category: 'Next.js',
    image: '/projects/mall-of-america.png',
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
    id: 1,
    title: 'AI Spend Audit',
    category: 'Full Stack',
    image: '/projects/ai-spend-audit.png',
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
    id: 3,
    title: 'NectorNest',
    category: 'React',
    image: '/projects/nectar-nest.png',
    problem: 'A small business needed an online store but lacked budget for Shopify or WooCommerce subscriptions.',
    solution: 'Developed a fully responsive e-commerce storefront with a reusable component library to speed up page development, deployed with SEO best practices.',
    impact: 'Zero-cost e-commerce storefront enabling a small business to sell online without platform fees.',
    features: [
      'Reusable component library for rapid page development',
      'Product catalog and shopping cart functionality',
      'Responsive mobile-first layout',
      'Vercel deployment with SEO best practices',
    ],
    techStack: ['React', 'JavaScript', 'Tailwind CSS'],
    demoLink: 'https://nectar-nest-gray.vercel.app/',
    githubLink: 'https://github.com/rajatydv001/nectar-nest',
    timeline: '3 weeks',
  },
  {
    id: 2,
    title: 'LeadFlow Pro',
    category: 'Full Stack',
    image: '/projects/leadflow-pro.png',
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
      { value: '3', label: 'Projects Delivered' },
    ],
    highlights: [
      'Built responsive, interactive UIs for e-commerce and CRM client projects using React.js and Tailwind CSS, translating designs into reusable components.',
      'Integrated REST APIs and implemented authentication flows and state management across multiple feature modules using shared hooks and components.',
      'Collaborated in an Agile workflow (sprint planning, code review) with a cross-functional team to ship features on a regular release cycle.',
      'Owned Vercel deployments for client builds, maintaining reliable, on-time releases.',
    ],
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
  },
  {
    id: 2,
    role: 'Business Analyst Intern',
    company: 'Stanza Living',
    location: 'Noida, India',
    period: '2025',
    highlights: [
      'Analyzed supply-demand data using Excel and SQL to support KPI tracking and improve reporting accuracy for the operations team.',
      'Built dashboards and visualizations to surface churn trends, supporting stakeholder decision-making.',
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
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Redux', icon: 'react' },
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
    ],
  },
];
