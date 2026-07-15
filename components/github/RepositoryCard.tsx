"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  GitFork,
  ArrowUpRight,
  Calendar,
} from "lucide-react";

import type { GithubRepository } from "@/types/github";
import { languageColors } from "@/lib/githubColors";

interface Props {
  repo: GithubRepository;
}

export default function RepositoryCard({
  repo,
}: Props) {
  const color =
    languageColors[repo.language ?? ""] ??
    "#8B5CF6";

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all"
    >
      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          {repo.name}
        </h2>

        <Link
          href={repo.html_url}
          target="_blank"
        >
          <ArrowUpRight />
        </Link>

      </div>

      <p className="mt-4 min-h-[60px] text-zinc-400">
        {repo.description ??
          "No description available."}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-5">

        {repo.language && (
          <div className="flex items-center gap-2">

            <span
              className="h-3 w-3 rounded-full"
              style={{
                background: color,
              }}
            />

            {repo.language}

          </div>
        )}

        <div className="flex items-center gap-2">

          <Star size={18} />

          {repo.stargazers_count}

        </div>

        <div className="flex items-center gap-2">

          <GitFork size={18} />

          {repo.forks_count}

        </div>

        <div className="flex items-center gap-2">

          <Calendar size={18} />

          {new Date(
            repo.updated_at
          ).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}

        </div>

      </div>

    </motion.div>
  );
}