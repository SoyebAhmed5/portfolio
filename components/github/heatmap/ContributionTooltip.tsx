"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  visible: boolean;
  x: number;
  y: number;
  date: string;
  count: number;
}

export default function ContributionTooltip({
  visible,
  x,
  y,
  date,
  count,
}: Props) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
          }}
          transition={{
            duration: 0.18,
          }}
          className="
            pointer-events-none
            fixed
            z-50
            rounded-xl
            border
            border-white/10
            bg-zinc-900/95
            backdrop-blur-xl
            px-4
            py-3
            shadow-2xl
          "
          style={{
            left: x,
            top: y,
          }}
        >
          <p className="text-sm font-semibold text-violet-300">
            {count} contribution{count !== 1 ? "s" : ""}
          </p>

          <p className="mt-1 text-xs text-zinc-400">
            {new Date(date).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}