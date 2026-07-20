import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Globe } from "lucide-react";

const socials = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/SoyebAhmed5",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={20} />,
    href: "https://linkedin.com/in/soyebahmed2005",
    label: "LinkedIn",
  },
  {
    icon: <SiLeetcode size={20} />,
    href: "https://leetcode.com/u/Soyeb_Ahmed/",
    label: "LeetCode",
  },
  {
    icon: <Globe size={20} />,
    href: "https://codolio.com/profile/Soyeb_Ahmed",
    label: "Codolio",
  },
];

export default function FooterSocials() {
  return (
    <div>
      <h3 className="mb-5 font-semibold text-white">
        Connect
      </h3>

      <div className="flex gap-4">
        {socials.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            aria-label={item.label}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full
              border border-white/10
              bg-white/5
              transition-all
              hover:-translate-y-1
              hover:border-violet-500/40
              hover:bg-violet-500/10
            "
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}