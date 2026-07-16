import {
  Trophy,
  Plane,
  BrainCircuit,
  Code2,
} from "lucide-react";

import { Achievement } from "@/types/achievement";

export const achievements: Achievement[] = [
  {
    id: "gfg",

    title: "Campus Mantri",

    organization: "GeeksforGeeks",

    description:
      "Representing GeeksforGeeks on campus by promoting technical learning, coding culture, and community engagement.",

    year: "2026",

    icon: Trophy,

    color: "#2F8D46",
  },

  {
    id: "aai",

    title: "CSE / IT Intern",

    organization: "Airports Authority of India",

    description:
      "Completed internship in the CSE/IT department, gaining practical exposure to enterprise IT systems and software workflows.",

    year: "June 2026",

    icon: Plane,

    color: "#0EA5E9",
  },

  {
    id: "projects",

    title: "AI & Full Stack Developer",

    organization: "Personal Projects",

    description:
      "Built real-world full stack applications integrating AI, modern web technologies, REST APIs, and responsive UI.",

    year: "2025–Present",

    icon: BrainCircuit,

    color: "#8B5CF6",
  },

  {
    id: "cp",

    title: "Competitive Programmer",

    organization: "LeetCode • GFG • HackerRank • CodeChef",

    description:
      "Continuously improving algorithmic thinking and problem-solving through competitive programming platforms.",

    year: "Ongoing",

    icon: Code2,

    color: "#F97316",
  },
];