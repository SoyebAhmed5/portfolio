export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: "Internship" | "Leadership";
  description: string[];
  logo: string;
}