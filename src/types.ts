export interface ExperienceItem {
  id: string;
  role: string;
  subtitle: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  points: string[];
  skills: string[];
  metricHighlight?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  organization?: string;
  description: string;
  highlights: string[];
  tools: string[];
  type: 'analytics' | 'ml';
  colabLinkText?: string;
  hasInteractiveDemo: boolean;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution?: string;
  location?: string;
  period: string;
  score?: string;
  scoreLabel?: string;
  status?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: string; desc: string }[];
}
