export const PERSONAL_INFO = {
  name: 'Greeshmitha Bingumalla',
  title: 'Full Stack Developer & Backend Engineering Enthusiast',
  tagline: 'Building scalable web applications with clean UI and strong backend systems.',
  subtagline:
    'Focused on full stack development, DSA, and real-world software engineering projects with modern technologies.',
  bio:'I am a Computer Science student passionate about building impactful software products and continuously improving my development skills. I enjoy working on full stack applications, backend systems, and solving real-world problems through data structures and algorithms. Currently, I am exploring scalable architectures, modern web technologies, and AI-powered applications while actively contributing to technical communities and internships.',
  email: 'bingumallagreeshmitha@gmail.com',
  location: 'Andhra Pradesh, India',
  github: 'https://github.com/Greeshmitha2702',
  linkedin: 'https://www.linkedin.com/in/greeshmitha-bingumalla-2a5139293'
};

export const PORTFOLIO_STATS = [
  { value: '3+', label: 'Projects Built' },
  { value: '120+', label: 'DSA Problems Solved' },
  { value: '2+', label: 'Internships & Programs' },
  { value: '100%', label: 'Consistency Towards Growth' },
];

export const SKILLS_DATA = [
  { name: 'React / Next.js', category: 'frontend', iconName: 'Cpu' },
  { name: 'TypeScript', category: 'frontend', iconName: 'Code' },
  { name: 'HTML / CSS / JavaScript', category: 'frontend', iconName: 'Globe' },
  { name: 'JavaScript', category: 'frontend', iconName: 'Code' },

  { name: 'FastAPI', category: 'backend', iconName: 'Server' },
  { name: 'REST APIs', category: 'backend', iconName: 'Share2' },
  { name: 'API Gateway', category: 'backend', iconName: 'Layers' },
  {name: 'Lambda', category: 'backend', iconName: 'Server' },

  { name: 'MySQL', category: 'database', iconName: 'Database' },
  { name: 'MongoDB', category: 'database', iconName: 'Database' },
  { name: 'DynamoDB', category: 'database', iconName: 'Database' },

  { name: 'AWS Basics', category: 'devops', iconName: 'Cloud' },
  { name: 'Git & GitHub', category: 'devops', iconName: 'GitBranch' },
  { name: 'Render Deployment', category: 'devops', iconName: 'ExternalLink' },
  { name: 'API Integration', category: 'devops', iconName: 'CheckCircle' },

  { name: 'Problem Solving', category: 'core', iconName: 'Eye' },
  {name: 'C, Java, Python, SQL', category: 'core', iconName: 'Terminal' }
];

export const PROJECTS_DATA = [
  {
    id: '1',
    title: 'Banking simulator',
    description:
    'A modular banking management system developed using Core Java, JDBC, and SQLite to simulate real-world banking operations such as account creation, deposits, withdrawals, and transaction history management. The project focused on object-oriented design, ACID-compliant database transactions, exception handling, and structured backend workflows to improve reliability and maintainability.',
    tags: ['Java', 'JDBC', 'SQLite', 'OOP'],
    githubUrl: 'https://github.com/Greeshmitha2702/BankingSimulator-Java',
    imageUrl: 'public/bank.jpg',
    featured: true,
  },
  {
    id: '2',
    title: 'Opensource Voice AI',
    description: 'A scalable AI-powered voice processing application developed using Python and MongoDB that enables real-time text-to-speech generation and audio processing workflows. The project focused on asynchronous backend processing, API integration, modular architecture, and low-latency response handling while improving reliability through testing and structured debugging practices.',
    tags: ['Python', 'React', 'TTS', 'flask'],
    githubUrl: 'https://github.com/Greeshmitha2702/opensource-voice-ai',
    liveUrl: 'https://opensource-voice-ai.onrender.com/',
    imageUrl: 'public/voice.jpg',
    featured: true,
  },
  {
    id: '3',
    title: 'Prajna AI Companion',
    description:
'An AI-powered faculty management platform being developed using AWS serverless architecture and modular backend design principles to streamline faculty data workflows and management operations. The project involves REST APIs, asynchronous processing, JWT authentication, DynamoDB schema planning, and AWS EventBridge-based event-driven integration concepts to build scalable and reliable backend systems in a collaborative SDLC environment.',    
    tags: ['AWS', 'TypeScript', 'Serverless'],    
    imageUrl: 'public/faculty.jpg',
    featured: false,
  },
];

export const EXPERIENCE_DATA = [
  {
    id: 'exp1',
    role: 'President',
    organization: 'GitHub Club',
    duration: '2024 - Present',
    description: [
      'Leading a technical student community by organizing coding events, technical workshops, and collaborative development initiatives.'
    ],
    isLeadership: true,
  },
  {
    id: 'exp2',
    role: 'Prajna AI companion',
    organization: 'GITAM University',
    duration: '2026',
    description: [
      'Leading faculty data modules in a 24-member engineering project using AWS serverless architecture, REST APIs, and modular backend design.'
    ],
    isLeadership: true,
  },
  {
    id: 'exp3',
    role: 'GSSoC(Girlscript Summer of Code) Contributor and Ambassador',
    organization: 'Girlscript Foundation',
    duration: '2026',
    description: [
      'An open-source contribution program focused on collaborative software development, community engagement, and technical learning. Contributed to open-source initiatives through issue resolution, feature enhancements, and collaborative development workflows while supporting community-driven technical activities as an Ambassador and Contributor.'
    ],
    isLeadership: false,
  },
];

export const EDUCATION_DATA = [
  {
    id: 'edu1',
    degree: 'B.Tech in Computer Science Engineering',
    school: 'GITAM University',
    duration: '2023 - 2027',
    gpaOrDetails:
      'Focused on full stack development, backend engineering, DSA, and software engineering.',
  },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Team Collaborator',
    role: 'Developer',
    company: 'Student Tech Community',
    content:
      'Greeshmitha consistently takes initiative in projects and adapts quickly to new technologies while maintaining strong teamwork and communication.',
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
  },
];