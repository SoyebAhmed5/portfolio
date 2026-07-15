import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: 1,
    featured: true,

    title: "AI Portfolio Advisor",

    description:
      "AI-powered career advisor that analyzes resumes and LinkedIn profiles using OpenAI APIs and provides personalized career guidance.",

    image: "/projects/portfolio-advisor.png",

    github: "https://github.com/SoyebAhmed5/AI_Portfolio_Advisor",

    demo: "",

    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "OpenAI",
      "Tailwind CSS",
    ],

    features: [
      "Resume Parsing",
      "LinkedIn Analysis",
      "AI Career Suggestions",
      "PDF Export",
      "Skill Assessment",
      "Roadmap Generation",
    ],
  },

  {
    id: 2,

    featured: false,

    title: "FruVeg",

    description:
      "Modern grocery e-commerce website built using Next.js and Tailwind CSS.",

    image: "/projects/fruveg.png",

    github: "https://github.com/SoyebAhmed5/fruveg",

    demo: "",

    tech: [
      "Next.js",
      "Tailwind CSS",
    ],

    features: [
      "Authentication",
      "Responsive UI",
      "Shopping Cart",
      "Food Blog",
    ],
  },

  {
    id: 3,

    featured: false,

    title: "Todo App",

    description:
      "Python application for storing and managing contacts.",

    image: "/projects/contact-book.png",

    github: "https://github.com/SoyebAhmed5/Redux-ToDo-App",

    demo: "",

    tech: [
      "Python",
    ],

    features: [
      "CRUD",
      "Search",
      "Update",
      "Delete",
    ],
  },
];