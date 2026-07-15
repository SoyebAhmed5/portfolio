"use client";

import { motion } from "framer-motion";
import { contributionColors } from "@/lib/contributionColors";
import type { ContributionDay } from "@/types/contribution";

interface Props {
  day: ContributionDay;
}

export default function ContributionCell({
  day,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      title={`${day.contributionCount} contributions\n${day.date}`}
      className="h-[18px] w-[18px] rounded-[5px]"
      style={{
        backgroundColor:
          contributionColors[day.contributionLevel],
      }}
    />
  );
}