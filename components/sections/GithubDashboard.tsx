import SectionHeading from "@/components/ui/SectionHeading";
import GithubLanguages from "@/components/github/GithubLanguages";

import {
  calculateLanguages,
} from "@/lib/github";
import GithubProfileCard from "@/components/github/GithubProfileCard";
import GithubStats from "@/components/github/GithubStats";

import {
  getGithubUser,
  getGithubRepositories,
  calculateGithubStats,
} from "@/lib/github";

import GithubContribution from "@/components/github/heatmap/GithubContribution";

import { getContributionCalendar } from "@/lib/github-graphql";

import GithubRepositories from "@/components/github/GithubRepositories";

export default async function GithubDashboard() {

  const user = await getGithubUser();

  const repos = await getGithubRepositories();

const languages = calculateLanguages(repos);

  const stats = calculateGithubStats(repos);

  const contribution = await getContributionCalendar();

const calendar =
  contribution?.data?.user?.contributionsCollection?.contributionCalendar;

if (!calendar) {
  return (
    <section className="py-32">
      <p className="text-center text-red-500">
        Unable to load GitHub contributions.
      </p>
    </section>
  );
}
  
  return (
    <section
      id="github"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          title="GitHub Dashboard"
          subtitle="Live GitHub analytics powered by GitHub API."
        />

        <GithubProfileCard user={user} />

        <GithubStats stats={stats} />

        <GithubLanguages languages={languages} />

        <GithubRepositories
    repositories={repos
        .filter((repo) => !repo.fork)
        .slice(0, 6)}
/>

<GithubContribution
  calendar={calendar}
/>

      </div>
    </section>
  );
}