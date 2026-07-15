"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import SkillCard from "../cards/SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center text-5xl font-bold"
        >
          Tech Stack
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              {...skill}
            />
          ))}

        </div>
      </div>
    </section>
  );
}