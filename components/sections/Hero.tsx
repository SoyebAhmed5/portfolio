"use client";

import HeroContent from "@/components/hero/HeroContent";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-16 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.15fr_.85fr] lg:pt-28">
        <HeroContent />

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
        >
          <div aria-hidden="true" className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-500/25 via-transparent to-cyan-500/25 blur-2xl" />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-2xl shadow-violet-950/10">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src="/profile.jpeg"
                alt="Soyeb Ahmed, Full Stack Developer"
                fill
                priority
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 420px"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 w-max max-w-[calc(100%-1rem)] -translate-x-1/2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-center shadow-lg backdrop-blur-xl sm:bottom-5 sm:left-auto sm:right-[-1rem] sm:translate-x-0">
            <p className="text-sm font-semibold text-[var(--foreground)]">Soyeb Ahmed</p>
            <p className="mt-0.5 text-xs text-[var(--muted)]">Full Stack Developer · AI/ML</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
