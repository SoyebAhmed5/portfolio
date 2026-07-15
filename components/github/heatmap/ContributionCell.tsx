"use client";

import { motion } from "framer-motion";

import { contributionLevelColor } from "@/lib/githubHeatmapColors";
import type { ContributionDay } from "@/types/contribution";

interface Props {
  day: ContributionDay;

  onHover: (
    day: ContributionDay,
    rect: DOMRect
  ) => void;

  onLeave: () => void;
}

export default function ContributionCell({
  day,
  onHover,
  onLeave,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 18,
      }}
      onMouseEnter={(e) => {
        onHover(
          day,
          e.currentTarget.getBoundingClientRect()
        );
      }}
      onMouseLeave={onLeave}
      className="h-4 w-4 rounded-[4px] cursor-pointer"
      style={{
        backgroundColor:
          contributionLevelColor[
            day.contributionLevel
          ],
      }}
    />
  );
}