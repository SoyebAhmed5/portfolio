"use client";

import HeroCanvas from "../three/HeroCanvas";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <HeroCanvas />
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <div className="text-center z-10">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl font-black"
          >
            SOYEB AHMED
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-5 text-xl text-zinc-300"
          >
            Full Stack Developer • AI Enthusiast
          </motion.p>

        </div>

      </div>

    </section>
  );
}