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

  let previousMonth = "";

  calendar.weeks.forEach((week, weekIndex) => {
    const firstDay = week.contributionDays[0];

    const month = new Date(firstDay.date).toLocaleString("en-US", {
      month: "short",
    });

    if (month !== previousMonth) {
      labels.push({
        month,
        weekIndex,
      });

      previousMonth = month;
    }
  });

  return labels;
}

export function getWeekWidth() {
  return CELL_SIZE + CELL_GAP;
}