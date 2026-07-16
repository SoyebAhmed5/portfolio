import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
  SiCodechef,
} from "react-icons/si";

import { CodingPlatform } from "@/types/coding";

export const codingProfiles: CodingPlatform[] = [
  {
    id: "leetcode",

    name: "LeetCode",

    username: "Soyeb_Ahmed",

    profileUrl:
      "https://leetcode.com/u/Soyeb_Ahmed/",

    accentColor: "#FFA116",

    icon: SiLeetcode,

    description:
      "Data Structures • Algorithms • Contests",

    stats: [],

    buttonText: "View Profile",
  },

  {
    id: "gfg",

    name: "GeeksforGeeks",

    username: "ahmedsoq4lb",

    profileUrl:
      "https://www.geeksforgeeks.org/profile/ahmedsoq4lb",

    accentColor: "#2F8D46",

    icon: SiGeeksforgeeks,

    description:
      "Campus Mantri • Coding Practice",

    stats: [],

    buttonText: "View Profile",
  },

  {
    id: "hackerrank",

    name: "HackerRank",

    username: "soyebahmed5",

    profileUrl:
      "https://www.hackerrank.com/profile/soyebahmed5",

    accentColor: "#00EA64",

    icon: SiHackerrank,

    description:
      "Python • SQL • Problem Solving",

    stats: [],

    buttonText: "View Profile",
  },

  {
    id: "codechef",

    name: "CodeChef",

    username: "soyeb_ahmed",

    profileUrl:
      "https://www.codechef.com/users/soyeb_ahmed",

    accentColor: "#8B5A2B",

    icon: SiCodechef,

    description:
      "Competitive Programming",

    stats: [],

    buttonText: "View Profile",
  },
];
