import type { GithubStatistics } from "@/types/github";
import GithubStatCard from "./GithubStatCard";

interface Props {
  stats: GithubStatistics;
}

export default function GithubStats({
  stats,
}: Props) {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

      <GithubStatCard
        title="Repositories"
        value={stats.totalRepositories}
      />

      <GithubStatCard
        title="Stars"
        value={stats.totalStars}
      />

      <GithubStatCard
        title="Forks"
        value={stats.totalForks}
      />

      <GithubStatCard
        title="Top Language"
        value={stats.primaryLanguage}
      />

      <GithubStatCard
        title="Latest Update"
        value={new Date(stats.lastUpdated).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
})}
      />

    </div>
  );
}