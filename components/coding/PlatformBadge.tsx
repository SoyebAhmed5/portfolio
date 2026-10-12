interface Props {
  label: string;
}

export default function PlatformBadge({ label }: Props) {
  return (
    <span
      className="rounded-full border border-violet-600/30 bg-violet-600 px-3 py-1 text-xs font-medium text-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
    >
      {label}
    </span>
  );
}
