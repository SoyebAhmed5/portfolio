import { LucideIcon } from "lucide-react";

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  year: string;
  icon: LucideIcon;
  color: string;
}