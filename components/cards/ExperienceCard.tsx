"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import { Experience } from "@/types/experience";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <GlassCard className="p-6 h-full">

      <div className="flex items-start gap-5">

        <Image
          src={experience.logo}
          alt={experience.company}
          width={60}
          height={60}
          className="rounded-xl bg-white p-2"
        />

        <div>

          <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-300">
            {experience.type}
          </span>

          <h3 className="mt-3 text-2xl font-bold">
            {experience.role}
          </h3>

          <p className="text-violet-400">
            {experience.company}
          </p>

          <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-400">

            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {experience.duration}
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {experience.location}
            </span>

          </div>

        </div>

      </div>

      <ul className="mt-6 space-y-2">

        {experience.description.map((item) => (
          <li
            key={item}
            className="text-zinc-300 leading-7"
          >
            • {item}
          </li>
        ))}

      </ul>

    </GlassCard>
  );
}