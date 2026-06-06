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
  },

  // ─── Hero Section ────────────────────────────
  hero: {
    greeting: "Hello, I'm",
    name: 'RAJAT YADAV',
    title: 'Self-Taught JavaScript & React Developer',
    summary:
      'I build clean, responsive, and interactive web applications from scratch using modern JavaScript and React. Passionate about pixel-perfect UI, component-driven architecture, and writing code that scales.',
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
      description:
        'Premium interactive sales deck built with Next.js, TypeScript, GSAP, Framer Motion and Tailwind CSS. Designed for retail leasing, sponsorship opportunities and event bookings.',
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
      id: 1,
      title: 'AI Spend Audit',
      category: 'Full Stack',
      description:
        'A production-grade SaaS platform to audit, optimize, and reduce AI tool spending. Features AI-powered insights, team collaboration, subscription billing, and an advanced analytics dashboard.',
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
      id: 2,
      title: 'LeadFlow Pro',
      category: 'Full Stack',
      description:
        'An automated lead capture and enrichment system. Captures leads from a web form, enriches company data via Clearbit API and web scraping, generates branded PDF audit reports, and delivers them via email.',
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
      description:
        'A premium e-commerce website for raw honey products featuring product catalog, shopping cart functionality, and a beautiful responsive design with smooth navigation.',
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
      id: 4,
      title: 'Portfolio Website',
      category: 'React',
      description:
        'Personal portfolio built with React and Vite featuring modern responsive design, smooth scroll animations, and clean component-based architecture.',
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
      description:
        'An interactive Stone Paper Scissor game built with vanilla JavaScript, HTML5, and CSS3. Features responsive UI, real-time game logic, and deployed live on Vercel.',
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
      description:
        'A fully functional Tic Tac Toe game built from scratch with vanilla JavaScript. Features structured game state management, winner detection algorithm, and clean DOM manipulation.',
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
      description:
        'A machine learning project analyzing American Express financial services customer data to predict churn. Trained Logistic Regression and Decision Tree models to identify churn drivers and recommend data-driven retention strategies.',
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
        'Developing responsive and interactive web applications using React.js and modern frontend technologies. Collaborating with cross-functional teams to implement features, integrate REST APIs, and optimize deployment workflows.',
      highlights: [
        'Developed responsive web applications using React.js, JavaScript, HTML5, and CSS3',
        'Integrated REST APIs and collaborated on frontend feature implementation',
        'Worked on state management, authentication flows, and deployment workflows',
        'Contributed to responsive design and reusable component architecture',
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
        'Analyzed supply-demand data to support operational planning and business workflows. Used Excel and SQL for KPI tracking, reporting, and data-driven decision making.',
      highlights: [
        'Analyzed supply-demand data using Excel and SQL for KPI tracking',
        'Generated reports to support operational planning',
        'Collaborated with cross-functional teams on business workflows',
        'Supported data-driven decision making through analysis and insights',
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
        'Dedicated self-study in JavaScript, React, and modern frontend development. Building real-world projects, contributing to open-source, and continuously improving development skills.',
      highlights: [
        'Built 7 projects from scratch including Full Stack, React, and Python',
        'Learned React Hooks, Context API, and component architecture',
        'Practiced responsive design with Flexbox & CSS Grid',
        'Integrated RESTful APIs using Fetch and Axios',
        'Adopted Git & GitHub for version control in all projects',
        'Focused on clean code, performance optimization, and accessibility',
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
export const socialLinks = portfolioData.socialLinks;

export default portfolioData;
