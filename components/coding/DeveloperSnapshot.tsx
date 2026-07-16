import {
  Brain,
  Code2,
  Trophy,
  Sparkles,
} from "lucide-react";

const items = [
  {
    icon: Code2,
    text: "Full Stack Developer",
  },

  {
    icon: Brain,
    text: "AI & ML Enthusiast",
  },

  {
    icon: Trophy,
    text: "Campus Mantri @ GeeksforGeeks",
  },

  {
    icon: Sparkles,
    text: "Competitive Programmer",
  },
];

export default function DeveloperSnapshot() {
  return (
    <div className="grid gap-5 md:grid-cols-4">

      {items.map((item) => (
        <div
          key={item.text}
          className="
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-5
          backdrop-blur-xl
          "
        >
          <item.icon
            className="mb-4 text-violet-400"
            size={26}
          />

          <p className="text-sm text-zinc-300">
            {item.text}
          </p>
        </div>
      ))}

    </div>
  );
}