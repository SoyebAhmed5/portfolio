"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import useActiveSection from "@/hooks/useActiveSection";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function NavLinks() {
  const active = useActiveSection();

  return (
    <div className="hidden items-center gap-8 md:flex">
      {links.map((link) => {
        const id = link.href.replace("#", "");
        const isActive = active === id;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`relative py-2 transition-colors duration-300 ${
              isActive
                ? "text-violet-400"
                : "text-zinc-300 hover:text-white"
            }`}
          >
            {link.name}

            {isActive && (
              <motion.span
                layoutId="active-nav"
                className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-violet-500"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}