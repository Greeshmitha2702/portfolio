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

  { name: 'Problem Solving', category: 'creative', iconName: 'Eye' },
  { name: 'Agile Collaboration', category: 'creative', iconName: 'Users' },

  {name: 'C, Java, Python, SQL', category: 'core', iconName: 'Terminal' }
];

export const PROJECTS_DATA = [
  {
    id: '1',
    title: 'Interview Preparation Hub',
    description:
      'A centralized platform for students to prepare for technical interviews with curated resources, coding sheets, company-wise preparation tracks, and progress management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: '2',
    title: 'AI Task Prioritizer Agent',
    description:
      'An AI-powered productivity assistant that helps students prioritize tasks based on available time, energy levels, and urgency.',
    tags: ['AI', 'React', 'TypeScript', 'Productivity'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Modeling System',
    description:
      'A software engineering academic project implementing Waterfall, Agile, and Iterative methodologies for weather prediction and analysis workflows.',
    tags: ['Java', 'Software Engineering', 'System Design'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
];

export const EXPERIENCE_DATA = [
  {
    id: 'exp1',
    role: 'Backend Lead',
    organization: 'GitHub Club',
    duration: '2025 - Present',
    description: [
      'Leading backend development initiatives and collaborating with team members on scalable web application architecture.',
      'Working on API design, project planning, and technical collaboration within student developer communities.',
    ],
    isLeadership: true,
  },
  {
    id: 'exp2',
    role: 'AI & Software Engineering Intern',
    organization: 'Virtual Internship Programs',
    duration: '2025',
    description: [
      'Participated in AI/ML and software engineering virtual internships focused on real-world development workflows.',
      'Built projects, improved technical problem solving, and explored cloud-based deployment workflows.',
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