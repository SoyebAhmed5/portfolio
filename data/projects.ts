import { Project } from "@/types/projects";

export const projects: Project[] = [

  // Vision AI
  {
    id: 1,
    featured: true,

    title: "Vision AI",

    description:
      "An AI-powered computer vision platform built with Next.js, TensorFlow.js, MobileNet, and COCO-SSD for image classification and real-time object detection, running entirely in the browser.",

    image: "/projects/visionai.png",

    github: "https://github.com/SoyebAhmed5/VisionAI",

    demo: "https://vision-ai-henna.vercel.app/",

    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TensorFlow.js",
      "MobileNet",
      "COCO-SSD",
      "Lucide React",
      "React Icons",
    ],

    features: [
      "AI Image Classification",
      "Top-3 Predictions",
      "Real-Time Detection",
      "Bounding Box Tracking",
      "Confidence & FPS",
    ],
  },


  // SyncSpace
  {
    id: 2,
    featured: false,

    title: "SyncSpace",

    description:
      "A modern team collaboration platform inspired by Slack, built with the MERN stack. It enables real-time messaging, video meetings, workspace management, and secure authentication for seamless team communication.",

    image: "/projects/syncspace.png",

    github: "https://github.com/SoyebAhmed5/syncSpace",

    demo: "https://syncspace-frontend-tau.vercel.app/",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Clerk",
      "Stream Chat",
      "Stream Video SDK",
    ],

    features: [
      "Real-Time Messaging",
      "Video Meetings",
      "Workspace Management",
      "Secure Authentication",
      "Channel Collaboration",
    ],
  },


  // SocialNest
  {
    id: 3,
    featured: false,

    title: "SocialNest",

    description:
      "A modern social networking web application built with Flask, MySQL, SQLAlchemy, and Bootstrap. Features include user authentication, post creation, likes, comments, friend requests, profile management, and responsive UI.",

    image: "/projects/socialnest.jfif",

    github: "https://github.com/SoyebAhmed5/SocialNest",

    demo: "https://socialnest-7eim.onrender.com/",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Cloudinary",
      "Axios",
    ],

    features: [
      "User Authentication",
      "Post Sharing",
      "Likes & Comments",
      "Profile Management",
      "Social Feed",
    ],
  },


//  Interview Preparation AI
  {
    id: 4,
    featured: false,

    title: "Interview Preparation AI",

    description:
      "An AI-powered interview preparation platform that generates personalized technical and behavioral interview questions, provides instant feedback, and helps users build confidence through realistic mock interview sessions.",

    image: "/projects/interview.png",

    github:
      "https://github.com/SoyebAhmed5/Interview_Prepration-AI",

    demo: "",

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Vercel AI SDK",
      "Shadcn UI",
      "Zod",
    ],

    features: [
      "AI Mock Interviews",
      "Technical & HR Questions",
      "Instant AI Feedback",
      "Personalized Interview Prep",
      "Progress Tracking",
    ],
  },


// AI Agents
  {
    id: 5,
    featured: true,

    title: "AI Agents",

    description:
      "A modern AI-powered assistant platform built with Next.js and the OpenAI Agents SDK, featuring intelligent conversations, tool calling, memory, and autonomous task execution through specialized AI agents.",

    image: "/projects/ai-agents.png",

    github: "https://github.com/SoyebAhmed5/AI-Agents",

    demo: "",

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI Agents SDK",
      "OpenAI API",
      "Vercel AI SDK",
      "Zod",
    ],

    features: [
      "Multi-Agent System",
      "AI Tool Calling",
      "Conversation Memory",
      "Autonomous Tasks",
      "Streaming Responses",
    ],
  },

  // Portfolio Advisor
  {
    id: 6,
    featured: false,

    title: "AI Portfolio Advisor",

    description:
      "An AI-powered career guidance platform that analyzes resumes and LinkedIn profiles to provide personalized career insights, skill assessments, learning roadmaps, and job recommendations.",

    image: "/projects/portfolio-advisor.png",

    github:
      "https://github.com/SoyebAhmed5/AI_Portfolio_Advisor",

    demo: "",

    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "OpenAI API",
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

  // FruVeg
  // {
  //   id: 7,
  //   featured: false,

  //   title: "FruVeg",

  //   description:
  //     "A modern grocery e-commerce platform built with Next.js and Tailwind CSS, offering a seamless shopping experience for fresh fruits, vegetables, groceries, and daily essentials.",

  //   image: "/projects/fruveg.png",

  //   github: "https://github.com/SoyebAhmed5/fruveg",

  //   demo: "",

  //   tech: [
  //     "Next.js",
  //     "Tailwind CSS",
  //   ],

  //   features: [
  //     "User Authentication",
  //     "Product Catalog",
  //     "Shopping Cart",
  //     "Food Blog",
  //     "Responsive Design",
  //   ],
  // },

  //  Redux ToDo App

  // {
  //   id: 8,
  //   featured: false,

  //   title: "Redux Todo App",

  //   description:
  //     "A task management application built with React and Redux Toolkit, allowing users to efficiently organize, update, and manage daily tasks with a clean and responsive interface.",

  //   image: "/projects/todo-app.png",

  //   github: "https://github.com/SoyebAhmed5/Redux-ToDo-App",

  //   demo: "",

  //   tech: [
  //     "React",
  //     "Redux Toolkit",
  //     "JavaScript",
  //     "CSS",
  //   ],

  //   features: [
  //     "Task Management",
  //     "CRUD Operations",
  //     "State Management",
  //     "Responsive UI",
  //     "Persistent Storage",
  //   ],
  // },
];