"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className="
        flex h-12 w-12 items-center justify-center
        rounded-full
        border border-white/10
        bg-white/5
        transition-all
        hover:-translate-y-1
        hover:border-violet-500/40
        hover:bg-violet-500/10
      "
    >
      <ArrowUp size={20} />
    </button>
  );
}