import { ArrowUpRight } from "lucide-react";

interface Props {
  href: string;
}

export default function ViewProfileButton({
  href,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-6
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        text-sm
        transition-all
        hover:bg-white/10
      "
    >
      View Profile

      <ArrowUpRight size={16} />
    </a>
  );
}