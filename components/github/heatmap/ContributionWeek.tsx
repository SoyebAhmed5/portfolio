"use client";

import { motion } from "framer-motion";

import ContributionCell from "./ContributionCell";

import type {
  ContributionDay,
  ContributionWeek,
} from "@/types/contribution";

interface Props {
  week: ContributionWeek;
  index: number;

  onHover: (
    day: ContributionDay,
    rect: DOMRect
  ) => void;

  onLeave: () => void;
}

export default function ContributionWeek({
  week,
  index,
  onHover,
  onLeave,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
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
        duration: 0.25,
      }}
      className="flex flex-col gap-1"
    >
      {week.contributionDays.map((day) => (
        <ContributionCell
          key={day.date}
          day={day}
          onHover={onHover}
          onLeave={onLeave}
        />
      ))}
    </motion.div>
  );
}