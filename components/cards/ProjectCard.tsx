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

export default function ProjectCard({ project }: Props) {
  return (
    <GlassCard className="overflow-hidden group">

      {/* Project Image */}

      <div className="relative h-56 overflow-hidden">

        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
            className="relative h-full w-full"
        >
          <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              className="object-cover"
            />
        </motion.div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-[var(--muted)]">
          {project.description}
        </p>

        {/* Tech */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.tech.map((item) => (

            <span
              key={item}
              className="rounded-full border border-violet-400 bg-violet-600 px-3 py-1 text-sm font-semibold text-white shadow-sm dark:border-violet-500/40 dark:bg-violet-500/20 dark:text-violet-100"
            >
              {item}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-3 text-[var(--foreground)] transition hover:border-violet-600 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-500/20"
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
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white transition hover:bg-violet-500 hover:text-white"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

        </div>

      </div>

    </GlassCard>
  );
}