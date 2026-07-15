import type { ContributionCalendar } from "@/types/contribution";

export const CELL_SIZE = 16;
export const CELL_GAP = 4;

export interface MonthLabel {
  month: string;
  weekIndex: number;
}

export function getMonthLabels(
  calendar: ContributionCalendar
): MonthLabel[] {
  const labels: MonthLabel[] = [];

  let lastMonth = "";

  calendar.weeks.forEach((week, weekIndex) => {
    const date = new Date(week.contributionDays[0].date);

    const month = date.toLocaleString("en-US", {
      month: "short",
    });

    if (month !== lastMonth) {
      labels.push({
        month,
        weekIndex,
      });

      lastMonth = month;
    }
  });

  return labels;
}

export const DAYS = [
  "",
  "Mon",
  "",
  "Wed",
  "",
  "Fri",
  "",
];