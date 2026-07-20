import { Download } from "lucide-react";

export default function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-violet-600
        px-6
        py-3
        font-semibold
        transition-all
        hover:scale-105
        hover:bg-violet-500
        hover:shadow-[0_0_25px_rgba(139,92,246,0.45)]
      "
    >
      <Download size={18} />
      Resume
    </a>
  );
}