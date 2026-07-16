"use client";

import { motion } from "framer-motion";

import { Achievement } from "@/types/achievement";

interface Props {
  achievement: Achievement;
  index: number;
}

export default function AchievementCard({
  achievement,
  index,
}: Props) {
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.12,
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-br
        from-white/5
        to-white/[0.03]
        p-8
        backdrop-blur-xl
      "
    >
      <div
        className="
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          blur-3xl
          opacity-15
        "
        style={{
          backgroundColor: achievement.color,
        }}
      />

      <div className="relative z-10">

        <div
          className="mb-6 inline-flex rounded-2xl p-4"
          style={{
            backgroundColor: `${achievement.color}20`,
          }}
        >
          <Icon
            size={34}
            color={achievement.color}
          />
        </div>

        <span className="text-sm text-zinc-500 pl-5">
          {achievement.year}
        </span>

        <h3 className="mt-2 text-2xl font-bold">
          {achievement.title}
        </h3>

        <p className="font-medium text-violet-400">
          {achievement.organization}
        </p>

        <p className="mt-4 text-zinc-400 leading-7">
          {achievement.description}
        </p>

      </div>
    </motion.div>
  );
}