import { CalendarDays, GitCommitHorizontal } from "lucide-react";

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

          <span className="pb-2 text-lg text-zinc-400">
            Contributions
          </span>

        </div>

        <p className="mt-2 text-zinc-500">
          Last 12 Months
        </p>

      </div>

      <div className="flex gap-6">

        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">

          <div className="mb-2 flex items-center gap-2">

            <CalendarDays size={18} />

            <span className="text-sm text-zinc-400">
              Period
            </span>

          </div>

          <p className="font-semibold">
            52 Weeks
          </p>

        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">

          <div className="mb-2 flex items-center gap-2">

            <GitCommitHorizontal size={18} />

            <span className="text-sm text-zinc-400">
              Source
            </span>

          </div>

          <p className="font-semibold">
            GitHub GraphQL
          </p>

        </div>

      </div>

    </div>
  );
}