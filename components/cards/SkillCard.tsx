"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface SkillCardProps {
  icon: IconType;
  name: string;
  color: string;
}

export default function SkillCard({
  icon: Icon,
  name,
  color,
}: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
        rotateX: 10,
        rotateY: 10,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
     <Icon
  className="h-14 w-14 transition duration-300 group-hover:scale-110"
  style={{ color }}
/>

      <h3 className="mt-6 text-xl font-semibold">{name}</h3>
    </motion.div>
  );
}