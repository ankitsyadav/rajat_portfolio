// ============================================
// Single Source of Truth — All Portfolio Data
// ============================================

const portfolioData = {
  // ─── Personal Info ───────────────────────────
  personalInfo: {
    name: 'Rajat Yadav',
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
    name: 'Rajat Yadav',
    title: 'Self-Taught JavaScript & React Developer',
    summary:
      'I build clean, responsive, and interactive web applications from scratch using modern JavaScript and React. Passionate about pixel-perfect UI, component-driven architecture, and writing code that scales.',
    ctaPrimary: 'View My Work',
    ctaSecondary: 'Get In Touch',
  },

  // ─── About Section ───────────────────────────
  about: {
    title: 'About Me',
    subtitle: 'Frontend-focused. Self-taught. Always building.',
    paragraphs: [
      "I'm a self-learned frontend developer with a deep passion for JavaScript and React. My journey started with curiosity — dissecting how websites work — and evolved into building complete applications from scratch.",
      "I believe in learning by doing. Every project I build pushes me to explore new patterns, improve performance, and write cleaner code. I focus on responsive UI development, reusable component architecture, and modern ES6+ JavaScript.",
      "When I'm not coding, I'm reading documentation, watching tutorials, or experimenting with new React patterns. I'm driven by the belief that great software starts with a great frontend experience.",
    ],
    highlights: [
      'Self-learned developer with strong JavaScript fundamentals',
      'Built multiple frontend projects from scratch',
      'Focus on performance, UI clarity, and reusable components',
      'Passionate about problem solving and clean code',
      'Learning modern React ecosystem (Hooks, Context, Routing)',
      'Responsive design across all device sizes',
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
      id: 1,
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
      id: 2,
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
      id: 3,
      title: 'Weather Dashboard',
      category: 'React',
      description:
        'A weather application built with React that displays current weather and forecast data. Features search functionality, temperature conversion, and dynamic weather icons.',
      techStack: ['React', 'CSS3', 'OpenWeather API', 'Vite'],
      features: [
        'React Hooks (useState, useEffect) for state management',
        'Asynchronous data fetching with Fetch API',
        'Dynamic UI updates based on weather conditions',
        'Responsive design with weather-appropriate themes',
      ],
      demoLink: 'https://weather-dashboard-rho.vercel.app/',
      githubLink: 'https://github.com/rajatydv001/weather-dashboard',
    },
    {
      id: 4,
      title: 'Task Manager App',
      category: 'React',
      description:
        'A task management application with features to add, edit, delete, and mark tasks as complete. Uses React state management and persists data in localStorage.',
      techStack: ['React', 'CSS3', 'LocalStorage', 'Vite'],
      features: [
        'CRUD operations for task management',
        'useState for managing application state',
        'Local storage integration for data persistence',
        'Filter tasks by status (All/Active/Completed)',
      ],
      demoLink: 'https://task-manager-app-sand.vercel.app/',
      githubLink: 'https://github.com/rajatydv001/task-manager',
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
  ],

  // ─── Experience / Journey ────────────────────
  experience: [
    {
      id: 1,
      role: 'Self-Learning & Building Projects',
      company: 'Independent',
      location: 'Remote',
      period: '2024 — 2026',
      description:
        'Dedicated self-study in JavaScript, React, and modern frontend development. Building real-world projects, contributing to open-source, and continuously improving development skills.',
      highlights: [
        'Built 6 frontend projects from scratch using React & JavaScript',
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
