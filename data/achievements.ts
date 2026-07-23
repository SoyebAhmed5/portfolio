import {
  Trophy,
  Medal,
  Code2,
  Target,
} from "lucide-react";

import { Achievement } from "@/types/achievement";

export const achievements: Achievement[] = [
  {
    id: "leetcode",

    title: "400+ Coding Problems Solved",

    organization: "LeetCode • GeeksforGeeks • HackerRank • CodeChef",

    description:
      "Solved over 400 coding problems across multiple platforms, strengthening problem-solving, algorithms, and data structures skills.",

    year: "2025–Present",

    icon: Code2,

    color: "#F59E0B",
  },

  {
    id: "top",

    title: "Top 9.33% on LeetCode",

    organization: "LeetCode",

    description:
      "Ranked among the top 9.33% of LeetCode users worldwide, demonstrating strong proficiency in Data Structures and Algorithms.",

    year: "2026",

    icon: Trophy,

    color: "#EAB308",
  },

  {
    id: "naukri",

    title: "98.52 Percentile",

    organization: "Naukri Campus Young Turks 2025",

    description:
      "Secured a 98.52 percentile, ranking among the top 2% of participants in the nationwide coding competition.",

    year: "2025",

    icon: Medal,

    color: "#0EA5E9",
  },

  {
    id: "competitions",

    title: "National Coding Competitions",

    organization: "Naukri Campus • Tata Group • Unstop ",

    description:
      "Actively participated in coding competitions and technical challenges organized by leading organizations, continuously improving competitive programming skills.",

    year: "2025–Present",

    icon: Target,

    color: "#8B5CF6",
  },
];