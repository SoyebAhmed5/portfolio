import PlatformCard from "./PlatformCard";

import { codingPlatforms } from "@/data/coding";

const badgeMap: Record<string, string[]> = {
  LeetCode: [
    "DSA",
    "Algorithms",
    "Contests",
  ],

  GeeksforGeeks: [
    "Campus Mantri",
    "Coding",
    "Articles",
  ],

  HackerRank: [
    "Python",
    "SQL",
    "Problem Solving",
  ],

  CodeChef: [
    "Competitive Programming",
    "Contests",
  ],
};

export default function PlatformGrid() {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2">
      {codingPlatforms.map((platform, index) => (
        <PlatformCard
          key={platform.name}
          index={index}
          title={platform.name}
          username={platform.username}
          description={
            platform.name === "LeetCode"
              ? "Strengthening problem-solving skills through algorithms and data structures."
              : platform.name === "GeeksforGeeks"
              ? "Community contributions, coding practice, and Campus Mantri activities."
              : platform.name === "HackerRank"
              ? "Hands-on practice in Python, SQL, and interview preparation."
              : "Competitive programming contests focused on speed and algorithmic thinking."
          }
          href={platform.url}
          color={platform.color}
          Icon={platform.icon}
          badges={badgeMap[platform.name] ?? []}
        />
      ))}
    </div>
  );
}