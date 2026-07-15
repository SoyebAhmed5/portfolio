import type { ContributionCalendar } from "@/types/contribution";

import { getMonthLabels } from "@/lib/githubHeatmap";

interface Props {
  calendar: ContributionCalendar;
}

export default function ContributionMonths({
  calendar,
}: Props) {
  const labels = getMonthLabels(calendar);

  return (
    <div className="relative mb-4 h-5">

      {labels.map((label) => (
        <span
          key={`${label.month}-${label.weekIndex}`}
          className="absolute text-[11px] text-zinc-500"
          style={{
            left: `${label.weekIndex * 20}px`,
          }}
        >
          {label.month}
        </span>
      ))}

    </div>
  );
}