import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="
        text-4xl
        font-black
        tracking-tight
        transition-colors
        hover:text-violet-400
      "
    >
      Soyeb<span className="text-violet-500">.</span>
    </Link>
  );
}