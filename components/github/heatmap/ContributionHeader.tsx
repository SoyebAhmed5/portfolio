import {
  CalendarDays,
  GitCommitHorizontal,
} from "lucide-react";

interface Props {
  totalContributions: number;
}

export default function ContributionHeader({
  totalContributions,
}: Props) {
  return (
    <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <div className="flex items-end gap-3">

          <h2 className="text-6xl font-bold text-violet-400">
            {totalContributions}
          </h2>

          <span className="pb-2 text-xl text-zinc-400">
            Contributions
          </span>

        </div>

        <p className="mt-2 text-zinc-500">
          Last 12 Months
        </p>

      </div>

      <div className="flex gap-4">

        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">

          <CalendarDays className="mb-2" size={18} />

          <p className="text-sm text-zinc-500">
            Period
          </p>

          <p className="font-semibold">
            52 Weeks
          </p>

        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">

          <GitCommitHorizontal className="mb-2" size={18} />

          <p className="text-sm text-zinc-500">
            Source
          </p>

          <p className="font-semibold">
            GitHub API
          </p>

        </div>

      </div>

    </div>
  );
}