"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

import PlatformButton from "./PlatformButton";
import PlatformBadge from "./PlatformBadge";

interface Props {
  title: string;
  username: string;
  description: string;
  href: string;
  color: string;
  Icon: IconType;
  badges: string[];
  index: number;
}

export default function PlatformCard({
  title,
  username,
  description,
  href,
  color,
  Icon,
  badges,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-br
        from-white/5
        to-white/[0.03]
        p-8
        backdrop-blur-xl
      "
    >
      {/* Background Glow */}
      <motion.div
        className="
          absolute
          -right-24
          -top-24
          h-56
          w-56
          rounded-full
          blur-3xl
          opacity-10
        "
        style={{
          backgroundColor: color,
        }}
        whileHover={{
          scale: 1.2,
          opacity: 0.18,
        }}
      />

      {/* Shine */}
      <div
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />

      <div className="relative z-10">

        <div className="flex items-center gap-4">

          <div
            className="rounded-2xl p-4"
            style={{
              backgroundColor: `${color}20`,
            }}
          >
            <Icon
              size={34}
              color={color}
            />
          </div>

          <div>

            <h3 className="text-2xl font-bold">
              {title}
            </h3>

            <p className="text-zinc-400">
              @{username}
            </p>

          </div>

        </div>

        <p className="mt-6 text-zinc-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {badges.map((badge) => (
            <PlatformBadge
              key={badge}
              label={badge}
            />
          ))}

        </div>

        <div className="mt-8">
          <PlatformButton href={href} />
        </div>

      </div>
    </motion.div>
  );
}