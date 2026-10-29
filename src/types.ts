export interface ProjectTechnology {
  name: string;
  role: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  telemetry?: string;
}

export interface ProjectImpact {
  metric: string;
  label: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'quant' | 'python' | 'ai' | 'vibe';
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  problemStatement: string;
  solutionApproach: string;
  technologiesUsed: ProjectTechnology[];
  keyFeatures: ProjectFeature[];
  resultsImpact: ProjectImpact[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  codeSnippet?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  codeSample: string;
  badge: string;
}

export interface EducationItem {
  institution: string;
  location: string;
  credential: string;
  scoreHighlight?: string;
  period: string;
  details: string[];
}
