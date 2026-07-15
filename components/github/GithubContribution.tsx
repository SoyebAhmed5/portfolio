
"use client";

import { motion } from "framer-motion";

import ContributionCell from "./ContributionCell";

import type { ContributionCalendar } from "@/types/contribution";
interface Props {
  calendar: ContributionCalendar;
}

export default function GithubContribution({
  calendar,
}: Props) {

const monthLabels: { month: string; index: number }[] = [];

let lastMonth = "";

calendar.weeks.forEach((week, index) => {
  const month = new Date(
    week.contributionDays[0].date
  ).toLocaleString("default", {
    month: "short",
  });

  if (month !== lastMonth) {
    monthLabels.push({
      month,
      index,
    });

    lastMonth = month;
  }
});
  return (
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
  className="
    mt-20
    rounded-3xl
    border
    border-white/10
    bg-gradient-to-br
    from-white/5
    to-white/[0.03]
    p-10
    backdrop-blur-2xl
    shadow-2xl
  "
>
      <h2 className="mb-8 text-3xl font-bold">
        Contribution Activity
      </h2>

      <div className="mb-10 flex flex-wrap items-center justify-between gap-6">

  <div>

    <div className="flex items-end gap-3">

  <h3 className="text-6xl font-bold text-violet-400">
    {calendar.totalContributions}
  </h3>

  <span className="pb-2 text-lg text-zinc-400">
    Contributions
  </span>

</div>

<p className="mt-2 text-zinc-500">
  Last 12 Months
</p>

  </div>

  <div className="flex gap-8">

    <div>

      <p className="text-3xl font-bold">
        {calendar.weeks.length}
      </p>

      <p className="text-zinc-500">
        Weeks
      </p>

    </div>

    <div>

      <p className="text-3xl font-bold">
        7
      </p>

      <p className="text-zinc-500">
        Days
      </p>

    </div>

  </div>

</div>

    <div className="relative mb-4 h-6">
  {monthLabels.map(({ month, index }) => (
    <span
     key={index}
      className="absolute text-xs text-zinc-500"
      style={{
        left: `${index * 23}px`,
      }}
    >
      {month}
    </span>
  ))}
</div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Heatmap */}
<div className="flex">

  <div className="mr-4 flex flex-col justify-around text-xs text-zinc-500">

    <span>Mon</span>

    <span>Wed</span>

    <span>Fri</span>

  </div>

  <div className="overflow-hidden">

    <div className="flex gap-[5px] mb-2">
  {calendar.weeks.map((week, index) => {
    const firstDay = week.contributionDays[0];
    const month = new Date(firstDay.date).toLocaleString("default", {
      month: "short",
    });

    const previousMonth =
      index > 0
        ? new Date(calendar.weeks[index - 1].contributionDays[0].date)
            .toLocaleString("default", { month: "short" })
        : "";

    return (
      <div
        key={index}
        className="w-[18px] text-[10px] text-zinc-500 text-center"
      >
        {month !== previousMonth ? month : ""}
      </div>
    );
  })}
</div>

  </div>

</div>
</motion.div>

<div className="mt-8 flex items-center justify-end gap-3 text-sm text-zinc-500">

  <span>Less</span>

  <div className="h-4 w-4 rounded bg-[#161B22]" />

  <div className="h-4 w-4 rounded bg-[#0E4429]" />

  <div className="h-4 w-4 rounded bg-[#006D32]" />

  <div className="h-4 w-4 rounded bg-[#26A641]" />

  <div className="h-4 w-4 rounded bg-[#39D353]" />

  <span>More</span>

</div>
    </motion.section>
  );
}