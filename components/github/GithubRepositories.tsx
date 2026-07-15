import type { GithubRepository } from "@/types/github";

import RepositoryCard from "./RepositoryCard";

interface Props {
  repositories: GithubRepository[];
}

export default function GithubRepositories({
  repositories,
}: Props) {
  return (
    <section className="mt-16">

      <h2 className="mb-10 text-3xl font-bold">
        Featured Repositories
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">

        {repositories.map((repo) => (
          <RepositoryCard
            key={repo.id}
            repo={repo}
          />
        ))}

      </div>

    </section>
  );
}