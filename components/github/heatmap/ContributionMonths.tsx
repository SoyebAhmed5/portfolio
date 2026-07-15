import type { ContributionCalendar } from "@/types/contribution";

import {
  getMonthLabels,
  getWeekWidth,
} from "@/lib/githubHeatmap";

interface Props {
  calendar: ContributionCalendar;
}

export default function ContributionMonths({
  calendar,
}: Props) {
  const labels = getMonthLabels(calendar);

  const weekWidth = getWeekWidth();

  return (
    <div className="relative mb-3 h-5">

      {labels.map((label) => (
        <span
          key={`${label.month}-${label.weekIndex}`}
          className="absolute text-[11px] text-zinc-500"
          style={{
            left: `${label.weekIndex * weekWidth}px`,
          }}
        >
          {label.month}
        </span>
      ))}

    </div>
  );
}