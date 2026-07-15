import type { GithubLanguage } from "@/types/github";
import { GithubRepository , GithubUser, GithubStatistics } from "@/types/github";

const USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME!;

const headers = {
  Accept: "application/vnd.github+json",
};

export async function getGithubUser(): Promise<GithubUser> {
  const response = await fetch(
    `https://api.github.com/users/${USERNAME}`,
    {
      headers,
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok)
    throw new Error("Failed to fetch GitHub user");

  return response.json();
}

export async function getGithubRepositories(): Promise<GithubRepository[]> {
  const response = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`,
    {
      headers,
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok)
    throw new Error("Failed to fetch repositories");

  return response.json();
}



export function calculateGithubStats(
  repos: GithubRepository[]
): GithubStatistics {

  let totalStars = 0;
  let totalForks = 0;

  const languages: Record<string, number> = {};

  repos.forEach((repo) => {

    totalStars += repo.stargazers_count;

    totalForks += repo.forks_count;

    if (repo.language) {
      languages[repo.language] =
        (languages[repo.language] || 0) + 1;
    }

  });

  const primaryLanguage =
    Object.entries(languages).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] ?? "N/A";

  const latestRepo = repos
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
    )[0];

  return {
    totalStars,
    totalForks,
    totalRepositories: repos.length,
    primaryLanguage,
    lastUpdated: latestRepo?.updated_at ?? "",
  };
}


export function calculateLanguages(
  repos: GithubRepository[]
): GithubLanguage[] {
  const map: Record<string, number> = {};

  repos.forEach((repo) => {
    if (!repo.language) return;

    map[repo.language] = (map[repo.language] || 0) + 1;
  });

  const total = Object.values(map).reduce(
    (sum, value) => sum + value,
    0
  );

  return Object.entries(map)
    .map(([name, count]) => ({
      name,
      count,
      percentage: Math.round((count / total) * 100),
    }))
    .sort((a, b) => b.count - a.count);
}