import { ArrowUpRight } from "lucide-react";

export default function CodolioHero() {
  return (
    <div
      className="
      mt-14
      rounded-3xl
      border
      border-violet-500/20
      bg-gradient-to-br
      from-violet-500/10
      to-indigo-500/10
      p-10
      text-center
      "
    >
      <h2 className="text-4xl font-bold">
        Codolio Developer Profile
      </h2>

      <p className="mt-5 text-zinc-400">
        One place showcasing my complete competitive programming journey across multiple platforms.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">

        <span className="rounded-full border border-violet-600/20 bg-violet-600 px-4 py-2 text-sm font-medium text-white dark:border-transparent dark:bg-white/10 dark:text-[var(--foreground)]">
          LeetCode
        </span>

        <span className="rounded-full border border-violet-600/20 bg-violet-600 px-4 py-2 text-sm font-medium text-white dark:border-transparent dark:bg-white/10 dark:text-[var(--foreground)]">
          GeeksforGeeks
        </span>

        <span className="rounded-full border border-violet-600/20 bg-violet-600 px-4 py-2 text-sm font-medium text-white dark:border-transparent dark:bg-white/10 dark:text-[var(--foreground)]">
          HackerRank
        </span>

        <span className="rounded-full border border-violet-600/20 bg-violet-600 px-4 py-2 text-sm font-medium text-white dark:border-transparent dark:bg-white/10 dark:text-[var(--foreground)]">
          CodeChef
        </span>

      </div>

      <a
        href="https://codolio.com/profile/Soyeb_Ahmed"
        target="_blank"
        rel="noreferrer"
        className="
        mt-10
        inline-flex
        items-center
        gap-2
        rounded-xl
        bg-violet-600
        text-white
        px-6
        py-3
        font-semibold
        transition
        hover:bg-violet-500
        "
      >
        View Codolio Profile

        <ArrowUpRight size={18} />
      </a>
    </div>
  );
}