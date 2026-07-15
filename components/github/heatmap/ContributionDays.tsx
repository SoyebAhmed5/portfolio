import { DAYS } from "@/lib/githubHeatmap";

export default function ContributionDays() {
  return (
    <div className="mr-3 flex flex-col gap-1 text-[11px] text-zinc-500">

      {DAYS.map((day, index) => (
        <div
          key={index}
          className="h-4"
        >
          {day}
        </div>
      ))}

    </div>
  );
}