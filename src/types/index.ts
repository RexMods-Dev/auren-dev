export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  year: string;
  description: string;
  image: string;
  area?: string;
  architecture?: string;
  developer?: string;
  gallery?: string[];
}
