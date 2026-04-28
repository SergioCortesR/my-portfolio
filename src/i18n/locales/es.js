export default {
  meta: {
    title: 'Sergio Cortés — Ingeniero de Software',
    description:
      'Portafolio profesional de Sergio Manuel Cortés Ramos, ingeniero de software full-stack especializado en Java empresarial, Vue.js y flujos de desarrollo asistidos por IA.',
  },
  nav: {
    home: 'Inicio',
    experience: 'Experiencia',
    skills: 'Stack',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
    downloadCV: 'Descargar CV',
    language: 'Idioma',
    theme: 'Tema',
    themeDark: 'Modo oscuro',
    themeLight: 'Modo claro',
  },
  hero: {
    status: 'Disponible para nuevos proyectos',
    role: 'Ingeniero de Software · Full-Stack',
    headline: 'Construyo software empresarial',
    headlineAccent: 'limpio, escalable y bien pensado.',
    description:
      'Desarrollador full-stack con +4 años de experiencia. Especializado en Java empresarial (JSF, PrimeFaces, Hibernate, Maven) y stacks modernos de JavaScript. Integrador de código en Git y con manejo solvente de flujos asistidos por IA (Claude y sesiones agénticas) como herramienta de trabajo.',
    primaryCta: 'Ver proyectos',
    secondaryCta: 'Descargar CV',
    contactCta: 'Hablemos',
    metrics: [
      { value: '+4', label: 'años de experiencia' },
      { value: '15+', label: 'tecnologías dominadas' },
      { value: 'INEGI', label: 'sistema de uso nacional' },
    ],
  },
  experience: {
    title: 'Trayectoria',
    subtitle: 'Experiencia profesional y formación académica',
    present: 'Presente',
    items: [
      {
        type: 'work',
        role: 'Enlace de Vinculación Informática (C)',
        org: 'INEGI · Instituto Nacional de Estadística y Geografía',
        period: 'Enero 2026 — Presente',
        description:
          'Desarrollo y evolución de módulos del sistema web IKTAN sobre stack Java empresarial (JSF + PrimeFaces, Hibernate, Maven, NetBeans, Tomcat). Modelado y consultas avanzadas en Oracle DB y SQL Server. Integración de código en Git con flujo de ramas y revisiones como práctica diaria del equipo. Uso disciplinado de IA en VS Code: diseño de contextos efectivos para Claude y sesiones agénticas para acelerar análisis, refactor y documentación, manteniendo el control sobre el código.',
        tags: ['Java', 'JSF', 'PrimeFaces', 'Hibernate', 'Maven', 'Oracle', 'SQL Server', 'Git', 'IA / Claude'],
      },
      {
        type: 'work',
        role: 'Enlace de Informática (A) y Enlace de Vinculación Estadística (B)',
        org: 'INEGI · Instituto Nacional de Estadística y Geografía',
        period: 'Septiembre 2023 — Junio 2025',
        description:
          'Carga y validación de datos estadísticos nacionales para el RALAB. Desarrollo, soporte y mantenimiento de módulos en el sistema web IKTAN con JSP, JSF, Oracle y SQL Server. Soporte técnico a nivel nacional a órganos jurisdiccionales. Control de versiones con Git y TortoiseSVN.',
        tags: ['JSP', 'JSF', 'Oracle', 'SQL Server', 'Git', 'TortoiseSVN'],
      },
      {
        type: 'work',
        role: 'Desarrollador Full-Stack',
        org: 'CCEO Software Development',
        period: 'Diciembre 2022 — Agosto 2023',
        description:
          'Diseño de bases de datos, frontend con Vue.js y backend con Laravel siguiendo MVC. Sprints ágiles, control de versiones con GitHub. Desarrollo completo de un ERP web para el sector agropecuario.',
        tags: ['Vue.js', 'Laravel', 'PHP', 'MySQL', 'MVC', 'Scrum'],
      },
      {
        type: 'work',
        role: 'Programador y Diseñador de Software',
        org: 'Colegio Greenfield',
        period: 'Enero 2021 — Abril 2022',
        description:
          'Diseño de base de datos SQL, programación en Java para módulos administrativos escolares, interfaces y CRUDs, consultas, funciones y procedimientos almacenados.',
        tags: ['Java', 'SQL', 'Swing', 'Stored Procedures'],
      },
      {
        type: 'education',
        role: 'Ingeniería en Sistemas Estratégicos de Información',
        org: 'Universidad Politécnica de Aguascalientes',
        period: 'Septiembre 2019 — Abril 2023',
        description:
          'Formación en análisis, diseño y desarrollo de software, bases de datos y sistemas de información estratégicos.',
        tags: [],
      },
    ],
  },
  skills: {
    title: 'Stack tecnológico',
    subtitle: 'Tecnologías con las que diseño, construyo y opero soluciones reales',
    groups: [
      {
        name: 'Java empresarial',
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
        name: 'Bases de datos',
        items: [
          { name: 'Oracle DB', icon: '/images/icons/oracleDB-logo.png' },
          { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
          { name: 'MySQL', icon: '/images/icons/mysql-logo.png' },
        ],
      },
      {
        name: 'Flujo de trabajo',
        items: [
          { name: 'Git / GitHub', icon: '/images/icons/github-logo.png' },
          { name: 'TortoiseSVN', icon: 'https://cdn.simpleicons.org/subversion/94a3b8' },
          { name: 'VS Code', icon: 'https://cdn.simpleicons.org/codecrafters/94a3b8' },
          { name: 'Office', icon: '/images/icons/office-logo.png' },
          { name: 'Scrum', icon: 'https://cdn.simpleicons.org/scrumalliance/94a3b8' },
        ],
      },
      {
        name: 'Herramientas de IA & idiomas',
        items: [
          { name: 'Claude', icon: 'https://cdn.simpleicons.org/anthropic/94a3b8' },
          { name: 'Sesiones agénticas' },
          { name: 'Ingeniería de contexto', icon: 'https://cdn.simpleicons.org/codefactor/94a3b8' },
          { name: 'Inglés', icon: '/images/icons/english-logo.png' },
        ],
      },
    ],
  },
  projects: {
    title: 'Proyectos seleccionados',
    subtitle: 'Una muestra de trabajos donde he aportado código, diseño y criterio',
    viewProject: 'Ver proyecto',
    privateProject: 'Proyecto privado',
    items: [
      {
        title: 'TransporteBRT — Plataforma de gestión',
        description:
          'Sistema de gestión operativa para una empresa de transporte BRT (Bus Rapid Transit). Construido sobre .NET 10 + Angular 20 + SQL Server, separado en tres carpetas independientes (BD, API, Web) para que cada equipo pueda versionar y desplegar a su ritmo.',
        image: '/images/projects/transporte-brt.svg',
        link: 'https://github.com/SergioCortesR/transporte_brt',
        technologies: ['.NET 10', 'Angular 20', 'SQL Server', 'REST API'],
      },
      {
        title: 'COLP — ERP agropecuario',
        description:
          'Aplicación web sobre Laravel y Vue.js para empleados y administradores: gestión de vacantes, tareas, mensajes, notificaciones, productos, préstamos, nómina y equipos. Proyecto perteneciente a CCEO Software Development.',
        image: '/images/projects/colp.svg',
        link: 'https://colp.cceo.io/login',
        technologies: ['Laravel', 'Vue.js', 'PHP', 'MySQL'],
      },
      {
        title: 'Lola Credits — Sistema de préstamos',
        description:
          'Plataforma de gestión de préstamos con ASP.NET Core y Vue.js bajo arquitectura MVC. Backend desplegado en Fly.io con SQLite y frontend en Vercel. Administra préstamos, clientes, pagos y reportes.',
        image: '/images/projects/lolacredits.svg',
        link: 'https://lolacredits.vercel.app/',
        technologies: ['ASP.NET Core', 'Vue.js', 'SQLite', 'MVC'],
      },
      {
        title: '.NET Fútbol API',
        description:
          'API REST en ASP.NET Core (.NET) para gestionar equipos, jugadores y partidos de fútbol. Proyecto personal para profundizar en el ecosistema .NET, Entity Framework y buenas prácticas de diseño de APIs.',
        image: '/images/projects/futbol-api.svg',
        link: 'https://github.com/SergioCortesR/.net-Futbol-app',
        technologies: ['.NET', 'C#', 'Entity Framework', 'REST API'],
      },
      {
        title: 'Sistema escolar Greenfield',
        description:
          'Sistema escolar de escritorio en Java + Swing que centraliza alumnos, grupos, colegiaturas, usuarios, pagos, facturas y parientes. Administración académica y financiera unificada.',
        image: '/images/projects/greenfield.svg',
        link: null,
        technologies: ['Java', 'Swing', 'MySQL'],
      },
      {
        title: 'Estudio Plus — Apollo Solutions',
        description:
          'Plataforma web en React y Node.js enfocada en aprendizaje profundo de matemáticas para educación primaria y media. Permite personalizar contenido, preguntas y respuestas. Propiedad de Apollo Solutions.',
        image: '/images/projects/estudio-plus.svg',
        link: 'https://estudio-plus.com/login',
        technologies: ['React', 'Node.js', 'MongoDB'],
      },
    ],
  },
  about: {
    title: 'Sobre mí',
    subtitle: 'La persona detrás del código',
    paragraphs: [
      'Soy <strong>Sergio Manuel Cortés Ramos</strong>, ingeniero en sistemas estratégicos de información. Disfruto resolver problemas complejos con soluciones simples: código que se lee bien, se prueba bien y se mantiene mejor.',
      'Trabajo a diario con <strong>Java empresarial, Vue.js y bases de datos relacionales</strong>, y soy un integrador disciplinado en Git. Sé usar la IA como herramienta de trabajo: diseño <strong>contextos detallados para Claude</strong> y opero <strong>sesiones agénticas en VS Code</strong> para entregar más valor en menos tiempo, sin perder el control sobre el código ni sobre el resultado.',
      'Fuera del trabajo me gusta cantar, ver películas, hacer ejercicio y compartir tiempo con mi pareja y mi familia. Hablo inglés con fluidez intermedia/avanzada.',
    ],
    facts: [
      { label: 'Ubicación', value: 'Aguascalientes, México' },
      { label: 'Experiencia', value: '+4 años' },
      { label: 'Idiomas', value: 'Español · Inglés' },
      { label: 'Disponibilidad', value: 'Aguascalientes y proyectos remotos' },
    ],
  },
  footer: {
    tagline: 'Ingeniero de software full-stack · Aguascalientes, México',
    quickLinks: 'Navegación',
    social: 'Sígueme',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
    builtWith: 'Construido con Vue.js y Tailwind CSS.',
  },
}
