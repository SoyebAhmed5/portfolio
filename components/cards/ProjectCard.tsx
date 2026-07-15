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
          className="h-full w-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 text-zinc-400 leading-7">
          {project.description}
        </p>

        {/* Tech */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.tech.map((item) => (

            <span
              key={item}
              className="rounded-full bg-violet-500/10 border border-violet-500/20 px-3 py-1 text-sm text-violet-300"
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
              className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 hover:bg-white/10 transition"
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
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-3 hover:bg-violet-500 transition"
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