"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string | number;
}

export default function GithubStatCard({
  title,
  value,
}: Props) {
  const valueStr = String(value);

  const textSize =
    valueStr.length > 12
      ? "text-2xl"
      : valueStr.length > 8
      ? "text-3xl"
      : valueStr.length > 5
      ? "text-4xl"
      : "text-5xl";

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <p className="text-zinc-400">{title}</p>

      <h2
        className={`mt-4 font-bold text-violet-400 break-words ${textSize}`}
      >
        {value}
      </h2>
    </motion.div>
  );
}