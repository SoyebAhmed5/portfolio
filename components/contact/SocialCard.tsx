import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
}

export default function SocialCard({
  title,
  subtitle,
  href,
  icon,
}: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        transition-all
        hover:-translate-y-1
        hover:border-violet-500/40
        hover:bg-white/10
      "
    >
      <div className="flex items-center gap-4">
        <div className="text-violet-400">{icon}</div>

        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-zinc-400">{subtitle}</p>
        </div>
      </div>

      <ArrowUpRight size={18} />
    </Link>
  );
}