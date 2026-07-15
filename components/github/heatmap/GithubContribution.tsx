import type {
  ContributionCalendar,
} from "@/types/contribution";

import ContributionHeader from "./ContributionHeader";

import ContributionGrid from "./ContributionGrid";

import ContributionLegend from "./ContributionLegend";

interface Props {
  calendar: ContributionCalendar;
}

export default function GithubContribution({
  calendar,
}: Props) {
  return (
    <section
      className="
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
      />

      <ContributionLegend />

    </section>
  );
}