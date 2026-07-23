import {
 Laptop,
  Code2,
  Plane,
  Trophy,
  Cpu,
  BrainCircuit,
  Sparkles,
  GraduationCap
} from "lucide-react";

import { motion } from "framer-motion";

import { TimelineItemType } from "@/types/timeline";

interface Props {
  item: TimelineItemType;
  index: number;
}

const iconMap = {
  Laptop,
  Code2,
  Plane,
  Trophy,
  Cpu,
  BrainCircuit,
  Sparkles,
  GraduationCap
};
export default function TimelineItem({
  item,
  index,
}: Props) {
 const Icon =
  iconMap[item.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -40 : 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="relative pl-14 pb-12"
    >
      <div
        className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full"
        style={{
          backgroundColor: item.color,
        }}
      >
        <Icon
          size={20}
          className="text-white"
        />
      </div>

      <span className="text-sm text-zinc-500">
        {item.year}
      </span>

      <h3 className="mt-2 text-2xl font-bold">
        {item.title}
      </h3>

      <p className="font-medium text-violet-400">
        {item.organization}
      </p>

      <p className="mt-4 text-zinc-400 leading-7">
        {item.description}
      </p>
    </motion.div>
  );
}