import { Highlight } from "@/types/highlight";
import { GrOracle } from "react-icons/gr";

import {
  FaGoogle,
 FaEye
} from "react-icons/fa";
import { SiUdemy, SiGeeksforgeeks} from "react-icons/si";

export const highlights: Highlight[] = [
  {
    id: 1,
    title: "IBM",
    subtitle: "Web Development Fundamentals",
    icon: FaEye,
    color: "#0F62FE",
    link: "https://drive.google.com/file/d/1AV9BbyMXS5SUAP3dK4l-sUAoqKuHVzYr/view"
  },

  {
    id: 2,
    title: "Oracle",
    subtitle: "Data Science",
    icon: GrOracle,
    color: "#F80000",
    link:"https://drive.google.com/file/d/1xWfpyGHw7YQ0u4wXLDtN8saW0hw3slPe/view"
  },

  {
    id: 3,
    title: "Google",
    subtitle: "Gemini Certified Student",
    icon: FaGoogle,
    color: "#4285F4",
     link:"https://drive.google.com/file/d/1egknSztU9UDsYxoInjanD1Y8RVoWw4lf/view"
  },

  {
    id: 4,
    title: "Udemy",
    subtitle: "Web Development",
    icon: SiUdemy,
    color: "#A435F0",
     link:"https://drive.google.com/file/d/1c41v11ZVLc-St7Sd3GnILvFy-sBY5Hli/view"
  },

  {
    id: 5,
    title: "GeeksforGeeks",
    subtitle: "Python",
    icon: SiGeeksforgeeks,
    color: "#2F8D46",
     link:"https://drive.google.com/file/d/13cW7BeJkFhDlVH_9Xibk64LOYvBrqx2x/view"
  },

  {
    id: 6,
    title: "Udemy",
    subtitle: "Git & GitHub",
    icon: SiUdemy,
    color: "#F05032",
     link:"https://drive.google.com/file/d/1keKX2CH9KPX-vyoK6jRKNPAG1QgQuLsK/view"
  },
];