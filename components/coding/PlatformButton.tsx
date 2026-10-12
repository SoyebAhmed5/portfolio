import { ArrowUpRight } from "lucide-react";

interface Props {
  href: string;
}

export default function PlatformButton({ href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-violet-700 hover:text-white dark:bg-white/10 dark:text-[var(--foreground)] dark:hover:bg-violet-500 dark:hover:text-white"
    >
      Visit Profile
      <ArrowUpRight size={16} />
    </a>
  );
}
