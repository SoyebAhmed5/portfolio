import { Achievement } from "@/types/achievement";

import {
  FaCode,
  FaTrophy,
  FaLaptopCode,
  FaMedal,
} from "react-icons/fa";

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Coding Problems",
    value: "400+",
    description:
      "Solved 400+ problems across LeetCode, GeeksforGeeks, HackerRank and CodeChef.",
    icon: FaCode,
  },

  {
    id: 2,
    title: "LeetCode Ranking",
    value: "Top 9.33%",
    description:
      "Ranked among the Top 9.33% of LeetCode users globally.",
    icon: FaTrophy,
  },

  {
    id: 3,
    title: "Young Turks 2025",
    value: "98.52%",
    description:
      "Secured 98.52 percentile in Naukri Campus Young Turks.",
    icon: FaMedal,
  },

  {
    id: 4,
    title: "Internships",
    value: "3+",
    description:
      "Completed internships at Edunet Foundation, VaultofCodes and Airports Authority of India.",
    icon: FaLaptopCode,
  },
];