export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'creative';
  iconName: string; // Will map to Lucide icons
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string[];
  isLeadership?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  duration: string;
  gpaOrDetails?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}
