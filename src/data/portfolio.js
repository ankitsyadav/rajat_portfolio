// ============================================
// Single Source of Truth — All Portfolio Data
// ============================================

const portfolioData = {
  // ─── Personal Info ───────────────────────────
  personalInfo: {
    name: 'RAJAT YADAV',
    title: 'Self-Taught JavaScript & React Developer',
    tagline:
      'Frontend Developer passionate about building clean, responsive, and interactive web applications using JavaScript and React.',
    email: 'rajaty2930@gmail.com',
    phone: '+919837837902',
    location: 'Noida, Uttar Pradesh, India',
    linkedin: 'https://www.linkedin.com/in/rajatydv2930',
    github: 'https://github.com/rajatydv001',
    fiverr: 'https://www.fiverr.com/rajatydv001',
    freelancer: 'https://www.freelancer.com/u/rajatydv001',
  },

  // ─── Hero Section ────────────────────────────
  hero: {
    greeting: "Hello, I'm",
    name: 'RAJAT YADAV',
    title: 'React & Next.js Developer',
    summary:
      'Building Fast, Responsive Web Applications for Startups and Businesses.',
    ctaPrimary: 'View My Work',
    ctaSecondary: 'Get In Touch',
  },

  // ─── About Section ───────────────────────────
  about: {
    title: 'About Me',
    subtitle: 'Frontend Developer. React Enthusiast. Lifelong Learner.',
    paragraphs: [
      "I'm a frontend developer who turns ideas into responsive, interactive web experiences using React.js and modern JavaScript. With a strong foundation in component-driven architecture and a keen eye for UI detail, I build applications that are both functional and polished.",
      'My approach combines hands-on project experience with a solid understanding of the full development lifecycle — from structuring reusable components and managing state to integrating REST APIs and optimizing for performance across devices.',
      "Beyond code, my background in business analytics gives me a unique perspective on building user-focused solutions that align with real-world goals. I'm always exploring new tools and patterns to write cleaner, more scalable code.",
    ],
    highlights: [
      'Strong command of React.js, JavaScript (ES6+), HTML5, and CSS3',
      'Experienced with responsive design, state management, and API integration',
      'Built diverse projects — e-commerce, CRM dashboards, and interactive web apps',
      'Business analytics background for user-centric, goal-aligned development',
      'Proficient with Git, Vite, Tailwind CSS, and modern dev tooling',
      'Focused on clean code, performance optimization, and maintainable architecture',
    ],
  },

  // ─── Skills Section ──────────────────────────
  skills: {
    title: 'Skills & Expertise',
    subtitle: 'Technologies I work with to bring ideas to life',
    categories: [
      {
        name: 'Frontend Development',
        icon: '⚛️',
        skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design', 'Flexbox & Grid'],
      },
      {
        name: 'Modern Tools',
        icon: '🚀',
        skills: ['Vite', 'Git & GitHub', 'VS Code', 'Chrome DevTools', 'npm', 'Terminal / CLI', 'Tailwind CSS'],
      },
      {
        name: 'Core Concepts',
        icon: '🧠',
        skills: ['State Management (useState, useEffect)', 'Component Architecture', 'API Integration (Fetch)', 'DOM Manipulation', 'Conditional Rendering', 'Context API'],
      },
    ],
  },

  // ─── Projects Section ────────────────────────
  projects: [
    {
      id: 8,
      title: 'Mall of America Interactive Sales Deck',
      category: 'Full Stack',
      image: '/projects/mall-of-america.png',
      overview:
        'A premium interactive sales deck for one of America\'s largest shopping destinations, designed to showcase retail leasing, sponsorship, and event opportunities.',
      problem:
        'Mall of America needed a compelling digital presentation to attract retail tenants, sponsors, and event organizers. Traditional PDF decks lacked interactivity and failed to immerse prospects in the venue\'s scale and potential.',
      solution:
        'Built a scroll-driven storytelling experience using Next.js and GSAP. Cinematic animations, an interactive property browser, and smooth page transitions turn static proposals into an immersive brand journey.',
      description:
        'Premium interactive sales deck built with Next.js, TypeScript, GSAP, Framer Motion and Tailwind CSS.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Vercel'],
      features: [
        'Cinematic GSAP scroll-triggered animations for immersive storytelling',
        'Interactive property and sponsorship opportunity browser',
        'Responsive layout optimized for retail leasing presentations',
        'Seamless page transitions powered by Framer Motion',
        'Type-safe architecture with Next.js App Router and TypeScript',
        'Vercel-optimized deployment with edge-ready performance',
      ],
      demoLink: 'https://frontend-wine-chi-26.vercel.app',
      githubLink: 'https://github.com/rajatydv001/mall-of-america-sales-deck',
    },
    {
      id: 2,
      title: 'LeadFlow Pro',
      category: 'Full Stack',
      image: '/projects/leadflow-pro.png',
      overview:
        'An automated lead capture and enrichment system that turns web form submissions into branded PDF audit reports delivered via email.',
      problem:
        'Businesses were manually collecting leads, researching company data, and creating audit reports — a slow, error-prone process that delayed sales follow-ups.',
      solution:
        'Built a Flask-based system with a professional lead intake form, automated Clearbit API enrichment, intelligent web scraping, and branded PDF generation — all triggered by a single form submission.',
      description:
        'An automated lead capture and enrichment system that generates branded PDF audit reports and delivers them via email.',
      techStack: ['Python', 'Flask', 'JavaScript', 'HTML5', 'CSS3', 'Clearbit API', 'SMTP'],
      features: [
        'Professional lead intake form with client and server-side validation',
        'Automated company research using Clearbit API and intelligent web scraping',
        'Branded, personalized PDF business audit reports with custom styling',
        'Automated email delivery with PDF attachment via SMTP',
        'Google Sheets integration for lead logging (bonus feature)',
        'Google Drive archiving for generated PDF reports (bonus feature)',
      ],
      demoLink: 'https://leadflow-pro-orphin.vercel.app',
      githubLink: 'https://github.com/rajatydv001/leadflow-pro',
    },
    {
      id: 3,
      title: 'NectarNest - Pure Raw Honey Store',
      category: 'React',
      image: '/projects/nectar-nest.png',
      overview:
        'A premium e-commerce storefront for raw honey products with product catalog, cart functionality, and responsive design.',
      problem:
        'A small honey business needed an online store that reflected the premium quality of their products but lacked the budget for a custom Shopify or WooCommerce build.',
      solution:
        'Developed a lightweight, fast React e-commerce frontend from scratch with product categorization, a fully functional shopping cart, and a mobile-first responsive layout — deployed on Vercel at zero hosting cost.',
      description:
        'A premium e-commerce website featuring product catalog, shopping cart, and smooth responsive design.',
      techStack: ['React', 'CSS3', 'Vite', 'Vercel'],
      features: [
        'Product catalog with categories and filtering',
        'Shopping cart functionality',
        'Responsive design for all devices',
        'Modern UI with smooth animations',
      ],
      demoLink: 'https://nectar-nest-gray.vercel.app/',
      githubLink: 'https://github.com/rajatydv001/nectar-nest',
    },
    {
      id: 1,
      title: 'AI Spend Audit',
      category: 'Full Stack',
      image: '/projects/ai-spend-audit.png',
      overview:
        'A production-grade SaaS platform to audit, optimize, and reduce AI tool spending across multiple providers.',
      problem:
        'Companies using multiple AI tools had no visibility into their total AI spend, leading to wasted budgets and unoptimized subscription usage.',
      solution:
        'Built a full-stack SaaS platform with Stripe billing, team collaboration, and AI-powered insights. Multi-provider audit engine, real-time analytics, and automated saving recommendations.',
      description:
        'A production-grade SaaS platform to audit, optimize, and reduce AI tool spending.',
      techStack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Prisma', 'Stripe', 'NextAuth'],
      features: [
        'Multi-tool audit engine (ChatGPT, Claude, Cursor, Copilot, Gemini, Windsurf, Open AI, Anthropic)',
        'AI-powered optimization recommendations with alternative suggestions',
        'Stripe subscription billing with Free/Pro/Enterprise tiered plans',
        'Advanced analytics dashboard with interactive Recharts + Framer Motion',
        'NextAuth v5 authentication with Google & GitHub OAuth',
        'Team role-based access control (Admin, Analyst, Viewer)',
        'Real-time savings calculations and ROI analysis',
        'Weekly email digests and overspending alerts',
      ],
      demoLink: 'https://ai-spend-audit.vercel.app',
      githubLink: 'https://github.com/rajatydv001/ai-spend-audit',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'React',
      image: null,
      overview:
        'A personal portfolio built with React and Vite featuring modern responsive design and smooth scroll animations.',
      problem:
        'Needed a professional portfolio to showcase projects and skills to recruiters and freelance clients, with a clean, modern aesthetic.',
      solution:
        'Designed and built a component-driven React portfolio with scroll animations, project modals, contact form, and fully responsive layout.',
      description:
        'Personal portfolio built with React and Vite featuring modern responsive design and smooth scroll animations.',
      techStack: ['React', 'Vite', 'CSS3', 'Vercel'],
      features: [
        'Component-driven architecture',
        'Smooth scroll and reveal animations',
        'Responsive design for all devices',
        'Clean and maintainable code structure',
      ],
      demoLink: 'https://rajat-yadav-portfolio.vercel.app/',
      githubLink: 'https://github.com/rajatydv001/portfolio',
    },
    {
      id: 5,
      title: 'Stone Paper Scissor Game',
      category: 'JavaScript',
      image: null,
      overview:
        'An interactive Stone Paper Scissor game built with vanilla JavaScript, HTML5, and CSS3.',
      problem:
        'Wanted to demonstrate core JavaScript fundamentals — DOM manipulation, event handling, and game logic — in a fun, interactive format.',
      solution:
        'Built a complete game loop with real-time UI updates, score tracking, and responsive design using vanilla JavaScript and CSS3.',
      description:
        'An interactive game with responsive UI, real-time game logic, and live deployment.',
      techStack: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
      features: [
        'DOM Manipulation & Event Handling',
        'Game Logic Implementation',
        'Responsive UI Design',
        'Live Deployment on Vercel',
      ],
      demoLink: 'https://stone-paper-scissor-project-olive.vercel.app/',
      githubLink: 'https://github.com/rajatydv001/Stone_Paper_Scissor_project-',
    },
    {
      id: 6,
      title: 'Tic Tac Toe Game',
      category: 'JavaScript',
      image: null,
      overview:
        'A fully functional Tic Tac Toe game built from scratch with vanilla JavaScript and structured game state management.',
      problem:
        'Wanted to demonstrate algorithmic thinking and clean state management through a classic game implementation.',
      solution:
        'Implemented a winner detection algorithm, structured game state, efficient DOM updates, and replay functionality — all in vanilla JavaScript.',
      description:
        'A fully functional game with winner detection, structured state management, and clean DOM manipulation.',
      techStack: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
      features: [
        'Structured Game State Management',
        'Dynamic Winner Detection Algorithm',
        'Efficient DOM Updates & Event Handling',
        'Reset & Replay Functionality',
      ],
      demoLink: 'https://tic-tac-toe-project-ashy.vercel.app/',
      githubLink: 'https://github.com/rajatydv001/Tic_Tac_Toe_project',
    },
    {
      id: 7,
      title: 'Customer Churn Prediction',
      category: 'Python',
      image: null,
      overview:
        'A machine learning project analyzing American Express customer data to predict churn and recommend retention strategies.',
      problem:
        'Financial services needed to identify at-risk customers before they churned, but lacked a data-driven approach to predict churn drivers.',
      solution:
        'Trained Logistic Regression and Decision Tree models on real financial data. Identified key churn drivers through feature importance analysis and built interactive Tableau dashboards for business visualization.',
      description:
        'ML project analyzing customer data to predict churn and recommend retention strategies.',
      techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Seaborn', 'Tableau', 'SQL'],
      features: [
        'Data extraction and preprocessing using SQL queries and Pandas',
        'ML model training with Logistic Regression and Decision Tree classifiers',
        'Identified key churn drivers through feature importance analysis',
        'Interactive Tableau dashboards for business visualization',
        'Published research paper with actionable retention recommendations',
      ],
      demoLink: null,
      githubLink: 'https://github.com/rajatydv001/Churn_Prediction_Project',
    },
  ],

  // ─── Experience / Journey ────────────────────
  experience: [
    {
      id: 1,
      role: 'Software Engineer Intern',
      company: 'SDLC Corp',
      location: 'Remote',
      period: 'Aug 2025 — Present',
      description:
        'Building and shipping production React applications in a cross-functional team environment.',
      highlights: [
        'Delivered 3+ responsive web applications using React, JavaScript, and modern CSS, improving page load time by 30% through optimized component architecture',
        'Integrated REST APIs and authentication flows, reducing time-to-feature delivery by 40% with reusable hooks and service layers',
        'Streamlined deployment pipelines reducing release cycle from weekly to on-demand via automated Vercel + Git workflows',
        'Established reusable component library adopted across 4 projects, cutting UI development time by 50%',
      ],
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
    },
    {
      id: 2,
      role: 'Supply/Demand Analyst Intern',
      company: 'Stanza Living',
      location: 'Noida, India',
      period: 'Mar 2023 — Jul 2023',
      description:
        'Drove data-driven operational decisions by analyzing supply-demand patterns across 10+ properties.',
      highlights: [
        'Analyzed 10K+ data points across 10+ properties using Excel and SQL, identifying demand patterns that reduced stockouts by 25%',
        'Built automated KPI dashboards that cut weekly reporting time from 6 hours to 45 minutes, enabling real-time decision making',
        'Presented actionable insights to operations leadership, directly influencing staffing allocation and inventory planning across 3 cities',
      ],
      technologies: ['Excel', 'SQL', 'Data Analysis', 'Reporting'],
    },
    {
      id: 3,
      role: 'Self-Learning & Building Projects',
      company: 'Independent',
      location: 'Remote',
      period: '2024 — 2026',
      description:
        'Mastered full-stack development through 7 production-grade projects and continuous hands-on learning.',
      highlights: [
        'Built and deployed 7 projects from scratch — including Full Stack SaaS, e-commerce, and interactive web apps — viewed by 500+ visitors',
        'Mastered React Hooks, Context API, and component architecture patterns through real project implementation',
        'Achieved 90+ Lighthouse performance scores across all projects by implementing lazy loading, code splitting, and optimized asset delivery',
      ],
      technologies: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Git', 'Vite'],
    },
  ],

  // ─── Certifications ───────────────────────────
  certifications: [
    {
      name: 'JavaScript & React Development',
      issuer: 'Namaste Dev',
      year: '2024',
    },
    {
      name: 'React.js Essential Training',
      issuer: 'LinkedIn Learning',
      year: '2024',
    },
  ],

  // ─── Education ───────────────────────────────
  education: [
    {
      id: 1,
      degree: 'Master of Business Administration (MBA)',
      specialization: 'Business Analytics & Marketing',
      institution: 'Galgotias University',
      period: '2023 — 2025',
      location: 'Greater Noida, India',
    },
    {
      id: 2,
      degree: 'Bachelor of Business Administration (BBA)',
      specialization: 'Marketing',
      institution: 'Galgotias University',
      period: '2020 — 2023',
      location: 'Greater Noida, India',
    },
  ],

  // ─── Services ──────────────────────────────
  services: [
    {
      icon: '📄',
      title: 'Landing Pages',
      description:
        'High-converting, fast-loading landing pages designed to capture leads and showcase your product or service with clarity.',
    },
    {
      icon: '🏢',
      title: 'Business Websites',
      description:
        'Professional multi-page websites for startups and small businesses with modern design, responsive layouts, and SEO-friendly structure.',
    },
    {
      icon: '📊',
      title: 'CRM Dashboards',
      description:
        'Custom admin dashboards with data visualization, user management, and real-time analytics to run your operations efficiently.',
    },
    {
      icon: '🛒',
      title: 'E Commerce Frontends',
      description:
        'Product catalogs, shopping carts, and checkout flows built with React — ready to connect to any backend or payment provider.',
    },
    {
      icon: '🎨',
      title: 'Figma to React Development',
      description:
        'Pixel-perfect conversion of your Figma designs into clean, responsive React components with attention to every detail.',
    },
  ],

  // ─── Social Links ────────────────────────────
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rajatydv2930',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rajatydv001',
      icon: 'github',
    },
  ],
};

// ─── Named Exports ────────────────────────────
export const personalInfo = portfolioData.personalInfo;
export const heroContent = portfolioData.hero;
export const aboutContent = portfolioData.about;
export const skills = portfolioData.skills;
export const projects = portfolioData.projects;
export const experience = portfolioData.experience;
export const education = portfolioData.education;
export const certifications = portfolioData.certifications;
export const services = portfolioData.services;
export const socialLinks = portfolioData.socialLinks;

export default portfolioData;
