import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiLeetcode,
} from "react-icons/si";

import { Globe } from "lucide-react";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/SoyebAhmed5",
  },

  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/soyebahmed2005",
  },

  {
    icon: Globe,
    href: "https://codolio.com/profile/Soyeb_Ahmed",
  },

  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/Soyeb_Ahmed/",
  },
];

export default function HeroSocials() {
  return (
    <div className="mt-8 flex items-center gap-5">

      {socials.map((social, index) => {
        const Icon = social.icon;

        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
            rounded-xl
            p-2
            text-zinc-400
            transition-all
            hover:bg-white/10
            hover:text-violet-400
            hover:scale-110
            "
          >
            <Icon size={24} />
          </a>
        );
      })}

    </div>
  );
}