import { ArrowRight, Download } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <a
        href="#projects"
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-violet-600
          text-white
          px-6
          py-3
          font-semibold
          transition-all
         hover:bg-violet-700 hover:shadow-[0_0_30px_rgba(139,92,246,0.45)]
        "
      >
        View Projects
        <ArrowRight size={18} />
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-6
          py-3
          font-semibold
          backdrop-blur-xl
          transition-all
          hover:border-violet-600
          hover:bg-violet-600
          hover:text-white
          hover:shadow-[0_0_30px_rgba(139,92,246,0.45)]
        "
      >
        <Download size={18} />
        Download Resume
      </a>

    </div>
  );
}