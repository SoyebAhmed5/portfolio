import { Highlight } from "@/types/highlight";

import {
  FaCertificate,
  FaGoogle,
  FaJava,
  FaPython,
  FaAward,
  FaCode,
} from "react-icons/fa";

export const highlights: Highlight[] = [
  {
    id: 1,
    title: "IBM",
    subtitle: "Web Development Fundamentals",
    icon: FaCertificate,
    color: "#0F62FE",
  },

  {
    id: 2,
    title: "Oracle",
    subtitle: "Data Science",
    icon: FaAward,
    color: "#F80000",
  },

  {
    id: 3,
    title: "Google",
    subtitle: "Gemini Certified Student",
    icon: FaGoogle,
    color: "#4285F4",
  },

  {
    id: 4,
    title: "Udemy",
    subtitle: "Web Development",
    icon: FaCode,
    color: "#A435F0",
  },

  {
    id: 5,
    title: "GeeksforGeeks",
    subtitle: "Python",
    icon: FaPython,
    color: "#2F8D46",
  },

  {
    id: 6,
    title: "Udemy",
    subtitle: "Git & GitHub",
    icon: FaJava,
    color: "#F05032",
  },
];