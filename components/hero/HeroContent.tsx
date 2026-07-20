"use client";

import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span
          className="
            inline-flex
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/10
            px-4
            py-2
            text-sm
            text-violet-300
          "
        >
          🚀 Available for Internships & Full-Time Opportunities
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-lg text-zinc-400"
      >
        Hi, I'm
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="
          mt-2
          text-6xl
          font-black
          leading-tight
          md:text-7xl
        "
      >
        Soyeb Ahmed
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="
          mt-6
          text-2xl
          font-semibold
          text-violet-400
        "
      >
        Full Stack Developer · AI & ML Enthusiast
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="
          mt-6
          max-w-xl
          text-lg
          leading-8
          text-zinc-400
        "
      >
        Building scalable full-stack applications and AI-powered solutions that solve real-world problems.
      </motion.p>

      <HeroButtons />

      <HeroSocials />

    </div>
  );
}