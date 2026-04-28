export default {
  meta: {
    title: 'Sergio Cortés — Software Engineer',
    description:
      "Professional portfolio of Sergio Manuel Cortés Ramos, full-stack software engineer specialized in enterprise Java, Vue.js and AI-assisted development workflows.",
  },
  nav: {
    home: 'Home',
    experience: 'Experience',
    skills: 'Stack',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    downloadCV: 'Download CV',
    language: 'Language',
    theme: 'Theme',
    themeDark: 'Dark mode',
    themeLight: 'Light mode',
  },
  hero: {
    status: 'Available for new projects',
    role: 'Software Engineer · Full-Stack',
    headline: 'I build enterprise software',
    headlineAccent: 'that is clean, scalable and well thought-out.',
    description:
      'Full-stack developer with 4+ years of experience. Specialized in enterprise Java (JSF, PrimeFaces, Hibernate, Maven) and modern JavaScript stacks. Disciplined Git integrator and confident user of AI-assisted workflows (Claude and agentic sessions) as a tool of the trade.',
    primaryCta: 'See projects',
    secondaryCta: 'Download CV',
    contactCta: "Let's talk",
    metrics: [
      { value: '4+', label: 'years of experience' },
      { value: '15+', label: 'technologies mastered' },
      { value: 'INEGI', label: 'nationwide system' },
    ],
  },
  experience: {
    title: 'Career',
    subtitle: 'Professional experience and academic background',
    present: 'Present',
    items: [
      {
        type: 'work',
        role: 'IT Linkage Reference (C)',
        org: 'INEGI · National Institute of Statistics and Geography',
        period: 'January 2026 — Present',
        description:
          'Development and evolution of IKTAN web modules on an enterprise Java stack (JSF + PrimeFaces, Hibernate, Maven, NetBeans, Tomcat). Advanced data modeling and queries on Oracle DB and SQL Server (PL/SQL, views, stored procedures). Day-to-day Git integration with branching strategies and code reviews. Disciplined use of AI in VS Code: I design effective contexts for Claude and run agentic sessions to speed up analysis, refactoring and documentation while staying in control of the code.',
        tags: ['Java', 'JSF', 'PrimeFaces', 'Hibernate', 'Maven', 'Oracle', 'SQL Server', 'Git', 'AI / Claude'],
      },
      {
        type: 'work',
        role: 'IT Linkage Reference (A) and Statistical Linking Reference (B)',
        org: 'INEGI · National Institute of Statistics and Geography',
        period: 'September 2023 — June 2025',
        description:
          'Loading and validation of national statistical data for RALAB. Development, support and maintenance of IKTAN web modules with JSP, JSF, Oracle and SQL Server. Nationwide technical support to judicial bodies. Version control with Git and TortoiseSVN.',
        tags: ['JSP', 'JSF', 'Oracle', 'SQL Server', 'Git', 'TortoiseSVN'],
      },
      {
        type: 'work',
        role: 'Full-Stack Developer',
        org: 'CCEO Software Development',
        period: 'December 2022 — August 2023',
        description:
          'Database design, frontend with Vue.js and backend with Laravel under MVC. Agile sprints, version control with GitHub. Full development of a web ERP for the agricultural sector.',
        tags: ['Vue.js', 'Laravel', 'PHP', 'MySQL', 'MVC', 'Scrum'],
      },
      {
        type: 'work',
        role: 'Programmer & Software Designer',
        org: 'Colegio Greenfield',
        period: 'January 2021 — April 2022',
        description:
          'SQL database design, Java programming for school administrative modules, UI and CRUDs, queries, functions and stored procedures.',
        tags: ['Java', 'SQL', 'Swing', 'Stored Procedures'],
      },
      {
        type: 'education',
        role: 'B.S. Strategic Information Systems Engineering',
        org: 'Polytechnic University of Aguascalientes',
        period: 'September 2019 — April 2023',
        description:
          'Training in software analysis, design and development, databases and strategic information systems.',
        tags: [],
      },
    ],
  },
  skills: {
    title: 'Tech stack',
    subtitle: 'Technologies I use to design, build and operate real solutions',
    groups: [
      {
        name: 'Enterprise Java',
        items: [
          { name: 'Java', icon: '/images/icons/java-logo.png' },
          { name: 'JSF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
          { name: 'PrimeFaces', icon: 'https://cdn.simpleicons.org/primefaces/94a3b8' },
          { name: 'Hibernate', icon: 'https://cdn.simpleicons.org/hibernate/94a3b8' },
          { name: 'Maven', icon: 'https://cdn.simpleicons.org/apachemaven/94a3b8' },
          { name: 'NetBeans', icon: 'https://cdn.simpleicons.org/apachenetbeanside/94a3b8' },
        ],
      },
      {
        name: 'Frontend & Web',
        items: [
          { name: 'Vue.js', icon: '/images/icons/vue-logo.png' },
          { name: 'React', icon: '/images/icons/react-logo.png' },
          { name: 'JavaScript', icon: '/images/icons/js-logo.png' },
          { name: 'HTML5', icon: '/images/icons/html-logo.png' },
          { name: 'CSS3', icon: '/images/icons/css-logo.png' },
          { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/94a3b8' },
        ],
      },
      {
        name: 'Backend & APIs',
        items: [
          { name: 'Laravel', icon: '/images/icons/laravel-logo.png' },
          { name: 'PHP', icon: '/images/icons/php-logo.png' },
          { name: 'ASP.NET Core', icon: '/images/icons/.net-logo.png' },
          { name: 'REST APIs', icon: 'https://cdn.simpleicons.org/openapiinitiative/94a3b8' },
          { name: 'Postman', icon: '/images/icons/postman-logo.png' },
        ],
      },
      {
        name: 'Databases',
        items: [
          { name: 'Oracle DB', icon: '/images/icons/oracleDB-logo.png' },
          { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
          { name: 'MySQL', icon: '/images/icons/mysql-logo.png' },
        ],
      },
      {
        name: 'Workflow',
        items: [
          { name: 'Git / GitHub', icon: '/images/icons/github-logo.png' },
          { name: 'TortoiseSVN', icon: 'https://cdn.simpleicons.org/subversion/94a3b8' },
          { name: 'VS Code', icon: 'https://cdn.simpleicons.org/codecrafters/94a3b8' },
          { name: 'Office', icon: '/images/icons/office-logo.png' },
          { name: 'Scrum', icon: 'https://cdn.simpleicons.org/scrumalliance/94a3b8' },
        ],
      },
      {
        name: 'AI tooling & languages',
        items: [
          { name: 'Claude', icon: 'https://cdn.simpleicons.org/anthropic/94a3b8' },
          { name: 'Agentic sessions' },
          { name: 'Context engineering', icon: 'https://cdn.simpleicons.org/codefactor/94a3b8' },
          { name: 'English', icon: '/images/icons/english-logo.png' },
        ],
      },
    ],
  },
  projects: {
    title: 'Selected projects',
    subtitle: 'A sample of work where I contributed code, design and judgment',
    viewProject: 'View project',
    privateProject: 'Private project',
    items: [
      {
        title: 'TransporteBRT — Operations platform',
        description:
          'Operations management system for a BRT (Bus Rapid Transit) transport company. Built on .NET 10 + Angular 20 + SQL Server, split into three independent folders (DB, API, Web) so each team can version and deploy at its own pace.',
        image: '/images/projects/transporte-brt.svg',
        link: 'https://github.com/SergioCortesR/transporte_brt',
        technologies: ['.NET 10', 'Angular 20', 'SQL Server', 'REST API'],
      },
      {
        title: 'COLP — Agricultural ERP',
        description:
          'Web application built with Laravel and Vue.js for employees and admins: vacancies, tasks, messages, notifications, products, loans, payroll and equipment. Project owned by CCEO Software Development.',
        image: '/images/projects/colp.svg',
        link: 'https://colp.cceo.io/login',
        technologies: ['Laravel', 'Vue.js', 'PHP', 'MySQL'],
      },
      {
        title: 'Lola Credits — Loan management',
        description:
          'Loan management platform with ASP.NET Core and Vue.js using MVC architecture. Backend deployed on Fly.io with SQLite, frontend on Vercel. Manages loans, clients, payments and reports.',
        image: '/images/projects/lolacredits.svg',
        link: 'https://lolacredits.vercel.app/',
        technologies: ['ASP.NET Core', 'Vue.js', 'SQLite', 'MVC'],
      },
      {
        title: '.NET Football API',
        description:
          'REST API in ASP.NET Core (.NET) to manage teams, players and football matches. Personal project to deepen my .NET, Entity Framework and API design practice.',
        image: '/images/projects/futbol-api.svg',
        link: 'https://github.com/SergioCortesR/.net-Futbol-app',
        technologies: ['.NET', 'C#', 'Entity Framework', 'REST API'],
      },
      {
        title: 'Greenfield school system',
        description:
          'Desktop school system in Java + Swing centralizing students, groups, tuition, users, payments, invoices and relatives. Unified academic and financial administration.',
        image: '/images/projects/greenfield.svg',
        link: null,
        technologies: ['Java', 'Swing', 'MySQL'],
      },
      {
        title: 'Estudio Plus — Apollo Solutions',
        description:
          'Web platform in React and Node.js focused on deep learning of mathematics for primary and middle school education. Allows full personalization of content, questions and answers. Owned by Apollo Solutions.',
        image: '/images/projects/estudio-plus.svg',
        link: 'https://estudio-plus.com/login',
        technologies: ['React', 'Node.js', 'MongoDB'],
      },
    ],
  },
  about: {
    title: 'About me',
    subtitle: 'The person behind the code',
    paragraphs: [
      'I am <strong>Sergio Manuel Cortés Ramos</strong>, a strategic information systems engineer. I enjoy solving complex problems with simple solutions: code that reads well, tests well and is even better to maintain.',
      'I work daily with <strong>enterprise Java, Vue.js and relational databases</strong>, and I am a disciplined Git integrator. I know how to use AI as a working tool: I craft <strong>detailed contexts for Claude</strong> and run <strong>agentic sessions in VS Code</strong> to deliver more value in less time, without losing control over the code or the outcome.',
      'Outside of work I enjoy singing, watching movies, working out and spending time with my partner and family. I speak intermediate/advanced English.',
    ],
    facts: [
      { label: 'Location', value: 'Aguascalientes, México' },
      { label: 'Experience', value: '4+ years' },
      { label: 'Languages', value: 'Spanish · English' },
      { label: 'Availability', value: 'Aguascalientes & remote projects' },
    ],
  },
  footer: {
    tagline: 'Full-stack software engineer · Aguascalientes, México',
    quickLinks: 'Navigation',
    social: 'Follow me',
    contact: 'Contact',
    rights: 'All rights reserved.',
    builtWith: 'Built with Vue.js and Tailwind CSS.',
  },
}
