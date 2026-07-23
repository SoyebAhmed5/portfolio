"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { Highlight } from "@/types/highlight";
import Link from "next/link";

interface Props {
  highlight: Highlight;
}

export default function HighlightCard({
  highlight,
}: Props) {
  const Icon = highlight.icon;

  return (
    <GlassCard className="group p-6 text-center">

      <motion.div
        whileHover={{
          rotate: 12,
          scale: 1.15,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/5"
      >
        <Icon
          size={34}
          color={highlight.color}
        />
      </motion.div>

      <h3 className="text-xl font-bold">
        {highlight.title}
      </h3>

      <p className="mt-2 text-zinc-400">
        {highlight.subtitle}
      </p>
      <Link
  href={highlight.link}
  target="_blank"
  rel="noopener noreferrer"
  className="
        mt-5
    inline-flex
    items-center
    justify-center
    rounded-lg
    border
    border-violet-500
    bg-violet-600/10
    px-4
    py-2
    text-sm
    font-medium
    text-violet-300
    transition-all
    duration-300
    hover:bg-violet-600
    hover:text-white
    hover:border-violet-600
    hover:shadow-lg
    hover:shadow-violet-500/30
  "
>
  View
</Link>
      

    </GlassCard>
  );
}