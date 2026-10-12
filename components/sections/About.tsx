"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Briefcase, GraduationCap } from "lucide-react";

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

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-3xl font-bold">
              Who am I?
            </h3>

            <p className="leading-8 text-[var(--foreground)]">
              I am a Full Stack Developer specializing in building scalable, user-focused web applications, with a strong interest in AI/ML and Data Science. Skilled in React.js, Next.js, JavaScript, Python, and backend technologies, I develop practical solutions that address real-world problems. My achievements include solving 400+ coding problems, ranking in the top 9.33% of LeetCode users, and scoring in the 98.52 percentile in Naukri Campus Young Turks 2025. With hands-on experience across multiple internships and leadership as a GeeksforGeeks Campus Representative, I am focused on delivering impactful software solutions.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              {stats.map((item) => (
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  key={item.label}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm backdrop-blur-xl"
                >
                  <item.icon className="mb-4 h-8 w-8 text-violet-400" />

                  <h4 className="text-3xl font-bold">
                    {item.value}
                  </h4>

                  <p className="text-[var(--muted)]">
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