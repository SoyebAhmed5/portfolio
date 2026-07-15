"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { Achievement } from "@/types/achievement";

interface Props {
  achievement: Achievement;
}

export default function AchievementCard({
  achievement,
}: Props) {
  const Icon = achievement.icon;

  return (
    <GlassCard className="group p-8 text-center">

      <motion.div
        whileHover={{ rotate: 10, scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/20"
      >
        <Icon className="text-3xl text-violet-400" />
      </motion.div>

      <h2 className="text-5xl font-bold text-white">
        {achievement.value}
      </h2>

      <h3 className="mt-4 text-xl font-semibold">
        {achievement.title}
      </h3>

      <p className="mt-4 text-zinc-400 leading-7">
        {achievement.description}
      </p>

    </GlassCard>
  );
}