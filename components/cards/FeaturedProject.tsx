"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import GlassCard from "@/components/ui/GlassCard";
import { Project } from "@/types/projects";

interface Props {
  project: Project;
}

export default function FeaturedProject({ project }: Props) {
  return (
    <GlassCard className="overflow-hidden">

      <div className="grid lg:grid-cols-2">

        {/* Image */}

        <div className="relative h-[400px]">

          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover"
          />

        </div>

        {/* Content */}

        <div className="flex flex-col justify-center p-10">

          <motion.h3
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            {project.title}
          </motion.h3>

          <p className="mt-6 leading-8 text-zinc-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-violet-500 bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm dark:border-violet-500/40 dark:bg-violet-500/20 dark:text-violet-100"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="mt-10 flex gap-4">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:border-violet-600 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-500/20"
              >
                <FaGithub  size={18} />
                Github 
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-500 hover:text-white"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}

          </div>

        </div>

      </div>

    </GlassCard>
  );
}