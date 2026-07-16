interface Props {
  label: string;
}

export default function PlatformBadge({ label }: Props) {
  return (
    <span
      className="
        rounded-full
        border
        border-white/10
        bg-white/5
        px-3
        py-1
        text-xs
        text-zinc-300
      "
    >
      {label}
    </span>
  );
}