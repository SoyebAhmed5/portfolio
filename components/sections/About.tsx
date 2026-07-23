"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    icon: Code2,
    value: "15+",
    label: "Projects",
  },
  {
    icon: Brain,
    value: "400+",
    label: "DSA Problems",
  },
  {
    icon: Briefcase,
    value: "3+",
    label: "Internship",
  },
  {
    icon: GraduationCap,
    value: "B.Tech",
    label: "CSE",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center text-5xl font-bold"
        >
          About Me
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
          <div className="relative mx-auto mb-8 h-56 w-56 overflow-hidden rounded-full border border-violet-500/30 bg-gradient-to-br from-violet-600/30 to-cyan-500/30">
  <Image
  src="/profile.jpeg"
  alt="Soyeb Ahmed"
  fill
  priority
  sizes="224px"
  className="object-cover"
/>
</div>

            <h3 className="text-center text-3xl font-bold">
              Soyeb Ahmed
            </h3>

            <p className="mt-4 text-center text-zinc-400">
              Full Stack Developer • AI Enthusiast • Software Engineer
            </p>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-3xl font-bold">
              Who am I?
            </h3>

            <p className="leading-8 text-zinc-300">
              I'm a passionate Full Stack Developer and AI enthusiast,
              currently pursuing B.Tech in Computer Science.
              I enjoy building scalable web applications, AI-powered
              solutions, and solving challenging DSA problems.

              My goal is to become a Software Engineer who builds
              impactful products that solve real-world problems.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              {stats.map((item) => (
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <item.icon className="mb-4 h-8 w-8 text-violet-400" />

                  <h4 className="text-3xl font-bold">
                    {item.value}
                  </h4>

                  <p className="text-zinc-400">
                    {item.label}
                  </p>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}