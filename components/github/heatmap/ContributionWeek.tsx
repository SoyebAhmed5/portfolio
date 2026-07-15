"use client";

import { motion } from "framer-motion";

import type { ContributionWeek } from "@/types/contribution";

import ContributionCell from "./ContributionCell";

interface Props {
  week: ContributionWeek;
  index: number;
}

export default function ContributionWeek({
  week,
  index,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.015,
      }}
      className="flex flex-col"
      style={{
        gap: "4px",
      }}
    >
      {week.contributionDays.map((day) => (
        <ContributionCell
          key={day.date}
          day={day}
        />
      ))}
    </motion.div>
  );
}