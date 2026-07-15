"use client";

import { useState } from "react";

import type {
  ContributionCalendar,
  ContributionDay,
} from "@/types/contribution";

import ContributionHeader from "./ContributionHeader";
import ContributionGrid from "./ContributionGrid";
import ContributionLegend from "./ContributionLegend";
import ContributionTooltip from "./ContributionTooltip";

interface Props {
  calendar: ContributionCalendar;
}

export default function GithubContribution({
  calendar,
}: Props) {
  const [hoveredDay, setHoveredDay] =
    useState<ContributionDay | null>(null);

  const [hoveredRect, setHoveredRect] =
    useState<DOMRect | null>(null);

  function handleHover(
    day: ContributionDay,
    rect: DOMRect
  ) {
    setHoveredDay(day);
    setHoveredRect(rect);
  }

  function handleLeave() {
    setHoveredDay(null);
    setHoveredRect(null);
  }

  return (
    <section
      className="
        relative
        mt-24
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-br
        from-white/5
        to-white/[0.03]
        p-12
        backdrop-blur-2xl
        shadow-2xl
      "
    >
      <ContributionHeader
        totalContributions={
          calendar.totalContributions
        }
      />

      <ContributionGrid
        calendar={calendar}
        onHover={handleHover}
        onLeave={handleLeave}
      />

      <ContributionLegend />

      <ContributionTooltip
        day={hoveredDay}
        rect={hoveredRect}
      />
    </section>
  );
}