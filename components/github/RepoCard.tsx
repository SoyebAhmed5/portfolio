interface Props {
  repo: any;
}

export default function RepoCard({
  repo,
}: Props) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-500"
    >

      <h3 className="text-xl font-bold">

        {repo.name}

      </h3>

      <p className="mt-3 text-zinc-400">

        {repo.description}

      </p>

    </a>
  );
}