export interface Project {
  id: number;
  featured: boolean;

  title: string;
  description: string;

  image: string;

  github: string;

  demo: string;

  tech: string[];

  features: string[];
}