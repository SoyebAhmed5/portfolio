"use client";

import { AnimatePresence, motion } from "framer-motion";

import type { ContributionDay } from "@/types/contribution";

interface Props {
  day: ContributionDay | null;

  rect: DOMRect | null;
}

export default function ContributionTooltip({
  day,
  rect,
}: Props) {
  if (!day || !rect) return null;

  const top = rect.top - 70;
  const left =
    rect.left +
    rect.width / 2;

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
        }}
        transition={{
          duration: 0.15,
        }}
        className="
          fixed
          z-[9999]
          -translate-x-1/2
          rounded-xl
          border
          border-white/10
          bg-zinc-900/95
          backdrop-blur-xl
          px-4
          py-3
          shadow-2xl
          pointer-events-none
        "
        style={{
          left,
          top,
        }}
      >
        <p className="text-sm font-semibold text-violet-400">
          {day.contributionCount}
          {" "}
          contribution
          {day.contributionCount !== 1
            ? "s"
            : ""}
        </p>

        <p className="mt-1 text-xs text-zinc-400">
          {new Date(
            day.date
          ).toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}