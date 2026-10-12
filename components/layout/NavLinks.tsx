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
  { name: "Certificates", href: "#certificates" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function NavLinks() {
  const active = useActiveSection();
  return (
    <div className="hidden items-center gap-0.5 xl:flex 2xl:gap-1">
      {links.map((link) => {
        const id = link.href.slice(1);
        const isActive = active === id;
        return <Link key={link.href} href={link.href} aria-current={isActive ? "location" : undefined} className={`relative whitespace-nowrap rounded-full px-2 py-2 text-xs font-semibold transition-colors 2xl:px-2.5 2xl:text-sm ${isActive ? "text-violet-700 dark:text-violet-300" : "text-[var(--nav-text)] hover:text-[var(--foreground)]"}`}>
          {link.name}
          {isActive && <motion.span layoutId="active-nav" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-violet-500" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
        </Link>;
      })}
    </div>
  );
}
