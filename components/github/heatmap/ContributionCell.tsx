"use client";

import { useState } from "react";

import ContributionTooltip from "./ContributionTooltip";

import { contributionLevelColor } from "@/lib/githubHeatmapColors";

import type { ContributionDay } from "@/types/contribution";

interface Props {
  day: ContributionDay;
}

export default function ContributionCell({
  day,
}: Props) {
  const [visible, setVisible] = useState(false);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <>
      <div
        onMouseEnter={(e) => {
          setVisible(true);

          setPosition({
            x: e.clientX + 15,
            y: e.clientY - 60,
          });
        }}
        onMouseMove={(e) => {
          setPosition({
            x: e.clientX + 15,
            y: e.clientY - 60,
          });
        }}
        onMouseLeave={() => setVisible(false)}
        className="rounded-[4px] transition-all duration-200 hover:scale-140 hover:ring-2 hover:ring-violet-500/60"
style={{
  width: "16px",
  height: "16px",
  backgroundColor: contributionLevelColor[day.contributionLevel],
}}
      />

      <ContributionTooltip
        visible={visible}
        x={position.x}
        y={position.y}
        date={day.date}
        count={day.contributionCount}
      />
    </>
  );
}