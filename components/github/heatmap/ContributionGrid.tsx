"use client";

import { motion } from "framer-motion";

import type {
  ContributionCalendar,
  ContributionDay,
} from "@/types/contribution";

import ContributionMonths from "./ContributionMonths";
import ContributionDays from "./ContributionDays";
import ContributionWeek from "./ContributionWeek";

interface Props {
  calendar: ContributionCalendar;

  onHover: (
    day: ContributionDay,
    rect: DOMRect
  ) => void;

  onLeave: () => void;
}

export default function ContributionGrid({
  calendar,
  onHover,
  onLeave,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="overflow-x-auto hide-scrollbar"
    >
      <ContributionMonths
        calendar={calendar}
      />

      <div className="flex">

        <ContributionDays />

        <div
          className="flex"
          style={{
            gap: "4px",
          }}
        >
          {calendar.weeks.map((week, index) => (
            <ContributionWeek
              key={index}
              week={week}
              index={index}
              onHover={onHover}
              onLeave={onLeave}
            />
          ))}
        </div>

      </div>

    </motion.div>
  );
}