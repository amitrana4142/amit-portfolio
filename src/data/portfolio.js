export const profile = {
  name: 'Amit Rana',
  role: '.NET Full Stack Developer',
  tagline: 'Crafting scalable digital experiences at the edge of code and creativity.',
  email: 'amitrana4142@gmail.com',
  phone: '+91 8679144780',
  avatar: '/gallery/1779302661633.png',
  socials: [
    { label: 'GitHub', url: 'https://github.com/amitrana4142', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/amit-rana-251ba2190', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:amitrana4142@gmail.com', icon: 'mail' },
  ],
};

export const heroRoles = [
  'Full Stack Developer',
  'Microservices Architect',
  'React Engineer',
  'Problem Solver',
];

export const about = {
  intro:
    "Hello! I'm Amit, a Full Stack .NET Developer with over 2 years of experience building and maintaining production-level web applications.",
  philosophy:
    'I believe great software blends engineering discipline with creative intuition — clean architecture, human-centered UX, and relentless curiosity drive everything I ship.',
  details: [
    'My journey into web development started when I realized the power of software to solve real-world problems. Today, I work across both monolithic and microservice architectures.',
    "I'm known for writing clean, well-tested, maintainable code and sharp debugging skills on live enterprise systems. I leverage AI-assisted workflows to ship faster without compromising quality.",
  ],
};

export const skills = [
  { name: 'C# / .NET Core', level: 92, category: 'backend' },
  { name: 'React / TypeScript', level: 88, category: 'frontend' },
  { name: 'SQL Server', level: 85, category: 'data' },
  { name: 'Microservices', level: 82, category: 'architecture' },
  { name: 'REST APIs', level: 90, category: 'backend' },
  { name: 'Entity Framework', level: 84, category: 'data' },
];

export const techStack = [
  'C#', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS',
  '.NET Core', 'ASP.NET MVC', 'React', 'Entity Framework', 'Nx',
  'Microservices', 'REST', 'SQL Server',
];

export const experiences = [
  {
    title: 'Junior Software Developer',
    company: 'Channel Fusion',
    date: 'Apr 2026 – Present',
    points: [
      'Building and scaling microservice-based back-end services using .NET Core and C#, contributing to 3 active production applications.',
      'Designing inter-service communication patterns (REST, async messaging) across the microservice ecosystem.',
      'Collaborating on architecture decisions for new services — scalability, resilience, and clean separation of concerns.',
    ],
  },
  {
    title: 'Associate Software Developer',
    company: 'Channel Fusion',
    date: 'Apr 2025 – Apr 2026',
    points: [
      'Built component-driven React micro-frontend modules in an Nx monorepo, reducing build times ~30% via Webpack optimisation.',
      'Introduced unit testing practices that reduced regression bugs ~25% across sprint cycles.',
      'Integrated GitHub Copilot into team workflow, cutting feature delivery time ~15% without compromising quality.',
      'Resolved full stack production bugs: SQL execution plans, API failures, and React rendering issues.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Channel Fusion',
    date: 'Oct 2024 – Apr 2025',
    points: [
      'Developed and shipped 10+ features across monolithic web apps using .NET Core, C#, Razor Pages, and SQL Server.',
      'Wrote and optimised stored procedures, improving query performance and report generation time.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Connoisseur Infotech Pvt. Ltd.',
    date: 'Jan 2021 – Oct 2021',
    points: [
      'Developed features across 3 web projects using JavaScript and MySQL, reducing reported defects by 15%.',
      'Built an API early warning monitoring system that reduced incident response time by 35%.',
      'Authored technical documentation for 5 core modules, reducing onboarding time by ~2 days.',
    ],
  },
];

export const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Production platform serving 1,000+ products with order processing, customer support, and reporting. React front-end improved page load speed by 25% and reduced bounce rate.',
    tech: ['C#', '.NET Core', 'React', 'Entity Framework', 'SQL Server'],
  },
  {
    title: 'HR Management System',
    description:
      'HR portal managing 100+ employee records — onboarding, attendance, leave, and payroll. Implemented role-based access control (RBAC).',
    tech: ['C#', 'ASP.NET MVC', 'SQL Server', 'jQuery'],
  },
];

export const education = [
  {
    date: '2021 – 2024',
    title: 'B.Tech CS Engineering',
    institution: 'T.R. Abhilashi Memorial Institute',
    score: 'CGPA: 7.2',
  },
  {
    date: '2017 – 2020',
    title: 'Diploma Computer Engineering',
    institution: 'Government Polytechnic College',
    score: '71%',
  },
];

export const hobbies = [
  {
    id: 'gaming',
    title: 'Gaming',
    emoji: '🎮',
    description: 'Strategy, RPGs, and competitive multiplayer — where reflex meets tactics.',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #4c1d95 50%, #7c3aed 100%)',
  },
  {
    id: 'photography',
    title: 'Photography',
    emoji: '📸',
    description: 'Capturing light, mood, and moments — streetscapes to golden-hour landscapes.',
    gradient: 'linear-gradient(135deg, #0c1929 0%, #0e7490 50%, #22d3ee 100%)',
  },
  {
    id: 'biking',
    title: 'Bike Riding',
    emoji: '🏍️',
    description: 'Open roads, mountain curves, and the freedom of two wheels.',
    gradient: 'linear-gradient(135deg, #1c1917 0%, #b45309 50%, #f59e0b 100%)',
  },
  {
    id: 'travel',
    title: 'Travel & Adventure',
    emoji: '🌍',
    description: 'Exploring cultures, terrains, and stories beyond the screen.',
    gradient: 'linear-gradient(135deg, #052e16 0%, #047857 50%, #34d399 100%)',
  },
];

export { galleryPhotos } from './galleryPhotos';

export const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];
