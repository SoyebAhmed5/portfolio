import { IconType } from "react-icons";

export interface Achievement {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: IconType;
}