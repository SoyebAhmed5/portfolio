"use client";

import { motion } from "framer-motion";

import { projects } from "@/data/projects";

import FeaturedProject from "@/components/cards/FeaturedProject";
import ProjectCard from "@/components/cards/ProjectCard";

import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  const featured = projects.find((project) => project.featured);

  const others = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects that demonstrate my experience in Full Stack Development, AI integration, and problem solving."
        />

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <FeaturedProject project={featured} />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {others.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}