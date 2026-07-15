"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { Highlight } from "@/types/highlight";

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

    </GlassCard>
  );
}