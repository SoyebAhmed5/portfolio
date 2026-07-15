"use client";

import { motion } from "framer-motion";
import { GithubLanguage } from "@/types/github";

interface Props {
  language: GithubLanguage;
}

export default function LanguageBar({
  language,
}: Props) {
  return (
    <div className="space-y-2">

      <div className="flex justify-between">

        <span className="font-medium">
          {language.name}
        </span>

        <span className="text-zinc-400">
          {language.percentage}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${language.percentage}%`,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="h-full rounded-full bg-violet-500"
        />

      </div>

    </div>
  );
}