"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  icon: React.ElementType;
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
      <Icon size={55} color={color} className="transition duration-300 group-hover:scale-110" />

      <h3 className="mt-6 text-xl font-semibold">
        {name}
      </h3>
    </motion.div>
  );
}